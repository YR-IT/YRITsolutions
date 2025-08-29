import React from 'react';
import "../styles/Footer.css";
import Logo from "../assets/10logo-nobg.png";
import { Link, useNavigate } from 'react-router-dom'
// import F1 from "../assets/fb1.png"
// import X from "../assets/Xlogo.png"
export const Footer = ({ state, setState }) => {
    const navigate = useNavigate()
    const goto = (link) => {
        navigate(link)
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className='min-h-[320px] flex flex-col lg:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 items-start lg:items-center w-full mt-6 py-12 gap-16 lg:gap-20'>
                {/* Company Info Section */}
                <div className='w-full lg:w-auto lg:max-w-[350px]'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <img src={Logo} alt='Logo' className='h-16 sm:h-20 mb-8 brightness-0 invert' />
                        <div className='footer-content text-center lg:text-left mb-8 max-w-[320px]'>
                            We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.
                        </div>
                        {/* Social Media Icons - Desktop */}
                        <div className='hidden sm:flex items-center gap-4 cursor-pointer'>
                            <div className='rounded-sm hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.open("https://www.linkedin.com/in/yashika-sharma1775?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
                            </div>
                            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-8 h-8" />
                            </div>
                            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://youtube.com/@yritsolutions?si=eM2Qaf38BOllyUT7"}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube" className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Links Section */}
                <div className='w-full lg:flex-1'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                        {/* Explore Column */}
                        <div>
                            <div className="text-purple-500 mb-5 font-semibold text-base">Explore</div>
                            <div className='space-y-3'>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(0); goto("/") }}>
                                    Home
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(1); goto("/aboutus") }}>
                                    About Us
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(2); goto("/ourservices") }}>
                                    Services
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(3); goto("/pricing") }}>
                                    Pricing
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(4); goto("/contactus") }}>
                                    Contact Us
                                </div>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div>
                            <div className='text-purple-500 mb-5 font-semibold text-base'>Services</div>
                            <div className='space-y-3'>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>Web Development</div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>App Development</div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>UI/UX Development</div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(-1) }}>
                                    <Link to="/privacy">Digital Marketing</Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Help Center Column */}
                        <div className='ml-0 sm:ml-8 lg:ml-12'>
                            <div className='text-purple-500 mb-5 font-semibold text-base'>Help Center</div>
                            <div className='space-y-3'>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>Community</div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>Knowledge</div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>
                                    <Link to="/termsandconditions">Terms and Conditions</Link>
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors' onClick={() => { setState(-1) }}>
                                    <Link to="/privacy">Privacy</Link>
                                </div>
                                <div className='text-white cursor-pointer text-sm hover:text-[var(--theme)] transition-colors'>Support</div>
                            </div>
                        </div>
                        

                        
                  
                    </div>
                    
                    {/* Mobile Social Media Icons */}
                    <div className='flex sm:hidden items-center justify-center gap-6 mt-8'>
                        <div className='rounded-sm hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.open("https://www.linkedin.com/in/yashika-sharma1775?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
                        </div>
                        <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-7 h-7" />
                        </div>
                        <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://youtube.com/@yritsolutions?si=eM2Qaf38BOllyUT7"}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube" className="w-7 h-7" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}