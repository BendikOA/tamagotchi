import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Model from "../components/model";

import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from '@react-three/drei';


const Hero5 = () => {
      
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div className='relative overflow-hidden'>
              <div className='relative flex  mb-0  h-screen'>

        <Canvas shadows camera={{ position: [1, 0, 12], fov: 100 }}>
        <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative',  colorBlend: 2, opacity: 2 }} adjustCamera={0.9}>

        <fog attach="fog" args={["#213547", 10, 20]} />

        <Model />
        </Stage>
        <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

        </Canvas>
   </div>
  </div>
  )
}

export default Hero5