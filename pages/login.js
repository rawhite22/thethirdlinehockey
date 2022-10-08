import Link from 'next/link'
import { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { handleLoginSubmit, handleLoginFormChange } from '../lib/handlers/login'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form onSubmit={(e) => handleLoginSubmit(e, username, password)}>
        <FormGroup
          type='text'
          value={username}
          label='Username'
          stateSetter={setUsername}
        />
        <FormGroup
          type='password'
          value={password}
          label='Password'
          stateSetter={setPassword}
        />
        <input type={'submit'} value='Submit' />
      </form>
      <Link href='/forgotpassword'>Forgot password?</Link>
    </div>
  )
}
export default Login
