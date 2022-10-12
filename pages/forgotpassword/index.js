import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import FormGroup from '../../components/FormGroup'
function ForgotPassword() {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const handleForgotPasswordEmailSubmit = async (e) => {
    setError(null)
    e.preventDefault()
    try {
      const res = await axios.post('/api/resetpassword', { email })
      if (res.status === 201) {
        push('/')
      }
    } catch (error) {
      setError(error.request.responseText)
    }
  }
  return (
    <main id='forgotpassword_page' className='forgotpassword_page'>
      <h2>Forgot Password</h2>
      <div className='form_container'>
        <form onSubmit={(e) => handleForgotPasswordEmailSubmit(e)}>
          <FormGroup
            type='email'
            value={email}
            label='Email'
            stateSetter={setEmail}
          />

          <button type='submit'>Send Reset Email</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </main>
  )
}
export default ForgotPassword
