"use client";

import { CheckCircle, Clock, FileText, AlertCircle, BookOpen, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GSTExperiencePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with green accent for taxation category */}
        <div className="mb-12">
          <div className="h-1.5 w-24 bg-green-500 mb-6"></div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">GST Compliance & Filing Experience</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">GST</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Indirect Tax</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Compliance</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Returns</span>
          </div>
          <p className="text-xl text-gray-600">
            Gain insights into the practical aspects of GST compliance, return filing, and reconciliation processes that you&apos;ll encounter during your articleship.
          </p>
        </div>

        {/* Overview Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 mb-4">
            Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services across India. As a CA article, you&apos;ll likely spend significant time working on GST-related matters, from monthly return filing to complex reconciliations and departmental assessments.
          </p>
          <p className="text-gray-700 mb-4">
            During your articleship, you may be responsible for:
          </p>
          <ul className="space-y-3 mb-6">
            {gstResponsibilities.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Day in the Life Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">A Day in the Life: GST Compliance Work</h2>
          
          <div className="space-y-8">
            {dayInLifeTasks.map((task, index) => (
              <div key={index} className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="h-full w-0.5 bg-green-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.time}</h3>
                  <p className="text-gray-700 mb-3">{task.description}</p>
                  {task.note && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <div className="flex">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                        <p className="text-sm text-yellow-700">{task.note}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Insights Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInsights.map((insight, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <BookOpen className="h-5 w-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                </div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Challenges</h2>
          
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  {challenge.title}
                </h3>
                <p className="text-gray-700 mb-3">{challenge.description}</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">How to Handle:</h4>
                  <p className="text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  {resource.type === 'document' ? (
                    <FileText className="h-5 w-5 text-blue-700" />
                  ) : (
                    <Download className="h-5 w-5 text-blue-700" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Navigation to Other Experiences */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center bg-blue-50 rounded-xl p-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore More Experiences</h3>
            <p className="text-gray-600">Continue your learning journey with related experiences</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-3">
            <Link href="/experiences/tax">
              <span className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 hover:bg-blue-700 hover:text-white transition-colors">
                Direct Tax
              </span>
            </Link>
            <Link href="/experiences/statutory-compliance">
              <span className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 hover:bg-blue-700 hover:text-white transition-colors">
                Statutory Compliance
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data for the component
const gstResponsibilities = [
  "Preparing and filing monthly/quarterly GSTR-1 and GSTR-3B returns",
  "Reconciling input tax credits with GSTR-2A/2B",
  "Managing e-way bills for transportation of goods",
  "Handling GST assessments and departmental notices",
  "Advising clients on GST implications of business transactions",
  "Conducting GST audits and preparing annual returns (GSTR-9/9C)",
  "Assisting with GST registrations and amendments"
];

const dayInLifeTasks = [
  {
    time: "9:30 AM - Data Collection",
    description: "Begin the day by collecting sales and purchase data from the client's accounting system. Export reports for the previous month to prepare for GST return filing.",
    note: "Pro Tip: Always verify the data with the client before proceeding. This saves a lot of back-and-forth later."
  },
  {
    time: "11:00 AM - Input Tax Credit Reconciliation",
    description: "Download GSTR-2A/2B from the GST portal and reconcile it with the purchase register to identify missing invoices or discrepancies in input tax credit."
  },
  {
    time: "1:00 PM - Review Client Queries",
    description: "Address any client questions regarding GST implications on recent transactions or clarify notices received from the department."
  },
  {
    time: "2:30 PM - Return Preparation",
    description: "Prepare GSTR-1 for outward supplies, ensuring all invoices, credit/debit notes, and amendments are correctly captured in the appropriate tables.",
    note: "Watch out for: B2B vs B2C classifications, export transactions, and correct tax rates. These are common areas for errors."
  },
  {
    time: "4:00 PM - Review and Filing",
    description: "Perform a final review of the return data, share summary with the client for approval, and proceed with filing once approved."
  }
];

const practicalInsights = [
  {
    title: "Reconciliation is Key",
    description: "Regular reconciliation between books, e-way bills, and GST returns helps identify discrepancies early. Set up a monthly process to compare these records systematically."
  },
  {
    title: "Documentation Matters",
    description: "Maintain proper documentation for all transactions, especially for exempt supplies, zero-rated supplies, and RCM cases. This becomes critical during departmental audits."
  },
  {
    title: "Understanding Classifications",
    description: "Invest time in understanding the correct HSN codes and tax rates for different products and services. This knowledge significantly reduces errors in compliance."
  },
  {
    title: "Tracking Legal Updates",
    description: "GST laws and notifications change frequently. Subscribe to updates from CBIC and set aside time every week to review recent changes that may impact your clients."
  }
];

const challenges = [
  {
    title: "Input Tax Credit Mismatch",
    description: "Suppliers often fail to upload their invoices, leading to missing ITC in GSTR-2A/2B, which causes reconciliation challenges and potential ITC loss.",
    solution: "Create a regular follow-up system with suppliers for non-reported invoices. Maintain a tracker and escalate cases where vendors repeatedly fail to comply."
  },
  {
    title: "Complex Rate Structures",
    description: "Multiple tax rates and special provisions for different industries can make classification confusing, especially for businesses with diverse product lines.",
    solution: "Create a comprehensive rate master for clients based on their specific products/services. Periodically review advance rulings and clarifications for similar businesses."
  },
  {
    title: "E-Commerce Compliance",
    description: "E-commerce operators and sellers face unique challenges with TCS collection, marketplace vs. inventory model distinctions, and multi-state operations.",
    solution: "Implement automated systems to track state-wise sales and TCS collections. Create a compliance calendar specifically designed for e-commerce operations."
  }
];

const resources = [
  {
    title: "GST Portal User Manual",
    description: "Official guide for navigating and using the GST portal",
    link: "https://tutorial.gst.gov.in/",
    type: "document"
  },
  {
    title: "GST Returns Reconciliation Tool",
    description: "Excel-based tool for reconciling GSTR-2A with purchase register",
    link: "#",
    type: "download"
  },
  {
    title: "Common Errors in GST Filing",
    description: "ICAI guidance note on avoiding common mistakes",
    link: "https://www.icai.org",
    type: "document"
  },
  {
    title: "HSN Code Finder",
    description: "Searchable database of HSN codes for goods and services",
    link: "#",
    type: "download"
  }
]; 