function TeamStats({ stats }) {
  if (!stats) {
    return <p>Team stats not yet available</p>
  }
  return (
    <div>
      <p>Games Remaining {82 - stats.team_stats.gamesPlayed}</p>
      <div className='stats_container'>
        <p>Wins:{stats.team_stats.wins}</p>
        <p>League Rank:{stats.team_ranks.wins}</p>
      </div>
      <div className='stats_container'>
        <p>Shots P/G:{stats.team_stats.shotsPerGame}</p>
        <p>League Rank:{stats.team_ranks.shotsPerGame}</p>
      </div>
      <div className='stats_container'>
        <p>Shots Allowed P/G:{stats.team_stats.shotsAllowed}</p>
        <p>League Rank:{stats.team_ranks.shotsAllowed}</p>
      </div>
      <div className='stats_container'>
        <p>Power Play %:{stats.team_stats.powerPlayPercentage}</p>
        <p>League Rank:{stats.team_ranks.powerPlayPercentage}</p>
      </div>
      <div className='stats_container'>
        <p>Penalty Kill %:{stats.team_stats.penaltyKillPercentage}</p>
        <p>League Rank:{stats.team_ranks.penaltyKillPercentage}</p>
      </div>
    </div>
  )
}
export default TeamStats
