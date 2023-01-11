import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dead Money - Be smart about money</title>
        <meta name="description" content="The newsletter that gets you money, power, and respect. 180,628 degenerates can't be wrong. 
                                          Subscribe today - it's free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a
          href="https://www.youtube.com/@deadmoneydaily"
          target="_blank"
          rel="noopener noreferrer">
            <Image src="/WARNING.png" alt="Dead Money Logo" width={250} height={40} />
        </a>
      </main>
    </div>
  )
}

export default Home
