import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import mystyles from "../styles/mystyle.module.css";
import Layout from "./layout";

import { fetchGasData } from "./about";


/*
const history_data = [
    ["大学1年〜大学2年", "一年時にプログラミングを授業で初体験（C言語）。二年でJavaを触る。趣味ではUnityの本を触った程度。"],
    ["大学3年", "授業でC++触る。所属した研究室で可視化の面白さを知りObservable（JavascriptのSaaS）に没頭、駄作可視化を量産する。Unityで強化学習を試みるも断念。研究に備えpythonをチョロチョロ勉強。"],
    ["大学4年", "本格的に研究活動が始まり、pythonを利用する機会が増える。得られた結果をインタラクティブな可視化にするためObservableを利用継続。夏頃からReactとDjangoを勉強開始。"],
    ["修士1年", "continue..."]
];
*/
type HistoryData = ({[key: string]: string});
type GasHistoriesData = {data: Array<HistoryData>};


export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasHistoriesData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("history");
    if(data === undefined) return ({notFound: true});

    return {props: data};
}

const HistoryGroup = (
    {title, description}:
    {title: string,
    description: string}
)=>{
    return (
        <div className={mystyles.group}>
            <h2 className={mystyles.sub_title}>{title}</h2>
            <p className={mystyles.description}>{description}</p>
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