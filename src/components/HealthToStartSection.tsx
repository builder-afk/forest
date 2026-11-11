import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { HEALTH_ROW_1, HEALTH_ROW_2, type HealthCategory } from '../data/healthToStartWith';

/**
 * Minimalist Brutalism Category Row
 * Crisp 2px black borders, hard drop shadows, beige canvas, stark typography.
 */
const CategoryRow: React.FC<{
  title: string;
  items: HealthCategory[];
  onCardClick: (filter: string) => void;
}> = ({ title, items, onCardClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-4">
      {/* Row Title with Brutalist Accent */}
      <div className="flex items-center gap-2.5">
        <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
        <h3 className="font-headline-sm text-xl md:text-2xl font-black uppercase text-black tracking-tight">
          {title}
        </h3>
      </div>

      {/* Scrollable Track With Brutalist Arrows */}
      <div className="relative group/row">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Scroll left"
        >
          <span className="material-symbols-outlined text-2xl font-bold">chevron_left</span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Scroll right"
        >
          <span className="material-symbols-outlined text-2xl font-bold">chevron_right</span>
        </button>

        {/* Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 px-1"
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onCardClick(item.catalogFilter || 'all')}
              className="flex flex-col items-center shrink-0 cursor-pointer group focus:outline-none"
            >
              {/* Card Image – Brutalist Rounded Card with 2px solid border */}
              <div className="w-36 h-44 sm:w-40 sm:h-48 md:w-44 md:h-52 overflow-hidden bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_#000] transition-all duration-200 relative">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Category Label */}
              <span className="font-headline-sm text-xs sm:text-sm font-black uppercase text-black mt-2.5 text-center tracking-wider group-hover:text-[#0038FF] transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * "Health to Start With" + "Stronger Days Start Here" dual-row section.
 */
export const HealthToStartSection: React.FC = () => {
  const { setSelectedCategoryFilter, setCurrentView } = useApp();

  const handleCardClick = (filter: string) => {
    setSelectedCategoryFilter(filter);
    setCurrentView('catalog');
  };

  return (
    <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 space-y-10 border-b-2 border-black">
      <CategoryRow
        title="Health to Start With"
        items={HEALTH_ROW_1}
        onCardClick={handleCardClick}
      />
      <CategoryRow
        title="Stronger Days Start Here"
        items={HEALTH_ROW_2}
        onCardClick={handleCardClick}
      />
    </section>
  );
};
