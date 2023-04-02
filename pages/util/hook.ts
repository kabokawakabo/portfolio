import { useState } from "react";


export const useHover = ()=>{
    const [color, setColor] = useState("#000");
    const setHover = ()=>setColor("#0af");
    const setUnhover = ()=> setColor("#000");

    return ({
        color, setHover, setUnhover
    })
}