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
