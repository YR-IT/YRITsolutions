import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Palette, 
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
  Bell,
  Smartphone,
  Eye,
  MousePointer,
  PenTool
} from 'lucide-react';

const UIUXDesign = () => {
  const { isDarkMode, theme } = useTheme();

  // Theme-aware styles
  const themeStyles = {
    background: isDarkMode ? 'bg-black' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100/80',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    cardHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/80',
    gradient: isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-100/50 to-purple-100/50',
    particleColor: isDarkMode ? 'bg-blue-400/30' : 'bg-blue-600/60'
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
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
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
        
        <div className="relative max-w-7xl mx-auto text-center pt-8 sm:pt-12 md:pt-16 px-4">
          <motion.h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold ${themeStyles.text} mb-6 sm:mb-8`}
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
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
            >
              UI/UX
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Design
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`text-base sm:text-lg md:text-xl ${themeStyles.textSecondary} mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From intuitive user interfaces to seamless user experiences - we create digital designs that users love and businesses depend on.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-blue-300" : "text-blue-600"}
            >
              Join 50+ businesses who've transformed their digital presence with our innovative design solutions.
            </motion.span>
          </motion.p>
        </div>
      </motion.section>

      {/* UI/UX Design Categories Overview */}
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
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${themeStyles.text} mb-4 sm:mb-6`}
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
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              >
                Design Solutions
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              User-centered design solutions that combine aesthetics with functionality to deliver exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Design Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            {[
              {
                icon: Monitor,
                title: "Web UI Design",
                description: "Modern, responsive web interfaces with intuitive navigation, clean layouts, and engaging visual elements that drive user engagement.",
                color: "blue",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Smartphone,
                title: "Mobile App Design",
                description: "Native and cross-platform mobile interfaces optimized for touch interactions, accessibility, and seamless user journeys.",
                color: "purple",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: Eye,
                title: "User Experience (UX)",
                description: "Research-driven UX strategies including user personas, journey mapping, wireframing, and usability testing for optimal experiences.",
                color: "green",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: Palette,
                title: "Brand & Visual Identity",
                description: "Cohesive brand systems with logos, color palettes, typography, and visual guidelines that reflect your brand personality.",
                color: "orange",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                icon: MousePointer,
                title: "Interactive Prototypes",
                description: "High-fidelity interactive prototypes and clickable mockups that bring your ideas to life before development begins.",
                color: "indigo",
                gradient: "from-indigo-500/20 to-purple-500/20"
              },
              {
                icon: PenTool,
                title: "Design Systems",
                description: "Comprehensive design systems with reusable components, style guides, and documentation for consistent user experiences.",
                color: "red",
                gradient: "from-red-500/20 to-rose-500/20"
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
                  boxShadow: `0 25px 50px rgba(${item.color === 'blue' ? '59, 130, 246' : item.color === 'purple' ? '168, 85, 247' : item.color === 'green' ? '34, 197, 94' : item.color === 'orange' ? '249, 115, 22' : item.color === 'indigo' ? '99, 102, 241' : '239, 68, 68'}, 0.4)`
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

          {/* Design Technology Stack */}
          <motion.div 
            className={`${themeStyles.cardBg} backdrop-blur-sm border ${themeStyles.cardBorder} rounded-2xl p-8 mb-16 relative overflow-hidden group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
            }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-8 text-center relative z-10`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Design Technology Stack
            </motion.h3>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: PenTool, title: "Design Tools", color: "blue", techs: ["Figma", "Adobe XD", "Sketch", "InVision"] },
                { icon: Palette, title: "Visual Design", color: "purple", techs: ["Photoshop", "Illustrator", "After Effects", "Principle"] },
                { icon: Eye, title: "UX Research", color: "green", techs: ["Miro", "Hotjar", "UserTesting", "Maze"] },
                { icon: MousePointer, title: "Prototyping", color: "orange", techs: ["Framer", "ProtoPie", "Marvel", "Axure"] }
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
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))"
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
                          color: isDarkMode ? "#3B82F6" : "#1D4ED8",
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

          {/* Design Process */}
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
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Design Process
            </motion.h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Research", desc: "User research & market analysis", icon: Target, color: "blue" },
                { step: "02", title: "Strategy", desc: "UX strategy & information architecture", icon: BarChart3, color: "purple" },
                { step: "03", title: "Design", desc: "UI design & visual identity", icon: Palette, color: "green" },
                { step: "04", title: "Prototype", desc: "Interactive prototypes & testing", icon: MousePointer, color: "orange" },
                { step: "05", title: "Deliver", desc: "Design handoff & documentation", icon: Rocket, color: "red" }
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
                      className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 hidden md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover/process:shadow-2xl group-hover/process:shadow-blue-500/50"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
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
                    className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400 group-hover/process:text-blue-300' : 'text-blue-600 group-hover/process:text-blue-500'} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2,
                      textShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
                    }}
                  >
                    {process.step}
                  </motion.div>
                  
                  <motion.h4 
                    className={`text-lg font-semibold ${themeStyles.text} mb-2 group-hover/process:text-transparent group-hover/process:bg-clip-text group-hover/process:bg-gradient-to-r group-hover/process:from-blue-400 group-hover/process:to-purple-400`}
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

          {/* Key Design Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: "User-Centered", desc: "Research-driven designs focused on user needs, behaviors, and preferences for optimal experiences.", color: "blue" },
              { icon: Smartphone, title: "Responsive Design", desc: "Designs that work seamlessly across all devices and screen sizes with consistent experiences.", color: "green" },
              { icon: Zap, title: "Performance Focused", desc: "Optimized designs that load fast, reduce cognitive load, and enhance user engagement.", color: "purple" },
              { icon: Shield, title: "Accessibility First", desc: "WCAG compliant designs ensuring your product is usable by everyone, including users with disabilities.", color: "red" }
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
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-100/30 to-purple-100/30'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeStyles.text} mb-6`}>
            Ready to Transform Your Digital Experience?
          </h2>
          <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
            Join 50+ successful businesses who've elevated their user experience with our innovative design solutions. 
            Let's discuss how we can bring your design vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
              <Rocket size={20} />
              Start Your Project
            </button>
            <button className={`border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
              <Calendar size={20} />
              Free Consultation
            </button>
          </div>
          
          <div className={`mt-8 ${themeStyles.textMuted} text-sm`}>
            🎨 User-Centered Design • 📱 Responsive & Accessible • ⚡ Performance Optimized
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
