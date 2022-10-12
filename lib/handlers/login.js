import { signIn } from 'next-auth/react'

export const handleLoginFormChange = (e, stateSetter) => {
  stateSetter(e.target.value)
}
export const handleLoginSubmit = async (e, username, password, push) => {
  e.preventDefault()

  const result = await signIn('credentials', {
    redirect: false,
    username,
    password,
  })
  if (result.status === 200) {
    push('/')
  }
}
