import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Shield, 
  Globe, 
  Monitor, 
  Database, 
  Cloud, 
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
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Server,
  Wifi,
  Smartphone
} from 'lucide-react';

const CyberSecurity = () => {
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
    gradient: isDarkMode ? 'from-red-600/20 to-orange-600/20' : 'from-red-100/50 to-orange-100/50',
    particleColor: isDarkMode ? 'bg-red-400/30' : 'bg-red-600/60'
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
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"
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
              className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            >
              Cyber
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Security
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
              From advanced threat detection to comprehensive security audits - we protect your digital assets with enterprise-grade cybersecurity solutions.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-red-300" : "text-red-600"}
            >
              Join 50+ businesses who've secured their operations with our cutting-edge security solutions.
            </motion.span>
          </motion.p>
        </div>
      </motion.section>

      {/* Cyber Security Solutions Overview */}
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
                className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
              >
                Security Solutions
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive cybersecurity solutions designed to protect your business from evolving digital threats and ensure data integrity.
            </motion.p>
          </motion.div>

          {/* Security Solutions Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            {[
              {
                icon: Shield,
                title: "Network Security",
                description: "Advanced firewall protection, intrusion detection systems, and network monitoring to safeguard your infrastructure from cyber threats and unauthorized access.",
                color: "red",
                gradient: "from-red-500/20 to-orange-500/20"
              },
              {
                icon: Lock,
                title: "Data Protection",
                description: "End-to-end encryption, secure data storage, and backup solutions to protect sensitive information and ensure compliance with data protection regulations.",
                color: "orange",
                gradient: "from-orange-500/20 to-yellow-500/20"
              },
              {
                icon: Eye,
                title: "Threat Detection",
                description: "AI-powered threat intelligence, real-time monitoring, and automated response systems to identify and neutralize security threats before they cause damage.",
                color: "yellow",
                gradient: "from-yellow-500/20 to-amber-500/20"
              },
              {
                icon: AlertTriangle,
                title: "Incident Response",
                description: "24/7 security operations center, rapid incident response, and forensic analysis to minimize damage and recover quickly from security breaches.",
                color: "amber",
                gradient: "from-amber-500/20 to-orange-500/20"
              },
              {
                icon: FileText,
                title: "Compliance & Auditing",
                description: "Comprehensive security audits, compliance assessments, and regulatory reporting to meet industry standards and legal requirements.",
                color: "rose",
                gradient: "from-rose-500/20 to-red-500/20"
              },
              {
                icon: Users,
                title: "Security Training",
                description: "Employee security awareness programs, phishing simulations, and cybersecurity training to build a human firewall against social engineering attacks.",
                color: "pink",
                gradient: "from-pink-500/20 to-rose-500/20"
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
                  rotateY: 5
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

          {/* Cyber Security Technology Stack */}
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
                    className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                  >
                    Security Technology Stack
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Advanced security tools and technologies we deploy to protect your digital infrastructure and data.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    icon: Shield,
                    title: "Network Security",
                    color: "red",
                    tools: ["Fortinet", "Palo Alto", "Cisco ASA", "pfSense", "SonicWall"]
                  },
                  {
                    icon: Lock,
                    title: "Encryption",
                    color: "orange", 
                    tools: ["AES-256", "RSA", "SSL/TLS", "VPN", "BitLocker"]
                  },
                  {
                    icon: Eye,
                    title: "Monitoring",
                    color: "yellow",
                    tools: ["Splunk", "ELK Stack", "Nagios", "SIEM", "Wireshark"]
                  },
                  {
                    icon: AlertTriangle,
                    title: "Threat Detection",
                    color: "amber",
                    tools: ["CrowdStrike", "McAfee", "Symantec", "Kaspersky", "Trend Micro"]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-xl rounded-2xl p-6 border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} hover:border-${category.color}-500 transition-all duration-500 group`}
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
                      y: -10
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 flex items-center justify-center group-hover:from-${category.color}-500/30 group-hover:to-${category.color}-600/30 transition-all duration-300`}
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className={`w-8 h-8 text-${category.color}-400 group-hover:text-${category.color}-300 transition-colors duration-300`} />
                      </motion.div>
                      
                      <h3 className={`text-xl font-bold ${themeStyles.text} mb-4 group-hover:text-${category.color}-400 transition-colors duration-300`}>
                        {category.title}
                      </h3>
                      
                      <div className="space-y-2">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            className={`text-sm ${themeStyles.textSecondary} py-1 px-3 rounded-lg ${isDarkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'} transition-all duration-300`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + toolIndex * 0.05 + 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tool}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Cyber Security Process */}
          <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-gray-900/50 to-black/50' : 'bg-gradient-to-r from-gray-50/50 to-white/50'}`}>
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
                    className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                  >
                    Security Process
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our comprehensive approach to identifying vulnerabilities, implementing defenses, and maintaining robust security posture.
                </motion.p>
              </motion.div>

              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {[
                  {
                    icon: Eye,
                    step: "01",
                    title: "Assess",
                    description: "Security audit and vulnerability assessment",
                    color: "red"
                  },
                  {
                    icon: Shield,
                    step: "02", 
                    title: "Protect",
                    description: "Implementation of security controls and defenses",
                    color: "orange"
                  },
                  {
                    icon: AlertTriangle,
                    step: "03",
                    title: "Detect",
                    description: "Real-time threat monitoring and detection",
                    color: "yellow"
                  },
                  {
                    icon: Zap,
                    step: "04",
                    title: "Respond",
                    description: "Incident response and threat mitigation",
                    color: "amber"
                  },
                  {
                    icon: Users,
                    step: "05",
                    title: "Recover",
                    description: "Business continuity and system restoration",
                    color: "rose"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center max-w-xs"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`relative w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-${process.color}-500/20 to-${process.color}-600/20 flex items-center justify-center border-2 border-${process.color}-500/30 group hover:border-${process.color}-500 transition-all duration-500`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -15, 15, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <process.icon className={`w-8 h-8 text-${process.color}-400`} />
                      </motion.div>
                      
                      <motion.div
                        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${process.color}-500 text-white text-sm font-bold flex items-center justify-center`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        {process.step}
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className={`text-2xl font-bold ${themeStyles.text} mb-3`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {process.title}
                    </motion.h3>
                    
                    <motion.p 
                      className={`${themeStyles.textSecondary} leading-relaxed`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {process.description}
                    </motion.p>

                    {/* Connecting Line */}
                    {index < 4 && (
                      <motion.div
                        className={`hidden lg:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-${process.color}-500/50 to-transparent`}
                        style={{ transform: 'translateX(2rem)' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-red-600/10 to-orange-600/10' : 'bg-gradient-to-r from-red-100/30 to-orange-100/30'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-4xl md:text-5xl font-bold ${themeStyles.text} mb-6`}>
                Ready to Secure Your Business?
              </h2>
              <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
                Join 50+ successful businesses who've protected their digital assets with our comprehensive cybersecurity solutions. 
                Let's discuss how we can safeguard your operations from cyber threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center gap-2">
                  <Shield size={20} />
                  Get Security Assessment
                </button>
                <button className={`border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
                  <Calendar size={20} />
                  Free Security Consultation
                </button>
              </div>
              
              <div className={`mt-8 ${themeStyles.textMuted} text-sm`}>
                🛡️ Enterprise Security • 🔒 Data Protection • 👁️ Threat Detection • ⚡ 24/7 Monitoring
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
