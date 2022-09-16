import { ReactNode, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import LoadingPopup from "./util/LoadingPopup";


import styles from '../styles/Home.module.css'
import mystyles from "../styles/mystyle.module.css";


const NavLink = (
    {pathname, text}:
    {pathname: string, text: string}
)=>{
    const router = useRouter();
    const [is_hover, setIsHover] = useState(false);
    const colorFunc = ()=>{
        if(is_hover) return "#0070f3";
        else if(router.pathname === pathname) return "gray";
        else return "black";
    }
    const startHover = ()=> setIsHover(true);
    const endHover = ()=> setIsHover(false);

    return (
        <Link href={pathname}>
            <a
            className={mystyles.footer_item}
            onMouseOver={startHover}
            onMouseLeave={endHover}
            style={{color: colorFunc()}}>
                {text}
            </a>
        </Link>
    )
}


const FooterDiv = ()=>{

    return (
        <div className={mystyles.footer}>
            <NavLink pathname="/" text="Home" />
            <NavLink pathname="/about" text="About" />
            <NavLink pathname="/history" text="History" />
            <NavLink pathname="/work" text="Work" />
        </div>
    )
}


export default function Layout({children, title}: {children: ReactNode, title: string}){
    return (
        <div>
            <LoadingPopup />
            <div className={styles.container}>
                <Head>
                    <title>{title}</title>
                </Head>
                <main className={styles.main}>
                    <div>
                        {children}
                    </div>
                    <div className={mystyles.group}/>
                    <FooterDiv />
                </main>
            </div>
        </div>
    )
}