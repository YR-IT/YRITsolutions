// FounderAnimation.jsx
import React, { useEffect, useState } from "react";
import img1 from "../assets/Achievement 1.jpg";
import img2 from "../assets/achievement 4.jpg";
import img3 from "../assets/achievement 3.jpg";
import img4 from "../assets/achievement 2.jpg";

const images = [img1, img2, img3, img4];

const FounderAchievement = () => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Slideshow autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle ESC + arrow key navigation in lightbox
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setCurrent((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <h2 className="text-center text-4xl font-bold mb-10 text-white">
        Founder's Achievements
      </h2>

      {/* Slideshow */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[current]}
            alt={`Award ${current + 1}`}
            className="w-full h-[400px] object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-400 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            className="absolute left-5 text-white text-3xl hover:text-gray-400 transition-colors"
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
          >
            ◀
          </button>

          {/* Zoomed image */}
          <img
            src={images[current]}
            alt={`Zoomed Award ${current + 1}`}
            className="max-w-[85%] max-h-[85%] rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />

          {/* Next button */}
          <button
            className="absolute right-5 text-white text-3xl hover:text-gray-400 transition-colors"
            onClick={() =>
              setCurrent((prev) => (prev + 1) % images.length)
            }
          >
            ▶
          </button>
        </div>
      )}
    </section>
  );
};

export default FounderAchievement;
