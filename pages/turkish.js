import Nav from "../components/nav"
import Image from "next/image"
import turkish from '../assets/Stopmotion.png'
import { useState , useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
    <div className="turkish">
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
                        <Image src={turkish}  />    
                        <div>
                        {/*Title wrapper */}
                            <div>#01</div>
                            <ul>
                                <li>
                                    <div>Turkish Coffee</div>
                                    <div>_</div>
                                </li>
                                <li>Service: Stopmotion</li>
                                <li>Client Name: SkepTech</li>
                            </ul> 
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="section-3">
                <div>
                    <h2>Project Description:</h2>

                    <p>This project was a vibrant stop-motion social media commercial celebrating the tradition of Turkish coffee. Each frame meticulously crafted, we brought to life the rich colors and the process of making a Turkish coffee.

                        Following the journey of a steaming cup, viewers are transported through the industrial world of lego characters with playful animations, we invite audiences to indulge in the sensory experience of authentic Turkish coffee.

                        This commercial blends tradition with modernity, enticing viewers to savor a moment of relaxation and indulgence. Through our work, we aimed to honor the cultural significance and enduring legacy of Turkish coffee. 
                    </p>
                </div>

            </div>
            <div className="section-4 ">
                <h1>Final Result</h1>
                
                  <iframe 
                    src="https://player.vimeo.com/video/332457735?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameborder={0} 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    style={{margin: "auto" , width:viewportSize.width*0.88 , height:viewportSize.height*0.88 , paddingBottom: viewportSize.height*0.1}} 
                    title="قهوة مظبوط"
                    >
                    </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js">
                    </script>
            <Footer/>
        </m.div>
    </div>

)
}