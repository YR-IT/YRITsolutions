import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Users, Code, Globe, Smartphone, Database, Brain, Shield, Search, Filter, MapPin, Clock, DollarSign, Zap, Award, Headphones, Cpu, Target, Monitor, TrendingUp, MessageSquare, Calendar, Briefcase, Trophy, Rocket, Heart, ThumbsUp, Sparkles, MousePointer, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      className={`relative group bg-gradient-to-b from-blue-400 to-purple-800 
                 text-white p-4 sm:p-6 w-full 
                 h-auto min-h-[420px] sm:min-h-[480px] 
                 flex flex-col justify-between
                 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none 
                 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                   isDarkMode ? 'shadow-gray-900/50' : 'shadow-gray-500/20'
                 }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      {/* Profile */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6 z-10">
        <motion.img
          src={dev.img}
          alt={dev.name}
          className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 
                     rounded-full border-2 border-white object-cover flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
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
            <motion.span
              key={i}
              className="px-2 sm:px-3 py-1 border border-white text-xs sm:text-sm 
                         transition-all duration-300 ease-in-out 
                         hover:shadow-md hover:bg-gradient-to-r 
                         from-blue-400 to-purple-800 rounded-md cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
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
  const { isDarkMode } = useTheme();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className={`group relative bg-gradient-to-b from-blue-400 to-purple-800 
                     text-white rounded-bl-2xl rounded-t-2xl p-4 sm:p-6 
                     shadow-lg overflow-hidden min-h-[280px] sm:min-h-[320px] 
                     transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                       isDarkMode ? 'shadow-gray-900/50' : 'shadow-gray-500/20'
                     }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {/* Logo */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center relative z-10 mx-auto">
            <motion.div 
              className="w-14 h-14 sm:w-20 sm:h-20 group-hover:animate-bounce"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {item.logo}
            </motion.div>
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
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.3))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-purple-500/8 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-pink-500/5 rounded-full blur-2xl opacity-15" />
          <div className="absolute bottom-1/3 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-cyan-500/5 rounded-full blur-3xl opacity-15" />
          
          {/* Floating Elements */}
          <div className="absolute top-16 sm:top-20 right-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-10" />
          <div className="absolute bottom-20 sm:bottom-32 left-1/3 w-6 sm:w-12 h-6 sm:h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-15" />
        </div>

        {/* Hero Content Container - Added text-center here */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex text-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/40 mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <Trophy className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold">Award-Winning Frontend Team</span>
              <div className="ml-2 sm:ml-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 sm:w-3 h-2 sm:h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hire Elite
              </span>
              <br />
              <span className={`drop-shadow-2xl ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Frontend Developers</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
                On Demand
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed text-center ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform your vision into reality with our handpicked team of senior frontend developers. 
              <span className="text-blue-400 font-semibold"> Vetted talent</span>, 
              <span className="text-purple-400 font-semibold"> proven results</span>, and 
              <span className="text-pink-400 font-semibold"> unmatched expertise</span> - all at your fingertips.
            </motion.p>
          </motion.div>

          {/* Enhanced Stats with animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered", icon: <Briefcase className="w-8 h-8" />, color: "text-blue-400" },
              { number: "25+", label: "Expert Developers", icon: <Users className="w-8 h-8" />, color: "text-purple-400" },
              { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-8 h-8" />, color: "text-pink-400" },
              { number: "24/7", label: "Global Support", icon: <Globe className="w-8 h-8" />, color: "text-cyan-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  isDarkMode ? 'bg-gray-800/20 border border-gray-700/50' : 'bg-white/10 border border-white/20'
                }`}
              >
                <div className={`${stat.color} mb-2 sm:mb-3 flex justify-center`}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(stat.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-1 sm:mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className={`text-xs sm:text-sm font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-gradient-to-r from-blue-900/10 to-purple-900/10' : 'bg-gradient-to-r from-blue-50/50 to-purple-50/50'
        }`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "25+", label: "Expert Developers", icon: <Users className="w-6 h-6" />, color: "text-blue-500" },
              { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-500" },
              { number: "98%", label: "Success Rate", icon: <Star className="w-6 h-6" />, color: "text-yellow-500" },
              { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" />, color: "text-purple-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className={`text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-gray-800/30 border-gray-700/20 hover:border-gray-600/30' 
                    : 'bg-white/50 border-gray-200/20 hover:border-gray-300/30'
                }`}
              >
                <motion.div 
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                    {React.cloneElement(stat.icon, { className: "w-full h-full" })}
                  </div>
                  {stat.number}
                </motion.div>
                <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 group-hover:text-gray-300' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Theme-responsive Container with Cards */}
      <motion.div 
        className={`max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                   py-6 sm:py-8 md:py-10 lg:py-12 
                   rounded-2xl sm:rounded-3xl shadow-md ${
                     isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white'
                   }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Looking Front-End Developers?
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
                         bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
                         bg-clip-text text-transparent">
            Hire Best front-end developers today!
          </h2>
        </motion.div>

        <motion.div 
          className="mt-4 sm:mt-6 space-y-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={`text-sm sm:text-base leading-relaxed px-2 sm:px-0 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Get skilled front-end developers to create responsive, user-friendly, and high-performance web applications.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed px-2 sm:px-0 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Our experts specialize in React, Angular, and Vue.js for seamless UI/UX. Tailored solutions to match your specific project requirements.
          </p>
          <p className={`text-sm sm:text-base leading-relaxed px-2 sm:px-0 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Build stunning and interactive web experiences with our professionals!
          </p>
        </motion.div>

        {/* Developer Cards */}
        <motion.div 
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 lg:gap-8 
                      grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dev.map((developer, idx) => (
            <FrontendCard key={idx} dev={developer} />
          ))}
        </motion.div>
      </motion.div>

      {/* Frontend Development Excellence Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Frontend Development Excellence</h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Create stunning web applications with modern frameworks and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-800/30 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Modern Frontend Development</h3>
              </div>
              <p className={`text-lg mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Expert frontend development using React, Vue.js, and Angular for optimal performance and user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>React & Vue.js Mastery</h4>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Expert developers proficient in modern JavaScript frameworks and libraries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Responsive Design</h4>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Mobile-first approach with CSS Grid, Flexbox, and modern layout techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Performance Optimization</h4>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Code splitting, lazy loading, and optimization for maximum performance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-800/30 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Frontend Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React", desc: "Modern UI library" },
                  { name: "Vue.js", desc: "Progressive framework" },
                  { name: "Angular", desc: "Full-featured framework" },
                  { name: "TypeScript", desc: "Type-safe JavaScript" },
                  { name: "Tailwind CSS", desc: "Utility-first CSS" },
                  { name: "Next.js", desc: "React framework" },
                  { name: "Nuxt.js", desc: "Vue.js framework" },
                  { name: "Webpack", desc: "Module bundler" }
                ].map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className={`p-4 rounded-xl ${
                      isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className={`font-semibold text-sm mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{tech.name}</h4>
                    <p className={`text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Frontend Development Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Frontend Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "React Development",
                  description: "Custom React applications with modern hooks, context API, and performance optimization",
                  features: ["React Hooks", "Context API", "Redux/Zustand", "Performance Optimization"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Vue.js Development",
                  description: "Progressive Vue.js applications with Composition API and modern tooling",
                  features: ["Composition API", "Vuex/Pinia", "Vue Router", "Nuxt.js"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Angular Development",
                  description: "Enterprise Angular applications with TypeScript and modern architecture",
                  features: ["TypeScript", "RxJS", "Angular Material", "NgRx"],
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Responsive Design",
                  description: "Mobile-first responsive designs that work perfectly on all devices",
                  features: ["Mobile-First", "CSS Grid", "Flexbox", "Media Queries"],
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Performance Optimization",
                  description: "Speed optimization techniques for lightning-fast web applications",
                  features: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Caching"],
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Testing & QA",
                  description: "Comprehensive testing strategies for reliable frontend applications",
                  features: ["Unit Testing", "Integration Testing", "E2E Testing", "Accessibility"],
                  color: "from-teal-500 to-cyan-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm cursor-pointer group border ${
                    isDarkMode 
                      ? 'bg-gray-800/30 border-gray-700 shadow-lg' 
                      : 'bg-white/50 border-gray-200 shadow-md'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</h4>
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <div>
                    <h5 className={`font-semibold text-xs mb-2 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>Key Features:</h5>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-xs flex items-center ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Essential Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h1 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-center lg:text-left ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Essential Factors for Choosing Front-end Developers
          </motion.h1>

          <motion.div 
            className={`space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
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

      {/* Enhanced Call to Action Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative p-8 rounded-2xl overflow-hidden backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 border-gray-600' 
                : 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-blue-200'
            }`}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border mb-4 ${
                  isDarkMode ? 'border-blue-400/30' : 'border-blue-500/30'
                }`}>
                  <Rocket className={`w-4 h-4 mr-2 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>Ready to Transform Your Ideas?</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4 sm:px-0">
                  Let's Build Something Amazing Together
                </h2>
                
                <p className={`text-base sm:text-lg mb-6 max-w-2xl mx-auto px-4 sm:px-0 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Join hundreds of successful companies who have transformed their business with our expert frontend developers. 
                  Your next breakthrough is just one conversation away.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mb-6 sm:mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Rocket className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project Now
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base border-2 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm ${
                    isDarkMode 
                      ? 'border-gray-500 text-gray-200 hover:bg-gray-700/50 hover:border-gray-400' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Free Consultation
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center space-x-8 text-sm pt-12 sm:pt-16"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>No Hidden Costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>24/7 Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HireFrontendDev;