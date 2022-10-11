import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { mongoConnect, mongoDisconnect } from '../../lib/mongoDB'
import WatchList from '../../models/watchListModel'
export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (req.method === 'POST') {
    try {
      const userId = session.user.id
      const { playerId, playerName, playerPos, playerTeamId } = req.body
      await mongoConnect()
      const watchlist = await WatchList.find().where({ user: userId })
      const alreadyWatching = watchlist.filter(
        (player) => player.playerID === playerId.toString()
      )
      if (alreadyWatching.length > 0) {
        await mongoDisconnect()
        throw new Error('Already Watching')
      } else {
        const newPlayer = await WatchList.create({
          user: userId,
          playerID: playerId,
          playerName,
          playerPos,
          playerTeamID: playerTeamId,
        })
        await mongoDisconnect()
        res.status(200).json(newPlayer)
      }
    } catch (error) {
      console.log(error)
      await mongoDisconnect()
      res.status(400).json({ error: error.message })
    }
  }
  if (req.method === 'PUT') {
    const userId = session.user.id
    const { playerId } = req.body
    await mongoConnect()
    const removedPlayer = await WatchList.findOneAndDelete().where({
      playerID: playerId.toString(),
      user: userId,
    })

    if (!removedPlayer) {
      res.status(400).json({ msg: 'player not found' })
    } else {
      res.status(200).json(removedPlayer)
    }
  }
}
