import nodemailer from 'nodemailer'
import { mongoConnect, mongoDisconnect } from '../../lib/mongoDB'
import { generateToken } from '../../lib/token'
import User from '../../models/userModel'
import bcrypt from 'bcryptjs'
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (!req.body.email) {
        throw new Error('Please enter a valid email.')
      }
      await mongoConnect()
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        throw new Error("Email doesn't exist")
      }
      const token = generateToken(user.id)
      const updatedUser = await User.findOneAndUpdate(
        { email: req.body.email },
        { resetPasswordToken: token },
        { new: true }
      )

      if (!updatedUser) {
        await mongoDisconnect()
        throw new Error('Could not update the user')
      }
      await mongoDisconnect()
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thethirdlinefantasyhockey@gmail.com',
          pass: process.env.GMAIL_PASSWORD,
        },
      })
      const mailOptions = {
        from: 'thethirdlinefantasyhockey@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you  have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
          `https://thethirdlinehockey.vercel.app/forgotpassword/${token}\n\n` +
          'If you did not request this, please login in and change your password to keep your account safe.\n',
      }
      let ts = await transporter.sendMail(mailOptions)
      if (ts.rejected.length > 0) {
        transporter.close()
        throw new Error('Email failed')
      }
      transporter.close()
      res.status(201).json({ updatedUser })
    } catch (error) {
      await mongoDisconnect()
      res.status(400).json(error.message)
    }
  }
  if (req.method === 'PUT') {
    try {
      if (!req.body.newPassword) {
        throw new Error('Please enter a password')
      }
      await mongoConnect()
      const user = await User.findById(req.body.id)
      console.log(user)
      if (!user) {
        throw new Error('user not found')
      }
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(req.body.newPassword, salt)
      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { resetPasswordToken: null, password: passwordHash },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
}
