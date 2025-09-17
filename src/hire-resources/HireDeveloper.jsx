import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Code, Globe, Smartphone, Database, Brain, Shield, Search, Filter, MapPin, Clock, DollarSign, Zap, Award, Headphones, Cpu, Target, Monitor, TrendingUp, MessageSquare, Calendar, Briefcase, Trophy, Rocket, Heart, ThumbsUp, Sparkles, MousePointer, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const HireDeveloper = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const { scrollY } = useScroll();
  
  // Reduced parallax transforms for better performance
  const heroY = useTransform(scrollY, [0, 500], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const categories = [
    { id: 'all', name: 'All Developers', icon: <Code className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'iphone', name: 'iPhone', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'android', name: 'Android', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'flutter', name: 'Flutter', icon: <Code className="w-5 h-5" /> },
    { id: 'software', name: 'Software', icon: <Monitor className="w-5 h-5" /> }
  ];

  const developmentServices = [
    {
      id: 1,
      category: "mobile",
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android devices.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      features: ["Native Performance", "Push Notifications", "Offline Functionality", "App Store Optimization"],
      deliverables: ["iOS Applications", "Android Applications", "Cross-platform Apps", "App Store Deployment"],
      timeline: "3-16 weeks",
      startingPrice: "$3,500"
    },
    {
      id: 2,
      category: "iphone",
      title: "iPhone App Development",
      description: "Build native iOS applications with Swift and Objective-C for optimal performance and user experience.",
      technologies: ["Swift", "Objective-C", "Xcode", "iOS SDK", "Core Data", "UIKit"],
      features: ["Native iOS Performance", "App Store Guidelines", "Touch ID/Face ID", "Push Notifications"],
      deliverables: ["Native iOS Apps", "App Store Submission", "iOS Widgets", "Apple Watch Apps"],
      timeline: "3-14 weeks",
      startingPrice: "$4,000"
    },
    {
      id: 3,
      category: "flutter",
      title: "Flutter App Development",
      description: "Create beautiful cross-platform mobile apps with Flutter for both iOS and Android from a single codebase.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "Bloc", "GetX"],
      features: ["Cross-platform", "Hot Reload", "Native Performance", "Custom Widgets"],
      deliverables: ["Cross-platform Apps", "Custom UI Components", "State Management", "App Store Deployment"],
      timeline: "2-12 weeks",
      startingPrice: "$3,000"
    },
    {
      id: 4,
      category: "software",
      title: "Desktop Software Development",
      description: "Develop powerful desktop applications for Windows, macOS, and Linux platforms.",
      technologies: ["Electron", "C#", ".NET", "Java", "Python", "Qt"],
      features: ["Cross-platform Compatibility", "Native System Integration", "File Management", "Database Integration"],
      deliverables: ["Desktop Applications", "System Utilities", "Business Software", "Installation Packages"],
      timeline: "4-18 weeks",
      startingPrice: "$4,500"
    },
    {
      id: 5,
      category: "android",
      title: "Android App Development",
      description: "Build native Android applications using Kotlin and Java for Google Play Store.",
      technologies: ["Kotlin", "Java", "Android Studio", "Android SDK", "Room", "Retrofit"],
      features: ["Material Design", "Google Services", "Background Processing", "Local Storage"],
      deliverables: ["Native Android Apps", "Google Play Submission", "Android Widgets", "Wear OS Apps"],
      timeline: "3-14 weeks",
      startingPrice: "$3,800"
    },
    {
      id: 6,
      category: "mobile",
      title: "React Native Development",
      description: "Build cross-platform mobile apps using React Native for faster development and deployment.",
      technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "Expo", "Metro"],
      features: ["Code Reusability", "Hot Reloading", "Native Modules", "Third-party Integrations"],
      deliverables: ["Cross-platform Apps", "Native Modules", "App Store Deployment", "Performance Optimization"],
      timeline: "2-10 weeks",
      startingPrice: "$2,800"
    },
    {
      id: 7,
      category: "iphone",
      title: "SwiftUI Development",
      description: "Modern iOS app development using SwiftUI for beautiful and responsive user interfaces.",
      technologies: ["SwiftUI", "Swift", "Combine", "Core Data", "CloudKit", "WidgetKit"],
      features: ["Declarative UI", "Live Previews", "Cross-device Compatibility", "Animation Support"],
      deliverables: ["Modern iOS Apps", "Custom UI Components", "Widget Extensions", "macOS Compatibility"],
      timeline: "2-12 weeks",
      startingPrice: "$4,200"
    },
    {
      id: 8,
      category: "android",
      title: "Jetpack Compose Development",
      description: "Modern Android app development using Jetpack Compose for intuitive and performant UIs.",
      technologies: ["Jetpack Compose", "Kotlin", "Material 3", "Navigation", "ViewModel", "Hilt"],
      features: ["Modern UI Toolkit", "Less Code", "Intuitive APIs", "Powerful Tooling"],
      deliverables: ["Modern Android Apps", "Custom Composables", "Material Design 3", "Performance Optimized"],
      timeline: "2-12 weeks",
      startingPrice: "$3,900"
    }
  ];

  const skills = [...new Set(developmentServices.flatMap(service => service.technologies))].sort();

  const filteredServices = developmentServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = !selectedSkill || service.technologies.includes(selectedSkill);
    
    return matchesCategory && matchesSearch && matchesSkill;
  });

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`} style={{ willChange: 'transform' }}>
      
      
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mt-16"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.3))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl opacity-15" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl opacity-15" />
          
          {/* Static Floating Elements - No animation for performance */}
          <div className="absolute top-20 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-10" />
          <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-15" />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
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
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/40 mb-8 backdrop-blur-sm"
            >
              <Trophy className="w-5 h-5 mr-3 text-yellow-400" />
              <span className="text-sm font-semibold">Award-Winning Development Team</span>
              <div className="ml-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hire Elite
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Developers</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl">
                On Demand
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Transform your vision into reality with our handpicked team of senior developers. 
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
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
                className={`text-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800/20 border border-gray-700/50' : 'bg-white/10 border border-white/20'
                }`}
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Category Navigation */}
      <motion.section 
        className="py-8 sticky top-0 z-40 backdrop-blur-lg border-b border-gray-200/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-50/80 shadow-md'
                } border ${
                  activeCategory === category.id
                    ? 'border-transparent'
                    : isDarkMode
                    ? 'border-gray-700/50'
                    : 'border-gray-200/50'
                }`}
              >
                {/* Animated background for active state */}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Icon with animation */}
                <motion.div
                  animate={activeCategory === category.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {category.icon}
                </motion.div>
                
                {/* Text with relative positioning */}
                <span className="relative z-10">{category.name}</span>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? 'bg-gray-800/30' : 'bg-white/50'
                } backdrop-blur-sm border border-gray-200/20 hover:border-gray-300/30 transition-all duration-300 cursor-pointer group`}
              >
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.icon}
                  {stat.number}
                </motion.div>
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-gray-300 transition-colors duration-300`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* Category-Specific Content Sections */}
      {/* Show all detailed sections when 'All Developers' is selected */}
      {activeCategory === 'all' && (
        <>
          {/* iPhone Development Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">iPhone Development Excellence</h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Create stunning iOS applications with native performance and seamless App Store integration
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Native iOS Development</h3>
                  </div>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Expert iPhone app development using Swift and Objective-C for optimal performance and user experience.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Swift & Objective-C Mastery</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert developers proficient in both modern Swift and legacy Objective-C codebases</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">iOS Ecosystem Integration</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Deep integration with Apple services, Core Data, CloudKit, and Apple Watch</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">App Store Optimization</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complete App Store submission process and optimization for maximum visibility</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
                >
                  <h3 className="text-2xl font-bold mb-6">iPhone Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Swift", desc: "Modern iOS language" },
                      { name: "Objective-C", desc: "Legacy iOS support" },
                      { name: "Xcode", desc: "Apple's IDE" },
                      { name: "iOS SDK", desc: "Native frameworks" },
                      { name: "Core Data", desc: "Data persistence" },
                      { name: "UIKit", desc: "User interface" },
                      { name: "CloudKit", desc: "Cloud services" },
                      { name: "TestFlight", desc: "Beta testing" }
                    ].map((tech, index) => (
                      <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                        <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* iOS Development Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">iOS Development Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Smartphone className="w-8 h-8" />,
                      title: "iPhone App Development",
                      description: "Custom iPhone applications built with Swift for optimal performance and user experience",
                      features: ["Swift Programming", "iOS SDK", "App Store Guidelines", "Performance Optimization"],
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <Monitor className="w-8 h-8" />,
                      title: "iPad App Development",
                      description: "Tablet-optimized applications leveraging iPad's unique capabilities and screen real estate",
                      features: ["iPad Interface", "Split View Support", "Apple Pencil Integration", "Multitasking"],
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <Settings className="w-8 h-8" />,
                      title: "Apple Watch Apps",
                      description: "Companion watchOS applications for enhanced user engagement and accessibility",
                      features: ["WatchKit Framework", "Health Integration", "Complications", "Haptic Feedback"],
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: "App Store Optimization",
                      description: "Complete App Store submission, optimization, and marketing for maximum visibility",
                      features: ["ASO Strategy", "App Store Guidelines", "Metadata Optimization", "Review Management"],
                      color: "from-orange-500 to-red-500"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "iOS App Maintenance",
                      description: "Ongoing support, updates, and maintenance for existing iOS applications",
                      features: ["Bug Fixes", "iOS Updates", "Performance Monitoring", "Security Patches"],
                      color: "from-indigo-500 to-purple-500"
                    },
                    {
                      icon: <Database className="w-8 h-8" />,
                      title: "Backend Integration",
                      description: "Seamless integration with APIs, databases, and cloud services for iOS apps",
                      features: ["REST APIs", "Core Data", "CloudKit", "Firebase Integration"],
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

              {/* iOS Development Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8">iOS Development Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Planning & Design",
                      description: "UI/UX design following Apple's Human Interface Guidelines",
                      icon: <MousePointer className="w-6 h-6" />
                    },
                    {
                      step: "02",
                      title: "Swift Development",
                      description: "Clean, efficient Swift code with modern iOS frameworks",
                      icon: <Code className="w-6 h-6" />
                    },
                    {
                      step: "03",
                      title: "Testing & QA",
                      description: "Comprehensive testing on real iOS devices and simulators",
                      icon: <Shield className="w-6 h-6" />
                    },
                    {
                      step: "04",
                      title: "App Store Launch",
                      description: "Complete App Store submission and optimization process",
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
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {process.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-2">{process.step}</div>
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

          {/* Android Development Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Android Development Excellence</h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Build powerful Android applications with Material Design and Google Play Store success
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Native Android Development</h3>
                  </div>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Expert Android app development using Kotlin and Java for Google Play Store success.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Kotlin & Java Expertise</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modern Kotlin development with Java legacy support for comprehensive solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Material Design Implementation</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beautiful, intuitive interfaces following Google's Material Design principles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Google Services Integration</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Firebase, Google Maps, Analytics, and Play Services integration</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
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
                      icon: <Monitor className="w-8 h-8" />,
                      title: "Tablet Optimization",
                      description: "Android tablet applications optimized for larger screens and enhanced functionality",
                      features: ["Tablet UI", "Multi-pane Layouts", "Adaptive Design", "Enhanced Navigation"],
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <Settings className="w-8 h-8" />,
                      title: "Wear OS Apps",
                      description: "Companion Android Wear applications for smartwatches and wearable devices",
                      features: ["Wear OS SDK", "Health Tracking", "Notifications", "Voice Commands"],
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: "Play Store Optimization",
                      description: "Complete Google Play Store submission, optimization, and marketing strategies",
                      features: ["ASO Strategy", "Play Console", "Metadata Optimization", "Review Management"],
                      color: "from-orange-500 to-red-500"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Android App Maintenance",
                      description: "Ongoing support, updates, and maintenance for existing Android applications",
                      features: ["Bug Fixes", "Android Updates", "Performance Monitoring", "Security Patches"],
                      color: "from-indigo-500 to-purple-500"
                    },
                    {
                      icon: <Database className="w-8 h-8" />,
                      title: "Backend Integration",
                      description: "Seamless integration with APIs, databases, and Google services for Android apps",
                      features: ["REST APIs", "Room Database", "Firebase", "Google Services"],
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

          {/* Flutter Development Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Flutter Development Excellence</h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Cross-Platform Excellence</h3>
                  <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Write once, deploy everywhere with Flutter's powerful framework.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                  animate={{ opacity: 1, x: 0 }}
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
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: "Flutter Web Applications",
                      description: "Progressive web applications built with Flutter for web deployment",
                      features: ["Web Deployment", "Responsive Design", "PWA Support", "SEO Optimization"],
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <Monitor className="w-8 h-8" />,
                      title: "Flutter Desktop Apps",
                      description: "Native desktop applications for Windows, macOS, and Linux platforms",
                      features: ["Desktop UI", "File System Access", "Native Integrations", "Multi-platform"],
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: <Settings className="w-8 h-8" />,
                      title: "Custom Widget Development",
                      description: "Reusable custom widgets and UI components for Flutter applications",
                      features: ["Custom Widgets", "Animation Support", "Theme Integration", "Performance Optimized"],
                      color: "from-orange-500 to-red-500"
                    },
                    {
                      icon: <Database className="w-8 h-8" />,
                      title: "State Management Solutions",
                      description: "Robust state management implementation using Provider, Bloc, or GetX",
                      features: ["Provider Pattern", "Bloc Architecture", "GetX Framework", "State Persistence"],
                      color: "from-indigo-500 to-purple-500"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Flutter App Migration",
                      description: "Migration from native iOS/Android or other frameworks to Flutter",
                      features: ["Code Migration", "Feature Parity", "Performance Testing", "Gradual Migration"],
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

          {/* Software Development Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Desktop Software Development</h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Create powerful desktop applications for Windows, macOS, and Linux with modern technologies and frameworks
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Cross-Platform Desktop Apps",
                    icon: <Monitor className="w-8 h-8" />,
                    description: "Build once, run everywhere with Electron, .NET MAUI, or Qt frameworks",
                    technologies: ["Electron", "React", "Node.js", "TypeScript"],
                    features: ["Native OS Integration", "Auto-Updates", "Offline Capability", "System Tray Support"]
                  },
                  {
                    title: "Enterprise Software Solutions",
                    icon: <Briefcase className="w-8 h-8" />,
                    description: "Scalable business applications with robust architecture and security",
                    technologies: ["C#", ".NET", "WPF", "SQL Server"],
                    features: ["Role-Based Access", "Data Analytics", "Reporting Tools", "API Integration"]
                  },
                  {
                    title: "System Utilities & Tools",
                    icon: <Cpu className="w-8 h-8" />,
                    description: "Custom utilities and tools to streamline workflows and automate tasks",
                    technologies: ["Python", "C++", "Java", "Qt"],
                    features: ["File Processing", "System Monitoring", "Automation Scripts", "Performance Optimization"]
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-gray-800/30 border border-gray-700' 
                        : 'bg-white/50 border border-gray-200 shadow-md'
                    } backdrop-blur-sm`}
                  >
                    <div className="text-blue-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-2 py-1 rounded-md text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
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

              {/* Desktop Development Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Desktop Development Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Monitor className="w-8 h-8" />,
                      title: "Windows Applications",
                      description: "Native Windows desktop applications using .NET, WPF, and modern Windows APIs",
                      features: ["WPF Development", "Windows APIs", "UWP Support", "Windows Store"],
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <Settings className="w-8 h-8" />,
                      title: "macOS Applications",
                      description: "Native macOS applications using Swift, Objective-C, and macOS frameworks",
                      features: ["Swift Development", "Cocoa Framework", "App Store Ready", "macOS Integration"],
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <Cpu className="w-8 h-8" />,
                      title: "Linux Applications",
                      description: "Cross-platform Linux applications using Qt, GTK, and modern Linux technologies",
                      features: ["Qt Framework", "GTK Development", "Package Management", "Distribution Ready"],
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: <Globe className="w-8 h-8" />,
                      title: "Electron Applications",
                      description: "Cross-platform desktop apps using web technologies with native OS integration",
                      features: ["Web Technologies", "Cross-platform", "Native APIs", "Auto-updates"],
                      color: "from-orange-500 to-red-500"
                    },
                    {
                      icon: <Database className="w-8 h-8" />,
                      title: "Enterprise Desktop Solutions",
                      description: "Large-scale enterprise desktop applications with advanced features and security",
                      features: ["Enterprise Security", "Database Integration", "Scalable Architecture", "User Management"],
                      color: "from-indigo-500 to-purple-500"
                    },
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Legacy System Modernization",
                      description: "Modernize and migrate legacy desktop applications to current technologies",
                      features: ["Legacy Migration", "Technology Upgrade", "Feature Enhancement", "Performance Improvement"],
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

              {/* Desktop Development Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Desktop Development Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Requirements Analysis",
                      description: "Understanding desktop-specific requirements and platform constraints",
                      icon: <Search className="w-6 h-6" />
                    },
                    {
                      step: "02",
                      title: "Architecture Design",
                      description: "Designing scalable desktop architecture with proper frameworks",
                      icon: <Settings className="w-6 h-6" />
                    },
                    {
                      step: "03",
                      title: "Development & Testing",
                      description: "Building and testing across multiple desktop platforms",
                      icon: <Code className="w-6 h-6" />
                    },
                    {
                      step: "04",
                      title: "Deployment & Distribution",
                      description: "Package creation and distribution across desktop platforms",
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
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {process.icon}
                      </div>
                      <div className="text-2xl font-bold text-indigo-500 mb-2">{process.step}</div>
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

          {/* Mobile Development Overview Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Complete Mobile Development Solutions
                </h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  From concept to deployment, we provide end-to-end mobile development services across all platforms
                </p>
              </motion.div>

              {/* Mobile Development Services Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: "Native iOS Development",
                    description: "Build high-performance iOS apps using Swift and Objective-C with seamless App Store integration",
                    features: ["Swift Programming", "App Store Optimization", "iOS SDK Integration", "Apple Watch Apps"],
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: "Native Android Development", 
                    description: "Create powerful Android applications using Kotlin and Java for Google Play Store success",
                    features: ["Kotlin Development", "Material Design", "Google Services", "Play Store Publishing"],
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Cross-Platform Development",
                    description: "Develop once, deploy everywhere with React Native and Flutter frameworks",
                    features: ["React Native", "Flutter Development", "Code Reusability", "Faster Time-to-Market"],
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Progressive Web Apps",
                    description: "Build web applications that work like native mobile apps with offline capabilities",
                    features: ["PWA Development", "Offline Functionality", "Push Notifications", "App-like Experience"],
                    color: "from-orange-500 to-red-500"
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    title: "Backend & API Development",
                    description: "Robust backend solutions with secure APIs, databases, and cloud integration",
                    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"],
                    color: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "App Maintenance & Support",
                    description: "Ongoing support, updates, and maintenance to keep your apps running smoothly",
                    features: ["Bug Fixes", "Performance Optimization", "Security Updates", "Feature Enhancements"],
                    color: "from-teal-500 to-cyan-500"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className={`p-8 rounded-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800/30 border border-gray-700' 
                        : 'bg-white/50 border border-gray-200 shadow-md'
                    } backdrop-blur-sm cursor-pointer group`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
                      <ul className="space-y-2">
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
              </motion.div>

              {/* Mobile Development Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Mobile Development Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Planning",
                      description: "Understanding your requirements, target audience, and project goals",
                      icon: <Search className="w-6 h-6" />
                    },
                    {
                      step: "02", 
                      title: "Design & Prototyping",
                      description: "Creating wireframes, UI/UX designs, and interactive prototypes",
                      icon: <MousePointer className="w-6 h-6" />
                    },
                    {
                      step: "03",
                      title: "Development",
                      description: "Building your app with clean code, best practices, and regular updates",
                      icon: <Code className="w-6 h-6" />
                    },
                    {
                      step: "04",
                      title: "Testing & QA",
                      description: "Comprehensive testing across devices, platforms, and user scenarios",
                      icon: <Shield className="w-6 h-6" />
                    },
                    {
                      step: "05",
                      title: "Launch & Support",
                      description: "App store deployment, marketing support, and ongoing maintenance",
                      icon: <Rocket className="w-6 h-6" />
                    }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`text-center p-6 rounded-xl ${
                        isDarkMode ? 'bg-gray-800/20' : 'bg-gray-50/50'
                      } hover:scale-105 transition-all duration-300`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                        {process.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-2">{process.step}</div>
                      <h4 className="font-semibold mb-2">{process.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {process.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Our Mobile Development Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Our Mobile Development Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Award className="w-8 h-8" />,
                      title: "Expert Team",
                      description: "Skilled developers with 5+ years of mobile development experience"
                    },
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: "Fast Delivery",
                      description: "Agile development process ensuring quick turnaround times"
                    },
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: "Quality Assurance",
                      description: "Rigorous testing and quality control for bug-free applications"
                    },
                    {
                      icon: <Headphones className="w-8 h-8" />,
                      title: "24/7 Support",
                      description: "Round-the-clock support and maintenance services"
                    }
                  ].map((benefit, index) => (
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
                      <div className="text-blue-500 mb-4 flex justify-center">
                        {benefit.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {activeCategory === 'iphone' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">BUILD A BIG HIT FOR YOUR APP WITH OUR iOS APP DEVELOPERS</h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Create stunning iOS applications with native performance and seamless App Store integration
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Calendar className="w-12 h-12" />,
                  title: "Swift & Objective-C Masters",
                  description: "Expert iOS developers proficient in both modern Swift 5.0+ and legacy Objective-C for seamless app migration and development."
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "App Store Success", 
                  description: "Proven expertise in App Store guidelines, review processes, and optimization strategies for maximum app visibility and downloads."
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "iOS Ecosystem Integration",
                  description: "Deep integration with Apple services including iCloud, Core Data, HealthKit, ARKit, and seamless Apple Watch compatibility."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Performance & Security",
                  description: "Advanced iOS security implementation with Touch ID, Face ID, Keychain services, and memory-optimized performance."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                      : 'bg-white border-gray-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                      isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Native iOS Development</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Expert iPhone app development using Swift and Objective-C for optimal performance and user experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Swift & Objective-C Mastery</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert developers proficient in both modern Swift and legacy Objective-C codebases</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">iOS Ecosystem Integration</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Deep integration with Apple services, Core Data, CloudKit, and Apple Watch</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">App Store Optimization</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complete App Store submission process and optimization for maximum visibility</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <h3 className="text-2xl font-bold mb-6">iPhone Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Swift", desc: "Modern iOS language" },
                    { name: "Objective-C", desc: "Legacy iOS support" },
                    { name: "Xcode", desc: "Apple's IDE" },
                    { name: "iOS SDK", desc: "Native frameworks" },
                    { name: "Core Data", desc: "Data persistence" },
                    { name: "UIKit", desc: "User interface" },
                    { name: "CloudKit", desc: "Cloud services" },
                    { name: "TestFlight", desc: "Beta testing" }
                  ].map((tech, index) => (
                    <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                      <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'android' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">BUILD A BIG HIT FOR YOUR APP WITH OUR ANDROID APP DEVELOPERS</h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Build powerful Android applications with Material Design and Google Play Store success
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Kotlin & Java Excellence",
                  description: "Modern Android development using Kotlin-first approach with Java interoperability for robust, scalable mobile applications."
                },
                {
                  icon: <Cpu className="w-12 h-12" />,
                  title: "Material Design 3", 
                  description: "Beautiful, adaptive UIs following Google's latest Material Design 3 guidelines with dynamic theming and accessibility features."
                },
                {
                  icon: <Briefcase className="w-12 h-12" />,
                  title: "Google Play Optimization",
                  description: "Expert Play Store deployment, ASO strategies, and Google Play Console analytics for maximum app discoverability."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Android Architecture",
                  description: "MVVM pattern implementation with Jetpack Compose, Room database, and modern Android architecture components."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-green-500/50' 
                      : 'bg-white border-gray-200 hover:border-green-500/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                      isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Native Android Development</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Expert Android app development using Kotlin and Java for Google Play Store success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Kotlin & Java Expertise</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modern Kotlin development with Java legacy support for comprehensive solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Material Design Implementation</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beautiful, intuitive interfaces following Google's Material Design principles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Google Services Integration</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Firebase, Google Maps, Analytics, and Play Services integration</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
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
          </div>
        </section>
      )}

      {activeCategory === 'flutter' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">BUILD A BIG HIT FOR YOUR APP WITH OUR FLUTTER APP DEVELOPERS</h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Trophy className="w-12 h-12" />,
                  title: "Single Codebase Mastery",
                  description: "Expert Flutter developers creating apps for iOS, Android, web, and desktop from one unified codebase using Dart language."
                },
                {
                  icon: <Code className="w-12 h-12" />,
                  title: "Custom Widget Development", 
                  description: "Advanced custom widget creation, state management with Bloc/Provider, and pixel-perfect UI implementations matching any design."
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Hot Reload Efficiency",
                  description: "Rapid development cycles with Flutter's hot reload, enabling real-time UI changes and faster iteration for complex applications."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Native Performance",
                  description: "60fps performance with Flutter's compiled-to-native approach, ensuring smooth animations and responsive user experiences."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
                      : 'bg-white border-gray-200 hover:border-purple-500/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                      isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6">Cross-Platform Excellence</h3>
                <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Write once, deploy everywhere with Flutter's powerful framework.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                animate={{ opacity: 1, x: 0 }}
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
          </div>
        </section>
      )}

      {activeCategory === 'software' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">BUILD A BIG HIT FOR YOUR APP WITH OUR SOFTWARE DEVELOPERS</h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Create powerful desktop applications for Windows, macOS, and Linux with modern technologies and frameworks
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Cross-Platform Desktop",
                  description: "Expert desktop application development for Windows, macOS, and Linux using Electron, .NET, Qt, and native frameworks."
                },
                {
                  icon: <Settings className="w-12 h-12" />,
                  title: "Enterprise Solutions", 
                  description: "Scalable business software with database integration, API connectivity, automated workflows, and enterprise-grade security."
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "System Integration",
                  description: "Seamless integration with existing systems, third-party APIs, cloud services, and legacy software modernization."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Performance Optimization",
                  description: "High-performance applications with efficient memory management, multi-threading, and optimized algorithms for complex operations."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-orange-500/50' 
                      : 'bg-white border-gray-200 hover:border-orange-500/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                      isDarkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cross-Platform Desktop Apps",
                  icon: <Monitor className="w-8 h-8" />,
                  description: "Build once, run everywhere with Electron, .NET MAUI, or Qt frameworks",
                  technologies: ["Electron", "React", "Node.js", "TypeScript"],
                  features: ["Native OS Integration", "Auto-Updates", "Offline Capability", "System Tray Support"]
                },
                {
                  title: "Enterprise Software Solutions",
                  icon: <Briefcase className="w-8 h-8" />,
                  description: "Scalable business applications with robust architecture and security",
                  technologies: ["C#", ".NET", "WPF", "SQL Server"],
                  features: ["Role-Based Access", "Data Analytics", "Reporting Tools", "API Integration"]
                },
                {
                  title: "System Utilities & Tools",
                  icon: <Cpu className="w-8 h-8" />,
                  description: "Custom utilities and tools to streamline workflows and automate tasks",
                  technologies: ["Python", "C++", "Java", "Qt"],
                  features: ["File Processing", "System Monitoring", "Automation Scripts", "Performance Optimization"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/30 border border-gray-700' 
                      : 'bg-white/50 border border-gray-200 shadow-md'
                  } backdrop-blur-sm`}
                >
                  <div className="text-blue-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-2 py-1 rounded-md text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
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
          </div>
        </section>
      )}

      {activeCategory === 'mobile' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                BUILD A BIG HIT FOR YOUR APP WITH OUR MOBILE DEVELOPERS
              </h2>
              <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Multi-Platform Strategy",
                  description: "Comprehensive mobile solutions covering native iOS, Android, and cross-platform frameworks for maximum market reach."
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Rapid Prototyping", 
                  description: "Fast MVP development and iterative design processes to validate concepts and accelerate time-to-market for mobile products."
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "App Store Success",
                  description: "End-to-end mobile app lifecycle management from development to deployment, marketing, and post-launch optimization."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Mobile-First Design",
                  description: "User-centric mobile experiences with responsive design, offline capabilities, and performance optimization for all devices."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50' 
                      : 'bg-white border-gray-200 hover:border-cyan-500/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                      isDarkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* iPhone Development */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">iPhone Development</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Create stunning iOS applications with native performance and seamless App Store integration.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Swift & Objective-C Mastery</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert developers proficient in both modern Swift and legacy Objective-C codebases</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">iOS Ecosystem Integration</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Deep integration with Apple services, Core Data, CloudKit, and Apple Watch</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">App Store Optimization</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complete App Store submission process and optimization for maximum visibility</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Android Development */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Android Development</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Build powerful Android applications with Material Design and Google Play Store success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Kotlin & Java Expertise</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modern Kotlin development with Java legacy support for comprehensive solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Material Design Implementation</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beautiful, intuitive interfaces following Google's Material Design principles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Google Services Integration</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Firebase, Google Maps, Analytics, and Play Services integration</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Flutter & Cross-Platform Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Mobile Development Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Cross-Platform Solutions</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Comprehensive mobile development services covering all major platforms and frameworks.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Native & Cross-Platform</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>iOS, Android, Flutter, React Native development expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">App Store Optimization</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complete submission and optimization for maximum visibility</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Performance & Security */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Performance & Security</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  High-performance mobile applications with enterprise-grade security.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Optimized Performance</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>60fps animations, fast loading, efficient memory usage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Security Best Practices</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Data encryption, secure authentication, compliance standards</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* UI/UX Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30 border border-gray-700' : 'bg-white/50 border border-gray-200'} backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">UI/UX Excellence</h3>
                </div>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Beautiful, intuitive interfaces that users love and engage with.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Modern Design Systems</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Material Design, Human Interface Guidelines compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">User-Centered Design</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Research-driven interfaces optimized for user engagement</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Development Team?
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We deliver exceptional results through our proven development process and expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Our developers have 5+ years of experience and proven track records in their respective technologies."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "We follow agile methodologies to deliver your project on time without compromising on quality."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous testing and code review processes ensure bug-free, secure, and scalable solutions."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance to keep your applications running smoothly."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Latest Technologies",
                description: "We stay updated with the latest frameworks and tools to build modern, future-proof applications."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "100% Satisfaction",
                description: "We work closely with you until you're completely satisfied with the final product."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/30 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200 shadow-md'
                } backdrop-blur-sm`}
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A proven methodology that ensures successful project delivery from concept to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, define project scope, and create a detailed development roadmap."
              },
              {
                step: "02", 
                title: "Design & Architecture",
                description: "Our team designs the user interface and system architecture for optimal performance and scalability."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing ensures high-quality code and functionality."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We deploy your application and provide ongoing support and maintenance services."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Everything you need to know about hiring our developers
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do you ensure code quality?",
                answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and comprehensive documentation. Every project undergoes rigorous quality assurance before delivery."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. Simple mobile apps typically take 2-12 weeks, while complex enterprise solutions may take 12-24 weeks. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you provide post-launch support?",
                answer: "Yes! We offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and technical maintenance. Our support packages are tailored to your specific needs."
              },
              {
                question: "Can I hire developers for long-term projects?",
                answer: "Absolutely! We offer flexible engagement models including dedicated teams for long-term projects, staff augmentation, and project-based development. We can scale resources based on your requirements."
              },
              {
                question: "What technologies do your developers specialize in?",
                answer: "Our developers specialize in modern technologies including React, Flutter, Swift, Kotlin, Node.js, Python, and more. We stay updated with the latest frameworks and tools to deliver cutting-edge solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/30 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200 shadow-md'
                } backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-blue-500" />
                  {faq.question}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed pl-8`}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative p-8 rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 border border-blue-800' 
                : 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-blue-200'
            } backdrop-blur-sm`}
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                  <Rocket className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium">Ready to Transform Your Ideas?</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h2>
                
                <p className={`text-lg mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Join hundreds of successful companies who have transformed their business with our expert developers. 
                  Your next breakthrough is just one conversation away.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contactus')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-xl font-semibold text-base shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Rocket className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/schedule-meeting')}
                  className={`px-8 py-3 rounded-xl font-semibold text-base border-2 transition-all duration-300 flex items-center justify-center group ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                  } backdrop-blur-sm`}
                >
                  <Calendar className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Free Consultation
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center space-x-8 text-sm"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>No Hidden Costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>24/7 Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HireDeveloper;
