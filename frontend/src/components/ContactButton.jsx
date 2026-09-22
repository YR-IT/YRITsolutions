import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-16 px-6 sm:px-10 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="text-center max-w-xl mx-auto">
        {/* Quote Section */}
        <blockquote className={`text-lg sm:text-xl md:text-2xl font-light mb-6 leading-relaxed italic ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          "Great things in business are never done by one person. 
          <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}> They're done by a team of people.</span>"
        </blockquote>

        {/* Contact Button */}
        <div className="relative inline-block w-full sm:w-auto">
          <button
            onClick={() => navigate('/contactus')} // ✅ Linked to ContactUs.jsx
            className="group relative w-full sm:w-auto flex items-center justify-center 
                       px-6 py-3 sm:px-8 sm:py-4 
                       text-base sm:text-lg font-semibold 
                       text-white bg-gradient-to-r from-blue-600 to-blue-700 
                       rounded-xl shadow-xl hover:shadow-blue-500/25 
                       transform hover:scale-105 transition-all duration-300 ease-out 
                       hover:from-blue-500 hover:to-blue-600 
                       focus:outline-none focus:ring-4 focus:ring-blue-500/30 
                       border border-blue-500/20"
          >
            <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-12" />
            Let's Work Together
            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        <p className={`mt-4 text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Ready to bring your vision to life? Let's start the conversation.
        </p>
      </div>
    </section>
  );
}

export default Contact;
