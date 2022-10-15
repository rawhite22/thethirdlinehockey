import { useState } from 'react'
import { verifyToken } from '../../lib/token'
import { handlePasswordResetForm } from '../../lib/handlers/passwordReset'
import { useRouter } from 'next/router'
import FormGroup from '../../components/FormGroup'
import { useRequestContext } from '../../hooks/useRequestContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
function ResetPassword({ error, id }) {
  const { pageTransition } = useRequestContext()
  const { push } = useRouter()
  const [hidePassword, setHidePassword] = useState(true)
  const [newPassword, setNewPassword] = useState('')
  if (error) {
    return (
      <main id='resetpassword_page' className='resetpassword_page'>
        <p>Token Expired please resubmit password request.</p>
      </main>
    )
  }
  return (
    <main id='resetpassword_page' className='resetpassword_page'>
      <h2>Reset Password</h2>
      <div className='form_container'>
        <form
          onSubmit={(e) => handlePasswordResetForm(e, id, newPassword, push)}>
          <FormGroup
            type='password'
            value={newPassword}
            label='Password'
            stateSetter={setNewPassword}
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
            <button type='submit'>Reset Password</button>
          )}
        </form>
      </div>
    </main>
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
