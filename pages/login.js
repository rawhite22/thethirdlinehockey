import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { handleLoginSubmit } from '../lib/handlers/login'
import { useRequestContext } from '../hooks/useRequestContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faStar } from '@fortawesome/pro-solid-svg-icons'
function Login() {
  const { push } = useRouter()
  const { pageTransition } = useRequestContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main id='login_page' className='login_page'>
      <h2>Login</h2>
      <div className='form_container'>
        <form onSubmit={(e) => handleLoginSubmit(e, username, password, push)}>
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
          {pageTransition ? (
            <button disabled type='submit'>
              <FontAwesomeIcon
                spin
                icon={faSpinner}
                color='dodgerblue'
                size='2x'
              />
            </button>
          ) : (
            <button type='submit'>Login</button>
          )}
        </form>
      </div>
      <Link href='/forgotpassword'>Forgot password?</Link>
    </main>
  )
}
export default Login
