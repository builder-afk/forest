import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { ASSET_POWDER_PRODUCTS, ASSET_BAR_PRODUCTS, ASSET_DRINK_PRODUCTS, ASSET_OAT_PRODUCTS } from '../data/assetsProducts';

export const AssetCategoryShowcase: React.FC = () => {
  const {
    openFlavorDrawer,
    addToCart,
    isProductSaved,
    toggleSaveProduct,
    navigateToProduct,
    setSelectedCategoryFilter,
    setCurrentView
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<'all' | 'powders' | 'bars' | 'drinks' | 'oats'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Memoized handlers
  const handleNavigate = (slug: string) => navigateToProduct(slug);
  const handleToggleSave = (id: string) => toggleSaveProduct(id);
  const handleOpenDrawer = (product: Product) => openFlavorDrawer(product);
  const handleAddToCart = (product: Product) => addToCart(product, product.flavors[0], product.sizes[0], 1);

  // Grouped assets
  const categories = [
    { key: 'all', label: 'All Formulations', icon: 'apps', count: 57 },
    { key: 'powders', label: 'Whey & Plant Powders', icon: 'grain', count: ASSET_POWDER_PRODUCTS.length },
    { key: 'bars', label: 'Protein Bars & Snacks', icon: 'nutrition', count: ASSET_BAR_PRODUCTS.length },
    { key: 'drinks', label: 'Performance Drinks', icon: 'local_drink', count: ASSET_DRINK_PRODUCTS.length },
    { key: 'oats', label: 'High-Protein Oats', icon: 'breakfast_dining', count: ASSET_OAT_PRODUCTS.length }
  ] as const;

  // Filtered dataset
  const filteredProducts = React.useMemo(() => {
    switch (activeCategory) {
      case 'powders':
        return ASSET_POWDER_PRODUCTS;
      case 'bars':
        return ASSET_BAR_PRODUCTS;
      case 'drinks':
        return ASSET_DRINK_PRODUCTS;
      case 'oats':
        return ASSET_OAT_PRODUCTS;
      case 'all':
      default:
        return [
          ...ASSET_POWDER_PRODUCTS,
          ...ASSET_BAR_PRODUCTS,
          ...ASSET_DRINK_PRODUCTS,
          ...ASSET_OAT_PRODUCTS
        ];
    }
  }, [activeCategory]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (cat: 'all' | 'powders' | 'bars' | 'drinks' | 'oats') => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  const handleViewInCatalog = () => {
    setSelectedCategoryFilter(activeCategory === 'all' ? 'all' : activeCategory);
    setCurrentView('catalog');
  };

  return (
    <section className="w-full bg-[#F4F0EA] py-12 md:py-16 border-b-2 border-black">
      <div className="w-full">
        {/* Section Header with Minimalist Brutalist Accents */}
        <div className="px-4 md:px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFE600] border-2 border-black rounded-xl text-black mb-3 shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-black text-base">verified</span>
              <span className="font-label-caps text-[11px] font-black uppercase tracking-wider">
                ORIGINAL LAB ASSETS & FORMULATIONS
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl uppercase text-black tracking-tighter font-black leading-none">
              CURATED ASSETS BY{' '}
              <span className="bg-[#0038FF] text-white px-3 py-0.5 border-2 border-black rounded-lg inline-block ml-1 shadow-[3px_3px_0px_#000]">
                CATEGORY
              </span>
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-neutral-700 max-w-2xl mt-3 font-semibold">
              Browse all 57 athlete-grade formulations direct from our production asset vault. Third-party tested, Informed-Sport screened, and reverse-phase HPLC verified.
            </p>
          </div>

          <button
            onClick={handleViewInCatalog}
            className="self-start lg:self-auto px-5 py-3 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <span>EXPLORE FULL DIRECTORY</span>
            <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
          </button>
        </div>

        {/* Category Switcher Tabs: Brutal Buttons */}
        <div className="px-4 md:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`flex items-center gap-2 px-4 py-2.5 border-2 border-black rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-black text-[#FFE600] shadow-[3px_3px_0px_#0038FF]'
                    : 'bg-white hover:bg-[#FFE600] text-black shadow-[2px_2px_0px_#000]'
                }`}
              >
                <span className="material-symbols-outlined text-base">{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 border border-black rounded-md text-[10px] font-black ${
                    isActive ? 'bg-[#FFE600] text-black' : 'bg-[#F4F0EA] text-black'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid: Curved block cards with gap and curved shadows */}
        <div className="px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {displayedProducts.map((product: Product) => (
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

        {/* Show More / Load All Action Bar */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-10 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredProducts.length))}
              className="px-8 py-3.5 bg-black hover:bg-neutral-900 text-white border-2 border-black rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#FFE600] flex items-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span className="material-symbols-outlined text-base">expand_more</span>
              <span>
                LOAD MORE ({filteredProducts.length - visibleCount} REMAINING)
              </span>
            </button>

            <button
              onClick={() => setVisibleCount(filteredProducts.length)}
              className="px-6 py-3.5 bg-white hover:bg-[#F4F0EA] text-black border-2 border-black rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              SHOW ALL {filteredProducts.length} FORMULATIONS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
