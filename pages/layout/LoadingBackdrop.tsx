// 参考:https://deecode.net/?p=1891
import { NextRouter, useRouter } from "next/router"
import { useEffect, useState } from "react"

import mystyles from "../../styles/mystyle.module.css";

import { allowScroll, disallowScroll } from "../util/scroll";



type RouterEventProps = {
  router: NextRouter,
  handleStart: (url: string)=> void
  handleComplete: ()=> void
}
const eventOn = ({router, handleStart, handleComplete}: RouterEventProps)=>{
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
}
const eventOff = ({router, handleStart, handleComplete}: RouterEventProps)=>{
    router.events.off('routeChangeStart', handleStart)
    router.events.off('routeChangeComplete', handleComplete)
    router.events.off('routeChangeError', handleComplete)
}

const useLoading = (): boolean=>{
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);

    const handleStart = (url: string) =>{
        if(url === router.asPath) return;
        setPageLoading(true);
        disallowScroll();
    }
    const handleComplete = ()=>{
        setPageLoading(false);
        allowScroll();
    }

    useEffect(() => {
        eventOn({router, handleStart, handleComplete});        

        return () => {
            eventOff({router, handleStart, handleComplete});
        }
    });

    return pageLoading;
}



type LoadingBackdropProps = {}
export const LoadingBackdrop: React.FC<LoadingBackdropProps> = ()=>{
    const pageLoading = useLoading();

    // TODO 正式なローディングコンポーネントにする
    const loadingComponent = (
        <div className={mystyles.loading_background}>
            <h2 className={mystyles.loading_popup}>Loading中...</h2>
        </div>
    )

    return (
        <>
          {pageLoading && loadingComponent}
        </>
    )
}