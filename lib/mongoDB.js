import mongoose from 'mongoose'

const mongoConnect = async () => await mongoose.connect(process.env.MONGO_URI)
const mongoDisconnect = async () => await mongoose.disconnect()

export { mongoConnect, mongoDisconnect }
