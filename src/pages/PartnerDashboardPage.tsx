import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';

interface SkuItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  msrp: number;
  stock: number;
  stockStatus: 'healthy' | 'low' | 'high';
  stockLabel: string;
  batchNumber: string;
  purityPass: string;
  status: 'Live' | 'Fast-Depleting' | 'Under Review';
  icon: string;
}

const INITIAL_SKUS: SkuItem[] = [
  {
    id: 'sku-1',
    name: 'Apex Hydrolyzed Whey Isolate (CFM)',
    sku: '#APX-ISO-CFM • 2.2 LBS',
    category: 'Whey Isolate',
    msrp: 5199,
    stock: 1240,
    stockStatus: 'healthy',
    stockLabel: 'Healthy Stock',
    batchNumber: '#APX-9942',
    purityPass: '99.4% Pass',
    status: 'Live',
    icon: 'medication'
  },
  {
    id: 'sku-2',
    name: 'Apex Pro Whey Isolate 5lb Bulk',
    sku: '#APX-ISO-5LB • UNFLAVORED',
    category: 'Bulk Whey',
    msrp: 8799,
    stock: 420,
    stockStatus: 'healthy',
    stockLabel: 'Healthy Stock',
    batchNumber: '#APX-9884',
    purityPass: '98.7% Pass',
    status: 'Live',
    icon: 'inventory_2'
  },
  {
    id: 'sku-3',
    name: 'Clear Whey Hydrolysate Citrus',
    sku: 'RESTOCK RECOMMENDED • 30 SERVINGS',
    category: 'Hydrolysate',
    msrp: 3119,
    stock: 185,
    stockStatus: 'low',
    stockLabel: 'Low Stock',
    batchNumber: '#APX-9712',
    purityPass: '99.8% Pass',
    status: 'Fast-Depleting',
    icon: 'warning'
  },
  {
    id: 'sku-4',
    name: 'Creapure® Micronized Creatine 500g',
    sku: '#APX-CR-904 • 100 SERVINGS',
    category: 'Micronized',
    msrp: 2319,
    stock: 2100,
    stockStatus: 'high',
    stockLabel: 'High Volume',
    batchNumber: '#APX-CR-904',
    purityPass: '100.0% Pass',
    status: 'Live',
    icon: 'fitness_center'
  },
  {
    id: 'sku-5',
    name: 'Night Micellar Casein Sustained',
    sku: '#APX-CAS-01 • CHOCOLATE SILK',
    category: 'Casein',
    msrp: 4559,
    stock: 640,
    stockStatus: 'healthy',
    stockLabel: 'Healthy Stock',
    batchNumber: '#APX-9620',
    purityPass: '97.9% Pass',
    status: 'Live',
    icon: 'nights_stay'
  }
];

