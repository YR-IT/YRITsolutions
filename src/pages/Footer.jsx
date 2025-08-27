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
                            <div className='rounded-sm hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.linkedin.com/in/yrit-solutions-755549371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}}>
                                <svg fill="#0055ff" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#0055ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Linkedln"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"></path> </g> </g></svg>
                            </div>
                            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}>
                                <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stopColor="#B13589"></stop> <stop offset="0.79309" stopColor="#C62F94"></stop> <stop offset="1" stopColor="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stopColor="#E0E8B7"></stop> <stop offset="0.444662" stopColor="#FB8A2E"></stop> <stop offset="0.71474" stopColor="#E2425C"></stop> <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stopColor="#406ADC"></stop> <stop offset="0.467799" stopColor="#6A45BE"></stop> <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop> </radialGradient> </defs> </g></svg>
                            </div>
                            <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://youtube.com/@yritsolutions?si=eM2Qaf38BOllyUT7"}}>
                                <svg width="32px" height="32px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>YouTube-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#FF0000"> <path d="M244.6,174.5c-0.5-2-2-3.5-3.9-4c-3.2-1-15.7-1-15.7-1s-12.5,0-15.7,1c-1.9,0.5-3.4,2-3.9,4c-1,3.3-1,10.2-1,10.2s0,6.9,1,10.2c0.5,2,2,3.5,3.9,4c3.2,1,15.7,1,15.7,1s12.5,0,15.7-1c1.9-0.5,3.4-2,3.9-4c1-3.3,1-10.2,1-10.2S245.6,177.8,244.6,174.5z M224,191.5v-13l11,6.5L224,191.5z" id="Youtube"> </path> </g> </g> </g></svg>
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
                        <div className='ml-8 lg:ml-12'>
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
                        <div className='rounded-sm hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.linkedin.com/in/yrit-solutions-755549371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}}>
                            <svg fill="#0055ff" width="28px" height="28px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#0055ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Linkedln"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"></path> </g> </g></svg>
                        </div>
                        <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}>
                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                        </div>
                        <div className='rounded-full hover:scale-110 transition-transform duration-200 p-1' onClick={()=>{window.location.href="https://youtube.com/@yritsolutions?si=eM2Qaf38BOllyUT7"}}>
                            <svg width="28px" height="28px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>YouTube-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#FF0000"> <path d="M244.6,174.5c-0.5-2-2-3.5-3.9-4c-3.2-1-15.7-1-15.7-1s-12.5,0-15.7,1c-1.9,0.5-3.4,2-3.9,4c-1,3.3-1,10.2-1,10.2s0,6.9,1,10.2c0.5,2,2,3.5,3.9,4c3.2,1,15.7,1,15.7,1s12.5,0,15.7-1c1.9-0.5,3.4-2,3.9-4c1-3.3,1-10.2,1-10.2S245.6,177.8,244.6,174.5z M224,191.5v-13l11,6.5L224,191.5z" id="Youtube"> </path> </g> </g> </g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}