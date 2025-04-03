"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'CA Journey', href: '/journey' },
  { 
    label: 'Experiences', 
    href: '/experiences',
    submenu: [
      { label: 'GST', href: '/experiences/gst' },
      { label: 'Bank Audit', href: '/experiences/bank-audit' },
      { label: 'Industry Audit', href: '/experiences/industry-audit' },
      { label: 'Tax', href: '/experiences/tax' },
    ] 
  },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-blue-800 font-bold text-2xl">
              CA Journey
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors"
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-blue-800 font-medium"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 mt-1"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-800 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 