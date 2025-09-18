import React from 'react';
import { motion } from "framer-motion";

const dev = [
  {
    name: "M. Sharma",
    role: "Senior Front-end Developer",
    experience: "10 Years of Experience",
    skills: ["JavaScript", "React", "HTML/CSS", "jQuery", "Vue.js", "Angular JS"],
    desc: "Experienced Front-end developer with 10 years of expertise in JavaScript, React, and CSS. Passionate about creating seamless, responsive user interfaces. Proven track record of delivering high-quality web applications for diverse industries.",
    monthly: "$7000 Above",
    hourly: "$15 - $25",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Emily Johnson",
    role: "Senior Front-end Developer",
    experience: "12 Years of Experience",
    skills: ["TypeScript", "Angular JS", "Vue.js", "Next.js", "React.js"],
    desc: "Front-end developer with 12+ years of experience specializing in Angular, Vue, and TypeScript. Skilled in building dynamic and accessible web applications with a strong background in UI/UX design.",
    monthly: "$8500 Above",
    hourly: "$15 - $25",
    img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "A. Verma",
    role: "Senior Front-end Developer",
    experience: "15 Years of Experience",
    skills: ["React JS", "HTML/CSS", "TypeScript", "Vue.js", "Next.js", "Angular JS"],
    desc: "With 15 years of experience in Front-end development, A. Verma excels in React, JavaScript, and HTML/CSS. Adept at turning design mockups into interactive, high-performance web pages.",
    monthly: "$9000 Above",
    hourly: "$15 - $25",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Hire Front-end Developer",
    role: "",
    experience: "10 years of Experience",
    skills: ["JavaScript", "React", "HTML/CSS", "jQuery", "Vue.js", "Angular JS"],
    desc: "Hire skilled front-end developers to build stunning and high-performance web applications tailored to your needs. Adept at turning design mockups into interactive, high-performance web pages.",
    monthly: "$9000 Above",
    hourly: "$15 - $25",
    img: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const data = [
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-automation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17 22l5 -3l-5 -3z" /></svg>,
    title: "Domain Knowledge",
    description: "While selecting front-end developers, it's vital to check their domain exposure. Developers with prior industry experience can apply best practices from different verticals and create customized solutions that enhance your project outcomes."
  },
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9.968 8.948" /><path d="M3.6 9h16.8" /><path d="M3.6 15h6.4" /><path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" /><path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" /><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" /></svg>,
    title: "Technical Proficiency",
    description: "Engaging front-end developers with strong technical expertise guarantees reliable web and progressive web app development. Skilled developers proficient in HTML, CSS, JavaScript, and modern frameworks ensure seamless user interfaces."
  },
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-stars"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z" /><path d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /><path d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /></svg>,
    title: "Team Collaboration",
    description: "It's important to hire developers who can quickly adapt to your work culture and collaborate efficiently with your team. Strong candidates should demonstrate excellent communication and problem-solving abilities."
  },
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.19 20.27l-2.19 .73v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>,
    title: "Geographical Alignment",
    description: "Considering the location and time zone of your front-end developers ensures smooth communication and higher productivity. The right balance depends on your project requirements and budget model."
  },
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>,
    title: "Delivery & Cost Efficiency",
    description: "When bringing in front-end developers, it's crucial to align your budget and delivery timelines. Look for developers with proven track records and positive feedback regarding their ability to handle tight deadlines."
  },
  {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>,
    title: "Modern Technologies",
    description: "Ensure your front-end developers are proficient in the latest technologies and frameworks. This includes knowledge of responsive design, progressive web apps, and modern development tools and practices."
  }
];

