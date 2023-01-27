import '@/styles/globals.css'
import { RecoilRoot } from 'recoil'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



export default function App({ Component, pageProps }) {

  // useEffect(()=>(
  //    AOS.init()
  // ),[])

  return (
    <RecoilRoot>
     
        <Component {...pageProps} />
   
    </RecoilRoot>
  )
}
