import Link from 'next/link'

function TeamSelect({ team }) {
  return (
    <div>
      {team.colors.length === 3 ? (
        <div className='color_container'>
          {' '}
          <div
            style={{ backgroundColor: team.colors[0] }}
            className='team_marker'></div>
          <div
            style={{ backgroundColor: team.colors[1] }}
            className='team_marker'></div>
          <div
            style={{ backgroundColor: team.colors[2] }}
            className='team_marker'></div>
        </div>
      ) : (
        <div className='color_container'>
          {' '}
          <div
            style={{ backgroundColor: team.colors[0] }}
            className='team_marker'></div>
          <div
            style={{ backgroundColor: team.colors[1] }}
            className='team_marker'></div>
          <div
            style={{ backgroundColor: team.colors[0] }}
            className='team_marker'></div>
        </div>
      )}

      <p>{team.name}</p>
      <Link href={`/${team.id}`}>Team Info</Link>
    </div>
  )
}
export default TeamSelect
