"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Award, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission to a backend API
    console.log('Form submitted:', formData);
    
    // Simulate success
    setFormStatus('success');
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CA Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to navigating the Chartered Accountancy journey in India
          </p>
        </div>

        {/* Mission Statement */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                The journey to becoming a Chartered Accountant is filled with challenges, learning opportunities, and professional growth. We understand this journey first-hand and created this platform to guide aspiring CAs through their path.
              </p>
              <p className="text-gray-700">
                Our mission is to provide comprehensive, practical, and authentic information about the CA journey, with special focus on the articleship experience. We aim to bridge the gap between theoretical knowledge and practical application, helping you navigate your professional development with confidence.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <value.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-800 mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-700 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.map((platform, idx) => (
                    <a 
                      key={idx} 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-700"
                    >
                      <platform.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Content Suggestion">Content Suggestion</option>
                    <option value="Experience Sharing">Share Your Experience</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
                
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your message has been sent successfully! We'll respond shortly.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="text-gray-600">123 CA Street, New Delhi, India 110001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">info@cajourney.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Your Experience</h3>
                <p className="text-gray-600 mb-4">
                  Are you a CA or article assistant with valuable experiences to share? We'd love to feature your insights on our platform to help others in their journey.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900"
                >
                  Learn how to contribute <Send className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Mock data
const values = [
  {
    title: "Authenticity",
    description: "Real experiences shared by practicing CAs and article assistants",
    icon: Users
  },
  {
    title: "Practicality",
    description: "Focus on practical knowledge that textbooks don't cover",
    icon: BookOpen
  },
  {
    title: "Excellence",
    description: "Promoting professional excellence and best practices",
    icon: Award
  },
  {
    title: "Community",
    description: "Building a supportive community of CA professionals",
    icon: Heart
  }
];

const teamMembers = [
  {
    name: "Rajat Sharma",
    role: "Founder & Senior CA",
    bio: "With 15+ years of experience in audit and taxation, Rajat founded CA Journey to help aspiring CAs navigate their professional path.",
    social: [
      { icon: Mail, link: "#" },
      { icon: Phone, link: "#" }
    ]
  },
  {
    name: "Priya Patel",
    role: "Content Director",
    bio: "A CA with expertise in GST and corporate finance, Priya ensures all content is accurate, relevant, and helpful for CA aspirants.",
    social: [
      { icon: Mail, link: "#" },
      { icon: Phone, link: "#" }
    ]
  },
  {
    name: "Vikram Singh",
    role: "Technology Lead",
    bio: "Combining his CA qualification with tech expertise, Vikram manages the platform's technical aspects to deliver seamless user experience.",
    social: [
      { icon: Mail, link: "#" },
      { icon: Phone, link: "#" }
    ]
  }
];

const faqs = [
  {
    question: "Is the content on CA Journey created by real chartered accountants?",
    answer: "Yes, all our content is created and verified by practicing chartered accountants with experience in various domains of the profession. We ensure authenticity and practicality in everything we publish."
  },
  {
    question: "How can I contribute my own experience to the platform?",
    answer: "We welcome contributions from CAs and article assistants. Please use our contact form and select 'Experience Sharing' as the subject. Our content team will review your submission and get in touch with you."
  },
  {
    question: "Do you offer personalized guidance for CA students?",
    answer: "Currently, we focus on providing general guidance through our content. However, we're working on a mentorship program that will offer more personalized support. Stay tuned for updates!"
  },
  {
    question: "How often is the content updated to reflect changes in laws and regulations?",
    answer: "We monitor regulatory changes closely and update our content as soon as significant changes occur. All pages display the last update date so you know how current the information is."
  },
  {
    question: "Can I use the resources on this website for my CA firm's training program?",
    answer: "Yes, our content can be used for educational purposes with proper attribution. For extensive use in commercial training programs, please contact us to discuss licensing arrangements."
  }
]; 