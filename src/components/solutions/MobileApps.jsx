import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Smartphone, 
  Globe, 
  Monitor, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Layers,
  Cpu,
  BarChart3,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign,
  MessageSquare,
  Palette,
  Settings,
  TrendingUp,
  ShoppingCart,
  BookOpen,
  Heart,
  Briefcase,
  Building,
  Calendar,
  Camera,
  Coffee,
  Gamepad2,
  MapPin,
  Music,
  Truck,
  Download,
  Wifi,
  Battery,
  Bell
} from 'lucide-react';

const MobileApps = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isDarkMode, theme } = useTheme();

  const mobileApplications = [
    {
      id: 1,
      category: 'ecommerce',
      title: "Multi-Vendor Shopping App",
      description: "Feature-rich mobile shopping experience with AR try-on, voice search, and AI-powered recommendations for seamless mobile commerce.",
      image: "/images/ecommerce.jpeg",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "AR Kit"],
      features: ["AR Try-On", "Voice Search", "Push Notifications", "Offline Mode", "Social Login", "Wishlist Sync"],
      price: "₹2,50,000 - ₹6,00,000",
      timeline: "10-14 weeks",
      rating: 4.9,
      projects: 35,
      caseStudy: "Boosted mobile sales by 280% with AR integration"
    },
    {
      id: 2,
      category: 'food',
      title: "Smart Food Delivery App",
      description: "Complete food delivery ecosystem with real-time tracking, smart recommendations, and integrated payment solutions for restaurants and customers.",
      image: "/images/Friends Baker - Artisan Bakery.png",
      technologies: ["Flutter", "Firebase", "Google Maps", "Razorpay", "FCM"],
      features: ["Live Tracking", "Smart Recommendations", "Multiple Payments", "Order History", "Rating System", "Loyalty Points"],
      price: "₹2,00,000 - ₹4,50,000",
      timeline: "8-12 weeks",
      rating: 4.8,
      projects: 42,
      caseStudy: "Reduced delivery time by 45% with smart routing"
    },
    {
      id: 3,
      category: 'education',
      title: "Interactive Learning App",
      description: "Comprehensive educational mobile platform with gamified learning, progress tracking, and offline content for enhanced student engagement.",
      image: "/images/BPRPVTITI - Educational Institute.png",
      technologies: ["React Native", "GraphQL", "SQLite", "WebRTC", "ML Kit"],
      features: ["Gamified Learning", "Offline Content", "Progress Analytics", "Video Lessons", "Interactive Quizzes", "Parent Dashboard"],
      price: "₹3,00,000 - ₹5,50,000",
      timeline: "12-16 weeks",
      rating: 4.7,
      projects: 28,
      caseStudy: "Improved learning retention by 65% through gamification"
    },
    {
      id: 4,
      category: 'healthcare',
      title: "Telemedicine Mobile App",
      description: "HIPAA-compliant healthcare app with video consultations, health monitoring, prescription management, and emergency features.",
      image: "/images/Cloud-Computing.jpeg",
      technologies: ["Flutter", "Node.js", "PostgreSQL", "WebRTC", "HL7 FHIR"],
      features: ["Video Consultations", "Health Monitoring", "Prescription Tracker", "Emergency SOS", "Health Records", "Appointment Booking"],
      price: "₹4,50,000 - ₹8,50,000",
      timeline: "14-18 weeks",
      rating: 4.9,
      projects: 22,
      caseStudy: "Connected 10,000+ patients with doctors remotely"
    },
    {
      id: 5,
      category: 'fintech',
      title: "Digital Wallet & Banking",
      description: "Secure mobile banking solution with UPI integration, investment tracking, expense management, and advanced security features.",
      image: "/images/digitalmarketing.webp",
      technologies: ["React Native", "Spring Boot", "PostgreSQL", "UPI SDK", "Biometric"],
      features: ["UPI Payments", "Investment Tracking", "Expense Analytics", "Biometric Security", "QR Payments", "Bill Reminders"],
      price: "₹5,00,000 - ₹10,00,000",
      timeline: "16-20 weeks",
      rating: 4.8,
      projects: 18,
      caseStudy: "Processed ₹50+ crores in secure transactions"
    },
    {
      id: 6,
      category: 'social',
      title: "Social Media & Community",
      description: "Engaging social platform with real-time messaging, content sharing, live streaming, and community building features for modern connectivity.",
      image: "/images/img14.jpg",
      technologies: ["Flutter", "Firebase", "WebRTC", "Cloud Storage", "FCM"],
      features: ["Real-time Chat", "Live Streaming", "Content Sharing", "Community Groups", "Story Features", "Video Calls"],
      price: "₹3,50,000 - ₹7,00,000",
      timeline: "12-16 weeks",
      rating: 4.6,
      projects: 25,
      caseStudy: "Built communities with 100K+ active users"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Apps', icon: Smartphone },
    { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart },
    { id: 'food', name: 'Food & Delivery', icon: Coffee },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'fintech', name: 'FinTech', icon: DollarSign },
    { id: 'social', name: 'Social Media', icon: Users }
  ];

  const filteredApps = activeCategory === 'all' 
    ? mobileApplications 
    : mobileApplications.filter(app => app.category === activeCategory);

  // Theme-aware styles
  const themeStyles = {
    background: isDarkMode ? 'bg-black' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100/80',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    cardHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/80',
    gradient: isDarkMode ? 'from-purple-600/20 to-pink-600/20' : 'from-purple-100/50 to-pink-100/50',
    particleColor: isDarkMode ? 'bg-purple-400/30' : 'bg-purple-600/60'
  };

  return (
    <div className={`min-h-screen ${themeStyles.background} relative overflow-hidden transition-colors duration-500`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${themeStyles.particleColor} rounded-full`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative py-24 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${themeStyles.gradient}`}></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className={`text-6xl md:text-8xl font-bold ${themeStyles.text} mb-8`}
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 100,
              damping: 10
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
            >
              Mobile
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Applications
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl ${themeStyles.textSecondary} mb-12 max-w-4xl mx-auto`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From AI-powered shopping apps to telemedicine platforms - we create mobile experiences that users love and businesses depend on.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-purple-300" : "text-purple-600"}
            >
              Join 50+ businesses who've revolutionized their mobile presence with our innovative solutions.
            </motion.span>
          </motion.p>
        </div>
      </motion.section>


      {/* Mobile App Categories Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className={`text-5xl font-bold ${themeStyles.text} mb-6`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
              >
                Mobile App Solutions
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Native and cross-platform mobile applications designed to deliver exceptional user experiences across all devices.
            </motion.p>
          </motion.div>

          {/* Mobile App Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: ShoppingCart,
                title: "E-Commerce Mobile Apps",
                description: "Feature-rich shopping apps with AR integration, voice search, push notifications, and seamless checkout experiences that drive mobile commerce success.",
                color: "purple",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: Heart,
                title: "Healthcare & Wellness",
                description: "HIPAA-compliant health apps with telemedicine, fitness tracking, medication reminders, and secure patient data management systems.",
                color: "red",
                gradient: "from-red-500/20 to-rose-500/20"
              },
              {
                icon: DollarSign,
                title: "FinTech Solutions",
                description: "Secure banking and payment apps with UPI integration, investment tracking, expense management, and advanced biometric security features.",
                color: "green",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: BookOpen,
                title: "Educational Platforms",
                description: "Interactive learning apps with gamification, offline content, progress tracking, and personalized learning experiences for all age groups.",
                color: "blue",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Coffee,
                title: "Food & Delivery",
                description: "Complete food delivery ecosystems with real-time tracking, smart recommendations, loyalty programs, and integrated payment solutions.",
                color: "orange",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                icon: Users,
                title: "Social & Community",
                description: "Engaging social platforms with real-time messaging, content sharing, live streaming, and community building features for modern connectivity.",
                color: "indigo",
                gradient: "from-indigo-500/20 to-purple-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-8 hover:border-${item.color}-500 transition-all duration-500 group relative overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  rotateY: 5,
                  boxShadow: `0 25px 50px rgba(${item.color === 'purple' ? '168, 85, 247' : item.color === 'red' ? '239, 68, 68' : item.color === 'green' ? '34, 197, 94' : item.color === 'blue' ? '59, 130, 246' : item.color === 'orange' ? '249, 115, 22' : '99, 102, 241'}, 0.4)`
                }}
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-12 h-12 text-${item.color}-400 mb-6 group-hover:text-${item.color}-300 transition-colors duration-300`} />
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-2xl font-bold ${themeStyles.text} mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDarkMode ? 'group-hover:from-white group-hover:to-gray-300' : 'group-hover:from-gray-900 group-hover:to-gray-600'} transition-all duration-300`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`${themeStyles.textSecondary} leading-relaxed ${isDarkMode ? 'group-hover:text-gray-200' : 'group-hover:text-gray-800'} transition-colors duration-300`}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Technology Stack */}
          <motion.div 
            className={`${themeStyles.cardBg} backdrop-blur-sm border ${themeStyles.cardBorder} rounded-2xl p-8 mb-16 relative overflow-hidden group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(168, 85, 247, 0.2)"
            }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-8 text-center relative z-10`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
            >
              Mobile Development Stack
            </motion.h3>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: Smartphone, title: "Native iOS", color: "blue", techs: ["Swift", "SwiftUI", "Objective-C", "Xcode"] },
                { icon: Monitor, title: "Native Android", color: "green", techs: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"] },
                { icon: Globe, title: "Cross-Platform", color: "purple", techs: ["React Native", "Flutter", "Xamarin", "Ionic"] },
                { icon: Cloud, title: "Backend & Cloud", color: "cyan", techs: ["Firebase", "AWS Mobile", "Node.js", "GraphQL"] }
              ].map((stack, index) => (
                <motion.div 
                  key={index}
                  className="text-center group/stack"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <stack.icon className={`w-12 h-12 text-${stack.color}-400 mx-auto mb-4 group-hover/stack:text-${stack.color}-300 transition-all duration-300`} />
                  </motion.div>
                  <motion.h4 
                    className={`text-lg font-semibold ${themeStyles.text} mb-3 group-hover/stack:text-transparent group-hover/stack:bg-clip-text group-hover/stack:bg-gradient-to-r ${isDarkMode ? 'group-hover/stack:from-white group-hover/stack:to-gray-300' : 'group-hover/stack:from-gray-900 group-hover/stack:to-gray-600'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stack.title}
                  </motion.h4>
                  <div className={`space-y-2 text-sm ${themeStyles.textSecondary}`}>
                    {stack.techs.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex}
                        className={`${isDarkMode ? 'group-hover/stack:text-gray-200' : 'group-hover/stack:text-gray-800'} transition-colors duration-300`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          color: isDarkMode ? "#A855F7" : "#7C3AED",
                          x: 5
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Development Process */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-8`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
            >
              Mobile App Development Process
            </motion.h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Strategy", desc: "Market research & app strategy", icon: Target, color: "purple" },
                { step: "02", title: "Design", desc: "UI/UX design & prototyping", icon: Palette, color: "pink" },
                { step: "03", title: "Development", desc: "Native & cross-platform coding", icon: Smartphone, color: "blue" },
                { step: "04", title: "Testing", desc: "Device testing & optimization", icon: Shield, color: "green" },
                { step: "05", title: "Launch", desc: "App store deployment & support", icon: Rocket, color: "orange" }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group/process relative"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.05
                  }}
                  viewport={{ once: true }}
                >
                  {/* Connecting line animation */}
                  {index < 4 && (
                    <motion.div
                      className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 hidden md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  
                  <motion.div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover/process:shadow-2xl group-hover/process:shadow-purple-500/50"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -15, 15, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <process.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className={`text-2xl font-bold ${isDarkMode ? 'text-purple-400 group-hover/process:text-purple-300' : 'text-purple-600 group-hover/process:text-purple-500'} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2,
                      textShadow: "0 0 15px rgba(168, 85, 247, 0.8)"
                    }}
                  >
                    {process.step}
                  </motion.div>
                  
                  <motion.h4 
                    className={`text-lg font-semibold ${themeStyles.text} mb-2 group-hover/process:text-transparent group-hover/process:bg-clip-text group-hover/process:bg-gradient-to-r group-hover/process:from-purple-400 group-hover/process:to-pink-400`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {process.title}
                  </motion.h4>
                  
                  <motion.p 
                    className={`${themeStyles.textSecondary} text-sm ${isDarkMode ? 'group-hover/process:text-gray-200' : 'group-hover/process:text-gray-800'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      color: isDarkMode ? "#E5E7EB" : "#374151"
                    }}
                  >
                    {process.desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Mobile Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Native Performance", desc: "Optimized for each platform with smooth animations, fast loading, and efficient memory usage.", color: "blue" },
              { icon: Wifi, title: "Offline Capability", desc: "Smart caching and offline functionality to ensure your app works seamlessly without internet connection.", color: "green" },
              { icon: Bell, title: "Push Notifications", desc: "Engaging push notification system to keep users informed and drive app engagement and retention.", color: "purple" },
              { icon: Shield, title: "App Security", desc: "Advanced security measures including biometric authentication, data encryption, and secure API communication.", color: "red" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`text-center ${themeStyles.cardBg} backdrop-blur-sm border ${themeStyles.cardBorder} rounded-xl p-6 group/feature relative overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: `0 20px 40px rgba(${feature.color === 'blue' ? '59, 130, 246' : feature.color === 'green' ? '34, 197, 94' : feature.color === 'purple' ? '168, 85, 247' : '239, 68, 68'}, 0.3)`
                }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      filter: `drop-shadow(0 0 20px rgba(${feature.color === 'blue' ? '59, 130, 246' : feature.color === 'green' ? '34, 197, 94' : feature.color === 'purple' ? '168, 85, 247' : '239, 68, 68'}, 0.6))`
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-12 h-12 text-${feature.color}-400 mx-auto mb-4 group-hover/feature:text-${feature.color}-300 transition-colors duration-300`} />
                  </motion.div>
                  
                  <motion.h4 
                    className={`text-lg font-semibold ${themeStyles.text} mb-3 group-hover/feature:text-transparent group-hover/feature:bg-clip-text group-hover/feature:bg-gradient-to-r ${isDarkMode ? 'group-hover/feature:from-white group-hover/feature:to-gray-300' : 'group-hover/feature:from-gray-900 group-hover/feature:to-gray-600'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.title}
                  </motion.h4>
                  
                  <motion.p 
                    className={`${themeStyles.textSecondary} text-sm ${isDarkMode ? 'group-hover/feature:text-gray-200' : 'group-hover/feature:text-gray-800'} transition-colors duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ 
                      scale: 1.02,
                      color: isDarkMode ? "#E5E7EB" : "#374151"
                    }}
                  >
                    {feature.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10' : 'bg-gradient-to-r from-purple-100/30 to-pink-100/30'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeStyles.text} mb-6`}>
            Ready to Launch Your Mobile App?
          </h2>
          <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
            Join 50+ successful businesses who've transformed their mobile presence with our innovative applications. 
            Let's discuss how we can bring your mobile app vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
              <Rocket size={20} />
              Start Your App
            </button>
            <button className={`border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
              <Calendar size={20} />
              Free Consultation
            </button>
          </div>
          
          <div className={`mt-8 ${themeStyles.textMuted} text-sm`}>
            📱 Native & Cross-platform • 🚀 App Store Ready • 🔒 Secure & Scalable
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
