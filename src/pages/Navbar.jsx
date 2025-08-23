import React from 'react';
import Logo from '../assets/YRLogo.png';
import { Link, useLocation } from 'react-router-dom';

// Menu data
const menuData = {
  COMPANY: [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contactus' },
  ],
  SERVICES: [
    { label: 'Our Services', href: '/ourservices' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  SOLUTIONS: [
    { label: 'Web Apps', href: '/ourservices#web' },
    { label: 'Mobile Apps', href: '/ourservices#mobile' },
    { label: 'UI/UX', href: '/ourservices#uiux' },
  ],
  'HIRE RESOURCE': [
    { label: 'Hire Developers', href: '/ourservices#hire-dev' },
    { label: 'Hire Designers', href: '/ourservices#hire-design' },
    { label: 'Schedule Meeting', href: '/meetingform' },
  ],
};

// Backgrounds for each section
const bgGradients = {
  COMPANY: 'from-[#0A1E47] via-[#1D2671] to-[#0C1235]',
  SERVICES: 'from-[#2E0249] via-[#570A57] to-[#1B1A55]',
  SOLUTIONS: 'from-[#0F2027] via-[#203A43] to-[#2C5364]',
  'HIRE RESOURCE': 'from-[#42275a] via-[#734b6d] to-[#0f0c29]',
};

const Navbar = ({ state, setState, setshow, show }) => {
  const [loc, changeloc] = React.useState('/');
  const [activeSection, setActiveSection] = React.useState('COMPANY');
  const location = useLocation();

  const isHome = location.pathname === '/';

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
      {/* Overlay */}
      <div
        className={`${show ? 'fixed inset-0 bg-black/40 z-[9999]' : 'hidden'}`}
        onClick={() => setshow(false)}
      ></div>

      {/* -------- Top Navbar -------- */}
      <div
        className={`navbar-container z-[10000] w-full h-[100px] flex justify-between items-center 
        px-8 transition-all duration-300 text-white`}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setState(0)}>
          <img src={Logo} alt="logo" className="h-[100px] cursor-pointer" />
        </Link>

        {/* Right side buttons */}
        <div className="flex items-center gap-8">
          {/* Gradient Button */}
          <button
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] text-white rounded-md shadow-md font-medium transition-transform transform hover:scale-105 text-[16px]"
            onClick={() => (window.location.href = '/meetingform')}
          >
            Let&apos;s Discuss
          </button>

          {/* Hamburger Icon */}
          <div className="cursor-pointer flex justify-end" onClick={() => setshow(!show)}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M14 6H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M8 12H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M10 18H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* -------- Full-screen Menu -------- */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gradient-to-b ${bgGradients[activeSection]} text-white transform transition-all duration-500 z-[10001] 
        ${show ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Btn */}
        <div className="absolute top-6 right-8 cursor-pointer" onClick={() => setshow(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto h-full pt-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-[70%]">
            {/* Left Sections */}
            <div className="md:col-span-1">
              <div className="flex flex-col gap-4 text-lg font-semibold">
                {Object.keys(menuData).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`text-left px-4 py-2 rounded-md transition 
                      ${
                        activeSection === section
                          ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 text-white'
                          : 'hover:bg-white/10'
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Links */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 content-start">
              {menuData[activeSection].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setshow(false)}
                  className="block rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
