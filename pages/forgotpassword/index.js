import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import FormGroup from '../../components/FormGroup'
import { useRequestContext } from '../../hooks/useRequestContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
function ForgotPassword() {
  const { pageTransition } = useRequestContext()
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
            <button type='submit'>Send Email</button>
          )}
        </form>
      </div>
      {error && <p>{error}</p>}
    </main>
  )
}
export default ForgotPassword
