<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/storyimg.jpg'
import IMG2 from '../assets/Image4.png'
import IMG3 from '../assets/circle-check.png'
import IMG4 from '../assets/flag.png'
import IMG5 from '../assets/bulb_fill.png'
import IMG6 from '../assets/people-multiple.png'
import G1 from "../assets/Group01.png"
import G2 from "../assets/IconBox.png"
import G3 from "../assets/IconBox2.png"
import G4 from "../assets/IconBox3.png"
import G5 from "../assets/IconBox4.png"
import "../styles/AboutUs.css"
import AnimatedNumbers from "react-animated-numbers";
import ContactUs from './ContactUs'
import HaveAQues from './HaveAQues'
import { Link } from 'react-router-dom'
import Imageslide from './achivements';

const AboutUs = () => {

    // ✅ Scroll to top when this page loads
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // change to "auto" for instant jump
        });
    }, []);

    const data = [
        {
            title: "Commitment",
            description: "We go the extra mile to exceed expectations through timely delivery, consistent quality, and impactful results.",
            img: IMG3
        },
        {
            title: "Ownership",
            description: "We take responsibility, align with your goals, and deliver with precision and accountability.",
            img: IMG4
        },
        {
            title: "Innovation",
            description: "We embrace new technologies and bold thinking to create forward-looking, standout solutions.",
            img: IMG5
        },
        {
            title: "Transparency",
            description: "We value honest communication, clear processes, and keep clients informed at every step.",
            img: IMG6
        }
    ]
  
    return (
        <>
            <div className='max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                {/* Desktop Section */}
                <div className='max-[779px]:hidden max-[780px]:items-center h-[524px] max-[780px]:h-[100vh] max-[520px]:h-[70vh] pt-[5rem] max-[981px]:pt-1 max-[1100px]:w-[90%] max-[860px]:w-[97%]'>
                    <div className='h-[431px] flex justify-around items-center max-[780px]:flex-col max-[780px]:items-center'>
                        <div className='h-[231px] w-[674px] max-[600px]:w-[98%] max-[600px]:h-[auto] min-[780px]:hidden'>
                            <img src={IMG1} alt="" className="h-[220px] w-auto object-contain" />
                        </div>
                        <div className='h-[431px] w-[468px] max-sm:w-[100%] max-[1100px]:ml-8 max-[780px]:ml-0'>
                            <div className='About-sub-h font-bold max-[630px]:text-[25px] max-sm:text-center w-full'>
                                The Story of YR IT SOLUTIONS
                            </div>
                            <div className="min-[630px]:About-sub1 mt-[1.4rem] pricingM-subpart3 text-base max-[500px]:text-sm max-[400px]:text-xs">
                                YR IT SOLUTIONS is a results-driven tech company that empowers businesses through custom web and mobile apps, digital marketing, and AI-powered tools.
                                We don’t rely on tradition — we solve real problems with smart, scalable, and user-focused tech that delivers clear results.
                            </div>
                            <div className='flex gap-10 mt-[3rem]'>
                                <div className='btn radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex'>
                                    <Link to="/ourservices">
                                        Explore our Services
                                    </Link>
                                </div>
                                <div className='text-[var(--theme)] border-[var(--theme)] border-[1px] radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex justify-center items-center'>
                                    <Link to="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='h-[431px] w-[674x] max-[600px]:w-[98%] max-[600px]:h-[auto] max-[780px]:hidden'>
                            <img src={IMG1} alt="" className='w-[600px] h-auto max-[600px]:w-[90%]' />
                        </div>
                    </div>
                </div>

                {/* Mobile View Section */}
                <div className='px-2 min-[780px]:hidden flex flex-col items-center text-center'>
                    <div className='max-[600px]:w-[98%] max-[600px]:h-[auto] min-[780px]:hidden flex justify-center'>
                        <img src={IMG1} alt="" className='w-[400px] max-[600px]:w-[90%]' />
                    </div>
                    <div>
                        <div className='w-full flex justify-center'>
                            <div className='About-sub-h max-[780px]:text-center max-[780px]:mx-auto max-[630px]:text-[25px] mt-[1rem]'>
                                The Story of YR IT SOLUTIONS
                            </div>
                        </div>
                        <div className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-[90%] mx-auto">
                            YR IT SOLUTIONS is a results-driven tech company that empowers businesses
                            through custom web and mobile apps, digital marketing, and AI-powered tools.
                            We don’t rely on tradition — we solve real problems with smart, scalable,
                            and user-focused tech that delivers clear results.
                        </div>
                        <div className='flex justify-center gap-4 mt-[3rem]'>
                            <div className='btn radius px-[16px] z-[9999] rounded-[8px] h-[43px] w-[fit-content] flex'>
                                <Link to="/ourservices">
                                    Explore our Services
                                </Link>
                            </div>
                            <div className='z-[9999] text-[var(--theme)] border-[var(--theme)] border-[1px] radius px-[16px] rounded-[8px] h-[43px] w-[fit-content] flex justify-center items-center'>
                                <Link to="/contactus">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Facts Section */}
                <div className='max-[780px]:mt-[0rem] max-[630px]:mt-[0rem] max-[513px]:mt-[-4rem]'>
                    <div className='heading text-center mt-[6rem] min-[521px]:mt-0 min-[640px]:mt-[1rem] min-[780px]:mt-[1rem] min-[976px]:mt-[6rem] min-[630px]:mt-[6rem] max-[630px]:text-[25px]'>
                        Some Facts About Us
                    </div>
                    <div className='About-sub4 text-[10px]'>
                        Here are some quick facts about how we consistently deliver exceptional, creative solutions for our clients.
                    </div>
                    <div className='flex justify-center items-center gap-32 mt-10 animatedstats-main'>
                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={1}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>&nbsp; year</span>
                            </div>
                            <div className='About-sub-56'>
                                Founded since 2024
                            </div>
                        </div>

                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={50}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>+</span>
                            </div>
                            <div className='About-sub-56'>
                                Clients
                            </div>
                        </div>

                        <div className='About-box-54 flex flex-col justify-center items-center'>
                            <div className='About-sub55 flex'>
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 5.3,
                                    })}
                                    animateToNumber={300}
                                    fontStyle={{
                                        fontSize: 50,
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        textAlign: "center",
                                    }}
                                />
                                <span className='text-[var(--theme)]'>+</span>
                            </div>
                            <div className='About-sub-56'>
                                Projects Delivered
                            </div>
                        </div>
                    </div>
                </div>

                {/* Founder's Achievements */}
                <div className='w-full text-center mb-10 mt-20 px-4'>
                    <div className='About-sub-h text-[32px] max-[630px]:text-[25px]'>
                        Founder's Achievements
                    </div>
                </div>
                <div className='w-full flex justify-center items-center px-4'>
                    <div className='w-[80%] max-w-[800px]'>
                        <Imageslide />
                    </div>
                </div>

                {/* Values */}
                <div className="mt-10">
                    <div className='heading max-[630px]:text-[25px]'>
                        OUR VALUES
                    </div>
                    <div className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
                        At YR IT SOLUTIONS, our values drive every decision and action — from internal collaboration to client partnerships. We are committed to ethics, integrity, and excellence, ensuring every solution we deliver is built with purpose and professionalism.
                    </div>
                    <div className='flex justify-center items-center gap-[1.5rem] max-[1236px]:gap-[0.4rem] max-[900px]:gap-[1.5rem] mt-10 animatedstats-main '>
                        {data.map((value, index) => (
                            <div key={index} className='w-[291px] max-[1236px]:w-[291px] h-[448px] max-[600px]:h-[100%] max-[600px]:w-[260px] max-[600px]:py-4 About-box-border flex flex-col justify-center items-center'>
                                <div className='flex justify-start items-start w-[80%] mb-3'>
                                    <div className='h-[50px] w-[50px] max-[600px]:h-[40px] max-[600px]:w-[40px] text-left float-left'>
                                        <img src={value.img} alt="" className='w-[30px] h-[30px] float-left text-left max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center mb-3'>
                                    <div className='w-[229px] text-[36px] card-heading-aboutus max-[1236px]:text-[33px]' style={{
                                        fontWeight: "700",
                                        lineHeight: "56px",
                                        textAlign: "left",
                                    }}>
                                        {value.title}
                                    </div>
                                    <div className='About-sub43 card-heading-aboutus2 font-[400] w-[219px] text-[20px] text-justify max-[1236px]:text-[19px]'>
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founding Member */}
                <div className='mt-[6rem] max-[640px]:mt-[3rem]'>
                    <div className='heading'>
                        The Founding Member YR IT SOLUTIONS
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div className='w-[310px] h-[447px] bg-white border-[2px] border-[#DCDCDC] flex flex-col justify-center items-center'>
                            <div className='w-[249px] h-[280px]'>
                                <img src={G1} alt="" className='rounded-lg w-[249px] h-[260px]' />
                            </div>
                            <div className='px-7 flex flex-col justify-center items-center mt-0'>
                                <div style={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    lineHeight: "30px",
                                    textAlign: "center",
                                }}>
                                    Yashika
                                </div>
                                <div className='mt-2' style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    textAlign: "center",
                                }}>
                                    CEO, Founder
                                </div>
                                <div className='flex gap-5 justify-center mt-5 items-center cursor-pointer'>
                                    <img src={G4} alt="" onClick={() => { window.location.href = "mailto:yashikasharma1775@gmail.com" }} />
                                    <img src={G5} alt="" onClick={() => { window.location.href = "https://www.linkedin.com/in/yashika-sharma-aa7b26206/" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[6rem]'>
                    <HaveAQues />
                </div>
            </div>
        </>
    )
>>>>>>> 1661678 (changes)
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
