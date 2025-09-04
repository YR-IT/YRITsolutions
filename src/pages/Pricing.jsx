import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Pricing = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

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
    <section className={`relative py-20 px-10 overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Soft glow at bottom for depth */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-t from-red-900/30 via-purple-900/20 to-transparent' : 'bg-gradient-to-t from-red-50 via-purple-50 to-transparent'}`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className={`relative inline-flex items-center gap-2 px-6 py-3 mb-4 rounded-full border transition-colors duration-300 ${isDarkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <h2 className={`text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Pricing</h2>
          </div>
          <h2 className={`text-4xl md:text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
            Transparent Pricing for You
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
           <div
           key={index}
           className={`relative rounded-2xl p-8 flex flex-col items-start sm:items-start md:items-start lg:items-start xl:items-start sm:text-left text-center shadow-lg transition duration-500 hover:scale-105 ${isDarkMode ? 'bg-[#111] shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'bg-white shadow-lg'}`}
         >
         
              {/* Title */}
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                {plan.title}
              </h3>

              {/* Features */}
              <ul className={`space-y-4 text-sm mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
  className="mt-auto inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
             hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm 
             font-semibold transition-colors duration-300 shadow-md 
             mx-auto"
  onClick={() =>
    navigate("/form", { state: { selectedPlan: plan.title } })
  }
>
  Choose Plan
</button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
