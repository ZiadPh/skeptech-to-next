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
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          opacity: 0,
        },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
