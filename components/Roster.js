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
    <div>
      <div className='roster'>
        <div className='roster_filter'>
          <RosterFilterButton
            title='Forwards'
            pos='Forward'
            filterFn={filterRoster}
            roster={filteredRoster}
          />
          <button onClick={() => filterRoster(roster, 'Defenseman')}>
            Defenseman
          </button>
          <button onClick={() => filterRoster(roster, 'Goalie')}>
            Goalies
          </button>
          <button onClick={() => setFilteredRoster(roster)}>Reset</button>
        </div>
        {filteredRoster.map((player) => (
          <PlayerSelect
            key={player.id}
            player={player}
            watchList={watching}
            setWatchList={setWatching}
          />
        ))}
      </div>
    </div>
  )
}
export default Roster
