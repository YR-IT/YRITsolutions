import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const plans = [
    {
      title: "Web Development",
      features: [
        "Front-end Development (React, Angular, Vue)",
        "Back-end Development (Node.js, Python, PHP)",
        "Full-Stack Development",
      ],
    },
    {
      title: "Mobile App Development",
      features: [
        "Progressive Web Apps (PWAs)",
        "Native App Development (iOS, Android)",
        "Cross-Platform App Development",
      ],
    },
    {
      title: "Web Design",
      features: ["UI/UX Design", "Responsive Design", "Branding & Visual Design"],
    },
    {
      title: "Digital Marketing",
      features: [
        "Social Media Marketing",
        "SEO & Content Marketing",
        "Meta & Google Ads",
      ],
    },
  ];

  return (
    <section className="relative bg-black py-20 px-10 overflow-hidden">
      {/* Soft glow at bottom for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-gradient-to-t from-red-900/30 via-purple-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="inline-flex items-center text-sm font-semibold text-purple-400 tracking-wider uppercase mb-4 relative">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Our Pricing
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Transparent Pricing for You
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative bg-[#111] rounded-2xl p-8 flex flex-col items-start justify-between shadow-[0_0_30px_rgba(255,255,255,0.05)] transition duration-500"
              initial={{ opacity: 0, y: 60 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
                x: [0, 5, 0, -5, 0], // gentle wobble
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6">
                {plan.title}
              </h3>

              {/* Features */}
              <ul className="space-y-4 text-gray-300 text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-semibold transition-colors duration-300 shadow-md"
                onClick={() =>
                  navigate("/form", { state: { selectedPlan: plan.title } })
                }
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
