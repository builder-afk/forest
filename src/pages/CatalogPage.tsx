import React, { useState, useMemo, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';

export const CatalogPage: React.FC = () => {
  const {
    navigateToProduct,
    openFlavorDrawer,
    addToCart,
    isProductSaved,
    toggleSaveProduct,
    searchQuery,
    setSearchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    setCurrentView
  } = useApp();

  const [sortOption, setSortOption] = useState<'potency' | 'rating' | 'price-low' | 'price-high'>('potency');
  const [selectedDietaryTags, setSelectedDietaryTags] = useState<string[]>([]);
  const [minProtein, setMinProtein] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(15000);

  const handleNavigate = useCallback((slug: string) => navigateToProduct(slug), [navigateToProduct]);
  const handleToggleSave = useCallback((id: string) => toggleSaveProduct(id), [toggleSaveProduct]);
  const handleOpenDrawer = useCallback((p: any) => openFlavorDrawer(p), [openFlavorDrawer]);
  const handleAddToCart = useCallback((p: any) => addToCart(p), [addToCart]);

  const toggleDietaryTag = (tag: string) => {
    setSelectedDietaryTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategoryFilter !== 'all' && product.category !== selectedCategoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSub = product.subtitle.toLowerCase().includes(q);
        const matchesTag = product.dietaryTags.some((t) => t.toLowerCase().includes(q));
        const matchesFlavor = product.flavors?.some((f) => f.name.toLowerCase().includes(q));
        if (!matchesName && !matchesSub && !matchesTag && !matchesFlavor) return false;
      }
      if (selectedDietaryTags.length > 0) {
        const hasAllTags = selectedDietaryTags.every((t) =>
          product.dietaryTags.some((dt) => dt.toLowerCase().includes(t.toLowerCase()))
        );
        if (!hasAllTags) return false;
      }
      const proteinNum = parseInt(product.macros.protein, 10) || 0;
      if (proteinNum < minProtein) return false;
      if (product.price > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortOption === 'potency') return (parseInt(b.macros.protein, 10) || 0) - (parseInt(a.macros.protein, 10) || 0);
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedCategoryFilter, searchQuery, selectedDietaryTags, minProtein, maxPrice, sortOption]);

  const resetFilters = () => {
    setSelectedCategoryFilter('all');
    setSearchQuery('');
    setSelectedDietaryTags([]);
    setMinProtein(0);
    setMaxPrice(15000);
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F0EA]">
      {/* Directory Header Section */}
      <section className="w-full bg-[#F4F0EA] py-8 md:py-12 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full flex flex-col gap-4">
          {/* Breadcrumb Bar */}
          <nav className="flex items-center gap-2 font-label-caps text-xs text-neutral-600 uppercase tracking-wider font-bold">
            <button onClick={() => setCurrentView('marketplace')} className="hover:text-[#0038FF] transition-colors cursor-pointer">
              Home
            </button>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-[#0038FF] font-black">Fuel Directory</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-black font-black">
              {filteredProducts.length} Clinical Formulations
            </span>
          </nav>

          {/* Headline & Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#FFE600] text-black font-label-caps text-[11px] px-3 py-1 uppercase font-black tracking-widest flex items-center gap-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_#000]">
                  <span className="material-symbols-outlined text-xs">verified</span> COA ACCREDITED
                </span>
                <span className="text-neutral-600 font-label-caps text-xs uppercase tracking-wider font-bold">
                  HPLC BATCH PROTOCOL v4.8
                </span>
              </div>
              <h1 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black leading-tight font-black">
                FUEL DIRECTORY — FORMULATED FOR UNCOMPROMISING HUMAN VELOCITY
              </h1>
              <p className="text-sm sm:text-base text-neutral-700 mt-3 max-w-3xl font-medium">
                Every production lot verified by ISO/IEC 17025 accredited laboratories. Zero amino-spiking, zero banned substances, 100% macro disclosure.
              </p>
            </div>

            {/* Metric Callout Tile */}
            <div className="flex items-center gap-4 bg-white p-4 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] self-start lg:self-auto">
              <div>
                <span className="font-label-caps text-[10px] uppercase text-neutral-600 font-bold block">
                  AVERAGE BATCH PURITY
                </span>
                <span className="font-headline-sm text-2xl font-black text-[#0038FF]">99.4%</span>
              </div>
              <div className="h-8 w-0.5 bg-black" />
              <div>
                <span className="font-label-caps text-[10px] uppercase text-neutral-600 font-bold block">
                  TESTED COMPOUNDS
                </span>
                <span className="font-headline-sm text-2xl font-black text-black">285+ WADA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Workspace: Sidebar + Results Grid */}
      <div className="w-full px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Calibration Filters Sidebar */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-44 bg-white p-5 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000]">
            {/* Filter Header */}
            <div className="flex items-center justify-between border-b-2 pb-3 border-black">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black text-xl font-bold">tune</span>
                <h2 className="font-headline-sm text-base uppercase tracking-tight text-black font-black">
                  CALIBRATION FILTERS
                </h2>
              </div>
              <button
                onClick={resetFilters}
                className="font-label-caps text-[10px] text-[#E63946] hover:underline font-black uppercase cursor-pointer"
              >
                RESET
              </button>
            </div>

            {/* Category Groups */}
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[11px] text-black uppercase tracking-wider font-black">
                CORE CATEGORY
              </span>
              <div className="flex flex-col gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Formulations', count: PRODUCTS.length },
                  { id: 'powders', label: 'Whey & Plant Powders', count: PRODUCTS.filter((p) => p.category === 'powders').length },
                  { id: 'drinks', label: 'Functional & Energy Drinks', count: PRODUCTS.filter((p) => p.category === 'drinks').length },
                  { id: 'bars', label: 'Crispy Protein Bars', count: PRODUCTS.filter((p) => p.category === 'bars').length },
                  { id: 'snacks', label: 'Protein Snack Packs', count: PRODUCTS.filter((p) => p.category === 'snacks').length },
                  { id: 'oats', label: 'Overnight Macro Oats', count: PRODUCTS.filter((p) => p.category === 'oats').length },
                  { id: 'pre-workout', label: 'Pre-Workout & Creatine', count: PRODUCTS.filter((p) => p.category === 'pre-workout').length }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`flex items-center justify-between p-2.5 transition-all cursor-pointer text-left font-bold border ${
                      selectedCategoryFilter === cat.id
                        ? 'bg-[#FFE600] text-black font-black border-black shadow-[2px_2px_0px_#000]'
                        : 'bg-[#F4F0EA] hover:bg-[#FAF7F2] text-black border-transparent hover:border-black'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="font-label-caps text-[10px] px-1.5 py-0.5 bg-white border border-black font-black">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Protein Target Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-[11px] text-black uppercase tracking-wider font-black">
                  MIN PROTEIN YIELD
                </span>
                <span className="font-headline-sm text-xs font-black text-[#0038FF]">
                  {minProtein > 0 ? `${minProtein}g+ / scoop` : 'Any Yield'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="5"
                value={minProtein}
                onChange={(e) => setMinProtein(parseInt(e.target.value, 10))}
                className="w-full accent-[#0038FF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-label-caps text-neutral-600 font-bold">
                <span>0g</span>
                <span>15g</span>
                <span>20g</span>
                <span>25g</span>
                <span>30g</span>
              </div>
            </div>

            {/* Dietary Protocols Checkboxes */}
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[11px] text-black uppercase tracking-wider font-black">
                DIETARY PROTOCOLS
              </span>
              <div className="space-y-1.5 text-xs">
                {[
                  'Informed-Sport Certified',
                  'Zero Added Sugar',
                  'Gluten-Free',
                  'Lactose-Free',
                  '100% Plant-Based'
                ].map((tag) => {
                  const isChecked = selectedDietaryTags.includes(tag);
                  return (
                    <label
                      key={tag}
                      onClick={() => toggleDietaryTag(tag)}
                      className={`flex items-center gap-2.5 p-2 cursor-pointer transition-all font-bold border ${
                        isChecked ? 'bg-[#F4F0EA] text-black border-black' : 'border-transparent hover:bg-[#F4F0EA] hover:border-black/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 accent-[#0038FF] cursor-pointer"
                      />
                      <span>{tag}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-[11px] text-black uppercase tracking-wider font-black">
                  MAX PRICE
                </span>
                <span className="font-headline-sm text-xs font-black text-black">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
                className="w-full accent-[#0038FF] cursor-pointer"
              />
            </div>
          </aside>

          {/* Results Grid Workspace */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Sort & Filter Bar */}
            <div className="bg-white p-4 border-2 border-black shadow-[2.5px_2.5px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-black">
                <span className="font-headline-sm text-base font-black text-black">
                  {filteredProducts.length}
                </span>
                <span className="font-bold">Formulations match your current filter parameters</span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="font-label-caps text-[11px] text-neutral-600 font-black uppercase">
                  SORT BY:
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-[#F4F0EA] text-black text-xs font-bold px-3 py-2 border-2 border-black focus:outline-none focus:shadow-[2px_2px_0px_#0038FF] cursor-pointer"
                >
                  <option value="potency">Protein Potency (High to Low)</option>
                  <option value="rating">Customer Rating (Highest)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] text-center space-y-4">
                <span className="material-symbols-outlined text-4xl text-neutral-500">search_off</span>
                <h3 className="font-headline-sm text-lg font-black text-black uppercase">
                  No formulations found matching criteria
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto font-medium">
                  Try lowering your minimum protein yield or resetting active dietary filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-label-md text-xs font-black uppercase cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6">
                  {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
