import React from 'react'
import GSAP from 'gsap'
import { useRef, useEffect} from 'react'
import DevMo from '../assets/devMo.png'
import GallerSkep from '../assets/GallerySkep.png'
import laptop from '../assets/laptop.png'
import ehab from '../assets/ehabSquared.png'
import CK from '../assets/elevatex.png'
import reveal from '../assets/rvl.png'
import turkish from '../assets/Stopmotion.png'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from './tabs'

const projects = React.forwardRef((props, ref ) => {
  //Pass the handletab click props
  const tabProps = props
  //projects reveal animation 
  useEffect(() =>{
    const cards = document.querySelectorAll('.project-name')

    const refrences = document.querySelectorAll('.project-name')
    const observer = new IntersectionObserver(
      entries =>{
        entries.forEach(entry =>{
          // entry.target.classList.toggle('show', entry.isIntersecting)
          if(entry.isIntersecting)
          GSAP.to(entry.target,{
            opacity: 1,
            y: 0,
            duration: 1
          })
          // console.log(entry.target)
        })
        
      },{
        threshold: 0,
        }
    )
    refrences.forEach(reference=>{
      observer.observe(reference)
    })
  },[])
  
  //-----------------------------------------------------------------------------------------------
  const websites = [
    {
  
      name: 'DevMohamed Portofolio',
      url: DevMo,
      link: '/devMo',
      dTitle: 'DEV / UX / 3D',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Elevate X: Marketing Agency',
      url: CK,
      link: '/elevatex',
      dTitle: 'DEV / UI',
      description: 'ElevateX, we undertook the challenge of redesigning their website to reflect their innovative approach and provide a seamless user interface.'
    },
    {
      name: 'Pixel10 Studio',
      url: GallerSkep,
      link: '/pixel11',
      dTitle: 'DEV / UX',
      description: 'Pixel10 Studio website is considered our very first commercial project which we take pride in participating to help a fellow creative studio to curate and showcase their work on the internet.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
  const videos = [
    {
  
      name: 'Exhausted by Fumes and Drivers',
      url: ehab,
      link: '/ehabSquared',
      dTitle: 'Cinematography / VFX',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Turkish Coffee',
      url: turkish,
      link: '/turkish',
      dTitle: 'Stopmotion',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Skeptech Reveal',
      url: reveal,
      link: '/reveal',
      dTitle: 'Creative Direction',
      description: 'Mission Bicycles is a custom bicycle store that provides unique and personalized bikes to customers. The company’s website offers a seamless and user-friendly experience, allowing customers to easily browse through various bike models and customize their preferred options. Additionally, the website has a built-in system that allows users to preview their customized bike before placing an order.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
  const ARVR = [
    {
  
      name: 'Store 62',
      url: DevMo,
      link: '/devMo',
      dTitle: 'Instagram Filter',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Catalyst',
      url: CK,
      link: 'https://www.behance.net/gallery/142011903/UXUI-Circle-K-Egypt-App-(Unofficial)',
      dTitle: 'Game Engine VR',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Notify',
      url: laptop,
      link: 'https://www.behance.net/gallery/149359567/UX-UI-Mission-Bicycle-Company-Redesign',
      dTitle: 'Instagram Filter',
      description: 'Mission Bicycles is a custom bicycle store that provides unique and personalized bikes to customers. The company’s website offers a seamless and user-friendly experience, allowing customers to easily browse through various bike models and customize their preferred options. Additionally, the website has a built-in system that allows users to preview their customized bike before placing an order.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
    const tabTitles = [
      <div>
        <h2 className='tab-text'>Website Design</h2>
      </div>,
      <div>
        <h2 className='tab-text'>Skeptech TV</h2>
      </div>
  
  ];
    const tabContents = [
            //-----------------------------------------------------------------------------------------------
      <div className="project-container"  >
        
        <div  className="projects-title"><span className='projects-number'>#00</span> Projects</div>
        {
          websites.map((websites, index) =>(
            <div className="project" key={index}>
              <ul>
                <li>
                  <Link className='tdn' href={websites.link} > 
                    <span className="project-name">
                      <span className='project-number'>
                        #0{index+1}
                      </span>
                      {websites.name} 
                    </span>
                  </Link>
                    <Image className='image' src={websites.url} />
                  <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
                    <div className="project-title">{websites.dTitle}</div><div className="project-desc">
                      {websites.description}
                    </div>
                  </div>
                  <div className="dash">
                  </div>
                </li>
              </ul>
              
            </div>
            
          ))
        }
      </div>,

      //-----------------------------------------------------------------------------------------------
      
      <div className="project-container" >
        
            <div  className="projects-title"><span className='projects-number'>#00</span> Projects</div>
            {
              videos.map((videos, index) =>(
                <div className="project" key={index}>
                  <ul>
                    <li>
                      <Link className='tdn' href={videos.link} > 
                        <span className="project-name">
                          <span className='project-number'>
                            #0{index+1}
                          </span>
                          {videos.name} 
                        </span>
                      </Link>
                        <Image className='image' src={videos.url} />
                      <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
                        <div className="project-title">{videos.dTitle}</div><div className="project-desc">
                          {videos.description}
                        </div>
                      </div>
                      <div className="dash">
                      </div>
                    </li>
                  </ul>
                  
                </div>
                
              ))
            }
          </div>,

        //-----------------------------------------------------------------------------------------------

          // <div className="project-container" >
                  
          // <div  className="projects-title"><span className='projects-number'>#00</span> Projects</div>
          // {
          //   ARVR.map((ARVR, index) =>(
          //     <div className="project" key={index}>
          //       <ul>
          //         <li>
          //           <Link className='tdn' href={ARVR.link} > 
          //             <span className="project-name">
          //               <span className='project-number'>
          //                 #0{index+1}
          //               </span>
          //               {ARVR.name} 
          //             </span>
          //           </Link>
          //             <Image className='image' src={ARVR.url} />
          //           <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
          //             <div className="project-title">{ARVR.dTitle}</div>
          //             <div className="project-desc">
          //               {ARVR.description}
          //             </div>
          //           </div>
          //           <div className="dash">
          //           </div>
          //         </li>
          //       </ul>
                
          //     </div>
              
          //   ))
          // }
          // </div>
    ];      //-----------------------------------------------------------------------------------------------
  
  return (
      <div ref={ref} className="projects-wrapper" id="projects" data-scroll-section>
        <Tabs tabs={tabTitles} contents={tabContents} tabProps={tabProps} />
      </div>
  )
})

export default projects