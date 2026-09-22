// src/components/Industries.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";


const Industries = () => {
  const { isDarkMode } = useTheme();

  return (

      <div className="my-4 sm:my-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={`max-w-7xl mx-auto rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 ${
          isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
        }`}>
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block relative">
            <div className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-flow">
  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></span>
  <h2 className={`text-lg sm:text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Industries</h2>
</div>

            </div>
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 mb-4 sm:mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              SECTOR-SAVVY SOLUTIONS <br className="hidden sm:block" /> <span className="sm:hidden">FROM OUR EXPERTS</span><span className="hidden sm:inline">FROM OUR EXPERTS</span>
            </p>
          </div>

          {/* Industry Cards */}
          <div className="mt-6 sm:mt-8">
            {/* First 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">

            {/* Architect Design */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Architect-Design.svg"
                  alt="Architect Design"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                Architect Design
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Create innovative design solutions for architectural projects
                and spatial planning.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Legal Firms */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Legal-Firms.svg"
                  alt="Legal Firms"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                Legal Firms
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Build comprehensive legal management systems for case tracking
                and client services.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Education Sector */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Education-Sector.svg"
                  alt="Education Sector"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                Education Sector
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Develop comprehensive educational platforms for schools,
                colleges, and training institutes.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* eCommerce, Retail, and B2B */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Ecommerce-Retail-B2B.svg"
                  alt="eCommerce, Retail, and B2B"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                eCommerce, Retail, and B2B
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Create integrated solutions for online shopping and inventory
                management seamlessly.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Industry - Real Estate & Property */}
              <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
                isDarkMode 
                  ? 'bg-black border border-white hover:bg-white' 
                  : 'bg-gray-50 border border-gray-200 hover:bg-black'
              }`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img src="/icons/Real-Estate-Property.svg" alt="Real Estate & Property" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Real Estate & Property</h3>
                <p className={`text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-gray-700 transition-colors duration-500 text-center leading-relaxed ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Develop applications for buying, selling, and managing properties efficiently.</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

            {/* On-Demand Solutions */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/On-Demand-Solutions.svg"
                  alt="On-Demand Solutions"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                On-Demand Solutions
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Create instant access services that connect users with providers
                seamlessly.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Social Networking */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Social-Networking.svg"
                  alt="Social Networking"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                Social Networking
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Build platforms for sharing, connecting, and engaging within
                communities online.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>

            {/* Food & Restaurant */}
            <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
              isDarkMode 
                ? 'bg-black border border-white hover:bg-white' 
                : 'bg-gray-50 border border-gray-200 hover:bg-black'
            }`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                <img
                  src="/icons/Food-Restaurant.svg"
                  alt="Food & Restaurant"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                isDarkMode 
                  ? 'text-white group-hover:text-purple-600' 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                Food & Restaurant
              </h3>
              <p className={`text-sm sm:text-base mt-2 sm:mt-3 transition-colors duration-500 text-center leading-relaxed ${
                isDarkMode 
                  ? 'text-gray-400 group-hover:text-gray-700' 
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>
                Design systems for ordering, reservations, and reviews to
                enhance dining.
              </p>
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
            </div>
            </div>

            {/* Last 2 cards centered in same row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {/* Healthcare & Fitness */}
              <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
                isDarkMode 
                  ? 'bg-black border border-white hover:bg-white' 
                  : 'bg-gray-50 border border-gray-200 hover:bg-black'
              }`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img
                    src="/icons/Healthcare-Fitness.svg"
                    alt="Healthcare & Fitness"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Healthcare & Fitness
                </h3>
                <p className={`text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-gray-700 transition-colors duration-500 text-center leading-relaxed ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Design tools for telehealth, appointments, and fitness tracking
                  for wellness.
                </p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>

              {/* Service Expert */}
              <div className={`p-4 sm:p-6 shadow-lg transform transition-all duration-500 group min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col items-center justify-center overflow-hidden relative industry-card mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl industry-clip-card ${
                isDarkMode 
                  ? 'bg-black border border-white hover:bg-white' 
                  : 'bg-gray-50 border border-gray-200 hover:bg-black'
              }`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center transition-transform duration-500">
                  <img
                    src="/icons/Service-Expert.svg"
                    alt="Service Expert"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold group-hover:text-purple-600 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 group-hover:after:w-full after:transition-all after:duration-300 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Service Expert
                </h3>
                <p className={`text-sm sm:text-base mt-2 sm:mt-3 group-hover:text-gray-700 transition-colors duration-500 text-center leading-relaxed ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Deliver professional consulting and expert services across
                  various industries.
                </p>
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <div className={`p-4 sm:p-6 rounded-xl inline-block max-w-2xl mx-auto ${
              isDarkMode 
                ? 'bg-black border border-white' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Looking for a Software Development?
              </h3>
              <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get your software designed and deployed with post deployment
                services.
              </p>
              <Link
                to="/contactus"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base rounded-xl 
                  bg-gradient-to-r from-purple-500 via-purple-500 to-violet-500 text-white
                  shadow-lg shadow-purple-500/30
                  transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-xl
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
