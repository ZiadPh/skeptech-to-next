import Nav from "../components/nav"
import Image from "next/image"
import Cref1 from '../assets/bref1.png'
import Cref2 from '../assets/bref2.png'
import Font1 from '../assets/Poppins.png'
import Logo from '../assets/LumiLogo.png'
import card from '../assets/LumiCard.png'
import b1 from '../assets/LumiButton.png'
import b2 from '../assets/LumiButton2.png'
import mockup from '../assets/BlackMockup.webp'
import Lumi from '../assets/BlackWhale.png'
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
    <div className="bwWrap project-wrapper">
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
            title={"Black Whale: Immigration Services"}
            service={"Website UI Design and Development"}
            client={"BlackWhale Ltd"}
            result={"https://blackwhaleimmigration.com/"}
            background={"Black Whale Limited is a dynamic immigration service provider offering broad solutions to clients around the world. We are dedicated to helping individuals families, and businesses with achieving their immigration goals."}
            />

            <div className="text-column">
                <div>
                    <h2>Objectives:</h2>
                    <ul>
                        <li> {/* #1 */}
                            <span>
                            Enhance User Engagement:&nbsp;
                            </span>
                            Create a user-friendly and visually appealing design that reflects professionalism and empathy, ensuring a welcoming experience for clients navigating immigration services.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            Simplify Navigation and Information Access:&nbsp;
                            </span>
                            Design an intuitive navigation structure and content hierarchy to help users quickly find information about visa types, requirements, and the application process.
                        </li>
                        <li> {/* #3 */}
                            <span>
                            Optimize for Mobile Users:&nbsp;
                            </span>
                            Ensure the website is fully responsive and optimized for mobile devices, providing a seamless browsing experience for users on smartphones and tablets.
                        </li>
                        <li> {/* #4 */}
                            <span>
                            Increase Lead Generation:&nbsp;
                            </span>
                            Implement effective call-to-action elements like consultation forms, eligibility check tools, and contact buttons to convert visitors into clients.
                        </li>
                        <li> {/* #5 */}
                            <span>
                            Build Trust and Credibility:&nbsp;
                            </span>
                            Incorporate trust-building features such as client success stories, certifications, and secure application submission processes to establish the brand as a reliable authority in immigration services.
                        </li>
                    </ul>

                </div>

            </div>
                <h1 className="Title">Client References:</h1>
                <div className="Carousel">
                    <Carousel dynamicHeight={true} width={"100%"} >
                        <div>
                            <Image src={Cref1} alt="null"/>
                            <p className="legend">Reach Immigration</p>
                        </div>
                        <div>
                            <Image src={Cref2} alt="null" />
                            <p className="legend">Global Study UK</p>
                        </div>
                    </Carousel>
                </div>

                <div className="text-column">
                    <div>
                        <h2>From Vision to Reality:</h2>
                        <ul>
                            <li>
                                <span>
                                Discovery Phase:&nbsp;
                                </span>
                                We conducted user research to identify the primary pain points of Blackwhale's audience.
                            </li>
                            <li>
                                <span>
                                Wireframes & Prototypes:&nbsp;
                                </span>
                                Designed and refined layouts to balance content and visuals.
                            </li>
                            <li>
                                <span>
                                Visual Design:&nbsp;
                                </span>
                                Integrated the Blackwhale brand palette of ocean blues and whites, symbolizing trust and clarity.
                            </li>
                            <li>
                                <span>
                                Development:&nbsp;
                                </span>
                                Built a fully responsive and performant website using modern web technologies.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-column">
                    <div>
                        <h2>Website Deliverables:</h2>
                        <ul>
                            <li>
                                <span>
                                Homepage:&nbsp;
                                </span>
                                A hero banner with a clean navigation bar and a call-to-action for consultations.
                            </li>
                            <li>
                                <span>
                                Services Section:&nbsp;
                                </span>
                                A dynamic layout presenting services with icons and brief descriptions.
                            </li>
                            <li>
                                <span>
                                Resource Hub:&nbsp;
                                </span>
                                A blog-style section with articles on immigration tips and updates.
                            </li>
                            <li>
                                <span>
                                Testimonials:&nbsp;
                                </span>
                                A carousel featuring client success stories to build credibility.
                            </li>
                            <li>
                                <span>
                                Mobile View:&nbsp;
                                </span>
                                Ensured a smooth, responsive experience on all devices.
                            </li>
                        </ul>
                    </div>
                </div>
                    <Image className="vid" src={mockup}/>
                    <h1 className="Title">What BlackWhale Says:</h1>
                    <p className="fullBody">"Working with Ziad was a game-changer. The design perfectly captures our brand and has significantly improved user engagement. We couldn't be happier!"</p>
                    <p className="fullBody">—Omar Habib - BlackWhale Team</p>
                <div className="fifthEmpty"/>


            <Footer/>
        </m.div>
    </div>

)
}