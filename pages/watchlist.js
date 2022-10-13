import WatchlistPlayer from '../components/WatchlistPlayer'

import { useWatchlistContext } from '../hooks/useWatchlistContext'
function WatchList() {
  const { watchlist, dispatch } = useWatchlistContext()
  if (watchlist.length === 0) {
    return (
      <main id='watchlist_page' className='watchlist_page_empty'>
        Watchlist is empty
      </main>
    )
  }
  return (
    <main id='watchlist_page' className='watchlist_page'>
      {watchlist &&
        watchlist.map((player) => (
          <WatchlistPlayer
            player={player}
            watchlist={watchlist}
            dispatch={dispatch}
          />
        ))}
    </main>
  )
}
export default WatchList
