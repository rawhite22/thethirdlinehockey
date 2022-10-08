import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '../layout'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
