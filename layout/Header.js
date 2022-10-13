import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useWatchlistContext } from '../hooks/useWatchlistContext'
function Header() {
  const { watchlist } = useWatchlistContext()
  const { data: session, status } = useSession()
  return (
    <header id='site_header' className='header'>
      <Link href={'/'}>
        <h2>3L</h2>
      </Link>
      <nav className={`${session ? 'nav_logged_in' : 'nav'}`}>
        {session ? (
          <Link href={'/watchlist'}>
            <a>Watching {`(${watchlist.length})`}</a>
          </Link>
        ) : null}

        {session ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <>
            <Link href='/login'>Login</Link>
            <Link href='/signup'>Sign up</Link>
          </>
        )}
      </nav>
    </header>
  )
}
export default Header
