import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  TrendingUp, 
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
  PenTool,
  Search,
  Mail,
  Share2,
  Megaphone,
  BarChart,
  PieChart
} from 'lucide-react';

const DigitalMarketing = () => {
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
    gradient: isDarkMode ? 'from-green-600/20 to-blue-600/20' : 'from-green-100/50 to-blue-100/50',
    particleColor: isDarkMode ? 'bg-green-400/30' : 'bg-green-600/60'
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
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"
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
              className="bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
            >
              Digital
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Marketing
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
              From SEO optimization to social media campaigns - we create digital marketing strategies that drive growth and maximize ROI.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-green-300" : "text-green-600"}
            >
              Join 50+ businesses who've accelerated their growth with our data-driven marketing solutions.
            </motion.span>
          </motion.p>
        </div>
      </motion.section>

      {/* Digital Marketing Services Overview */}
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
                className="bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
              >
                Marketing Solutions
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Data-driven digital marketing strategies designed to boost your online presence and drive measurable business growth.
            </motion.p>
          </motion.div>

          {/* Marketing Services Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            {[
              {
                icon: Search,
                title: "SEO & Content Marketing",
                description: "Boost your search rankings with strategic SEO optimization, keyword research, and high-quality content that drives organic traffic and engagement.",
                color: "green",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build brand awareness and engage your audience across all social platforms with compelling content and targeted advertising campaigns.",
                color: "blue",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Megaphone,
                title: "PPC & Advertising",
                description: "Maximize ROI with targeted pay-per-click campaigns, Google Ads, Facebook Ads, and strategic advertising across digital platforms.",
                color: "purple",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Nurture leads and retain customers with personalized email campaigns, automation workflows, and performance tracking.",
                color: "orange",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                icon: BarChart,
                title: "Analytics & Insights",
                description: "Make data-driven decisions with comprehensive analytics, performance tracking, and detailed reporting on all marketing activities.",
                color: "teal",
                gradient: "from-teal-500/20 to-cyan-500/20"
              },
              {
                icon: Target,
                title: "Brand Strategy",
                description: "Develop cohesive brand strategies with market positioning, competitive analysis, and integrated marketing approaches for maximum impact.",
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
                  boxShadow: `0 25px 50px rgba(${item.color === 'green' ? '34, 197, 94' : item.color === 'blue' ? '59, 130, 246' : item.color === 'purple' ? '168, 85, 247' : item.color === 'orange' ? '249, 115, 22' : item.color === 'teal' ? '20, 184, 166' : '239, 68, 68'}, 0.4)`
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

          {/* Marketing Technology Stack */}
          <motion.div 
            className={`${themeStyles.cardBg} backdrop-blur-sm border ${themeStyles.cardBorder} rounded-2xl p-8 mb-16 relative overflow-hidden group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)"
            }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-8 text-center relative z-10`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
              }}
            >
              Marketing Technology Stack
            </motion.h3>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: BarChart3, title: "Analytics", color: "green", techs: ["Google Analytics", "SEMrush", "Ahrefs", "Hotjar"] },
                { icon: Share2, title: "Social Media", color: "blue", techs: ["Hootsuite", "Buffer", "Sprout Social", "Later"] },
                { icon: Mail, title: "Email Marketing", color: "purple", techs: ["Mailchimp", "ConvertKit", "ActiveCampaign", "Klaviyo"] },
                { icon: Megaphone, title: "Advertising", color: "orange", techs: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Twitter Ads"] }
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
                      filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))"
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
                          color: isDarkMode ? "#22C55E" : "#16A34A",
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

          {/* Marketing Process */}
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
                textShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
              }}
            >
              Marketing Process
            </motion.h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Research", desc: "Market analysis & competitor research", icon: Search, color: "green" },
                { step: "02", title: "Strategy", desc: "Marketing strategy & planning", icon: Target, color: "blue" },
                { step: "03", title: "Execute", desc: "Campaign creation & implementation", icon: Rocket, color: "purple" },
                { step: "04", title: "Monitor", desc: "Performance tracking & optimization", icon: BarChart3, color: "orange" },
                { step: "05", title: "Report", desc: "Analytics reporting & insights", icon: PieChart, color: "teal" }
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
                      className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-blue-500/50 hidden md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  
                  <motion.div 
                    className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover/process:shadow-2xl group-hover/process:shadow-green-500/50"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.8)"
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
                    className={`text-2xl font-bold ${isDarkMode ? 'text-green-400 group-hover/process:text-green-300' : 'text-green-600 group-hover/process:text-green-500'} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2,
                      textShadow: "0 0 15px rgba(34, 197, 94, 0.8)"
                    }}
                  >
                    {process.step}
                  </motion.div>
                  
                  <motion.h4 
                    className={`text-lg font-semibold ${themeStyles.text} mb-2 group-hover/process:text-transparent group-hover/process:bg-clip-text group-hover/process:bg-gradient-to-r group-hover/process:from-green-400 group-hover/process:to-blue-400`}
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

          {/* Key Marketing Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Growth Focused", desc: "Strategies designed to drive measurable business growth and increase revenue through targeted campaigns.", color: "green" },
              { icon: BarChart3, title: "Data-Driven", desc: "Make informed decisions with comprehensive analytics, A/B testing, and performance optimization.", color: "blue" },
              { icon: Target, title: "Targeted Reach", desc: "Reach your ideal customers with precision targeting across all digital marketing channels.", color: "purple" },
              { icon: Zap, title: "Fast Results", desc: "See quick wins with optimized campaigns while building long-term sustainable growth strategies.", color: "orange" }
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
                  boxShadow: `0 20px 40px rgba(${feature.color === 'green' ? '34, 197, 94' : feature.color === 'blue' ? '59, 130, 246' : feature.color === 'purple' ? '168, 85, 247' : '249, 115, 22'}, 0.3)`
                }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      filter: `drop-shadow(0 0 20px rgba(${feature.color === 'green' ? '34, 197, 94' : feature.color === 'blue' ? '59, 130, 246' : feature.color === 'purple' ? '168, 85, 247' : '249, 115, 22'}, 0.6))`
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
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-green-600/10 to-blue-600/10' : 'bg-gradient-to-r from-green-100/30 to-blue-100/30'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeStyles.text} mb-6`}>
            Ready to Accelerate Your Growth?
          </h2>
          <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
            Join 50+ successful businesses who've transformed their digital presence with our data-driven marketing strategies. 
            Let's discuss how we can boost your online growth and ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
              <Rocket size={20} />
              Start Your Campaign
            </button>
            <button className={`border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
              <Calendar size={20} />
              Free Marketing Audit
            </button>
          </div>
          
          <div className={`mt-8 ${themeStyles.textMuted} text-sm`}>
            📈 Growth Focused • 📊 Data-Driven • 🎯 Targeted Campaigns • ⚡ Fast Results
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
