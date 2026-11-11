import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SHOP_FLAVORS, ShopFlavor } from '../data/shopByFlavorsData';

export const ShopByFlavorsSection: React.FC = () => {
  const { setSearchQuery, setSelectedCategoryFilter, setCurrentView, showToast } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const handleFlavorClick = (flavor: ShopFlavor) => {
    setSearchQuery(flavor.searchTerm);
    setSelectedCategoryFilter('all');
    setCurrentView('catalog');
    showToast(`Showing all formulations in ${flavor.name} flavor!`, 'volt');
  };

  return (
    <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black relative">
      <div className="w-full">
        {/* ========================================================= */}
        {/* SECTION HEADER (Minimalist Brutalism Header) */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE600] text-black border-2 border-black mb-3 rounded-xl shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-black text-base">palette</span>
              <span className="font-label-caps text-[11px] font-black uppercase tracking-wider text-black">
                TASTE PROFILE ARCHITECTURE
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
              SHOP BY{' '}
              <span className="bg-[#0038FF] text-white border-2 border-black rounded-lg px-3 py-0.5 inline-block ml-1 shadow-[2.5px_2.5px_0px_#000]">
                FLAVORS
              </span>
            </h2>
          </div>
          <p className="font-body-md text-xs sm:text-sm text-neutral-700 max-w-md font-medium">
            12 chef-formulated flavor profiles micro-milled with natural extracts, zero chalky aftertaste, and instant solubility across cold water, milk, or oats.
          </p>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL SCROLLABLE FLAVOR CARDS WITH REAL PHOTOS */}
        {/* ========================================================= */}
        <div className="relative group/flavors">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/flavors:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              chevron_left
            </span>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/flavors:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              chevron_right
            </span>
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex items-start gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 px-1"
          >
            {SHOP_FLAVORS.map((flavor) => (
              <button
                key={flavor.id}
                onClick={() => handleFlavorClick(flavor)}
                className="w-36 sm:w-40 md:w-44 shrink-0 flex flex-col items-center group cursor-pointer focus:outline-none transition-transform"
                title={`${flavor.name} — ${flavor.description}`}
              >
                {/* Photographic Card Container with 2px Black Border */}
                <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden relative border-2 border-black bg-white rounded-2xl shadow-[3px_3px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_#000] transition-all duration-200">
                  {/* Top Quality Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-[#FFE600] text-black border border-black rounded-lg shadow-[1px_1px_0px_#000]">
                      {flavor.tag}
                    </span>
                  </div>

                  {/* Actual Real Photographic Image */}
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Bottom Gradient overlay & Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-black border-t-2 border-black text-center">
                    <span className="font-headline-sm text-xs font-black uppercase text-white tracking-wider block truncate">
                      {flavor.name}
                    </span>
                  </div>
                </div>

                {/* Subtitle label */}
                <span className="text-[11px] font-bold text-neutral-600 mt-2 text-center group-hover:text-[#0038FF] transition-colors">
                  {flavor.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
