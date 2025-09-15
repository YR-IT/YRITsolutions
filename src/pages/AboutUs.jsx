import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../contexts/ThemeContext';
import {
  Star,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Shield,
  Mail,
  Linkedin,
  Heart,
  Award,
  TrendingUp,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import photo1 from "../assets/photo1.jpeg";
import founderImg from "../assets/founderimage.jpg";


// Utility hook for intersection observer
function useInView(threshold = 0.25, rootMargin = "0px 0px -10% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Count up animation utility
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function CountUp({ end = 0, duration = 1200, startOn = false, className = "" }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startOn || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      setVal(Math.round(end * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [startOn, end, duration]);

  return (
    <span className={className}>{new Intl.NumberFormat().format(val)}</span>
  );
}

const AboutPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [statsRef, statsInView] = useInView(0.25, "0px 0px -20% 0px");
  const [achievementStatsRef, achievementStatsInView] = useInView(0.25, "0px 0px -20% 0px");
  const [currentSlide, setCurrentSlide] = useState(0);

  const missionImages = [
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Team Collaboration",
      rotation: -15,
    },
    {
      url: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Data Analytics",
      rotation: 8,
    },
    {
      url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Business Meeting",
      rotation: -8,
    },
  ];

  const valuesData = [
    {
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that reshape industries and drive digital transformation.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Excellence",
      description: "Delivering unmatched quality through meticulous attention to detail and perfectionist approach.",
      icon: Star,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships and fostering teamwork to achieve extraordinary results together.",
      icon: Users,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards and transparent communication in every interaction.",
      icon: Shield,
      color: "from-green-500 to-blue-500",
    },
  ];

  const statsData = [
    { num: 1, label: "Founded Since 2024", suffix: "+" },
    { num: 50, label: "Happy Clients", suffix: "+" },
    { num: 300, label: "Projects Delivered", suffix: "+" },
    { num: 24, label: "Hours Support", suffix: "/7" },
  ];

  const achievements = [
    "Industry-leading 99.9% client satisfaction rate",
    "Award-winning digital solutions across 20+ industries",
    "Zero-downtime deployment record for enterprise clients",
    "24/7 dedicated support with <2hr response time",
  ];

  // Founder Achievement Data
 
  
  const founderAchievements = [
    {
      id: 1,
      image: img1,
      title: "Tech Innovation Awards",
      description: "Recognized as 'Young Innovator of the Year' for breakthrough AI solutions",
    },
    {
      id: 2,
      image: img2,
      title: "Global Leadership",
      description: "Led international teams across 10+ countries to deliver world-class solutions",
    },
    {
      id: 3,
      image: photo1,
      title: "Revenue Growth",
      description: "Achieved 300% year-over-year growth through strategic innovation and client satisfaction",
    },
    {
      id: 4,
      image: img4,
      title: "Industry Recognition",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },
    {
      id: 5,
      image: img5,
      title: "Industry",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },
    {
      id: 6,
      image: img6,
      title: "Industry Recognition",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },
    {
      id: 7,
      image: img7,
      title: "Industry Recognition",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },
    {
      id: 8,
      image: img8,
      title: "Industry Recognition",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },

    {
      id: 9,
      image: img9,
      title: "Industry Recognition",
      description: "Featured in Forbes 30 Under 30 and multiple tech publications for innovative leadership",
    
    },
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % founderAchievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + founderAchievements.length) % founderAchievements.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen overflow-x-hidden relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-18 sm:py-20 px-10">


        <div className="max-w-11xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-lg mb-8"
          >
            <Star className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-semibold">About Our Journey</span>
          </motion.div>

          <motion.h1
  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-center"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className={`block bg-gradient-to-r ${isDarkMode ? 'from-white via-purple-200 to-white' : 'from-gray-900 via-purple-600 to-gray-900'} bg-clip-text text-transparent`}>
    CRAFTING
  </span>
  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
    THE FUTURE
  </span>
</motion.h1>


          <motion.p
           className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We transform ambitious ideas into{" "}
            <span className="text-purple-400 font-bold">extraordinary digital experiences</span>{" "}
            that drive innovation, growth, and lasting success.
          </motion.p>


          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => navigate('/ourservices')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className={`px-8 py-4 border rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${isDarkMode ? 'border-gray-600 hover:bg-gray-800/50' : 'border-gray-300 hover:bg-gray-100/50'}`}
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Tilted Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-lg mb-8">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold text-lg">OUR MISSION</span>
            </div>

            <h2 className={`text-2xl md:text-4xl font-bold leading-tight mb-8 max-w-5xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              We are committed to empowering businesses and idividuals with {" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                INNOVATIVE SOFTWARE SOLUTIONS
              </span>{" "}
              that drive growth, efficiency, and success. 
            </h2>
          </motion.div>

          

          {/* Tilted Cards */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {missionImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: image.rotation 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: image.rotation + 5,
                  zIndex: 10 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                style={{ transformOrigin: "center center" }}
              >
                <div className="relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <motion.section
        ref={statsRef}
        className={`py-20 ${isDarkMode ? 'bg-gray-950/50' : 'bg-gray-50'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className={`text-center text-4xl md:text-5xl font-bold mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Impact in <span className="text-purple-400">Numbers</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`relative rounded-2xl p-8 text-center backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${isDarkMode ? 'bg-gray-900/50 border border-gray-800 hover:bg-gray-900/80' : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-lg'}`}>
                  <div className="text-5xl md:text-6xl font-black mb-4">
                    <CountUp
                      end={stat.num}
                      duration={2000}
                      startOn={statsInView}
                      className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                    />
                    <span className="text-purple-400">{stat.suffix}</span>
                  </div>
                  <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                       style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <section className={`py-12 ${isDarkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Core <span className="text-purple-400">Values</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              These principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {valuesData.map((value, idx) => (
    <motion.div
      key={idx}
      className="group relative"
      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <div className={`relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] h-full text-center md:text-left ${isDarkMode ? 'bg-gray-900/50 border border-gray-800 hover:bg-gray-900/80' : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-lg'}`}>
        
        {/* Icon */}
        <div
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 mx-auto md:mx-0`}
        >
          <value.icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'}`}>
          {value.title}
        </h3>

        {/* Description */}
        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {value.description}
        </p>

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${value.color} blur-xl -z-10`}
        />
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose <span className="text-purple-400">Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${isDarkMode ? 'bg-gray-900/30 border border-gray-800 hover:bg-gray-900/50' : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-lg'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-950/30' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet Our <span className="text-purple-400">Founder</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Driven by passion and powered by innovation, our leadership shapes the future of digital excellence.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`relative rounded-3xl p-8 backdrop-blur-sm max-w-md text-center transition-all duration-500 ${isDarkMode ? 'bg-gray-900/50 border border-gray-800 group-hover:bg-gray-900/80' : 'bg-white border border-gray-200 group-hover:bg-gray-50 shadow-lg'}`}>
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors">
                <img
  src={founderImg}
  alt="Yashika Sharma"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Yashika Sharma</h3>
                <p className="text-purple-400 font-semibold mb-4 text-lg">CEO & Founder</p>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Visionary leader driving innovation in digital transformation with over 5 years of experience in cutting-edge technology solutions.
                </p>

                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => window.open('mailto:yr.itsolutions.pvtltd@gmail.com', '_blank')}
                    className="p-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors group/btn"
                  >
                    <Mail className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button 
                    onClick={() => window.open('https://www.linkedin.com/in/yashika-sharma1775/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                    className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors group/btn"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Achievements Section */}
      <section className={`py-10 md:py-20 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-100 to-white'}`}>

        {/* Geometric shapes background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600 transform rotate-45 rounded-lg" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-600 transform rotate-12 rounded-lg" />
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-600 transform -rotate-45 rounded-lg" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-lg mb-8">
              <Award className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold">FOUNDER'S JOURNEY</span>
            </div>

            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              LEADERSHIP <span className="text-purple-400">ACHIEVEMENTS</span>
            </h2>
          </motion.div>

          {/* Swiper Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className={`rounded-3xl overflow-hidden backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200 shadow-xl'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    
                     {/* Image Section */}
<div className="relative h-80 md:h-[500px] overflow-hidden flex-shrink-0">
  <img
    src={founderAchievements[currentSlide].image}
    alt={founderAchievements[currentSlide].title}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
</div>


                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                          ref={achievementStatsRef}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <h3 className={`text-3xl lg:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {founderAchievements[currentSlide].title}
                          </h3>
                          
                          <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {founderAchievements[currentSlide].description}
                          </p>

                       
                       {/* Statistics Grid */}
{founderAchievements[currentSlide].stats && (
  <div className="grid grid-cols-3 gap-6">
    {founderAchievements[currentSlide].stats.map((stat, idx) => (
      <div key={idx} className="text-center">
        <div className="text-3xl lg:text-4xl font-black mb-2">
          <CountUp
            end={stat.number}
            duration={1500}
            startOn={achievementStatsInView}
            className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
          />
          <span className="text-purple-400">{stat.suffix}</span>
        </div>
        <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
)}

                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all duration-300 group z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all duration-300 group z-10"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {founderAchievements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "bg-purple-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Start Your <span className="text-purple-400">Journey?</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's transform your vision into reality with innovative solutions that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => navigate('/contactus')}
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-6 h-6 group-hover:text-pink-200 transition-colors" />
                Get Started Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/meetingform')}
                className={`px-10 py-5 border-2 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm ${isDarkMode ? 'border-gray-600 hover:bg-gray-800/50' : 'border-gray-300 hover:bg-gray-100/50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;