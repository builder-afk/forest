import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { PARTNER_BRANDS } from '../data/partnerBrands';
import { ProductCard } from '../components/ProductCard';

export const PartnerStorefrontPage: React.FC = () => {
  const {
    navigateToProduct,
    openFlavorDrawer,
    addToCart,
    showToast,
    toggleSaveProduct,
    isProductSaved,
    selectedPartnerSlug,
    setSelectedPartnerSlug
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<'all' | 'whey' | 'recovery' | 'snacks'>('all');

  // Derive the active brand index from the selected partner slug
  const activeBrandIndex = Math.max(
    0,
    PARTNER_BRANDS.findIndex((b) => b.id === selectedPartnerSlug)
  );
  const activeBrand = PARTNER_BRANDS[activeBrandIndex];

  // When user clicks a brand in the switcher, update the URL slug
  const handleBrandSelect = (idx: number) => {
    setSelectedPartnerSlug(PARTNER_BRANDS[idx].id);
    setActiveCategory('all');
  };

  const brandProducts = PRODUCTS.filter((p) => {
    // Brand-specific filtering
    if (activeBrandIndex === 1) {
      if (!p.id.includes('intra') && !p.id.includes('pre') && !p.id.includes('bar') && !p.id.includes('energy')) return false;
    } else if (activeBrandIndex === 2) {
      if (!p.id.includes('plant') && !p.id.includes('vegan') && !p.id.includes('chia') && !p.id.includes('botanical')) return false;
    } else if (activeBrandIndex === 3) {
      if (!p.id.includes('bulk') && !p.id.includes('creatine') && !p.id.includes('pro-whey') && !p.id.includes('isolate')) return false;
    } else if (activeBrandIndex === 4) {
      if (!p.id.includes('collagen') && !p.id.includes('peptide') && !p.id.includes('hydroly') && !p.id.includes('clear')) return false;
    } else if (activeBrandIndex === 5) {
      if (!p.id.includes('casein') && !p.id.includes('night') && !p.id.includes('dual-velocity')) return false;
    } else if (activeBrandIndex === 6) {
      if (p.category !== 'oats') return false;
    } else if (activeBrandIndex === 7) {
      if (p.category !== 'drinks') return false;
    }

    if (activeCategory === 'whey') return p.category === 'powders';
    if (activeCategory === 'recovery') return p.category === 'pre-workout' || p.id.includes('casein') || p.category === 'drinks';
    if (activeCategory === 'snacks') return p.category === 'bars' || p.category === 'snacks' || p.category === 'oats';
    return true;
  });

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(activeBrand.code);
    showToast(`Copied partner discount code ${activeBrand.code} to clipboard!`, 'volt');
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F0EA]">
      {/* 1. Storefront Switcher & Directory Bar */}
      <section className="w-full bg-[#F4F0EA] pt-8 pb-6 border-b-2 border-black">
        <div className="w-full px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs uppercase tracking-wider text-black font-black">
                  Federated Brand Network
                </span>
              </div>
              <h2 className="font-headline-sm text-2xl md:text-3xl uppercase text-black font-black tracking-tight">
                Official Partner Storefronts
              </h2>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto text-xs font-label-caps flex-wrap">
              <span className="px-3.5 py-1.5 bg-white text-black border-2 border-black rounded-xl uppercase font-black shadow-[2px_2px_0px_#000]">
                8 Verified Accredited Labs &amp; Hubs
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0038FF] text-white border-2 border-black rounded-xl uppercase font-black shadow-[2px_2px_0px_#000]">
                <span className="material-symbols-outlined text-[15px] font-bold">verified</span>
                ISO 17025 Certified Direct
              </span>
            </div>
          </div>

          {/* Horizontal Brand Switcher Ribbon */}
          <div className="flex items-start gap-5 sm:gap-7 md:gap-8 overflow-x-auto pb-4 pt-3 no-scrollbar xl:justify-between px-1">
            {PARTNER_BRANDS.map((brand, idx) => {
              const isSelected = activeBrandIndex === idx;
              return (
                <button
                  key={brand.name}
                  onClick={() => handleBrandSelect(idx)}
                  className="flex flex-col items-center group cursor-pointer shrink-0 transition-transform focus:outline-none"
                >
                  {/* Clean Image Container with 2px Black Border & Curved Corners */}
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-black rounded-2xl overflow-hidden aspect-square transition-all duration-200 bg-white ${
                      isSelected
                        ? 'shadow-[4px_4px_0px_#FFE600] -translate-y-1'
                        : 'shadow-[3px_3px_0px_#000] hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000]'
                    }`}
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Name Only Underneath */}
                  <span
                    className={`font-headline-sm text-xs sm:text-sm text-center mt-2.5 max-w-[110px] sm:max-w-[130px] leading-snug transition-colors line-clamp-2 block uppercase ${
                      isSelected
                        ? 'text-[#0038FF] font-black'
                        : 'text-black font-bold group-hover:text-[#0038FF]'
                    }`}
                  >
                    {brand.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Brand Hero Takeover Banner */}
      <section className="w-full px-4 md:px-6 py-8">
        <div className="relative bg-white text-black p-6 sm:p-10 border-2 border-black rounded-3xl shadow-[5px_5px_0px_#000]">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#FFE600] text-black border border-black font-label-caps text-xs px-2.5 py-1 font-black uppercase tracking-wider rounded-lg shadow-[1.5px_1.5px_0px_#000]">
                FLAGSHIP FORMULATION PARTNER
              </span>
              <span className="text-black text-xs font-label-caps flex items-center gap-1 font-black uppercase">
                <span className="material-symbols-outlined text-sm font-bold text-[#0038FF]">verified</span>
                {activeBrand.cert}
              </span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl uppercase font-black tracking-tight text-black leading-none">
              {activeBrand.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              {activeBrand.bio}
            </p>

            {/* Exclusive Promo Pill */}
            <div className="p-3.5 bg-[#F4F0EA] border-2 border-black rounded-2xl inline-flex items-center gap-3 shadow-[2.5px_2.5px_0px_#000] flex-wrap">
              <span className="text-xs font-label-caps text-black font-black uppercase">
                EXCLUSIVE STOREFRONT OFFER:
              </span>
              <span className="font-mono text-sm font-black text-[#0038FF]">
                {activeBrand.code}
              </span>
              <button
                onClick={handleCopyCode}
                className="px-4 py-1.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black text-xs font-label-caps font-black uppercase cursor-pointer transition-all rounded-xl shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                COPY CODE ({activeBrand.discountPercentage}% OFF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accreditation & Certifications Strip */}
      <section className="w-full bg-[#F4F0EA] py-6 border-b-2 border-black">
        <div className="w-full px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {activeBrand.credentials.map((cred, i) => (
              <div
                key={i}
                className="p-3.5 bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                <span className="material-symbols-outlined text-[#0038FF] text-base font-bold">verified_user</span>
                <span className="font-label-caps text-xs font-black text-black truncate uppercase">
                  {cred}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curated Product Showcase */}
      <section className="w-full px-4 md:px-6 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
              <span className="font-label-caps text-xs text-black font-black uppercase tracking-widest block">
                STOREFRONT INVENTORY
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl uppercase font-black tracking-tight text-black">
              CURATED LAB FORMULATIONS
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto text-xs font-label-caps flex-wrap">
            {[
              { id: 'all', label: 'All Formulations' },
              { id: 'whey', label: 'Whey & Hydrolysates' },
              { id: 'recovery', label: 'Recovery & Night' },
              { id: 'snacks', label: 'Snacks & Oats' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 font-black uppercase cursor-pointer transition-all border-2 border-black rounded-xl ${
                  activeCategory === cat.id
                    ? 'bg-[#FFE600] text-black shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5'
                    : 'bg-white text-black hover:bg-[#FAF7F2] shadow-[2px_2px_0px_#000]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: Standalone Curved Brutalist Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSaved={isProductSaved(product.id)}
              onNavigate={(slug) => navigateToProduct(slug)}
              onToggleSave={(id) => toggleSaveProduct(id)}
              onOpenDrawer={(p) => openFlavorDrawer(p)}
              onAddToCart={(p) => addToCart(p)}
            />
          ))}
          {brandProducts.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]">
              <span className="material-symbols-outlined text-4xl text-neutral-400 mb-2">inventory_2</span>
              <p className="font-headline-sm text-sm font-black uppercase text-neutral-600">
                No formulations found for this filter category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
