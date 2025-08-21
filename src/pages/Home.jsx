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
import TechStack from "./TechStack";

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

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
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
            className="w-[260px] sm:w-[270px] h-[200px] sm:h-[200px] 
                       overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-6"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Logos Marquee (Right → Left)
const LogosMarquee = ({ items }) => {
  return (
    <div className="w-full overflow-hidden bg-black py-8">
      <div className="flex items-center">
        <div className="flex marquee-track space-x-16">
          {items.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="brand"
              className="h-12 sm:h-16 object-contain"
            />
          ))}
          {/* duplicate set for smooth infinite scroll */}
          {items.map((logo, idx) => (
            <img
              key={`dup-${idx}`}
              src={logo}
              alt="brand"
              className="h-12 sm:h-16 object-contain"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 20s linear infinite;
        }
      `}</style>
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
      {/* Hero + Marquee Section */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[600px] bg-blue-600 rounded-full blur-[90px] opacity-40 pointer-events-none"></div>

      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-10 sm:py-14 lg:py-16 overflow-hidden">
        <MarqueeRow images={topImages} direction="left" />

        <div className="text-center max-w-4xl px-4 my-7 sm:mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold uppercase leading-snug text-white animate-float">
            Custom Product & <br />
            Software Development Focused on your Success
          </h1>
        </div>

        <MarqueeRow images={bottomImages} direction="right" />
      </div>

     

      {/* WHY CHOOSE US Section */}
      <PopInSection>
        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto bg-[#0f0f1a] rounded-2xl shadow-xl p-5 sm:p-8 text-center text-white why-choose-us">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#1a1a2e] px-2 py-1 rounded-full border border-gray-600">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
                Why Choose Us
              </h2>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="pb-8"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#1a1a2e] rounded-xl shadow-lg overflow-hidden transform hover:-rotate-2 hover:scale-105 transition-all duration-300 mx-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-44 sm:h-52 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </PopInSection>

       {/* ✅ Logos Moving Section */}
       <LogosMarquee items={logos} />

      {/* Clients Review */}
      <PopInSection>
        <div className="my-6 px-4 sm:px-6 lg:px-8">
          <ClientReview />
        </div>
      </PopInSection>

      {/* Tech Stack */}
      <PopInSection>
        <div className="my-2 px-4 sm:px-6 lg:px-8">
          <TechStack />
        </div>
      </PopInSection>

      {/* Pricing */}
      <PopInSection>
        <div className="my-2 px-2 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </PopInSection>

      {/* Contact */}
      <PopInSection>
        <div className="my-2 px-4 sm:px-3 lg:px-5">
          <ContactUs />
        </div>
      </PopInSection>

      {/* Swiper Styles */}
      <style>{`
        .why-choose-us .swiper-pagination {
          bottom: -5px !important;
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Home;
