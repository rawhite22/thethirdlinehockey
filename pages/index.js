import { teamColors } from '../data/teams'
import TeamSelect from '../components/TeamSelect'
export default function Home({ teamColors }) {
  return (
    <div>
      {teamColors.map((team) => (
        <TeamSelect key={team.id} team={team} />
      ))}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: { teamColors },
  }
}
