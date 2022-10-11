function PlayerInfo(info) {
  return (
    <div>
      <p>{info.info.firstName}</p>
      <p>{info.info.lastName}</p>
      <p>{info.info.primaryPosition.name}</p>
      <p>{info.info.primaryNumber}</p>
    </div>
  )
}
export default PlayerInfo
