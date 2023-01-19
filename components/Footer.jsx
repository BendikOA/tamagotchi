import React from 'react'
import { AiFillLinkedin, AiOutlineMail, AiOutlineLink} from 'react-icons/ai';


const Footer = () => {
  return (
    <div>
      <div className='relative flex bg-gray-800 min-h-[40px]'>
             <div className='min-w-full'>
                        <div className="text-5xl flex justify-center gap-14 py-1 lg:gap-15 text-white mt-8">
          <a href="mailto:bendik940@gmail.com"><AiOutlineMail /></a>
                    <a href="https://codaclef.com"><AiOutlineLink /></a>

          <a href="https://www.linkedin.com/in/bendik-andersen" target="blank"><AiFillLinkedin /></a>
        </div> 
              <p className='text-white align-center text-center	 text-sm lg:max-w-[35%]  mx-auto p-5 mt-5'> This page is purely to practice, display and explore front-end webdev in React.
         
          </p>   <p className="pb-8 text-center text-xs text-white  max-w-[90%] lg:max-w-[50%] mx-auto">All art with the exception of the 3 icons from react-icons/ai library and the pixel-art on the screens are created by me.</p> 
            </div>
            <section>

      </section>
         </div>
    </div>
  )
}

export default Footer