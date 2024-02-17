"use client";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", padding: "2rem"}}>
        <Link
            href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
         >
           <span style={{color: "Black"}}>Log in</span> 
        </Link>
        <Link
            href="/register"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
         >
           <span style={{color: "Black"}}>Register</span> 
        </Link>
        <Link
            href="/dashboard"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
         >
           <span style={{color: "Black"}}>Dashboard</span> 
        </Link>
      </div>
  );
}





