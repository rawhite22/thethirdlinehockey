import Link from 'next/link'
import WatchlistPlayer from '../components/WatchlistPlayer'

import { useWatchlistContext } from '../hooks/useWatchlistContext'
function WatchList() {
  const { watchlist, dispatch } = useWatchlistContext()
  if (watchlist.length === 0) {
    return (
      <main id='watchlist_page' className='watchlist_page_empty'>
        Watchlist is empty
        <div className='link_container'>
          <Link href={'/'}>Back to team select</Link>
        </div>
      </main>
    )
  }
  return (
    <main id='watchlist_page' className='watchlist_page'>
      <h4>Player</h4>
      <h4>FPG</h4>
      <h4>Remove</h4>
      {watchlist &&
        watchlist.map((player) => (
          <WatchlistPlayer
            key={player.playerID}
            player={player}
            watchlist={watchlist}
            dispatch={dispatch}
          />
        ))}
      <div className='link_container'>
        <Link href={'/'}>Back to team select</Link>
      </div>
    </main>
  )
}
export default WatchList
