function SkaterStats({ stats }) {
  if (!stats) {
    return <p>Stats not available yet.</p>
  }
  return (
    <div>
      <div className='stats_container'>
        <p>Goals: {stats.goals}</p>
        <p>Goal P/G: {stats.goals / stats.games}</p>
      </div>
      <div className='stats_container'>
        <p>Assists: {stats.assists}</p>
        <p>Assists P/G: {stats.assists / stats.games}</p>
      </div>
      <div className='stats_container'>
        <p>Shots: {stats.shots}</p>
        <p>Shots P/G: {stats.shots / stats.games}</p>
      </div>
      <div className='stats_container'>
        <p>Blocks: {stats.blocked}</p>
        <p>Blocks P/G: {stats.blocked / stats.games}</p>
      </div>
      <div className='stats_container'>
        <p>Shorthanded Points: {stats.shortHandedPoints}</p>
      </div>
      <div className='stats_container'>
        <p>Time on ice P/G: {stats.timeOnIcePerGame}</p>
      </div>
    </div>
  )
}
export default SkaterStats
