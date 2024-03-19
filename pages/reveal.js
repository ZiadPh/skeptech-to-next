import Nav from "../components/nav"
import Image from "next/image"
import reveal from '../assets/rvl.png'
import scout from '../assets/rvl3.jpg'
import map from '../assets/rvl2.png'
import { useState , useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion as m } from 'framer-motion'
import { InstagramEmbed } from 'react-social-media-embed';
import Footer from "../components/Footer"

export default function pixel() {

    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
      // Function to update the viewport size
      function handleResize() {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add an event listener to update the viewport size when the window is resized
      window.addEventListener('resize', handleResize);
  
      // Initial call to set the viewport size
      handleResize();
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

return(
    <div className="reveal">
        <Nav />
        <m.div className="sections"
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
        pageInitial: {
            opacity: 0,
            backgroundColor: '#000', // Set the background color to black
        },
        pageAnimate: {
            opacity: 1,
            backgroundColor: 'transparent', // Set the background color to black
        },
        pageExit: {
            opacity: 0,
            backgroundColor: '#000', // Set the background color to black
        },
        }}
        transition={{ duration: 0.5 }}
        >
            <div className="section-1">
                <div> 
                {/* Section Margin 68% */}
                    <div>
                    {/* Container for image and Title wrapper */}
                        <Image src={reveal}  />    
                        <div>
                        {/*Title wrapper */}
                            <div>#01</div>
                            <ul>
                                <li>
                                    <div>Sketech Website Reveal</div>
                                    <div>_</div>
                                </li>
                                <li>Service: Filmmaking</li>
                                <li>Client Name: SkepTech</li>
                            </ul> 
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="section-3">
                <div>
                    <h2>Project Description:</h2>

                    <p>In this project we crafted a mesmerizing teaser to herald the launch of our new website. Through a blend of cinematic storytelling and unique aesthetics, we immersed viewers in the avant-garde world of Skeptech.

                    The teaser opens with the classic dial-up sound, setting a tone of anticipation and mystery.<br/> We then guide viewers through a visual journey, showcasing the intricate details of Skeptech's innovative designs.

                    With compelling cinematography and dynamic editing, we build suspense towards the unveiling of our highly anticipated website.<br/><br/> The teaser culminates in a powerful reveal of the Skeptech logo, leaving an indelible impression of the studio's visionary ethos.

                    This project allowed us to translate Skeptech's bold vision into a compelling visual narrative, setting the stage for the launch of this groundbreaking website.
                    </p>
                </div>

            </div>

            <div className="section-5">
                    <h1>Behind the Scenes</h1>
                    <div className="Carousel">
                        <Carousel dynamicHeight={true} width={viewportSize.width*0.8} >
                            <div>
                                <Image src={map} alt="null"/>
                                <p className="legend">Locating Red Phone Boxes so we can pick our shooting location ahead</p>
                            </div>
                            <div>
                                <Image src={scout} alt="null" />
                                <p className="legend">Scouting all the possible locations and trying different booths to see which one would suit the idea</p>
                            </div>
                        </Carousel>
                    </div>
            </div>
            <div className="section-4 ">
                <h1>Final Result</h1>
                <InstagramEmbed url="https://www.instagram.com/p/CwBWSG8MNCR/" className='embed' />
            </div>
            <Footer/>
        </m.div>
    </div>

)
}