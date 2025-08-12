import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Web Development",
      features: [
        "Front-end Development (HTML, CSS, JavaScript, frameworks like React, Angular, Vue)",
        "Back-end Development (Node.js, Python, Ruby on Rails, PHP, Java)",
        "Full-Stack Development"
      ],
      color: "border-green-500"
    },
    {
      title: "Mobile App Development",
      features: [
        "Progressive Web Apps (PWAs)",
        "Native App Development (iOS, Android)",
        "Cross-Platform App Development"
      ],
      color: "border-red-500"
    },
    {
      title: "Web Design",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Branding and Visual Design"
      ],
      color: "border-blue-500"
    },
    {
      title: "Digital Marketing",
      features: [
        "Social Media Marketing",
        "Email Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "SEO",
        "Content Marketing",
        "Meta and Google Ads"
      ],
      color: "border-purple-500"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-2">
            Pricing
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Transparent Pricing for You
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black border ${plan.color} rounded-xl p-8 flex flex-col justify-between`}
              style={{
                clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0% 100%)"
              }}
            >
              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {plan.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3 text-gray-300 text-sm mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gray-500 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className="mt-auto inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
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
