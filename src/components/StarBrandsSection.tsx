import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PARTNER_BRANDS } from '../data/partnerBrands';

/**
 * "Star Brands of the Season" – Minimalist Brutalism styling:
 * Beige background with light grid pattern, 2px black borders, hard drop shadows, yellow badges,
 * and an endless smooth marquee loop that pauses on hover.
 */
export const StarBrandsSection: React.FC = () => {
  const { navigateToPartnerStore } = useApp();

  // Duplicate for seamless 0 -> -50% infinite marquee loop
  const loopedBrands = useMemo(() => [...PARTNER_BRANDS, ...PARTNER_BRANDS], []);

  return (
    <section className="w-full bg-[#F4F0EA] py-10 md:py-14 border-b-2 border-black relative overflow-hidden">
      {/* Simple Light Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 px-4 md:px-6 relative z-10">
        <div className="w-4 h-4 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
        <h3 className="font-headline-sm text-2xl md:text-3xl font-black text-black tracking-tight">
          Star Brands of the Season
        </h3>
      </div>

      {/* Brand Cards – Continuous Infinite Loop Marquee Strip */}
      <div className="w-full overflow-hidden relative z-10 py-2">
        <div className="animate-star-brands-marquee flex gap-4 md:gap-5 pr-4 md:pr-5">
          {loopedBrands.map((brand, idx) => (
            <button
              key={`${brand.id}-${idx}`}
              onClick={() => navigateToPartnerStore(brand.id)}
              className="flex flex-col items-center shrink-0 cursor-pointer group focus:outline-none"
            >
              {/* Tall Card with 2px Black Border & Brutal Shadow */}
              <div className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 overflow-hidden relative border-2 border-black bg-white rounded-2xl shadow-[3px_3px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_#000] transition-all duration-200">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-[1] group-hover:bg-black/10 transition-colors" />

                {/* Brand image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Brand name banner at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-[2] p-2.5 bg-black border-t-2 border-black">
                  <span className="font-headline-sm text-xs text-white font-black uppercase tracking-wider block text-center truncate">
                    {brand.name}
                  </span>
                </div>

                {/* Discount badge at top-left: Yellow Brutal */}
                <div className="absolute top-2.5 left-2.5 z-[2]">
                  <span className="px-2 py-0.5 bg-[#FFE600] text-black font-label-caps text-[10px] font-black border border-black rounded-lg shadow-[1.5px_1.5px_0px_#000]">
                    {brand.discountPercentage}% OFF
                  </span>
                </div>
              </div>

              {/* Discount label below card */}
              <span className="font-body-md text-xs sm:text-sm text-black mt-2.5 text-center font-black uppercase tracking-wider group-hover:text-[#0038FF] transition-colors">
                Upto {brand.discountPercentage}% Off
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
