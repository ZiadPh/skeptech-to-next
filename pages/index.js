
// Imports
// import '../styles/App.scss'
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
import DevMo from '../assets/devMo.png'
import GallerSkep from '../assets/GallerySkep.png'
import laptop from '../assets/laptop.png'
import ehab from '../assets/ehabSquared.png'
import CK from '../assets/CK.png'






//Render Function

const App = () => {
  //Projects Content Arrays
  const websites = [
    {
  
      name: 'DevMohamed Portofolio',
      url: DevMo,
      link: '/devMo',
      dTitle: 'DEV / UX / 3D',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Circle K: Dedicated App',
      url: CK,
      link: 'https://www.behance.net/gallery/142011903/UXUI-Circle-K-Egypt-App-(Unofficial)',
      dTitle: 'UX / UI',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Pixel10 Studio',
      url: GallerSkep,
      link: '/pixel11',
      dTitle: 'DEV / UX',
      description: 'Pixel10 Studio website is considered our very first commercial project which we take pride in participating to help a fellow creative studio to curate and showcase their work on the internet.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
  const videos = [
    {
  
      name: 'Exhausted by Fumes and Drivers',
      url: ehab,
      link: '/ehabSquared',
      dTitle: 'Cinematography / VFX',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Turkish Coffee',
      url: CK,
      link: 'https://www.behance.net/gallery/142011903/UXUI-Circle-K-Egypt-App-(Unofficial)',
      dTitle: 'Stopmotion',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Skeptech Reveal',
      url: laptop,
      link: 'https://www.behance.net/gallery/149359567/UX-UI-Mission-Bicycle-Company-Redesign',
      dTitle: 'Creative Direction',
      description: 'Mission Bicycles is a custom bicycle store that provides unique and personalized bikes to customers. The company’s website offers a seamless and user-friendly experience, allowing customers to easily browse through various bike models and customize their preferred options. Additionally, the website has a built-in system that allows users to preview their customized bike before placing an order.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
  const ARVR = [
    {
  
      name: 'Store 62',
      url: DevMo,
      link: '/devMo',
      dTitle: 'Instagram Filter',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Catalyst',
      url: CK,
      link: 'https://www.behance.net/gallery/142011903/UXUI-Circle-K-Egypt-App-(Unofficial)',
      dTitle: 'Game Engine VR',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Notify',
      url: laptop,
      link: 'https://www.behance.net/gallery/149359567/UX-UI-Mission-Bicycle-Company-Redesign',
      dTitle: 'Instagram Filter',
      description: 'Mission Bicycles is a custom bicycle store that provides unique and personalized bikes to customers. The company’s website offers a seamless and user-friendly experience, allowing customers to easily browse through various bike models and customize their preferred options. Additionally, the website has a built-in system that allows users to preview their customized bike before placing an order.'
    }
  ]
  //-----------------------------------------------------------------------------------------------
  

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
const router = useRouter();
  const [projectIndex , setProjectIndex ] =  useState();
  const handleNavigate = (index) => {
    console.log(index)
   setProjectIndex(index)
  };
const currentPage = useCurrentPage();

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
    // observer.observe(projects.current);
    observer.observe(about.current);
    observer.observe(contact.current);
  
    return () => {
      observer.disconnect();
    };
  }, []);

 
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
  





  return (
    <> 

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <main>
            <ThreeCanvas scrollProgress={scrollTop} clr={springProps.color} />
            <Nav currentPage={currentPage}/>
            <Hero ref={main}/>
              <Projects ref={projects}
                        tabProps={[activeTab , contentVisible , handleTabClick]}
                        handleNavigate={handleNavigate}
                        websites={websites}
                        videos={videos}
                        ARVR={ARVR}
                         />
            <About ref={about} />
            <Services />
            <Contact ref={contact} />        
        </main>
      
      
    </>

    
 
  )
}

export default App
