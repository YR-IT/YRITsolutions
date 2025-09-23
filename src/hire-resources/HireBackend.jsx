import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle,Server, Cog, Cloud, Star, Users, Code, Globe, Smartphone, Database, Brain, Shield, Search, Filter, MapPin, Clock, DollarSign, Zap, Award, Headphones, Cpu, Target, Monitor, TrendingUp, MessageSquare, Calendar, Briefcase, Trophy, Rocket, Heart, ThumbsUp, Sparkles, MousePointer, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';




const data = [
  {
    logo: <Database className="w-14 h-14" />,
    title: "Domain Knowledge",
    description: "When hiring backend developers, it's essential to check their experience in relevant industries. Developers with prior exposure can implement best practices and build customized, efficient backend solutions."
  },
  {
    logo: <Server className="w-14 h-14" />,
    title: "Technical Proficiency",
    description: "Backend developers with strong technical expertise ensure reliable server-side development. Skilled candidates proficient in Node.js, Django, Spring Boot, and database management deliver scalable and secure systems."
  },
  {
    logo: <Cog className="w-14 h-14" />,
    title: "Team Collaboration",
    description: "Hiring developers who can adapt to your workflow and collaborate efficiently is crucial. Strong backend candidates demonstrate excellent communication and problem-solving skills."
  },
  {
    logo: <Cloud className="w-14 h-14" />,
    title: "Geographical Alignment",
    description: "Considering time zones and location helps ensure smooth communication and faster delivery. Align backend developer availability with your project requirements for maximum efficiency."
  },
  {
    logo: <Zap className="w-14 h-14" />,
    title: "Delivery & Cost Efficiency",
    description: "Align your budget and delivery timelines with backend development needs. Look for developers with proven track records who can meet deadlines while maintaining high code quality."
  },
  {
    logo: <Shield className="w-14 h-14" />,
    title: "Security & Reliability",
    description: "Backend developers must prioritize security, data integrity, and system reliability. Strong candidates follow best practices in authentication, encryption, and fault-tolerant design."
  }
];


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

const HireBackend = () => {
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
              }`}>Backend Developers</span>
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
              Empower your business with the expertise of our senior Backend developers. 
              <span className="text-blue-400 font-semibold"> Trusted professionals</span>, 
              <span className="text-purple-400 font-semibold"> demonstrated success</span>, and 
              <span className="text-pink-400 font-semibold"> exceptional mastery</span> - all at your fingertips.
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
          <div className="text-center pt-12  sm:pt-12 md:pt-12 lg:pt-12">
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
        </div>
      </motion.section>

      

      {/* Frontend Development Excellence Section */}
      <section className="py-8 sm:py-8 md:py-8 lg:py-8">
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
            }`}>Backend Development Excellence</h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Design secure, scalable backends that fuel seamless digital experiences.
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
                }`}>Modern Backend Development</h3>
              </div>
              <p className={`text-lg mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
               Robust backend solutions with Node.js, Laravel, and Express for seamless integration and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Node.js & Django Mastery</h4>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Proficient in building secure and scalable systems using cutting-edge backend technologies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Optimized Server Performance</h4>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Future-ready systems with cloud-native deployment, containers, and serverless technologies.</p>
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
                    }`}>Optimized queries, API rate limiting, and server tuning for high efficiency.</p>
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
              }`}>Backend Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Node.js", desc: "JavaScript runtime environment" },
                  { name: "Express.js", desc: "Minimalist web framework" },
                  { name: "Django", desc: "High-level Python framework" },
                  { name: "Spring Boot", desc: "Java-based framework" },
                  { name: "Laravel", desc: "Elegant PHP framework" },
                  { name: "Flask", desc: "Lightweight Python micro-framework" },
                  { name: "NestJS", desc: "Progressive Node.js framework" },
                  { name: "Ruby on Rails", desc: "Full-stack Ruby framework" }
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
            }`}>Backend Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  {
                    icon: <Database className="w-8 h-8" />,
                    title: "Node.js Development",
                    description: "Custom Node.js applications with Express, NestJS, and scalable architectures",
                    features: ["Express.js", "NestJS", "RESTful APIs", "Microservices"],
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <Server className="w-8 h-8" />,
                    title: "Django Development",
                    description: "Robust Django applications with ORM, authentication, and security best practices",
                    features: ["ORM", "Django REST Framework", "Authentication", "Security"],
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: <Cog className="w-8 h-8" />,
                    title: "Spring Boot Development",
                    description: "Enterprise-grade Java backend applications with Spring Boot and modern architecture",
                    features: ["Spring Boot", "Spring Security", "REST APIs", "Microservices"],
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    icon: <Cloud className="w-8 h-8" />,
                    title: "Scalable Architecture",
                    description: "Designing backend systems for high performance, scalability, and reliability",
                    features: ["Microservices", "Load Balancing", "Caching", "Cloud Deployment"],
                    color: "from-purple-500 to-indigo-500"
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Performance Optimization",
                    description: "Optimizing backend performance for fast and reliable applications",
                    features: ["Query Optimization", "Caching", "Asynchronous Processing", "Database Indexing"],
                    color: "from-yellow-500 to-orange-500"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Testing & QA",
                    description: "Comprehensive backend testing strategies to ensure reliability and security",
                    features: ["Unit Testing", "Integration Testing", "Load Testing", "Security Audits"],
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
      <div className="pb-6 sm:pb-6 md:pb-6 lg:pb-6">
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
            Essential Factors for Choosing Back-end Developers
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
              When you hire backend developers, it is crucial to find individuals who align with your technical requirements, system architecture needs, and long-term scalability goals. Our backend developers are proficient in modern server-side technologies, database management, and building secure, high-performance applications.
            </p>
            <p>
              When evaluating potential backend developers, it's also valuable to consider freelance talent who can offer flexibility and specialized expertise for your projects. Strong candidates should demonstrate robust problem-solving abilities, attention to security, and efficient handling of complex data workflows.
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

export default HireBackend