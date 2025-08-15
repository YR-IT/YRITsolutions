import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaRocket } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';


const ContactUs = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='w-full min-h-screen bg-black text-white relative overflow-hidden'>
                {/* Enhanced Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-pink-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className='relative z-10 w-full flex flex-col justify-center items-center px-4 pt-24 pb-6'>
                    <div className='w-full max-w-7xl mx-auto space-y-12'>
                        
                        {/* Page Header */}
                        <div className='text-center animate-fade-in'>
                            <div className='inline-block mb-6'>
                                <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-all duration-500 animate-bounce'>
                                    <FaRocket size={24} className="text-white" />
                                </div>
                                <div className='bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold animate-pulse'>
                                    Get In Touch
                                </div>
                            </div>
                            <div className='text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed animate-slide-up'>
                                Ready to transform your digital presence? Let's discuss how we can help you achieve your goals. 
                                Our team is here to turn your vision into reality.
                            </div>
                            <div className='mt-4 flex justify-center animate-slide-up' style={{ animationDelay: '0.3s' }}>
                                <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-pulse'></div>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                            
                            {/* Left Column - Contact Information & Why Choose Us */}
                            <div className='xl:col-span-1 space-y-6'>
                                {/* Let's Connect Card */}
                                <div className='bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-800 text-white rounded-3xl p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 animate-slide-in-left border border-purple-500/20'>
                                    <h2 className='text-xl md:text-2xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                        Let's Connect
                                    </h2>
                                    <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                                        We're here to help and answer any questions you might have. 
                                        We look forward to hearing from you!
                                    </p>

                                    <div className='space-y-4'>
                                        {/* Phone */}
                                        <div className='group flex items-center gap-4 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20'>
                                            <div className='p-2 bg-purple-500/20 rounded-lg'>
                                                <FaPhone size={16} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-xs text-purple-300 font-medium'>Phone</div>
                                                <a href="tel:+917404890806" className='text-sm font-semibold hover:text-purple-200 transition-colors'>
                                                    +91 7404890806 
                                                </a>
                                            </div>
                                        </div>
                                        
                                        {/* Email */}
                                        <div className='group flex items-center gap-4 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20'>
                                            <div className='p-2 bg-purple-500/20 rounded-lg'>
                                                <FaEnvelope size={16} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-xs text-purple-300 font-medium'>Email</div>
                                                <div 
                                                    className='text-sm font-semibold cursor-pointer hover:text-purple-200 transition-colors break-all'
                                                    onClick={() => {window.location.href="mailto:yr.itsolutions.pvtltd@gmail.com"}}
                                                >
                                                    yr.itsolutions.pvtltd@gmail.com
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className='group flex items-center gap-4 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20'>
                                            <div className='p-2 bg-purple-500/20 rounded-lg'>
                                                <FaMapMarkerAlt size={16} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-xs text-purple-300 font-medium'>Location</div>
                                                <div className='text-sm font-semibold'>
                                                    Gurugram, Haryana, India
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Hours */}
                                        {/* <div className='group flex items-center gap-4 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20'>
                                            <div className='p-2 bg-purple-500/20 rounded-lg'>
                                                <FaClock size={16} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-xs text-purple-300 font-medium'>Business Hours</div>
                                                <div className='text-sm font-semibold'>
                                                    Mon - Fri: 9:00 AM - 6:00 PM
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

          

                                {/* Our Services Preview Card */}
                                <div className='bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-800 text-white rounded-3xl p-6 shadow-2xl border border-purple-500/20'>
                                    <h3 className='text-lg font-bold mb-3 text-purple-300'>Our Services</h3>
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300'>
                                            <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                                            <span className='text-sm text-gray-300'>Web Development</span>
                                        </div>
                                        <div className='flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300'>
                                            <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                                            <span className='text-sm text-gray-300'>Mobile App Development</span>
                                        </div>
                                        <div className='flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300'>
                                            <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                                            <span className='text-sm text-gray-300'>UI/UX Design</span>
                                        </div>
                                        <div className='flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300'>
                                            <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                                            <span className='text-sm text-gray-300'>Digital Marketing</span>
                                        </div>
                                        <div className='flex items-center gap-3 p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300'>
                                            <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                                            <span className='text-sm text-gray-300'>Cloud Services</span>
                                        </div>
                                    </div>
                                </div>

                                

                                {/* Why Choose Us - Now in Left Column */}
                                <div className='bg-gradient-to-br from-gray-900/90 via-purple-900/30 to-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-500/30'>
                                    <div className='text-center mb-6'>
                                        <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-3'>
                                            Why Choose YRIT Solutions?
                                        </h3>
                                        <div className='w-12 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto'></div>
                                    </div>
                                    
                                    <div className='space-y-4'>
                                        <div className='group flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40'>
                                            <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0'>
                                                <FaGlobe size={18} className='text-white' />
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-white mb-1 group-hover:text-purple-200 transition-colors'>Global Expertise</h4>
                                                <p className='text-gray-300 text-sm leading-relaxed'>World-class solutions with local understanding</p>
                                            </div>
                                        </div>

                                        <div className='group flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40'>
                                            <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0'>
                                                <FaClock size={18} className='text-white' />
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-white mb-1 group-hover:text-purple-200 transition-colors'>24/7 Support</h4>
                                                <p className='text-gray-300 text-sm leading-relaxed'>Round-the-clock assistance with dedicated support</p>
                                            </div>
                                        </div>

                                        <div className='group flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40'>
                                            <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0'>
                                                <FaRocket size={18} className='text-white' />
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-white mb-1 group-hover:text-purple-200 transition-colors'>Quick Response</h4>
                                                <p className='text-gray-300 text-sm leading-relaxed'>Fast turnaround and efficient communication</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                                      {/* Social Media Card */}
                                                      <div className="flex flex-col items-center text-center">
    <h3 className="text-base font-bold mb-2 text-purple-300">Follow Us</h3>
    <div className="flex gap-2.5 justify-center">
        <div 
            className="p-4 rounded-xl bg-purple-500/10 cursor-pointer hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:scale-110" 
            onClick={() => {window.location.href="https://www.linkedin.com/in/yrit-solutions-755549371"}}
        >
            <FaLinkedin size={24} className="text-purple-300" />
        </div>
        <div 
            className="p-4 rounded-xl bg-purple-500/10 cursor-pointer hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:scale-110" 
            onClick={() => {window.location.href="https://www.instagram.com/yritsolutions2025"}}
        >
            <FaInstagram size={24} className="text-purple-300" />
        </div>
        <div 
            className="p-4 rounded-xl bg-purple-500/10 cursor-pointer hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:scale-110" 
            onClick={() => {window.location.href="https://youtube.com/@yritsolutions"}}
        >
            <FaYoutube size={24} className="text-purple-300" />
        </div>
    </div>
</div>


                            </div>

                            {/* Right Column - Form */}
                            <div className='xl:col-span-2 animate-slide-in-right'>
                                <div className='w-full'>
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;