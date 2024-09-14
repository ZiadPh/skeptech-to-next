import React, { forwardRef, useEffect, useRef } from 'react'
import GSAP from 'gsap'
import Logo from '../logo'

const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  const title = useRef(null)
  const des = useRef(null)
  const arr = [title.current, des.current]
  useEffect(()=>{
    GSAP.to('.hi',{
      duration:1,
      y:0,
      opacity:1,
      stagger: .1,
      ease: "power2"
    })
  },[])
  return (
    <div ref={ref} className="hero-container" id="main" data-scroll-section >
        <div className="right">
          <div className="hey">
            <Logo/>
            <div className="title hi">SkepTech</div>
          </div>
          <div className="hey">
            <div className="quote hi">"Crafting a <span className="highlight">healthier</span>, <span className="highlight">more vibrant</span> online world."</div>

          </div>
        </div>
      
    </div>
  )
})

export default Hero