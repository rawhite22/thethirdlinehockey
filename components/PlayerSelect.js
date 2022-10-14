import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useWatchlistContext } from '../hooks/useWatchlistContext'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faStar } from '@fortawesome/pro-solid-svg-icons'

function PlayerSelect({ player, index }) {
  let selectedIndex = index
  const { watchlist, dispatch, watchlistError } = useWatchlistContext()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
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
          if (selectedIndex === index) {
            setError(true)
            setTimeout(() => {
              setError(null)
            }, [2000])
          }
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
        }
        break
      default:
        break
    }
  }
  return (
    <div className='player_select'>
      <h3>{player.name}</h3>
      {loading ? (
        <FontAwesomeIcon spin icon={faSpinner} color='dodgerblue' size='2x' />
      ) : (
        <div className='link_container'>
          <Link href={`${asPath}/${player.id}`}>
            <a
              onClick={() => {
                if (selectedIndex === index) {
                  setLoading(true)
                }
              }}>
              Stats & Info
            </a>
          </Link>
        </div>
      )}
      {session ? (
        watching.length > 0 ? (
          <button
            className='watchlist-btn'
            onClick={() => handleWatchListClick(player.id, 'REMOVE')}>
            Remove from Watch List
          </button>
        ) : (
          <button
            className='watchlist-btn'
            onClick={() => handleWatchListClick(player.id, 'ADD')}>
            Add to Watch List
          </button>
        )
      ) : null}
      {error && <p>Watch List Full</p>}
    </div>
  )
}
export default PlayerSelect
