import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
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
    <main>
      <form onSubmit={(e) => handleForgotPasswordEmailSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
      {error && <p>{error}</p>}
    </main>
  )
}
export default ForgotPassword
