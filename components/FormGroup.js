function FormGroup({ label, type, value, stateSetter }) {
  return (
    <div className='form_group'>
      <label>{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => stateSetter(e.target.value)}
      />
    </div>
  )
}
export default FormGroup
