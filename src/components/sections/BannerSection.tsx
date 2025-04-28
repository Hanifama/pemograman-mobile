import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/img/banner.png';
import banner2 from '../../assets/img/banner2.png';
import banner3 from '../../assets/img/banner3.png';

const BannerSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="w-full h-full overflow-hidden">
        <div
          className="w-full h-full flex transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-400'
              } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
