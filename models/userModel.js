import { Schema, model, models } from 'mongoose'
const UserSchema = Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    resetPasswordToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = models.User || model('User', UserSchema)

export default User
