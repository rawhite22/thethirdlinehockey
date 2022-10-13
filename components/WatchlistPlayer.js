import { useWatchlistContext } from '../hooks/useWatchlistContext'
import axios from 'axios'
function WatchlistPlayer({ player, watchlist, dispatch }) {
  const handleWatchlistRemove = async (id) => {
    const res = await axios.put('/api/watchlist', { playerId: id })
    if (res.status === 200) {
      const updatedWatchList = watchlist.filter(
        (person) => person.playerID !== res.data.playerID
      )
      dispatch({ type: 'REMOVE_PLAYER', payload: updatedWatchList })
    }
  }
  return (
    <div className='watchlist_player_card'>
      <h3>{player.playerName}</h3>
      <p>{player.scoreAverage}</p>
      <button onClick={() => handleWatchlistRemove(player.playerID)}>
        Remove
      </button>

      {}
    </div>
  )
}
export default WatchlistPlayer
