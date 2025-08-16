import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientReview from './ClientReview';

// Import assets
import WebImg from '../assets/web_d_gif.gif';
import AppImg from '../assets/android-app-development-in-lucknow.gif';
import UIUXImg from '../assets/web-developmen-design-1.gif';
import DigitalImg from '../assets/Demystifying-The-Role-of-Analytics-1.gif';


const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('web');
  const [isNavigating, setIsNavigating] = useState(false);

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const services = [
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'app', label: 'App Development', icon: '📱' },
    { id: 'uiux', label: 'UI/UX Development', icon: '🎨' },
    { id: 'digital', label: 'Digital Marketing', icon: '📊' }
  ];

  const renderHomeContent = () => {
    const content = {
      app: {
        title: "Turning Your App Ideas into Reality",
        description: "At YR IT SOLUTIONS, we build secure, feature-rich mobile apps using advanced tech like IoT, AR/VR, and AI. Our native and cross-platform apps offer seamless UX, high performance, and lasting business value."
      },
      uiux: {
        title: "Custom UI Development for Exceptional UX",
        description: "Enhance your online impact with professional custom website design services tailored to your brand. Our expert team delivers stunning, responsive designs that engage, inspire, and effectively convert visitors into loyal customers."
      },
      digital: {
        title: "Designing Innovative, Impactful Digital Experiences",
        description: "User-first interfaces tailored to your brand are at the core of YR IT SOLUTIONS. Our UI/UX services combine creativity, functionality, and cutting-edge tech to deliver engaging, seamless experiences across web and mobile platforms."
      },
      web: {
        title: "We Build Experiences, Not Just Websites",
        description: "Maximize your business potential with robust and user-friendly web applications from YR IT Solutions. Our professional web app development services experts build solutions to achieve agility and precision."
      }
    };

    const current = content[selectedService];
    

    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="space-y-4">
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight animate-slideInLeft relative z-10">
              {current.title}
            </h2>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-slideInLeft animation-delay-200"></div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl animate-slideInLeft animation-delay-200">
            {current.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 animate-slideInUp animation-delay-400">
          <button 
            onClick={(event) => {
              if (isNavigating) return;
              setIsNavigating(true);
              
              
              const button = event.target.closest('button');
              button.style.transform = 'scale(0.95)';
              
            
              window.scrollTo({ top: 0, behavior: 'smooth' });
              
              
              setTimeout(() => {
                navigate('/meetingform');
                setIsNavigating(false);
              }, 400);
            }}
            className={`group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/30 border-0 button-click ${isNavigating ? 'opacity-75 cursor-not-allowed navigation-loading' : ''}`}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">Schedule a Meeting</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110 group-hover:scale-100"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
          </button>
          <button 
            onClick={(event) => {
              if (isNavigating) return; 
              setIsNavigating(true);
              
              
              const button = event.target.closest('button');
              button.style.transform = 'scale(0.95)';
              
            
              window.scrollTo({ top: 0, behavior: 'smooth' });
              
              
              setTimeout(() => {
                navigate('/contactus');
                setIsNavigating(false);
              }, 400);
            }}
            className={`group relative bg-transparent hover:bg-gray-800/50 text-white px-10 py-4 border-2 border-blue-600 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 hover:border-purple-600 overflow-hidden button-click ${isNavigating ? 'opacity-75 cursor-not-allowed navigation-loading' : ''}`}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-purple-400">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>
      </div>
    );
  };

  const renderServiceContent = () => {
    const serviceDetails = {
      web: [
        {
          title: "Custom Web Application Development",
          description: "We build scalable, tailored web apps—from wireframing to responsive UI—to align with your unique business goals."
        },
        {
          title: "Application Upgradation & Technology Migration",
          description: "Modernize legacy systems or migrate platforms seamlessly with minimal downtime and future-ready architecture."
        },
        {
          title: "Mobile App & Web Integration",
          description: "Unify mobile and web platforms to deliver consistent performance and user experience across all devices."
        },
        {
          title: "Custom API Design & Integration",
          description: "Connect with third-party services or internal systems through secure, scalable APIs tailored to your needs."
        },
        {
          title: "Performance Optimization & Scalability",
          description: "Boost speed, reliability, and capacity with fine-tuned web apps built to scale with your business."
        },
      ],
      app: [
        {
          title: "App Consulting",
          description: "Get expert guidance on tech stack and architecture to ensure optimal app performance."
        },
        {
          title: "Cross-Platform Apps",
          description: "Build apps that work seamlessly across iOS and Android using a single codebase."
        },
        {
          title: "Upgradation & Migration",
          description: "Modernize your app or transition it to a new platform without disruption."
        },
        {
          title: "QA and Testing",
          description: "Ensure reliability and performance with manual and automated testing."
        },
        {
          title: "Maintenance and Support",
          description: "Ongoing support covering compliance, performance, and feature evolution."
        }
      ],
      uiux: [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Improve visibility and drive organic traffic with on-page, technical, and content-based SEO strategies built into your website.",
        },
        {
          title: "Custom Web Designing",
          description: "Tailored websites that reflect your brand's identity and speak directly to your audience. We focus on originality, usability, and purpose-driven design.",
        },
        {
          title: "Landing Page Design",
          description: "High-converting landing pages designed to capture leads and drive user action. Perfect for campaigns, product launches, and promotions.",
        },
        {
          title: "Responsive Web Design",
          description: "Seamless user experiences across desktops, tablets, and smartphones. Our designs adapt fluidly to all screen sizes and resolutions.",
        },
        {
          title: "Mobile-First Design",
          description: "Designed with mobile users in mind first, ensuring fast load times, intuitive navigation, and better engagement on small screens.",
        },
      ],
      digital: [
        {
          title: "Performance Marketing",
          description: "Drive sustainable growth with data-backed campaigns focused on measurable ROI."
        },
        {
          title: "Search Engine Optimization (SEO)",
          description: "Increase organic traffic by improving your site's visibility in search results."
        },
        {
          title: "Conversion Rate Optimization",
          description: "Improve user journeys to boost leads, sign-ups, and sales."
        },
        {
          title: "Consulting & Strategy",
          description: "Align your goals with a tailored roadmap to reach the right audience effectively."
        },
        {
          title: "Account-Based Marketing (ABM)",
          description: "Engage high-value accounts with personalized campaigns and deeper insights."
        }
      ]
    };

    return (
      <div className="grid gap-4">
        {serviceDetails[selectedService].map((item, index) => (
          <div 
            key={index} 
            className="group relative p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] text-center lg:text-left cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-4 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-blue-500/50 relative">
                <div className="text-xl font-bold text-white">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl animate-ping opacity-20"></div>
              </div>
                             <div className="space-y-2 flex-1">
                 <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-700">
                   {item.title}
                 </h3>
                 <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                   {item.description}
                 </p>
               </div>
            </div>
            
            <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    );
  };

  const renderServiceRightContent = () => {
    const rightContent = {
      web: [
        { title: "UI/UX Design & Development", description: "Design intuitive, engaging interfaces with smooth navigation across all devices.", icon: "🎨" },
        { title: "CMS-Based Website Development", description: "Create flexible, easy-to-manage sites using WordPress, Strapi, or headless CMS.", icon: "🧩" },
        { title: "Front-end Development", description: "Build responsive, modern web UIs using React, Vue, and Tailwind CSS.", icon: "💻" },
        { title: "Back-end Development", description: "Develop secure, scalable systems with Node.js, Django, Laravel, and cloud tools.", icon: "🛠️" },
        { title: "Quality Assurance & Testing", description: "Test apps thoroughly with manual and automated tools to ensure top performance.", icon: "✅" }
      ],
      app: [
        { title: "Native App Development", description: "High-performance apps built specifically for iOS or Android platforms.", icon: "📱" },
        { title: "Mobile App Design", description: "Engaging UI and intuitive UX that enhance adoption and user satisfaction.", icon: "🎨" },
        { title: "App Integration", description: "Securely connect with third-party APIs, payment systems, and cloud services.", icon: "🔌" },
        { title: "Digital Transformation", description: "Leverage AI, IoT, and cloud to digitize workflows and enhance mobile capabilities.", icon: "🌐" },
        { title: "App Store Optimization (ASO)", description: "Boost your app's discoverability and downloads with ASO strategies and keyword targeting.", icon: "🚀" }
      ],
      uiux: [
        { title: "eCommerce Website Design", description: "Conversion-focused online stores with intuitive layouts, smooth navigation, and secure payment integration for better sales.", icon: "🛒" },
        { title: "UI/UX Design", description: "Clean, engaging designs focused on user behavior and interaction. We ensure every element enhances the overall user journey.", icon: "🎨" },
        { title: "Website Redesign", description: "Modernize outdated websites with fresh designs and improved functionality. We focus on visual appeal and performance upgrades.", icon: "♻️" },
        { title: "CMS Website Design", description: "Easy-to-manage websites using platforms like WordPress or headless CMS. Empower your team to update and scale content quickly.", icon: "🧩" },
        { title: "Accessibility Optimization", description: "Build inclusive websites that meet accessibility standards. We ensure usability for all users, including those with disabilities.", icon: "♿" }
      ],
      digital: [
        { title: "Social Media Marketing", description: "Grow engagement and visibility through strategic content and active community management.", icon: "📱" },
        { title: "Content Marketing", description: "Build authority with blogs, videos, and infographics tailored to your audience.", icon: "📝" },
        { title: "PPC Marketing", description: "Drive traffic and leads instantly with targeted ad campaigns that optimize ROI.", icon: "💰" },
        { title: "Email Marketing", description: "Send personalized emails to convert leads, retain users, and boost engagement.", icon: "📧" },
        { title: "Website Speed Optimization", description: "Improve load times for better UX, SEO, and higher conversion rates.", icon: "⚡" }
      ]
    };

    return (
      <div className="grid gap-4">
        {rightContent[selectedService].map((item, index) => (
          <div 
            key={index} 
            className="group relative p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-blue-500/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] text-center lg:text-left cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-4 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-blue-500/50 relative">
                <div className="text-xl">{item.icon}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg group-hover:scale-150 transition-all duration-700"></div>
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 uppercase tracking-wide transition-all duration-700">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">{item.description}</p>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    );
  };

  const getHeroImage = () => {
    const images = {
      app: AppImg,
      uiux: UIUXImg,
      digital: DigitalImg,
      web: WebImg
    };
    return images[selectedService];
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-6">
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fadeIn">
                We Strive To Deliver
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Development Services
                </span>
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-slideInLeft animation-delay-300"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn animation-delay-300">
              We specialize in creating visually appealing, high-quality, and user-friendly applications that drive business growth.
            </p>
          </div>

          
          <div className="mb-12">
            
            <div className="hidden md:flex justify-center">
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-700 hover:shadow-blue-500/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-all duration-700"></div>
                <div className="flex space-x-3 relative z-10">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceChange(service.id)}
                      className={`relative px-8 py-5 rounded-2xl font-semibold transition-all duration-700 flex items-center space-x-4 group overflow-hidden ${
                        selectedService === service.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105 hover:scale-110'
                          : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:scale-105'
                      }`}
                    >
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{service.icon}</span>
                      <span className="font-semibold">{service.label}</span>
                      {selectedService === service.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-80 -z-10 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            
            <div className="md:hidden flex justify-center">
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700 w-full hover:shadow-blue-500/20 transition-all duration-700">
                <label className="block text-sm font-semibold text-gray-300 mb-3">Choose Service:</label>
                <select
                  className="w-full p-4 text-base border border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 hover:border-blue-400 bg-gray-800 text-white"
                  onChange={(e) => handleServiceChange(e.target.value)}
                  value={selectedService}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8 order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
              {renderHomeContent()}
            </div>

            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group w-full max-w-lg animate-fadeIn animation-delay-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-1000 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700 hover:shadow-blue-500/30 transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <img
                    src={getHeroImage()}
                    alt="Service Illustration"
                    className="w-full h-auto max-h-[28rem] object-contain rounded-2xl transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
             <section className="pt-0 pb-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-700/50 hover:shadow-blue-500/20 transition-all duration-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-all duration-700"></div>
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              
              <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="space-y-6 animate-fadeIn">
                  <div className="relative">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      We work with you for
                      <span className="block gradient-text">growth</span>
                    </h2>
                  </div>
                </div>
                {renderServiceContent()}
              </div>

              
                             <div className="space-y-6 py-4 text-center lg:text-left animate-fadeIn animation-delay-300">
                <div className="relative">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Specializations</h3>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-slideInLeft animation-delay-200"></div>
                </div>
                {renderServiceRightContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientReview />
    </div>
  );
};

export default Services;
