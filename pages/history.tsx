import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";
//import Head from "next/head";


import styles from "../styles/Home.module.css";
import Layout from "./layout";

import { fetchGasData } from "./api/fetchGasData";

import { HistoryDiv } from "./elementHistory/HistoryDiv";





export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasHistoriesData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("history");
    if(data === undefined) return ({notFound: true});

    return {props: data};
}




const HistoryPage: NextPage<GasHistoriesData> = (props)=>{
    return (
        <Layout title="History">
            <div>
                <h1 className={styles.title}>History（技術関連）</h1>
                <HistoryDiv historiesData={props} />
            </div>
        </Layout>
    )
}


export default HistoryPage;