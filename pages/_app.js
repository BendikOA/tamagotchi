import '../styles/globals.css';
import { Sono } from "@next/font/google";
import Navbar from '../components/Navbar';
import Video from '../components/Video';
import { AnimatePresence } from 'framer-motion';

const sono = Sono({
  subsets: ["latin"],
  weight: "400",
})

function MyApp({ Component, pageProps, router }) {
  return (<>
    <Navbar />
    <AnimatePresence initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
    </>
  ) 
}

export default MyApp
