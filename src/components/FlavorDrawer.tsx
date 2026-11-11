import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Flavor, SizeOption } from '../types';

export const FlavorDrawer: React.FC = () => {
  const { isFlavorDrawerOpen, closeFlavorDrawer, flavorDrawerProduct, addToCart, openCart } = useApp();

  const product = flavorDrawerProduct;
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedFlavor(product.flavors[0]);
      setSelectedSize(product.sizes[0]);
      setQuantity(1);
      setIsSubscription(false);
    }
  }, [product]);

  if (!isFlavorDrawerOpen || !product || !selectedFlavor || !selectedSize) {
    return null;
  }

  const currentPrice = isSubscription
    ? product.subscriptionPrice || selectedSize.price * 0.85
    : selectedSize.price;

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor, selectedSize, quantity, isSubscription);
    closeFlavorDrawer();
    openCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={closeFlavorDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F4F0EA] border-l-2 border-black shadow-[-4px_0px_0px_#000] flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-5 border-b-2 border-black bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps uppercase tracking-wider text-[#0038FF] font-black flex items-center gap-1.5 text-xs">
                <span className="material-symbols-outlined text-sm">science</span>
                FLAVOR & MACRO CALIBRATION
              </span>
              <button
                onClick={closeFlavorDrawer}
                className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-xl text-black hover:bg-[#E63946] hover:text-white transition-colors cursor-pointer shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-lg font-bold">close</span>
              </button>
            </div>

            <div className="flex gap-4 items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain bg-[#F4F0EA] p-2 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]"
              />
              <div>
                <h3 className="font-headline-sm text-lg font-black text-black leading-snug uppercase">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-1 mt-0.5 font-medium">
                  {product.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-[#FFE600] text-black font-label-caps text-[10px] font-black border border-black rounded-lg shadow-[1px_1px_0px_#000]">
                    {product.macros.protein} PROTEIN
                  </span>
                  <span className="px-2 py-0.5 bg-white text-black font-label-caps text-[10px] font-bold border border-black rounded-lg">
                    {product.macros.sugar} SUGAR
                  </span>
                  <span className="px-2 py-0.5 bg-white text-black font-label-caps text-[10px] font-bold border border-black rounded-lg">
                    {product.macros.calories} KCAL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Body Options */}
          <div className="p-5 space-y-6 flex-1">
            {/* 1. Flavor Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-caps uppercase tracking-wider text-black font-black text-xs">
                  SELECT FLAVOR SPECIFICATION
                </span>
                <span className="text-[11px] text-neutral-600 font-bold">
                  Zero amino-spiking disclosure
                </span>
              </div>

              <div className="space-y-2.5">
                {product.flavors.map((flavor) => {
                  const isSelected = selectedFlavor.id === flavor.id;
                  return (
                    <div
                      key={flavor.id}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-3.5 border-2 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white border-black shadow-[2px_2px_0px_#000]'
                          : 'bg-white/70 border-black/30 hover:border-black'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-4 h-4 flex-shrink-0 border border-black rounded-full"
                            style={{ backgroundColor: flavor.color }}
                          />
                          <div>
                            <h4 className="text-sm font-black text-black">
                              {flavor.name}
                            </h4>
                            {flavor.notes && (
                              <p className="text-xs text-neutral-600 mt-0.5 font-medium">
                                {flavor.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        {isSelected ? (
                          <span className="bg-[#FFE600] text-black font-label-caps text-[10px] px-2 py-0.5 font-black flex items-center gap-0.5 border border-black rounded-md shadow-[1px_1px_0px_#000]">
                            <span className="material-symbols-outlined text-xs">check_circle</span>
                            ACTIVE
                          </span>
                        ) : (
                          <span className="text-[10px] text-neutral-500 font-label-caps font-bold">
                            IN STOCK
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Size / Format Selection */}
            <div>
              <span className="font-label-caps uppercase tracking-wider text-black font-black block mb-3 text-xs">
                SELECT CONTAINER YIELD
              </span>
              <div className="grid grid-cols-2 gap-3">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 border-2 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-black bg-white shadow-[2px_2px_0px_#000]'
                          : 'border-black/30 bg-white/60 hover:border-black'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-caps text-[11px] font-black text-black">
                          {size.label}
                        </span>
                        {size.id === '5lb' && (
                          <span className="bg-[#E63946] text-white text-[9px] font-black px-1.5 py-0.5 border border-black rounded-md">
                            SAVE 20%
                          </span>
                        )}
                      </div>
                      <div className="font-headline-sm text-lg font-black text-black">
                        ₹{Math.round(size.price).toLocaleString('en-IN')}
                      </div>
                      <div className="text-[11px] text-neutral-600 font-medium">
                        {size.servings} Servings (₹{Math.round(size.pricePerServing).toLocaleString('en-IN')}/serving)
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Purchase Mode Toggle */}
            <div className="p-3.5 bg-white border-2 border-black rounded-2xl shadow-[2.5px_2.5px_0px_#000] space-y-2">
              <label
                onClick={() => setIsSubscription(false)}
                className={`flex items-center justify-between p-2.5 border-2 rounded-xl cursor-pointer transition-all ${
                  !isSubscription
                    ? 'bg-[#F4F0EA] border-black shadow-[1.5px_1.5px_0px_#000]'
                    : 'border-transparent hover:bg-[#F4F0EA]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 border-2 rounded-md flex items-center justify-center ${
                    !isSubscription ? 'border-black bg-[#0038FF]' : 'border-black/40'
                  }`}>
                    {!isSubscription && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                  </div>
                  <span className="text-xs font-black text-black uppercase">
                    One-Time Purchase
                  </span>
                </div>
                <span className="font-headline-sm text-sm font-black text-black">
                  ₹{Math.round(selectedSize.price).toLocaleString('en-IN')}
                </span>
              </label>

              <label
                onClick={() => setIsSubscription(true)}
                className={`flex items-center justify-between p-2.5 border-2 rounded-xl cursor-pointer transition-all ${
                  isSubscription
                    ? 'bg-[#F4F0EA] border-black shadow-[1.5px_1.5px_0px_#000]'
                    : 'border-transparent hover:bg-[#F4F0EA]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 border-2 rounded-md flex items-center justify-center ${
                    isSubscription ? 'border-black bg-[#0038FF]' : 'border-black/40'
                  }`}>
                    {isSubscription && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-black uppercase">
                        Auto-Ship & Save 15%
                      </span>
                      <span className="bg-[#FFE600] text-black text-[9px] font-black px-1.5 py-0.5 border border-black rounded-md">
                        RECOMMENDED
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">Cancel or modify anytime</span>
                  </div>
                </div>
                <span className="font-headline-sm text-sm font-black text-[#0038FF]">
                  ₹{Math.round(selectedSize.price * 0.85).toLocaleString('en-IN')}
                </span>
              </label>
            </div>

            {/* 4. Quantity Stepper */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-label-caps uppercase text-black font-black text-xs">
                DISPATCH QUANTITY
              </span>
              <div className="flex items-center border-2 border-black rounded-xl overflow-hidden bg-white shadow-[1.5px_1.5px_0px_#000]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-black hover:bg-[#F4F0EA] font-black transition-colors cursor-pointer border-r border-black"
                >
                  −
                </button>
                <span className="w-12 text-center font-headline-sm text-sm font-black text-black">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-black hover:bg-[#F4F0EA] font-black transition-colors cursor-pointer border-l border-black"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Footer Action Strip */}
          <div className="p-5 border-t-2 border-black bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-label-caps text-[10px] text-neutral-600 uppercase font-bold block">
                  TOTAL CALIBRATION PRICE
                </span>
                <div className="font-headline-sm text-2xl font-black text-black">
                  ₹{Math.round(currentPrice * quantity).toLocaleString('en-IN')}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-[#0038FF] flex items-center justify-end gap-1">
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  FREE FAST SHIPPING
                </span>
                <span className="text-[10px] text-neutral-600 font-label-caps font-bold block">
                  30-DAY TASTE GUARANTEE
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-headline-sm text-sm uppercase tracking-wider font-black transition-all shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
              <span>ADD FORMULATION TO FUEL CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
