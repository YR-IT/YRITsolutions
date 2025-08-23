// src/components/Industries.jsx
import React from "react";
import { Link } from "react-router-dom";


const Industries = () => {
  return (

      <div className="my-6 px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-[80rem] mx-auto bg-black rounded-2xl shadow-xl p-5 sm:p-8 text-white">
          {/* Heading */}
          <div className="text-left mb-6">
            <div className="inline-block relative">
              <div className="inline-flex items-center gap-2 px-6 py-3 mb-4 relative overflow-hidden">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <h2 className="text-xl font-extrabold text-white">INDUSTRIES</h2>
                <div className="absolute inset-0 border-2 border-white animate-border-rotate"></div>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-6 text-white">
              SECTOR-SAVVY SOLUTIONS <br /> FROM OUR EXPERTS
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* On-Demand Solutions */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/On-Demand-Solutions.svg"
                  alt="On-Demand Solutions"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                On-Demand Solutions
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Create instant access services that connect users with providers
                seamlessly.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Social Networking */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Social-Networking.svg"
                  alt="Social Networking"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Social Networking
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Build platforms for sharing, connecting, and engaging within
                communities online.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Food & Restaurant */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Food-Restaurant.svg"
                  alt="Food & Restaurant"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Food & Restaurant
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Design systems for ordering, reservations, and reviews to
                enhance dining.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Education & Training */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Education-Training.svg"
                  alt="Education & Training"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Education & Training
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Develop online platforms offering courses, certifications, and
                personalized learning experiences.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* eCommerce, Retail, and B2B */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Ecommerce-Retail-B2B.svg"
                  alt="eCommerce, Retail, and B2B"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                eCommerce, Retail, and B2B
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Create integrated solutions for online shopping and inventory
                management seamlessly.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Healthcare & Fitness */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Healthcare-Fitness.svg"
                  alt="Healthcare & Fitness"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Healthcare & Fitness
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Design tools for telehealth, appointments, and fitness tracking
                for wellness.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Architect Design */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Architect-Design.svg"
                  alt="Architect Design"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Architect Design
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Create innovative design solutions for architectural projects
                and spatial planning.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Service Expert */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Service-Expert.svg"
                  alt="Service Expert"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Service Expert
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Deliver professional consulting and expert services across
                various industries.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Legal Firms */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Legal-Firms.svg"
                  alt="Legal Firms"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Legal Firms
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Build comprehensive legal management systems for case tracking
                and client services.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Education Sector */}
            <div className="bg-black p-6 shadow-lg transform transition-all duration-500 group hover:bg-white min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card border border-white m-2 rounded-3xl industry-clip-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Education-Sector.svg"
                  alt="Education Sector"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300">
                Education Sector
              </h3>
              <p className="text-base text-gray-400 mt-3 group-hover:text-gray-700 transition-colors duration-500">
                Develop comprehensive educational platforms for schools,
                colleges, and training institutes.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="bg-black p-6 rounded-xl inline-block max-w-2xl mx-auto border border-white m-2">
              <h3 className="text-xl font-bold mb-3">
                Looking for a Software Development?
              </h3>
              <p className="text-gray-300 mb-4">
                Get your software designed and deployed with post deployment
                services.
              </p>
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

  );
};

export default Industries;
