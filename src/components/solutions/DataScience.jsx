import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  BarChart3, 
  Brain, 
  Database, 
  TrendingUp, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Layers,
  Cpu,
  Target,
  Award,
  Clock,
  DollarSign,
  MessageSquare,
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
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Server,
  Wifi,
  Smartphone,
  PieChart,
  LineChart,
  Activity,
  Microscope,
  Lightbulb,
  Globe
} from 'lucide-react';

const DataScience = () => {
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
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Data
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Science
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
              From predictive analytics to machine learning models - we transform raw data into actionable insights that drive business growth and innovation.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={isDarkMode ? "text-blue-300" : "text-blue-600"}
            >
              Join 40+ companies who've unlocked the power of their data with our advanced analytics solutions.
            </motion.span>
          </motion.p>
        </div>
      </motion.section>

      {/* Data Science Solutions Overview */}
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
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              >
                Data Solutions
              </motion.span>
            </motion.h2>
            <motion.p 
              className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive data science solutions designed to extract meaningful insights from your data and drive intelligent business decisions.
            </motion.p>
          </motion.div>

          {/* Data Science Solutions Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Advanced statistical models and machine learning algorithms to forecast trends, predict customer behavior, and optimize business outcomes with data-driven insights.",
                color: "blue",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models, deep learning solutions, and AI algorithms to automate processes, enhance decision-making, and unlock hidden patterns in your data.",
                color: "purple",
                gradient: "from-purple-500/20 to-indigo-500/20"
              },
              {
                icon: Database,
                title: "Big Data Analytics",
                description: "Scalable data processing, real-time analytics, and distributed computing solutions to handle massive datasets and extract valuable business intelligence.",
                color: "indigo",
                gradient: "from-indigo-500/20 to-blue-500/20"
              },
              {
                icon: TrendingUp,
                title: "Business Intelligence",
                description: "Interactive dashboards, KPI tracking, and automated reporting systems to visualize data insights and support strategic business decisions.",
                color: "cyan",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                icon: Microscope,
                title: "Data Mining",
                description: "Advanced pattern recognition, anomaly detection, and knowledge discovery techniques to uncover hidden insights and opportunities in complex datasets.",
                color: "teal",
                gradient: "from-teal-500/20 to-cyan-500/20"
              },
              {
                icon: Lightbulb,
                title: "AI Consulting",
                description: "Strategic AI implementation, data strategy consulting, and custom AI solution development to transform your business with artificial intelligence.",
                color: "violet",
                gradient: "from-violet-500/20 to-purple-500/20"
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

          {/* Data Science Technology Stack */}
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
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    Data Science Technology Stack
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Cutting-edge tools and technologies we use to deliver powerful data science solutions and insights.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    color: "emerald",
                    tools: ["Python", "R", "Jupyter", "Pandas", "NumPy"]
                  },
                  {
                    icon: Brain,
                    title: "Machine Learning",
                    color: "blue", 
                    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
                  },
                  {
                    icon: Database,
                    title: "Big Data",
                    color: "purple",
                    tools: ["Apache Spark", "Hadoop", "MongoDB", "Cassandra", "Elasticsearch"]
                  },
                  {
                    icon: PieChart,
                    title: "Visualization",
                    color: "indigo",
                    tools: ["Tableau", "Power BI", "D3.js", "Plotly", "Matplotlib"]
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

          {/* Data Science Process */}
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
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    Data Science Process
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our systematic approach to transforming raw data into actionable business insights and intelligent solutions.
                </motion.p>
              </motion.div>

              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {[
                  {
                    icon: Database,
                    step: "01",
                    title: "Collect",
                    description: "Data gathering and integration from multiple sources",
                    color: "emerald"
                  },
                  {
                    icon: Microscope,
                    step: "02", 
                    title: "Analyze",
                    description: "Exploratory data analysis and pattern discovery",
                    color: "blue"
                  },
                  {
                    icon: Brain,
                    step: "03",
                    title: "Model",
                    description: "Machine learning model development and training",
                    color: "purple"
                  },
                  {
                    icon: TrendingUp,
                    step: "04",
                    title: "Validate",
                    description: "Model testing and performance optimization",
                    color: "indigo"
                  },
                  {
                    icon: Lightbulb,
                    step: "05",
                    title: "Deploy",
                    description: "Production deployment and monitoring",
                    color: "violet"
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
          <section className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-100/30 to-purple-100/30'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-4xl md:text-5xl font-bold ${themeStyles.text} mb-6`}>
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className={`text-xl ${themeStyles.textSecondary} mb-8`}>
                Join 40+ successful businesses who've transformed their operations with our data science solutions. 
                Let's discuss how we can turn your data into competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                  <BarChart3 size={20} />
                  Get Data Analysis
                </button>
                <button className={`border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
                  <Calendar size={20} />
                  Free Data Consultation
                </button>
              </div>
              
              <div className={`mt-8 ${themeStyles.textMuted} text-sm`}>
                📊 Predictive Analytics • 🧠 Machine Learning • 📈 Business Intelligence • 🔍 Data Mining
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DataScience;
