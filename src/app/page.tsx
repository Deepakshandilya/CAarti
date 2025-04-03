import HeroSection from "@/components/HeroSection";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Journey Stages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The CA Journey Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the complete path to becoming a Chartered Accountant, with insights at each stage of the journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Foundation */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation & Intermediate</h3>
              <p className="text-gray-600 mb-6">
                Master the fundamental concepts and build a strong base for your CA career
              </p>
              <Link href="/journey/foundation-intermediate" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Articleship */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Articleship Experience</h3>
              <p className="text-gray-600 mb-6">
                Gain practical knowledge and hands-on experience across various domains of accounting
              </p>
              <Link href="/experiences" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900">
                Explore experiences <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Final & Professional */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Final & Professional Career</h3>
              <p className="text-gray-600 mb-6">
                Complete your exams and transition into a fulfilling professional career
              </p>
              <Link href="/journey/final-professional" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diverse Experience Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different domains of work that chartered accountants encounter during articleship and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceAreas.map((area) => (
              <Link key={area.title} href={area.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">{area.description}</p>
                  <div className="mt-4 text-blue-600 group-hover:text-blue-800 flex items-center text-sm font-medium">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel in Your CA Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of aspiring CAs who use our resources to navigate their path to success
          </p>
          <Link href="/resources">
            <span className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Access Free Resources
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

const experienceAreas = [
  {
    title: "GST Compliance",
    description: "Learn about filing returns, reconciliations, assessments and handling GST audits",
    href: "/experiences/gst"
  },
  {
    title: "Bank Audit",
    description: "Understand the nuances of auditing banking operations, loans, advances and financial reporting",
    href: "/experiences/bank-audit"
  },
  {
    title: "Industry Audit",
    description: "Explore various types of industry-specific audits and their unique requirements",
    href: "/experiences/industry-audit"
  },
  {
    title: "Tax Planning & Assessment",
    description: "Master the skills of tax assessment, planning and representation for individuals and businesses",
    href: "/experiences/tax"
  },
  {
    title: "Statutory Compliance",
    description: "Navigate through various statutory requirements, ROC filings and legal compliances",
    href: "/experiences/statutory-compliance"
  },
  {
    title: "Internal Audit",
    description: "Learn methodologies for evaluating internal controls and improving business processes",
    href: "/experiences/internal-audit"
  },
  {
    title: "Financial Management",
    description: "Understand financial analysis, planning, and strategic decision-making processes",
    href: "/experiences/financial-management"
  },
  {
    title: "Corporate Finance",
    description: "Explore valuation, mergers & acquisitions, and corporate restructuring",
    href: "/experiences/corporate-finance"
  }
];
