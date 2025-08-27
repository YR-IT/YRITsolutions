import React from 'react';
import Logo from '../assets/YRLogo.png';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

// Menu data
const menuData = {
  COMPANY: [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact us', href: '/contactus' },
    { label: 'Team', href: '/team' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Products', href: '/products' },
    { label: 'Careers', href: '/careers' },
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
          <img
            src={Logo}
            alt="logo"
            className="h-16 sm:h-28 w-auto cursor-pointer max-w-full mt-4"
          />
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
  className={`fixed top-0 left-0 h-full w-full bg-gradient-to-br from-[#163D82] to-[#0B1B3A]  text-white transform transition-transform duration-500 z-[10001] 
  ${show ? 'translate-y-0' : '-translate-y-full'}`}
>
        {/* Close Btn */}
        <div className="absolute top-6 right-8 cursor-pointer" onClick={() => setshow(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-full mx-auto h-full px-6">
          {/* Logo top-left inside menu */}
          <div className="mb-10">
            <Link to="/" onClick={() => setshow(false)}>
              <img src={Logo} alt="logo" className="h-16 sm:h-28 w-auto cursor-pointer max-w-full mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-10 h-[70%]">
            {/* Left Sections */}
            <div className="md:col-span-1">
  <div className="flex flex-col text-xl font-bold uppercase tracking-wide  border-r-0 md:border-r border-white/20">
    {Object.keys(menuData).map((section, idx) => (
      <React.Fragment key={section}>
<button
  onClick={() => setActiveSection(section)}
  className={`group w-full text-left py-6 pl-4 pr-6 relative transition flex items-center
    ${
      activeSection === section
        ? 'text-white bg-gradient-to-r from-transparent via-[#0b2a66] to-[#6A1FB0] after:absolute after:top-0 after:right-0 after:h-full after:w-[5px] after:bg-gradient-to-b after:from-purple-500 after:to-red-400'
        : 'text-gray-300 hover:text-white'
    }`}
>
  <span className="relative inline-block">
    {section}
    {/* ArrowRight Icon */}
    <ArrowRight
      className="absolute w-4 h-4 opacity-0 -right-5 top-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:opacity-100 group-hover:right-[-1.25rem]"
    />
  </span>
</button>

        {/* Divider line only visible on md+ */}
        {idx < Object.keys(menuData).length - 1 && (
          <div className="hidden md:block border-b border-white/10"></div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>


            {/* Right Links */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 content-start">
  {menuData[activeSection].map((item) => (
    <Link
      key={item.label}
      to={item.href}
      onClick={() => setshow(false)}
      className="group relative inline-flex items-center gap-1 text-gray-400 hover:text-white transition text-base w-fit"
    >
      {/* Text wrapper */}
      <span className="relative inline-block">
        {item.label}
        {/* Gradient underline only as wide as text */}
        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </span>

      {/* Arrow Icon */}
      <svg
        className="w-3 h-3 opacity-0 group-hover:opacity-100 translate-x-0.5 -translate-y-0.5 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h10M19 5v10M19 5L5 19" />
      </svg>
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
