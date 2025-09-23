import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    id: "6569-JOB",
    date: "August 22, 2025",
    title: "Sales Executive",
    location: "Jaipur",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/sales-executive/",
  },
  {
    id: "6567-JOB",
    date: "August 21, 2025",
    title: "Flutter Developer",
    location: "Jaipur",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/flutter-developer/",
  },
  {
    id: "6565-JOB",
    date: "August 21, 2025",
    title: "PHP Developer",
    location: "Jaipur",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/php-developer/",
  },
  {
    id: "6563-JOB",
    date: "August 21, 2025",
    title: "Content Writer Interns",
    location: "Jaipur",
    type: "Internship",
    link: "https://telepathyinfotech.com/careers/content-writer/",
  },
  {
    id: "6561-JOB",
    date: "August 21, 2025",
    title: "Digital Marketing Interns",
    location: "Jaipur",
    type: "Internship",
    link: "https://telepathyinfotech.com/careers/digital-marketing-intern/",
  },
  {
    id: "6559-JOB",
    date: "August 21, 2025",
    title: "Digital Marketing Manager",
    location: "Jaipur",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/digital-marketing-manager/",
  },
  {
    id: "6558-JOB",
    date: "August 20, 2025",
    title: "ReactJS Developer",
    location: "Bangalore",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/react-developer/",
  },
  {
    id: "6557-JOB",
    date: "August 20, 2025",
    title: "NodeJS Backend Engineer",
    location: "Remote",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/node-developer/",
  },
  {
    id: "6556-JOB",
    date: "August 19, 2025",
    title: "HR Intern",
    location: "Delhi",
    type: "Internship",
    link: "https://telepathyinfotech.com/careers/hr-intern/",
  },
  {
    id: "6555-JOB",
    date: "August 19, 2025",
    title: "Graphic Designer",
    location: "Mumbai",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/graphic-designer/",
  },
  {
    id: "6554-JOB",
    date: "August 18, 2025",
    title: "Business Development Executive",
    location: "Pune",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/business-development/",
  },
  {
    id: "6553-JOB",
    date: "August 18, 2025",
    title: "SEO Specialist",
    location: "Jaipur",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/seo-specialist/",
  },
  {
    id: "6552-JOB",
    date: "August 17, 2025",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full Time",
    link: "https://telepathyinfotech.com/careers/ui-ux-designer/",
  },
  {
    id: "6551-JOB",
    date: "August 17, 2025",
    title: "Data Analyst Intern",
    location: "Hyderabad",
    type: "Internship",
    link: "https://telepathyinfotech.com/careers/data-analyst-intern/",
  },
];
const steps = [
  { title: "Job Opportunities & Application Submission", color: "bg-[#033347]" },
  { title: "Shortlisting Candidates", color: "bg-[#560505]" },
  { title: "Technical Interview", color: "bg-[#4d146e]" },
  { title: "HR Interview", color: "bg-[#420440]" },
  { title: "Decision & Offer", color: "bg-green-900" },
];

// 🎬 Job Card
const JobCard = ({ date, title, location, type, id, link }) => {
  return (
    <motion.div
      className="group bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-lg p-6 sm:p-8 w-full 
        transition-transform duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Date */}
      <motion.p
        className="text-gray-800 text-sm sm:text-base md:text-lg font-bold mb-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {date}
      </motion.p>

      {/* Title */}
      <motion.h2
        className="font-bold text-2xl sm:text-3xl md:text-4xl mt-6 transition-colors duration-300 group-hover:text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Location & Type */}
      <motion.div
        className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href={link} className="text-blue-700 font-bold hover:underline">
          {location}
        </a>
        <span className="text-gray-600 font-bold">•</span>
        <a href={link} className="text-blue-700 font-bold hover:underline">
          {type}
        </a>
      </motion.div>

      {/* Job ID */}
      <motion.p
        className="text-gray-900 text-sm sm:text-base md:text-lg mt-6 font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {id}
      </motion.p>
    </motion.div>
  );
};

