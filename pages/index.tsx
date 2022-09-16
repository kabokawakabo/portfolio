import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image';

import Layout from './layout';
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  const random_v = Math.random();
  const random_path = random_v < 0.3? "/about"
    : random_v < 0.6? "/history"
    : "/work";


  return (
    <Layout title="Home">
      <div>
        <h1 className={styles.title}>
          Portfolio (Home)
        </h1>

        <p className={styles.description}>
        
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>生態に迫る？！</p>
            </a>
          </Link>   

          <Link href="/history">
            <a className={styles.card}>
              <h2>History &rarr;</h2>
              <p>経歴を覗き見</p>
            </a>
          </Link>

          <Link href="/work">
            <a className={styles.card}>
              <h2>Work &rarr;</h2>
              <p>作った作品紹介</p>
            </a>
          </Link>


          <Link href={random_path}>
            <a className={styles.card}>
              <h2>Random &rarr;</h2>
              <p>見るものに悩んでいる方へ</p>
            </a>
          </Link>
         
        </div>
      </div>
    </Layout>
  )
}

export default Home;
