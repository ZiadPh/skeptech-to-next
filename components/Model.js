import {useRef, useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from "react";
import { useGLTF } from "@react-three/drei";
import DNA from "../assets/dna.glb" 
import { animated } from 'react-spring';



//Model loading Function
function Model(props) {
    //------------------(The Shader)-----------------
    const number = 662742;
    const clr = props.clr
    console.log(clr)
    const randoms = new Float32Array (number /3);
    const colorRandoms = new Float32Array (number /3);
    for(var i = 0; i < number / 3; i++) {
      randoms.set( [Math.random ()] ,i) ;
      colorRandoms.set( [Math.random()],i) ;
    }
    
      const materialRef = useRef();
      const material = new THREE.ShaderMaterial( {
    
        uniforms: {
    
          time: 0,
          uColor1: {value: new THREE.Color(clr)},
          uColor2: {value: new THREE.Color(clr)},
          uColor3: {value: new THREE.Color(clr)},
    
        },
    
        vertexShader: `
          varying vec2 vUv;
          varying float colorR;
          attribute float randoms;
          attribute float cRandoms;
          void main() {
            vUv = uv;
            colorR = cRandoms;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = (70. * randoms + 15.0) * (1. / - mvPosition.z) ;
            gl_Position = projectionMatrix * mvPosition;
        }`,
    
        fragmentShader: ` 
        uniform float time;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying float colorR;
        vec3 finalColor;
        
        varying vec2 vUv;
        void main() {
    
            float alpha = 1.0 - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));
            if(colorR > .33 && colorR < .66){
              finalColor = uColor2;
            }
    
            else if(colorR > .66){
              finalColor = uColor3;
            }
    
            else{
              finalColor = uColor1;
            }
            gl_FragColor = vec4(finalColor, alpha);
    
          }
          
        
        `
      
        });
    
    
    //------------------(The Actual mesh)------------
      const [data, setData] = useState(props.message);
     
      const gltf = useLoader(GLTFLoader, DNA)
      const { nodes } = useGLTF(DNA);
    
      gltf.materials.map = material
      gltf.scene.children[0].geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms,1))
      gltf.scene.children[0].geometry.setAttribute('cRandoms', new THREE.BufferAttribute(colorRandoms,1))
      material.transparent = true;
      material.depthTest = false;
      material.depthWrite = false;
      material.blending = THREE.AdditiveBlending;
      const mesh = new THREE.Points(gltf.scene.children[0].geometry, material)
      const wave = useRef()
      
     
      const a = props.message
      
    
      const [clock] = React.useState(new THREE.Clock());
    
      useFrame(( state , delta) => {
        if (materialRef.current) {
          // Update the uniform in the shader material
          materialRef.current.uniforms.color.value.set(color.r, color.g, color.b);
    
    
        }
    
        // Will be 0 when the scrollbar is at the starting position,
        // then increase to 1 until 1 / 3 of the scroll distance is reached
        wave.current.rotation.x  =  THREE.MathUtils.damp(wave.current.rotation.x, (-Math.PI / 1.9) * a, 4, delta)
        wave.current.rotation.z  =  THREE.MathUtils.damp(wave.current.rotation.z, (-Math.PI / 2.8) * a, 4, delta)
        wave.current.position.x = THREE.MathUtils.damp(wave.current.position.x, (-Math.PI / 1.45) * a, 4, delta)
        wave.current.position.z = THREE.MathUtils.damp(wave.current.position.z, (-Math.PI / 1.45) * 0.5 * a, 4, delta)
    
        state.ready = false;
        const timeUntilNextFrame = (1000 / props.fps) - clock.getDelta();
    
        setTimeout(() => {
          state.ready = true;
          state.invalidate();
        }, Math.max(0, timeUntilNextFrame));
    
    
      },[])
      
    
    
      return (
    
        <group {...props} dispose={null}>
          <points  ref={wave}  position={[0,0,0]} rotation={[0,-0.57,0]} 
            geometry={nodes.wave1.geometry}
            material={material}
          />
        </group>
      )
    }
    useGLTF.preload("/dna-03.glb")
    export default animated(Model)