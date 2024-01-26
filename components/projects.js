import React from 'react'
import GSAP from 'gsap'
import { useRef, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from './tabs'

const projects = React.forwardRef(( props ) => {
  //Pass the handletab click props
  const websites = props.websites
  const videos = props.videos
  const ARVR = props.videos
  const ref = props.ref
  const tabProps = props.tabProps
  
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
  

    const tabTitles = [
      <div>
        <h2>Website Design</h2>
      </div>,

      <div>
        <h2>Video Production</h2>
      </div>, 

      <div>
        <h2>AR / VR</h2>
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
                        <button className='tdn' onClick={props.handleNavigate(videos.link)}>
                            <span className="project-name">
                              <span className='project-number'>
                                #0{index+1}
                              </span>
                              {videos.name} 
                            </span>
                        </button>
                        <Image className='image' src={videos.url} />
                      <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
                        <div className="project-title">{props.videos.dTitle}</div><div className="project-desc">
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

          <div className="project-container" >
                  
          <div  className="projects-title"><span className='projects-number'>#00</span> Projects</div>
          {
            ARVR.map((ARVR, index) =>(
              <div className="project" key={index}>
                <ul>
                  <li>
                    <Link className='tdn' href={ARVR.link} > 
                      <span className="project-name">
                        <span className='project-number'>
                          #0{index+1}
                        </span>
                        {ARVR.name} 
                      </span>
                    </Link>
                      <Image className='image' src={ARVR.url} />
                    <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
                      <div className="project-title">{ARVR.dTitle}</div>
                      <div className="project-desc">
                        {ARVR.description}
                      </div>
                    </div>
                    <div className="dash">
                    </div>
                  </li>
                </ul>
                
              </div>
              
            ))
          }
          </div>
    ];      
    
    //-----------------------------------------------------------------------------------------------
  
  return (
      <div ref={ref} className="projects-wrapper" id="projects" data-scroll-section>
        <Tabs tabs={tabTitles} contents={tabContents} tabProps={tabProps} />
      </div>
  )
})

export default projects