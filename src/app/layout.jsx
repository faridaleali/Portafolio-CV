"use client"

import "./globals.css"
import { useEffect } from 'react';
import Footer from "@/components/footer/footer"
import Navbar from "../components/navbar/navbar"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  keywords: ['Portfolio', 'Fullstack', 'NextJS']
}
 
export default function RootLayout({ children }) {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js';
    script.async = false;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

 return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          { children }
        </main>
        <Footer/>
      </body>
    </html>
  )
}
