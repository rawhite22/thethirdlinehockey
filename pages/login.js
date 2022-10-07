import { useState } from 'react'
import { handleLoginSubmit, handleLoginFormChange } from '../lib/handlers/login'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form onSubmit={(e) => handleLoginSubmit(e, username, password)}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            required
            value={username}
            onChange={(e) => handleLoginFormChange(e, setUsername)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => handleLoginFormChange(e, setPassword)}
          />
        </div>
        <input type={'submit'} value='Submit' />
      </form>
    </div>
  )
}
export default Login
