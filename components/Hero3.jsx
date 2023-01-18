import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero3 = () => {
      
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div className='relative overflow-hidden'>
    
    <div className="relative flex flex-col md:gap-[150px] lg:gap-[280px] lg:flex-row md:flex-row md:flex-wrap lg:flex-wrap justify-center lg:mb-[60px]">
    <div className='basis-1/3 flex max-w-[100%] p-5 lg:max-w-[80%] mt-5 ml-2 lg:ml-0' data-aos="fade-right" delay="800">
        <p className='text-md font-medium lg:leading-8 text-md font-mainfont max-w-[90%] lg:mt-8 md:ml-[80px]' >According to Bandai, the name is a portmanteau combining the two Japanese words tamago (たまご), which means "egg", and uotchi (ウオッチ) "watch". After the original English spelling of watch, the name is sometimes romanized as Tamagotch without the "i" in Japan.
        <br/>
        <br/>
        
        As of 2009, there have been over 44 Tamagotchi versions released since their creation, several of which were only released in Japan. Along with the original Tamagotchi, the first wave of Tamagotchi toys included Christmas, angel, and ocean themed versions.
</p>
        </div>
        <video className="basis-1/3 flex mx-auto max-w-[90%] md:max-w-[50%] border-4 border-black rounded-3xl shadow-lg mb-[10px]" src="./tama.mp4" type="video/mp4" autoPlay muted loop data-aos="fade-up"></video>
    </div>
  </div>
  )
}

export default Hero3