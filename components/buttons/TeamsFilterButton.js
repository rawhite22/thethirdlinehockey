const handleTeamSelectFilter = (teams, division, setFilter) => {
  switch (division) {
    case 'met':
      setFilter(teams.filter((team) => team.division === 'Metro'))
      break
    case 'atl':
      setFilter(teams.filter((team) => team.division === 'Atlantic'))
      break
    case 'pac':
      setFilter(teams.filter((team) => team.division === 'Pacific'))
      break
    case 'cen':
      setFilter(teams.filter((team) => team.division === 'Central'))
      break
    default:
      setFilter(teams)
      break
  }
}

function TeamsFilterButton({ teams, division, title, setFilter }) {
  return (
    <button onClick={() => handleTeamSelectFilter(teams, division, setFilter)}>
      {title}
    </button>
  )
}
export default TeamsFilterButton
