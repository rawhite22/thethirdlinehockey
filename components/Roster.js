import { useState } from 'react'
import PlayerSelect from './PlayerSelect'
import RosterFilterButton from './buttons/RosterFilterButton'

function Roster({ roster, watchList }) {
  const [filteredRoster, setFilteredRoster] = useState(roster)
  const [watching, setWatching] = useState(
    watchList.map((player) => ({ id: player.playerID }))
  )
  const filterRoster = (ros, position) => {
    setFilteredRoster(ros.filter((player) => player.pos.type === position))
  }
  return (
    <section className='roster'>
      <div className='roster_filter'>
        <RosterFilterButton
          title='F'
          pos='Forward'
          filterFn={filterRoster}
          roster={roster}
        />
        <button onClick={() => filterRoster(roster, 'Defenseman')}>D</button>
        <button onClick={() => filterRoster(roster, 'Goalie')}>G</button>
        <button onClick={() => setFilteredRoster(roster)}>Reset</button>
      </div>
      <div className='grid_container'>
        {filteredRoster.map((player, index) => (
          <PlayerSelect key={player.id} player={player} index={index} />
        ))}
      </div>
    </section>
  )
}
export default Roster
