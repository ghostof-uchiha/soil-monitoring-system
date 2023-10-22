const User = require('../models/UserModel');
const OTP = require('../models/OTPSchema');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const { google } = require('googleapis');
const twilio = require('twilio');
const fast2sms = require('fast-two-sms');
require('dotenv').config();
const OAuth2 = google.auth.OAuth2


// EMAIL SERVICE SETUP
const id = process.env.GOOGLE_CLIENT_ID
const secret = process.env.GOOGLE_CLIENT_SECRET
const token = process.env.GOOGLE_CLIENT_TOKEN

const OAuth2_client = new OAuth2(id, secret)
OAuth2_client.setCredentials({ refresh_token: token })

const emailservice = async (email, otp, emailOrMobile, res) => {
  const accessToken = OAuth2_client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.NODEMAILER_USER,
      clientId: id,
      clientSecret: secret,
      refreshToken: token,
      accessToken: accessToken
    }

  });


  // Create email message
  const mailOptions = {
    from: `Agro-API <${process.env.NODEMAILER_USER}>`, // Your email address
    to: email,
    subject: 'OTP Verification',
    html: `
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Agro-API</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Agro-API. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
      <h2 style="background: #0be07d;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Agro-API</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Agro-API Inc</p>
        <p>Badi Koni Bilaspur</p>
        <p>Chhattisgarh</p>
      </div>
    </div>
  </div>
    `
  };

  try {
    // Send email with OTP
    await transporter.sendMail(mailOptions);
    const newOTP = new OTP({
      emailOrMobile: emailOrMobile,
      otp: otp,
    });

    await newOTP.save();
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send OTP' });
  }
}


// SMS SERVICE SETUP

const SMSaccountSid = process.env.TWILIO_SID;
const SMSauthToken = process.env.TWILIO_TOKEN;
const SMSNumber = process.env.TWILIO_NUMBER;
const SMSclient = new twilio(SMSaccountSid, SMSauthToken);



const smsservice = async (to, otp, req, res) => {
  console.log("running SMS service");
  SMSclient.messages
  .create({
    to: to,
    from: SMSNumber,
    body: `Your Agro-API verification OTP is: ${otp}`
  })
  .then(message => {
    return res.status(200).json({ message: 'OTP sent successfully' });
  })
  .catch(err =>{
    return res.status(400).json({ message: err});
  });

  // console.log(to);

  // var options = {
  //   authorization: process.env.FAST_TWO_SMS,
  //   message: `Your Agro-API varification OTP is: ${otp}`,
  //   numbers: [`${to}`]
  // }

  // fast2sms.sendMessage(options)
  //   .then((response) => {
  //     console.log(response);

  //     if (response.status === 'OK') {
  //       return res.status(200).json({ message: 'SMS sent successfully', data: response });
  //     } else {
  //       return res.status(400).json({ message: 'Failed to send SMS', data: response });
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return res.status(500).json({ message: 'Internal Server Error', error: err });
  //   });


}


const SendOtp = async (req, res) => {
  const { emailOrMobile } = req.body;

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

    if (existingUser) {
      return res.status(400).json({ message: 'Email or mobile number is already registered' });
    }
  }
  // Generate a 6-digit OTP
  const otp = `${otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })}`;


  if (isEmail) {
    emailservice(emailOrMobile, otp, emailOrMobile, res)
  } else {
    smsservice(emailOrMobile, otp, req, res)
  }
}


module.exports = {
  SendOtp
};