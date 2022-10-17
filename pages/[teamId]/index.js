import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCaretUp,
  faCircleCaretLeft,
} from '@fortawesome/pro-solid-svg-icons'
import { useState, useEffect } from 'react'
import Roster from '../../components/Roster'
import TeamInfo from '../../components/TeamInfo'
import TeamStats from '../../components/TeamStats'
import { getTeam, getTeamRoster, getTeamStats } from '../../lib/nhl_api/teams'
import { getWatchList } from '../../lib/watchlist'
import Link from 'next/link'
import HeadComponent from '../../components/HeadComponent'

function TeamPage({ team, stats, roster, watchList }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])
  return (
    <main id='team_page' className='team_page'>
      <HeadComponent title={`3L | ${team.name}`} />
      <div className='teams_link'>
        <Link href='/'>Back to Teams</Link>
      </div>
      <TeamInfo info={team} />
      <TeamStats stats={stats} />
      <Roster roster={roster} watchList={watchList} />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={scrollPosition > 550 ? 'icon' : 'icon-disabled'}>
        <FontAwesomeIcon icon={faCircleCaretUp} />
      </div>
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
