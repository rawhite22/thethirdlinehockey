import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

function PlayerSelect({ player, watchList, setWatchList }) {
  const watching = watchList.filter(
    (person) => person.id === player.id.toString()
  )
  const { data: session } = useSession()
  const { asPath } = useRouter()
  const handleWatchListClick = async (id, type) => {
    switch (type) {
      case 'ADD':
        try {
          const res = await axios.post('/api/watchlist', { playerId: id })
          console.log(res.data)
          setWatchList((prevState) => [...prevState, { id: res.data.playerID }])
        } catch (error) {
          console.log(error)
          window.alert(error)
        }
        break
      case 'REMOVE':
        try {
          const res = await axios.put('/api/watchlist', { playerId: id })
          console.log(res.data)
          const updatedWatchList = watchList.filter(
            (person) => person.id !== res.data.playerID
          )
          setWatchList(updatedWatchList)
        } catch (error) {}
        break
      default:
        break
    }
  }
  return (
    <div className='player-select'>
      <p>{player.name}</p>
      <Link href={`${asPath}/${player.id}`}>Stats & Info</Link>
      {session ? (
        watching.length > 0 ? (
          <button onClick={() => handleWatchListClick(player.id, 'REMOVE')}>
            Remove from Watch List
          </button>
        ) : (
          <button onClick={() => handleWatchListClick(player.id, 'ADD')}>
            Add to Watch List
          </button>
        )
      ) : null}
    </div>
  )
}
export default PlayerSelect
