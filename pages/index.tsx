import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Money - All the info you need to live a blessed life</title>
        <meta name="description" content="Dead Money makes it easier to live a blessed life. You're welcome. Get all the info you need day or night, wherever you go." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a
          href="https://www.youtube.com/channel/UCCy9pBVQn1yVm5y3_mb4XrQ"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/dm-logo2.png" alt="Dead Money Logo" width={400} height={250} />
        </a>
      </main>
    </div>
  )
}

export default Home
