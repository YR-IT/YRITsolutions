import React from 'react'
import Logo from '../assets/10logo-nobg.png'
import "../styles/Navbar.css"
import X from "../assets/Xlogo.png"
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
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${show ? "" : "hidden"} z-[99999999] absolute h-full w-[100vw] navbar-back`} onClick={() => { setshow(false) }}>
            </div>

            {/* Added dynamic scroll class */}
            <div className={`navbar-container z-[999999999] w-full h-[74px] flex justify-evenly max-[640px]:relative items-center fixed top-0 left-0 transition-all duration-300 ${isScrolled ? "navbar-dark" : "navbar-transparent"}`}>
                
                <div className='flex gap-[160px] max-[640px]:gap-0 max-[640px]:ml-2 items-center'>
                    <div className='flex items-center gap-4'>
                        <Link to="/" onClick={() => setState(0)}>
                            <img src={Logo} className='h-[75px] cursor-pointer' />
                        </Link>
                    </div>
                </div>
        
                <div className='w-[69%] ml-[9%]  min-[640px]:hidden cursor-pointer relative'>
                    <div className='float-right' onClick={() => setshow(!show)}>
                        <svg width="39px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#5543e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <div className={`absolute h-[100vh] ${show ? "nav-side-main-sub1" : "nav-side-main-sub2"} w-[300px] bg-white border-[var(--theme)] border-[2px] mt-[-1.1rem] float-right right-0`}>
                        <div className='max-[640px]'>
                            <div className='mt-2'>
                                <div className='px-[12px] max-[415px]:px-6px nav-side-contact py-[9px] min-w-[fit-content] mt-2 cursor-pointer flex items-center gap-2' onClick={() => {
                                    window.location.href = 'tel:+917404890806';
                                }}>
                                    <FiPhone size={18} />
                                    <span className='max-[515px]:hidden'>Call Now</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[10px] mt-[3rem] pll-4'>
                                <div className={`float-right ${show ? "" : "hidden"} absolute right-2 top-2`} onClick={() => setshow(!show)}>
                                    <svg width="39px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#5543e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className='flex-col flex gap-0 text-[2rem]'>
                                    <div className={`hover:text-[var(--theme)] ${state === 0 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(0); setshow(false) }}><Link to="/">
                                        Home
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 1 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(1); setshow(false) }}><Link to="/aboutus">
                                        About Us
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 2 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(2); setshow(false) }}><Link to="/ourservices">
                                        Services
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 3 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(3); setshow(false) }}><Link to="/pricing">
                                        Pricing
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 10 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(10); setshow(false) }}><Link to="/portfolio">
                                        Portfolio
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 4 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(4); setshow(false) }}><Link to="/contactus">
                                        Contact
                                    </Link></div>
                                    <div className={`cursor-pointer hover:text-[var(--theme)] ${state === 11 ? "active-color nav-boxes text-[22px]" : "text-[16px] nav-boxes-inactive"}`} onClick={() => { setState(11); setshow(false) }}><Link to="/blog">
                                        Blog
                                    </Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex w-[50%] justify-evenly h-[26px] text-[16px] font-[500] max-[640px]:hidden'>
                    <div className={`${state === 0 ? "active-color" : ""} cursor-pointer`} onClick={() => setState(0)}><Link to="/">
                        Home
                    </Link></div>
                    <div className={`cursor-pointer ${state === 1 ? "active-color" : ""}`} onClick={() => setState(1)}><Link to="/aboutus">
                        About
                    </Link></div>
                    <div className={`cursor-pointer ${state === 2 ? "active-color" : ""}`} onClick={() => setState(2)}><Link to="/ourservices">
                        Services
                    </Link></div>
                    <div className={`cursor-pointer ${state === 3 ? "active-color" : ""}`} onClick={() => setState(3)}><Link to="/pricing">
                        Pricing
                    </Link></div>
                    <div className={`cursor-pointer ${state === 10 ? "active-color" : ""}`} onClick={() => setState(10)}>
                        <Link to="/Portfolio">Portfolio</Link>
                    </div>
                    <div className={`cursor-pointer ${state === 4 ? "active-color" : ""}`} onClick={() => setState(4)}><Link to="/contactus">
                        Contact
                    </Link></div>
                    <div className={`cursor-pointer ${state === 11 ? "active-color" : ""}`} onClick={() => setState(11)}><Link to="/blog">
                        Blog
                    </Link></div>
                </div>

                <div className='flex gap-[23px]'>
                    <div className='btn px-[12px] py-[9px] gap-[10px] cursor-pointer max-[640px]:hidden flex items-center' onClick={() => {
                        window.location.href = 'tel:+917404890806';
                    }}>
                        <FiPhone size={18} />
                        <span>Call Now</span>
                    </div>
                    <div className='radius text-[white] bg-black px-[19px] py-[9px] max-[940px]:hidden' onClick={() => {
                        window.location.href = 'meetingform'
                    }}>Schedule Meeting</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
