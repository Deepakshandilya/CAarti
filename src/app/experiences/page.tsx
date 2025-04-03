"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExperiences = experienceAreas.filter(experience => {
    const matchesSearch = experience.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         experience.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || experience.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CA Articleship Experiences</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore various domains and specializations you may encounter during your chartered accountancy journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === category.value
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-xl">No experiences found matching your search criteria.</p>
              <button 
                className="mt-4 text-blue-600 font-medium"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What CA Students Are Saying</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">Reach out to us and we'll help guide you in the right direction</p>
          <Link href="/about#contact">
            <span className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: typeof experienceAreas[0] }) {
  return (
    <Link href={experience.href}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
        <div className={`h-2 ${categoryColors[experience.category]}`}></div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-4 flex items-center text-blue-600 font-medium">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

const categories = [
  { label: 'All Experiences', value: 'all' },
  { label: 'Auditing', value: 'auditing' },
  { label: 'Taxation', value: 'taxation' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Finance', value: 'finance' }
];

const categoryColors = {
  'auditing': 'bg-blue-500',
  'taxation': 'bg-green-500',
  'compliance': 'bg-purple-500',
  'finance': 'bg-amber-500'
};

const experienceAreas = [
  {
    title: "GST Compliance & Filing",
    description: "Learn about GST return filing, reconciliations, assessments and handling GST audits",
    category: "taxation",
    tags: ["GST", "Indirect Tax", "Compliance", "Returns"],
    href: "/experiences/gst",
    insights: 7
  },
  {
    title: "Bank Audit",
    description: "Understand the nuances of auditing banking operations, loans, advances and financial reporting",
    category: "auditing",
    tags: ["Banking", "NBFC", "Financial Statements", "RBI Guidelines"],
    href: "/experiences/bank-audit",
    insights: 12
  },
  {
    title: "Industry Audit",
    description: "Explore various types of industry-specific audits and their unique requirements and challenges",
    category: "auditing",
    tags: ["Manufacturing", "Retail", "Service Industry", "Statutory Audit"],
    href: "/experiences/industry-audit",
    insights: 10
  },
  {
    title: "Direct Tax Assessment & Planning",
    description: "Master the skills of tax assessment, planning and representation for individuals and businesses",
    category: "taxation",
    tags: ["Income Tax", "Corporate Tax", "Tax Planning", "Appeals"],
    href: "/experiences/tax",
    insights: 9
  },
  {
    title: "Statutory Compliance",
    description: "Navigate through various statutory requirements, ROC filings and legal compliances",
    category: "compliance",
    tags: ["Companies Act", "ROC", "Annual Filings", "Legal"],
    href: "/experiences/statutory-compliance",
    insights: 6
  },
  {
    title: "Internal Audit & Controls",
    description: "Learn methodologies for evaluating internal controls and improving business processes",
    category: "auditing",
    tags: ["Risk Management", "SOPs", "Process Improvement", "Internal Controls"],
    href: "/experiences/internal-audit",
    insights: 8
  },
  {
    title: "Financial Management",
    description: "Understand financial analysis, planning, and strategic decision-making processes in organizations",
    category: "finance",
    tags: ["Financial Analysis", "Budgeting", "CFO Advisory", "Strategy"],
    href: "/experiences/financial-management",
    insights: 5
  },
  {
    title: "Corporate Finance & Valuations",
    description: "Explore valuation techniques, mergers & acquisitions, and corporate restructuring",
    category: "finance",
    tags: ["M&A", "Valuations", "Due Diligence", "Restructuring"],
    href: "/experiences/corporate-finance",
    insights: 7
  },
  {
    title: "Transfer Pricing",
    description: "Gain insights into transfer pricing regulations, documentation, and dispute resolution",
    category: "taxation",
    tags: ["International Tax", "Documentation", "APA", "Litigation"],
    href: "/experiences/transfer-pricing",
    insights: 4
  }
];

const testimonials = [
  {
    quote: "The GST compliance section was incredibly helpful during my articleship. It gave me practical insights that textbooks simply don't cover.",
    name: "Priya Sharma",
    position: "CA Final Student"
  },
  {
    quote: "Bank audit is one of the most challenging areas during articleship. The resources here helped me understand the methodology and key checkpoints.",
    name: "Rahul Verma",
    position: "Newly Qualified CA"
  },
  {
    quote: "The detailed breakdown of industry audit experiences prepared me for what to expect when I was assigned manufacturing clients.",
    name: "Ananya Patel",
    position: "Second Year Article Assistant"
  }
]; 