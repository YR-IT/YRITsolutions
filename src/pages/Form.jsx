import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendClientRequest } from '../helper/emailService';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaComments, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Form = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast.error('Please fill in at least name and email fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Submitting form data:', formData); // Debug log
      const result = await sendClientRequest(formData);
      
      if (result.success) {
        toast.success('Thank you! Your request has been sent successfully.');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className={`backdrop-blur-sm rounded-3xl pt-4 lg:p-10 shadow-2xl border transform hover:scale-[1.02] transition-all duration-500 animate-slide-in-right ${isDarkMode ? 'bg-gray-900/90 border-purple-500/20' : 'bg-white/90 border-purple-200/30'}`}>
        {/* Enhanced Header */}
        <div className="text-center mb-4 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-all duration-300">
            <FaPaperPlane size={28} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.1s'}}>
            <label htmlFor="name" className={`block text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaUser size={16} className="text-purple-400" />
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-50/50 text-gray-900 placeholder-gray-500'}`}
                placeholder="Enter your full name"
              />
              <FaUser size={18} className={`absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-purple-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Email Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.2s'}}>
            <label htmlFor="email" className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaEnvelope size={16} className="text-purple-400" />
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-50/50 text-gray-900 placeholder-gray-500'}`}
                placeholder="Enter your email address"
              />
              <FaEnvelope size={18} className={`absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-purple-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Phone Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.3s'}}>
            <label htmlFor="phone" className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaPhone size={16} className="text-purple-400" />
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-50/50 text-gray-900 placeholder-gray-500'}`}
                placeholder="Enter your phone number"
              />
              <FaPhone size={18} className={`absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-purple-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Company Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.4s'}}>
            <label htmlFor="company" className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaBuilding size={16} className="text-purple-400" />
              Company/Organization
            </label>
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-50/50 text-gray-900 placeholder-gray-500'}`}
                placeholder="Enter your company name"
              />
              <FaBuilding size={18} className={`absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-purple-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Service Selection */}
          <div className="group animate-slide-up" style={{animationDelay: '0.5s'}}>
            <label htmlFor="service" className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaBriefcase size={16} className="text-purple-400" />
              Service Interested In
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 appearance-none cursor-pointer ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white' : 'border-gray-300 bg-gray-50/50 text-gray-900'}`}
              >
                <option value="" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>Select a service</option>
                <option value="web-development" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>🌐 Web Development</option>
                <option value="mobile-app" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>📱 Mobile App Development</option>
                <option value="digital-marketing" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>📈 Digital Marketing</option>
                <option value="seo" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>🔍 SEO Services</option>
                <option value="consulting" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>💼 IT Consulting</option>
                <option value="ui-ux" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>🎨 UI/UX Design</option>
                <option value="other" className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>✨ Other</option>
              </select>
              <FaBriefcase size={18} className={`absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-purple-400 transition-colors duration-300 pointer-events-none ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.6s'}}>
            <label htmlFor="message" className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <FaComments size={16} className="text-purple-400" />
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`w-full px-4 py-4 pl-12 border-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400 ${isDarkMode ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-50/50 text-gray-900 placeholder-gray-500'}`}
                placeholder="Tell us about your project or requirements..."
              />
              <FaComments size={18} className={`absolute left-4 top-6 group-focus-within:text-purple-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Enhanced Submit Button */}
          <div className="pt-6 animate-slide-up flex justify-center" style={{animationDelay: '0.7s'}}>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-center py-4 px-6 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/20 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed transform scale-95'
                  : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-center pt-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 font-medium">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-of-use" className="text-purple-400 hover:text-purple-300 font-medium">
                Terms of Use
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;