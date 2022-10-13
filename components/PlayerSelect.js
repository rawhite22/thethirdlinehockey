import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useWatchlistContext } from '../hooks/useWatchlistContext'

function PlayerSelect({ player }) {
  const { watchlist, dispatch } = useWatchlistContext()
  const watching = watchlist.filter(
    (person) => person.playerID === player.id.toString()
  )
  const { data: session } = useSession()
  const { asPath, query } = useRouter()

  const handleWatchListClick = async (id, type) => {
    switch (type) {
      case 'ADD':
        try {
          const res = await axios.post('/api/watchlist', {
            playerId: id,
            playerName: player.name,
            playerPos: player.pos.type,
            playerTeamId: query.teamId,
          })
          if (res.status === 200) {
            dispatch({ type: 'ADD_PLAYER', payload: res.data })
          } else {
            throw new Error('Something wrong wrong in the request')
          }
        } catch (error) {
          console.log(error)
          window.alert(error)
        }
        break
      case 'REMOVE':
        try {
          const res = await axios.put('/api/watchlist', { playerId: id })
          if (res.status === 200) {
            const updatedWatchList = watchlist.filter(
              (person) => person.playerID !== res.data.playerID
            )
            dispatch({ type: 'REMOVE_PLAYER', payload: updatedWatchList })
          } else {
            throw new Error('Something went wrong in the request')
          }
        } catch (error) {
          console.error(error)
          window.alert(error)
        }
        break
      default:
        break
    }
  }
  return (
    <div className='player_select'>
      <h3>{player.name}</h3>
      <Link href={`${asPath}/${player.id}`}>Stats & Info</Link>
      {session ? (
        watching.length > 0 ? (
          <button onClick={() => handleWatchListClick(player.id, 'REMOVE')}>
            Remove from Watch List
          </button>
        ) : (
          <button onClick={() => handleWatchListClick(player.id, 'ADD')}>
            Add to Watch List
          </button>
        )
      ) : null}
    </div>
  )
}
export default PlayerSelect
