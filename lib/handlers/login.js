import { signIn } from 'next-auth/react'

export const handleLoginFormChange = (e, stateSetter) => {
  stateSetter(e.target.value)
}
export const handleLoginSubmit = async (
  e,
  username,
  password,
  push,
  setError
) => {
  setError(null)
  e.preventDefault()

  const result = await signIn('credentials', {
    redirect: false,
    username,
    password,
  })
  if (result.status === 200) {
    push('/')
  } else {
    setError('Invalid Credentails')
  }
}
