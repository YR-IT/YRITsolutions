import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  const services = [
    {
      img: "https://via.placeholder.com/300x300?text=DevOps",
      title: "DevOps",
      desc: "Streamlined deployment and integration services for faster innovation.",
    },
    {
      img: "https://via.placeholder.com/300x300?text=Networking",
      title: "Networking",
      desc: "Robust IT infrastructure for seamless connectivity and communication.",
    },
    {
      img: "https://via.placeholder.com/300x300?text=AI",
      title: "AI Development",
      desc: "AI integration services for enhanced software experience and process automation.",
    },
    {
      img: "https://via.placeholder.com/300x300?text=Cloud",
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and management solutions for modern businesses.",
    },
    {
      img: "https://via.placeholder.com/300x300?text=Team",
      title: "IT Consulting",
      desc: "Expert IT consulting services for strategic technology adoption.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 text-center">
      {/* Label */}
      <div className="flex justify-center mb-4">
        <span className="relative inline-block px-4 py-1 text-sm font-medium border rounded-full">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
          OUR SERVICES
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
        A RANGE OF IT SERVICES <br /> DESIGNED FOR IMPACT
      </h2>

      {/* Subheading */}
      <h3 className="text-lg font-bold mb-2">AI Development</h3>
      <p className="text-gray-600 max-w-lg mx-auto mb-12">
        AI integration services for enhanced software experience and process automation.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <img src={service.img} alt={service.title} className="w-full h-64 object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
