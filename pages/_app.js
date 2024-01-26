import React from 'react'
import App from './index'
import '../styles/index.scss'
import Layout from '../components/Layout';


export default function Home({ Component, pageProps, router }) {
  return (
    <Layout>
            <Component key={router.pathname} {...pageProps} />
    </Layout>

  );
}