const FrontendCard = ({ dev }) => {
  return (
    <motion.div
      className="relative group bg-gradient-to-b from-blue-400 to-purple-800 
                 text-white p-4 sm:p-6 w-full 
                 h-auto min-h-[420px] sm:min-h-[480px] 
                 flex flex-col justify-between
                 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none 
                 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Profile */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6 z-10">
        <img
          src={dev.img}
          alt={dev.name}
          className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 
                     rounded-full border-2 border-white object-cover flex-shrink-0"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold">{dev.name}</h3>
          <p className="text-sm sm:text-base">{dev.role}</p>
          <p className="text-xs sm:text-sm text-gray-200">{dev.experience}</p>
        </div>
      </div>

      {/* Skills */}
      {dev.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 z-10 justify-center sm:justify-start">
          {dev.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 border border-white text-xs sm:text-sm 
                         transition-all duration-300 ease-in-out 
                         hover:shadow-md hover:bg-gradient-to-r 
                         from-blue-400 to-purple-800 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6 z-10 
                    text-center sm:text-left leading-relaxed flex-grow">
        {dev.desc}
      </p>

      {/* Salary Info */}
      {(dev.monthly || dev.hourly) && (
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-semibold 
                        border-t border-gray-300 pt-4 z-10 gap-2 sm:gap-0">
          <span className="text-center sm:text-left">Monthly: {dev.monthly}</span>
          <span className="text-center sm:text-right">Hourly: {dev.hourly}</span>
        </div>
      )}

      {/* Hover Layer Effect */}
      <div
        className="absolute left-0 bottom-0 w-full h-0 
                   bg-gradient-to-b from-black/70 to-purple-800 
                   rounded-2xl flex items-center justify-center flex-col 
                   text-center px-4 sm:px-6 overflow-hidden 
                   transition-all duration-700 ease-in-out group-hover:h-full"
      />
    </motion.div>
  );
};

const EssentialCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="group relative bg-gradient-to-b from-blue-400 to-purple-800 
                     text-white rounded-bl-2xl rounded-t-2xl p-4 sm:p-6 
                     shadow-lg overflow-hidden min-h-[280px] sm:min-h-[320px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center relative z-10 mx-auto">
            <div className="w-14 h-14 sm:w-20 sm:h-20 group-hover:animate-bounce">
              {item.logo}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold mb-3 relative z-10 text-center">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed text-gray-200 relative z-10 text-center">
            {item.description}
          </p>

          {/* Overlay Layer */}
          <div
            className="absolute left-0 bottom-0 w-full h-0 
                       bg-gradient-to-b from-black/70 to-purple-800 
                       rounded-2xl flex items-center justify-center flex-col 
                       text-center px-4 sm:px-6 overflow-hidden 
                       transition-all duration-700 ease-in-out group-hover:h-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

const HireFrontendDev = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hire
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
              Front-end Developer
            </span>
          </motion.h1>
          
          <motion.div 
            className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed px-2 sm:px-0">
              Hire Front-end developers from our global talent pool to meet your project needs.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-600 px-2 sm:px-4">
              Our Front-end developers have extensive experience creating captivating designs in HTML, CSS, JavaScript, and modern frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* White Container with Cards */}
      <motion.div 
        className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 
                   mx-4 sm:mx-6 lg:mx-auto
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                   py-6 sm:py-8 md:py-10 lg:py-12 
                   rounded-2xl sm:rounded-3xl 
                   bg-white shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Looking Front-End Developers?
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
                         bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
                         bg-clip-text text-transparent">
            Hire Best front-end developers today!
          </h2>
        </div>

        <div className="mt-4 sm:mt-6 space-y-2 text-center">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-0">
            Get skilled front-end developers to create responsive, user-friendly, and high-performance web applications.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-0">
            Our experts specialize in React, Angular, and Vue.js for seamless UI/UX. Tailored solutions to match your specific project requirements.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-0">
            Build stunning and interactive web experiences with our professionals!
          </p>
        </div>

        {/* Developer Cards */}
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 lg:gap-8 
                        grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {dev.map((developer, idx) => (
            <FrontendCard key={idx} dev={developer} />
          ))}
        </div>
      </motion.div>

      {/* Essential Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Essential Factors for Choosing Front-end Developers
          </motion.h1>

          <motion.div 
            className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              When you hire front-end developers, it is important to find individuals who align with your technical needs, culture, and long-term goals. Our front-end web developers understand modern web technologies, design principles, and user experience.
            </p>
            <p>
              When evaluating potential front-end developers, it's also important to explore freelance talent who can bring flexibility and specialized expertise to your projects. Strong candidates should demonstrate exceptional problem-solving skills and attention to detail.
            </p>
          </motion.div>

          {/* Essential Cards */}
          <div className="mt-8 sm:mt-12">
            <EssentialCard data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HireFrontendDev;