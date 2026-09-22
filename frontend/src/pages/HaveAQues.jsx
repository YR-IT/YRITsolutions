import React from "react";
import PI from "../assets/PI12.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HaveAQues = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-900 rounded-3xl shadow-lg shadow-black/50 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={PI}
            alt="Have a Question"
            className="w-full h-auto rounded-xl shadow-lg shadow-black/40 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <motion.h3
            className="text-purple-400 text-4xl md:text-5xl font-semibold"
            whileHover={{ color: "#D8B4FE" }}
            transition={{ duration: 0.3 }}
          >
            Have a Question?
          </motion.h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Us
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We do more than just connect with our clients — we truly relate to
            their business and strive to provide the most effective and
            cost-efficient solutions possible.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link
              to="/meetingform"
              className="inline-block px-10 py-4 bg-purple-700/80 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Schedule a Meeting
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HaveAQues;
