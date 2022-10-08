function FormGroup({ label, type, stateSetter }) {
  return (
    <div className='form-group'>
      <label htmlFor='username'>{label}</label>
      <input
        type={type}
        required
        value={username}
        onChange={(e) => stateSetter(e.target.value)}
      />
    </div>
  )
}
export default FormGroup
