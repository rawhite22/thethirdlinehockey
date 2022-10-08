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
    <main id='sign_up_page'>
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
        <input type='submit' value='Submit' />
      </form>
    </main>
  )
}
export default Signup
