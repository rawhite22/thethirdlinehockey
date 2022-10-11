import axios from 'axios'
import WatchList from '../models/watchListModel'
import { mongoConnect, mongoDisconnect } from './mongoDB'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export const getWatchList = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return []
  }
  await mongoConnect()
  const watchlist = await WatchList.find().where({ user: session.user.id })

  await mongoDisconnect()
  return JSON.parse(JSON.stringify(watchlist))
}

export const handleWatchListClick = async (
  id,
  type,
  setWatchList,
  watchList
) => {
  switch (type) {
    case 'ADD':
      try {
        const res = await axios.post('/api/watchlist', { playerId: id })
        console.log(res.data)
        setWatchList((prevState) => [...prevState, { id: res.data.playerID }])
      } catch (error) {
        console.log(error)
        window.alert(error)
      }
      break
    case 'REMOVE':
      try {
        const res = await axios.put('/api/watchlist', { playerId: id })
        console.log(res.data)
        const updatedWatchList = watchList.filter(
          (person) => person.id !== res.data.playerID
        )
        setWatchList(updatedWatchList)
      } catch (error) {}
      break
    default:
      break
  }
}
