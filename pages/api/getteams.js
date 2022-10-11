import axios from 'axios'
export default async function handler(req, res) {
  const response = await axios.get('https://statsapi.web.nhl.com/api/v1/teams')
  const teams = response.data.teams.map((team) => ({
    name: team.name,
    id: team.id,
  }))
  console.log(teams)
}
