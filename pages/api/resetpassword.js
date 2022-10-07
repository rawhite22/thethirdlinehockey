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
        { id: user.id },
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
          pass: 'papeaailjtblysls',
        },
      })
      const mailOptions = {
        from: 'thethirdlinefantasyhockey@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
          `http://localhost:3000/reset/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n',
      }
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error('there was an error: ', err)
        } else {
          console.log('here is the res: ', response)
        }
      })
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
      if (!user) {
        throw new Error('user not found')
      }
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(req.body.newPassword, salt)
      const updatedUser = await User.findOneAndUpdate(
        { id: user.id },
        { resetPasswordToken: null, password: passwordHash },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
}
