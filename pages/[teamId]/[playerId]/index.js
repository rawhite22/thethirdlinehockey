import GoalieStats from '../../../components/GoalieStats'
import PlayerInfo from '../../../components/PlayerInfo'
import SkaterStats from '../../../components/SkaterStats'
import { getPlayerInfo, getPlayerStats } from '../../../lib/nhl_api/players'

function PlayerPage({ info, stats }) {
  if (info.primaryPosition.code === 'G') {
    return (
      <main>
        <PlayerInfo info={info} />
        <GoalieStats stats={stats} />
      </main>
    )
  } else {
    return (
      <main>
        <PlayerInfo info={info} />
        <SkaterStats stats={stats} />
      </main>
    )
  }
}
export default PlayerPage

export async function getServerSideProps(context) {
  const { playerId } = context.params
  const playerInfo = await getPlayerInfo(playerId)
  const playerStats = await getPlayerStats(playerId)

  return {
    props: { info: playerInfo, stats: playerStats },
  }
}
