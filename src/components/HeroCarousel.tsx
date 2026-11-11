import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

interface HeroSlide {
  id: string;
  type: 'single' | 'split';
  image?: string;
  images?: [string, string];
  alt: string;
  categoryFilter: string;
  /** Background color matching image edges */
  bgColor: string;
  /** Optional text above the image */
  topText?: React.ReactNode;
  /** Optional text below the image */
  bottomText?: React.ReactNode;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    type: 'single',
    image: '/images/hero/hero1.png',
    alt: 'The Protein Forest Hero 1',
    categoryFilter: 'all',
    bgColor: '#FB4852'
  },
  {
    id: 'hero-2',
    type: 'single',
    image: '/images/hero/hero2.png',
    alt: 'The Protein Forest Hero 2',
    categoryFilter: 'powders',
    bgColor: '#A04CF0',
    topText: 'topText',
    bottomText: 'bottomText'
  },
  {
    id: 'hero-3',
    type: 'single',
    image: '/images/hero/hero3.png',
    alt: 'The Protein Forest Hero 3',
    categoryFilter: 'bars',
    bgColor: '#FDBA54'
  },
  {
    id: 'hero-4',
    type: 'split',
    images: ['/images/hero/hero4.1.png', '/images/hero/hero4.2.png'],
    alt: 'The Protein Forest Hero 4 - Dual Showcase',
    categoryFilter: 'drinks',
    bgColor: '#1E1930',
    topText: 'topText'
  }
];

/** Top text strip rendered inside a slide */
const SlideTopText: React.FC<{ slideId: string; bgColor: string }> = ({ slideId, bgColor }) => {
  if (slideId === 'hero-2') {
    return (
      <div
        className="w-full flex items-center justify-center py-3 sm:py-4 md:py-5 px-4 flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-center leading-tight drop-shadow-md">
          Discover Our <span className="text-[#FFE600]">Best-Selling</span> Plant-Based Protein Bars
        </h2>
      </div>
    );
  }
  if (slideId === 'hero-4') {
    return (
      <div className="w-full bg-[#1E1930] flex items-center justify-center py-3 sm:py-4 md:py-5 px-4 flex-shrink-0">
        <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-center leading-tight">
          Fuel Your Body with <span className="text-[#FFE600]">Clean, Plant-Based</span> Nutrition
        </h2>
      </div>
    );
  }
  return null;
};

/** Bottom text strip rendered inside a slide */
const SlideBottomText: React.FC<{ slideId: string; bgColor: string }> = ({ slideId, bgColor }) => {
  if (slideId === 'hero-2') {
    return (
      <div
        className="w-full flex items-center justify-center py-2.5 sm:py-3 md:py-4 px-4 flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-center drop-shadow-sm">
          🌿 12g Protein • Gluten Free • No Artificial Flavors • 100% Plant Based
        </p>
      </div>
    );
  }
  return null;
};

export const HeroCarousel: React.FC = () => {
  const { setSelectedCategoryFilter, setCurrentView } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // Auto-advance loop every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleSlideClick = (slide: HeroSlide) => {
    setSelectedCategoryFilter(slide.categoryFilter);
    setCurrentView('catalog');
  };

  return (
    <section className="w-full p-0 m-0 border-b-2 border-black bg-black relative overflow-hidden">
      <div
        className="w-full relative group/hero overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Bleed Hero Carousel */}
        <div className="relative w-full aspect-[2/1] overflow-hidden">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx;
            const hasTextLayout = slide.topText || slide.bottomText;

            return (
              <div
                key={slide.id}
                onClick={() => handleSlideClick(slide)}
                style={{ backgroundColor: slide.bgColor }}
                className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Single image slides WITH text above/below */}
                {slide.type === 'single' && slide.image && hasTextLayout && (
                  <div className="w-full h-full flex flex-col overflow-hidden">
                    {slide.topText && <SlideTopText slideId={slide.id} bgColor={slide.bgColor} />}
                    <div className="w-full flex-1 min-h-0 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-contain object-center block"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    {slide.bottomText && <SlideBottomText slideId={slide.id} bgColor={slide.bgColor} />}
                  </div>
                )}

                {/* Single image slides WITHOUT text — full bleed */}
                {slide.type === 'single' && slide.image && !hasTextLayout && (
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-contain object-center block"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                )}

                {/* Split slide: Text headline + two images side-by-side */}
                {slide.type === 'split' && slide.images && (
                  <div className="w-full h-full flex flex-col overflow-hidden">
                    {slide.topText && <SlideTopText slideId={slide.id} bgColor={slide.bgColor} />}
                    <div className="w-full flex-1 min-h-0 grid grid-cols-2 gap-0 p-0 m-0 overflow-hidden">
                      <div className="w-full h-full p-0 m-0 overflow-hidden">
                        <img
                          src={slide.images[0]}
                          alt={`${slide.alt} - Part 1`}
                          className="w-full h-full object-cover object-center block"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-full h-full p-0 m-0 overflow-hidden">
                        <img
                          src={slide.images[1]}
                          alt={`${slide.alt} - Part 2`}
                          className="w-full h-full object-cover object-center block"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {slide.bottomText && <SlideBottomText slideId={slide.id} bgColor={slide.bgColor} />}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transparent Simple Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover/hero:opacity-100"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Transparent Simple Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover/hero:opacity-100"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
};
