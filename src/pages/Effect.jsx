import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useTheme } from '../contexts/ThemeContext';

const ServicesSection = () => {
  const { isDarkMode } = useTheme();
  
  const services = [
    {
      img: "/images/ig1.jpg",
      title: "Custom Web Development",
      desc: "Custom web development is the process of creating a website from scratch, tailored specifically to a business’s unique needs, goals, and brand identity. Unlike template-based sites, it offers full control over design, functionality, and performance. This approach ensures a faster, more secure, and scalable website with personalized features that grow with your business.",
    },
    {
      img: "/images/ig2.jpg",
      title: "Mobile App Development",
      desc: "Mobile app development is the process of creating software applications that run on mobile devices like smartphones and tablets.",
    },
    {
      img: "/images/ig3.jpg",
      title: "UI/UX Design",
      desc: "UI/UX design focuses on creating user-friendly and visually appealing digital experiences.",
    },
    {
      img: "/images/ig4.jpg",
      title: "Product Development",
      desc: "Product development is the complete process of bringing a new product to life—from idea to launch. It involves researching market needs, designing the product, building it, testing, and refining based on feedback. Whether it's a digital product like an app or a physical item, the goal is to create something valuable, functional, and aligned with customer expectations.",
    },
    {
      img: "../images/Cloud-Computing.jpeg",
      title: "Cloud Services",
      desc: "Cloud services provide on-demand access to computing resources like storage, servers, databases, and software over the internet.",
    },
    {
      img: "/images/ig6.jpg",
      title: "CRM & ERP Solutions",
      desc: "CRM (Customer Relationship Management) helps businesses manage interactions with customers, track leads, and improve sales and support.",
    },
    {
      img: "/images/ig7.jpg",
      title: "Maintenance & Support",
      desc: "Maintenance and support services ensure that websites, apps, or software run smoothly after launch. This includes fixing bugs, updating features, improving security, and providing ongoing technical help. Regular maintenance keeps your digital product secure, up-to-date, and performing at its best for users.",
    },
    {
      img: "/images/ecommerce.jpeg",
      title: "E-commerce Development",
      desc: "E-commerce development is the process of creating online stores where businesses can sell products or services. It includes designing the website, setting up secure payment systems, managing product listings, and optimizing the shopping experience.",
    },
    {
      img: "/images/digitalmarketing.webp",
      title: "Digital Marketing",
      desc: "Digital marketing is the promotion of products or services using online channels like social media, search engines, email, and websites. It helps businesses reach their target audience, build brand awareness, and drive sales through strategies like SEO, content marketing, paid ads, and more. It's a smart way to grow online in today’s digital world.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className={`relative w-full ${isDarkMode ? 'bg-black' : 'bg-gray-50'} py-16 px-4 md:px-12 text-center mt-15 overflow-hidden`}>
      {/* Label */}
      <div className="relative inline-flex items-center gap-2 px-6 py-3 mb-4 border-flow">
  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
  <h2 className={`text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Services</h2>
</div>


      {/* Heading */}
      <h2 className={`text-3xl md:text-6xl font-extrabold leading-tight mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        A RANGE OF IT SERVICES <br /> DESIGNED FOR IMPACT
      </h2>

      {/* Active Service Title + Desc */}
      <div className="mb-10">
        <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
          {services[activeIndex].title}
        </h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg mx-auto`}>
          {services[activeIndex].desc}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
  modules={[Autoplay, Pagination, EffectCoverflow]}
  effect="coverflow"
  coverflowEffect={{
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  }}
  centeredSlides={true}
  loop={true}
  speed={1200} // faster transition
  autoplay={{
    delay: 2000, // faster change
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    type: "progressbar",
    el: ".custom-progressbar",
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="max-w-5xl mx-auto"
  breakpoints={{
    0: {
      slidesPerView: 1, // Mobile
    },
    640: {
      slidesPerView: 2, // Tablet
    },
    1024: {
      slidesPerView: 3, // Desktop
    },
  }}
>
  {services.map((service, idx) => (
    <SwiperSlide key={idx}>
      <div
        className={`
          transition-all duration-700 ease-in-out
          ${activeIndex === idx ? "scale-105 opacity-100 shadow-2xl" : "scale-90 opacity-50"}
          bg-white rounded-2xl overflow-hidden
        `}
      >
        <img
  src={service.img}
  alt={service.title}
  className="
    w-full 
    h-40 sm:h-56 md:h-64 lg:h-72 
    object-contain sm:object-cover 
    rounded-xl
  "
/>

      </div>
    </SwiperSlide>
  ))}
</Swiper>


      {/* Custom Progress Bar */}
      <div className={`custom-progressbar w-full max-w-4xl mx-auto mt-6 h-1 ${isDarkMode ? 'bg-gray-200' : 'bg-gray-300'} rounded-full relative`}>
        <span className="swiper-pagination-progressbar-fill block h-1 bg-purple-600 rounded-full"></span>
      </div>
    </section>
  );
};

export default ServicesSection;
