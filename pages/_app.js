import React from 'react'
import '../styles/index.scss'
import { AnimatePresence } from 'framer-motion';



export default function Home({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode={'wait'}>
            <Component className='indexBG' key={router.pathname} {...pageProps} />
    </AnimatePresence>

  );
}

