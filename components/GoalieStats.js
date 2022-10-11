function GoalieStats({ stats }) {
  if (!stats) {
    return <p>Stats not available yet.</p>
  }
  return (
    <div>
      <div className='stats_container'>
        <p>Wins: {stats.wins}</p>
        <p>Games Started: {stats.gamesStarted}</p>
        <p>Shutouts: {stats.shutouts}</p>
      </div>
      <div className='stats_container'>
        <p>Shots Against: {stats.shotsAgainst}</p>
        <p>Shots Against P/G: {stats.shotsAgainst / stats.gamesStarted}</p>
      </div>
      <div className='stats_container'>
        <p>Saves Against: {stats.saves}</p>
        <p>Saves Against P/G: {stats.saves / stats.gamesStarted}</p>
      </div>
    </div>
  )
}
export default GoalieStats
