import React from 'react';
import Logo from '../assets/10logo-nobg.png';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

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

const Navbar = ({ state, setState, setshow, show }) => {
  const [loc, changeloc] = React.useState('/');
  const [isScrolled, setIsScrolled] = React.useState(false);
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

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${show ? 'fixed inset-0 bg-black/60 z-[9999]' : 'hidden'}`}
        onClick={() => setshow(false)}
      ></div>

      {/* -------- Top Navbar -------- */}

<div
  className={`navbar-container z-[10000] w-full h-[100px] flex justify-between items-center fixed top-0 left-0 px-8 transition-all duration-300 
  ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'} text-white`}
>
  {/* Logo */}
  <Link to="/" onClick={() => setState(0)}>
    <img src={Logo} alt="logo" className="h-[75px] cursor-pointer" />
  </Link>

  {/* Right side buttons */}
  <div className="flex items-center gap-8">
    {/* Gradient Button */}
    <button
      className="hidden md:block px-7 py-3 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] text-white rounded-md shadow-md font-medium transition-transform transform hover:scale-105 text-[16px]"
      onClick={() => (window.location.href = '/meetingform')}
    >
      Let&apos;s Discuss
    </button>

    {/* Hamburger Icon */}
    <div className="cursor-pointer flex justify-end" onClick={() => setshow(!show)}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        {/* Top short line */}
        <path d="M14 6H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Middle long line */}
        <path d="M8 12H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bottom short line */}
        <path d="M10 18H20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  </div>
</div>


      {/* -------- Full-screen Menu -------- */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gradient-to-b from-[#0d1b40] to-[#0a1230] text-white transform transition-transform duration-300 z-[10001] 
        ${show ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Btn */}
        <div className="absolute top-5 right-6 cursor-pointer" onClick={() => setshow(false)}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto h-full pt-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-[70%]">
            {/* Left Sections */}
            <div className="md:col-span-1">
              <div className="flex flex-col gap-6 text-xl font-semibold">
                {Object.keys(menuData).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`text-left pl-4 border-l-4 transition 
                      ${activeSection === section ? 'border-purple-500 text-white' : 'border-transparent hover:border-purple-400'}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Links */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {menuData[activeSection].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setshow(false)}
                  className="block rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute bottom-6 left-0 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
              <div className="rounded-lg bg-white/5 border border-white/10 py-3">10+ YEAR&apos;S</div>
              <div className="rounded-lg bg-white/5 border border-white/10 py-3">150+ EMPLOYEES</div>
              <div className="rounded-lg bg-white/5 border border-white/10 py-3">850+ PROJECTS</div>
              <div className="rounded-lg bg-white/5 border border-white/10 py-3">200+ CLIENTS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
