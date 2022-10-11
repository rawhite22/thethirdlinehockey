import axios from 'axios'

export const getTeam = async (id) => {
  const res = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
  const team = JSON.parse(JSON.stringify(res.data))
  const filterTeamData = team.teams.map((team) => ({
    id: team.id,
    division: team.division.name,
    name: team.name,
  }))
  return filterTeamData[0]
}
export const getTeamStats = async (id) => {
  const res = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.stats`
  )
  const team_stats = JSON.parse(
    JSON.stringify(res.data.teams[0].teamStats[0].splits[0].stat)
  )
  const team_ranks = JSON.parse(
    JSON.stringify(res.data.teams[0].teamStats[0].splits[1].stat)
  )
  return { team_stats, team_ranks }
}

export const getTeamRoster = async (id) => {
  const res = await axios.get(
    `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`
  )
  const roster = JSON.parse(JSON.stringify(res.data.teams[0].roster.roster))
  const filteredRoster = roster.map((player) => ({
    id: player.person.id,
    name: player.person.fullName,
    pos: { code: player.position.code, type: player.position.type },
  }))
  return filteredRoster
}
