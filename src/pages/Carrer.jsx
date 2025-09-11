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

// 🎬 Job Card with Framer Motion Animation
const JobCard = ({ date, title, location, type, id, link }) => {
  return (
    <motion.div
      className="group bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-lg p-8 w-auto h-auto 
        transition-transform duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Date */}
      <motion.p
        className="text-gray-800 text-lg font-bold p-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {date}
      </motion.p>

      {/* Title */}
      <motion.h2
        className="font-bold text-4xl mt-12 px-4 transition-colors duration-300 group-hover:text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Location & Type */}
      <motion.div
        className="flex items-center gap-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href={link} className="text-blue-700 p-4 font-bold hover:underline">
          {location}
        </a>
        <span className="text-gray-600 font-bold">•</span>
        <a href={link} className="text-blue-700 text-lg p-4 font-bold hover:underline">
          {type}
        </a>
      </motion.div>

      {/* Job ID */}
      <motion.p
        className="text-gray-900 text-lg mt-12 font-bold p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
      <section className="relative pt-32 overflow-hidden ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 mt-4">
            CAREER AT
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4">
              YR-IT SOLUTION
            </span>
          </h1>
          <div className="pt-16 text-center">
            <p className="text-xl max-w-3xl text-center mx-auto leading-relaxed">
              WE ARE HIRING ON <br />
              Explore job opportunities that speak to your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Job Cards Grid */}
      <div className="h-fit flex items-center justify-center p-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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
      <div className="p-10 m-20">
        <h2 className="font-extrabold text-2xl">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            FOR CAREER INQUIRY
          </span>
        </h2>

        <div className="space-y-4 m-4">
          {/* Email */}
          <div>
            <p className="text-gray-400 text-l">Email</p>
            <a
              href="mailto:hryritsolutions@gmail.com"
              className="text-white text-2xl font-medium hover:underline"
            >
              hryritsolutions@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 text-l">Phone</p>
            <a
              href="tel:+919999999999"
              className="text-white text-2xl font-medium hover:underline"
            >
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="p-10 m-20">
        <h1 className="text-4xl font-bold"> HIRING PROCESS ⇓</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-fit bg-black px-6">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-56 h-56 rounded-full flex items-center justify-center text-center text-white text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-110 ${step.color}`}
              >
                {step.title}
              </div>
              {index !== steps.length && (
                <div className="w-16 h-1 bg-white mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;
