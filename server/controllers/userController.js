const User = require('../models/UserModel');
const OTP = require('../models/OTPSchema');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { cloudinary } = require('../utils/cloudinary');
const sizeOf = require('image-size');
const e = require('cors');
const sharp = require('sharp');
const { Readable } = require('stream'); 


const registerUser = async (req, res) => {
  const { emailOrMobile, password, name, confirmpassword } = req.body;

  if (password === confirmpassword) {

    try {
      // Determine whether emailOrMobile is an email or a mobile number
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
      const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);

      const existingUser = isEmail
        ? await User.findOne({ email: emailOrMobile })
        : isMobileNumber
          ? await User.findOne({ mobileNumber: emailOrMobile })
          : null;

      if (existingUser) {
        return res.status(400).json({ message: 'Email or mobile number is already registered' });
      }

      let newUser;

      if (isEmail) {
        newUser = new User({
          name: name,
          email: emailOrMobile,
          password: password, // Hash the password and assign it directly
        });
      } else if (isMobileNumber) {
        newUser = new User({
          name: name,
          mobileNumber: emailOrMobile,
          password: password, // Hash the password and assign it directly
        });
      } else {
        return res.status(400).json({ message: 'Invalid email or mobile number format' });
      }

      await newUser.save(); // Save the user to the database
      // Delete the verified OTP after user registration

      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      await OTP.deleteOne({ _id: req.verifiedOTP._id });

      return res.status(200).json({
        message: "User Created successfully",
        token, userId: newUser._id,
        name: newUser?.name,
        email: newUser?.email,
        mobileNumber: newUser?.mobileNumber,
        profileImage: existingUser?.profileImage,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ message: 'Password do not match' });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;
    // Determine whether emailOrMobile is an email or a mobile number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
    const isMobileNumber = /^[0-9]{10}$/.test(emailOrMobile);
    // Find the user by username

    if (isEmail || isMobileNumber) {
      const existingUser = isEmail
        ? await User.findOne({ email: emailOrMobile })
        : isMobileNumber
          ? await User.findOne({ mobileNumber: emailOrMobile })
          : null;

      // If the user does not exist, send an error response
      if (!existingUser) {
        return res.status(401).json({ message: 'Invalid Id or password' });
      }


      bcrypt.compare(password, existingUser.password, function (err, result) {
        if (err) {
          return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result) {
          // Send JWT and user ID
          const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
          return res.status(200).json({
            message: 'Logged in successfully',
            token, userId: existingUser._id,
            name: existingUser?.name,
            email: existingUser?.email,
            mobileNumber: existingUser?.mobileNumber,
            bio: existingUser?.bio,
            profileImage: existingUser?.profileImage,
          });
        } else {
          return res.status(401).json({ message: 'Invalid Id or password' });
        }
      });
    } else {
      return res.status(401).json({ status: 401, message: 'Invalid email or mobile number' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update User Data


const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email, mobileNumber, bio } = req.body;
    const { buffer } = req.file;

    const updatedFields = {};
    // Resize and compress the image using sharp
    const optimizedImageBuffer = await sharp(buffer)
      .resize({ width: 800, height: 800, fit: 'inside' }) // Resize the image to a maximum of 800x800
      .toBuffer();

    // Handle profile image upload if provided
    const uploadResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'agroApiProfile', // Specify your desired folder in Cloudinary
          upload_preset: 'agroApiProfile', // Specify your upload preset
        },
        (error, result) => {
          if (error) {
            console.error('Error uploading image to Cloudinary:', error);
            reject('Failed to upload profile image');
          } else {
            resolve(result);
          }
        }
      );

      // Pipe the optimized image buffer to Cloudinary uploader
      const optimizedImageStream = new Readable();
      optimizedImageStream.push(optimizedImageBuffer);
      optimizedImageStream.push(null);
      optimizedImageStream.pipe(stream);
    });

    // Handle successful upload
    const { secure_url } = uploadResponse;
    // Rest of your code...

    // Update other fields if provided
    if (name) updatedFields.name = name;
    if (bio) updatedFields.bio = bio;
    if (email) updatedFields.email = email;
    if (mobileNumber) updatedFields.mobileNumber = mobileNumber;
    if (secure_url) updatedFields.profileImage = secure_url;

    // Perform the update operation and get the updated user
    const user = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      message: 'Successfully updated',
      userId: user._id,
      name: user?.name,
      email: user?.email,
      mobileNumber: user?.mobileNumber,
      bio: user?.bio,
      profileImage: user?.profileImage,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user profile' });
  }
};




module.exports = {
  registerUser,
  LoginUser,
  updateUserProfile,
};
