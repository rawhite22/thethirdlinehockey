import { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { handleSignUpForm } from '../lib/handlers/signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
import { useRequestContext } from '../hooks/useRequestContext'
function Signup() {
  const { pageTransition } = useRequestContext()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)

  return (
    <main id='signup_page' className='signup_page'>
      <h2>Sign Up</h2>
      <div className='form_container'>
        <form
          onSubmit={(e) =>
            handleSignUpForm(e, username, email, password, setError)
          }>
          <FormGroup
            type='email'
            value={email}
            label='Email'
            stateSetter={setEmail}
          />
          <FormGroup
            type='text'
            value={username}
            label='Username'
            stateSetter={setUsername}
          />
          <FormGroup
            type={showPassword ? 'password' : 'text'}
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
            <button type='submit'>Sign Up</button>
          )}
        </form>
      </div>
      {error && <p className='error'>{error}</p>}
    </main>
  )
}
export default Signup
