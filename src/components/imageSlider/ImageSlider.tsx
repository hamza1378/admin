import React, { useState, useEffect } from 'react';

// Import images
import image1 from '../../images/image1.jpeg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const images = [image1, image2, image3]; // Array of image sources

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay: Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center">
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
            {/* Update gradient styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-50" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border-2 border-white cursor-pointer transition-all duration-400 ${
              index === currentIndex ? 'bg-white' : 'bg-transparent'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <p className="absolute bottom-20 text-white font-ubuntu font-semibold text-center sm:text-lg md:text-2xl px-4 w-full">
        Welcome back, Please sign in to continue...
      </p>
    </div>
  );
};

export default ImageSlider;
