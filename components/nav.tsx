import React from 'react'
import { useClock } from 'react-use-clock'
import Link from 'next/link';



const Nav = ({  }) => {

  const clock = useClock()


  return (
    <div className='nav'>
        <Link href='#main' className="stack" >
          <span className='index1'>SKEPTECH</span>
          <span className='index2'>SKEPTECH</span>
          <span className='index3'>SKEPTECH</span>
        </Link>
        <div className='clock'>
          <strong>
          {clock.hours.toString().padStart(2, '0')}:
				  {clock.minutes.toString().padStart(2, '0')}:
          {clock.seconds.toString().padStart(2, '0')}&nbsp;
          </strong>
          
          -&nbsp;&nbsp;LIVERPOOL, UK (BST)   <span className='lowlight'>©2022</span></div>
        <ul className="pages">
            <li><Link href="#projects" className='projects-nav' >PROJECTS</Link></li>
            <li><Link href="#about" className='about-nav' >ABOUT US</Link></li>
            <li><Link href="#contact" className='contact-nav' >CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Nav