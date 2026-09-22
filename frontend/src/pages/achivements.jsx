import React, { useEffect, useState } from 'react';
import img1 from '../assets/Achievement 1.jpg';
import img2 from '../assets/achievement 4.jpg';
import img3 from '../assets/achievement 3.jpg';
import img4 from '../assets/achievement 2.jpg';
const images = [img1, img2, img3, img4];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[current]}
        alt={`Award ${current + 1}`}
        className="w-full w-full h-[400px] object-cover h-64 transition-all duration-1000 ease-in-out"
      />
    </div>
  );
};

export default ImageCarousel;
