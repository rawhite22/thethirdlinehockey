import { getPlayerStats } from '../lib/nhl_api/players'
import { getWatchList } from '../lib/watchlist'

function WatchList({ watching }) {
  if (watching.length === 0) {
    return <div>Watchlist is empty</div>
  }
  return (
    <div>
      {watching.map((player) => (
        <p>{player.playerName}</p>
      ))}
    </div>
  )
}
export default WatchList

export async function getServerSideProps(context) {
  const watching = await getWatchList(context.req, context.res)

  return {
    props: { watching },
  }
}
