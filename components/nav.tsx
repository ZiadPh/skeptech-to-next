import React from 'react'
import { useClock } from 'react-use-clock'
import Link from 'next/link';



const Nav = ({ currentPage }) => {

  const clock = useClock()


  return (
    <div className='nav'>
        <Link href={ currentPage === "/" ? "#main" : "../#main" } className="stack" >
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
            <li><Link href={ currentPage === "/" ? "#projects" : "../#projects" } className='projects-nav' ><button>PROJECTS</button></Link></li>
            <li><Link href={ currentPage === "/" ? "#about" : "../#about" } className='about-nav' ><button>ABOUT US</button></Link></li>
            <li><Link href={ currentPage === "/" ? "#contact" : "../#contact" } className='contact-nav' ><button>CONTACT</button></Link></li>
        </ul>
    </div>
  )
}

export default Nav