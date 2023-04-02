import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";



import styles from "../styles/Home.module.css";
import Layout from "./layout";

import { fetchGasData } from "./api/fetchGasData";

import { WorkCardDiv } from "./elementWork/WorkCardDiv";




export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasWorksData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("work");
    if(data === undefined) return ({notFound: true});

    return {props: data};
}




const WorkPage: NextPage<GasWorksData> = (props)=>{
    return (
        <Layout title="History">
            <h1 className={styles.title}>Work（作品一覧）</h1>
            <WorkCardDiv worksData={props} />
        </Layout>
    )
}


export default WorkPage;