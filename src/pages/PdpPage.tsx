import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Flavor, SizeOption, Product } from '../types';
import { PRODUCTS } from '../data/mockData';
import { OptimizedImage } from '../components/OptimizedImage';

export const PdpPage: React.FC = () => {
  const {
    selectedProduct,
    addToCart,
    navigateToProduct,
    isProductSaved,
    toggleSaveProduct,
    showToast,
    setCurrentView
  } = useApp();

  const product = selectedProduct;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(product.flavors[0]);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      if (product.flavors && product.flavors.length > 0) {
        setSelectedFlavor(product.flavors[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      setQuantity(1);
      setShowFullDescription(false);
      setPincode('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product.id]);

  const isSaved = isProductSaved(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - selectedSize.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor, selectedSize, quantity, false, '');
  };

  const descriptionText = product.description || '';
  const shortDescription = descriptionText.length > 140
    ? descriptionText.slice(0, 140) + '...'
    : descriptionText;

  // 4 Featured products for "Can't Decide?" section
  const comboCandidateIds = [
    'triple-crunch-bars',
    'popped-protein-chips',
    'overnight-power-oats',
    'apex-pro-whey',
    'clear-whey-hydrolysate',
    'creapure-creatine',
    'night-micellar-casein'
  ];
  const shopComboProducts = comboCandidateIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p && p.id !== product.id))
    .slice(0, 4);

  // 8 recommended products for the 2 horizontal lines below
  const comboIds = new Set(shopComboProducts.map((p) => p.id));
  const recommendedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && !comboIds.has(p.id)
  ).slice(0, 8);

  return (
    <div className="flex flex-col w-full bg-[#F4F0EA] min-h-screen">
      {/* BREADCRUMB */}
      <div className="w-full py-3 px-4 md:px-8 lg:px-16 border-b-2 border-black bg-white">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
          <button onClick={() => setCurrentView('marketplace')} className="text-neutral-600 hover:text-[#0038FF] transition-colors cursor-pointer">
            Home
          </button>
          <span className="material-symbols-outlined text-[12px] text-black">chevron_right</span>
          <button onClick={() => setCurrentView('catalog')} className="text-neutral-600 hover:text-[#0038FF] transition-colors cursor-pointer">
            {product.categoryLabel}
          </button>
          <span className="material-symbols-outlined text-[12px] text-black">chevron_right</span>
          <span className="text-black font-black truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Product Images */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative bg-white border-2 border-black rounded-2xl flex items-center justify-center h-[380px] sm:h-[460px] md:h-[520px] overflow-hidden shadow-[4px_4px_0px_#000]">
              <OptimizedImage
                src={product.galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                priority={true}
                targetWidth={800}
                className="max-h-[90%] max-w-[90%] flex items-center justify-center object-contain transition-transform duration-500 hover:scale-105"
              />

              {/* Share & Save floating buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    showToast('Link copied!', 'volt');
                  }}
                  className="w-9 h-9 bg-white border-2 border-black rounded-xl flex items-center justify-center hover:bg-[#FFE600] transition-colors cursor-pointer shadow-[2px_2px_0px_#000]"
                  title="Share"
                >
                  <span className="material-symbols-outlined text-lg text-black">share</span>
                </button>
                <button
                  onClick={() => toggleSaveProduct(product.id)}
                  className={`w-9 h-9 border-2 border-black rounded-xl flex items-center justify-center transition-colors cursor-pointer shadow-[2px_2px_0px_#000] ${
                    isSaved ? 'bg-[#E63946] text-white' : 'bg-white hover:bg-[#FFE600] text-black'
                  }`}
                  title="Save to favorites"
                >
                  <span className={`material-symbols-outlined text-lg ${isSaved ? 'material-symbols-fill' : ''}`}>
                    favorite
                  </span>
                </button>
              </div>
            </div>

            {/* Dot Pagination */}
            <div className="flex items-center justify-center gap-2 py-1">
              {product.galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`transition-all cursor-pointer border border-black rounded-full ${
                    activeImageIndex === idx
                      ? 'w-3.5 h-3.5 bg-[#FFE600] shadow-[1px_1px_0px_#000]'
                      : 'w-2.5 h-2.5 bg-white hover:bg-[#FAF7F2]'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-1 py-1">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex-shrink-0 w-[72px] h-[72px] overflow-hidden border-2 rounded-xl transition-all cursor-pointer flex items-center justify-center bg-white p-1 ${
                    activeImageIndex === idx
                      ? 'border-black shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5'
                      : 'border-black/30 hover:border-black'
                  }`}
                >
                  <OptimizedImage
                    src={img}
                    alt={`View ${idx + 1}`}
                    targetWidth={120}
                    className="w-full h-full flex items-center justify-center object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Info */}
          <div className="flex flex-col gap-5">
            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl md:text-[2.2rem] font-black leading-tight text-[#0038FF] uppercase tracking-tight">
              {product.name}
            </h1>

            {/* Price Block */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-black">
                  ₹{Math.round(selectedSize.price).toLocaleString('en-IN')}
                </span>
                {(selectedSize.originalPrice || product.originalPrice) && (
                  <span className="text-lg text-neutral-400 line-through font-bold">
                    ₹{Math.round(selectedSize.originalPrice || product.originalPrice || 0).toLocaleString('en-IN')}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs font-black text-white bg-[#E63946] px-2.5 py-0.5 border border-black rounded-lg shadow-[1.5px_1.5px_0px_#000]">
                    {discount}% off
                  </span>
                )}
              </div>
              <span className="text-xs text-neutral-600 font-medium">Incl. of all taxes &amp; shipping</span>
            </div>

            {/* Size Variant Pills */}
            {product.sizes.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-black border-2 rounded-xl transition-all cursor-pointer uppercase ${
                        isSelected
                          ? 'bg-[#0038FF] text-white border-black shadow-[2.5px_2.5px_0px_#000] -translate-y-0.5'
                          : 'bg-white text-black border-black hover:bg-[#FAF7F2] shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Short Description */}
            <div className="text-sm text-neutral-700 leading-relaxed font-medium">
              <p>
                {showFullDescription ? descriptionText : shortDescription}
              </p>
              {descriptionText.length > 140 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-[#0038FF] font-black hover:underline mt-1 cursor-pointer text-sm"
                >
                  {showFullDescription ? 'show less' : 'read more'}
                </button>
              )}
            </div>

            {/* 3 Feature Icons */}
            <div className="flex items-start justify-start gap-6 py-3">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-14 h-14 bg-[#FFE600] border-2 border-black rounded-2xl flex items-center justify-center shadow-[2.5px_2.5px_0px_#000]">
                  <span className="material-symbols-outlined text-2xl text-black font-bold">
                    fitness_center
                  </span>
                </div>
                <span className="text-xs font-black text-black">{product.macros.protein}</span>
                <span className="text-[10px] text-neutral-600 font-bold">Protein</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-14 h-14 bg-[#FFE600] border-2 border-black rounded-2xl flex items-center justify-center shadow-[2.5px_2.5px_0px_#000]">
                  <span className="material-symbols-outlined text-2xl text-black font-bold">
                    block
                  </span>
                </div>
                <span className="text-xs font-black text-black">No Added</span>
                <span className="text-[10px] text-neutral-600 font-bold">Sugar</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-14 h-14 bg-[#FFE600] border-2 border-black rounded-2xl flex items-center justify-center shadow-[2.5px_2.5px_0px_#000]">
                  <span className="material-symbols-outlined text-2xl text-black font-bold">
                    spa
                  </span>
                </div>
                <span className="text-xs font-black text-black">Easy to</span>
                <span className="text-[10px] text-neutral-600 font-bold">digest</span>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-black text-black uppercase">Delivery Details</span>
              <div className="flex items-center gap-0 border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_#000] bg-white max-w-md">
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-sm text-black placeholder-neutral-500 bg-transparent outline-none font-medium"
                  maxLength={6}
                />
                <button
                  onClick={() => showToast(pincode ? `Delivery available at ${pincode}!` : 'Please enter a pincode', pincode ? 'volt' : 'info')}
                  className="px-5 py-2.5 bg-[#0038FF] text-white text-sm font-black hover:bg-[#002BCC] transition-colors cursor-pointer uppercase border-l-2 border-black"
                >
                  Check
                </button>
              </div>
            </div>

            {/* Offers Box */}
            <div className="border-2 border-black rounded-2xl p-4 sm:p-5 space-y-3 bg-white shadow-[3px_3px_0px_#000]">
              <span className="text-sm font-black text-black uppercase block">Offers</span>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-xl text-[#0038FF] mt-0.5 font-bold">local_shipping</span>
                <span className="text-sm text-neutral-700 font-medium">Get free shipping on orders worth more than Rs. 599</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-xl text-[#E63946] mt-0.5 font-bold">discount</span>
                <span className="text-sm text-neutral-700 font-medium">Get Extra 10% Off on orders above Rs. 3499</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMBO SECTION: 4 CARDS FROM OUR SHOP */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 bg-white border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight uppercase">
              <span className="text-black block">Can't Decide?</span>
              <span className="text-[#0038FF] block mt-1">Try More Than One.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 font-medium">
              Our combo packs are the easiest way to explore variety, enjoy more flavours and save more on every order.
            </p>
          </div>

          {/* 4 Cards from our shop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {shopComboProducts.map((item) => {
              const itemDiscount = item.originalPrice
                ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={item.id}
                  onClick={() => navigateToProduct(item.slug)}
                  className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all duration-200 flex flex-col cursor-pointer group overflow-hidden"
                >
                  <div>
                    {/* Image Area with Badge */}
                    <div className="relative overflow-hidden bg-[#F4F0EA] border-b-2 border-black aspect-square flex items-center justify-center p-2">
                      <OptimizedImage
                        src={item.image}
                        alt={item.name}
                        targetWidth={420}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {item.badge && (
                        <div className="absolute top-2.5 right-2.5 bg-[#FFE600] text-black text-[9px] font-black uppercase px-2 py-1 border border-black rounded-lg shadow-[1.5px_1.5px_0px_#000] tracking-wider text-center leading-tight">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* Star Rating & Review Count */}
                    <div className="px-4 pt-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="px-1.5 py-0.5 bg-[#FFE600] text-black border border-black rounded-md font-black text-[11px] flex items-center gap-0.5 shadow-[1px_1px_0px_#000]">
                          {item.rating} ★
                        </span>
                        <span className="text-xs text-neutral-500 font-bold">
                          ({item.reviewCount} reviews)
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="font-black text-sm uppercase text-black tracking-tight leading-snug mb-3 line-clamp-2 min-h-[40px] group-hover:text-[#0038FF] transition-colors">
                        {item.name}
                      </h3>

                      {/* Feature Bullets */}
                      <div className="space-y-1 mb-3 text-xs text-neutral-700">
                        <div className="flex items-center gap-2 font-bold">
                          <span className="w-2 h-2 bg-[#FFE600] border border-black rounded-full shrink-0" />
                          <span>{item.macros.protein} Protein</span>
                        </div>
                        <div className="flex items-center gap-2 font-bold">
                          <span className="w-2 h-2 bg-[#FFE600] border border-black rounded-full shrink-0" />
                          <span>{item.macros.sugar} Sugar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA Button */}
                  <div className="px-4 pb-4 mt-auto">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-black text-black">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through font-bold">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      {itemDiscount > 0 && (
                        <span className="text-[10px] font-black text-white bg-[#E63946] px-1.5 py-0.5 border border-black rounded-lg shadow-[1px_1px_0px_#000]">
                          {itemDiscount}% OFF
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item, item.flavors[0], item.sizes[0], 1, false, '');
                        showToast(`${item.name} added to cart!`, 'volt');
                      }}
                      className="w-full py-3 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[2.5px_2.5px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECOMMENDED PRODUCTS SHOP SECTION */}
      <section className="w-full py-10 md:py-14 bg-[#F4F0EA] border-b-2 border-black">
        {/* Section Header */}
        <div className="w-full px-4 md:px-8 lg:px-12 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 bg-[#FFE600] border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_#000]" />
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Handpicked Pairings
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                Recommended Products
              </h2>
            </div>
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-4 py-2 bg-white hover:bg-[#FFE600] text-black border-2 border-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#000] self-start sm:self-auto active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span>Explore Full Store</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Standalone Curved Cards Grid */}
        <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {recommendedProducts.map((item: Product) => {
            const itemDiscount = item.originalPrice
              ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
              : 0;

            return (
              <div
                key={item.id}
                onClick={() => navigateToProduct(item.slug)}
                className="bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 cursor-pointer group overflow-hidden"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative w-full overflow-hidden bg-[#F4F0EA] border-2 border-black rounded-xl aspect-square mb-3 flex items-center justify-center">
                    {item.badge && (
                      <span className="absolute top-2 left-2 bg-[#FFE600] text-black text-[10px] font-black px-2 py-0.5 border border-black rounded-md z-10 shadow-[1px_1px_0px_#000]">
                        {item.badge}
                      </span>
                    )}
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      targetWidth={360}
                      className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="px-1.5 py-0.5 bg-[#FFE600] text-black border border-black rounded-md font-black text-[10px] flex items-center gap-0.5 shadow-[1px_1px_0px_#000]">
                      {item.rating} ★
                    </span>
                    <span className="text-[11px] text-neutral-500 font-bold">({item.reviewCount})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-black text-black uppercase line-clamp-2 leading-snug mb-2 group-hover:text-[#0038FF] transition-colors min-h-[34px]">
                    {item.name}
                  </h3>

                  {/* Macro pill */}
                  {item.macros && (
                    <span className="inline-block text-[10px] font-black text-black bg-[#F4F0EA] border border-black rounded-md px-2 py-0.5 mb-3">
                      {item.macros.protein} Protein • {item.macros.sugar} Sugar
                    </span>
                  )}
                </div>

                {/* Price & Add to Cart */}
                <div className="pt-2.5 border-t-2 border-black/10 mt-2">
                  <div className="flex items-baseline gap-2 mb-2.5 flex-wrap">
                    <span className="text-sm sm:text-base font-black text-black">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through font-bold">
                        ₹{item.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    {itemDiscount > 0 && (
                      <span className="text-[10px] font-black text-white bg-[#E63946] px-1.5 py-0.5 border border-black rounded-md">
                        {itemDiscount}% off
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item, item.flavors[0], item.sizes[0], 1, false, '');
                      showToast(`${item.name} added to cart!`, 'volt');
                    }}
                    className="w-full py-2 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <span className="material-symbols-outlined text-[15px]">add_shopping_cart</span>
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STICKY BOTTOM BAR */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t-2 border-black px-4 md:px-8 lg:px-16 py-2.5 z-50 shadow-[0_-3px_0px_#000]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Product Thumbnail & Name */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 border-2 border-black rounded-xl p-0.5 bg-[#F4F0EA] shrink-0 flex items-center justify-center overflow-hidden">
              <OptimizedImage
                src={product.galleryImages[0] || product.image}
                alt={product.name}
                targetWidth={60}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-black text-black truncate uppercase">
                {product.name}
              </span>
              <span className="text-xs text-neutral-600 font-bold">
                {selectedSize.label} • <strong className="text-black">₹{Math.round(selectedSize.price).toLocaleString('en-IN')}</strong>
              </span>
            </div>
          </div>

          {/* Quantity Selector + Add to Cart Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quantity Selector */}
            <div className="flex items-center border-2 border-black rounded-xl overflow-hidden bg-white shadow-[1.5px_1.5px_0px_#000]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 sm:w-9 h-9 sm:h-10 flex items-center justify-center text-black font-black text-base hover:bg-[#F4F0EA] cursor-pointer transition-colors border-r border-black"
              >
                −
              </button>
              <span className="w-7 sm:w-8 text-center text-xs sm:text-sm font-black text-black">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 sm:w-9 h-9 sm:h-10 flex items-center justify-center text-black font-black text-base hover:bg-[#F4F0EA] cursor-pointer transition-colors border-l border-black"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="px-5 sm:px-8 py-2.5 sm:py-3 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-[2.5px_2.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">shopping_cart</span>
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
