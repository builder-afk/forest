import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { USER_ACCOUNT, PRODUCTS, IMAGES } from '../data/mockData';
import { OptimizedImage } from '../components/OptimizedImage';

export const AccountPage: React.FC = () => {
  const {
    savedProductIds,
    toggleSaveProduct,
    addToCart,
    navigateToProduct,
    openCart,
    showToast,
    openCoaModal
  } = useApp();

  const [activeTab, setActiveTab] = useState<'saved' | 'orders' | 'autoship' | 'macros'>('saved');
  const [savedFilter, setSavedFilter] = useState<'all' | 'isolates' | 'recovery'>('all');

  const savedProducts = PRODUCTS.filter((p) => savedProductIds.includes(p.id));

  const filteredSaved = savedProducts.filter((p) => {
    if (savedFilter === 'isolates') return p.category === 'powders';
    if (savedFilter === 'recovery') return p.category === 'pre-workout' || p.category === 'oats';
    return true;
  });

  const handleMoveAllToBag = () => {
    savedProducts.forEach((p) => {
      addToCart(p, p.flavors[0], p.sizes[0], 1);
    });
    showToast(`Moved ${savedProducts.length} saved formulations to your fuel cart!`, 'volt');
    openCart();
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-6 min-h-screen bg-surface">
      <div className="w-full py-8 space-y-8">
        {/* Athlete Top Elevation Profile Banner */}
        <section className="relative bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden border border-surface-container">
          <div className="absolute -right-16 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />
          <div className="absolute right-1/4 -bottom-16 w-64 h-64 rounded-full bg-secondary-container/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            {/* Athlete Credentials Info */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-inverse-surface flex items-center justify-center p-1 shadow-md">
                  <OptimizedImage
                    className="w-full h-full rounded-full"
                    alt={USER_ACCOUNT.name}
                    src={USER_ACCOUNT.avatar}
                    targetWidth={160}
                    priority={true}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-base font-black">verified</span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-headline-md text-2xl font-black text-on-surface tracking-tight">
                    {USER_ACCOUNT.name}
                  </h1>
                  <span className="px-2.5 py-0.5 bg-inverse-surface text-primary-container font-label-caps text-[10px] font-black rounded uppercase tracking-wider">
                    {USER_ACCOUNT.membershipTier}
                  </span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                  Decathlete • Training Target: 210g Daily Protein • Member since {USER_ACCOUNT.memberSince}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs font-label-caps text-on-surface">
                  <span className="flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-sm text-primary">stars</span>
                    {USER_ACCOUNT.apexPoints.toLocaleString()} APEX REWARDS POINTS (₹3,424 Value)
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Quick Stats */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container shadow-sm min-w-[140px]">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  DAILY PROTEIN TARGET
                </span>
                <span className="font-headline-sm text-xl font-black text-on-surface mt-0.5 block">
                  {USER_ACCOUNT.macrosGoal.currentStackProtein}g / {USER_ACCOUNT.macrosGoal.dailyProteinTarget}g
                </span>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-primary-container h-full w-[78%]" />
                </div>
              </div>

              <div className="bg-surface-container-lowest p-3.5 rounded-xl border border-surface-container shadow-sm min-w-[140px]">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  ACTIVE AUTO-SHIP
                </span>
                <span className="font-headline-sm text-xl font-black text-primary mt-0.5 block">
                  3 SKUs Active
                </span>
                <span className="text-[10px] text-on-surface-variant font-label-caps">Next: Nov 14, 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-surface-container pb-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          {[
            { id: 'saved', label: `Saved Fuel Formulations (${savedProducts.length})`, icon: 'bookmark' },
            { id: 'orders', label: 'Order History & Batch COAs', icon: 'receipt_long' },
            { id: 'autoship', label: 'Active Auto-Ship Subscriptions', icon: 'autorenew' },
            { id: 'macros', label: 'Nutritional Macro Calibration', icon: 'tune' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-label-md font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-inverse-surface text-primary-container shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface bg-surface-container-lowest'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Saved Fuel Formulations */}
        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-headline-sm text-xl uppercase font-black text-on-surface tracking-tight">
                  SAVED FUEL FORMULATIONS
                </h2>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                  Lab-verified formulas pinned to your active training cycle
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleMoveAllToBag}
                  className="px-4 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary-fixed font-label-md text-xs font-black uppercase rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-base">shopping_bag</span>
                  <span>Move All In-Stock to Bag ({savedProducts.length})</span>
                </button>
                <button
                  onClick={() => showToast('Exporting Macro Profile Sheet PDF...', 'volt')}
                  className="p-2.5 bg-surface-container-lowest hover:bg-surface-container border border-surface-container rounded-lg text-on-surface cursor-pointer"
                  title="Export Macros"
                >
                  <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                </button>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-label-caps">
              <button
                onClick={() => setSavedFilter('all')}
                className={`px-3 py-1.5 rounded-full font-bold cursor-pointer transition-colors ${
                  savedFilter === 'all'
                    ? 'bg-inverse-surface text-primary-container'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface'
                }`}
              >
                All Saved ({savedProducts.length})
              </button>
              <button
                onClick={() => setSavedFilter('isolates')}
                className={`px-3 py-1.5 rounded-full font-bold cursor-pointer transition-colors ${
                  savedFilter === 'isolates'
                    ? 'bg-inverse-surface text-primary-container'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Protein Isolates
              </button>
              <button
                onClick={() => setSavedFilter('recovery')}
                className={`px-3 py-1.5 rounded-full font-bold cursor-pointer transition-colors ${
                  savedFilter === 'recovery'
                    ? 'bg-inverse-surface text-primary-container'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Creatine & Power Oats
              </button>
            </div>

            {/* Grid of Saved Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSaved.map((product) => (
                <div
                  key={product.id}
                  className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container shadow-sm flex flex-col justify-between space-y-4 hover:border-on-surface transition-all"
                >
                  <div className="flex gap-4 items-start">
                    <OptimizedImage
                      onClick={() => navigateToProduct(product.slug)}
                      src={product.image}
                      alt={product.name}
                      targetWidth={160}
                      className="w-20 h-20 p-2 rounded bg-surface-container-low border border-surface-container flex-shrink-0 cursor-pointer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-label-caps text-[9px] text-primary uppercase font-bold tracking-wider">
                          LOT #{product.coaBatchNumber}
                        </span>
                        <button
                          onClick={() => toggleSaveProduct(product.id)}
                          className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                          title="Remove from saved"
                        >
                          <span className="material-symbols-outlined text-base">close</span>
                        </button>
                      </div>

                      <h3
                        onClick={() => navigateToProduct(product.slug)}
                        className="font-headline-sm text-sm font-black uppercase text-on-surface hover:text-primary transition-colors cursor-pointer leading-tight truncate mt-0.5"
                      >
                        {product.name}
                      </h3>
                      <p className="font-body-sm text-[11px] text-on-surface-variant truncate mt-0.5">
                        {product.subtitle}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-primary-container text-on-primary-fixed text-[10px] font-black px-1.5 py-0.5 rounded font-label-caps">
                          {product.macros.protein} PROTEIN
                        </span>
                        <span className="bg-surface-container text-on-surface text-[10px] font-bold px-1.5 py-0.5 rounded font-label-caps">
                          {product.macros.calories} KCAL
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-surface-container">
                    <div>
                      <span className="font-numeric-stat text-lg font-black text-on-surface">
                        ₹{Math.round(product.price).toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[10px] text-primary font-label-caps font-bold">
                        Auto-Ship: ₹{Math.round(product.price * 0.85).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openCoaModal(product.coaBatchNumber)}
                        className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-colors cursor-pointer"
                        title="Inspect COA"
                      >
                        <span className="material-symbols-outlined text-base">science</span>
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-fixed font-label-md text-xs font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                      >
                        ADD TO BAG
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-surface-container shadow-sm space-y-6">
            <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase">
              Recent Dispatched Shipments & COA Lab Certificates
            </h3>
            <div className="divide-y divide-surface-container text-xs font-body-sm">
              <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-on-surface">ORDER #APX-77491</span>
                    <span className="bg-primary-container text-on-primary-fixed text-[10px] font-black px-2 py-0.5 rounded">
                      DELIVERED
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1">
                    Apex Pro Whey Isolate 5lb (Double Rich Dutch Cocoa) + Creapure Micronized Creatine 500g
                  </p>
                  <span className="text-[10px] text-on-surface-variant font-mono">Dispatched Oct 28, 2026 • Tracking: UPS-9912048</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openCoaModal('APX-9924-W')}
                    className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high font-bold text-on-surface flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">science</span>
                    <span>Download Batch COA</span>
                  </button>
                  <button
                    onClick={() => {
                      addToCart(PRODUCTS[0]);
                      openCart();
                    }}
                    className="px-3 py-1.5 rounded bg-inverse-surface hover:bg-on-surface text-white font-bold cursor-pointer"
                  >
                    Reorder Stack
                  </button>
                </div>
              </div>

              <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-on-surface">ORDER #APX-68192</span>
                    <span className="bg-surface-container text-on-surface text-[10px] font-bold px-2 py-0.5 rounded">
                      PAST BATCH
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1">
                    Apex Triple Crunch Bars (12pk Salted Caramel) + Overnight Power Oats Tub
                  </p>
                  <span className="text-[10px] text-on-surface-variant font-mono">Dispatched Sep 14, 2026</span>
                </div>
                <button
                  onClick={() => openCoaModal('APX-9921-V')}
                  className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high font-bold text-on-surface flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">science</span>
                  <span>Batch Dossier</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Auto-Ship */}
        {activeTab === 'autoship' && (
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-surface-container shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-surface-container pb-4">
              <div>
                <span className="bg-primary-container text-on-primary-fixed text-[10px] font-black px-2 py-0.5 rounded uppercase font-label-caps">
                  15% DISCOUNT LOCKED IN
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase mt-1">
                  Active Subscription: #SUB-88192
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Cadence: Every 4 Weeks • Next automated shipment scheduled for November 14, 2026
                </p>
              </div>
              <button
                onClick={() => showToast('Auto-ship paused for 1 billing cycle.', 'info')}
                className="px-4 py-2 rounded bg-surface-container hover:bg-surface-container-high text-xs font-bold text-on-surface cursor-pointer"
              >
                PAUSE SHIPMENT
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  SUB-ITEM 01
                </span>
                <h4 className="font-title-lg text-sm font-bold text-on-surface mt-1">
                  Apex Pro Whey Isolate (5lb Bulk)
                </h4>
                <p className="text-xs text-primary font-bold mt-1">₹8,159 / cycle (Save ₹1,440)</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  SUB-ITEM 02
                </span>
                <h4 className="font-title-lg text-sm font-bold text-on-surface mt-1">
                  Creapure® Micronized Creatine 500g
                </h4>
                <p className="text-xs text-primary font-bold mt-1">₹2,243 / cycle (Save ₹396)</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  SUB-ITEM 03
                </span>
                <h4 className="font-title-lg text-sm font-bold text-on-surface mt-1">
                  Triple Crunch Bars (12pk Dark Chocolate)
                </h4>
                <p className="text-xs text-primary font-bold mt-1">₹2,379 / cycle (Save ₹420)</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Macro Calibration */}
        {activeTab === 'macros' && (
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-surface-container shadow-sm space-y-6 max-w-2xl">
            <h3 className="font-headline-sm text-lg font-bold text-on-surface uppercase">
              Athletic Macronutrient Calibration Profile
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Set your target macro thresholds. Our catalog automatically calculates whether your current fuel stack fulfills your recovery requirements.
            </p>

            <div className="space-y-4">
              <div>
                <label className="font-label-caps text-xs font-bold text-on-surface block mb-1">
                  TARGET DAILY PROTEIN (GRAMS)
                </label>
                <input
                  type="number"
                  defaultValue={210}
                  className="w-full p-3 bg-surface-container-low border border-surface-container rounded-lg text-sm font-bold focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="font-label-caps text-xs font-bold text-on-surface block mb-1">
                  DAILY CALORIE EXPENDITURE
                </label>
                <input
                  type="number"
                  defaultValue={2950}
                  className="w-full p-3 bg-surface-container-low border border-surface-container rounded-lg text-sm font-bold focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                onClick={() => showToast('Macro calibration profile updated!', 'volt')}
                className="px-6 py-3 bg-primary-container hover:bg-primary-fixed text-on-primary-fixed font-label-md text-xs font-black uppercase rounded-lg shadow-sm cursor-pointer"
              >
                SAVE CALIBRATION TARGETS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

