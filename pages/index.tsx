import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Money - Get smart about money</title>
        <meta name="description" content="The newsletter that makes you smart about money. 176,348 other readers can't be wrong. 
                                          Subscribe - it's free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a
          href="https://www.youtube.com/channel/UCCy9pBVQn1yVm5y3_mb4XrQ"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/dm-logo2.png" alt="Dead Money Logo" width={300} height={155} />
        </a>
      </main>
    </div>
  )
}

export default Home
