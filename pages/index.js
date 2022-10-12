import { teams } from '../data/teams'
import TeamSelect from '../components/TeamSelect'
import { useState } from 'react'
import TeamsFilterButton from '../components/buttons/TeamsFilterButton'

const tfb = [
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
        {tfb.map((button, index) => (
          <TeamsFilterButton
            teams={teams}
            setFilter={setFilteredTeams}
            title={button.title}
            division={button.div}
          />
        ))}
      </div>
      <div className='grid_system'>
        {filteredTeams.map((team) => (
          <TeamSelect key={team.id} team={team} />
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
