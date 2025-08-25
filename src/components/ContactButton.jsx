import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="py-18 px-10 bg-black">
      <div className="text-center max-w-xl mx-auto">
        {/* Quote Section */}
        <blockquote className="text-xxl md:text-2xl font-light text-gray-200 mb-6 leading-relaxed italic">
          "Great things in business are never done by one person. 
          <span className="text-blue-400 font-medium"> They're done by a team of people.</span>"
        </blockquote>

        {/* Contact Button */}
        <div className="relative inline-block">
          <button
            onClick={() => navigate('/contactus')} // Navigate instead of opening modal
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 ease-out hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border border-blue-500/20"
          >
            <MessageCircle className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
            Let's Work Together
            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        <p className="text-gray-400 mt-4 text-base">
          Ready to bring your vision to life? Let's start the conversation.
        </p>
      </div>
    </section>
  );
}

export default Contact;
