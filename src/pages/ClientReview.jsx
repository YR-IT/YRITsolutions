import React, { useState, useEffect } from 'react';

const ClientReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: 'AR Teeksha Gupta',
      role: 'Customer',
      company: 'Tech Solutions Inc.',
      text: 'We are associated with YR IT Solutions for over 1 years now and it has been a pleasant experience. The team is quite efficient and comes up with innovative idea development and strategies for growth.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Kiran Sharma',
      role: 'Portfolio Website',
      company: 'Creative Agency',
      text: 'YR IT Solutions has been an excellent partner working with us across multiple projects. Being an agency we are now able to expand our working scope across various disciples, with the help of a true partnership.',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      name: 'Anshul',
      role: 'Architect and Design',
      company: 'Design Studio',
      text: 'Outstanding web development services! The team delivered exactly what we needed and more. Their attention to detail and professional approach made the entire process smooth and enjoyable.',
      avatar: '👨‍🎨',
      rating: 5
    },
    {
      name: 'Yatish Kumar Goel',
      role: 'Advocate',
      company: 'Legal Services',
      text: 'YR IT Solutions transformed our app idea into reality. Their expertise in mobile development and user experience design helped us create an app that our users absolutely love. Highly recommended!',
      avatar: '👨‍⚖️',
      rating: 5
    },
    {
      name: 'Raj Singh',
      role: 'PNB BANK',
      company: 'Banking Sector',
      text: 'The digital marketing strategies implemented by SoftHub have significantly boosted our online presence. We saw a 300% increase in leads within just 3 months of working with them.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Dr Harza',
      role: 'Doctor',
      company: 'Healthcare',
      text: 'From concept to launch, YR IT Solutions handled our e-commerce pharmacy platform development flawlessly. The website is fast, secure, and user-friendly. Sales have increased by 250% since the launch.',
      avatar: '👨‍⚕️',
      rating: 5
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'} fill-current`} 
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );

  const nextSlide = () => {
    const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-purple-950/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30px 30px, rgba(59, 130, 246, 0.08) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/30 to-indigo-950/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full border border-blue-500/50 mb-6 backdrop-blur-sm">
            <span className="text-blue-300 text-sm font-medium"> Clients Review</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            What Our Clients Say
            <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it - hear from our satisfied clients who have experienced success with our services
          </p>
        </div>

        {/* Desktop Version - 2 cards per slide */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="group">
                        <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/70 hover:border-blue-500/70 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 space-y-6">
                            {/* Quote Icon */}
                            <div className="text-4xl text-blue-300/70 mb-4">"</div>
                            
                            <p className="text-gray-100 text-lg leading-relaxed">
                              {testimonial.text}
                            </p>

                            <StarRating rating={testimonial.rating} />

                            {/* Author */}
                            <div className="pt-6 border-t border-gray-800/70">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-2xl">
                                  {testimonial.avatar}
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                                  <p className="text-blue-300 font-medium">{testimonial.role}</p>
                                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800/90 text-blue-300 hover:text-blue-200 rounded-full p-4 backdrop-blur-sm border border-gray-700/70 hover:border-blue-500/70 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800/90 text-blue-300 hover:text-blue-200 rounded-full p-4 backdrop-blur-sm border border-gray-700/70 hover:border-blue-500/70 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Version - 1 card per slide */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group">
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/70">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        {/* Quote Icon */}
                        <div className="text-3xl text-blue-300/70 mb-4">"</div>
                        
                        <p className="text-gray-100 text-base leading-relaxed">
                          {testimonial.text}
                        </p>

                        <StarRating rating={testimonial.rating} />

                        {/* Author */}
                        <div className="pt-6 border-t border-gray-800/70">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-xl">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                              <p className="text-blue-300 font-medium text-sm">{testimonial.role}</p>
                              <p className="text-gray-300 text-xs">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' 
                  : 'w-3 h-3 bg-gray-700 hover:bg-gray-600 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Auto-slide progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-gray-800/70 rounded-full h-1 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all ease-linear"
              style={{
                width: '100%',
                animation: 'progress 5s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes progress {
            0% { width: 0% }
            100% { width: 100% }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientReview;