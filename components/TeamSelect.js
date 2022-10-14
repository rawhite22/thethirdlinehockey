import Link from 'next/link'

import Image from 'next/image'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
function TeamSelect({ team, index }) {
  const selectedIndex = index

  const [loading, setLoading] = useState(false)

  return (
    <div className='team_card'>
      <div className='img-container'>
        <Image
          src={`/${team.id}.png`}
          height={1434}
          width={1992}
          alt='team-logo'
        />
      </div>
      <h2>{team.name}</h2>
      {loading ? (
        <FontAwesomeIcon spin icon={faSpinner} color='dodgerblue' size='2x' />
      ) : (
        <Link href={`/${team.id}`}>
          <a
            onClick={() => {
              if (selectedIndex === index) {
                setLoading(true)
              }
            }}>
            Team Info
          </a>
        </Link>
      )}
    </div>
  )
}
export default TeamSelect
