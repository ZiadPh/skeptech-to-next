import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import React from "react";
import { Stats } from '@react-three/drei'
import  Model from './Model'





//Render Function
function ThreeCanvas(props) {

  const [scrollProgress, setScrollProgress] = useState(props.scrollProgress);
 const progress = props.scrollProgress
 const  clr = props.clr

  return ( 
    
    <div className='ThreeCanvas'
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: -1, // Set a lower zIndex to ensure it's behind other content.
    }}>
      <Canvas
        dpr={1}
        frameloop="demand"
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1,
          far: 1000,
          position: [0,0,4],
          rotation: [0,0,0]
        }}
      > 

        <color args={['#181b1f']} attach={'background'}/>              
          <Model message={progress} clr={clr}/>
        <Stats /> 
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;