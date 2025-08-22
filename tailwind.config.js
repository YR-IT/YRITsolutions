module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.05)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px 0 rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(139, 92, 246, 0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderRotate: {
          "0%": { 
            backgroundPosition: "0% 0%",
            borderColor: "rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3)"
          },
          "25%": { 
            backgroundPosition: "100% 0%",
            borderColor: "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3)"
          },
          "50%": { 
            backgroundPosition: "100% 100%",
            borderColor: "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3)"
          },
          "75%": { 
            backgroundPosition: "0% 100%",
            borderColor: "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 1)"
          },
          "100%": { 
            backgroundPosition: "0% 0%",
            borderColor: "rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3)"
          }
        },
      },
      animation: {
        "marquee-left": "marqueeLeft 100s linear infinite",
        "marquee-right": "marqueeRight 100s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "border-rotate": "borderRotate 4s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".will-change-transform": {
          willChange: "transform",
        },
      });
    },
  ],
};

