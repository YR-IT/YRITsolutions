import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Code, Globe, Smartphone, Database, Shield, Clock, DollarSign, Award, Headphones, Target, Trophy, Heart, ThumbsUp, Sparkles, MousePointer, Settings, Rocket, Zap, Cpu, Monitor, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const HireFlutterDeveloper = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  
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
            className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-blue-600/30"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.3))",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-pink-500/8 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/5 rounded-full blur-2xl opacity-15" />
          <div className="absolute bottom-1/3 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500/5 rounded-full blur-3xl opacity-15" />
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
              className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40 mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
              <span className="text-xs sm:text-sm font-semibold">Flutter Development Experts</span>
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Hire Expert
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Flutter Developers</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
                Cross-Platform Masters
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. 
              <span className="text-purple-400 font-semibold"> One code</span>, 
              <span className="text-pink-400 font-semibold"> multiple platforms</span>, and 
              <span className="text-blue-400 font-semibold"> native performance</span>.
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
              { number: "80+", label: "Flutter Apps Built", icon: <Code className="w-8 h-8" />, color: "text-purple-400" },
              { number: "12+", label: "Flutter Developers", icon: <Users className="w-8 h-8" />, color: "text-pink-400" },
              { number: "95%", label: "Cross-Platform Success", icon: <Trophy className="w-8 h-8" />, color: "text-blue-400" },
              { number: "24/7", label: "Development Support", icon: <Headphones className="w-8 h-8" />, color: "text-purple-500" }
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

      {/* Flutter Development Excellence Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Flutter Development Excellence</h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Cross-Platform Excellence</h3>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Write once, deploy everywhere with Flutter's powerful framework.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Single Codebase, Multiple Platforms</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Our Flutter expertise ensures your app works seamlessly across iOS, Android, web, and desktop platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Hot Reload & Fast Development</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Rapid prototyping and development with Flutter's hot reload feature for faster iteration cycles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Native Performance</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Achieve 60fps performance with Flutter's compiled-to-native code and smooth animations.
                    </p>
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
              <h3 className="text-2xl font-bold mb-6">Flutter Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Dart Language", desc: "Google's optimized language" },
                  { name: "Material Design", desc: "Beautiful UI components" },
                  { name: "Cupertino", desc: "iOS-style widgets" },
                  { name: "Firebase", desc: "Backend services" },
                  { name: "Provider/Bloc", desc: "State management" },
                  { name: "GetX", desc: "Route & dependency injection" },
                  { name: "Dio/HTTP", desc: "Network requests" },
                  { name: "Hive/SQLite", desc: "Local storage" }
                ].map((tech, index) => (
                  <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                    <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Flutter Development Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Flutter Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Cross-Platform Mobile Apps",
                  description: "Single codebase Flutter applications for both iOS and Android platforms",
                  features: ["Dart Programming", "Material Design", "Cupertino Widgets", "Native Performance"],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Flutter Web Applications",
                  description: "Progressive web applications built with Flutter for web deployment",
                  features: ["Web Deployment", "Responsive Design", "PWA Support", "SEO Optimization"],
                  color: "from-pink-500 to-blue-500"
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Flutter Desktop Apps",
                  description: "Native desktop applications for Windows, macOS, and Linux platforms",
                  features: ["Desktop UI", "File System Access", "Native Integrations", "Multi-platform"],
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Custom Widget Development",
                  description: "Reusable custom widgets and UI components for Flutter applications",
                  features: ["Custom Widgets", "Animation Support", "Theme Integration", "Performance Optimized"],
                  color: "from-purple-600 to-pink-600"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "State Management Solutions",
                  description: "Robust state management implementation using Provider, Bloc, or GetX",
                  features: ["Provider Pattern", "Bloc Architecture", "GetX Framework", "State Persistence"],
                  color: "from-pink-600 to-blue-600"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Flutter App Migration",
                  description: "Migration from native iOS/Android or other frameworks to Flutter",
                  features: ["Code Migration", "Feature Parity", "Performance Testing", "Gradual Migration"],
                  color: "from-blue-600 to-purple-600"
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

          {/* Flutter Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Flutter Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Architecture Planning",
                  description: "Design scalable Flutter architecture with proper state management",
                  icon: <MousePointer className="w-6 h-6" />
                },
                {
                  step: "02",
                  title: "Dart Development",
                  description: "Clean Dart code with Flutter best practices and widget optimization",
                  icon: <Code className="w-6 h-6" />
                },
                {
                  step: "03",
                  title: "Multi-Platform Testing",
                  description: "Comprehensive testing across iOS, Android, web, and desktop",
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  step: "04",
                  title: "Cross-Platform Deployment",
                  description: "Simultaneous deployment to multiple platforms and app stores",
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {process.icon}
                  </div>
                  <div className="text-2xl font-bold text-purple-500 mb-2">{process.step}</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-fuchsia-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center p-8 sm:p-12 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-900/40 border-white/10 shadow-2xl shadow-purple-500/10' 
              : 'bg-white/40 border-white/20 shadow-2xl shadow-purple-500/20'
          }`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border mb-4 ${
                  isDarkMode ? 'border-purple-400/30' : 'border-purple-500/30'
                }`}>
                  <Rocket className={`w-4 h-4 mr-2 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
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
                  Join hundreds of successful companies who have transformed their business with our expert Flutter developers. 
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
                  onClick={(event) => {
                    if (isNavigating) return; 
                    setIsNavigating(true);
                    
                    const button = event.target.closest('button');
                    button.style.transform = 'scale(0.95)';
                    
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    setTimeout(() => {
                      navigate('/contactus');
                      setIsNavigating(false);
                    }, 400);
                  }}
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
                  onClick={(event) => {
                    if (isNavigating) return; 
                    setIsNavigating(true);
                    
                    const button = event.target.closest('button');
                    button.style.transform = 'scale(0.95)';
                    
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    setTimeout(() => {
                      navigate('/meetingform');
                      setIsNavigating(false);
                    }, 400);
                  }}
                >
                  <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Free Consultation
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm pt-8 sm:pt-12 md:pt-16 px-4"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Cross-Platform</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Mobile Experts</span>
                </div>
              </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HireFlutterDeveloper;
