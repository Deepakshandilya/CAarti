"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete Guide to the <span className="text-yellow-300">CA Journey</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              From foundation to articleship and beyond - all the experiences, insights, and resources you need to succeed as a Chartered Accountant
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link href="/journey">
              <span className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-block">
                Explore CA Journey
              </span>
            </Link>
            <Link href="/experiences">
              <span className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-block">
                Browse Experiences
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white opacity-70"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 