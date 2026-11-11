import React, { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { HealthToStartSection } from '../components/HealthToStartSection';
import { StarBrandsSection } from '../components/StarBrandsSection';
import { BrandSpotlightSection } from '../components/BrandSpotlightSection';
import { SUPER_YOU_SPOTLIGHT, YOGA_BAR_SPOTLIGHT } from '../data/brandSpotlightData';
import { ShopByFlavorsSection } from '../components/ShopByFlavorsSection';
import { AssetCategoryShowcase } from '../components/AssetCategoryShowcase';
import { HeroCarousel } from '../components/HeroCarousel';

export const MarketplacePage: React.FC = () => {
  const {
    navigateToProduct,
    openFlavorDrawer,
    openCoaModal,
    setCurrentView,
    setSelectedCategoryFilter,
    addToCart,
    isProductSaved,
    toggleSaveProduct
  } = useApp();

  const [powderTab, setPowderTab] = useState<'all' | 'whey' | 'clear' | 'plant'>('all');

  const handleNavigate = useCallback((slug: string) => navigateToProduct(slug), [navigateToProduct]);
  const handleToggleSave = useCallback((id: string) => toggleSaveProduct(id), [toggleSaveProduct]);
  const handleOpenDrawer = useCallback((p: any) => openFlavorDrawer(p), [openFlavorDrawer]);
  const handleAddToCart = useCallback((p: any) => addToCart(p), [addToCart]);

  const flagshipPowders = PRODUCTS.filter((p) => p.category === 'powders').filter((p) => {
    if (powderTab === 'all') return true;
    if (powderTab === 'whey') return p.id.includes('whey');
    if (powderTab === 'clear') return p.id.includes('clear');
    if (powderTab === 'plant') return p.id.includes('plant');
    return true;
  });

  const snackProducts = PRODUCTS.filter((p) => p.category === 'bars' || p.category === 'snacks');
  const oatProducts = PRODUCTS.filter((p) => p.category === 'oats');
  const drinkProducts = PRODUCTS.filter((p) => p.category === 'drinks');

  return (
    <div className="flex flex-col w-full bg-[#F4F0EA]">
      {/* ========================================================= */}
      {/* SECTION 1: HERO SHOWCASE CAROUSEL (LOOPING) */}
      {/* ========================================================= */}
      <HeroCarousel />

      {/* ========================================================= */}
      {/* SECTION 1.5: HEALTH TO START WITH – Category Discovery Cards */}
      {/* ========================================================= */}
      <HealthToStartSection />

      {/* ========================================================= */}
      {/* SECTION 1.6: STAR BRANDS OF THE SEASON */}
      {/* ========================================================= */}
      <StarBrandsSection />

      {/* ========================================================= */}
      {/* BRAND IDENTITY SPOTLIGHT: YOGA BAR (banner1.png) */}
      {/* ========================================================= */}
      <BrandSpotlightSection spotlight={YOGA_BAR_SPOTLIGHT} />

      {/* ========================================================= */}
      {/* BRAND IDENTITY SPOTLIGHT: SUPER YOU (banner2.png) */}
      {/* ========================================================= */}
      <BrandSpotlightSection spotlight={SUPER_YOU_SPOTLIGHT} />

      {/* ========================================================= */}
      {/* SHOP BY FLAVORS (12 Flavors) */}
      {/* ========================================================= */}
      <ShopByFlavorsSection />

      {/* ========================================================= */}
      {/* CURATED ASSET VAULT (Category-wise products) */}
      {/* ========================================================= */}
      <AssetCategoryShowcase />

      {/* ========================================================= */}
      {/* SECTION 2: QUICK CATEGORY GATEWAY (5 Athletic Cards) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs text-black uppercase tracking-wider font-black">
                  TAILORED MACRO CHANNELS
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
                TARGETED NUTRITION SYSTEMS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 max-w-md font-medium">
              Explore specialized fuel architectures constructed specifically for strength, lean velocity, and high-cadence endurance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {/* Card 1 */}
            <div
              onClick={() => {
                setSelectedCategoryFilter('powders');
                setCurrentView('catalog');
              }}
              className="group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="h-52 bg-[#F4F0EA] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-3">
                <OptimizedImage
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="Whey & Plant Powders"
                  src={PRODUCTS[0].image}
                  targetWidth={360}
                />
                <span className="absolute top-2.5 left-2.5 bg-black text-white font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                  CFM ISOLATES
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-sm uppercase text-black font-black leading-tight">
                    Whey & Plant Powders
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-2">
                    Cold-microfiltered CFM isolate, hydrolyzed peptides, and raw organic botanicals.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase text-[#0038FF]">
                  <span>EXPLORE 12 FORMULAS</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => {
                setSelectedCategoryFilter('bars');
                setCurrentView('catalog');
              }}
              className="group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="h-52 bg-[#F4F0EA] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-3">
                <OptimizedImage
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="Crispy Protein Bars"
                  src={PRODUCTS.find((p) => p.id === 'triple-crunch-bars')?.image || ''}
                  targetWidth={360}
                />
                <span className="absolute top-2.5 left-2.5 bg-[#FFE600] text-black font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                  1G SUGAR
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-sm uppercase text-black font-black leading-tight">
                    Crispy Protein Bars
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-2">
                    Multi-layer crispy wafer puffs with rich ganache center. Zero chalky aftertaste.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase text-[#0038FF]">
                  <span>EXPLORE BARS</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => {
                setSelectedCategoryFilter('snacks');
                setCurrentView('catalog');
              }}
              className="group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="h-52 bg-[#F4F0EA] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-3">
                <OptimizedImage
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="Protein Snack Packs"
                  src={PRODUCTS.find((p) => p.id === 'popped-protein-chips')?.image || ''}
                  targetWidth={360}
                />
                <span className="absolute top-2.5 left-2.5 bg-[#E63946] text-white font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                  HIGH CRUNCH
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-sm uppercase text-black font-black leading-tight">
                    Protein Snack Packs
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-2">
                    Savory popped protein chips, soft-baked macro cookies, and high-protein nut bites.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase text-[#0038FF]">
                  <span>EXPLORE SNACKS</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onClick={() => {
                setSelectedCategoryFilter('oats');
                setCurrentView('catalog');
              }}
              className="group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="h-52 bg-[#F4F0EA] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-3">
                <OptimizedImage
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="High-Protein Power Oats"
                  src={PRODUCTS.find((p) => p.id === 'overnight-power-oats')?.image || ''}
                  targetWidth={360}
                />
                <span className="absolute top-2.5 left-2.5 bg-black text-white font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                  28G CLEAN MACROS
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-sm uppercase text-black font-black leading-tight">
                    High-Protein Power Oats
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-2">
                    Clean-carb steel-cut oats fortified with whey isolate, roasted chia, and flaxseeds.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase text-[#0038FF]">
                  <span>EXPLORE BREAKFAST</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5 - Performance Drinks */}
            <div
              onClick={() => {
                setSelectedCategoryFilter('drinks');
                setCurrentView('catalog');
              }}
              className="group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="h-52 bg-[#F4F0EA] border-b-2 border-black relative overflow-hidden flex items-center justify-center p-3">
                <OptimizedImage
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  alt="Functional & Energy Drinks"
                  src="/images/products/apex-energy-drink.jpg"
                  targetWidth={360}
                />
                <span className="absolute top-2.5 left-2.5 bg-[#FFE600] text-black font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                  ZERO SUGAR
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-sm uppercase text-black font-black leading-tight">
                    Functional & Energy Drinks
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-2">
                    Nootropic energy seltzers, 32g RTD protein shakes, and live-culture probiotic tonics.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase text-[#0038FF]">
                  <span>EXPLORE DRINKS</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FLAGSHIP POWDERS & ISOLATES */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs text-black uppercase tracking-wider font-black">
                  CLINICALLY PURIFIED FORMULAS
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
                FLAGSHIP POWDERS & ISOLATES
              </h2>
            </div>

            {/* Filter Chips Tabs – Brutalist Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Powders' },
                { id: 'whey', label: '100% Whey Isolate' },
                { id: 'clear', label: 'Clear Whey Hydrolysate' },
                { id: 'plant', label: 'Raw Plant Fuel' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPowderTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black rounded-xl transition-all cursor-pointer ${
                    powderTab === tab.id
                      ? 'bg-[#FFE600] text-black shadow-[2.5px_2.5px_0px_#000]'
                      : 'bg-white text-black hover:bg-[#FAF7F2] shadow-[1.5px_1.5px_0px_#000]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid: Curved block cards with gap and curved shadows */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {flagshipPowders.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={isProductSaved(product.id)}
                onNavigate={handleNavigate}
                onToggleSave={handleToggleSave}
                onOpenDrawer={handleOpenDrawer}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: PROTEIN BARS & ON-THE-GO SNACKS */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#E63946] border-2 border-black shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs text-black uppercase tracking-wider font-black">
                  GOURMET ATHLETIC CRUNCH
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
                PROTEIN BARS & ON-THE-GO SNACKS
              </h2>
            </div>
            <button
              onClick={() => {
                setSelectedCategoryFilter('bars');
                setCurrentView('catalog');
              }}
              className="px-4 py-2 bg-white hover:bg-[#FFE600] text-black border-2 border-black rounded-xl font-label-caps text-xs font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] cursor-pointer self-start md:self-auto"
            >
              VIEW ALL SNACKS & BARS →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {snackProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col group overflow-hidden"
              >
                <div className="relative bg-[#F4F0EA] border-b-2 border-black h-56 p-4 flex items-center justify-center">
                  <span className="absolute top-2.5 left-2.5 bg-[#FFE600] text-black font-label-caps text-[9px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                    {product.badge || 'CRISP WAFER'}
                  </span>
                  <OptimizedImage
                    onClick={() => navigateToProduct(product.slug)}
                    src={product.image}
                    alt={product.name}
                    targetWidth={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      onClick={() => navigateToProduct(product.slug)}
                      className="font-headline-sm text-sm font-black uppercase text-black hover:text-[#0038FF] transition-colors cursor-pointer leading-tight line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-600 font-medium line-clamp-1 mt-0.5">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-1 py-1.5 px-2 bg-[#F4F0EA] border border-black rounded-xl text-center text-[10px] font-label-caps">
                    <div>
                      <span className="text-neutral-600 block font-bold">PROTEIN</span>
                      <span className="font-black text-black">{product.macros.protein}</span>
                    </div>
                    <div className="border-x border-black/20">
                      <span className="text-neutral-600 block font-bold">SUGAR</span>
                      <span className="font-black text-black">{product.macros.sugar}</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 block font-bold">CALORIES</span>
                      <span className="font-black text-black">{product.macros.calories}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-black/10">
                    <span className="font-numeric-stat text-xl font-black text-black">
                      ₹{Math.round(product.price).toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-label-md text-xs font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: SUPERCHARGED OATS & BREAKFAST */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#0038FF] border-2 border-black shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs text-black uppercase tracking-wider font-black">
                  CLEAN COMPLEX CARB FUEL
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
                SUPERCHARGED HIGH-PROTEIN OATS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {oatProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all duration-200 flex flex-col group overflow-hidden"
              >
                <div className="relative bg-[#F4F0EA] border-b-2 border-black h-64 p-4 flex items-center justify-center">
                  <span className="absolute top-2.5 left-2.5 bg-[#FFE600] text-black font-label-caps text-[10px] px-2 py-0.5 border border-black rounded-lg font-black shadow-[1px_1px_0px_#000]">
                    MACRO BREAKFAST
                  </span>
                  <OptimizedImage
                    onClick={() => navigateToProduct(product.slug)}
                    src={product.image}
                    alt={product.name}
                    targetWidth={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      onClick={() => navigateToProduct(product.slug)}
                      className="font-headline-sm text-base font-black uppercase text-black hover:text-[#0038FF] transition-colors cursor-pointer leading-tight"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 mt-1 font-medium">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-[#F4F0EA] border border-black rounded-xl text-center text-xs font-label-caps">
                    <div>
                      <span className="text-neutral-600 block text-[10px] font-bold">PROTEIN</span>
                      <span className="font-black text-black text-sm">{product.macros.protein}</span>
                    </div>
                    <div className="border-x border-black/20">
                      <span className="text-neutral-600 block text-[10px] font-bold">CARBS</span>
                      <span className="font-black text-black text-sm">45G</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 block text-[10px] font-bold">CALORIES</span>
                      <span className="font-black text-black text-sm">{product.macros.calories}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-black/10">
                    <div>
                      <span className="font-numeric-stat text-2xl font-black text-black block leading-none">
                        ₹{Math.round(product.price).toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[10px] text-[#0038FF] font-label-caps font-black mt-1">
                        20 Bowls Per Tub
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-5 py-2.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-label-md text-xs font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: FUNCTIONAL & ENERGY BEVERAGES */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F4F0EA] py-10 md:py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black shadow-[1.5px_1.5px_0px_#000]" />
                <span className="font-label-caps text-xs text-black uppercase tracking-wider font-black">
                  READY-TO-DRINK VELOCITY & BIOMARKER RECOVERY
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl uppercase text-black tracking-tight font-black leading-none">
                FUNCTIONAL & ENERGY DRINKS
              </h2>
            </div>
            <button
              onClick={() => {
                setSelectedCategoryFilter('drinks');
                setCurrentView('catalog');
              }}
              className="px-4 py-2 bg-white hover:bg-[#FFE600] text-black border-2 border-black rounded-xl font-label-caps text-xs font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] cursor-pointer self-start md:self-auto flex items-center gap-1.5"
            >
              <span>VIEW ALL {drinkProducts.length} DRINKS</span>
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {drinkProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={isProductSaved(product.id)}
                onToggleSave={handleToggleSave}
                onOpenDrawer={handleOpenDrawer}
                onAddToCart={handleAddToCart}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: PERFORMANCE NUTRITION TRANSPARENCY & PROOF BANNER */}
      {/* ========================================================= */}
      <section className="w-full bg-black text-white py-14 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-2.5 py-1 bg-[#FFE600] text-black border border-black rounded-lg font-label-caps text-xs uppercase font-black tracking-widest inline-block shadow-[2px_2px_0px_#FFE600]">
              PROVABLE LABEL INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-black tracking-tight text-white leading-tight">
              WE PUBLISH INDEPENDENT COA LAB RESULTS FOR EVERY SINGLE BATCH.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-medium leading-relaxed">
              Zero spiked nitrogen. Zero hidden amino amino fillers. Every batch of Apex Pro Whey Isolate is tested via Reverse Phase HPLC at ISO/IEC 17025 certified analytical laboratories.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openCoaModal('APX-9924-W')}
                className="px-6 py-3.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-headline-sm text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-[3px_3px_0px_#FFF] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span className="material-symbols-outlined text-base">science</span>
                <span>INSPECT BATCH #APX-9924-W COA</span>
              </button>

              <button
                onClick={() => navigateToProduct('apex-pro-whey')}
                className="px-6 py-3.5 bg-[#0038FF] hover:bg-[#002BCC] text-white border-2 border-white rounded-xl font-headline-sm text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_#FFF] active:translate-x-0.5 active:translate-y-0.5"
              >
                EXPLORE CFM CIRCUIT SPECS
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white text-black border-2 border-white rounded-2xl p-6 space-y-4 text-center shadow-[4px_4px_0px_#FFE600]">
            <div className="w-16 h-16 bg-[#FFE600] border-2 border-black rounded-xl text-black mx-auto flex items-center justify-center font-black shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-3xl font-black">verified</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-lg font-black text-black uppercase">
                100% LABEL CLAIM PASS
              </h4>
              <p className="text-xs text-neutral-700 mt-1 font-semibold">
                Measured at 30.42g protein per 34g scoop vs 30.00g label claim (+1.4% purity safety margin).
              </p>
            </div>
            <div className="text-[11px] font-mono text-black font-black bg-[#F4F0EA] p-2 border border-black rounded-lg">
              LOT #APX-9924-W • VERIFIED HPLC
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
