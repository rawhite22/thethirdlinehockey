import Link from 'next/link'

import Image from 'next/image'
function TeamSelect({ team }) {
  return (
    <div className='team_card'>
      <div className='img-container'>
        <Image src={`/${team.id}.png`} height={1434} width={1992} />
      </div>
      <h2>{team.name}</h2>
      <Link href={`/${team.id}`}>Team Info</Link>
    </div>
  )
}
export default TeamSelect
