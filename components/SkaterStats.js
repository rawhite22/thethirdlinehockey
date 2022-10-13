function SkaterStats({ stats }) {
  if (!stats) {
    return <p>Stats not available yet.</p>
  }
  return (
    <div className='skater_stats'>
      <p className='stat_title'>Stat</p>
      <p className='stat_title'>Quantity</p>
      <p className='stat_title'>Per Game</p>

      <p className='grey'>Goals </p>
      <p className='grey'>{stats.goals}</p>
      <p className='grey'>{stats.goals / stats.games}</p>

      <p>Assists</p>
      <p>{stats.assists}</p>
      <p>{stats.assists / stats.games}</p>

      <p className='grey'>Shots</p>
      <p className='grey'> {stats.shots}</p>
      <p className='grey'>{stats.shots / stats.games}</p>

      <p>Blocks</p>
      <p>{stats.blocked}</p>
      <p>{stats.blocked / stats.games}</p>

      <p className='grey'>SH Points</p>
      <p className='grey'>{stats.shortHandedPoints}</p>
      <p className='grey'>n/a</p>

      <p>TOI</p>
      <p>n/a</p>
      <p>{stats.timeOnIcePerGame}</p>
    </div>
  )
}
export default SkaterStats
