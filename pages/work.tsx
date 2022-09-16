//import Link from "next/link";
import { useState } from "react";
import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import mystyles from "../styles/mystyle.module.css";
import Layout from "./layout";

import { fetchGasData } from "./about";



type WorkData = ({[key: string]: string});
type GasWorksData = {data: Array<WorkData>};


export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasWorksData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("work");
    if(data === undefined) return ({notFound: true});

    return {props: data};
}

const DescriptionLine = (
    {category, ans}:
    {category: string, ans: string}
)=>{
    return (
        <tr className={mystyles.tr}>
            <td className={mystyles.description_category}>{category}</td>
            <td>{ans}</td>
        </tr>
    )
}


const WorkCard = (
    {data}:
    {data: WorkData}
)=>{
    const [is_hover, setIsHover] = useState(false);
    const hovered = ()=>setIsHover(true);
    const unhovered = ()=> setIsHover(false);

    const url = data.URL;
    const image_url = data.imageURL;
    const title = data.title;
    const start_time = data.start;
    const end_time = data.end;
    const description = data.description;

    const rest_data = Object.entries(data)
        .filter(d=>{
            // keyが日本語含むもののみ取り出す
            const match = d[0].match(/\w+/g);
            
            return match === null || match[0].length !== d[0].length;
        })

    return (
        <a href={url}
        className={mystyles.card}
        onMouseEnter={hovered}
        onMouseLeave={unhovered} >
              <h2 style={{color: is_hover? "#0070f3": "black"}}>{title}</h2>
              
              <img
                width="400"
                src={image_url}
                alt="no image" />
              <table>
                {rest_data.map((d,i)=>{
                    const [category, ans] = d;
                    return (<DescriptionLine key={i} category={category} ans={ans} />)
                })}
                <DescriptionLine category="触った期間" ans={`${start_time} 〜 ${end_time}`} />
              </table>
              <div>
                <h4 className={mystyles.work_description_title}>説明:</h4>
                <p className={mystyles.no_margin}>{description}</p>
              </div>
        </a>  
    )
}


const HistoryPage: NextPage<GasWorksData> = (props)=>{
    return (
        <Layout title="History">
            <h1 className={styles.title}>Work（作品一覧）</h1>
            <div className={styles.grid}>
                {props.data.map((d: WorkData, i)=>{
                    return (<WorkCard key={i} data={d} />)
                })}
            </div>
        </Layout>
    )
}


export default HistoryPage;