import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
function Header() {
  const { data: session, status } = useSession()
  return (
    <header id='site_header' className='header'>
      {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </header>
  )
}
export default Header