const Career = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 lg:pt-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 mt-4">
            CAREER AT
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2 sm:ml-4">
              YR-IT SOLUTION
            </span>
          </h1>
          <div className="pt-8 sm:pt-12">
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              WE ARE HIRING ON
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-2 leading-relaxed">
              Explore job opportunities that speak to your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Job Cards Grid */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full max-w-7xl">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              date={job.date}
              title={job.title}
              location={job.location}
              type={job.type}
              id={job.id}
              link={job.link}
            />
          ))}
        </div>
      </div>

      {/* Career Inquiry */}
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <h2 className="font-extrabold text-xl sm:text-2xl mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            FOR CAREER INQUIRY
          </span>
        </h2>

        <div className="space-y-6">
          {/* Email */}
          <div>
            <p className="text-gray-400 text-sm sm:text-base">Email</p>
            <a
              href="mailto:hryritsolutions@gmail.com"
              className="text-white text-lg sm:text-2xl font-medium hover:underline"
            >
              hryritsolutions@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 text-sm sm:text-base">Phone</p>
            <a
              href="tel:+91 7404890806"
              className="text-white text-lg sm:text-2xl font-medium hover:underline"
            >
              +91 7404890806
            </a>
          </div>
        </div>
      </div>

      {/* Hiring Process */}
       <div className="px-4 sm:px-8 lg:px-20 py-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
    HIRING PROCESS ⇓
  </h1>
  
  {/* Desktop Layout - Horizontal Flow with Curved Arrows */}
  <div className="hidden lg:flex justify-center items-center max-w-7xl mx-auto relative">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        {/* Step Circle */}
        <motion.div
          className={`w-48 h-48 rounded-full flex items-center justify-center text-center text-white text-base font-semibold shadow-2xl relative z-10 ${step.color}`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1.2,
            delay: index * 0.25,
          }}
          whileHover={{
            rotate: [0, -10, 10, -8, 8, -5, 5, 0],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              repeat: 1,
            },
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.7)",
          }}
        >
          {/* Step Number */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            {index + 1}
          </div>
          <span className="animate-pulse px-4">{step.title}</span>
        </motion.div>

        {/* Curved Arrow Connector - Between circles */}
        {index < steps.length - 1 && (
          <motion.div 
            className="flex items-center justify-center mx-2 relative"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: index * 0.25 + 0.5 }}
          >
            {/* Curved Arrow SVG - Between step circles */}
            <svg 
              width="120" 
              height="100" 
              viewBox="0 0 120 100" 
              className="overflow-visible"
            >
              {/* Curved Arrow Path - Alternating curves */}
              <motion.path
                d={index % 2 === 0 
                  ? "M 10 50 Q 60 20 110 50"  // Curve up for even indices (0, 2, 4...)
                  : "M 10 50 Q 60 80 110 50"  // Curve down for odd indices (1, 3...)
                }
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  stroke: ["#3b82f6", "#8b5cf6", "#3b82f6"]
                }}
                transition={{ 
                  pathLength: { duration: 1.5, delay: index * 0.25 + 0.8 },
                  opacity: { duration: 0.5, delay: index * 0.25 + 0.8 },
                  stroke: { duration: 3, repeat: Infinity }
                }}
              />
              
              {/* Arrow Head - Positioned at the end of curve */}
              <motion.polygon
                points={index % 2 === 0 
                  ? "105,45 115,50 105,55"  // Arrow pointing right for upward curves
                  : "105,45 115,50 105,55"  // Arrow pointing right for downward curves
                }
                fill="#8b5cf6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: [0, 1.2, 1],
                  fill: ["#8b5cf6", "#3b82f6", "#8b5cf6"]
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.25 + 1.5 },
                  scale: { duration: 0.8, delay: index * 0.25 + 1.5 },
                  fill: { duration: 3, repeat: Infinity }
                }}
              />
              
            </svg>
          </motion.div>
        )}
      </React.Fragment>
    ))}
  </div>

  {/* Mobile/Tablet Layout - Vertical Flow */}
  <div className="lg:hidden flex flex-col items-center space-y-8 max-w-md mx-auto">
    {steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center">
        {/* Step Circle */}
        <motion.div
          className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center text-center text-white text-sm sm:text-base font-semibold shadow-2xl relative ${step.color}`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1.2,
            delay: index * 0.25,
          }}
          whileHover={{
            rotate: [0, -10, 10, -8, 8, -5, 5, 0],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              repeat: 1,
            },
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.7)",
          }}
        >
          {/* Step Number */}
          <div className="absolute -top-3 -right-3 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
            {index + 1}
          </div>
          <span className="animate-pulse px-3">{step.title}</span>
        </motion.div>

        {/* Vertical Arrow Connector */}
        {index < steps.length - 1 && (
          <motion.div 
            className="flex flex-col items-center my-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.25 + 0.5 }}
          >
            {/* Vertical Arrow Line */}
            <div className="relative">
              <motion.div 
                className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(180deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(180deg, #8b5cf6, #3b82f6)",
                    "linear-gradient(180deg, #3b82f6, #8b5cf6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Moving Dot Animation */}
              <motion.div
                className="absolute left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                style={{ x: "-50%" }}
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Arrow Head */}
            <motion.div 
              className="mt-2"
              animate={{ 
                y: [0, 5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                <path d="M12 5v14m-7-7l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Career; 