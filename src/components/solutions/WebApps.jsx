import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Monitor,
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
  Truck
} from 'lucide-react';

const WebApps = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isDarkMode, theme } = useTheme();

  const webApplications = [
    {
      id: 1,
      category: 'ecommerce',
      title: "Multi-Vendor Marketplace",
      description: "Advanced marketplace platform connecting buyers with multiple sellers, featuring AI-powered recommendations and seamless checkout experience.",
      image: "/images/ecommerce.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
      features: ["Vendor Dashboard", "AI Recommendations", "Multi-Payment Options", "Review System", "Inventory Sync", "Mobile App"],
      price: "₹3,50,000 - ₹8,00,000",
      timeline: "12-16 weeks",
      rating: 4.9,
      projects: 42,
      caseStudy: "Increased client sales by 340% in first year"
    },
    {
      id: 2,
      category: 'business',
      title: "Smart Restaurant Management",
      description: "Complete restaurant ecosystem with online ordering, kitchen management, delivery tracking, and customer loyalty programs.",
      image: "/images/Friends Baker - Artisan Bakery.png",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Socket.io", "PWA"],
      features: ["QR Menu", "Kitchen Display", "Delivery Tracking", "Loyalty Points", "Staff Management", "Analytics"],
      price: "₹2,50,000 - ₹5,00,000",
      timeline: "10-14 weeks",
      rating: 4.8,
      projects: 38,
      caseStudy: "Reduced order processing time by 60%"
    },
    {
      id: 3,
      category: 'education',
      title: "Virtual Campus Platform",
      description: "Comprehensive educational ecosystem with virtual classrooms, AI tutoring, student collaboration, and performance analytics.",
      image: "/images/BPRPVTITI - Educational Institute.png",
      technologies: ["React", "Express.js", "PostgreSQL", "WebRTC", "TensorFlow"],
      features: ["Virtual Classrooms", "AI Tutoring", "Collaboration Tools", "Performance Analytics", "Mobile Learning", "Gamification"],
      price: "₹4,00,000 - ₹7,50,000",
      timeline: "14-18 weeks",
      rating: 4.7,
      projects: 29,
      caseStudy: "Improved student engagement by 85%"
    },
    {
      id: 4,
      category: 'healthcare',
      title: "Telemedicine & Health Records",
      description: "Integrated healthcare platform with telemedicine consultations, electronic health records, appointment scheduling, and health monitoring.",
      image: "/images/Cloud-Computing.jpeg",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC", "FHIR"],
      features: ["Video Consultations", "Health Records", "Prescription Management", "Health Monitoring", "Insurance Integration", "Mobile Health"],
      price: "₹6,00,000 - ₹12,00,000",
      timeline: "16-20 weeks",
      rating: 4.9,
      projects: 18,
      caseStudy: "Reduced patient wait times by 70%"
    },
    {
      id: 5,
      category: 'logistics',
      title: "Smart Logistics Hub",
      description: "End-to-end logistics management with real-time tracking, route optimization, warehouse management, and customer notifications.",
      image: "/images/digitalmarketing.webp",
      technologies: ["React", "Python", "FastAPI", "MongoDB", "Google Maps"],
      features: ["Real-time Tracking", "Route Optimization", "Warehouse Management", "Customer Notifications", "Fleet Management", "Analytics"],
      price: "₹5,00,000 - ₹10,00,000",
      timeline: "14-18 weeks",
      rating: 4.8,
      projects: 25,
      caseStudy: "Optimized delivery routes saving 35% fuel costs"
    },
    {
      id: 6,
      category: 'entertainment',
      title: "Content Creator Studio",
      description: "All-in-one platform for content creators with video editing tools, audience analytics, monetization features, and community building.",
      image: "/images/img14.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "FFmpeg", "WebGL"],
      features: ["Video Editor", "Live Streaming", "Audience Analytics", "Monetization Tools", "Community Features", "Content Scheduling"],
      price: "₹3,00,000 - ₹6,50,000",
      timeline: "12-16 weeks",
      rating: 4.6,
      projects: 21,
      caseStudy: "Helped creators increase revenue by 250%"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Globe },
    { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart },
    { id: 'business', name: 'Restaurant & Business', icon: Coffee },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'entertainment', name: 'Entertainment', icon: Camera }
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Lightning Fast Development",
      description: "We use cutting-edge technologies and agile methodologies to deliver your web app 40% faster than industry standards."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Every application is built with enterprise-level security protocols, encryption, and compliance standards."
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Our applications are designed to handle millions of users and can scale seamlessly as your business grows."
    },
    {
      icon: Users,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock technical support and regular updates to keep your application running smoothly."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Every web app is tailored to your specific business needs and industry requirements."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "Built-in analytics and reporting tools to help you make informed business decisions."
    }
  ];

  const stats = [
    { number: "50+", label: "Web Apps Built", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Happy Clients", icon: Users }
  ];

  const filteredApps = activeCategory === 'all' 
    ? webApplications 
    : webApplications.filter(app => app.category === activeCategory);

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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
        
        <div className="relative max-w-7xl mx-auto text-center pt-16">
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
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Web
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
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
            whileInView={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From AI-powered marketplaces to telemedicine platforms - we build web applications that don't just meet expectations, they shatter them.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-blue-300" : "text-blue-600"}
            >
              Join 50+ businesses who've transformed their operations with our cutting-edge solutions.
            </motion.span>
          </motion.p>
          
        </div>
      </motion.section>


      {/* Web Applications Overview */}
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
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Web Applications
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Powerful, scalable web applications designed to transform your business operations and drive growth.
            </motion.p>
          </motion.div>

          {/* Web Apps Content Boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: "Enterprise Solutions",
                description: "Build comprehensive enterprise web applications with advanced user management, workflow automation, and real-time collaboration features. Perfect for large organizations requiring scalable solutions.",
                color: "blue",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: ShoppingCart,
                title: "E-Commerce Platforms",
                description: "Create powerful online stores with advanced product catalogs, secure payment processing, inventory management, and customer analytics. Drive sales with modern e-commerce features.",
                color: "green",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: Database,
                title: "Data Management Systems",
                description: "Develop sophisticated data management applications with advanced analytics, reporting dashboards, and business intelligence features. Transform raw data into actionable insights.",
                color: "purple",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: Users,
                title: "Social Platforms",
                description: "Build engaging social networking platforms with real-time messaging, content sharing, community features, and user-generated content management systems.",
                color: "yellow",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                icon: BookOpen,
                title: "Learning Management",
                description: "Create comprehensive educational platforms with course management, video streaming, interactive assessments, and progress tracking for modern online learning experiences.",
                color: "red",
                gradient: "from-red-500/20 to-rose-500/20"
              },
              {
                icon: Heart,
                title: "Healthcare Solutions",
                description: "Develop HIPAA-compliant healthcare applications with patient management, telemedicine capabilities, electronic health records, and appointment scheduling systems.",
                color: "cyan",
                gradient: "from-cyan-500/20 to-teal-500/20"
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
                  boxShadow: `0 25px 50px rgba(${item.color === 'blue' ? '59, 130, 246' : item.color === 'green' ? '34, 197, 94' : item.color === 'purple' ? '168, 85, 247' : item.color === 'yellow' ? '234, 179, 8' : item.color === 'red' ? '239, 68, 68' : '6, 182, 212'}, 0.4)`
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
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${item.color}-400 rounded-full`}
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0
                      }}
                      whileHover={{
                        scale: [0, 1, 0],
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>

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

          {/* Technology Stack */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-4`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Our Technology Stack
            </motion.h3>
            <motion.p 
              className={`text-lg ${themeStyles.textSecondary} max-w-2xl mx-auto mb-12`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cutting-edge technologies and frameworks we use to build robust, scalable web applications.
            </motion.p>
          </motion.div>

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
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 1.2 }}
            />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: Monitor, title: "Frontend", color: "blue", techs: ["React.js", "Vue.js", "Angular", "Next.js"] },
                { icon: Database, title: "Backend", color: "green", techs: ["Node.js", "Python/Django", "PHP/Laravel", "Java/Spring"] },
                { icon: Layers, title: "Database", color: "purple", techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
                { icon: Cloud, title: "Cloud & DevOps", color: "cyan", techs: ["AWS", "Docker", "Kubernetes", "CI/CD"] }
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
                          color: isDarkMode ? "#60A5FA" : "#2563EB",
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

          {/* Development Process */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className={`text-3xl font-bold ${themeStyles.text} mb-4`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
            >
              Our Development Process
            </motion.h3>
            <motion.p 
              className={`text-lg ${themeStyles.textSecondary} max-w-2xl mx-auto mb-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our proven 5-step development methodology ensures quality delivery and client satisfaction.
            </motion.p>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your requirements", icon: Target, color: "blue" },
                { step: "02", title: "Planning", desc: "Architecture & design planning", icon: Palette, color: "purple" },
                { step: "03", title: "Development", desc: "Agile development process", icon: Code, color: "green" },
                { step: "04", title: "Testing", desc: "Quality assurance & testing", icon: Shield, color: "yellow" },
                { step: "05", title: "Deployment", desc: "Launch & ongoing support", icon: Rocket, color: "pink" }
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
                    {/* Animated background pulse */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
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
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/process:opacity-100 transition-opacity duration-500 -z-10"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Security First", desc: "Bank-grade security with encryption, secure authentication, and regular security audits.", color: "blue" },
              { icon: Zap, title: "High Performance", desc: "Optimized for speed with fast loading times, efficient database queries, and CDN integration.", color: "yellow" },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect display across all devices with responsive design and mobile-first approach.", color: "green" },
              { icon: Users, title: "Scalable Architecture", desc: "Built to grow with your business, handling increased traffic and expanding functionality.", color: "purple" }
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
                  boxShadow: `0 20px 40px rgba(${feature.color === 'blue' ? '59, 130, 246' : feature.color === 'yellow' ? '234, 179, 8' : feature.color === 'green' ? '34, 197, 94' : '168, 85, 247'}, 0.3)`
                }}
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    feature.color === 'blue' ? 'from-blue-500/10 to-cyan-500/10' :
                    feature.color === 'yellow' ? 'from-yellow-500/10 to-orange-500/10' :
                    feature.color === 'green' ? 'from-green-500/10 to-emerald-500/10' :
                    'from-purple-500/10 to-pink-500/10'
                  } opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 rounded-xl`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${feature.color}-400 rounded-full`}
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0
                      }}
                      whileHover={{
                        scale: [0, 1, 0],
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      filter: `drop-shadow(0 0 20px rgba(${feature.color === 'blue' ? '59, 130, 246' : feature.color === 'yellow' ? '234, 179, 8' : feature.color === 'green' ? '34, 197, 94' : '168, 85, 247'}, 0.6))`
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
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
            Join 50+ successful businesses who've revolutionized their operations with our web applications. 
            Let's discuss how we can help you achieve similar results.
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
            💡 Free project consultation • 🚀 40% faster delivery • 🔒 Bank-grade security
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApps;
