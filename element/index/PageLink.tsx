import Link from "next/link";


import styles from '../../styles/Home.module.css';




type PageLinkProps = {
    path: PagePath
    title: string
    description: string
}
export const PageLink: React.FC<PageLinkProps> = ({
    path,
    title,
    description
})=>{
    return (
        <Link href={path}>
        <a className={styles.card}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
        </a>
        </Link>  
    )
}
  