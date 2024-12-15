// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import Layout from '../components/layout';
// import { Gloria_Hallelujah } from "next/font/google";

// const gloriaHallelujah = Gloria_Hallelujah({
//     weight: "400",
//     subsets: ["latin"],
//     variable: "--font-gloria-hallelujah", 
//     display: "swap",
//   });

  
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div>
      <Head>
        <title>syd syd syd syd syd syd syd syd syd syd syd syd</title>
        <meta name="description" content="story by sydney and design by laura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
   
   </div>
   </>
  );
}

export default MyApp;