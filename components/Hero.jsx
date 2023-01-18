import React from 'react';
import Image from 'next/image';
import fimage from "../public/ox.webp";
import { FaArrowDown } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  const arrowScroll = () => {
    window.scroll(0, 800)
  }
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div className='overflow-hidden'>
      <div className='relative flex mt-[80px] lg:mt-[100px] ml-[20px] lg:ml-[80px]  mb-0 max-w-[70%] lg:max-w-[54%]'>
          <div className='min-w-full'>
              <h2 className='text-3xl font-semibold hidden md:block' data-aos="fade-right" delay="300"> The Tamagotchi  (Japanese: たまごっち, IPA: [tamaɡotꜜtɕi],<span className="font-fancy1">"Egg Watch"</span>) is a handheld digital pet that was created in Japan by <span className="font-fancy1">Akihiro Yokoi</span> of WiZ and <span className="font-fancy1">  Aki Maita </span> of Bandai.</h2>
              <h2 className='text-3xl font-semibold lg:hidden' data-aos="fade-right"> The Tamagotchi <span className="font-fancy1">"Egg Watch"</span></h2>
          </div>
      </div>        
      <div className='mix-w-full flex items-center justify-center'>
          <div className='relative mx-auto min-w-[91.5%] justify-center align-middle border-t-2 border-black' data-aos="fade-left" delay="500"></div>
      </div>
      {/*<FaGamepad className='absolute top-50 right-0 left-0 ml-[48%] text-6xl mx-auto mt-10'/>*/}
      <div className="relative flex flex-col md:gap-[150px] lg:gap-[280px] py-5 lg:flex-row md:flex-row md:flex-wrap lg:flex-wrap justify-center lg:mb-8">

          <div className=' basis-1/3 flex max-w-[100%] p-5 md:h-[50%] lg:max-w-[50%] mt-5 md:mr-[100px]'>
          <Image src={fimage} alt="" className='border-4 rounded-lg shadow-lg border-black' data-aos="fade-up" delay="500"/>
          </div>

          <div className='basis-1/3 flex max-w-[100%] p-5 lg:max-w-[70%] mt-5 ml-2 lg:ml-0'>
          <p className='text-md font-medium lg:leading-9 font-fancy1 lg:mt-8' data-aos="fade-down" delay="800">According to Bandai, the name is a portmanteau combining the two Japanese words tamago (たまご), which means "egg", and uotchi (ウオッチ) "watch". After the original English spelling of watch, the name is sometimes romanized as Tamagotch without the "i" in Japan. <FaArrowDown onClick={arrowScroll} className='relative text-4xl mx-auto mt-[170px] cursor-pointer hover:text-gray-500 duration-100 hover:border-b-2 border-black text-md font-normal'/></p>
          </div>


      </div>
    </div>
  )
}

export default Hero