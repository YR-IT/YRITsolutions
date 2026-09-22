import React from 'react'
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import Icon4 from '../assets/Icon.png'
import "../styles/WhyChooseUs.css"

const WhyChooseUs = () => {
    return (
        <div className='w-full section-spacing py-8 md:py-8 lg:py-12'>
            {/* Section Title */}
            <div className='heading smtext2 mb-8 md:mb-12 lg:mb-16'>
                Why Choose Us?
            </div>

            {/* Desktop Layout - 4 cards in a row */}
            <div className='hidden md:block w-full px-4 lg:px-8'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-4 gap-6 lg:gap-8'>
                        {/* Card 1 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon1} alt="SDE Tradition" className='mb-4 w-16 h-16 object-contain' />
                            <h3 className='text-xl lg:text-2xl font-bold mb-4 text-left'>
                                SDE Tradition
                            </h3>
                            <p className='text-sm lg:text-base text-gray-600 leading-relaxed text-left'>
                                Simplified campaign management with one view and regular updates. Pause, start or uplift with a single click. Manage your growth and results on the go.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon2} alt="Dashboard" className='mb-4 w-16 h-16 object-contain' />
                            <h3 className='text-xl lg:text-2xl font-bold mb-4 text-left'>
                                Dashboard
                            </h3>
                            <p className='text-sm lg:text-base text-gray-600 leading-relaxed text-left'>
                                We have designed a set of robust strategies that are delivered for all our performance campaigns. We also keep up-to-date with new technologies, to always be a step ahead.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon3} alt="Innovation" className='mb-4 w-16 h-16 object-contain' />
                            <h3 className='text-xl lg:text-2xl font-bold mb-4 text-left'>
                                Innovation
                            </h3>
                            <p className='text-sm lg:text-base text-gray-600 leading-relaxed text-left'>
                                We have revolutionized traditional marketing strategies. We offer result-oriented marketing campaigns so you achieve your goals faster.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon4} alt="Data Driven" className='mb-4 w-16 h-16 object-contain' />
                            <h3 className='text-xl lg:text-2xl font-bold mb-4 text-left'>
                                Data Driven
                            </h3>
                            <p className='text-sm lg:text-base text-gray-600 leading-relaxed text-left'>
                                We collate and analyze your data, for meaningful insights to develop tailored user acquisition strategies. Deep dive into your data and unlock hyper-growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout - 2x2 grid */}
            <div className='md:hidden w-full px-4'>
                <div className='max-w-lg mx-auto space-y-8'>
                    {/* First Row - 2 cards */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* Card 1 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon1} alt="SDE Tradition" className='mb-3 w-12 h-12 object-contain' />
                            <h3 className='text-lg font-bold mb-3 text-left'>
                                SDE Tradition
                            </h3>
                            <p className='text-xs text-gray-600 leading-relaxed text-left'>
                                Simplified campaign management with one view and regular updates. Pause, start or uplift with a single click. Manage your growth and results on the go.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon2} alt="Dashboard" className='mb-3 w-12 h-12 object-contain' />
                            <h3 className='text-lg font-bold mb-3 text-left'>
                                Dashboard
                            </h3>
                            <p className='text-xs text-gray-600 leading-relaxed text-left'>
                                We have designed a set of robust strategies that are delivered for all our performance campaigns. We also keep up-to-date with new technologies, to always be a step ahead.
                            </p>
                        </div>
                    </div>

                    {/* Second Row - 2 cards */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* Card 3 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon3} alt="Innovation" className='mb-3 w-12 h-12 object-contain' />
                            <h3 className='text-lg font-bold mb-3 text-left'>
                                Innovation
                            </h3>
                            <p className='text-xs text-gray-600 leading-relaxed text-left'>
                                We have revolutionized traditional marketing strategies. We offer result-oriented marketing campaigns so you achieve your goals faster.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='flex flex-col items-start'>
                            <img src={Icon4} alt="Data Driven" className='mb-3 w-12 h-12 object-contain' />
                            <h3 className='text-lg font-bold mb-3 text-left'>
                                Data Driven
                            </h3>
                            <p className='text-xs text-gray-600 leading-relaxed text-left'>
                                We collate and analyze your data, for meaningful insights to develop tailored user acquisition strategies. Deep dive into your data and unlock hyper-growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs