import React, { useEffect, useRef, useState } from 'react';
import Slide1 from '@/assets/Slide-1.jpg';
import Slide2 from '@/assets/Slide-2.jpg';
import Slide3 from '@/assets/Slide-3.jpg';

import Next from '@/assets/next.png';
import Left from '@/assets/left-arrow.png';
const slides = [
  {
    id: 1,
    title: 'Discover Amazing Apps',
    description: 'Explore thousands of apps designed to make your life easier, more productive, and more fun.',
    buttonText: 'Explore Now',
    bgImage: Slide1,
    gradient: 'from-primary/90'
  },
  {
    id: 2,
    title: 'Health & Fitness Apps',
    description: 'Track your workouts, monitor your nutrition, and achieve your health goals with our curated fitness apps.',
    buttonText: 'View Health Apps',
    bgImage: Slide2,
    gradient: 'from-purple-900/90'
  },
  {
    id: 3,
    title: 'Boost Your Productivity',
    description: 'From task managers to note-taking tools, find apps that help you stay organized and efficient.',
    buttonText: 'Explore Productivity',
    bgImage: Slide3,
    gradient: 'from-blue-900/90'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  return (
    <section className="slider-container h-[400px] sm:h-[450px] md:h-[500px] relative overflow-hidden bg-gray-100 max-w-7xl mx-auto ">
      <div
        className="slider flex transition-transform duration-500 ease-in-out h-full "
        ref={slideRef}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => (intervalRef.current = setInterval(nextSlide, 5000))}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide min-w-full relative h-full">
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} to-transparent z-10`}></div>
            <div
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
              className="h-full w-full absolute bg-cover bg-center"
            ></div>
            <div className="relative z-20 h-full flex items-center px-8 sm:px-6 lg:px-[100px]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-md sm:max-w-lg">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg mb-4 sm:mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-white text-primary hover:bg-gray-100 px-5 sm:px-6 py-2.5 sm:py-3 rounded-button font-medium whitespace-nowrap text-sm sm:text-base">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
  
      <button
  onClick={prevSlide}
  className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-white/30 hover:bg-white/50 rounded-full text-white"
>
  <img src={Left} alt="Previous" className="w-6 h-6" />
</button>

<button
  onClick={nextSlide}
  className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-white/30 hover:bg-white/50 rounded-full text-white"
>
  <img src={Next} alt="Next" className="w-6 h-6" />
</button>

    </section>
  );
};

export default HeroSlider;
