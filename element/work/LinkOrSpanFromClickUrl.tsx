/*
    クリック先のurlがある場合のみ、a要素にしてクリックできる感を出す
    work名表示も リンク有無で色変えたいので同じコンポーネント内部に表示
*/

import mystyles from "../../styles/mystyle.module.css";

import { useHover } from "../../util/hook";

type WorkTitleProps = {
    title: string;
    color: string;
};
const WorkTitle: React.FC<WorkTitleProps> = ({ title, color }) => {
    const style = {
        color,
    };

    return <h2 style={style}>{title}</h2>;
};

type LinkOrSpanFromClickUrlProps = {
    clickUrl: string;
    title: string;
    children: React.ReactNode;
};
export const LinkOrSpanFromClickUrl: React.FC<LinkOrSpanFromClickUrlProps> = ({
    clickUrl,
    title,
    children,
}) => {
    const is_url = clickUrl.indexOf("http") !== -1;
    const { color, setHover, setUnhover } = useHover();

    if (!is_url)
        return (
            <span className={mystyles.card}>
                <WorkTitle title={title} color="black" />
                {children}
            </span>
        );

    return (
        <a
            href={clickUrl}
            className={mystyles.card + " " + mystyles.card_link}
            onMouseEnter={setHover}
            onMouseLeave={setUnhover}
        >
            <WorkTitle title={title} color={color} />
            {children}
        </a>
    );
};
