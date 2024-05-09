
import Nav from "../components/nav"
import Image from "next/image"
import DM3D from '../assets/elevatex.png'
import DPLT from '../assets/ssd.png'
import NPLT from '../assets/ssn.png'
import D3D from '../assets/day3d.png'
import N3D from '../assets/night3d.png'
import room from '../assets/realRoom.jpg'
import s3d from '../assets/setup3d.png'
import arr from '../assets/aurora.png'
import MI from '../assets/MI.png'
import rlr from '../assets/ruler.png'
import { motion as m } from 'framer-motion'
import Footer from "../components/Footer"
import Head from "next/head"

export default function pixel() {


  

return(
    <div className="project-wrapper ex">
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
            backgroundColor: 'black', // Set the background color to black
        },
        pageAnimate: {
            opacity: 1,
            backgroundColor: 'transparent', // Set the background color to black
        },
        pageExit: {
            opacity: 0,
            backgroundColor: 'black', // Set the background color to black
        },
        }}
        transition={{ duration: 0.5 }}
        >
            <div className="section-1">
                <div> 
                {/* Section Margin 68% */}
                    <div>
                    {/* Container for image and Title wrapper */}
                        <Image src={DM3D} alt="null" />    
                        <div>
                        {/*Title wrapper */}
                            <div>#02</div>
                            <ul>
                                <li>
                                    <div>Elevate X: Website</div>
                                    <div>_</div>
                                </li>
                                <li>Service: Website UI Design and Development</li>
                                <li>Client Name: Elevate X Marketing Agency</li>
                            </ul> 
                        </div>
                    </div>
                    <div>
                    {/* Container for first Paragraph*/}
                        <div>
                            Summary:
                        </div>
                        <div>
                        For ElevateX, we undertook the challenge of redesigning their website to reflect their innovative approach and provide a seamless user experience. Our focus was on creating a visually captivating design with streamlined navigation and clear calls-to-action. By incorporating interactive elements and ensuring responsiveness across devices, we aimed to elevate ElevateX's online presence.</div>
                    </div>
                </div>
            </div>
            <div className=" s2 "/>
            <div className="text-column">
                <div>
                    <h2>ElevateX: A Vision Brought to Life</h2>
                    <ul>
                        <li>  {/* #1 */}
                            <span>
                            Objective:&nbsp;
                            </span>
                            My goal with the ElevateX website redesign was to create a visually compelling platform that reflects the agency's creativity, professionalism, and expertise in digital marketing.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            Approach:&nbsp;
                            </span>
                            I started by immersing myself in ElevateX's brand identity, understanding their values and vision. With this insight, I crafted a design concept that captures the essence of ElevateX while adding my own creative flair.</li> 
                    </ul>
                </div>
                <div>
                    <h2>Key Features:</h2>
                    <ul>
                        <li>  {/* #1 */}
                            <span>
                            Sleek Visuals:&nbsp;
                            </span>
                            The ElevateX website features sleek and modern design elements that draw visitors in and leave a lasting impression.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            User-Friendly Interface:&nbsp;
                            </span>
                            I prioritized user experience, ensuring that the website is easy to navigate and intuitive to use.
                        </li>
                        <li> {/* #3 */}
                            <span>
                            Engaging Content:&nbsp;
                            </span>
                            From compelling copy to captivating visuals, every element of the website is designed to engage and inform visitors.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            Responsive Design:&nbsp;
                            </span>
                            The ElevateX website is fully responsive, ensuring a seamless experience across all devices and screen sizes.
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="s3"/>
            <div className="text-column">
                <div>
                    <h2>Explore the ElevateX Website Design</h2>
                    <p>Ready to take a closer look at my design work for ElevateX? Here's a glimpse of some of the key pages:</p>
                    <ul>
                        <li>  {/* #1 */}
                            <span>
                            Homepage:&nbsp;
                            </span>
                            The homepage sets the tone with a striking visual layout that immediately captures attention and communicates ElevateX's brand identity.
                        </li>
                        <li> {/* #2 */}
                            <span>
                            About Us:&nbsp;
                            </span>
                            Learn more about ElevateX and their mission. I designed this page to be informative yet visually engaging, using graphics and typography to convey key messages.
                        </li> 
                        <li> {/* #3 */}
                            <span>
                            Services:&nbsp;
                            </span>
                            Explore ElevateX's services in detail. I created clean, organized layouts that make it easy for visitors to understand the agency's offerings.
                        </li>
                        <li> {/* #4 */}
                            <span>
                            Portfolio:&nbsp;
                            </span>
                            Dive into ElevateX's portfolio of past projects. I designed this section to showcase their work in a visually appealing and interactive way.
                        </li> 
                        <li> {/* #5 */}
                            <span>
                            Contact:&nbsp;
                            </span>
                            Connect with ElevateX via the contact form. I designed this page to encourage user interaction while maintaining the website's aesthetic.
                        </li>  
                    </ul>
                </div>
            </div>
            <div className="s4"/>
            <div className="text-column" style={{ marginBottom: '10vh'}}>
                <div>
                    <h2>Experience My Design Work Today!</h2>
                    <ul>
                        <li>  {/* #1 */}
                        Ready to see my design work for ElevateX in action? Click the link below to visit the website: <br/>
                        <a href="https://elevate-x-theta.vercel.app/" style={{ fontWeight: 600}}><u>Explore the ElevateX Website Design</u></a>
                        </li>
                        <li> {/* #2 */}

                        Stay tuned to my blog for more insights, design tips, and updates. Don't forget to follow me on social media to stay connected!                        </li> 
                        <li> {/* #3 */}

                        Let's create something amazing together!                        </li> 
                    </ul>

                </div>

            </div>
            <Footer/>
        </m.div>
    </div>

)
}