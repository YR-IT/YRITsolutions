import React from "react";
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
import Effect from "./Effect";
import Logo from "./Logo";
import Industries from "./Industries";
import ContactButton from "../components/ContactButton";
import ContactWidget from "../components/ContactWidget";

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
            className="w-48 sm:w-72 md:w-80 h-32 sm:h-48 md:h-56 overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-3 sm:mx-6"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col items-center pt-2 pb-6 overflow-hidden relative">
        <MarqueeRow images={topImages} direction="left" />

        {/* Social Media Icons - Positioned on the left side vertically */}
        <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col gap-2 sm:gap-3">
            {/* Instagram */}
            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1 cursor-pointer' onClick={()=>{window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* LinkedIn */}
            <div className='rounded-sm hover:scale-110 transition-transform duration-200 p-1 cursor-pointer' onClick={()=>{window.open("https://www.linkedin.com/in/yashika-sharma1775?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Facebook */}
            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1 cursor-pointer' onClick={()=>{window.open("https://www.facebook.com/share/1BKLsRrBDV/", "_blank")}}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl px-6 sm:px-8 md:px-10 my-6 sm:my-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold uppercase leading-snug text-white animate-float">
            Custom Product & <br />
            Software Development Focused on your Success
          </h1>
        </div>

        <MarqueeRow images={bottomImages} direction="right" />
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-16">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '300+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/70 transition-all duration-500 hover:transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <Logo />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <Effect />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-2 px-6 sm:px-10 md:px-16 lg:px-20">
          <Industries />
        </div>
      </PopInSection>


      <PopInSection>
        <div className="my-2 px-6 sm:px-10 md:px-16 lg:px-20">
          <Pricing />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
          <ClientReview />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="my-6 px-6 sm:px-4 md:px-4 lg:px-4">
          <ContactButton />
        </div>
      </PopInSection>

      {/* Contact Widget */}
      <ContactWidget />




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
.0000        .industry-clip-card {
          clip-path: polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%);
          transition: clip-path 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .industry-clip-card:hover, .industry-clip-card:focus, .industry-clip-card:active {
          clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 100%, 0 100%);
        }
        .industry-card:hover img {
          animation: bounce 0.6s ease-in-out;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
};

export default Home;
