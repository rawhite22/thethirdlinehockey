function PlayerInfo(info) {
  return (
    <section className='player_info'>
      <h4>{info.info.firstName}</h4>
      <h2>{info.info.lastName}</h2>
      <p>{info.info.primaryPosition.name}</p>
      <p>{info.info.primaryNumber}</p>
    </section>
  )
}
export default PlayerInfo
