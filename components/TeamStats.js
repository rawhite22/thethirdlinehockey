function TeamStats({ stats }) {
  if (!stats) {
    return <p>Team stats not yet available</p>
  }
  return (
    <section className='team_stats'>
      <h4>Games Remaining {82 - stats.team_stats.gamesPlayed}</h4>
      <div className='stats_grid'>
        <h4>Stat</h4>
        <h4>Quanity</h4>
        <h4>Rank</h4>

        <p>Wins</p>
        <p>{stats.team_stats.wins}</p>
        <p>{stats.team_ranks.wins}</p>

        <p className='grey'>Shots for P/G</p>
        <p className='grey'>{stats.team_stats.shotsPerGame}</p>
        <p className='grey'>{stats.team_ranks.shotsPerGame}</p>

        <p>Shots Against P/G</p>
        <p>{stats.team_stats.shotsAllowed}</p>
        <p>{stats.team_ranks.shotsAllowed}</p>

        <p className='grey'>Power Play</p>
        <p className='grey'>{stats.team_stats.powerPlayPercentage}</p>
        <p className='grey'>{stats.team_ranks.powerPlayPercentage}</p>

        <p>Penalty Kill</p>
        <p>{stats.team_stats.penaltyKillPercentage}</p>
        <p>{stats.team_ranks.penaltyKillPercentage}</p>
      </div>
    </section>
  )
}
export default TeamStats
