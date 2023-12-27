import React from 'react'
import App from './index'
import '../styles/index.scss'

export default function Home({ Component, pageProps, router }) {
  return (
      <Component key={router.pathname} {...pageProps} />

  );
}

