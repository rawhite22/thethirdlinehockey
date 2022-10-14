function GoalieStats({ stats }) {
  if (!stats) {
    return <p>Stats not available yet.</p>
  }
  return (
    <section className='goalie_stats'>
      <p className='stat_title grey'>Stat</p>
      <p className='stat_title grey'>Quantity</p>
      <p className='stat_title grey'>Per Game</p>
      <p>Starts</p>
      <p>{stats.gamesStarted}</p>
      <p>n/a</p>
      <p className='grey'>Wins</p>
      <p className='grey'>{stats.wins}</p>
      <p className='grey'>n/a</p>
      <p>Shutouts</p>
      <p>{stats.shutouts}</p>
      <p>n/a</p>
      <p className='grey'>Sh Against</p>
      <p className='grey'>{stats.shotsAgainst}</p>
      <p className='grey'>{stats.shotsAgainst / stats.gamesStarted}</p>
      <p>Saves</p>
      <p>{stats.saves}</p>
      <p>{stats.saves / stats.gamesStarted}</p>
    </section>
  )
}
export default GoalieStats
