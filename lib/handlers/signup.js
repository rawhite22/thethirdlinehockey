import axios from 'axios'
import { signIn } from 'next-auth/react'
export const handleSignUpForm = async (
  e,
  username,
  email,
  password,
  errorState
) => {
  errorState(null)
  e.preventDefault()
  try {
    const res = await axios.post('/api/signup', { username, email, password })
    if (res.status === 201) {
      const result = await signIn('credentials', {
        redirect: true,
        callbackUrl: '/',
        username,
        password,
      })
    }
  } catch (error) {
    if (error.request.status === 400) {
      errorState('Bad request please check the information and try again')
    }
  }
}
