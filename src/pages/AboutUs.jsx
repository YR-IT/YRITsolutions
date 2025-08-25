import React, { useEffect, useState, useRef } from "react";
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
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Group01 from "../assets/Group01.png";

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
// Count up animation utility
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// remove the TypeScript interface, just use plain JS
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
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [statsRef, statsInView] = useInView(0.25, "0px 0px -20% 0px");

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
    { num: 2, label: "Years of Excellence", suffix: "+" },
    { num: 150, label: "Happy Clients", suffix: "+" },
    { num: 500, label: "Projects Delivered", suffix: "+" },
    { num: 24, label: "Hours Support", suffix: "/7" },
  ];

  const achievements = [
    "Industry-leading 99.9% client satisfaction rate",
    "Award-winning digital solutions across 20+ industries",
    "Zero-downtime deployment record for enterprise clients",
    "24/7 dedicated support with <2hr response time",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
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
      <section className="relative min-h-screen flex items-center justify-center px-10 pt-[60px]">

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
            className="text-8xl md:text-8xl font-black mb-8 leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              CRAFTING
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              THE FUTURE
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
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
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm">
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
      <section className="py-18 relative">
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

            <h2 className="text-4xl md:text-4xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
              WE ARE COMMITTED TO EMPOWERING BUSINESSES AND INDIVIDUALS WITH{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                INNOVATIVE SOFTWARE SOLUTIONS
              </span>{" "}
              THAT DRIVE GROWTH, EFFICIENCY, AND SUCCESS.
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
        className="py-20 bg-gray-950/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-center text-4xl md:text-5xl font-bold mb-16"
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
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 group-hover:scale-105">
                  <div className="text-5xl md:text-6xl font-black mb-4">
                    <CountUp
                      end={stat.num}
                      duration={2000}
                      startOn={statsInView}
                      className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                    />
                    <span className="text-purple-400">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
                  
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
      <section className="py-12 bg-gradient-to-b from-black via-gray-950 to-black">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-500 group-hover:scale-[1.02] h-full">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${value.color} blur-xl -z-10`} />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Choose <span className="text-purple-400">Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-950/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet Our <span className="text-purple-400">Founder</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm max-w-md text-center group-hover:bg-gray-900/80 transition-all duration-500">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors">
                  <img
                      src={Group01}
                    alt="Yashika Sharma"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">Yashika Sharma</h3>
                <p className="text-purple-400 font-semibold mb-4 text-lg">CEO & Founder</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Visionary leader driving innovation in digital transformation with over 5 years of experience in cutting-edge technology solutions.
                </p>

                <div className="flex justify-center gap-4">
                  <button className="p-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors group/btn">
                    <Mail className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors group/btn">
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Start Your <span className="text-purple-400">Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let's transform your vision into reality with innovative solutions that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-6 h-6 group-hover:text-pink-200 transition-colors" />
                Get Started Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-10 py-5 border-2 border-gray-600 rounded-2xl font-bold text-lg hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
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