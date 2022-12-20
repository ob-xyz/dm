import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Money</title>
        <meta name="description" content="Our free newsletter is your best source into the deadly world a money. Sign up today, it only takes a second." />
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
