import type { NextPage } from 'next'


import Layout from '../util/layout/Layout';
import styles from '../styles/Home.module.css';

import { PageLinks } from '../element/index/PageLinks';
import { MarginDiv } from '../util/MarginDiv';



const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>
        <h1 className={styles.title}>
          Portfolio (Home)
        </h1>
        <MarginDiv tRem={2} />
        <PageLinks />
      </div>
    </Layout>
  )
}

export default Home;
