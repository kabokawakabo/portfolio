import styles from "../../styles/Home.module.css";

import { PageLink } from "./PageLink";

const useRandomePath = (): PagePath => {
    const v = Math.random();
    return v < 0.3 ? "/about" : v < 0.6 ? "/history" : "/work";
};

type PageObj = {
    path: PagePath;
    title: string;
    description: string;
};
const pages: PageObj[] = [
    { path: "/about", title: "About", description: "生態に迫る？！" },
    { path: "/history", title: "History", description: "経歴を覗き見" },
    { path: "/work", title: "Work", description: "作った作品紹介" },
];
export const PageLinks: React.FC<{}> = () => {
    const random_path = useRandomePath();
    const pages_with_random: PageObj[] = [
        ...pages,
        {
            path: random_path,
            title: "Random",
            description: "見るものに悩んでいる方へ",
        },
    ];

    return (
        <div className={styles.grid}>
            {pages_with_random.map((d, i) => {
                return <PageLink key={i} {...d} />;
            })}
        </div>
    );
};
