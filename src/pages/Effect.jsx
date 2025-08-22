import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const ServicesSlider = () => {
  return (
    <div className="bg-white py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-gray-500 tracking-widest">OUR SERVICES</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          A RANGE OF IT SERVICES DESIGNED FOR IMPACT
        </h2>
        <p className="mt-4 text-lg font-semibold">Software as a Service</p>
        <p className="text-gray-500 max-w-xl mx-auto">
          Custom SaaS development solutions to optimize and innovate your processes.
        </p>
      </div>

      {/* Swiper Coverflow */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,       // no tilt
          stretch: -30,    // tighter spacing
          depth: 200,      // stronger 3D
          modifier: 1.5,   // intensity of effect
          scale: 0.85,     // shrink side slides
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-6xl"
      >
        {/* Slides */}
        <SwiperSlide className="w-64 h-64">
          <img
            src="/images/service1.jpg"
            alt="Service 1"
            className="rounded-xl w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <img
            src="/images/service2.jpg"
            alt="Service 2"
            className="rounded-xl w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <img
            src="/images/service3.jpg"
            alt="Service 3"
            className="rounded-xl w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64 h-64">
          <img
            src="/images/service4.jpg"
            alt="Service 4"
            className="rounded-xl w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
