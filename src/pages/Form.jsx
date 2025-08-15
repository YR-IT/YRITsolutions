import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendClientRequest } from '../helper/emailService';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaComments, FaPaperPlane } from 'react-icons/fa';

const Form = () => {
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
      <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl  pt-4 lg:p-10 shadow-2xl border border-purple-500/20 transform hover:scale-[1.02] transition-all duration-500 animate-slide-in-right">
        {/* Enhanced Header */}
        <div className="text-center mb-4 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-all duration-300">
            <FaPaperPlane size={28} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          <p className="text-gray-300 text-lg">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.1s'}}>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
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
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
              <FaUser size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
          </div>

          {/* Email Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.2s'}}>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
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
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 text-white placeholder-gray-400"
                placeholder="Enter your email address"
              />
              <FaEnvelope size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
          </div>

          {/* Phone Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.3s'}}>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
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
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 text-white placeholder-gray-400"
                placeholder="Enter your phone number"
              />
              <FaPhone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
          </div>

          {/* Company Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.4s'}}>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
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
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 text-white placeholder-gray-400"
                placeholder="Enter your company name"
              />
              <FaBuilding size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
          </div>

          {/* Service Selection */}
          <div className="group animate-slide-up" style={{animationDelay: '0.5s'}}>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
              <FaBriefcase size={16} className="text-purple-400" />
              Service Interested In
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 appearance-none cursor-pointer text-white"
              >
                <option value="" className="bg-gray-800 text-white">Select a service</option>
                <option value="web-development" className="bg-gray-800 text-white">🌐 Web Development</option>
                <option value="mobile-app" className="bg-gray-800 text-white">📱 Mobile App Development</option>
                <option value="digital-marketing" className="bg-gray-800 text-white">📈 Digital Marketing</option>
                <option value="seo" className="bg-gray-800 text-white">🔍 SEO Services</option>
                <option value="consulting" className="bg-gray-800 text-white">💼 IT Consulting</option>
                <option value="ui-ux" className="bg-gray-800 text-white">🎨 UI/UX Design</option>
                <option value="other" className="bg-gray-800 text-white">✨ Other</option>
              </select>
              <FaBriefcase size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 pointer-events-none" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="group animate-slide-up" style={{animationDelay: '0.6s'}}>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
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
                className="w-full px-4 py-4 pl-12 border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm group-hover:border-purple-400 resize-none text-white placeholder-gray-400"
                placeholder="Tell us about your project or requirements..."
              />
              <FaComments size={18} className="absolute left-4 top-6 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
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
            <p className="text-sm text-gray-400">
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