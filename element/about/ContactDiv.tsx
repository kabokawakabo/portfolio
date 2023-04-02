import { useState } from "react";

import { IconType } from 'react-icons';
import { SiTwitter, SiGithub, SiObservable } from "react-icons/si";


import mystyles from "../../styles/mystyle.module.css";

import { useHover } from "../../util/hook";


type IconCategory = "twitter"|"github"|"observable";
const getIconType = (category: IconCategory): IconType=>{
    if(category === "twitter") return SiTwitter;
    if(category === "github") return SiGithub;
    
    return SiObservable;
}

const getHref = (category: IconCategory): string=>{
    if(category === "twitter") return "https://twitter.com/kabokawakabo";
    if(category === "github") return "https://github.com/kabokawakabo";
    
    return "https://observablehq.com/@vqkrac1fogbevmc"
}


type LinkIconProps = {
    category: IconCategory
}
const LinkIcon: React.FC<LinkIconProps> = ({
    category,
})=>{
    const { color, setHover, setUnhover} = useHover();
    const IconType = getIconType(category);
    const to = getHref(category);

    return (
        <a className={mystyles.margin_icon} href={to}>
            <IconType
                size="50"
                color={color}
                onMouseEnter={setHover}
                onMouseLeave={setUnhover} />
        </a>
    )
}




export const ContactDiv: React.FC<{}> = ()=>{
    return (
        <div className={mystyles.group}>
            <h1 className={mystyles.sub_title}>外部Link</h1>
            <div>
                <LinkIcon category="twitter" />
                <LinkIcon category="github" />
                <LinkIcon category="observable" />
            </div>
        </div>
    )
}