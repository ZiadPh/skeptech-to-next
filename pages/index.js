
// Imports
// import '../styles/App.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/landingPage/hero'
import Projects from '../components/landingPage/projects'
import About from '../components/landingPage/about'
import Services from '../components/landingPage/services'
import Contact from '../components/landingPage/contactus'
import {useEffect, useRef, useState} from 'react'
import { useRouter } from 'next/router';
import { motion as m } from 'framer-motion'
import Squares from '../components/landingPage/squares'

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

  const handleTabClick = (index) => {
    setContentVisible(false); // Start the fade-out animation
    setTimeout(() => {
      setActiveTab(index);
      setContentVisible(true); // Start the fade-in animation
    }, 300); // Adjust the timeout based on your transition duration
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



  //Scroll to Funtion
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const isLinkClick = event.type === 'click' && event.target.tagName === 'A';
        if (!isLinkClick) {
          target.scrollIntoView();
        }
      }
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const scrollPosition = parseInt(localStorage.getItem('scrollPosition') || 0);
    window.scrollTo(0, scrollPosition);
  }, []);
  

  const containerRef = useRef(null)
const currentPage = useCurrentPage();




  return (
    <div className='indexBG'> 
      <Head>
        <title>SkepTech | Home</title>
        <meta property="og:title" content="SkepTech | Home" key="title" />
        <meta property='og:image'  content='https://i.imgur.com/B7gRm8t.png'/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

      </Head>
        <div className='noise'/>
        <div className='noise'/>
        <Nav currentPage={currentPage} />
        <m.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.75, ease: "easeOut"}}
        >

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <Squares 
          speed={0.3} 
          size={400} //pixels
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#2E3F40'
          hoverFillColor='#222'
        />
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
    </m.div>

     

    </div>
    
 
  )
}

export default App