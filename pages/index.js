import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Redirecting to fudge.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We've moved!" />
        <p className="description">
          We've moved to <a href="https://fudge.org">fudge.org</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
