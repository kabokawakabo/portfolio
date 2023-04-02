import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage
} from "next";



import styles from "../styles/Home.module.css";
import Layout from './layout/Layout';

import { fetchGasData } from "./api/fetchGasData";

import { ProfileDiv } from "./elementAbout/ProfileDiv";
import { ContactDiv } from "./elementAbout/ContactDiv";




export const getServerSideProps = async(
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GasProfilesData>> =>{
    // サーバサイドで処理してくれる
    const data = await fetchGasData("about");
    //console.log(data);
    if(data === undefined) return ({notFound: true});

    return {props: data};
}




const AboutPage: NextPage<GasProfilesData> = (props)=>{
    return (
        <Layout title="About">
            <div>
                <h1 className={styles.title}>About</h1>
                <ProfileDiv profilesData={props} />
                <ContactDiv />
            </div>
        </Layout>
    )
}

export default AboutPage;