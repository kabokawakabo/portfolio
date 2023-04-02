import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import LoadingPopup from "./util/LoadingPopup";


import styles from '../styles/Home.module.css'
import mystyles from "../styles/mystyle.module.css";

//import { useHover } from "./util/hook";

import { MarginDiv } from "./util/MarginDiv";



const useLinkHover = (now_pathname: string)=>{
    const { pathname } = useRouter();
    const [is_hover, setIsHover] = useState(false);
    const setHover = ()=> setIsHover(true);
    const setUnhover = ()=> setIsHover(false);

    /// useHoverを利用すると、この処理が難しいので新たな関数にする
    const color = is_hover ? "#0af"
        : pathname === now_pathname ? "gray"
        : "black";

    return ({
        color,
        setHover,
        setUnhover
    })
}


type NavLinkProps = {
    pathname: string
    text: string
}
const NavLink: React.FC<NavLinkProps> = ({
    pathname,
    text
})=>{
    const { color, setHover, setUnhover } = useLinkHover(pathname);
    const style = ({
        color
    })

    return (
        <Link href={pathname}>
            <a style={style}
                className={mystyles.footer_item}
                onMouseOver={setHover}
                onMouseLeave={setUnhover}
            >
                {text}
            </a>
        </Link>
    )
}



const FooterDiv: React.FC<{}> = ()=>{
    return (
        <div className={mystyles.footer}>
            <NavLink pathname="/" text="Home" />
            <NavLink pathname="/about" text="About" />
            <NavLink pathname="/history" text="History" />
            <NavLink pathname="/work" text="Work" />
        </div>
    )
}




type LayoutProps = {
    children: React.ReactNode
    title: string
}
const Layout: React.FC<LayoutProps> = ({
    children,
    title
})=>{
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
                    <MarginDiv tRem={4} />
                    <FooterDiv />
                </main>
            </div>
        </div>
    )
}



export default Layout;