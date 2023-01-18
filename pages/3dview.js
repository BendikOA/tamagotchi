import { motion as m } from "framer-motion";
import Footer from '../components/Footer'
import Hero5 from "../components/Hero5";
import Headline from "../components/Headline3";


export default function Home() {
  return (
    <m.div 
    initial={{ x: "-100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut"}}
    exit={{ opacity: 1 }}
    className="text-gray-900 absolute top-0 left-0 w-full bg-orange-50 min-h-screen">
      <Headline  className="z-10"/>
      <Hero5
      className="z-15" />
      <Footer className="z-10" />
    </m.div>
  )
}