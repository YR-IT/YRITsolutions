import React from 'react'
import Logo from '../assets/10logo-nobg.png'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'

const Navbar = ({ state, setState, setshow, show }) => {
  const [loc, changeloc] = React.useState("/")
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    changeloc(window.location.pathname);
    if (loc === "/") setState(0);
    if (loc === "/aboutus") setState(1);
    if (loc === "/ourservices") setState(2);
    if (loc === "/pricing") setState(3);
    if (loc === "/contactus") setState(4);
    if (loc === "/portfolio") setState(10);
    if (loc === "/blog") setState(11);
  }, [loc]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay when mobile menu open */}
      <div
        className={`${show ? "fixed inset-0 bg-black/60 z-[9999]" : "hidden"}`}
        onClick={() => setshow(false)}
      ></div>

      <div
        className={`navbar-container z-[10000] w-full h-[74px] flex justify-between items-center fixed top-0 left-0 px-6 transition-all duration-300 
        ${isScrolled ? "bg-black shadow-md" : "bg-transparent"} text-white`}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setState(0)}>
          <img src={Logo} alt="logo" className="h-[65px] cursor-pointer" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[16px] font-[500]">
          <Link to="/" className={`${state === 0 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(0)}>Home</Link>
          <Link to="/aboutus" className={`${state === 1 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(1)}>About</Link>
          <Link to="/ourservices" className={`${state === 2 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(2)}>Services</Link>
          <Link to="/pricing" className={`${state === 3 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(3)}>Pricing</Link>
          <Link to="/portfolio" className={`${state === 10 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(10)}>Portfolio</Link>
          <Link to="/contactus" className={`${state === 4 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(4)}>Contact</Link>
          <Link to="/blog" className={`${state === 11 ? "text-[var(--theme)]" : ""}`} onClick={() => setState(11)}>Blog</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            className="flex items-center gap-2 px-4 py-2 border border-[var(--theme)] text-[var(--theme)] rounded-lg hover:bg-[var(--theme)] hover:text-white transition"
            onClick={() => (window.location.href = 'tel:+917404890806')}
          >
            <FiPhone size={18} /> Call Now
          </button>
          <button
            className="px-5 py-2 bg-[var(--theme)] text-white rounded-lg hover:bg-purple-700 transition"
            onClick={() => (window.location.href = 'meetingform')}
          >
            Schedule Meeting
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setshow(!show)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-black text-white p-6 transform transition-transform duration-300 z-[10001] 
          ${show ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Btn */}
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setshow(false)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-6 mt-12 text-lg">
            <Link to="/" onClick={() => { setState(0); setshow(false); }} className={`${state === 0 ? "text-[var(--theme)]" : ""}`}>Home</Link>
            <Link to="/aboutus" onClick={() => { setState(1); setshow(false); }} className={`${state === 1 ? "text-[var(--theme)]" : ""}`}>About Us</Link>
            <Link to="/ourservices" onClick={() => { setState(2); setshow(false); }} className={`${state === 2 ? "text-[var(--theme)]" : ""}`}>Services</Link>
            <Link to="/pricing" onClick={() => { setState(3); setshow(false); }} className={`${state === 3 ? "text-[var(--theme)]" : ""}`}>Pricing</Link>
            <Link to="/portfolio" onClick={() => { setState(10); setshow(false); }} className={`${state === 10 ? "text-[var(--theme)]" : ""}`}>Portfolio</Link>
            <Link to="/contactus" onClick={() => { setState(4); setshow(false); }} className={`${state === 4 ? "text-[var(--theme)]" : ""}`}>Contact</Link>
            <Link to="/blog" onClick={() => { setState(11); setshow(false); }} className={`${state === 11 ? "text-[var(--theme)]" : ""}`}>Blog</Link>
          </div>

          {/* Mobile buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-[var(--theme)] text-[var(--theme)] rounded-lg hover:bg-[var(--theme)] hover:text-white transition"
              onClick={() => (window.location.href = 'tel:+917404890806')}
            >
              <FiPhone size={18} /> Call Now
            </button>
            <button
              className="px-5 py-2 bg-[var(--theme)] text-white rounded-lg hover:bg-purple-700 transition"
              onClick={() => (window.location.href = 'meetingform')}
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
