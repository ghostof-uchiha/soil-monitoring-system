const User = require('../models/user.models');
const OTP = require('../models/OTP.models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { cloudinary } = require('../utils/cloudinary');
const sizeOf = require('image-size');
const e = require('cors');
const sharp = require('sharp');
const { Readable } = require('stream');
const { log } = require('console');

function extractPublicIdFromImageUrl(imageUrl) {
  // Regular expression pattern to match Cloudinary public ID
  const regex = /\/v\d+\/(?:[^/]+\/)?([^./]+)\.\w+$/;
  const match = imageUrl.match(regex);
  
  if (match && match.length > 1) {
    const publicIdWithSpaces = match[1].replace(/%20/g, ' ');

    // The public ID is the first capturing group from the regex match
    return publicIdWithSpaces;
  }

  // Return null if no match is found
  return null;
}



const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email, mobileNumber, bio } = req.body;

    const updatedFields = {};

    // Handle profile image upload if provided
    if (req.file) {
      const { buffer } = req.file;

      // Resize and compress the image using sharp
      const optimizedImageBuffer = await sharp(buffer)
        .resize({ width: 800, height: 800, fit: 'inside' }) // Resize the image to a maximum of 800x800
        .toBuffer();

      // Check if the user already has a profile image and delete it from Cloudinary
      const user = await User.findById(userId);
      if (user && user.profileImage) {
        cloudinary.uploader.destroy(`agroApiProfile/${user._id}`)
          .then(result => console.log(result))
          .catch(error => console.error('Error deleting old profile image:', error));
      }

      // Upload the new profile image to Cloudinary
      const uploadResponse = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'agroApiProfile', // Specify your desired folder in Cloudinary
            upload_preset: 'agroApiProfile', // Specify your upload preset
            public_id: userId, // Use unique identifier like user ID for Cloudinary's public_id
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

        const optimizedImageStream = new Readable();
        optimizedImageStream.push(optimizedImageBuffer);
        optimizedImageStream.push(null);
        optimizedImageStream.pipe(stream);
      });

      const { secure_url } = uploadResponse;
      updatedFields.profileImage = secure_url;
    }

    // Update other fields if provided
    if (name) updatedFields.name = name;
    if (bio) updatedFields.bio = bio;
    if (email) updatedFields.email = email;
    if (mobileNumber) updatedFields.mobileNumber = mobileNumber;
    updatedFields.userId = userId;

    // Perform the update operation and get the updated user
    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Successfully updated', 
    userId: updatedUser._id,
    name: updatedUser?.name,
    email: updatedUser?.email,
    mobileNumber: updatedUser?.mobileNumber,
    bio: updatedUser?.bio,
    profileImage: updatedUser?.profileImage, });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Error updating user profile' });
  }
};




const deleteProfileImage = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (user && user.profileImage) {
      const publicId = extractPublicIdFromImageUrl(user.profileImage);
      if (publicId) {
        const result = await cloudinary.uploader.destroy(`agroApiProfile/${publicId}`);
        // Check if the image was successfully deleted
        if (result.result === 'ok') {
          res.status(200).json({ message: 'Image deleted successfully' });
        } else {
          res.status(400).json({ error: 'Failed to delete image' });
        }
      } else {
        res.status(400).json({ error: 'Invalid Image URL' });
      }
    } else {
      res.status(400).json({ error: 'There is no Image associated with the user' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting the image' });
  }
};



module.exports = {
  updateUserProfile,
  deleteProfileImage,
};