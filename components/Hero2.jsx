import React from 'react';
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";

const Hero2 = () => {
  return (
    <div className='relative overflow-hidden'>
        <div className='inline-block ml-[30px] lg:ml-[100px] mt-[80px] lg:mt-[100px]'>
                <h2 className='flex text-center text-2xl font-fancy1 font-semibold' data-aos="fade-down">History</h2>
            <div className='mix-w-full flex items-center justify-center'>
                <div className='relative   border-t-2 border-black mr-[200px] md:w-[100%] md:mr-[980px]' data-aos="fade-right" delay="500"></div>
            </div>
                 <p className='flex text-md font-medium	lg:leading-8 font-mainfont lg:mt-8 max-w-[90%] md:max-w-[70%] lg:max-w-[35%]' data-aos="fade-left" delay="800">Tamagotchi was invented by Aki Maita and Akihiro Yokoi in 1996. They both won the 1997 Ig Nobel Prize for economics, dubbing them the father and mother of tamagotchi. </p>
        </div>
        
    </div>  )
}

export default Hero2