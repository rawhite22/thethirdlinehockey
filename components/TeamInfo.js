import Image from 'next/image'
function TeamInfo({ info }) {
  return (
    <section className='team_info'>
      <div className='img_container'>
        <Image src={`/${info.id}.png`} height={1434} width={1992} />
      </div>
      <h2>{info.name}</h2>
      <h3>{info.division} division</h3>
    </section>
  )
}
export default TeamInfo
