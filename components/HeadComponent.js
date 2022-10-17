import Head from 'next/head'
function HeadComponent({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content='fantasy hockey' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}
export default HeadComponent
