import React, { useEffect, useRef, useState } from 'react';
import futuristicHero from '../assets/storyimg.jpg';
import G1 from "../assets/Group01.png";     
import G4 from "../assets/IconBox3.png";    
import G5 from "../assets/IconBox4.png";    
import { Link } from 'react-router-dom';
import FounderAnimation from './FounderAchievement';
import HaveAQues from './HaveAQues';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

function useInView(threshold = 0.25, rootMargin = '0px 0px -10% 0px') {
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

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function CountUp({ end = 0, duration = 1200, startOn = false, className = '' }) {
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

  return <span className={className}>{new Intl.NumberFormat().format(val)}</span>;
}

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [statsRef, statsInView] = useInView(0.25, '0px 0px -20% 0px');

  const valuesData = [
    { title: "Commitment", description: "Going beyond expectations with precision, speed, and unmatched dedication.", icon: "🚀" },
    { title: "Ownership", description: "Full accountability from start to finish — your vision is our mission.", icon: "🛡️" },
    { title: "Innovation", description: "We merge bold creativity with cutting-edge tech for future-ready solutions.", icon: "💡" },
    { title: "Transparency", description: "Every step, every detail — clear, honest, and open communication.", icon: "🔍" }
  ];

  const statsData = [
    { num: 1, label: "Year Since Founded" },
    { num: 50, label: "Happy Clients" },
    { num: 300, label: "Projects Completed" }
  ];

  return (
    <div className="bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="relative py-28 px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
        <motion.div className="lg:w-1/2 z-10" data-aos="fade-right"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Empowering Businesses with Modern Tech
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl text-justify">
YR IT SOLUTIONS is a results-driven tech company that empowers businesses through custom web and mobile apps, digital marketing, and AI-powered tools. We don’t rely on tradition — we solve real problems with smart, scalable, and user-focused tech that delivers clear results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-lg font-medium">
            <Link
              to="/ourservices"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              Explore Services
            </Link>
            <Link
              to="/contactus"
              className="px-8 py-4 border border-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2 flex justify-center z-10" data-aos="fade-left"
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <img
            src={futuristicHero}
            alt="Our Story"
            className="rounded-xl shadow-2xl w-full max-w-xl object-cover border border-gray-700"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-gray-950"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl font-bold mb-12 text-white">Our Impact in Numbers</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <CountUp
                end={stat.num}
                duration={1500}
                startOn={statsInView}
                className="text-5xl font-extrabold text-white"
              />
              <p className="text-gray-400 mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Founder Achievements */}
      <FounderAnimation />

      {/* Core Values */}
{/* Core Values */}
<section className="py-16 bg-black">
  <h2 className="text-center text-5xl font-bold mb-16 text-white">Our Core Values</h2>
  <div className="flex flex-wrap justify-center gap-12 px-6">
    {valuesData.map((val, idx) => (
      <motion.div
        key={idx}
        className="relative bg-gray-900/70 border border-gray-700 rounded-2xl p-8 w-80 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-5xl mb-4 text-purple-400 cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {val.icon}
        </motion.div>
        <motion.h3
          className="text-2xl font-semibold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
        >
          {val.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-sm"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.2 + 0.4 }}
        >
          {val.description}
        </motion.p>
        <motion.div
          className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 + 0.5 }}
        ></motion.div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Founder Section */}
      <section className="py-20 bg-black">
        <h2 className="text-center text-4xl font-bold mb-12 text-white">Meet the Founder</h2>
        <div className="flex justify-center">
          <motion.div
            className="relative p-[2px] rounded-2xl bg-gray-800/50 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-gray-900/80 backdrop-blur-lg p-4 w-[22rem] max-w-[90vw] text-center shadow-2xl border border-gray-700">
              <img
                src={G1}
                alt="Founder"
                className="rounded-2xl w-full h-[24rem] object-cover mb-5 shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold text-white mb-1">Yashika Sharma</h3>
              <p className="text-xl text-gray-400 mb-4">CEO & Founder</p>
              <div className="flex justify-center gap-4 mt-4">
                <img
                  src={G4}
                  alt="Email"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => (window.location.href = "mailto:yashikasharma1775@gmail.com")}
                />
                <img
                  src={G5}
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => (window.location.href = "https://www.linkedin.com/in/yashika-sharma-aa7b26206/")}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <HaveAQues />
    </div>
  );
};

export default AboutUs;
