import { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { handleSignUpForm } from '../lib/handlers/signup'
function Signup() {
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
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </main>
  )
}
export default Signup
