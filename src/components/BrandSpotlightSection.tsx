import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { BrandSpotlight, SpotlightProduct } from '../data/brandSpotlightData';

interface BrandSpotlightSectionProps {
  spotlight: BrandSpotlight;
}

export const BrandSpotlightSection: React.FC<BrandSpotlightSectionProps> = ({ spotlight }) => {
  const { addToCart, navigateToProduct, setSelectedCategoryFilter, setCurrentView } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.65;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const handleExploreBrand = () => {
    setSelectedCategoryFilter('all');
    setCurrentView('catalog');
  };

  const handleShopNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      handleExploreBrand();
    }
  };

  const isYogaBar = spotlight.id === 'yoga-bar';

  return (
    <section
      className={`w-full ${
        isYogaBar ? 'bg-[#FCF8EE]' : 'bg-[#FAF1F1]'
      } border-b-2 border-black relative overflow-hidden`}
    >
      {/* Brand Grid Background (Yellow for Yoga Bar, Red for Super You) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isYogaBar
            ? `
              linear-gradient(to right, rgba(220, 170, 0, 0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(220, 170, 0, 0.35) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(230, 57, 70, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(230, 57, 70, 0.25) 1px, transparent 1px)
            `,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="w-full transition-all relative z-10">
        {/* ========================================================= */}
        {/* 1. OFFICIAL CAMPAIGN BANNER (banner1.png / banner2.png) */}
        {/* ========================================================= */}
        <div
          onClick={handleExploreBrand}
          className="w-full overflow-hidden border-b-2 border-black group cursor-pointer relative"
        >
          <img
            src={spotlight.bannerImage}
            alt={`${spotlight.brandName} Campaign Banner`}
            className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
            loading="lazy"
          />

          {/* Minimalist Brutalist "SHOP NOW" CTA Button */}
          <button
            onClick={handleShopNow}
            className={`absolute z-20 font-headline-sm font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 sm:gap-2 cursor-pointer border-2 border-black rounded-xl active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5 ${
              isYogaBar
                ? 'bottom-3 sm:bottom-6 md:bottom-8 lg:bottom-10 right-3 sm:right-6 md:right-8 lg:right-10 px-3.5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base bg-[#FFE600] text-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000]'
                : 'bottom-3 sm:bottom-6 md:bottom-8 lg:bottom-10 left-3 sm:left-6 md:left-10 lg:left-14 px-3.5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base bg-[#E63946] text-white shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000]'
            }`}
            title={`Shop all ${spotlight.brandName} formulations`}
          >
            <span className="material-symbols-outlined text-sm sm:text-base md:text-lg">
              {isYogaBar ? 'verified' : 'bolt'}
            </span>
            <span>SHOP NOW</span>
            <span className="material-symbols-outlined text-sm sm:text-base md:text-lg">
              arrow_forward
            </span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* 2. SECTION SUBHEADER WITH BRUTAL IDENTITY & LINK */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-4 md:px-6 pt-4 sm:pt-5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={`w-3.5 h-3.5 border-2 border-black rounded-md inline-block shadow-[1px_1px_0px_#000] ${
                isYogaBar ? 'bg-[#FFE600]' : 'bg-[#E63946]'
              }`}
            />
            <h3 className="font-headline-sm text-lg sm:text-xl font-black uppercase tracking-tight text-black">
              CURATED {spotlight.brandName.toUpperCase()} BESTSELLERS
            </h3>
            <span
              className={`text-xs font-black px-2.5 py-0.5 border-2 border-black rounded-lg shadow-[1.5px_1.5px_0px_#000] ${
                isYogaBar
                  ? 'bg-[#FFE600] text-black'
                  : 'bg-[#E63946] text-white'
              }`}
            >
              5 FORMULATIONS
            </span>
          </div>

          <button
            onClick={handleExploreBrand}
            className="self-start sm:self-auto font-label-caps text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer px-3.5 py-2 border-2 border-black rounded-xl bg-white hover:bg-[#FFE600] text-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <span>VIEW ALL {spotlight.brandName.toUpperCase()}</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* 3. PRODUCT CAROUSEL WITH BRUTALIST CARDS */}
        {/* ========================================================= */}
        <div className="relative group/carousel px-4 md:px-6 pb-6 sm:pb-8">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              chevron_left
            </span>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border-2 border-black rounded-full shadow-[2.5px_2.5px_0px_#000] text-black flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              chevron_right
            </span>
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
          >
            {spotlight.products.map((item: SpotlightProduct) => (
              <div
                key={item.id}
                onClick={() => navigateToProduct(item.slug)}
                className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 group/card text-black relative overflow-hidden cursor-pointer"
              >
                {/* Top Accent Strip */}
                <div
                  className={`w-full h-1.5 border-b-2 border-black ${
                    isYogaBar ? 'bg-[#FFE600]' : 'bg-[#E63946]'
                  }`}
                />

                {/* Full-Bleed Product Image Stage */}
                <div
                  onClick={() => navigateToProduct(item.slug)}
                  className="relative w-full h-44 sm:h-48 overflow-hidden cursor-pointer bg-[#F4F0EA] border-b-2 border-black"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Badges Overlaid Directly on Image */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                    {/* Left Brand Badge */}
                    <div>
                      {item.badgeType === 'new' && (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase flex items-center gap-1 border border-black rounded-lg bg-[#0038FF] text-white shadow-[1.5px_1.5px_0px_#000]">
                          ✦ New
                        </span>
                      )}
                      {item.badgeType === 'tested' && (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase flex items-center gap-1 border border-black rounded-lg bg-black text-white shadow-[1.5px_1.5px_0px_#000]">
                          <span className="font-black text-[#FFE600]">✓</span> H-TESTED
                        </span>
                      )}
                      {item.badgeType === 'bestseller' && (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase flex items-center gap-1 border border-black rounded-lg bg-[#FFE600] text-black shadow-[1.5px_1.5px_0px_#000]">
                          ★ BESTSELLER
                        </span>
                      )}
                    </div>

                    {/* Right Protein Yield Tag */}
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border border-black rounded-lg text-black bg-white shadow-[1.5px_1.5px_0px_#000]">
                      {item.proteinYield}
                    </span>
                  </div>
                </div>

                {/* Product Details Block */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <span className="px-1.5 py-0.5 border border-black rounded-lg bg-[#FFE600] text-black font-black text-[11px] flex items-center gap-0.5 shadow-[1px_1px_0px_#000]">
                        {item.rating} ★
                      </span>
                      <span className="text-neutral-500 text-[11px] font-bold">
                        ({item.reviewCount.toLocaleString('en-IN')})
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => navigateToProduct(item.slug)}
                      className="text-xs sm:text-sm font-black uppercase text-black line-clamp-2 leading-snug transition-colors cursor-pointer min-h-[36px] hover:text-[#0038FF]"
                      title={item.name}
                    >
                      {item.name}
                    </h3>

                    {/* Pricing Block */}
                    <div className="pt-0.5 flex items-baseline gap-2 flex-wrap">
                      <span className="text-lg font-black text-black font-numeric-stat">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-500 line-through font-bold">
                        ₹{item.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-[#E63946] text-white border border-black rounded-lg shadow-[1px_1px_0px_#000]">
                        {item.discountPercentage}% OFF
                      </span>
                    </div>

                    {/* Delivery Estimate */}
                    <div className="flex items-center gap-1 text-[11px] text-neutral-700 font-semibold">
                      <span className="material-symbols-outlined text-sm text-[#0038FF]">
                        local_shipping
                      </span>
                      <span>{item.deliveryEstimate}</span>
                    </div>
                  </div>

                  {/* Brutalist Add To Cart Button */}
                  <div className="mt-3 pt-2.5 border-t-2 border-black/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item.fullProduct);
                      }}
                      className="w-full py-2.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">
                        shopping_bag
                      </span>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
