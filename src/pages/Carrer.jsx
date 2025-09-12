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
              href="tel:+919999999999"
              className="text-white text-lg sm:text-2xl font-medium hover:underline"
            >
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>

      {/* Hiring Process */}
       <div className="px-4 sm:px-8 lg:px-20 py-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
    HIRING PROCESS ⇓
  </h1>
  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8">
    {steps.map((step, index) => (
      <motion.div
  key={index}
  className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center text-center text-white text-sm sm:text-base md:text-lg font-semibold shadow-2xl ${step.color}`}
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
    rotate: [0, -10, 10, -8, 8, -5, 5, 0],  // 👈 juggle motion
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: 1,  // ek baar juggle kare
    },
    scale: 1.1,
    boxShadow: "0 0 30px rgba(255,255,255,0.7)",
  }}
>
  <span className="animate-pulse">{step.title}</span>
</motion.div>


    ))}
  </div>
</div>
    </>
  );
};

export default Career;