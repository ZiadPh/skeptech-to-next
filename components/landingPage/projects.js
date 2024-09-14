import React from 'react'
import GSAP from 'gsap'
import { useRef, useEffect} from 'react'
import DevMo from '../../assets/devMo.png'
import GallerSkep from '../../assets/GallerySkep.png'
import laptop from '../../assets/laptop.png'
import CK from '../../assets/elevatex.png'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from './tabs'
import SkepTechTV from './skeptechTV'
import thumb from '../../assets/Thumb.png'

const projects = React.forwardRef((props, ref ) => {
  //Pass the handletab click props
  const tabProps = props
  //projects reveal animation 
  useEffect(() => {
    const cards = document.querySelectorAll('.project-name');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            GSAP.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          }
        });
      },
      { threshold: 0 }
    );
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  
    return () => {
      // Clean up the observer on component unmount
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  
  
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
      
      <SkepTechTV
        videoTitle="The Creative Process behind Logo Design"
        thumbnailSrc={thumb}
        watchUrl="https://www.youtube.com/watch?v=WosvfBIIONI&list=PLL97icebsKe_v6VBp-jBzU1sWPxNCzO_1"
      />   
    ];

   //-----------------------------------------------------------------------------------------------
  
  return (
      <div ref={ref} className="projects-wrapper" id="projects" data-scroll-section>
        <Tabs tabs={tabTitles} contents={tabContents} tabProps={tabProps} />
      </div>
  )
})

export default projects