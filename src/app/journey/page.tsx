"use client";

import { motion } from "framer-motion";
import { ChevronRight, BookOpen, GraduationCap, Briefcase, Award, FileCheck } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function JourneyPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Chartered Accountancy Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to the path of becoming a Chartered Accountant in India, from registration to qualification
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          {/* Timeline items */}
          <div className="space-y-24 relative">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                title={item.title} 
                description={item.description}
                icon={item.icon}
                points={item.points}
                isLeft={index % 2 === 0}
                buttonText={item.buttonText}
                buttonLink={item.buttonLink}
              />
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-24 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard 
              title="ICAI Official Guidelines" 
              description="Official requirements, exam schedules and registration process"
              link="https://www.icai.org"
              external={true}
            />
            <ResourceCard 
              title="Study Material" 
              description="Comprehensive study guides, practice papers and resources"
              link="/resources/study-material"
              external={false}
            />
            <ResourceCard 
              title="Articleship Experiences" 
              description="Real stories and experiences from articleship training"
              link="/experiences"
              external={false}
            />
            <ResourceCard 
              title="Career Opportunities" 
              description="Explore various career paths after becoming a CA"
              link="/resources/career-paths"
              external={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ 
  title, 
  description, 
  icon: Icon, 
  points, 
  isLeft, 
  buttonText, 
  buttonLink 
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon; 
  points: string[]; 
  isLeft: boolean; 
  buttonText: string; 
  buttonLink: string; 
}) {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <ul className={`space-y-2 mb-6 ${isLeft ? 'ml-auto' : ''}`}>
          {points.map((point, index) => (
            <li key={index} className={`flex items-start ${isLeft ? 'justify-end' : ''}`}>
              <ChevronRight className={`h-5 w-5 text-blue-500 mt-1 ${isLeft ? 'order-2 ml-2' : 'mr-2'}`} />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        <Link href={buttonLink}>
          <span className={`inline-flex items-center text-blue-700 font-medium hover:text-blue-900 ${isLeft ? 'justify-end' : ''}`}>
            {buttonText} 
            <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </motion.div>

      {/* Icon */}
      <div className="w-2/12 flex justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center z-10"
        >
          <Icon className="h-7 w-7 text-blue-700" />
        </motion.div>
      </div>

      {/* Empty space for the other side */}
      <div className="w-5/12"></div>
    </div>
  );
}

function ResourceCard({ title, description, link, external }: { title: string; description: string; link: string; external: boolean }) {
  return (
    <Link href={link} target={external ? "_blank" : "_self"}>
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-blue-600 font-medium flex items-center">
          {external ? "Visit Official Site" : "Learn More"} <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

const timelineItems = [
  {
    title: "Registration & Foundation",
    description: "Beginning your CA journey with the foundational course",
    icon: BookOpen,
    points: [
      "Register with ICAI after completing 10+2",
      "Study fundamental accounting, business laws, and mathematics",
      "Four-month study period with comprehensive examination",
      "Gateway to the intermediate level after passing all subjects"
    ],
    buttonText: "Foundation details",
    buttonLink: "/journey/foundation-intermediate#foundation"
  },
  {
    title: "Intermediate Course",
    description: "Building advanced knowledge and preparing for practical training",
    icon: GraduationCap,
    points: [
      "Eight papers divided into two groups",
      "Study advanced accounting, auditing, taxation, and corporate laws",
      "Can be pursued through direct entry for commerce graduates",
      "Eligibility for articleship after clearing one group"
    ],
    buttonText: "Intermediate details",
    buttonLink: "/journey/foundation-intermediate#intermediate"
  },
  {
    title: "Articleship Training",
    description: "Hands-on practical experience under a practicing CA",
    icon: Briefcase,
    points: [
      "Three-year training period with a practicing CA",
      "Exposure to various areas like auditing, taxation, and accounting",
      "Learn professional ethics and business communication",
      "Monthly stipend as per ICAI guidelines",
      "Opportunity to specialize in areas of interest"
    ],
    buttonText: "Explore articleship experiences",
    buttonLink: "/experiences"
  },
  {
    title: "Information Technology Training & Orientation",
    description: "Developing IT and soft skills necessary for the profession",
    icon: FileCheck,
    points: [
      "100-hour IT training program",
      "General Management and Communication Skills (GMCS)",
      "Advanced Integrated Course on Information Technology and Soft Skills (AICITSS)",
      "Mandatory completion before registering for final examination"
    ],
    buttonText: "IT & Orientation details",
    buttonLink: "/journey/it-orientation"
  },
  {
    title: "Final Examination",
    description: "The culmination of academic learning in the CA program",
    icon: Award,
    points: [
      "Eight papers divided into two groups",
      "Advanced study of financial reporting, strategic management, and specialized areas",
      "Can be attempted in the last six months of articleship",
      "Challenging examination with comprehensive syllabus"
    ],
    buttonText: "Final exam details",
    buttonLink: "/journey/final-professional#final"
  },
  {
    title: "Membership & Professional Career",
    description: "Becoming a Chartered Accountant and starting your professional journey",
    icon: Award,
    points: [
      "Apply for ICAI membership after passing final exam and completing articleship",
      "Opportunity to practice as a CA or join industry",
      "Various career paths including audit, taxation, consulting, or corporate finance",
      "Continuous professional education to stay updated"
    ],
    buttonText: "Career opportunities",
    buttonLink: "/journey/final-professional#career"
  }
]; 