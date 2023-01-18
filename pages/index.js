import Head from 'next/head'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import Video from '../components/Video'
import Hero3 from '../components/Hero3'
import { motion as m } from "framer-motion";

export default function Home() {
  return (
<m.div     
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut"}}
    exit={{ opacity: 1 }}>
  <Head>
        <title>Tamagotchi</title>
        <meta name="description" content="The egg watch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Video className="fixed"/>
      <Hero className="z-10"/>
      <Hero2 className="z-10"/>
      <Hero3 className="z-10"/>
      <Footer className="z-10" />
    </m.div>
  )
}
