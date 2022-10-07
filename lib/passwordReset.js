import User from '../models/userModel'
import { mongoConnect, mongoDisconnect } from './mongoDB'
import { tokenIsValid } from './token'

const verifyToken = async (token) => {
  try {
    await mongoConnect()
    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
      },
    })
    console.log(user)
    if (!user) {
      await mongoDisconnect()
      throw new Error('User not found')
    }
    const isTokenValid = tokenIsValid(token)
    await mongoDisconnect()
    return isTokenValid
  } catch (error) {
    return { error: error.message }
  }
}

export { verifyToken }
