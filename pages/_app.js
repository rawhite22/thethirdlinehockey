import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '../layout'
import { WatchlistContextProvider } from '../context/WatchlistContext'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <WatchlistContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WatchlistContextProvider>
    </SessionProvider>
  )
}

export default MyApp
