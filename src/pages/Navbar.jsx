import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, X, Menu } from "lucide-react";
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import Logo from '../assets/YRLogo.png';

// Menu data
const menuData = {
  COMPANY: [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact us', href: '/contactus' },
    { label: 'Team', href: '/team' },
    { label: 'Products', href: '/products' },
    { label: 'Careers', href: '/careers' },
  ],
  SERVICES: [
    { label: 'Our Services', href: '/ourservices' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  SOLUTIONS: [
    { label: 'Web Apps', href: '/webapps' },
    { label: 'Mobile Apps', href: '/mobileapps' },
    { label: 'UI/UX', href: '/uiuxdesign' },
    { label: 'Digital Marketing', href: '/digitalmarketing' },
    { label: 'Cyber Security', href: '/cybersecurity' },
  ],
  'HIRE RESOURCE': [
    { label: 'Hire Developers', href: '/ourservices#hire-dev' },
    { label: 'Hire Designers', href: '/ourservices#hire-design' },
    { label: 'Schedule Meeting', href: '/meetingform' },
  ],
};

const Navbar = ({ state, setState, setshow, show }) => {
  const [loc, changeloc] = React.useState('/');
  const [activeSection, setActiveSection] = React.useState('COMPANY');
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    changeloc(window.location.pathname);
    if (loc === '/') setState(0);
    if (loc === '/aboutus') setState(1);
    if (loc === '/ourservices') setState(2);
    if (loc === '/pricing') setState(3);
    if (loc === '/contactus') setState(4);
    if (loc === '/portfolio') setState(10);
    if (loc === '/blog') setState(11);
  }, [loc, setState]);

  return (
    <>
      {/* Enhanced Overlay with Backdrop Blur */}
      <div
        className={`fixed inset-0 transition-all duration-500 z-[9998] ${
          show 
            ? 'opacity-100 backdrop-blur-3xl bg-black/30 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setshow(false)}
      />

      {/* Main Navbar - Floating Glassmorphism Design */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-slate-900/90 backdrop-blur-4xl shadow-2xl shadow-blue-900/20 border-b border-white/10' 
            : 'bg-black/60 backdrop-blur-3xl'
        }`}
        style={{
          transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        }}
      >
        <div className="max-w-8xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
            
            {/* Logo with Enhanced Animation */}
            <Link 
              to="/" 
              onClick={() => setState(0)}
              className="group relative z-10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                {/* Backdrop blur container for logo visibility */}
                <img
                  src={Logo}
                  alt="YR Logo"
                  className="h-10 sm:h-12 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-110"></div>
              </div>
            </Link>

            {/* Desktop Navigation with Enhanced Styling */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/aboutus' },
                { label: 'Services', href: '/ourservices' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contactus' },
                { label: 'Blog', href: '/blog' }
              ].map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-white bg-white/10 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    if (item.href === '/') setState(0);
                    if (item.href === '/aboutus') setState(1);
                    if (item.href === '/ourservices') setState(2);
                    if (item.href === '/pricing') setState(3);
                    if (item.href === '/contactus') setState(4);
                    if (item.href === '/portfolio') setState(10);
                    if (item.href === '/blog') setState(11);
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {location.pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Toggle with Enhanced Styling */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* CTA Button with Magnetic Effect */}
              <button
                className="hidden md:flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-0.5 group relative overflow-hidden text-sm"
                onClick={() => (window.location.href = '/meetingform')}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">Let's Discuss</span>
                <ArrowRight className="relative z-10 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Enhanced Hamburger Menu */}
              <button
                className="relative p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-3xl transition-all duration-300 hover:bg-white/20 hover:scale-110 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setshow(!show)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 transition-all duration-300 ${show ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <Menu className="w-6 h-6 text-white" />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${show ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                    <X className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Magnetic hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[10000] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          show ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Animated Background */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${
            isDarkMode 
              ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'
              : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
          }`}
          style={{
            backgroundImage: isDarkMode ? `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
            ` : `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
            `
          }}
        />

        {/* Animated Grid Pattern */}
        <div 
          className={`absolute inset-0 opacity-5 transition-all duration-1000 ${
            show ? 'scale-100 rotate-0' : 'scale-110 rotate-2'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Main Content Container */}
        <div 
          className={`relative h-full overflow-hidden transition-all duration-700 ease-out ${
            show ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Header Section */}
          <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8 border-b border-white/10">
            
            {/* Logo with Glow Effect */}
          
          
              <div className="relative">
             
              </div>
       

            {/* Enhanced Close Button */}
            <button
              className="group relative p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:rotate-90 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setshow(false)}
              aria-label="Close menu"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Main Menu Content */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-120px)]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 h-full">
                
                {/* Left Navigation Sections */}
                <div className="lg:col-span-2 mb-8 lg:mb-0">
                  <h2 className={`text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8 font-semibold ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Navigation
                  </h2>
                  
                  <div className="space-y-2">
                    {Object.keys(menuData).map((section, idx) => (
                      <div key={section} 
                        className={`transition-all duration-300 ${show ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                      >
                        <button
                          onClick={() => setActiveSection(section)}
                          className={`group w-full text-left p-4 sm:p-6 rounded-2xl relative transition-all duration-500 ease-out overflow-hidden min-h-[60px] ${
                            activeSection === section
                              ? isDarkMode
                                ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-white shadow-2xl shadow-blue-500/20 border border-white/20'
                                : 'bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 text-gray-900 shadow-2xl shadow-blue-500/10 border border-gray-300'
                              : isDarkMode
                                ? 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 border border-transparent hover:border-gray-200'
                          }`}
                        >
                          {/* Background Gradient Animation */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 transition-all duration-500 ${
                            activeSection === section ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`} />
                          
                          {/* Active Indicator Bar */}
                          {activeSection === section && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-r-full animate-pulse" />
                          )}

                          <div className="relative flex items-center justify-between">
                            <div>
                              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-1">
                                {section}
                              </h3>
                              <p className={`text-xs capitalize ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {menuData[section].length} items
                              </p>
                            </div>
                            
                            <ArrowRight 
                              className={`w-4 sm:w-5 h-4 sm:h-5 transition-all duration-300 ${
                                activeSection === section 
                                  ? isDarkMode
                                    ? 'translate-x-0 text-white'
                                    : 'translate-x-0 text-gray-900'
                                  : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                              }`} 
                            />
                          </div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Menu Items */}
                <div className="lg:col-span-3 mb-8 lg:mb-0">
                  <h2 className={`text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8 font-semibold ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {activeSection.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                    {menuData[activeSection].map((item, index) => (
                      <div
                        key={item.label}
                        className={`transition-all duration-500 flex ${show ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: `${index * 0.05 + 0.4}s` }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setshow(false)}
                          className={`group relative flex flex-col justify-between p-4 sm:p-6 rounded-2xl backdrop-blur-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl h-[120px] w-full ${
                            isDarkMode
                              ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-blue-500/20 hover:border-white/20'
                              : 'bg-gray-900/5 border border-gray-200 hover:bg-gray-100/50 hover:shadow-blue-500/10 hover:border-gray-300'
                          }`}
                        >
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="relative">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                                isDarkMode
                                  ? 'text-white group-hover:text-blue-200'
                                  : 'text-gray-900 group-hover:text-blue-600'
                              }`}>
                                {item.label}
                              </h3>
                              <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`} />
                            </div>
                            
                            <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                              isDarkMode
                                ? 'text-gray-400 group-hover:text-gray-300'
                                : 'text-gray-600 group-hover:text-gray-700'
                            }`}>
                              {item.label === 'Cyber Security' 
                                ? 'Explore our cybersecurity solutions' 
                                : `Explore our ${item.label.toLowerCase()}`}
                            </p>

                            {/* Bottom Gradient Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Section */}
                  <div className={`mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 transition-all duration-700 pb-8 ${show ? 'animate-fade-in-up' : ''} ${
                    isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'
                  }`} style={{ animationDelay: '0.6s' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      
                      {/* Newsletter Signup */}
                      <div className={`group p-6 sm:p-8 rounded-3xl backdrop-blur-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/20 hover:shadow-blue-500/30'
                          : 'bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-200 hover:shadow-blue-500/15'
                      }`}>
                        <h3 className={`font-bold text-base sm:text-lg mb-3 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Stay Updated</h3>
                        <p className={`text-xs sm:text-sm mb-4 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Get the latest updates and insights.</p>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <input 
                            type="email" 
                            placeholder="Enter your email"
                            className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-300 text-sm ${
                              isDarkMode
                                ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20'
                                : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500'
                            }`}
                          />
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-300 min-h-[44px] flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className={`group p-6 sm:p-8 rounded-3xl backdrop-blur-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/20 hover:shadow-purple-500/30'
                          : 'bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-gray-200 hover:shadow-purple-500/15'
                      }`}>
                        <h3 className={`font-bold text-base sm:text-lg mb-3 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Get In Touch</h3>
                        <p className={`text-xs sm:text-sm mb-4 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Ready to start your project?</p>
                        <button 
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 min-h-[44px] text-sm"
                          onClick={() => {
                            setshow(false);
                            window.location.href = '/contactus';
                          }}
                        >
                          Contact Us Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Smooth scrollbar for menu */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.8) rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8));
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(37, 99, 235, 1), rgba(124, 58, 237, 1));
        }

        /* Mobile specific scrollbar styling */
        @media (max-width: 768px) {
          .overflow-y-auto::-webkit-scrollbar {
            width: 8px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9));
            border-radius: 12px;
            border: 2px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;