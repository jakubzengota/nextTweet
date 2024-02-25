"use client";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import LandingPage from './components/Template/LandingPage';

export default function Home() {
  return (
      // <div className='homeBg'  >
      //   <h1 style={{fontSize: "150px"}}>NextTweet</h1>
      //   <div style={{gap: "20px", display: "flex"}}>
      //     <Link
      //         href="/login"
      //       className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      //     >
      //       <span style={{color: "white"}}>Log in</span> 
      //     </Link>
      //     <Link
      //         href="/register"
      //       className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      //     >
      //       <span style={{color: "white"}}>Register</span> 
      //     </Link>
      //   </div>
        
      // </div>
      <LandingPage />
  );
}





