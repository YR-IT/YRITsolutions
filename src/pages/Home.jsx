import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ClientReview from "./ClientReview";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import Loader from "../components/Loader";
import Effect from "./Effect";
import Logo from "./Logo";


const topImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

const bottomImages = [
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
];

const services = [
  {
    title: "SDE Tradition",
    description:
      "Simplified campaign management with one view and regular updates. Pause, start or uplift with a single click. Manage your growth and results on the go.",
    image: "/images/img11.jpg",
  },
  {
    title: "Dashboard",
    description:
      "We have designed a set of robust strategies that are delivered for all our performance campaigns. We also keep up-to-date with new technologies, to always be a step ahead.",
    image: "/images/img12.jpg",
  },
  {
    title: "Innovation",
    description:
      "We have revolutionized traditional marketing strategies. We offer result-oriented marketing campaigns so you achieve your goals faster.",
    image: "/images/img13.jpg",
  },
  {
    title: "Data Driven",
    description:
      "We collate and analyze your data, for meaningful insights to develop tailored user acquisition strategies. Deep dive into your data and unlock hyper-growth.",
    image: "/images/img14.jpg",
  },
];

const PopInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const MarqueeRow = ({ images, direction }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {images.concat(images).map((src, idx) => (
          <div
            key={idx}
            className="w-[220px] sm:w-[260px] h-[350px] sm:h-[220px] overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-8"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!showLoader) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showLoader]);

  if (showLoader) {
    return <Loader onFinish={() => setShowLoader(false)} />;
  }

  return (
    <>
      
      <div className="bg-black text-white flex flex-col items-center pt-2 pb-6 overflow-hidden">


        <MarqueeRow images={topImages} direction="left" />

        <div className="text-center max-w-4xl px-6 sm:px-8 md:px-10 my-6 sm:my-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold uppercase leading-snug text-white animate-float">
            Custom Product & <br />
            Software Development Focused on your Success
          </h1>
        
        </div>

        <MarqueeRow images={bottomImages} direction="right" />
      </div>


      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <Logo />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <ClientReview />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <Effect />
        </div>
      </PopInSection>


    

      {/* Industries Section */}
      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-[80rem] mx-auto bg-[#0f0f1a] rounded-2xl shadow-xl p-5 sm:p-8 text-white">
            <div className="text-left mb-6">
              <div className="inline-block relative">
                <div className="inline-flex items-center gap-2 px-6 py-3 mb-4 relative overflow-hidden">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  <h2 className="text-xl font-extrabold text-white">
                    INDUSTRIES
                  </h2>
                  <div className="absolute inset-0 border-2 border-white animate-border-rotate"></div>
                </div>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-6 text-white">
                SECTOR-SAVVY SOLUTIONS <br /> FROM OUR EXPERTS
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {/* Industry - Real Estate & Property */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon6.png" alt="Real Estate" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Real Estate & Property</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Develop applications for buying, selling, and managing properties efficiently.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - On-Demand Solutions */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon7.png" alt="On-Demand Solutions" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">On-Demand Solutions</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Create instant access services that connect users with providers seamlessly.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Social Networking */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon8.png" alt="Social Networking" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Social Networking</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Build platforms for sharing, connecting, and engaging within communities online.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Food & Restaurant */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon10.png" alt="Food & Restaurant" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Food & Restaurant</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Design systems for ordering, reservations, and reviews to enhance dining.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Banking, Finance, & Insurance */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon11.png" alt="Banking & Finance" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Banking, Finance, & Insurance</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Implement secure solutions for transactions, investments, and claims management efficiently.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Education & Training */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon12.png" alt="Education & Training" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Education & Training</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Develop online platforms offering courses, certifications, and personalized learning experiences.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - eCommerce, Retail, and B2B */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon9.png" alt="eCommerce & Retail" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">eCommerce, Retail, and B2B</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Create integrated solutions for online shopping and inventory management seamlessly.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Healthcare & Fitness */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon13.png" alt="Healthcare & Fitness" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Healthcare & Fitness</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Design tools for telehealth, appointments, and fitness tracking for wellness.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Media & Entertainment */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon1.png" alt="Media & Entertainment" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Media & Entertainment</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Build platforms for streaming, gaming, and engaging content experiences effectively.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Industry - Transport & Automotive */}
              <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/icon2.png" alt="Transport & Automotive" className="w-10 h-10 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">Transport & Automotive</h3>
                <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">Develop apps for ride-sharing, navigation, and vehicle maintenance solutions.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <div className="bg-black p-6 rounded-xl inline-block max-w-2xl mx-auto border border-white m-2">
                <h3 className="text-xl font-bold mb-3">Looking for a Software Development?</h3>
                <p className="text-gray-300 mb-4">Get your software designed and deployed with post deployment services.</p>
                <Link
                  to="/contactus"
                  className="inline-block px-6 py-3 font-semibold text-base rounded-xl 
                           bg-gradient-to-r from-purple-500 via-purple-500 to-violet-500 text-white
                           shadow-lg shadow-purple-500/30
                           transition-all duration-300 hover:scale-110 hover:shadow-xl
                           hover:shadow-pink-500/40"
                >
                  Request a Callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PopInSection>

    
      <PopInSection>
        <div className="my-2 px-6 sm:px-10 md:px-16 lg:px-20">
          <Pricing />
        </div>
      </PopInSection>

      
      <PopInSection>
        <div className="my-2 px-6 sm:px-10 md:px-16 lg:px-20">
          <ContactUs />
        </div>
      </PopInSection>

      
      <style>{`
        .why-choose-us .swiper-pagination {
          bottom: -5px !important;
        }
        .why-choose-us .swiper-pagination-bullet {
          background: #888 !important;
          opacity: 0.8;
        }
        .why-choose-us .swiper-pagination-bullet-active {
          background: #a855f7 !important;
          opacity: 1;
        }
        .industry-clip-card {
          clip-path: polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%);
          transition: clip-path 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .industry-clip-card:hover, .industry-clip-card:focus, .industry-clip-card:active {
          clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </>
  );
};

export default Home;