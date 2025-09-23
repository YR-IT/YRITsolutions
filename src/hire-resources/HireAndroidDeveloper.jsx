import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Code, Globe, Smartphone, Database, Shield, Clock, DollarSign, Award, Headphones, Target, Trophy, Heart, ThumbsUp, Sparkles, MousePointer, Settings, Rocket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HireAndroidDeveloper = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  
  // Reduced parallax transforms for better performance
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
            className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-emerald-600/20 to-teal-600/30"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.3))",
                "linear-gradient(45deg, rgba(20, 184, 166, 0.3), rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.3))",
                "linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.2), rgba(34, 197, 94, 0.3))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-green-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-emerald-500/8 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-teal-500/5 rounded-full blur-2xl opacity-15" />
          <div className="absolute bottom-1/3 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-green-500/5 rounded-full blur-3xl opacity-15" />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
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
              className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-500/40 mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-green-400" />
              <span className="text-xs sm:text-sm font-semibold">Android Development Experts</span>
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0"
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Hire Expert
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Android Developers</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
                Kotlin & Java
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Build powerful native Android applications with our expert Kotlin and Java developers. 
              <span className="text-green-400 font-semibold"> Google Play ready</span>, 
              <span className="text-emerald-400 font-semibold"> Material Design</span>, and 
              <span className="text-teal-400 font-semibold"> scalable architecture</span>.
            </motion.p>
          </motion.div>

          {/* Enhanced Stats with animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
          >
            {[
              { number: "150+", label: "Android Apps Built", icon: <Smartphone className="w-8 h-8" />, color: "text-green-400" },
              { number: "20+", label: "Android Developers", icon: <Users className="w-8 h-8" />, color: "text-emerald-400" },
              { number: "98%", label: "Play Store Success", icon: <Trophy className="w-8 h-8" />, color: "text-teal-400" },
              { number: "24/7", label: "Development Support", icon: <Headphones className="w-8 h-8" />, color: "text-green-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className={`text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
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
                <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Android Development Excellence Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Android Development Excellence</h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Build powerful Android applications with Material Design and Google Play Store success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Native Android Development</h3>
              </div>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Expert Android app development using Kotlin and Java for Google Play Store success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Kotlin & Java Expertise</h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modern Kotlin development with Java legacy support for comprehensive solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Material Design Implementation</h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beautiful, intuitive interfaces following Google's Material Design principles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Google Services Integration</h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Firebase, Google Maps, Analytics, and Play Services integration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
            >
              <h3 className="text-2xl font-bold mb-6">Android Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Kotlin", desc: "Modern Android language" },
                  { name: "Java", desc: "Traditional Android" },
                  { name: "Android Studio", desc: "Official IDE" },
                  { name: "Android SDK", desc: "Development kit" },
                  { name: "Room", desc: "Database library" },
                  { name: "Retrofit", desc: "HTTP client" },
                  { name: "Firebase", desc: "Backend services" },
                  { name: "Play Console", desc: "App distribution" }
                ].map((tech, index) => (
                  <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                    <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Android Development Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Android Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Native Android Apps",
                  description: "Custom Android applications built with Kotlin for optimal performance and user experience",
                  features: ["Kotlin Programming", "Android SDK", "Material Design", "Performance Optimization"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Tablet Optimization",
                  description: "Android tablet applications optimized for larger screens and enhanced functionality",
                  features: ["Tablet UI", "Multi-pane Layouts", "Adaptive Design", "Enhanced Navigation"],
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Wear OS Apps",
                  description: "Companion Android Wear applications for smartwatches and wearable devices",
                  features: ["Wear OS SDK", "Health Tracking", "Notifications", "Voice Commands"],
                  color: "from-teal-500 to-green-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Play Store Optimization",
                  description: "Complete Google Play Store submission, optimization, and marketing strategies",
                  features: ["ASO Strategy", "Play Console", "Metadata Optimization", "Review Management"],
                  color: "from-green-600 to-emerald-600"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Android App Maintenance",
                  description: "Ongoing support, updates, and maintenance for existing Android applications",
                  features: ["Bug Fixes", "Android Updates", "Performance Monitoring", "Security Patches"],
                  color: "from-emerald-600 to-teal-600"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Backend Integration",
                  description: "Seamless integration with APIs, databases, and Google services for Android apps",
                  features: ["REST APIs", "Room Database", "Firebase", "Google Services"],
                  color: "from-teal-600 to-green-600"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800/30 border border-gray-700' 
                      : 'bg-white/50 border border-gray-200 shadow-md'
                  } backdrop-blur-sm cursor-pointer group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <div>
                    <h5 className="font-semibold text-xs mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-xs flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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

          {/* Android Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Android Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Design & Planning",
                  description: "Material Design implementation and Android-specific UI/UX planning",
                  icon: <MousePointer className="w-6 h-6" />
                },
                {
                  step: "02",
                  title: "Kotlin Development",
                  description: "Modern Kotlin development with Android Jetpack components",
                  icon: <Code className="w-6 h-6" />
                },
                {
                  step: "03",
                  title: "Testing & QA",
                  description: "Comprehensive testing across Android devices and OS versions",
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  step: "04",
                  title: "Play Store Launch",
                  description: "Google Play Store submission and optimization process",
                  icon: <Rocket className="w-6 h-6" />
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    isDarkMode ? 'bg-gray-800/30' : 'bg-white/50'
                  } border border-gray-200/20 hover:scale-105 transition-all duration-300`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {process.icon}
                  </div>
                  <div className="text-2xl font-bold text-green-500 mb-2">{process.step}</div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <motion.section 
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-emerald-600/20 to-teal-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center p-8 sm:p-12 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-900/40 border-white/10 shadow-2xl shadow-green-500/10' 
              : 'bg-white/40 border-white/20 shadow-2xl shadow-green-500/20'
          }`}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
            >
              Ready to Build Your Android App?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Get started with our expert Android developers and launch your app on Google Play Store with modern Kotlin development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden min-w-[200px]"
                onClick={() => window.location.href = '/meetingform'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Schedule Consultation
                  <motion.div 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 backdrop-blur-sm min-w-[200px] ${
                  isDarkMode 
                    ? 'border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-lg hover:shadow-white/20' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-lg hover:shadow-gray-500/20'
                }`}
                onClick={() => window.location.href = '/portfolio'}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Portfolio
                  <motion.div 
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  >
                    ↗
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Additional Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Play Store Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Kotlin Experts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HireAndroidDeveloper;
