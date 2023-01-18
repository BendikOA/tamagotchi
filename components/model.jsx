import { PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, './Models/tama2.gltf')

    return (
        //<PresentationControls    speed={1.5}    global zoom={0.7}  polar={[-0.1, Math.PI / 4]} >
         <Stage environment={"city"} intensity={0.6} contactShadow={false} >

         <Suspense fallback={null}>
             <primitive object={gltf.scene} />
         </Suspense>

         </Stage>
         
        //</PresentationControls>
    );
};



export default Model;