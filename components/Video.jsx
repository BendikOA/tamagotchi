import React from 'react'

const Video = () => {
  return (
    <section class="fixed h-screen flex flex-col items-center justify-center z-0">
    <div class="video-docker fixed top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="./mqbg.mp4" type="video/mp4" autoPlay muted loop></video>
    </div>
    <div class="video-content space-y-2 items-center justify-center mx-auto text-center">
        <h1 class="font-light text-2xl text-center mx-auto ml-[50px] md:ml-[150px]">video broke</h1>
        <h3 class="font-light text-xl text-center mx-auto ml-[100px] md:ml-[950px]">your browser didnt support it</h3>
    </div>
</section>   )
}

export default Video