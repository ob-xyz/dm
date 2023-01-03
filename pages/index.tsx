import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Money - Daily news for FU money makers</title>
        <meta name="description" content="Dead Money is a daily newsletter for FU money makers. We cover business, tech, & money moves throughout Silicon Valley & Wall St. Subscribe for free. Make money money." />
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
