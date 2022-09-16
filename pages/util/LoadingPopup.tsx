// 参考:https://deecode.net/?p=1891
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import mystyles from "../../styles/mystyle.module.css";


export default function LoadingPopup() {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setPageLoading(true)
    const handleComplete = () => setPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

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