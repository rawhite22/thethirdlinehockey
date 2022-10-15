import User from '../models/userModel'
import { mongoConnect, mongoDisconnect } from './mongoDB'

import { sign, verify } from 'jsonwebtoken'
const generateToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30min',
  })
}
const tokenIsValid = (token) => {
  const isValid = verify(token, process.env.JWT_SECRET)
  return isValid
}

const verifyToken = async (token) => {
  try {
    await mongoConnect()
    const isTokenValid = tokenIsValid(token)
    const user = await User.findById(isTokenValid.id)
    console.log(user)
    if (!user) {
      await mongoDisconnect()
      throw new Error('User not found')
    }

    await mongoDisconnect()
    return isTokenValid
  } catch (error) {
    return { error: error.message }
  }
}

export { generateToken, tokenIsValid, verifyToken }