export const PartnerDashboardPage: React.FC = () => {
  const { setCurrentView, openCoaModal, showToast } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'catalog' | 'audits' | 'inventory' | 'payouts'>('overview');
  const [activeSidebarNav, setActiveSidebarNav] = useState<'storefront-portal' | 'allocations' | 'commissions'>('storefront-portal');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddSkuModalOpen, setIsAddSkuModalOpen] = useState(false);
  const [skus, setSkus] = useState<SkuItem[]>(INITIAL_SKUS);

  // Form states for adding formulation
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('Protein & Amino Acids');
  const [formMsrp, setFormMsrp] = useState('44.99');
  const [formUnits, setFormUnits] = useState('1000');
  const [formBatch, setFormBatch] = useState('LOT-APX-2026-092');

  const filteredSkus = useMemo(() => {
    if (!searchQuery.trim()) return skus;
    const q = searchQuery.toLowerCase();
    return skus.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.sku.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.batchNumber.toLowerCase().includes(q)
    );
  }, [skus, searchQuery]);

  const handleAddSkuSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    const newSku: SkuItem = {
      id: `sku-${Date.now()}`,
      name: formName,
      sku: `SKU: #${formBatch.replace('LOT-', '')} • ${formUnits} UNITS`,
      category: formCategory,
      msrp: parseFloat(formMsrp) || 3999,
      stock: parseInt(formUnits, 10) || 500,
      stockStatus: 'healthy',
      stockLabel: 'Fresh Lot',
      batchNumber: `#${formBatch}`,
      purityPass: 'Pending Ingestion',
      status: 'Live',
      icon: 'science'
    };

    setSkus((prev) => [newSku, ...prev]);
    setIsAddSkuModalOpen(false);
    setFormName('');
    showToast(`Formulation "${formName}" published & sent to LGC Cambridge audit queue!`, 'volt');
  };

  const handleRestock = (skuName: string) => {
    showToast(`Warehouse restock order queued for ${skuName} (+500 units)`, 'volt');
  };

  return (
    <div className="flex flex-col lg:flex-row w-full pt-0 min-h-screen bg-surface">
      {/* =========================================================================
          LEFT SIDEBAR: ATHLETE HUB / STORE PORTAL DUAL OPERATIONS
      ========================================================================= */}
      <aside className="w-full lg:w-64 bg-surface-container-low border-b lg:border-b-0 lg:border-r border-surface-container shrink-0 flex flex-col py-6 px-4 z-20">
        {/* Dual Mode Switcher Pill */}
        <div className="p-1 bg-surface-container rounded-lg flex gap-1 mb-6">
          <button
            onClick={() => setCurrentView('performance-deck')}
            className="flex-1 py-1.5 text-center rounded-md font-label-caps text-xs text-on-surface-variant hover:text-on-surface uppercase transition-colors cursor-pointer"
          >
            Athlete Hub
          </button>
          <button
            onClick={() => setCurrentView('partner-dashboard')}
            className="flex-1 py-1.5 text-center rounded-md bg-surface-container-lowest font-label-caps text-xs text-on-surface font-black uppercase shadow-sm cursor-pointer"
          >
            Store Portal
          </button>
        </div>

        {/* Section: Partner Operations */}
        <div className="mb-2">
          <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold px-3 block">
            PARTNER OPERATIONS
          </span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <button
            onClick={() => {
              setActiveSidebarNav('storefront-portal');
              setActiveTab('overview');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-black text-left cursor-pointer ${
              activeSidebarNav === 'storefront-portal' && activeTab === 'overview'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">storefront</span>
            <span>Storefront Portal</span>
          </button>

          <button
            onClick={() => {
              setActiveSidebarNav('allocations');
              setActiveTab('catalog');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer ${
              activeTab === 'catalog'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
            <span>SKU Catalog</span>
          </button>

          <button
            onClick={() => {
              setActiveSidebarNav('allocations');
              setActiveTab('inventory');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            <span>Stock Allocations</span>
          </button>

          <button
            onClick={() => {
              setActiveSidebarNav('allocations');
              setActiveTab('audits');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer ${
              activeTab === 'audits'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">biotech</span>
            <span>HPLC Audits &amp; COAs</span>
          </button>

          <button
            onClick={() => {
              setActiveSidebarNav('commissions');
              setActiveTab('payouts');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer ${
              activeSidebarNav === 'commissions' || activeTab === 'payouts'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span>Commissions &amp; Payouts</span>
          </button>
        </nav>

        {/* Bottom Verification Status Card */}
        <div className="pt-4 mt-auto">
          <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between border border-surface-container-high/60">
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                VERIFICATION STATUS
              </span>
              <span className="font-headline-sm text-xs text-primary font-black uppercase">
                INFORMED SPORT OK
              </span>
            </div>
            <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MAIN DASHBOARD WORKSPACE
      ========================================================================= */}
      <main className="flex-1 min-w-0 p-4 md:p-8 space-y-6 relative overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. TOP PARTNER STOREFRONT HERO & STATUS BANNER */}
        <section className="relative w-full">
          <div className="bg-inverse-surface rounded-2xl p-6 md:p-8 text-inverse-on-surface shadow-xl relative overflow-hidden">
            {/* Technical Grid Micro Pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
              {/* Brand Meta Left */}
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-xl bg-primary-container text-on-primary-fixed flex items-center justify-center font-display-hero text-2xl font-black shadow-md shrink-0">
                  <span>AP</span>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-inverse-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-primary-container">
                      verified
                    </span>
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="font-headline-md text-2xl md:text-3xl font-black text-white tracking-tight">
                      Apex Performance Labs
                    </h1>
                    <span className="bg-primary-container text-on-primary-fixed px-2.5 py-0.5 rounded font-label-caps text-[10px] font-black uppercase tracking-wider shadow-sm">
                      VERIFIED FLAGSHIP STORE • LIVE ON MARKETPLACE
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-1.5 font-body-sm text-xs text-surface-variant flex-wrap">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">domain</span>
                      Partner ID: <span className="font-bold text-white">#APX-01</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      Salt Lake City, UT
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">biotech</span>
                      ISO 17025 Third-Party Accredited
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      WADA / Informed-Sport Tier 1 Audit Pass
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Right */}
              <div className="flex items-center gap-2.5 w-full xl:w-auto justify-end flex-wrap">
                <button
                  onClick={() => setCurrentView('partner-storefront')}
                  className="px-4 py-2.5 bg-surface-container-high/20 hover:bg-surface-container-high/30 text-white font-headline-sm text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors backdrop-blur-md cursor-pointer border border-white/10"
                >
                  <span className="material-symbols-outlined text-[18px]">public</span>
                  <span>Public Profile</span>
                </button>

                <button
                  onClick={() => openCoaModal('APX-9924-W')}
                  className="px-4 py-2.5 bg-surface-container-lowest text-on-surface hover:bg-surface-bright font-headline-sm text-xs font-bold rounded-lg flex items-center gap-1.5 shadow transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">upload_file</span>
                  <span>Audit Submission</span>
                </button>

                <button
                  onClick={() => setIsAddSkuModalOpen(true)}
                  className="px-4 py-2.5 bg-primary-container text-on-primary-fixed hover:bg-primary-fixed font-headline-sm text-xs font-black rounded-lg flex items-center gap-1.5 shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add_box</span>
                  <span>+ Add Formulation / SKU</span>
                </button>
              </div>
            </div>

            {/* Segmented Tab Deck Navigation Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 overflow-x-auto text-inverse-on-surface scrollbar-none">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-surface-container-lowest text-on-surface font-black shadow-sm'
                    : 'bg-surface-container-high/20 hover:bg-surface-container-high/40 text-inverse-on-surface font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-primary">speed</span>
                <span>Storefront Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'catalog'
                    ? 'bg-surface-container-lowest text-on-surface font-black shadow-sm'
                    : 'bg-surface-container-high/20 hover:bg-surface-container-high/40 text-inverse-on-surface font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">inventory</span>
                <span>SKU &amp; Formulation Catalog</span>
                <span className="bg-primary-container text-on-primary-fixed text-[10px] px-1.5 py-0.5 rounded-full font-black">
                  18
                </span>
              </button>

              <button
                onClick={() => setActiveTab('audits')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'audits'
                    ? 'bg-surface-container-lowest text-on-surface font-black shadow-sm'
                    : 'bg-surface-container-high/20 hover:bg-surface-container-high/40 text-inverse-on-surface font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">science</span>
                <span>Batch HPLC Audits &amp; COAs</span>
              </button>

              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'inventory'
                    ? 'bg-surface-container-lowest text-on-surface font-black shadow-sm'
                    : 'bg-surface-container-high/20 hover:bg-surface-container-high/40 text-inverse-on-surface font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                <span>Inventory &amp; Fulfillment</span>
              </button>

              <button
                onClick={() => setActiveTab('payouts')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'payouts'
                    ? 'bg-surface-container-lowest text-on-surface font-black shadow-sm'
                    : 'bg-surface-container-high/20 hover:bg-surface-container-high/40 text-inverse-on-surface font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">payments</span>
                <span>Payouts &amp; Commissions</span>
                <span className="text-primary-container font-black">₹34.2L MTD</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. EXECUTIVE KPI METRIC GRID (4 CARDS) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Metric 1: Monthly GMV */}
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold">
                GROSS MERCHANDISE VOLUME (GMV)
              </span>
              <span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-headline-lg text-3xl text-on-surface font-black">₹18,49,200</div>
                <div className="flex items-center gap-1 font-body-sm text-xs text-primary font-bold mt-1">
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                  <span>+14.2% MoM</span>
                  <span className="text-on-surface-variant font-normal">vs. Prev 30 Days</span>
                </div>
              </div>

              {/* Sparkline Mini SVG */}
              <div className="w-16 h-8">
                <svg className="w-full h-full stroke-primary fill-none stroke-[2.5]" preserveAspectRatio="none" viewBox="0 0 80 40">
                  <path d="M 0,32 Q 15,28 30,20 T 55,14 T 80,4" />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-caps text-[10px]">
              <span>Target: ₹17,50,000</span>
              <span className="text-primary font-black">105.6% To Plan</span>
            </div>
          </div>

          {/* Metric 2: Active Brand Subscribers */}
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold">
                ACTIVE BRAND SUBSCRIBERS
              </span>
              <span className="w-8 h-8 rounded-lg bg-secondary-container/10 text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">autorenew</span>
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-headline-lg text-3xl text-on-surface font-black">
                  1,420 <span className="font-headline-sm text-sm text-on-surface-variant font-bold">Athletes</span>
                </div>
                <div className="flex items-center gap-1 font-body-sm text-xs text-secondary font-bold mt-1">
                  <span className="material-symbols-outlined text-[16px]">currency_exchange</span>
                  <span>₹9,23,000 MRR</span>
                  <span className="text-on-surface-variant font-normal">(49.9% Velocity)</span>
                </div>
              </div>

              {/* Circular Progress Ring */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-surface-container"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-secondary-container"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="82, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-caps text-[10px]">
              <span>Churn Rate: 1.2%</span>
              <span className="text-on-surface font-black">+184 Subscriptions MTD</span>
            </div>
          </div>

          {/* Metric 3: Lot Compliance Verification */}
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold">
                LOT COMPLIANCE VERIFICATION
              </span>
              <span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-headline-lg text-3xl text-primary font-black">100% PASS</div>
                <div className="flex items-center gap-1 font-body-sm text-xs text-on-surface font-bold mt-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">task_alt</span>
                  <span>18 / 18 SKUs Cleared</span>
                </div>
              </div>

              <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-[10px] text-on-surface-variant font-extrabold uppercase">
                ISO 17025
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-caps text-[10px]">
              <span>Purity Std: &gt;97.5%</span>
              <span className="text-primary font-black">Zero Contaminants Found</span>
            </div>
          </div>

          {/* Metric 4: Warehouse Dispatch Velocity */}
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold">
                WAREHOUSE DISPATCH VELOCITY
              </span>
              <span className="w-8 h-8 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-headline-lg text-3xl text-on-surface font-black">
                  5.4h <span className="font-headline-sm text-sm text-on-surface-variant font-bold">Avg</span>
                </div>
                <div className="flex items-center gap-1 font-body-sm text-xs text-tertiary font-bold mt-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>99.8% Zero-Backorder</span>
                </div>
              </div>

              <span className="px-2 py-1 bg-primary-container text-on-primary-fixed rounded font-label-caps text-[10px] font-black uppercase">
                Priority Tier
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-caps text-[10px]">
              <span>Carrier SLA: Same-Day</span>
              <span className="text-on-surface font-black">SLC Regional Hub</span>
            </div>
          </div>
        </section>

        {/* 3. MAIN WORKSPACE: CATALOG TABLE (70%) + DEMAND & UPLOADER (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* =========================================================================
              LEFT COLUMN: ACTIVE STOREFRONT CATALOG TABLE (8 COLS)
          ========================================================================= */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container p-6">
              {/* Header and Filter Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-headline-sm text-lg font-black text-on-surface uppercase tracking-tight">
                    Active Storefront Catalog &amp; Formulations
                  </h2>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                    Real-time SKU availability, batch HPLC certification readouts, and fulfillment pricing.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant">
                      search
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter SKUs, batch #..."
                      className="h-9 pl-8 pr-3 bg-surface-container-low text-on-surface font-body-sm text-xs rounded-lg placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container transition-all w-48 sm:w-56"
                    />
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="h-9 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface font-headline-sm text-xs font-bold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">tune</span>
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface font-label-caps text-[10px] uppercase tracking-wider font-extrabold">
                      <th className="py-3 px-4 rounded-l-lg">Product / Formulation</th>
                      <th className="py-3 px-3">Category</th>
                      <th className="py-3 px-3 text-right">MSRP</th>
                      <th className="py-3 px-3 text-right">Available Stock</th>
                      <th className="py-3 px-3">HPLC Batch #</th>
                      <th className="py-3 px-3">Purity Assay</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-4 text-right rounded-r-lg">Manage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low font-body-sm text-xs">
                    {filteredSkus.map((sku) => {
                      const isLowStock = sku.stockStatus === 'low';
                      return (
                        <tr
                          key={sku.id}
                          className={`transition-colors group ${
                            isLowStock
                              ? 'bg-error-container/10 hover:bg-error-container/20'
                              : 'hover:bg-surface-container-low/60'
                          }`}
                        >
                          {/* Product & SKU */}
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                                  isLowStock
                                    ? 'bg-secondary-container/10 text-secondary-container'
                                    : 'bg-surface-container text-primary'
                                }`}
                              >
                                <span className="material-symbols-outlined text-[20px]">{sku.icon}</span>
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="font-headline-sm text-xs text-on-surface font-bold truncate">
                                  {sku.name}
                                </span>
                                <span
                                  className={`font-label-caps text-[10px] uppercase ${
                                    isLowStock ? 'text-secondary font-black' : 'text-on-surface-variant'
                                  }`}
                                >
                                  {sku.sku}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-4 px-3 font-headline-sm text-xs text-on-surface-variant font-bold">
                            {sku.category}
                          </td>

                          {/* MSRP */}
                          <td className="py-4 px-3 text-right font-headline-sm text-xs text-on-surface font-black">
                            ₹{sku.msrp.toLocaleString('en-IN')}
                          </td>

                          {/* Available Stock */}
                          <td className="py-4 px-3 text-right">
                            <span
                              className={`font-headline-sm text-xs font-black ${
                                isLowStock ? 'text-secondary' : 'text-on-surface'
                              }`}
                            >
                              {sku.stock.toLocaleString()} units
                            </span>
                            <span
                              className={`block text-[10px] font-black uppercase ${
                                isLowStock ? 'text-secondary' : 'text-primary'
                              }`}
                            >
                              {sku.stockLabel}
                            </span>
                          </td>

                          {/* HPLC Batch # */}
                          <td className="py-4 px-3 font-mono text-[11px] font-extrabold text-on-surface-variant">
                            <span className="px-2 py-0.5 bg-surface-container rounded">
                              {sku.batchNumber}
                            </span>
                          </td>

                          {/* Purity Assay */}
                          <td className="py-4 px-3">
                            <div className="flex items-center gap-1 font-label-caps text-[11px] text-primary font-black">
                              <span className="material-symbols-outlined text-[16px]">science</span>
                              <span>{sku.purityPass}</span>
                            </div>
                          </td>

                          {/* Status */}
                          <td className="py-4 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full font-label-caps text-[10px] font-black ${
                                isLowStock
                                  ? 'bg-secondary-container text-on-secondary'
                                  : 'bg-primary-container text-on-primary-fixed'
                              }`}
                            >
                              {sku.status}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {isLowStock ? (
                                <button
                                  onClick={() => handleRestock(sku.name)}
                                  className="px-2.5 py-1 bg-secondary text-white rounded font-label-caps text-[10px] font-black uppercase hover:bg-secondary-container transition-colors cursor-pointer"
                                >
                                  Restock
                                </button>
                              ) : (
                                <>
                                  <button
                                    onClick={() => openCoaModal(sku.batchNumber.replace('#', ''))}
                                    className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                                    title="View HPLC Lab Dossier"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">verified</span>
                                  </button>
                                  <button
                                    onClick={() => showToast(`Edit pricing & allocations for ${sku.name}`, 'volt')}
                                    className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                                    title="Edit Pricing & Allocations"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table Bottom Footer Pagination */}
              <div className="mt-6 pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-body-sm text-xs gap-3">
                <span>Displaying {filteredSkus.length} of 18 registered catalog formulations</span>
                <div className="flex items-center gap-1.5 font-label-caps text-xs">
                  <button className="px-3 py-1 bg-surface-container-low hover:bg-surface-container rounded font-bold uppercase text-on-surface transition-colors cursor-pointer">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-inverse-surface text-white rounded font-black uppercase">
                    1
                  </button>
                  <button className="px-3 py-1 bg-surface-container-low hover:bg-surface-container rounded font-bold uppercase text-on-surface transition-colors cursor-pointer">
                    2
                  </button>
                  <button className="px-3 py-1 bg-surface-container-low hover:bg-surface-container rounded font-bold uppercase text-on-surface transition-colors cursor-pointer">
                    3
                  </button>
                  <button className="px-3 py-1 bg-surface-container-low hover:bg-surface-container rounded font-bold uppercase text-on-surface transition-colors cursor-pointer">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* LAB COMPLIANCE FEED PANEL */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">biotech</span>
                  <h3 className="font-headline-sm text-base font-black text-on-surface">
                    HPLC Purity &amp; Contaminant Verification Readout
                  </h3>
                </div>
                <span className="text-primary font-label-caps text-[10px] uppercase font-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  Live Telemetry Feed
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center text-on-surface-variant font-label-caps text-[10px] font-bold">
                    <span>Heavy Metals Screen</span>
                    <span className="text-primary font-black">PASS (ND)</span>
                  </div>
                  <div className="font-headline-sm text-xs text-on-surface font-bold mt-1">
                    Lead: &lt;0.005 ppm
                  </div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-[4%]" />
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1 block">
                    Threshold: 0.150 ppm (Safe)
                  </span>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center text-on-surface-variant font-label-caps text-[10px] font-bold">
                    <span>Microbial Contaminants</span>
                    <span className="text-primary font-black">PASS (ABSENT)</span>
                  </div>
                  <div className="font-headline-sm text-xs text-on-surface font-bold mt-1">
                    E. coli &amp; Salmonella: 0 CFU
                  </div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-[0%]" />
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1 block">
                    Incubation Period: 48h Cleared
                  </span>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center text-on-surface-variant font-label-caps text-[10px] font-bold">
                    <span>WADA Prohibited Substance</span>
                    <span className="text-primary font-black">CERTIFIED ZERO</span>
                  </div>
                  <div className="font-headline-sm text-xs text-on-surface font-bold mt-1">
                    Full 285+ Compound Screen
                  </div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-full" />
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1 block">
                    Informed-Sport Batch Hash: #8F99C
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              RIGHT COLUMN: ATHLETE DEMAND, COA INGESTION & QUALITY RANK (4 COLS)
          ========================================================================= */}
          <section className="lg:col-span-4 flex flex-col gap-6">
            {/* ATHLETE DEMAND & SAVED ACTIVITY CARD */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-base font-black text-on-surface">
                  Athlete Demand Insights
                </h3>
                <span className="material-symbols-outlined text-secondary-container text-[20px]">
                  favorite
                </span>
              </div>

              <div className="bg-surface-container-low rounded-lg p-4 mb-4 border border-surface-container">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                    Athletes Saved to Fuel Deck
                  </span>
                  <span className="font-headline-lg text-2xl text-on-surface font-black">3,420</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-secondary-container h-full w-[78%]" />
                </div>
                <div className="flex justify-between text-[11px] text-on-surface-variant mt-1.5 font-bold">
                  <span>Conversion Rate: 34.6%</span>
                  <span className="text-secondary">+412 this week</span>
                </div>
              </div>

              {/* Top Saved Product Highlight */}
              <div className="p-3.5 bg-surface-container-lowest border-l-4 border-primary rounded-r-lg shadow-sm border border-surface-container mb-4">
                <div className="font-label-caps text-[10px] text-primary font-black uppercase tracking-wider">
                  TOP SAVED FORMULATION
                </div>
                <div className="font-headline-sm text-sm text-on-surface font-bold mt-0.5">
                  Apex Hydrolyzed Whey Isolate
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-on-surface-variant font-bold">
                  <span>1,140 Saved Decks</span>
                  <span className="font-black text-on-surface">₹59,26,400 Pipeline</span>
                </div>
              </div>

              {/* Category Breakdown Progress Bars */}
              <div className="space-y-3">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider font-extrabold block">
                  TOP ATHLETE CATEGORIES
                </span>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span className="text-on-surface">Olympic Weightlifting / Cross-Training</span>
                    <span className="text-on-surface font-black">48%</span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-on-surface h-full w-[48%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span className="text-on-surface">Hyrox &amp; Triathlon Endurance</span>
                    <span className="text-on-surface font-black">32%</span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full w-[32%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span className="text-on-surface">Combat Sports &amp; Tactical</span>
                    <span className="text-on-surface font-black">20%</span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-container h-full w-[20%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* BATCH DOSSIER & COA INGESTION MODULE */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-headline-sm text-base font-black text-on-surface">
                  Batch Dossier &amp; COA Ingestion
                </h3>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  assignment_turned_in
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant mb-4">
                Upload ISO 17025 certified laboratory certificates to authorize new production lots on the storefront.
              </p>

              {/* Interactive Upload Dropzone */}
              <div
                onClick={() => openCoaModal('APX-9924-W')}
                className="p-6 bg-surface-container-low hover:bg-surface-container rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all border-2 border-dashed border-surface-container-high hover:border-primary group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                </div>
                <span className="font-headline-sm text-xs text-on-surface font-black">
                  Drag &amp; Drop Lab PDF / HPLC CSV
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                  or browse your system (Max 50MB)
                </span>
                <span className="mt-2 px-2.5 py-0.5 bg-surface-container rounded font-label-caps text-[9px] text-on-surface-variant uppercase font-black">
                  Automated OCR &amp; Spec Hash Verification
                </span>
              </div>

              {/* Pending Verification Queue */}
              <div className="mt-5">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider font-extrabold block mb-2">
                  ACTIVE VERIFICATION QUEUE (1 PENDING)
                </span>
                <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between border border-surface-container">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">pending</span>
                    <div>
                      <div className="font-headline-sm text-xs text-on-surface font-bold">
                        Lot #APX-ISO-9950
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">
                        LGC Cambridge Labs • Awaiting Signature
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface font-label-caps text-[10px] rounded font-black uppercase">
                    Reviewing
                  </span>
                </div>
              </div>
            </div>

            {/* STOREFRONT QUALITY RANK BANNER */}
            <div className="bg-inverse-surface rounded-xl p-5 text-inverse-on-surface shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    verified
                  </span>
                  <span className="font-headline-sm text-xs uppercase font-black text-white">
                    Storefront Quality Rank
                  </span>
                </div>
                <span className="font-label-caps text-[10px] bg-primary-container text-on-primary-fixed px-2 py-0.5 rounded font-black">
                  Top 1%
                </span>
              </div>
              <p className="font-body-sm text-xs text-surface-variant">
                Apex Performance Labs maintains the #1 Zero-Recall and HPLC Accuracy ranking across the Western US Distribution Corridor.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-surface-variant font-bold">
                <span>Next Re-Certification:</span>
                <span className="text-primary-container font-black">Nov 15, 2026</span>
              </div>
            </div>
          </section>
        </div>

        {/* 4. PARTNER PAYOUTS & AUTOMATED SETTLEMENT PREVIEW */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  account_balance_wallet
                </span>
                <h3 className="font-headline-sm text-lg font-black text-on-surface uppercase tracking-tight">
                  Automated Marketplace Settlement Ledger
                </h3>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                Automated net-14 payout clearing directly into JPMorgan Chase Primary Treasury account.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-left md:text-right">
                <div className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                  Next Disbursement Date
                </div>
                <div className="font-headline-sm text-xs text-on-surface font-black">
                  Friday, Oct 24 • ₹17,12,816
                </div>
              </div>
              <button
                onClick={() => showToast('Downloading Tax & 1099-K Official Dossier PDF...', 'volt')}
                className="px-4 py-2 bg-inverse-surface text-white hover:bg-on-surface font-headline-sm text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                <span>Tax &amp; 1099-K Dossier</span>
              </button>
            </div>
          </div>

          {/* Quick Ledger 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-on-surface">
            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                Disbursed Last 30 Days
              </span>
              <div className="font-headline-lg text-2xl font-black mt-1 text-on-surface">
                ₹1,13,69,600
              </div>
              <span className="text-[10px] text-primary font-black mt-1 block">
                ACH Trace #8849-012 PASS
              </span>
            </div>

            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                Pending Escrow Clearing
              </span>
              <div className="font-headline-lg text-2xl font-black mt-1 text-on-surface">
                ₹14,76,032
              </div>
              <span className="text-[10px] text-on-surface-variant mt-1 block">
                In Carrier Transit
              </span>
            </div>

            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                Platform Fee Retained
              </span>
              <div className="font-headline-lg text-2xl font-black mt-1 text-on-surface">
                4.5% Standard
              </div>
              <span className="text-[10px] text-primary font-black mt-1 block">
                Flagship Tier Discount Applied
              </span>
            </div>

            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                Athlete Returns / Write-offs
              </span>
              <div className="font-headline-lg text-2xl font-black mt-1 text-on-surface">
                0.08%
              </div>
              <span className="text-[10px] text-primary font-black mt-1 block">
                Top 0.5% Industry Benchmark
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          INTERACTIVE MODAL: ADD NEW FORMULATION / SKU
      ========================================================================= */}
      {isAddSkuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-xl p-6 md:p-8 relative overflow-hidden border border-surface-container">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">post_add</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-lg font-black text-on-surface uppercase">
                    Register New Formulation SKU
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Initiate ISO laboratory clearance and storefront listing.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddSkuModalOpen(false)}
                className="p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddSkuSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-label-caps text-[10px] text-on-surface-variant uppercase font-black mb-1">
                    Formulation Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Apex EAAs + Electrolytes"
                    className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-xs focus:outline-none focus:bg-surface-container border border-surface-container"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface-variant uppercase font-black mb-1">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-xs focus:outline-none focus:bg-surface-container border border-surface-container cursor-pointer"
                  >
                    <option value="Protein & Amino Acids">Protein &amp; Amino Acids</option>
                    <option value="Hydration & Electrolytes">Hydration &amp; Electrolytes</option>
                    <option value="Pre-Workout & Stimulants">Pre-Workout &amp; Stimulants</option>
                    <option value="Recovery & Sleep">Recovery &amp; Sleep</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface-variant uppercase font-black mb-1">
                    Target MSRP (₹ INR)
                  </label>
                  <input
                    type="number"
                    step="1"
                    required
                    value={formMsrp}
                    onChange={(e) => setFormMsrp(e.target.value)}
                    placeholder="3999"
                    className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-xs focus:outline-none focus:bg-surface-container border border-surface-container"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface-variant uppercase font-black mb-1">
                    Initial Production Units
                  </label>
                  <input
                    type="number"
                    required
                    value={formUnits}
                    onChange={(e) => setFormUnits(e.target.value)}
                    placeholder="1000"
                    className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-xs focus:outline-none focus:bg-surface-container border border-surface-container"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface-variant uppercase font-black mb-1">
                    Batch HPLC Reference Hash
                  </label>
                  <input
                    type="text"
                    required
                    value={formBatch}
                    onChange={(e) => setFormBatch(e.target.value)}
                    placeholder="LOT-APX-YYYY-####"
                    className="w-full h-11 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-xs focus:outline-none focus:bg-surface-container border border-surface-container"
                  />
                </div>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between border border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                  <span className="font-body-sm text-xs text-on-surface font-bold">
                    Auto-Submit for Informed-Sport Batch Indexing
                  </span>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-surface-container">
                <button
                  type="button"
                  onClick={() => setIsAddSkuModalOpen(false)}
                  className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary-container text-on-primary-fixed hover:bg-primary-fixed font-headline-sm text-xs font-black rounded-lg flex items-center gap-1.5 shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">publish</span>
                  <span>Publish to Storefront</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
