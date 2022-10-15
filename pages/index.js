import { teams } from '../data/teams'
import TeamSelect from '../components/TeamSelect'
import { useState } from 'react'
import TeamsFilterButton from '../components/buttons/TeamsFilterButton'

const filterDivisionData = [
  { div: 'atl', title: 'Atlantic' },
  { div: 'cen', title: 'Central' },
  { div: 'met', title: 'Metro' },
  { div: 'pac', title: 'Pacific' },
]

export default function Home({ teams }) {
  const [filteredTeams, setFilteredTeams] = useState(teams)
  return (
    <main id='home_page' className='home_page'>
      <div className='filter_teams_container'>
        {filterDivisionData.map((button, index) => (
          <TeamsFilterButton
            key={index}
            teams={teams}
            setFilter={setFilteredTeams}
            title={button.title}
            division={button.div}
          />
        ))}
      </div>
      <div className='grid_system'>
        {filteredTeams.map((team, index) => (
          <TeamSelect key={team.id} team={team} index={index} />
        ))}
      </div>
    </main>
  )
}

export function getStaticProps() {
  return {
    props: { teams },
  }
}
