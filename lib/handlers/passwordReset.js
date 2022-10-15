import axios from 'axios'

export const handlePasswordResetForm = async (e, id, password, push) => {
  e.preventDefault()
  try {
    const res = await axios.put('/api/resetpassword', {
      id,
      newPassword: password,
    })
    if (res.status === 200) {
      push('/login')
    }
  } catch (error) {
    console.log(error)
  }
}
