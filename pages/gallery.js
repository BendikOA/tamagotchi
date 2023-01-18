import { motion as m } from "framer-motion";
import Footer from '../components/Footer'
import Hero4 from "../components/Hero4";
import Headline from "../components/Headline2";


export default function Home() {
  return (
    <m.div 
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut"}}
    exit={{ opacity: 1 }}
    className="text-gray-900 absolute top-0 left-0 w-full bg-orange-50 min-h-screen">
      <Headline  className="z-10"/>
      <Hero4
      className="z-15" />
      <Footer className="z-10" />
    </m.div>
  )
}
