import { useState } from 'react'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignUpForm = async (e) => {}
  return (
    <main id='sign_up_page'>
      <form onSubmit={(e) => handleSignUpForm(e)}></form>
    </main>
  )
}
export default Signup
