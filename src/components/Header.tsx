import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES } from '../data/mockData';
import { useDebounce } from '../hooks/useDebounce';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    cartCount,
    cartTotal,
    openCart,
    searchQuery,
    setSearchQuery,
    setSelectedCategoryFilter
  } = useApp();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const debouncedSearch = useDebounce(localSearch, 300);

  // Sync debounced search to context
  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch);
      setCurrentView('catalog');
    }
  };

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategoryFilter(categoryKey);
    setCurrentView('catalog');
  };

  return (
    <header className="relative w-full z-50 bg-[#F4F0EA] border-b-2 border-black">
      <div className="flex flex-col">
        {/* Top Announcement Bar: Brutalist Red */}
        <div className="bg-[#E63946] text-white py-2 px-4 md:px-6 flex items-center justify-between font-label-caps text-[11px] font-black tracking-wider border-b-2 border-black">
          <div className="flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined text-sm text-[#FFE600]">bolt</span>
            <span>
              FLASH SALE: 25% OFF ALL WHEY ISOLATE & PROTEIN BARS • USE CODE:{' '}
              <span className="bg-[#FFE600] text-black px-1.5 py-0.5 rounded-none font-black border border-black shadow-[1px_1px_0px_#000]">
                FOREST25
              </span>{' '}
              • FREE SHIPPING OVER ₹999
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              INFORMED-SPORT CERTIFIED
            </span>
            <span>|</span>
            <button
              onClick={() => setCurrentView('coa')}
              className="hover:text-[#FFE600] transition-colors uppercase cursor-pointer font-bold"
            >
              COA LAB DOSSIER
            </button>
            <span>|</span>
            <button
              onClick={() => setCurrentView('performance-deck')}
              className="hover:text-[#FFE600] transition-colors uppercase cursor-pointer font-bold"
            >
              PERFORMANCE DECK
            </button>
            <span>|</span>
            <button
              onClick={() => setCurrentView('partner-dashboard')}
              className="hover:text-[#FFE600] transition-colors uppercase cursor-pointer font-bold"
            >
              PARTNER PORTAL
            </button>
          </div>
        </div>

        {/* Main Header Bar: Beige Canvas with Stark Black Elements */}
        <div className="w-full px-4 md:px-6 h-20 flex items-center justify-between gap-4 bg-[#F4F0EA]">
          {/* Official The Protein Forest Logo */}
          <button
            onClick={() => setCurrentView('marketplace')}
            className="flex items-center flex-shrink-0 cursor-pointer group focus:outline-none"
            title="The Protein Forest"
          >
            <div className="h-14 sm:h-16 w-auto border-2 border-black bg-[#FFE600] rounded-xl p-1 shadow-[2.5px_2.5px_0px_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_#000] transition-all flex items-center justify-center">
              <img
                src="/images/brand/the-protein-forest-logo.png"
                alt="The Protein Forest"
                className="h-full w-auto object-contain block"
              />
            </div>
          </button>

          {/* Search Bar: White Box with 2px Black Border & Brutal Shadow */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
              <div className="absolute left-3.5 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-black text-xl font-bold">search</span>
              </div>
              <input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-32 bg-white text-black font-semibold text-sm placeholder:text-neutral-500 border-2 border-black rounded-xl shadow-[2.5px_2.5px_0px_#000] focus:outline-none focus:shadow-[4px_4px_0px_#0038FF] transition-all"
                placeholder="Search 1,200+ powders, bars, oats..."
                type="text"
              />
              <div className="absolute right-2 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('Whey');
                    setCurrentView('catalog');
                  }}
                  className="px-2.5 py-1 bg-[#F4F0EA] border border-black rounded-md text-black hover:bg-[#FFE600] transition-colors text-[10px] font-black uppercase cursor-pointer"
                >
                  WHEY
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('Creatine');
                    setCurrentView('catalog');
                  }}
                  className="px-2.5 py-1 bg-[#F4F0EA] border border-black rounded-md text-black hover:bg-[#FFE600] transition-colors text-[10px] font-black uppercase cursor-pointer"
                >
                  CREATINE
                </button>
              </div>
            </form>
          </div>

          {/* Action CTAs: Rewards, Account, Cart */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Rewards Pill: Yellow Brutal */}
            <div className="hidden xl:flex items-center gap-1.5 bg-[#FFE600] px-3 py-2 border-2 border-black rounded-xl text-black font-black text-xs shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-base">stars</span>
              <span className="font-label-caps text-[11px] tracking-wider">4,280 FOREST POINTS</span>
            </div>

            {/* User Profile */}
            <button
              onClick={() => setCurrentView('performance-deck')}
              className={`flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 border-2 border-black rounded-xl transition-all cursor-pointer shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 ${currentView === 'performance-deck' || currentView === 'account'
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-[#F4F0EA]'
                }`}
              title="Marcus Vance Performance Deck"
            >
              <img
                src={IMAGES['High contrast professional athletic port'] || IMAGES['Profile']}
                alt="Marcus Vance"
                className="w-7 h-7 object-cover border border-black rounded-md"
              />
              <span className="hidden lg:inline font-bold text-xs uppercase tracking-wider">
                Marcus V.
              </span>
            </button>

            {/* Cart Trigger Button: Brutalist Blue */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0038FF] hover:bg-[#0028CC] border-2 border-black rounded-xl text-white transition-all cursor-pointer shadow-[2.5px_2.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <div className="relative flex items-center">
                <span className="material-symbols-outlined text-[#FFE600] text-xl">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-[#E63946] text-white border border-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-black text-xs tracking-wider">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </button>
          </div>
        </div>

        {/* Secondary Subcategory Nav Bar */}
        <div className="border-t-2 border-black bg-white">
          <div className="w-full px-4 md:px-6">
            <nav className="flex items-center justify-between h-11 overflow-x-auto no-scrollbar whitespace-nowrap">
              <div className="flex items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider">
                <button
                  onClick={() => setCurrentView('marketplace')}
                  className={`px-3 py-1.5 transition-all cursor-pointer rounded-lg ${currentView === 'marketplace'
                    ? 'bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                    : 'text-black hover:bg-[#F4F0EA]'
                    }`}
                >
                  Featured Home
                </button>
                <button
                  onClick={() => handleCategoryClick('powders')}
                  className="px-2.5 py-1 text-black hover:bg-[#F4F0EA] rounded-md transition-colors cursor-pointer"
                >
                  Whey & Plant Powders
                </button>
                <button
                  onClick={() => handleCategoryClick('bars')}
                  className="px-2.5 py-1 text-black hover:bg-[#F4F0EA] rounded-md transition-colors cursor-pointer"
                >
                  Protein Bars & Snacks
                </button>
                <button
                  onClick={() => handleCategoryClick('drinks')}
                  className="px-2.5 py-1 text-black hover:bg-[#F4F0EA] rounded-md transition-colors cursor-pointer"
                >
                  Performance Drinks
                </button>
                <button
                  onClick={() => handleCategoryClick('oats')}
                  className="px-2.5 py-1 text-black hover:bg-[#F4F0EA] rounded-md transition-colors cursor-pointer"
                >
                  High-Protein Oats
                </button>
                <button
                  onClick={() => handleCategoryClick('pre-workout')}
                  className="px-2.5 py-1 text-black hover:bg-[#F4F0EA] rounded-md transition-colors cursor-pointer"
                >
                  Pre-Workout & Creatine
                </button>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setCurrentView('catalog');
                  }}
                  className={`px-3 py-1.5 transition-all cursor-pointer rounded-lg ${currentView === 'catalog'
                    ? 'bg-[#0038FF] text-white border-2 border-black shadow-[2px_2px_0px_#000]'
                    : 'text-black hover:bg-[#F4F0EA]'
                    }`}
                >
                  Full Directory
                </button>
                <button
                  onClick={() => setCurrentView('partner-storefront')}
                  className={`px-3 py-1.5 transition-all cursor-pointer rounded-lg ${currentView === 'partner-storefront'
                    ? 'bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                    : 'text-black hover:bg-[#F4F0EA]'
                    }`}
                >
                  Athlete Storefronts
                </button>
              </div>

              <div className="hidden md:flex items-center gap-2 flex-shrink-0 pl-4">
                <span className="flex items-center gap-1 bg-[#E63946] text-white px-2 py-0.5 border border-black rounded-md font-black text-[10px] tracking-wider shadow-[1px_1px_0px_#000]">
                  <span className="material-symbols-outlined text-xs">local_fire_department</span>
                  CLEARANCE LAB
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
