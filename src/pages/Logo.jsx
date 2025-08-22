import React from "react";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
];

const LogoMarquee = () => {
  return (
    <section className="w-full bg-black py-12 overflow-hidden relative">
      {/* Inline CSS for animation */}
      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          display: flex;
          width: max-content;
          animation: logo-marquee 40s linear infinite;
        }
      `}</style>

      <div className="logo-marquee-track space-x-16">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
