import Nav from "../components/nav"
import Image from "next/image"
import PixelGif from '../assets/PixelGif.gif'
import Cref1 from '../assets/LumiRef1.png'
import Cref2 from '../assets/LumiRef2.png'
import Cref3 from '../assets/LumiRef3.jpg'
import Font1 from '../assets/Poppins.png'
import Logo from '../assets/LumiLogo.png'
import card from '../assets/LumiCard.png'
import b1 from '../assets/LumiButton.png'
import b2 from '../assets/LumiButton2.png'
import mockup from '../assets/lumockup.png'
import Lumi from '../assets/Lumi.png'
import LumiC from '../assets/LumiC.png'
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
    <div className="lfWrap project-wrapper">
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
            imgsrc={Lumi}
            imgalt={"Interior of Pixel10 Studio"} 
            number={"03"} 
            title={"LumiFriends: ECommerce"}
            service={"Website UI Design and Development"}
            client={"LumiFriends Co"}
            result={"https://lumifriends.store/"}
            background={"LumiFriends is an eCommerce brand offering adorable, animal-shaped lamps that brighten kids' rooms with playful designs and a comforting glow. Committed to quality and eco-friendliness, LumiFriends brings light and joy to every child’s space."}
            />

            <div className="text-column">
                <div>
                    <h2>Objectives:</h2>
                    <ul>
                        <li> {/* #1 */}
                            <span>
                            Enhance User Engagement:&nbsp;
                            </span>
                            Create a visually appealing and interactive design that captures the playful and whimsical nature of the product, ensuring a delightful browsing experience for parents and kids alike.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            Simplify Navigation and Product Discovery:&nbsp;
                            </span>
                            Design an intuitive navigation structure and search functionality to help users quickly find and compare different lamp designs, ensuring a seamless shopping journey.
                        </li>
                        <li> {/* #3 */}
                            <span>
                            Optimize for Mobile Users:&nbsp;
                            </span>
                            Ensure the website is fully responsive and optimized for mobile devices, offering a smooth shopping experience for parents who frequently shop on the go.
                        </li>
                        <li> {/* #4 */}
                            <span>
                            Boost Conversion Rates:&nbsp;
                            </span>
                            Integrate persuasive design elements like customer reviews, detailed product descriptions, and a streamlined checkout process to encourage purchases and reduce cart abandonment.
                        </li>
                        <li> {/* #5 */}
                            <span>
                            Build Trust and Credibility:&nbsp;
                            </span>
                            Incorporate trust-building features such as secure payment options, clear return policies, and customer testimonials to reassure parents and establish the brand as a reliable source for high-quality children’s lamps.
                        </li>
                    </ul>
                </div>

            </div>
                <h1 className="Title">Client References:</h1>
                <div className="Carousel">
                    <Carousel dynamicHeight={true} width={"100%"} >
                        <div>
                            <Image src={Cref1} alt="null"/>
                            <p className="legend">MR POPS - ICE CREAM</p>
                        </div>
                        <div>
                            <Image src={Cref2} alt="null" />
                            <p className="legend">Cob - The first corn-free brand in America</p>
                        </div>
                        <div>
                            <Image src={Cref3} alt="null"/>
                            <p className="legend">Notorious Nooch Co</p>
                        </div>
                    </Carousel>
                </div>
            
                    
                    <h2 className="Title">1. Typography and Fonts</h2>
                    <Image className="vid" src={Font1} alt="Null"/>

                    <h2 className="Title">2. Color</h2>
                        <Image className="vid" src={LumiC}/>

                    <h2 className="Title">3. Design Elements</h2>
                    <div className="fulltwo">
                    <Image src={Logo} alt="Null"/>
                    <Image src={card} alt="Null"/>
                    </div>
                    <div className="fulltwo">
                    <Image src={b1} alt="Null"/>
                    <Image src={b2} alt="Null"/>
                    </div>
                    <h2 className="Title">3. Final Results</h2>
                    <Image className="vid" src={mockup}/>
                <p className="fullBody">The collaboration with SkepTech Studio resulted in a delightful website that perfectly captures the charm and whimsy of Lumifriends’ adorable animal-shaped lamps for kids. Every design element was thoughtfully crafted to highlight the playful and heartwarming nature of the products. Through vibrant visuals, intuitive navigation, and engaging micro-interactions, the site offers a seamless and enjoyable shopping experience for parents and kids alike. The user interface strikes a perfect balance between fun and functionality, reflecting Lumifriends’ commitment to quality and creativity.</p>
                <p className="fullBody">Dive into the enchanting experience and discover these lovable lamps on the <a href="https://lumifriends.store/" style={{ fontWeight: 600}}><u>Lumifriends website.</u></a></p>
                <div className="fifthEmpty"/>


            <Footer/>
        </m.div>
    </div>

)
}