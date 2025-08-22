import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ServicesSection = () => {
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
      img: "/images/ig5.jpg",
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
      img: "/images/ig8.jpg",
      title: "E-commerce Development",
      desc: "E-commerce development is the process of creating online stores where businesses can sell products or services. It includes designing the website, setting up secure payment systems, managing product listings, and optimizing the shopping experience.",
    },
    {
      img: "/images/ig9.jpg",
      title: "Digital Marketing",
      desc: "Digital marketing is the promotion of products or services using online channels like social media, search engines, email, and websites. It helps businesses reach their target audience, build brand awareness, and drive sales through strategies like SEO, content marketing, paid ads, and more. It's a smart way to grow online in today’s digital world.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="relative w-full bg-black py-16 px-4 md:px-12 text-center mt-15 overflow-hidden">
      {/* Label */}
      <div className="flex justify-center mb-4">
        <span className="relative inline-block px-5 py-2 text-sm font-medium border rounded-full text-white border-purple-600">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
          OUR SERVICES
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-10 text-white">
        A RANGE OF IT SERVICES <br /> DESIGNED FOR IMPACT
      </h2>

      {/* Active Service Title + Desc */}
      <div className="mb-10">
        <h3 className="text-4xl font-bold mb-2 text-purple-400">
          {services[activeIndex].title}
        </h3>
        <p className="text-gray-300 max-w-lg mx-auto">
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
        slidesPerView={3}
        loop={true}
        speed={2000} // smooth transition duration
        autoplay={{
          delay: 3500, // wait before switching
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
          el: ".custom-progressbar",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="max-w-5xl mx-auto"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`
                transition-all duration-1000 ease-in-out
                ${activeIndex === idx ? "scale-105 opacity-100 shadow-2xl" : "scale-90 opacity-50"}
                bg-white rounded-2xl overflow-hidden
              `}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Progress Bar */}
      <div className="custom-progressbar w-full max-w-4xl mx-auto mt-6 h-1 bg-gray-200 rounded-full relative">
        <span className="swiper-pagination-progressbar-fill block h-1 bg-purple-600 rounded-full"></span>
      </div>
    </section>
  );
};

export default ServicesSection;
