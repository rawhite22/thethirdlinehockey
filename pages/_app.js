import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '../layout'
import { WatchlistContextProvider } from '../context/WatchlistContext'
import { RequestContextProvider } from '../context/RequestsContext'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <WatchlistContextProvider>
        <RequestContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RequestContextProvider>
      </WatchlistContextProvider>
    </SessionProvider>
  )
}

export default MyApp
