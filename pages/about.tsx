import { useState } from 'react';
import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";
//import Head from 'next/head';
import Image from 'next/image';

import { SiTwitter, SiGithub, SiObservable } from "react-icons/si";


import styles from "../styles/Home.module.css";
import mystyles from "../styles/mystyle.module.css";
import kabokawakaboPic from "../public/kabokawakabo.jpeg";
import Layout from './layout';

import { DescriptionTr } from './util/DescriptionTr';



/*
const profiles = [
    ["名前:", "Hiromu Murakami"],
    ["誕生月:", "2000年 2月"],
    ["興味:", "可視化、web開発"],
    ["興味手前:", "アプリ開発、機械学習"]
];
*/
type ProfileData = ({[key: string]: string});
type GasProfilesData = {data: Array<ProfileData>};

export const fetchGasData = async (category: "about" | "history" | "work")=>{
    const response = await fetch(`https://script.google.com/macros/s/AKfycbyWvGsCgOyt7XPKvaBgKrn32LZ-0zT3Dmp03A_-24nw_JcDanFkRAP8yECKxYkkkeyH/exec?category=${category}`);

    if(response.ok) return await response.json();
    else return undefined;//({"APIエラー": "データを取り出せませんでした"});
    //throw "APIエラー  " + response.message;
}

export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasProfilesData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("about");
    //console.log(data);
    if(data === undefined) return ({notFound: true});

    return {props: data};
}



const AboutDiv = (
    {profileData}:
    {profileData: GasProfilesData}    
)=>{
    return (
        <div className={mystyles.group}>
            <h1 className={mystyles.sub_title}>人物紹介</h1>
            <Image
                src={kabokawakaboPic}
                alt="profile image" 
                width="200"
                height="200"
                />
            <table>
            {profileData.data.map((d,i)=>{
                const [category, ans, ...rest] = Object.values(d);
                return (
                    <DescriptionTr key={i}
                        category={category}
                        ans={ans} />
                )
            })}
            </table>
        </div>
    )
}


const LinkIcon = (
    {category}:
    {category:"twitter"|"github"|"obserbable"})=>
{
    /*
    const [size, setSize] = useState(50);
    const hovered = ()=>setSize(70);
    const unhovered = ()=>setSize(50);
    */
    const [color, setColor] = useState("#000");
    const hovered = ()=>setColor("#0af");
    const unhovered = ()=> setColor("#000");  

    return (
        <>
            {category === "twitter"?
                <SiTwitter
                    size="50"
                    color={color}
                    onMouseEnter={hovered}
                    onMouseLeave={unhovered}
                    /> :
            category === "github"?
                <SiGithub
                    size="50"
                    color={color}
                    onMouseOver={hovered}
                    onMouseLeave={unhovered}
                    /> :
                <SiObservable
                    size="50"
                    color={color}
                    onMouseOver={hovered}
                    onMouseLeave={unhovered}
                    />
            }
        </>
    )
}
const ContactDiv = ()=>{
    return (

        <div className={mystyles.group}>
            <h1 className={mystyles.sub_title}>外部Link</h1>
            <div>
                <a className={mystyles.margin_icon} href="https://twitter.com/kabokawakabo">
                    <LinkIcon category="twitter" />
                </a>
                <a className={mystyles.margin_icon} href="https://github.com/kabokawakabo">
                    <LinkIcon category="github" />
                </a>
                <a className={mystyles.margin_icon} href="https://observablehq.com/@vqkrac1fogbevmc">
                    <LinkIcon category="obserbable" />
                </a>
            </div>
        </div>
    )
}


const AboutPage: NextPage<GasProfilesData> = (props)=>{
    return (
        <Layout title="About">
            <div>
                <h1 className={styles.title}>About</h1>
                <AboutDiv profileData={props} />
                <ContactDiv />
            </div>
        </Layout>
    )
}

export default AboutPage;