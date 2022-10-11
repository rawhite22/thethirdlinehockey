import User from '../models/userModel'
import WatchList from '../models/watchListModel'
import { mongoConnect, mongoDisconnect } from './mongoDB'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
const getWatchList = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return []
  }
  await mongoConnect()
  const watchlist = await WatchList.find().where({ user: session.user.id })

  await mongoDisconnect()
  return JSON.parse(JSON.stringify(watchlist))
}
export { getWatchList }
