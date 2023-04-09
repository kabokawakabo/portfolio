import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Home.module.css";
import mystyles from "../../styles/mystyle.module.css";

//import { useHover } from "../util/hook";

import { MarginDiv } from "../MarginDiv";
import { LoadingBackdrop } from "./LoadingBackdrop";

const useGetColor = (is_hover: boolean, now_pathname: string) => {
    const { pathname } = useRouter();

    if (is_hover) return "#0af";
    else if (pathname === now_pathname) return "gray";
    return "black";
};

const useLinkHover = (now_pathname: string) => {
    const [is_hover, setIsHover] = useState(false);
    const setHover = () => setIsHover(true);
    const setUnhover = () => setIsHover(false);

    /// useHoverを利用すると、この処理が難しいので新たな関数にする
    const color = useGetColor(is_hover, now_pathname);

    return {
        color,
        setHover,
        setUnhover,
    };
};

type NavLinkProps = {
    pathname: PagePath;
    text: string;
};
const NavLink: React.FC<NavLinkProps> = ({ pathname, text }) => {
    const { color, setHover, setUnhover } = useLinkHover(pathname);
    const style = {
        color,
    };

    return (
        <Link href={pathname}>
            <a
                style={style}
                className={mystyles.footer_item}
                onMouseOver={setHover}
                onMouseLeave={setUnhover}
            >
                {text}
            </a>
        </Link>
    );
};

const page_links: NavLinkProps[] = [
    { pathname: "/", text: "Home" },
    { pathname: "/about", text: "About" },
    { pathname: "/history", text: "History" },
    { pathname: "/work", text: "Work" },
];
const FooterDiv: React.FC<{}> = () => {
    return (
        <div className={mystyles.footer}>
            {page_links.map((d, i) => {
                return <NavLink key={i} {...d} />;
            })}
        </div>
    );
};

type LayoutProps = {
    children: React.ReactNode;
    title: string;
};
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div>
            <LoadingBackdrop />
            <div className={styles.container}>
                <Head>
                    <title>{title}</title>
                </Head>
                <main className={styles.main}>
                    <div>{children}</div>
                    <MarginDiv tRem={4} />
                    <FooterDiv />
                </main>
            </div>
        </div>
    );
};

export default Layout;
