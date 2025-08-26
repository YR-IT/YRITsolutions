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
            className="w-36 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-3 sm:mx-6"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
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

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-16">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm font-medium">
                  {stat.label}
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
