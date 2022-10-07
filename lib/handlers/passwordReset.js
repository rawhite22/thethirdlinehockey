import axios from 'axios'

export const handlePasswordResetForm = async (e, id, password) => {
  e.preventDefault()
  try {
    const res = await axios.put('/api/resetpassword', {
      id,
      newPassword: password,
    })
    if (res.status === 200) {
      // send user back to login page
      console.log(res.data)
    }
  } catch (error) {
    console.log(error)
  }
}
