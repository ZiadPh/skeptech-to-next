// components/Layout.js
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div
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
        backgroundColor: '#000', // Set the background color to black
      },
      pageExit: {
        opacity: 0,
        backgroundColor: '#000', // Set the background color to black
      },
    }}
    transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
