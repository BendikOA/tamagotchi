import React from 'react';
import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import { motion as m } from "framer-motion";
import images from './Images';



const Hero4 = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  console.log(images)
  return (
    <m.div 
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ delay: 0.5, duration: 1}}
    className='overflow-hidden pt-[40px] pb-[0px] min-h-screen'>
      
      <m.div className="my-0 lg:mx-36 ">
      <div className="relative flex flex-col  lg:gap-[200px] py-5 lg:flex-row md:flex-row md:flex-wrap lg:flex-wrap justify-center lg:mb-8">

      <div className='basis-1/3 flex max-w-[100%] p-5 lg:max-w-[70%]  mb-6 ml-2 lg:ml-0'>
          <p className='text-md font-medium lg:leading-9 font-fancy1 lg:mt-8' data-aos="fade-down" delay="800">The success of the Tamagotchi was short-lived. The toy broke onto the scene in 1996, yet its heyday was over just two years later, by the spring of 1998. The images below are designed with the 90's nostalgic features but also with a modern reimagination. All art except the pixel-display is done by me. The axolotl is done by Oomles but found as an uncredited recoloring of the original. The clodsire pixel art I believe is from muoi_art.<br></br>
          <span className='font-bold'>Drag the slideshow below to reveal more styles</span>

          </p>
          </div>
          <video className="basis-1/3 flex mx-auto max-w-[90%] md:max-w-[50%] border-4 border-black rounded-3xl shadow-lg mb-[10px]" src="./ad.mp4" type="video/mp4" autoPlay muted loop data-aos="fade-up"></video>
          
          </div>
         <m.div ref={carousel} className="carousel cursor-grab overflow-hidden mt-[-50px]" whileTap={{cursor: "grabbing"}}> 
          <m.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel flex'>
          {images.map((image) => {
              return(
                <m.div className='item min-h-[33rem] min-w-[33rem] p-[40px]' key={image}>
                <Image src={image} alt="" className='w-[100%] h-[100%] rounded-lg pointer-events-none' />  
                </m.div>
              );
            })}
          </m.div>
         </m.div>
      </m.div>
    </m.div>
  )
}

export default Hero4