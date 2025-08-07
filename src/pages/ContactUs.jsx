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
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                </div>

                <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4 py-8'>
                    <div className='w-full max-w-7xl mx-auto'>
                        {/* Enhanced Header Section */}
                        <div className='text-center mb-16 animate-fade-in'>
                            <div className='inline-block mb-6'>
                                <div className='w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-all duration-500 animate-bounce'>
                                    <FaRocket size={32} className="text-white" />
                                </div>
                                <div className='bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-pulse'>
                                    Get In Touch
                                </div>
                            </div>
                            <div className='text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up'>
                                Ready to transform your digital presence? Let's discuss how we can help you achieve your goals. 
                                Our team is here to turn your vision into reality.
                            </div>
                            <div className='mt-6 flex justify-center animate-slide-up' style={{animationDelay: '0.3s'}}>
                                <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-pulse'></div>
                            </div>
                        </div>

                        {/* Main Content Section */}
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 w-full'>
                            {/* Enhanced Contact Information Panel */}
                            <div className='bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-800 text-white rounded-3xl p-8 lg:p-12 flex-1 min-h-[600px] lg:min-h-[700px] relative shadow-2xl transform hover:scale-[1.02] transition-all duration-500 animate-slide-in-left border border-purple-500/20'>
                                {/* Decorative background pattern */}
                                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full translate-y-12 -translate-x-12 animate-float" style={{animationDelay: '2s'}}></div>
                                
                                <div className='relative z-10 h-full flex flex-col'>
                                    {/* Enhanced Header */}
                                    <div className='mb-10 animate-fade-in'>
                                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                            Let's Connect
                                        </h2>
                                        <p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
                                            We're here to help and answer any questions you might have. 
                                            We look forward to hearing from you!
                                        </p>
                                    </div>
                                    
                                    {/* Enhanced Contact Details */}
                                    <div className='flex-1 space-y-8 lg:space-y-10'>
                                        {/* Phone */}
                                        <div className='group flex items-center gap-6 p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left border border-purple-500/20' style={{animationDelay: '0.2s'}}>
                                            <div className='flex-shrink-0 p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300'>
                                                <FaPhone size={24} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-sm text-purple-300 font-medium mb-1'>Phone</div>
                                                <a href="tel:+917404890806" className='text-lg md:text-xl lg:text-2xl font-semibold hover:text-purple-200 transition-colors'>
                                                    +91 7404890806 
                                                </a>
                                            </div>
                                        </div>
                                        
                                        {/* Email */}
                                        <div className='group flex items-center gap-6 p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left border border-purple-500/20' style={{animationDelay: '0.4s'}}>
                                            <div className='flex-shrink-0 p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300'>
                                                <FaEnvelope size={24} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-sm text-purple-300 font-medium mb-1'>Email</div>
                                                <div 
                                                    className='text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:text-purple-200 transition-colors break-all'
                                                    onClick={() => {window.location.href="mailto:yr.itsolutions.pvtltd@gmail.com"}}
                                                >
                                                    yr.itsolutions.pvtltd@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Location */}
                                        <div className='group flex items-center gap-6 p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left border border-purple-500/20' style={{animationDelay: '0.6s'}}>
                                            <div className='flex-shrink-0 p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300'>
                                                <FaMapMarkerAlt size={24} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-sm text-purple-300 font-medium mb-1'>Location</div>
                                                <div className='text-lg md:text-xl lg:text-2xl font-semibold'>
                                                    Gurugram, Haryana, India
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Hours */}
                                        <div className='group flex items-center gap-6 p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left border border-purple-500/20' style={{animationDelay: '0.8s'}}>
                                            <div className='flex-shrink-0 p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300'>
                                                <FaClock size={24} className='text-purple-300' />
                                            </div>
                                            <div>
                                                <div className='text-sm text-purple-300 font-medium mb-1'>Business Hours</div>
                                                <div className='text-lg md:text-xl font-semibold'>
                                                    Mon - Fri: 9:00 AM - 6:00 PM
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced Social Media Icons */}
                                    <div className='mt-10 animate-fade-in' style={{animationDelay: '1s'}}>
                                        <div className='text-lg font-semibold mb-4 text-purple-300'>Follow Us</div>
                                        <div className='flex gap-4'>
                                            {/* LinkedIn */}
                                            <div 
                                                className='p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm cursor-pointer hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 border border-purple-500/20' 
                                                onClick={() => {window.location.href="https://www.linkedin.com/in/yrit-solutions-755549371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}}
                                            >
                                                <FaLinkedin size={28} className='text-purple-300' />
                                            </div>
                                            
                                            {/* Instagram */}
                                            <div 
                                                className='p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm cursor-pointer hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 border border-purple-500/20' 
                                                onClick={() => {window.location.href="https://www.instagram.com/yritsolutions2025?igsh=YXNyaGlvOHYzY3h1&utm_source=ig_contact_invite"}}
                                            >
                                                <FaInstagram size={28} className='text-purple-300' />
                                            </div>
                                            
                                            {/* YouTube */}
                                            <div 
                                                className='p-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm cursor-pointer hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 border border-purple-500/20' 
                                                onClick={() => {window.location.href="https://youtube.com/@yritsolutions?si=m2Fd0kTWrDgEBSpd"}}
                                            >
                                                <FaYoutube size={28} className='text-purple-300' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced Contact Form */}
                            <div className='flex-1 flex justify-center items-center animate-slide-in-right'>
                                <div className='w-full max-w-2xl'>
                                    <Form />
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Section */}
                        <div className='mt-16 text-center animate-fade-in' style={{animationDelay: '1.2s'}}>
                            <div className='bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-500 border border-purple-500/20'>
                                <h3 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent'>
                                    Why Choose YRIT Solutions?
                                </h3>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                                    <div className='text-center group'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300'>
                                            <FaGlobe size={24} className='text-white' />
                                        </div>
                                        <h4 className='font-semibold text-white mb-2'>Global Expertise</h4>
                                        <p className='text-gray-300 text-sm'>World-class solutions with local understanding</p>
                                    </div>
                                    <div className='text-center group'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300'>
                                            <FaClock size={24} className='text-white' />
                                        </div>
                                        <h4 className='font-semibold text-white mb-2'>24/7 Support</h4>
                                        <p className='text-gray-300 text-sm'>Round-the-clock assistance for your projects</p>
                                    </div>
                                    <div className='text-center group'>
                                        <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300'>
                                            <FaRocket size={24} className='text-white' />
                                        </div>
                                        <h4 className='font-semibold text-white mb-2'>Quick Response</h4>
                                        <p className='text-gray-300 text-sm'>Fast turnaround times and efficient communication</p>
                                    </div>
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