import Nav from "../components/nav"
import Image from "next/image"
import DM3D from '../assets/devMo.png'
import DMgif from '../assets/DMgif.gif'
import Cref1 from '../assets/ref1.png'
import Cref2 from '../assets/ref2.png'
import Cref3 from '../assets/ref3.png'
import Font1 from '../assets/font1.png'
import Font2 from '../assets/font2.gif'
import Color from '../assets/p11-color.png'
import { useState , useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion as m } from 'framer-motion'


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
    <div className="devMo-wrap">
        <Nav />
        <m.div
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
                        <Image src={DM3D}  />    
                        <div>
                        {/*Title wrapper */}
                            <div>#01</div>
                            <ul>
                                <li>
                                    <div>DevMohamed: Website</div>
                                    <div>_</div>
                                </li>
                                <li>Service: Website UI Design and Development</li>
                                <li>Client Name: Mohamed Ibrahim</li>
                            </ul> 
                        </div>
                    </div>
                    <div>
                    {/* Container for first Paragraph*/}
                        <div>
                            Background:
                        </div>
                        <div>
                            Pixel10 Studio is a startup agency specializing in providing high-quality Architectural Visualisation, Animation, Virtual Reality, and Interior Design services. With a team of talented professionals, they have successfully executed various projects for clients in the real estate, construction, and interior design sectors.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Section-2">
                <Image className="gif" src={DMgif} width={viewportSize.width}  alt="PixelGif"/>
            </div>
            <div className="section-3">
                <div>
                    <h2>Objectives:</h2>
                    <ul>
                        <li>  {/* #1 */}
                            <span>
                            Showcase Portfolio:&nbsp;
                            </span>
                            The website should prominently showcase their portfolio of completed projects, allowing visitors to experience the quality and creativity of their work in Architectural Visualisation, Animation, Virtual Reality, and Interior Design.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            Highlight Services:&nbsp;
                            </span>
                            Clearly present their core services, providing detailed information about each service offering, the process involved, and how they add value to clients' projects.                    </li> 
                        <li> {/* #3 */}
                            <span>
                            Enhance User Experience:&nbsp;
                            </span>
                            Create an intuitive and user-friendly website interface that enables visitors to navigate effortlessly and find the information they need. The website must be accessible on various devices and browsers.                    </li>
                        <li> {/* #4 */}
                            <span>
                            Generate Leads:&nbsp;
                            </span>
                            Incorporate effective call-to-action (CTA) elements throughout the website to encourage potential clients to inquire about their services or request quotes.                    </li>
                        <li> {/* #5 */}
                            <span>
                            Improve Brand Image:&nbsp;
                            </span>
                            Reflect the professionalism, creativity, and innovation that Pixel10 Studio brings to each project through the website's design and content.                    </li>
                        <li> {/* #6 */}
                            <span>
                            SEO Optimization:&nbsp;
                            </span>
                            Ensure that the website is search engine optimized, enabling better visibility in relevant search results and attracting organic traffic.                    </li>
                    </ul>
                </div>

            </div>
            <div className="section-4 ">
                <h1>Client References:</h1>
                <div className="Carousel">
                    <Carousel dynamicHeight={true} width={"68%"} >
                        <div>
                            <Image src={Cref1} alt="null"/>
                            <p className="legend">Eleven V visualisation studio</p>
                        </div>
                        <div>
                            <Image src={Cref2} alt="null" />
                            <p className="legend">Smiling Wolf creative agency</p>
                        </div>
                        <div>
                            <Image src={Cref3} alt="null"/>
                            <p className="legend">Wow Tapes creative agency</p>
                        </div>
                    </Carousel>
                </div>

            </div>
            <div className="section-5">
                <div className="s5-wrapper">
                    <h1>Design Aspects</h1>
                    
                    <h2>1. Typography and Fonts</h2>
                    <div className="fonts">
                        <Image src={Font1} alt="Null"/>
                        <Image src={Font2} alt="Null"/>
                    </div>

                    <h2>2. Color</h2>
                    <Image src={Color}/>

                    <h2>3. Layout and Prototype</h2>
                    {/* Figma Embed */}
                    <iframe className="embed" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrvQX9LdcjoJEjDmwcguS2N%2FPixel-10%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-254%26viewport%3D137%252C449%252C0.11%26t%3DLLV5Di45F6bm9d6C-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A254%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms"></iframe>

                    <h2>4. Animations and Transitions</h2>
                    <div className="animation-grid"></div>
                </div>
            </div>
        </m.div>
    </div>

)
}