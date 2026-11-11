import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, cart, updateQuantity, removeFromCart, cartTotal, showToast, setCurrentView } = useApp();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const discountAmount = (cartTotal * discountPercent) / 100;
  const shippingFee = cartTotal >= freeShippingThreshold || cart.length === 0 ? 0 : 99;
  const grandTotal = cartTotal - discountAmount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'FOREST25' || code === 'APEX25') {
      setDiscountPercent(25);
      showToast('⚡ FLASH SALE 25% DISCOUNT APPLIED!', 'volt');
    } else if (code === 'FORESTVIP' || code === 'APEXVIP') {
      setDiscountPercent(15);
      showToast('VIP Athlete 15% discount applied!', 'volt');
    } else {
      showToast('Invalid promo code. Try FOREST25 for 25% off!', 'info');
    }
  };

  const handleCheckout = () => {
    showToast('Redirecting to Secure The Protein Forest Checkout...', 'volt');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F4F0EA] border-l-2 border-black shadow-[-4px_0px_0px_#000] flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-5 border-b-2 border-black bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#FFE600] bg-black p-1.5 text-lg border border-black">
                  shopping_cart
                </span>
                <div>
                  <h3 className="font-headline-sm text-lg font-black text-black uppercase tracking-tight">
                    ATHLETIC FUEL CART
                  </h3>
                  <span className="font-label-caps text-[11px] text-neutral-600 font-bold uppercase tracking-wider">
                    {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'} RESERVED
                  </span>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black text-black hover:bg-[#E63946] hover:text-white transition-colors cursor-pointer shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-lg font-bold">close</span>
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="mt-4 p-3 bg-[#F4F0EA] border-2 border-black text-xs">
              <div className="flex items-center justify-between mb-1.5 font-label-caps">
                <span className="font-bold text-black flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#0038FF]">local_shipping</span>
                  {amountToFreeShipping === 0 ? (
                    <span className="text-[#0038FF] font-black">UNLOCKED FREE PRIORITY SHIPPING!</span>
                  ) : (
                    <span>ADD ₹{Math.round(amountToFreeShipping).toLocaleString('en-IN')} MORE FOR FREE SHIPPING</span>
                  )}
                </span>
                <span className="font-black text-black">{Math.round(progressToFreeShipping)}%</span>
              </div>
              <div className="h-2.5 w-full bg-black overflow-hidden border border-black">
                <div
                  className="h-full bg-[#FFE600] transition-all duration-300"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFE600] border-2 border-black mx-auto flex items-center justify-center text-black shadow-[2px_2px_0px_#000]">
                  <span className="material-symbols-outlined text-3xl font-bold">shopping_bag</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-base font-black text-black uppercase">
                    YOUR FUEL CART IS EMPTY
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto mt-1 font-medium">
                    Explore our third-party verified whey isolates, crispy protein snacks, and power oats.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    setCurrentView('catalog');
                  }}
                  className="px-6 py-2.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black font-label-md text-xs font-black uppercase cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  EXPLORE FUEL DIRECTORY
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const unitPrice = item.isSubscription
                  ? item.product.subscriptionPrice || item.size.price * 0.85
                  : item.size.price;
                return (
                  <div key={item.id} className="bg-white border-2 border-black p-3.5 flex gap-3.5 items-start shadow-[2px_2px_0px_#000]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-[#F4F0EA] border border-black p-1 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-black text-black leading-tight truncate uppercase">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-500 hover:text-[#E63946] transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600 font-medium">
                        <span className="inline-flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 inline-block border border-black"
                            style={{ backgroundColor: item.flavor.color }}
                          />
                          {item.flavor.name}
                        </span>
                        <span>•</span>
                        <span className="font-black">{item.size.label}</span>
                      </div>

                      {item.isSubscription && (
                        <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#FFE600] text-black text-[10px] font-black border border-black">
                          <span className="material-symbols-outlined text-xs">autorenew</span>
                          Auto-Ship (Save 15%)
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        {/* Stepper */}
                        <div className="flex items-center border-2 border-black bg-white rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-black hover:bg-[#F4F0EA] font-black text-xs cursor-pointer border-r border-black"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-black text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-black hover:bg-[#F4F0EA] font-black text-xs cursor-pointer border-l border-black"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-headline-sm text-sm font-black text-black">
                          ₹{Math.round(unitPrice * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t-2 border-black bg-white space-y-4">
              {/* Promo Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (Try FOREST25)"
                  className="flex-1 px-3 py-2.5 bg-[#F4F0EA] border-2 border-black rounded-lg text-xs font-mono uppercase focus:outline-none focus:shadow-[2px_2px_0px_#0038FF] transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-black hover:bg-neutral-800 text-white border-2 border-black rounded-lg text-xs font-label-md font-black cursor-pointer transition-colors shadow-[1.5px_1.5px_0px_#000]"
                >
                  APPLY
                </button>
              </form>

              {/* Cost Calculations */}
              <div className="space-y-1.5 text-xs text-neutral-600 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-black text-black">₹{Math.round(cartTotal).toLocaleString('en-IN')}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#0038FF] font-black">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-₹{Math.round(discountAmount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-[#0038FF] font-black">FREE</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="border-t-2 border-black pt-2.5 flex justify-between text-base font-black text-black">
                  <span>Total Due</span>
                  <span>₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black rounded-xl font-headline-sm text-sm uppercase tracking-wider font-black transition-all shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span className="material-symbols-outlined text-lg">lock</span>
                <span>PROCEED TO SECURE CHECKOUT • ₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
