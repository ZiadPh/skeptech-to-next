import Nav from "../components/nav"
import Image from "next/image"
import Pixel3D from '../assets/Pixel20.png'
import PixelGif from '../assets/PixelGif.gif'
import Cref1 from '../assets/ref1.jpeg'
import Cref2 from '../assets/ref2.png'
import Cref3 from '../assets/ref3.png'
import Font1 from '../assets/font1.png'
import Font2 from '../assets/font2.gif'
import Color from '../assets/p11-color.png'
import mockup from '../assets/p11mockup.webp'
import { useState , useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion as m } from 'framer-motion'
import Footer from "../components/Footer"
import Head from "next/head"
import PHeader from "../components/projectHeader"

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
    <div className="p11wrap project-wrapper">
                      <Head>
        <title>SkepTech | Project</title>
        <meta property="og:title" content="SkepTech | Project" key="title" />
        <meta property='og:image'  content='https://i.imgur.com/B7gRm8t.png'/>

      </Head>
      <div className='noise'/>

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
            <PHeader 
            imgsrc={Pixel3D}
            imgalt={"Interior of Pixel10 Studio"} 
            number={"03"} 
            title={"Pixel10 Studio: Website"}
            service={"Website UI Design and Development"}
            client={"Pixel10 Studio"}
            background={"Pixel10 Studio is a startup agency specializing in providing high-quality Architectural Visualisation, Animation, Virtual Reality, and Interior Design services. With a team of talented professionals, they have successfully executed various projects for clients in the real estate, construction, and interior design sectors."}
            />
            <div className="fs-image">
                <Image className="gif" src={PixelGif} width={viewportSize.width}  alt="PixelGif"/>
            </div>
            <div className="text-column">
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
                <h1 className="Title">Client References:</h1>
                <div className="Carousel">
                    <Carousel dynamicHeight={true} width={"100%"} >
                        <div>
                            <Image src={Cref1} alt="null"/>
                            <p className="legend">RustArch Architectural studio</p>
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
            
                    
                    <h2 className="Title">1. Typography and Fonts</h2>
                    <div className="fulltwo">
                        <Image src={Font1} alt="Null"/>
                        <Image src={Font2} alt="Null"/>
                    </div>

                    <h2 className="Title">2. Color</h2>
                        <Image className="vid" src={Color}/>

                    <h2 className="Title">3. Layout and Prototype</h2>
                    {/* Figma Embed */}
                    <iframe className="embed" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrvQX9LdcjoJEjDmwcguS2N%2FPixel-10%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-254%26viewport%3D137%252C449%252C0.11%26t%3DLLV5Di45F6bm9d6C-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A254%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms"></iframe>

                    <h2 className="Title">3. Final Results</h2>
                    <Image className="vid" src={mockup}/>
                <p className="fullBody">The collaboration with Pixel10 Studio resulted in a website that mirrors the precision and creativity of their architectural and design services. Every visual element is carefully designed to highlight their expertise in Architectural Visualization, Animation, Virtual Reality, and Interior Design. Through clean layouts, immersive visuals, and subtle animations, the site effectively showcases their portfolio and talents. The user interface is both professional and engaging, reflecting the high standards that Pixel10 Studio upholds in every project.</p>
                <p className="fullBody">Dive into the final experience and explore their world-class work on the <a href="https://pixel10studio.com/" style={{ fontWeight: 600}}><u>Pixel10 Studio website.</u></a></p>
                <div className="fifthEmpty"/>


            <Footer/>
        </m.div>
    </div>

)
}