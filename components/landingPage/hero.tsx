import React, { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from '../logo';
import ContraBadge from '../contra';

const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  const titleRef = useRef(null);
  const desRef = useRef(null);

  const staggerVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div ref={ref} className="hero-container" id="main" data-scroll-section>
      <div className="right">
        <div className="hey">
          <Logo />
          <motion.div ref={titleRef} className="title hi" variants={staggerVariants} initial="initial" animate="animate">
            SkepTech
          </motion.div>
        </div>
        <div className="hey">
          <motion.div ref={desRef} className="quote hi" variants={staggerVariants} initial="initial" animate="animate">
            "Crafting a <span className="highlight">healthier</span>, <span className="highlight">more vibrant</span> online world."
          </motion.div>
          <ContraBadge userId="f1bade9c-aa70-4d25-b424-1721c589e83b" theme="dark" username="ziad9299_3j58d68e" />
        </div>
      </div>
    </div>
  );
});

export default Hero;