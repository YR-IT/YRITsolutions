import React from 'react'
import Pricing from './Pricing'
import "../styles/PricingMain.css"
import OK from "../assets/Vector.png"
import IMG from "../assets/image11.png"
import NOK from "../assets/Vector2.png"
import ClientReview from './ClientReview'
import { Link } from 'react-router-dom'

const PricingMain = () => {
    const datad = [
        {
            heading: "Maximize your potential with our tailored solutions.",
            img: IMG,
            desc: "We at YR IT SOLUTIONS hold pride in our ability to maximize app performance and achieve goals like no other. Completely measurable results for achieving App Installs, User Acquisition & Increased app rating",
            link: "#"
        },
    ]

    const data = [
  { name:"Expert software developers and dedicated engineering teams", ok: 1 },
  { name: "Simple and transparent pricing with no hidden costs", ok: 1 },
  { name: "Easily scale your team up or down based on project needs", ok: 1 },
  { name: "Fully managed workflows with strong quality control", ok: 1 },
  { name: "Detailed performance tracking and progress reports", ok: 1 },
  { name: "Guaranteed developer support and quick replacements", ok: 1 }
    ]
    const data2 = [...data]
    const data3 = [
  { name: "Expert software developers and dedicated engineering teams", ok: 1 },
  { name: "Simple and transparent pricing with no hidden costs", ok: 1 },
  { name: "Basic team scaling options with limited onboarding help", ok: 0 },
  { name: "Manual workflows with limited quality checks", ok: 0 },
  { name: "Limited performance insights and reporting", ok: 0 },
  { name: "No developer replacement guarantee", ok: 0 }
    
    ]
    const data4 = [
  { name: "Expert software developers and dedicated engineering teams", ok: 1 },
  { name: "Basic pricing structure with limited flexibility", ok: 0 },
  { name: "No support for team scaling or onboarding", ok: 0 },
  { name: "No managed workflows or quality assurance", ok: 0 },
  { name: "No access to performance reports or insights", ok: 0 },
  { name: "No replacement or continuity support", ok: 0 }
    ]

    const allColumns = [data, data2, data3, data4]
    const headings = ["", "YR IT SOLUTIONS", "Marketplace", "Agency"]

    return (
        <>
            <div className='bg-black text-white min-h-screen'>
                <Pricing />

                {/* Contact CTA */}
               <div className='flex mt-16 items-center justify-center px-4'>
                 <Link to="/contactus" className='w-full max-w-sm group'>
                 <div className='rounded-xl h-16 sm:h-20 w-full bg-gradient-to-r from-[var(--theme)] to-purple-600 text-white font-semibold text-base sm:text-lg lg:text-xl flex flex-col justify-center items-center text-center px-4 py-2
                   hover:from-white hover:to-gray-100 hover:text-[var(--theme)] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'>
                   <span className='group-hover:animate-pulse'>Need a Customized Plan?</span>
                   <span className='group-hover:animate-pulse'>Please Contact Us</span>
                     </div>
                     </Link>
                    </div>
                {/* Subheading */}
<div className='w-full flex justify-center items-center mt-12 px-4'>
  <div className='max-w-4xl mx-auto'>
    <div className='text-center text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-medium text-white drop-shadow-lg px-4' style={{fontFamily: 'Space Grotesk, sans-serif'}}>
      We took the best parts of an agency and freelance marketplace
    </div>
  </div>
</div>
                {/* Table with Horizontal Scroll for Mobile */}
                <div className='mt-16 overflow-x-auto w-full py-8 sm:py-12 relative'>
                    {/* Background gradient effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent opacity-50'></div>
                    
                    <div className='min-w-[320px] sm:min-w-[768px] lg:min-w-[1200px] w-fit mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                        <div className='flex gap-4 sm:gap-6 lg:gap-8 justify-center'>
                            {allColumns.map((column, colIdx) => (
                                <div
                                    key={colIdx}
                                    className={`w-[280px] sm:w-[280px] lg:w-[325px] ${colIdx === 0 ? 'pt-20 sm:pt-28' : 'pt-8 sm:pt-10'} rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
                                                ${colIdx === 0 ? 'bg-gradient-to-b from-gray-900/50 to-gray-800/30 border border-gray-700' : 
                                                  colIdx === 1 ? 'bg-gradient-to-b from-purple-900/40 to-gray-900/60 border border-gray-700 relative overflow-hidden' :
                                                  'bg-gradient-to-b from-gray-900/60 to-gray-800/40 border border-gray-700 hover:border-gray-600'}
                                                block
                                                backdrop-blur-sm`}
                                >

                                    {/* Animated background for popular column */}
                                    {colIdx === 1 && (
                                        <div className='absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-[var(--theme)]/10 rounded-2xl'></div>
                                    )}

                                    {headings[colIdx] && (
                                        <div className='text-center mb-6 sm:mb-8 relative z-10 px-2'>
                                            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300
                                                ${colIdx === 1 ? 'text-[var(--theme)] drop-shadow-lg' : 
                                                  colIdx === 0 ? 'text-[var(--theme)] drop-shadow-lg' : 'text-white'}`}>
                                                {headings[colIdx]}
                                            </h3>
                                        </div>
                                    )}

                                    <div className='flex flex-col gap-3 sm:gap-4 w-full max-w-[280px] mx-auto py-4 sm:py-6 px-2 relative z-10'>
                                        {column.map((item, rowIdx) => (
                                            <div 
                                                key={rowIdx} 
                                                className={`flex items-start pl-2 sm:pl-4 gap-2 sm:gap-4 group p-2 sm:p-3 rounded-xl transition-all duration-300 hover:transform hover:translateX-2
                                                    ${colIdx === 1 ? 'hover:bg-purple-800/30 hover:shadow-lg' : 'hover:bg-gray-700/50'}
                                                    ${item.ok ? 'border-l-2 sm:border-l-4 border-green-500/50' : 'border-l-2 sm:border-l-4 border-red-500/50'}`}
                                            >
                                                <div className='w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0 relative flex items-center justify-center'>
                                                    {item.ok ? (
                                                        <div className='w-5 h-5 rounded-full bg-green-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50'>
                                                            <svg className='w-3 h-3 text-white font-bold' fill='currentColor' viewBox='0 0 20 20'>
                                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <div className='w-5 h-5 rounded-full bg-red-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-red-400 group-hover:shadow-lg group-hover:shadow-red-400/50'>
                                                            <svg className='w-3 h-3 text-white font-bold' fill='currentColor' viewBox='0 0 20 20'>
                                                                <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                                                            </svg>
                                                        </div>
                                                    )}
                                                    <div className={`absolute inset-0 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 ${item.ok ? 'bg-green-400/20' : 'bg-red-400/20'}`}></div>
                                                </div>
                                                <div className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 font-medium
                                                    ${item.ok ? 'text-gray-200 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom glow effect for popular column */}
                                    {colIdx === 1 && (
                                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[var(--theme)] to-transparent rounded-full opacity-60'></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section - Modern Card Design */}
                <div className='mt-24 mb-32 relative'>
                    {/* Subtle Background */}
                    <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'></div>
                    
                    {/* Floating Elements */}
                    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                        <div className='absolute top-20 left-20 w-2 h-2 bg-[var(--theme)] rounded-full animate-pulse opacity-60'></div>
                        <div className='absolute bottom-32 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000 opacity-40'></div>
                        <div className='absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000 opacity-50'></div>
                    </div>
                    
                    {/* Main Content */}
                    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                        {/* Header Card */}
                        <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl px-8 py-16 sm:px-12 sm:py-20 mb-16 text-center group hover:border-[var(--theme)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--theme)]/10'>
                            <div className='relative max-w-4xl mx-auto'>
                                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-relaxed mb-8 group-hover:scale-105 transition-transform duration-500' style={{lineHeight: '1.3', paddingBottom: '8px'}}>
                                    Ready to get started?
                                </h2>
                                <p className='text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-500'>
                                    Choose the perfect plan for your business needs and take the first step towards success
                                </p>
                                <div className='w-24 h-1 bg-gradient-to-r from-[var(--theme)] to-purple-600 mx-auto rounded-full group-hover:w-32 transition-all duration-500'></div>
                            </div>
                        </div>
                        
                        {/* Content Cards */}
                        <div className='space-y-12'>
                            {datad.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} gap-8 lg:gap-16 w-full max-[780px]:flex-col max-[780px]:items-center group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-[var(--theme)]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--theme)]/5`}
                                >
                                    {/* Image Container */}
                                    <div className='flex-shrink-0 w-full sm:w-[450px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[400px] relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500'>
                                        <img 
                                            src={item.img} 
                                            alt="" 
                                            className='w-full h-full object-cover rounded-2xl shadow-2xl group-hover:brightness-110 transition-all duration-500' 
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-tr from-[var(--theme)]/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className='flex flex-col flex-1 justify-center text-center lg:text-left max-[780px]:text-center space-y-6'>
                                        <div className='text-xl sm:text-2xl lg:text-[25px] text-[var(--theme)] font-medium'>
                                            Own an App? Grow like Crazy with us.
                                        </div>
                                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight'>
                                            <p>{item.heading}</p>
                                        </div>
                                        <div className='text-gray-300 leading-relaxed text-base sm:text-lg pricingM-subpart3'>
                                            {item.desc}
                                        </div>
                                        <div className='flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start max-[780px]:justify-center pt-4'>
                                            <a 
                                                href="https://wa.me/7404890806" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className='group btn h-12 sm:h-14 w-48 sm:w-56 text-base sm:text-lg font-medium rounded-xl bg-gradient-to-r from-[var(--theme)] to-purple-600 hover:from-white hover:to-gray-100 hover:text-[var(--theme)] transition-all duration-500 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'
                                            >
                                                <span className='group-hover:animate-pulse'>💬 Chat With Us</span>
                                            </a>
                                            <Link 
                                                to="/contactus"
                                                className='group h-12 sm:h-14 w-48 sm:w-56 text-base sm:text-lg font-medium rounded-xl border-2 border-[var(--theme)] text-white hover:bg-gradient-to-r hover:from-[var(--theme)] hover:to-purple-600 hover:border-transparent transition-all duration-500 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'
                                            >
                                                <span className='group-hover:animate-pulse'>📧 Send Enquiry</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Section */}
                <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24'>
                    <ClientReview />
                </div>
            </div>
        </>
    )
}

export default PricingMain;
