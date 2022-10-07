import { useState } from 'react'
import { verifyToken } from '../../lib/token'
import { handlePasswordResetForm } from '../../lib/handlers/passwordReset'
import { useRouter } from 'next/router'

function ResetPassword({ error, id }) {
  const { push } = useRouter()
  const [hidePassword, setHidePassword] = useState(true)
  const [newPassword, setNewPassword] = useState('')
  if (error) {
    return (
      <div>
        <p>Token Expired please resubmit password request.</p>
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={(e) => handlePasswordResetForm(e, id, newPassword, push)}>
        <div className='form-group'>
          <label htmlFor='password'>Enter new password</label>
          <input
            required
            type={hidePassword ? 'password' : 'text'}
            name='password'
            id='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
export default ResetPassword

export async function getServerSideProps(context) {
  const { token } = context.params
  const userToken = await verifyToken(token)
  if (userToken.error) {
    return {
      props: { error: 'expired token', id: null },
    }
  }
  return {
    props: { error: null, id: userToken.id },
  }
}
