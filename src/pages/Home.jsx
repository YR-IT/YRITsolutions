import React, { useEffect } from "react";
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

const topImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img15.jpg",
];

const bottomImages = [
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
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

// Reusable section wrapper with pop animation
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
        {images.map((src, idx) => (
          <div
            key={`first-${idx}`}
            className="w-[300px] h-[180px] overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-3"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        {images.map((src, idx) => (
          <div
            key={`second-${idx}`}
            className="w-[300px] h-[180px] overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-3"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  // 👇 Scroll to top when Home mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // change to "auto" if you want instant
    });
  }, []);

  return (
    <>
      {/* Hero + Marquee Section */}
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden">
        <MarqueeRow images={topImages} direction="left" />
        <div className="text-center max-w-4xl px-4 my-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold uppercase leading-tight text-white">
            Custom Product & <br />
            Software Development Focused on your Success
          </h1>
          <div className="mt-10">
            <Link
              to="/contactus"
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg text-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <MarqueeRow images={bottomImages} direction="right" />
      </div>

      {/* WHY CHOOSE US Section */}
      <PopInSection>
        <div className="mb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-[#0f0f1a] rounded-3xl shadow-xl p-8 sm:p-12 text-center text-white why-choose-us">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#1a1a2e] px-4 py-1 rounded-full border border-gray-600">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
                Why Choose Us
              </h2>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#1a1a2e] rounded-xl shadow-lg overflow-hidden transform hover:-rotate-2 hover:scale-105 transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6 text-center">
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

      {/* Other sections */}
      <PopInSection>
        <div className="mb-20 px-4 sm:px-6 lg:px-8">
          <ClientReview />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="mb-20 px-4 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </PopInSection>

      <PopInSection>
        <div className="px-4 sm:px-6 lg:px-8">
          <ContactUs />
        </div>
      </PopInSection>

      {/* Swiper Pagination Dots Styling */}
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
      `}</style>
    </>
  );
};

export default Home;
