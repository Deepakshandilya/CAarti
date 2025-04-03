"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CA Journey</h3>
            <p className="text-gray-400 mb-4">
              Your comprehensive guide through the entire chartered accountancy journey, from student to professional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/journey" className="text-gray-400 hover:text-white transition-colors">
                  CA Journey
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-400 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Experience Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/experiences/gst" className="text-gray-400 hover:text-white transition-colors">
                  GST
                </Link>
              </li>
              <li>
                <Link href="/experiences/bank-audit" className="text-gray-400 hover:text-white transition-colors">
                  Bank Audit
                </Link>
              </li>
              <li>
                <Link href="/experiences/industry-audit" className="text-gray-400 hover:text-white transition-colors">
                  Industry Audit
                </Link>
              </li>
              <li>
                <Link href="/experiences/tax" className="text-gray-400 hover:text-white transition-colors">
                  Tax
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <span className="text-gray-400">123 CA Street, New Delhi, India 110001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400">info@cajourney.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CA Journey Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 