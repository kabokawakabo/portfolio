import { useState } from "react";


export const useHover = ()=>{
    const [color, setColor] = useState("#000");
    const hoveredFC = ()=>setColor("#0af");
    const unhoveredFC = ()=> setColor("#000");

    return ({
        color, hoveredFC, unhoveredFC
    })
}