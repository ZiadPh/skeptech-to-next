
// Imports
// import '../styles/App.scss'
import Layout from '../components/Layout';
import Nav from '../components/nav'
import Hero from '../components/hero'
import Projects from '../components/projects'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contactus'
import {useEffect, useRef, useState} from 'react'
import ThreeCanvas from '../components/Canvas3d'
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import { motion as m } from 'framer-motion'


// Custom hook to get the current page
const useCurrentPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Update the state with the current page when the route changes
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return currentPage;
};





//Render Function

const App = () => {

  //Tab Categories props
  const [activeTab, setActiveTab] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [currentColor, setCurrentColor] = useState('#0ea7b5'); // Default color for Tab 1
  const springProps = useSpring({
    color: currentColor,
    config: { duration: 500 }, // Adjust the duration as needed
  });

  const handleTabClick = (index) => {
    setContentVisible(false); // Start the fade-out animation
    setTimeout(() => {
      setActiveTab(index);
      setContentVisible(true); // Start the fade-in animation
    }, 300); // Adjust the timeout based on your transition duration
    
    switch (index) {
      case 0:
        setCurrentColor('#0ea7b5');
        break;
      case 1:
        setCurrentColor('#ff0000');
        break;
      case 2:
        setCurrentColor('#00ff00');
        break;
      default:
        setCurrentColor('#0ea7b5');
        break;
    }
  };
  
//URL Updater
  const main = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  useEffect(() => {
    const options = {
      root: null, // Observe the entire viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.location.hash = entry.target.id;
        }
      });
    }, options);
  
    observer.observe(main.current);
    observer.observe(projects.current);
    observer.observe(about.current);
    observer.observe(contact.current);
  
    return () => {
      observer.disconnect();
    };
  }, []);

useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);



const currentPage = useCurrentPage();

 
  //Canvas Scroll Function
  const [scrollTop, setScrollTop] = useState(0);
  
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    const scrolled = (winScroll / height);
  
    setScrollTop(scrolled); // Update scrollTop first
  };
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  


  
  //LocomotiveScroll
  const id = useRef(null)
  const containerRef = useRef(null)

  //Preloader
  const [preloader, setPreloader] = useState(true)
  const [timer,setTimer] = useState(3)




  return (
    <div className='indexBG'> 

      {/* { preloader? <div className='loader-wrapper absolute'>
        <h1>SKEPTECH</h1>
      </div>: */}
        <Nav currentPage={currentPage} />
        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.75, ease: "easeOut"}}
        >
        {/* <LocomotiveScrollProvider

        
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
       
      > */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <ThreeCanvas scrollProgress={scrollTop} clr={springProps.color} />

        <m.div 
        data-scroll-container
        ref={containerRef}
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
          <Hero ref={main}/>
          <Projects ref={projects} props={[activeTab , contentVisible , handleTabClick]} />
          <About ref={about} />
          <Services />
          <Contact ref={contact} />
        </m.div>
      {/* </LocomotiveScrollProvider> */}
    
    </m.div>

     

    </div>
    
 
  )
}

export default App