import Link from 'next/link'
import { useRouter } from 'next/router'
import GoalieStats from '../../../components/GoalieStats'
import PlayerInfo from '../../../components/PlayerInfo'
import SkaterStats from '../../../components/SkaterStats'
import { getPlayerInfo, getPlayerStats } from '../../../lib/nhl_api/players'

function PlayerPage({ info, stats }) {
  const { query } = useRouter()
  console.log(query)
  return (
    <main className='player_page'>
      <div className='team_link'>
        <Link href={`/${query.teamId}`}>Back to Team</Link>
      </div>
      <PlayerInfo info={info} />
      {info.primaryPosition.code === 'G' ? (
        <GoalieStats stats={stats} />
      ) : (
        <SkaterStats stats={stats} />
      )}
    </main>
  )
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
