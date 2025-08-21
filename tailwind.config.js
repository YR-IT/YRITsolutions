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
      },
      animation: {
        "marquee-left": "marqueeLeft 10s linear infinite",  // slowed down
        "marquee-right": "marqueeRight 10s linear infinite", // slowed down
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
