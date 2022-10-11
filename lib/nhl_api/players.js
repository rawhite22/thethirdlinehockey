import axios from 'axios'

export const getPlayerInfo = async (id) => {
  const res = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/people/${id}`
  )
  const data = JSON.parse(JSON.stringify(res.data))
  return data.people[0]
}
export const getPlayerStats = async (id) => {
  const res = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
  )
  const data = JSON.parse(JSON.stringify(res.data))
  if (data.stats[0].splits.length === 0) {
    return null
  }
  return data.stats[0].splits[0].stat
}

export const scoringAverage = (pos, stats) => {
  if (!stats) {
    return 0
  }
  if (pos === 'Goalie') {
    let w = stats.wins * 6
    let save = stats.saves * 0.7
    let goalAgainst = stats.goalsAgainst * -3.5
    let shutouts = stats.shutouts * 4
    const total = (w + save + goalAgainst + shutouts) / stats.gamesStarted
    return Number(total.toFixed(2))
  } else {
    let g = stats.goals * 8.5
    let a = stats.assists * 5
    let sog = stats.shots * 1.5
    let bs = stats.blocked * 1.3
    let shp = stats.shortHandedPoints * 2
    const total = (g + a + sog + bs + shp) / stats.games
    return Number(total.toFixed(2))
  }
}
