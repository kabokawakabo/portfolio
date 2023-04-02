import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";
//import Head from "next/head";


import styles from "../styles/Home.module.css";
import mystyles from "../styles/mystyle.module.css";
import Layout from "./layout";

import { fetchGasData } from "./api/fetchGasData";

import { ChangeReturnToBrFromString } from "./util/AddBrFromString";




export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasHistoriesData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("history");
    if(data === undefined) return ({notFound: true});

    return {props: data};
}



type HistoryGroupProps = {
    title: string
    description: string
}
const HistoryGroup: React.FC<HistoryGroupProps> = ({
    title,
    description
})=>{
    return (
        <div className={mystyles.group}>
            <h2 className={mystyles.sub_title}>{title}</h2>
            <p className={mystyles.description}>
                <ChangeReturnToBrFromString text={description} />
            </p>
        </div>
    )
}


const HistoryPage: NextPage<GasHistoriesData> = (props)=>{

    return (
        <Layout title="History">
            <div>
                <h1 className={styles.title}>History（技術関連）</h1>
                {
                    props.data.map((d, i)=>{
                        const [title, description] = Object.values(d);
                        return (<HistoryGroup key={i}
                                    title={title}
                                    description={description} />)
                    })
                }
            </div>
        </Layout>
    )
}


export default HistoryPage;