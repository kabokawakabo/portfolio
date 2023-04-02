import { useState } from "react";

import { IconType } from 'react-icons';
import { SiTwitter, SiGithub, SiObservable } from "react-icons/si";


import mystyles from "../../styles/mystyle.module.css";




const useIconColor = ()=>{
    const [color, setColor] = useState("#000");
    const hoveredFC = ()=>setColor("#0af");
    const unhoveredFC = ()=> setColor("#000");

    return ({
        color, hoveredFC, unhoveredFC
    })
}

type IconCategory = "twitter"|"github"|"observable";
const getIconType = (category: IconCategory): IconType=>{
    if(category === "twitter") return SiTwitter;
    if(category === "github") return SiGithub;
    
    return SiObservable;
}


type LinkIconProps = {
    category: IconCategory
}
const LinkIcon: React.FC<LinkIconProps> = ({
    category,
})=>{
    const { color, hoveredFC, unhoveredFC } = useIconColor();
    const IconType = getIconType(category);

    return (
        <IconType
            size="50"
            color={color}
            onMouseEnter={hoveredFC}
            onMouseLeave={unhoveredFC} />
    )
}




export const ContactDiv: React.FC<{}> = ()=>{
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
                    <LinkIcon category="observable" />
                </a>
            </div>
        </div>
    )
}