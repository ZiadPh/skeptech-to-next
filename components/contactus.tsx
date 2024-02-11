import React from 'react'
import GSAP from 'gsap'
import { useEffect, useRef} from 'react'
import Footer from './Footer'

const ContactUs = React.forwardRef<HTMLDivElement>((props, ref) => {

  const title = useRef(null)
  useEffect(()=>{
    GSAP.to(title.current,{
      duration:1,
      y:0,
      opacity:1,
      stagger: .1,
      ease: "power2"
    })
  },[])
  return (
    <div ref={ref} className="contact-wrapper" id='contact' data-scroll-section>
        <div className="contact-container">
            <div ref={title} className="contact-title">
                Have a <br/>Project <br/>Idea? 
            </div>
            <div className="email-us">
              
              <div className="email-text">
                 EMAIL US
              </div> 
              <a className="email" target="_blank" href='mailto:INQUIRE@SKEPTECH.CO.UK'>
                INQUIRE@SKEPTECH.CO.UK
              </a>
            </div>
            <Footer/>
        </div>
    </div>
  )
})

export default ContactUs