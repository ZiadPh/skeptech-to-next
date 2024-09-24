import Nav from "../components/nav"
import Image from "next/image"
import DM3D from '../assets/devMo.png'
import DPLT from '../assets/ssd.png'
import NPLT from '../assets/ssn.png'
import D3D from '../assets/day3d.png'
import N3D from '../assets/night3d.png'
import room from '../assets/realRoom.jpg'
import s3d from '../assets/setup3d.png'
import arr from '../assets/aurora.png'
import MI from '../assets/MI.png'
import rlr from '../assets/ruler.png'
import mockup from '../assets/devmockup.webp'
import { motion as m } from 'framer-motion'
import Footer from "../components/Footer"
import Head from "next/head"
import PHeader
 from "../components/projectHeader"
export default function pixel() {


  

return(
    <div className="project-wrapper dm">
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
        <PHeader 
            imgsrc={DM3D}
            imgalt={"Mohamed's room"} 
            number={"01"} 
            title={"DevMohamed: Website"}
            service={"Website UI Design and Development"}
            client={"Mohamed Ibrahim"}
            background={"The project involves the creation of an interactive and engaging online curriculum vitae (CV) that showcases a developer's workspace using 3D visualization. This virtual experience will enable visitors to explore the developer's environment, providing an immersive insight into their work area, including details of the computer setup and any relevant gadgets or tools."}
            />
            <div className="fs-media">
                <iframe
                frameBorder={0}
                allowFullScreen=""
                scrolling="no"
                allow="autoplay;fullscreen"
                src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2Fjoq46111m1erzd317d1ly%2FIntro.mp4%3Frlkey%3Dh8exxw6p3sb8td0mss20t04t3%26raw%3D1&poster=&time=false&progressBar=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&quality=720p&playButton=false"
                style={{ height: "100%", width: "100%", aspectRatio: "1598 / 782" }}
                />
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
                            Clearly present their core services, providing detailed information about each service offering, the process involved, and how they add value to clients&apos; projects.                    </li> 
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
                            Reflect the professionalism, creativity, and innovation that Pixel10 Studio brings to each project through the website&apos;s design and content.                    </li>
                        <li> {/* #6 */}
                            <span>
                            SEO Optimization:&nbsp;
                            </span>
                            Ensure that the website is search engine optimized, enabling better visibility in relevant search results and attracting organic traffic.                    </li>
                    </ul>
                </div>
            </div>                   
                    <h2 className="Title">1. 3D Model</h2>
                    <div className="fulltwo">
                        <Image src={room} alt="Null"/>
                        <Image src={s3d} alt="Null"/>
                    </div>
                    <p className="fullBody">The main idea started with a trial to replicate the computer setup owned by the client on Blender, as it worked pretty well, we had a further interview with our client trying to identify what his visions of a perfect room setup would look like, not to mention that we also paid a visit to his room to gather a better to be able to work towards our overall 3d model. <br/><br/> We also looked Into exaggerating the practical lighting to give it more of the gamer vibes through the RGB elements and screen lights as well as the Hexagonal Light panels that were inspired by the Govee light products.</p>
                    <h2 className="Title">2. Background ( Aurora UI )</h2>
                        <Image className="vid" src={arr} alt="null"/>
                    <p className="fullBody">The Background Design was chosen to take the style of the aurora UI so it can act as a realm for the existent 3D model to add some depth, give off a dreamy look and blend seamlessly into the overall look.</p>
                    <h2 className="Title">3. Colours</h2>
                    <div>
                        <div className="grid">                        
                            <Image src={D3D} alt="Null"/>
                            <Image src={DPLT} alt="Null"/>
                        </div>
                        <div className="grid">                        
                            <Image src={N3D} alt="Null"/>
                            <Image src={NPLT} alt="Null"/>
                        </div>
                    </div>
                    <p className="fullBody">Most of the colours were mainly dependent on the colours of the practical lighting in both day and night themes in the 3D model and were made to serve the same dreamy look.<br/>
                    For  the Text and UI elements the choice of Beige and Black was mainly to serve the text readability throughout an interchanging Background.</p>

                    <h2 className="Title">4. Fonts and UI Elements</h2>
                    <div className="grid">                        
                            <Image src={MI} alt="Null"/>
                            <Image src={rlr} alt="Null"/>
                    </div>
                    <p className="fullBody">The choice of the font family Made Infinity was to give off both the digital and playful vibes which suits our clients lifestyle that involves Video gaming and Software Development.
                        <br/>
                        <br/>
                        On the other hand, the Ruler on the margins of the page was more of a Functionality decision to serve as a timeline of his career that is demonstrated into his CV.
                         </p>
                    <h2 className="Title">5. Animations</h2>
                
                    <p className="fullBody">Animations were a key factor in the whole experience where different animations throughout the experience were used to deliver different feelings to the user:</p>
                    <iframe
                        frameBorder={0}
                        allowFullScreen=''
                        scrolling="no"
                        allow="autoplay;fullscreen"
                        src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2Fhkfudahiziwsrtrhr5ocp%2FFade.mp4%3Frlkey%3Du7acrpsy2vzrzzvhum6s8seo0%26raw%3D1&poster=&time=false&progressBar=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&quality=720p&playButton=false"
                        className="vid"
                        style={{aspectRatio: "1598 / 782"}}
                        />
                        <p className="fullBody">Fading Animations: Most of the changes that happens between the day and night theme occurs through a fading animation to give off the feeling of the passage of time between day and night as well as to serve into the overall dreamy vibe.</p>
                        <iframe
                        frameBorder={0}
                        allowFullScreen=''
                        scrolling="no"
                        allow="autoplay;fullscreen"
                        src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2Ffkle54g99v3g7mhzwq1j7%2FReveal.mp4%3Frlkey%3Dpx2kqgi9yw2d6r0jrbozs9eed%26raw%3D1&poster=&time=false&progressBar=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&quality=720p&playButton=false"
                        className="vid"
                        style={{ aspectRatio: "1352 / 780" }}

                        />
                        <p className="fullBody">Text Reveal Animation: This was mainly intended to give off more of this digital look takes up a massive part of the client&apos;s lifestyle, not to mention how it synchronises with the change of the elements on the screens in the 3D model.</p>
                        <h2 className="Title">6. Final Results</h2>
                        <Image className="vid" src={mockup} alt="null"/>
                    <p className="fullBody">The development of the Devmo portfolio website showcases the intersection of creative design and client-centric functionality. Starting with a 3D model inspired by the client's own setup, we meticulously crafted the environment to align with their vision, incorporating striking lighting effects and atmospheric design elements. The Aurora UI serves as a perfect backdrop, blending the dreamy ambiance with practical lighting, while color choices reflect both day and night themes. Smooth animations elevate the overall experience, transitioning effortlessly between themes and bringing digital elements to life.</p>
                    <p className="fullBody">Explore the final result on  <a href="https://dev-mo.vercel.app/" style={{ fontWeight: 600}}><u>DevMo Portfolio Website.</u></a></p>
                    <div className="fifthEmpty"/>
            <Footer/>
        </m.div>
    </div>

)
}