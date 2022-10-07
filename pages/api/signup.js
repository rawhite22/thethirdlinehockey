import { mongoConnect, mongoDisconnect } from '../../lib/mongoDB'
import User from '../../models/userModel'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, email } = req.body
      console.log(req.body)
      if (!username || !password || !email) {
        throw new Error('Missing credentials')
      }
      await mongoConnect()
      const userExists = await User.findOne({ email })
      if (userExists) {
        throw new Error('User Already Exists')
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await User.create({
        username,
        password: hashedPassword,
        email,
        resetPasswordToken: null,
      })
      await mongoDisconnect()
      res.status(201).json({ user })
    } catch (error) {
      await mongoDisconnect()
      console.log(error)
      res.status(400).json(error.message)
    }
  } else {
    res
      .status(400)
      .json({ msg: '"GET" requests are not authorized for this endpoint' })
  }
}
