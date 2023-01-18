import React from 'react';
import Image from 'next/image';
import fimage from "../public/ox.webp";
import { FaArrowDown, FaGamepad } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  return (
    <div className='overflow-hidden'>
      <div className='relative flex mt-[80px] lg:mt-[100px] ml-[20px] lg:ml-[80px]  mb-0 max-w-[70%] lg:max-w-[58%]'>
          <div className='min-w-full'>
              <h2 className='text-3xl font-semibold hidden md:block'> 3D view of the Tamagotchi <span className="font-fancy1">"Egg Watch"</span></h2>
          </div>
      </div>        
      <div className='mix-w-full flex items-center justify-center'>
          <div className='relative mx-auto min-w-[91.5%] justify-center align-middle border-t-2 border-black'></div>
      </div>
      {/*<FaGamepad className='absolute top-50 right-0 left-0 ml-[48%] text-6xl mx-auto mt-10'/>*/}

    </div>
  )
}

export default Hero