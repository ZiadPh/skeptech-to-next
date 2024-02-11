import Nav from "../components/nav"
import Footer from '../components/Footer'
import Image from "next/image"
import ehab from '../assets/ehabSquared.png'
import sb from '../assets/StoryBoard.jpg'
import VFX1 from '../assets/VFX1.png'
import VFX2 from '../assets/VFX2.png'
import VFX3 from '../assets/VFX3.png'
import { useState , useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion as m } from 'framer-motion'
import { InstagramEmbed } from 'react-social-media-embed';

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
    <div className="ehab-wrap">
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
                        <Image src={ehab}  />    
                        <div>
                        {/*Title wrapper */}
                            <div>#01</div>
                            <ul>
                                <li>
                                    <div>Exhausted by Fumes and Drivers: Teaser</div>
                                    <div>_</div>
                                </li>
                                <li>Service: Cinematography and VFX</li>
                                <li>Client Name: Ehab Ehab</li>
                            </ul> 
                        </div>
                    </div>
                    <div>
                    {/* Container for first Paragraph*/}
                        <div>
                            Background:
                        </div>
                        <div>
                            A Visual artist, born in Cairo in 2000, Ehab lives and works in Cairo. He graduated from
                            Applied Arts in Helwan University,2023. He is interested in practicing visual arts in all its
                            forms, and experimenting with many materials and techniques such as drawing, painting,
                            digital painting, sculpture, graffiti and murals, but despite that, most of his production are
                            paintings. 
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div>
                    <h2>Context:</h2>
                    <ul>
                        <li>  {/* #1 */}
                            <span>
                            Artist Statement:&nbsp;
                            </span>
                            <br/> When the sounds race the visual, you end up seeing the fire with a background of deadly silence, or you hear the sound of the crashing before the suicide from the top of the building.
                            <br/>From a locked room and in between the events but not in them, in a solo clash against the mass, the one and against myself. How to restore a fallen apart city that exists on crumbling grounds? How can you make sure that my statement has meaning and not just artistic pretend? I tend to lose my feelings quite a lot towards this unending war.                        </li>
                        <li> {/* #2 */}
                            <span>
                            Description:&nbsp;
                            </span>
                            <br/> In an extremely busy third world city and with complex social conflicts and vicious confrontations, I lose my sense of meaning behind this unending war and clear contradiction between the humane meaning and shocking reality. What is common and why? In whos hands is the power?<br/> And why? Rebelling, is it the answer or the tool? And to what extent is it going to push us?<br/>Does it really matter?          </li>                       

                    </ul>
                </div>

            </div>
            <div className="section-4 ">
                <h1>Shot List:</h1>
                <Image src={sb} />
                <p>Featuring the proposed storyboard made by Ehab Ehab to illustrate his vision towards the end result</p>
            </div>

            <div className="section-5">
                    <h1>Behind the Scenes</h1>
                    <div className="Carousel">
                        <Carousel dynamicHeight={true} width={viewportSize.width*0.8} >
                            <div>
                                <Image src={VFX1} alt="null"/>
                                <p className="legend">Building the whole 3D scene of his room using a different range of 3D models and Photogrammetry</p>
                            </div>
                            <div>
                                <Image src={VFX2} alt="null" />
                                <p className="legend">Tracking 9 faces in a 10 seconds footage in an attempt of attaching traffic cones to their heads</p>
                            </div>
                             <div>
                                <Image src={VFX3} alt="null" />
                                <p className="legend">Simulating the lighting to match the scenes using Blender's generic point lights and shadow catchers</p>
                            </div>
                            <div>
                                <iframe frameborder="0"
                                allowfullscreen="" 
                                scrolling="no"
                                allow="autoplay;fullscreen"
                                style={{height: "80vh" , width: "100%" , objectFit: 'cover' }}
                                src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2Flh3kp6xiaf44odavlagow%2Ffall.mp4%3Frlkey%3D4obmstgdbxjs64ys3syjn2aa6%26raw%3D1&poster=&time=false&progressBar=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&quality=720p&playButton=false"
                                 />
                                <p className="legend">Getting realistic body postures for my 3D character using Mixamo's animation library
</p>
                            </div>
                        </Carousel>
                    </div>
            </div>
            <div className="section-4 ">
                <h1>Final Result</h1>
                <InstagramEmbed url="https://www.instagram.com/p/CleMfhZtcqo/" height={viewportSize.height*0.9} width={viewportSize.width*0.3} />
            </div>
            <Footer/>
        </m.div>
    </div>

)
}