import '@/styles/globals.css'
import { RecoilRoot } from 'recoil'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes'




export default function App({ Component, pageProps }) {

  // useEffect(()=>(
  //    AOS.init()
  // ),[])

  return (
    <RecoilRoot>
     <ThemeProvider>

        <Component {...pageProps} />
     </ThemeProvider>
   
    </RecoilRoot>
  )
}
