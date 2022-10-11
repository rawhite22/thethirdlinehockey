function RosterFilterButton({ title, filterFn, pos, roster }) {
  return <button onClick={() => filterFn(roster, pos)}>{title}</button>
}
export default RosterFilterButton
