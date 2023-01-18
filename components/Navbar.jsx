import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";



const Navbar = () => {
    const [nav, setNav] = useState(false) ;


    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);


  return (
    <div className="absolute left-0 top-0 w-full z-10 ease-in duration-300  font-fancy1 z-5">
        <div className="max-w-[100%] m-auto flex justify-between items-center p-4 text-gray-900">
            <Link href="../">
            <h1 className="font-bold text-xl lg:text-xl md:ml-[65px] font-gameboy"  data-aos="fade-down">
                tamagotchi
            </h1>
            </Link>
            <ul className="hidden sm:flex flex-0 mr-4 md:mr-1">
                <Link href="/gallery">  
                  <li className="p-4 text-sm font-semibold lg:text-lg font-gameboy mr-1 ml-1 lg:mr-2 lg:ml-2 max-w-[50%] hover:scale-110" data-aos="fade-left" delay="300">
                      gallery
                  </li>
                </Link>
                <Link href="/3dview">  
                  <li className="p-4 text-sm font-semibold lg:text-lg font-gameboy mr-1 ml-1 lg:mr-2 lg:ml-2 max-w-[100%] hover:scale-110" data-aos="fade-left" delay="300">
                      3D view
                  </li>
                </Link>
            </ul>
            {/*mobile*/}
            <div onClick={handleNav} className="block sm:hidden z-10">
                {nav ? <AiOutlineClose className="text-white text-4xl bg-gray-900 rounded-md hover:" /> : <AiOutlineMenu size={30} className="text-black" />}
            </div>
            {/* mob menu*/}
            <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-fixed bg-center bg-cover custom-img3" : "sm:hidden absolute top-[-1000px] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-fixed bg-center bg-cover custom-img3"}>
            <ul className="pb-12 mt-10 text-gray-600 ">
                <li className="font-mainfont font-semibold p-4 text-2xl border-2 border-gray-600  m-4 ">
                    <Link href="#" onClick={handleNav}>tamagotchi History</Link>
                </li>
                <li className="font-mainfont font-semibold p-4 text-2xl border-2 border-gray-600  m-4 ">
                <Link href="#3d" onClick={handleNav}>gallery</Link>
                </li>
                <li className="font-mainfont font-semibold p-4 text-2xl  border-2 border-gray-600 m-4 ">
                    <Link href="#music" onClick={handleNav}>types</Link>
                </li>
                <li className="font-mainfont font-semibold p-4 text-2xl border-2 border-gray-600 m-4 ">
                    <Link href="#midipacks" onClick={handleNav}>a link </Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar