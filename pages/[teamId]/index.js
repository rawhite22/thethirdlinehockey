import { useState } from 'react'
import RosterFilterButton from '../../components/buttons/RosterFilterButton'

import Roster from '../../components/Roster'
import TeamInfo from '../../components/TeamInfo'
import TeamStats from '../../components/TeamStats'
import { getTeam, getTeamRoster, getTeamStats } from '../../lib/nhl_api/teams'
import { getWatchList } from '../../lib/watchlist'

function TeamPage({ team, stats, roster, watchList }) {
  return (
    <main>
      <TeamInfo info={team} />
      <TeamStats stats={stats} />
      <Roster roster={roster} watchList={watchList} />
    </main>
  )
}
export default TeamPage

export async function getServerSideProps(context) {
  const team = await getTeam(context.params.teamId)
  const teamStats = await getTeamStats(context.params.teamId)
  const roster = await getTeamRoster(context.params.teamId)
  const watchList = await getWatchList(context.req, context.res)

  return {
    props: { team: team, stats: teamStats, roster: roster, watchList },
  }
}
