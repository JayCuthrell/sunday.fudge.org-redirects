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
        <Header title="Here's how we did it!" />
        <p className="description">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CVfoImUj-NE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
