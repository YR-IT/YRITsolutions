import React from "react";
// import Navbar from './Navbar'
import "../styles/home.css";
import IMGC from "../assets/web-development-services.gif";
import WhyChooseUs from "./WhyChooseUs";
// import Delivers from './Delivers'
import ClientReview from "./ClientReview";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full mb-12 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
        {/* Search Bar - Hidden by default */}
        <div className="hidden w-full justify-center mt-2 px-4">
          <div className="flex w-full max-w-2xl mx-auto items-center h-16 sm:h-12 bg-white home-search-main radius smtext px-4 sm:px-6">
            <input
              className="flex-1 outline-none border-none text-sm sm:text-base"
              placeholder="Enter Your Message"
            />
            <div className="btn ml-4 px-6 h-12 sm:h-10 flex items-center justify-center textsize smtext whitespace-nowrap sm:px-4 text-sm sm:text-base">
              Search
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-0">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
    {/* Text Content */}
    <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold home-sub-head leading-tight mb-6 uppercase">
        Custom Product & Software Development Focused On Your Success
      </h1>

      <div className="flex justify-center lg:justify-start">
        <Link 
          to="/contactus"
          className="btn text-lg sm:text-xl px-6 sm:px-8 h-12 sm:h-14 flex items-center justify-center button-home rounded-lg transition-all duration-300 hover:transform hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Image Content */}
    <div className="flex-1 max-w-lg order-1 lg:order-2 w-full pr-0 lg:pr-8">
      <div className="relative w-full">
        <img 
  src={IMGC} 
  alt="Web Development Services" 
  className="w-full object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
  style={{ borderRadius: '0px', boxShadow: 'none' }}
/>

      </div>
    </div>
  </div>
</div>

      </div>

      {/* Sections with proper spacing */}
      <div className="w-full">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
  <WhyChooseUs />
</div>

<div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
  <ClientReview />
</div>

<div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
  <Pricing />
</div>


        <div className="px-4 sm:px-6 lg:px-8">
          <ContactUs />
        </div>
      </div>

      {/* Commented out section */}
      {/*
        <Delivers />
      */}
    </>
  );
};

export default Home;
