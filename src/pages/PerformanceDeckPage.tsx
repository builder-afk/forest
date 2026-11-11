import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, IMAGES } from '../data/mockData';

interface SavedCardItem {
  id: string;
  name: string;
  slug: string;
  badgeTopLeft: string;
  badgeTopLeftClass?: string;
  badgeBottomLeft: string;
  badgeBottomLeftClass?: string;
  batchNumber: string;
  flavorOrVariant: string;
  description: string;
  image: string;
  alt: string;
  macros: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  price: number;
  originalPrice?: number;
  subPriceLabel?: string;
  servingsLabel?: string;
  hasDualButtons?: boolean;
  btn1Text?: string;
  btn2Text?: string;
  categoryGroup: 'isolates' | 'creatine' | 'recovery';
  isSubscribed?: boolean;
}

const SAVED_CARDS: SavedCardItem[] = [
  {
    id: 'apex-hydrolyzed-whey',
    name: 'Apex Hydrolyzed Whey Isolate',
    slug: 'apex-hydrolyzed-whey-isolate',
    badgeTopLeft: 'CFM COLD FILTER',
    badgeBottomLeft: '24H DISPATCH',
    badgeBottomLeftClass: 'bg-primary-container text-on-primary-fixed',
    batchNumber: 'BATCH #CFM-8820',
    flavorOrVariant: 'BOURBON MADAGASCAR VANILLA',
    description: 'Ultra-refined enzymatically cleaved peptide profile for sub-30min absorption.',
    image:
      IMAGES['Matte black tub of Apex Hydrolyzed Whey Isolate sports nutrition protein supplement with neon volt typography and batch lab tag, clean lighting against soft gray surface'] ||
      IMAGES['Premium sleek matte black supplement tub of Apex Hydrolyzed Whey Isolate with high-contrast electric volt green accents, set against a pristine minimalist studio pedestal with soft dramatic studio light.'] ||
      '/images/products/apex-native-whey.jpg',
    alt: 'Matte black tub of Apex Hydrolyzed Whey Isolate',
    macros: {
      label1: 'PROTEIN',
      val1: '30g',
      label2: 'CARBS',
      val2: '<1g',
      label3: 'ENERGY',
      val3: '130 kcal'
    },
    price: 5199,
    originalPrice: 5799,
    subPriceLabel: '₹4,159 W/ AUTO-SHIP',
    hasDualButtons: true,
    btn1Text: 'Move to Bag',
    btn2Text: 'Save 20% Sub',
    categoryGroup: 'isolates'
  },
  {
    id: 'apex-pro-whey',
    name: 'Apex Pro Whey Isolate 5lb Bulk',
    slug: 'apex-pro-whey-isolate',
    badgeTopLeft: 'ACTIVE SUB (30D)',
    badgeTopLeftClass: 'bg-secondary-container text-on-secondary',
    badgeBottomLeft: '5LB BULK PRO-TUB',
    badgeBottomLeftClass: 'bg-primary-container text-on-primary-fixed',
    batchNumber: 'BATCH #W5B-1092',
    flavorOrVariant: 'DARK BELGIAN COCOA FUDGE',
    description: '77 servings of pure cross-flow microfiltered isolate with DigeZyme enzymes.',
    image:
      IMAGES['A 5lb heavy duty gusset bag of Apex Pro Whey Isolate Dark Belgian Cocoa Fudge with athletic volt accents and lab batch certificate badge'] ||
      IMAGES['Apex Pro Whey Isolate Tub 5lb'] ||
      '/images/products/apex-native-whey.jpg',
    alt: 'Apex Pro Whey Isolate 5lb Bulk',
    macros: {
      label1: 'PROTEIN',
      val1: '30g',
      label2: 'CARBS',
      val2: '1g',
      label3: 'ENERGY',
      val3: '130 kcal'
    },
    price: 8799,
    originalPrice: 9999,
    subPriceLabel: '₹7,039 ACTIVE SUB',
    hasDualButtons: true,
    btn1Text: 'Move to Bag',
    btn2Text: 'Manage Sub',
    categoryGroup: 'isolates',
    isSubscribed: true
  },
  {
    id: 'clear-whey-hydrolysate',
    name: 'Clear Whey Hydrolysate',
    slug: 'clear-whey-hydrolysate',
    badgeTopLeft: 'ZERO MILKY TEXTURE',
    badgeBottomLeft: 'IN STOCK',
    badgeBottomLeftClass: 'bg-surface-container-highest text-on-surface',
    batchNumber: 'BATCH #CWH-402',
    flavorOrVariant: 'CRISP LEMON ICED',
    description: 'Light, thirst-quenching peptide isolate delivering crisp fruit juice taste.',
    image:
      IMAGES['Clear modern supplement jar containing translucent light yellow Clear Whey Hydrolysate Citrus powder with fresh sliced lemons beside packaging, high key studio shot'] ||
      IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.'] ||
      '/images/products/clear-vegan-peptides.jpg',
    alt: 'Clear Whey Hydrolysate Citrus',
    macros: {
      label1: 'PROTEIN',
      val1: '20g',
      label2: 'SUGAR',
      val2: '0g',
      label3: 'ENERGY',
      val3: '80 kcal'
    },
    price: 3119,
    servingsLabel: '30 SERVINGS',
    hasDualButtons: false,
    btn1Text: 'Move to Bag',
    categoryGroup: 'isolates'
  },
  {
    id: 'creapure-creatine',
    name: 'Creapure® Micronized 500g',
    slug: 'creapure-micronized-creatine',
    badgeTopLeft: 'GERMAN CREAPURE®',
    badgeTopLeftClass: 'bg-tertiary text-on-tertiary',
    badgeBottomLeft: 'ACTIVE SUB (60D)',
    badgeBottomLeftClass: 'bg-secondary-container text-on-secondary',
    batchNumber: 'BATCH #APX-CR-904',
    flavorOrVariant: 'PURE UNFLAVORED',
    description: '99.95% analytical purity verified via HPLC testing. Zero additives.',
    image:
      IMAGES['Monochromatic technical tub of Creapure German Micronized Creatine powder with lab seals and Informed Sport certification badge on a clean background'] ||
      IMAGES['Creapure Micronized Creatine 500g bottle, matte black clinical tub with metallic silver foil certification stamp, minimalist laboratory aesthetic on soft gray background.'] ||
      '/images/products/nitro-pre-workout.jpg',
    alt: 'Creapure Micronized Creatine 500g',
    macros: {
      label1: 'CREATINE',
      val1: '5.0g',
      label2: 'SERVINGS',
      val2: '100 SCOOPS',
      label3: 'PURITY',
      val3: '99.9%'
    },
    price: 2319,
    subPriceLabel: '₹1,855 W/ 60D SHIP',
    hasDualButtons: true,
    btn1Text: 'Move to Bag',
    btn2Text: 'View Lab COA',
    categoryGroup: 'creatine',
    isSubscribed: true
  },
  {
    id: 'night-micellar-casein',
    name: 'Night Micellar Casein Sustained',
    slug: 'night-micellar-casein',
    badgeTopLeft: '7-HOUR RELEASE',
    badgeTopLeftClass: 'bg-inverse-surface text-tertiary-fixed',
    badgeBottomLeft: 'RESTOCK: 14 UNITS',
    badgeBottomLeftClass: 'bg-surface-container-highest text-on-surface',
    batchNumber: 'BATCH #CSN-7711',
    flavorOrVariant: 'SLOW DARK CHOCOLATE',
    description: 'Time-released micellar matrix designed for anti-catabolic nocturnal recovery.',
    image:
      IMAGES['Deep obsidian tub of Apex Night Micellar Casein with rich dark chocolate visual cues and laboratory grade seal'] ||
      IMAGES['Night Micellar Casein deep navy matte tub supplement with sleek minimalist typography, glowing accent light, high-end pharmaceutical fitness aesthetic on neutral concrete.'] ||
      '/images/products/apex-collagen-peptides.jpg',
    alt: 'Night Micellar Casein',
    macros: {
      label1: 'PROTEIN',
      val1: '26g',
      label2: 'BCAAS',
      val2: '5.5g',
      label3: 'ENERGY',
      val3: '120 kcal'
    },
    price: 4559,
    subPriceLabel: '₹3,647 W/ SUB',
    hasDualButtons: false,
    btn1Text: 'Move to Bag',
    categoryGroup: 'recovery'
  },
  {
    id: 'overnight-power-oats',
    name: 'Overnight Power Oats Tub',
    slug: 'overnight-power-oats',
    badgeTopLeft: 'COMPLEX GLYCOGEN',
    badgeTopLeftClass: 'bg-primary-container text-on-primary-fixed',
    badgeBottomLeft: 'IN STOCK',
    badgeBottomLeftClass: 'bg-surface-container-highest text-on-surface',
    batchNumber: 'BATCH #OAT-301',
    flavorOrVariant: 'APPLE CINNAMON & CHIA',
    description: 'Gluten-free rolled oats fortified with whey isolate and organic chia seeds.',
    image:
      IMAGES['Athletic high-protein meal tub of Apex Overnight Power Oats with green apple, cinnamon bark and chia seeds in dynamic modern packaging'] ||
      IMAGES['Apex Overnight Power Oats large protein oatmeal tub, sleek modern branding, crisp white aesthetic with oats texture detail on neutral stone pedestal.'] ||
      '/images/products/cookie-dough-crunch-bars.jpg',
    alt: 'Overnight Power Oats Tub',
    macros: {
      label1: 'PROTEIN',
      val1: '25g',
      label2: 'SLOW CARBS',
      val2: '42g',
      label3: 'ENERGY',
      val3: '210 kcal'
    },
    price: 1999,
    servingsLabel: '14 SATCHETS',
    hasDualButtons: false,
    btn1Text: 'Move to Bag',
    categoryGroup: 'recovery'
  }
];

export const PerformanceDeckPage: React.FC = () => {
  const {
    setCurrentView,
    openCoaModal,
    addToCart,
    openCart,
    showToast,
    navigateToProduct,
    isProductSaved,
    toggleSaveProduct
  } = useApp();

  const [activeTab, setActiveTab] = useState<'saved' | 'subscriptions' | 'vault' | 'macros' | 'profile'>('saved');
  const [filterChip, setFilterChip] = useState<'all' | 'isolates' | 'creatine' | 'recovery' | 'instock' | 'subscribed'>('all');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const filteredCards = SAVED_CARDS.filter((card) => {
    if (filterChip === 'all') return true;
    if (filterChip === 'isolates') return card.categoryGroup === 'isolates';
    if (filterChip === 'creatine') return card.categoryGroup === 'creatine';
    if (filterChip === 'recovery') return card.categoryGroup === 'recovery';
    if (filterChip === 'instock') return card.badgeBottomLeft.includes('STOCK') || card.badgeBottomLeft.includes('24H');
    if (filterChip === 'subscribed') return card.isSubscribed;
    return true;
  });

  const handleCardAddToBag = (card: SavedCardItem) => {
    const foundProduct = PRODUCTS.find((p) => p.id === card.id || p.slug === card.slug);
    if (foundProduct) {
      addToCart(foundProduct, foundProduct.flavors[0], foundProduct.sizes[0], 1);
    } else {
      showToast(`Added ${card.name} to fuel cart!`, 'volt');
    }

    setAddedItems((prev) => ({ ...prev, [card.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [card.id]: false }));
    }, 1800);
  };

  const handleMoveAllToBag = () => {
    SAVED_CARDS.forEach((card) => {
      const prod = PRODUCTS.find((p) => p.id === card.id || p.slug === card.slug);
      if (prod) {
        addToCart(prod, prod.flavors[0], prod.sizes[0], 1);
      }
    });
    showToast('Moved all 6 in-stock formulations to your fuel cart!', 'volt');
    openCart();
  };

  const marcusAvatarUrl =
    IMAGES['High contrast professional athletic portrait of Marcus Vance, a focused decathlete with focused gaze under stark studio rim lighting and muted graphite shadows, apex performance aesthetic'] ||
    IMAGES['Profile'] ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDNLYs5ZgohQqbwuFoE_YFo4I4QiGajgPFTUMLQiW3ya3Jjh3h3-Juzga5FPmpnJOBXZyahsztUjy6NZLEcW8gCTDR1QuDojK3gjcNiHhw9B0w-5_WMlf7Rb5nwyaCwINFT_nvaEbYkxXlhpGxQe-eeu3fyiNo7gr3lrQa_Sv37LhdiFqlULJzWdqj8cvtX4Y7Cy-xZg6TvZtsMvDy_IOmtZpHDp1l2oWDiJa6Jptf5';

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
            className="flex-1 py-1.5 text-center rounded-md bg-surface-container-lowest font-label-caps text-xs text-on-surface font-black uppercase shadow-sm cursor-pointer"
          >
            Athlete Hub
          </button>
          <button
            onClick={() => setCurrentView('partner-dashboard')}
            className="flex-1 py-1.5 text-center rounded-md font-label-caps text-xs text-on-surface-variant hover:text-on-surface uppercase transition-colors cursor-pointer"
          >
            Store Portal
          </button>
        </div>

        {/* Section 1: Athlete Account */}
        <div className="mb-2">
          <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider font-extrabold px-3 block">
            ATHLETE ACCOUNT
          </span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <button
            onClick={() => {
              setCurrentView('performance-deck');
              setActiveTab('saved');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-black text-left cursor-pointer ${
              activeTab === 'saved'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span>Performance Deck</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('subscriptions');
              showToast('Switched to Fuel Subscriptions view', 'volt');
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer ${
              activeTab === 'subscriptions'
                ? 'bg-primary-container text-on-primary-fixed shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">autorenew</span>
            <span>Fuel Subscriptions</span>
          </button>

          <button
            onClick={() => openCoaModal('APX-9924-W')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">biotech</span>
            <span>Batch Verifications</span>
          </button>

          <button
            onClick={() => showToast('Orders & Shipments tracking portal ready', 'volt')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-headline-sm text-xs font-bold text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            <span>Orders &amp; Shipments</span>
          </button>
        </nav>

        {/* Bottom Verification Status Card */}
        <div className="pt-4 mt-auto">
          <div
            onClick={() => openCoaModal('APX-9924-W')}
            className="p-3 rounded-xl bg-surface-container flex items-center justify-between border border-surface-container-high/60 cursor-pointer hover:border-primary transition-colors"
          >
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
          MAIN PERFORMANCE DECK WORKSPACE
      ========================================================================= */}
      <main className="flex-1 min-w-0 p-4 md:p-8 space-y-6 relative overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute -right-16 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -bottom-16 w-64 h-64 rounded-full bg-secondary-container/5 blur-2xl pointer-events-none" />

        {/* =======================================================================
            ATHLETE TOP ELEVATION PROFILE BANNER
        ======================================================================= */}
        <section className="relative bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden border border-surface-container">
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            {/* Athlete Credentials Info */}
            <div className="flex items-center gap-4 md:gap-5">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full bg-inverse-surface flex items-center justify-center p-0.5 shadow-md overflow-hidden">
                  <img
                    src={marcusAvatarUrl}
                    alt="Marcus Vance"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[16px] font-bold">verified</span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-headline-md text-2xl md:text-3xl font-black text-on-surface tracking-tight">
                    Marcus Vance
                  </h1>
                  <span className="px-2 py-0.5 bg-inverse-surface text-primary-container font-label-caps text-[10px] font-black rounded-lg uppercase tracking-wider">
                    PRO TIER 1
                  </span>
                  <span className="px-2 py-0.5 bg-primary-container text-on-primary-fixed font-label-caps text-[10px] font-black rounded-lg uppercase">
                    WADA MONITORED
                  </span>
                </div>

                <p className="font-body-sm text-xs md:text-sm text-on-surface-variant flex items-center flex-wrap gap-2 mt-1">
                  <span>Decathlon Specialist</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-outline" />
                  <span>Olympic Trials Cohort #44</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-outline" />
                  <span className="text-primary font-bold">Verified Direct Buyer</span>
                </p>
              </div>
            </div>

            {/* Live Metric Badges Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container rounded-xl p-1.5 shadow-inner">
              <div className="bg-surface-container-lowest rounded-lg px-4 py-2.5 flex flex-col shadow-sm">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                  Fuel Dispatches
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-md text-2xl font-black text-on-surface">14</span>
                  <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                    LIFETIME
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg px-4 py-2.5 flex flex-col shadow-sm">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                  Subscriptions
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-md text-2xl font-black text-on-surface">02</span>
                  <span className="font-label-caps text-[10px] text-secondary-container font-black uppercase">
                    4D T-MINUS
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg px-4 py-2.5 flex flex-col shadow-sm">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                  Saved Stacks
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-md text-2xl font-black text-on-surface">08</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant font-bold uppercase">
                    FORMULAS
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg px-4 py-2.5 flex flex-col shadow-sm">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                  HPLC Reports
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-md text-2xl font-black text-tertiary">12</span>
                  <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Sub-Nav Menu Strip */}
          <div className="mt-6 pt-4 flex items-center justify-between overflow-x-auto gap-4 border-t border-surface-container">
            <div className="flex items-center gap-1.5 min-w-max">
              <button
                onClick={() => setActiveTab('saved')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'saved'
                    ? 'bg-inverse-surface text-primary-container font-black shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">favorite</span>
                <span>Saved Formulations (8)</span>
              </button>

              <button
                onClick={() => setActiveTab('subscriptions')}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'subscriptions'
                    ? 'bg-inverse-surface text-primary-container font-black shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">autorenew</span>
                <span>Active Subscriptions (2)</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('vault');
                  openCoaModal('APX-9924-W');
                }}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'vault'
                    ? 'bg-inverse-surface text-primary-container font-black shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">biotech</span>
                <span>HPLC Batch Vault</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('macros');
                  showToast('Macro Calibration engine calibrated for 3,450 kcal decathlon protocol', 'volt');
                }}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'macros'
                    ? 'bg-inverse-surface text-primary-container font-black shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                <span>Macro Calibration</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('profile');
                  showToast('Marcus Vance KYC & Athlete Bio: Tier 1 Verified', 'volt');
                }}
                className={`px-4 py-2 rounded-lg font-headline-sm text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-inverse-surface text-primary-container font-black shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">shield_person</span>
                <span>Athlete Profile &amp; KYC</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                Calibration Sync:
              </span>
              <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                100% WADA Compliant
              </span>
            </div>
          </div>
        </section>

        {/* =======================================================================
            MAIN BENTO GRID ARCHITECTURE (8 COLS LEFT + 4 COLS RIGHT)
        ======================================================================= */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* =====================================================================
              LEFT COLUMN: SAVED FORMULATIONS MATRIX (8 COLS)
          ===================================================================== */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* Wishlist Header & Filter Bar */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">bookmark</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-lg font-black text-on-surface tracking-tight uppercase">
                      Saved Fuel Formulations
                    </h2>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Lab-verified formulas pinned to your active training cycle
                    </p>
                  </div>
                </div>

                {/* Quick Bulk Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMoveAllToBag}
                    className="px-4 py-2 bg-primary-container text-on-primary-fixed font-headline-sm text-xs font-black rounded-lg flex items-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Move All In-Stock to Bag (6)</span>
                  </button>

                  <button
                    onClick={() => showToast('Exporting Decathlon Nutrition Protocol PDF...', 'volt')}
                    className="p-2 bg-surface-container text-on-surface rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer flex items-center justify-center"
                    title="Export Macros PDF"
                  >
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                </div>
              </div>

              {/* Filter Chips Carousel Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setFilterChip('all')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'all'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-on-surface font-bold hover:bg-surface-container-high'
                  }`}
                >
                  All Saved (8)
                </button>
                <button
                  onClick={() => setFilterChip('isolates')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'isolates'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-on-surface font-bold hover:bg-surface-container-high'
                  }`}
                >
                  Protein Isolates (4)
                </button>
                <button
                  onClick={() => setFilterChip('creatine')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'creatine'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-on-surface font-bold hover:bg-surface-container-high'
                  }`}
                >
                  Creatine &amp; Pre-Drive (2)
                </button>
                <button
                  onClick={() => setFilterChip('recovery')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'recovery'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-on-surface font-bold hover:bg-surface-container-high'
                  }`}
                >
                  Recovery &amp; Fuel (2)
                </button>
                <button
                  onClick={() => setFilterChip('instock')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'instock'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-on-surface font-bold hover:bg-surface-container-high'
                  }`}
                >
                  In-Stock Priority
                </button>
                <button
                  onClick={() => setFilterChip('subscribed')}
                  className={`px-3 py-1 rounded-full font-label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                    filterChip === 'subscribed'
                      ? 'bg-inverse-surface text-primary-container font-black'
                      : 'bg-surface-container text-primary font-black hover:bg-surface-container-high'
                  }`}
                >
                  Subscribed (2)
                </button>
              </div>
            </div>

            {/* High-Density Product Matrix (6 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCards.map((card) => {
                const isSaved = isProductSaved(card.id);
                const isAdded = !!addedItems[card.id];

                return (
                  <div
                    key={card.id}
                    className="group bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-surface-container"
                  >
                    <div>
                      {/* Product Image Stage */}
                      <div className="relative w-full h-48 rounded-lg bg-surface-container-low overflow-hidden flex items-center justify-center mb-3">
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Top Left Badge */}
                        <div className="absolute top-2 left-2 flex items-center gap-1">
                          <span
                            className={`px-2 py-0.5 rounded font-label-caps text-[10px] font-black uppercase ${
                              card.badgeTopLeftClass || 'bg-inverse-surface text-primary-container'
                            }`}
                          >
                            {card.badgeTopLeft}
                          </span>
                        </div>

                        {/* Top Right Save Heart Button */}
                        <button
                          onClick={() => toggleSaveProduct(card.id)}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center text-secondary-container shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        >
                          <span
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
                          >
                            favorite
                          </span>
                        </button>

                        {/* Bottom Left Badge */}
                        <div className="absolute bottom-2 left-2">
                          <span
                            className={`px-1.5 py-0.5 rounded font-label-caps text-[10px] font-black uppercase ${
                              card.badgeBottomLeftClass || 'bg-primary-container text-on-primary-fixed'
                            }`}
                          >
                            {card.badgeBottomLeft}
                          </span>
                        </div>
                      </div>

                      {/* Batch Meta */}
                      <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-[10px] mb-1 font-bold">
                        <span className="font-mono">{card.batchNumber}</span>
                        <span className="text-primary font-black">{card.flavorOrVariant}</span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => navigateToProduct(card.slug)}
                        className="font-headline-sm text-base font-black text-on-surface group-hover:text-primary transition-colors tracking-tight cursor-pointer"
                      >
                        {card.name}
                      </h3>

                      {/* Subtitle Description */}
                      <p className="font-body-sm text-xs text-on-surface-variant line-clamp-1 mb-3 mt-0.5">
                        {card.description}
                      </p>

                      {/* Macro Micro-strip Grid */}
                      <div className="grid grid-cols-3 gap-1 bg-surface-container-low p-2 rounded-lg text-center mb-4 border border-surface-container">
                        <div>
                          <span className="block font-label-caps text-[9px] text-on-surface-variant uppercase font-bold">
                            {card.macros.label1}
                          </span>
                          <span className="font-headline-sm text-xs text-on-surface font-black">
                            {card.macros.val1}
                          </span>
                        </div>
                        <div>
                          <span className="block font-label-caps text-[9px] text-on-surface-variant uppercase font-bold">
                            {card.macros.label2}
                          </span>
                          <span className="font-headline-sm text-xs text-on-surface font-black">
                            {card.macros.val2}
                          </span>
                        </div>
                        <div>
                          <span className="block font-label-caps text-[9px] text-on-surface-variant uppercase font-bold">
                            {card.macros.label3}
                          </span>
                          <span className="font-headline-sm text-xs text-on-surface font-black">
                            {card.macros.val3}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA Area */}
                    <div>
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-headline-lg text-2xl font-black text-on-surface">
                            ₹{card.price.toLocaleString('en-IN')}
                          </span>
                          {card.originalPrice && (
                            <span className="font-body-sm text-xs text-on-surface-variant line-through">
                              ₹{card.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        {card.subPriceLabel && (
                          <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                            {card.subPriceLabel}
                          </span>
                        )}
                        {card.servingsLabel && (
                          <span className="font-label-caps text-[10px] text-on-surface-variant font-bold uppercase">
                            {card.servingsLabel}
                          </span>
                        )}
                      </div>

                      {card.hasDualButtons ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleCardAddToBag(card)}
                            className="w-full py-2 bg-primary-container text-on-primary-fixed rounded-lg font-headline-sm text-xs font-black flex items-center justify-center gap-1 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              {isAdded ? 'check' : 'add_shopping_cart'}
                            </span>
                            <span>{isAdded ? 'Added!' : card.btn1Text || 'Move to Bag'}</span>
                          </button>

                          {card.btn2Text === 'View Lab COA' ? (
                            <button
                              onClick={() => openCoaModal(card.batchNumber.replace('BATCH #', ''))}
                              className="w-full py-2 bg-surface-container text-on-surface rounded-lg font-headline-sm text-xs font-bold flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors cursor-pointer"
                            >
                              <span>View Lab COA</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                showToast(`Configured Auto-Ship subscription for ${card.name}`, 'volt');
                              }}
                              className="w-full py-2 bg-inverse-surface text-white rounded-lg font-headline-sm text-xs font-bold flex items-center justify-center gap-1 hover:bg-on-surface transition-colors cursor-pointer"
                            >
                              <span>{card.btn2Text || 'Save 20% Sub'}</span>
                            </button>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleCardAddToBag(card)}
                          className="w-full py-2 bg-primary-container text-on-primary-fixed rounded-lg font-headline-sm text-xs font-black flex items-center justify-center gap-1 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {isAdded ? 'check' : 'add_shopping_cart'}
                          </span>
                          <span>{isAdded ? 'Added to Bag!' : 'Move to Bag'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Macro Density Analysis for Saved Items (Saved Formulations Stack Synergy) */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-headline-sm text-base font-black text-on-surface tracking-tight uppercase">
                    Saved Formulations Stack Synergy
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Aggregated nutritional yield if consumed across Marcus's daily decathlon protocol
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-surface-container font-label-caps text-[10px] font-black text-on-surface uppercase shrink-0">
                  CALIBRATED: 3,450 KCAL / DAY TARGET
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                      TOTAL STACK PRO
                    </span>
                    <span className="font-headline-sm text-xs text-on-surface font-black">131g</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: '78%' }} />
                  </div>
                  <span className="font-label-caps text-[10px] text-primary font-black mt-1.5 block">
                    78% of Daily Target
                  </span>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                      BCAA / EAA YIELD
                    </span>
                    <span className="font-headline-sm text-xs text-on-surface font-black">28.4g</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                    <div className="bg-tertiary-fixed-dim h-full rounded-full" style={{ width: '92%' }} />
                  </div>
                  <span className="font-label-caps text-[10px] text-tertiary font-black mt-1.5 block">
                    92% Optimum Saturation
                  </span>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                      CREATINE SATURATION
                    </span>
                    <span className="font-headline-sm text-xs text-on-surface font-black">5.0g</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="font-label-caps text-[10px] text-primary font-black mt-1.5 block">
                    100% Maintenance Met
                  </span>
                </div>

                <div className="p-3.5 bg-surface-container-low rounded-lg border border-surface-container">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold">
                      ALLERGEN SAFETY
                    </span>
                    <span className="font-headline-sm text-xs text-primary font-black">
                      0 GLUTEN / SOY
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant font-bold mt-1.5 block">
                    Clean Verified ISO 17025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: SUBSCRIPTIONS DECK + BATCH VAULT (4 COLS)
          ===================================================================== */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Section: Active Subscriptions Deck */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">autorenew</span>
                  </div>
                  <h3 className="font-headline-sm text-base font-black text-on-surface tracking-tight uppercase">
                    Active Auto-Ship
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-fixed font-label-caps text-[10px] font-black uppercase">
                  2 ACTIVE
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Subscription 1 */}
                <div className="p-4 bg-surface-container-low rounded-lg flex flex-col justify-between border border-surface-container">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="font-label-caps text-[10px] text-secondary-container font-black uppercase">
                        DISPATCH IN 4 DAYS (T-MINUS)
                      </span>
                      <h4 className="font-headline-sm text-sm text-on-surface font-bold mt-0.5 leading-snug">
                        Apex Pro Whey Isolate 5lb Bulk
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        Cadence: Every 30 Days • Dark Belgian Cocoa
                      </p>
                    </div>
                    <span className="font-headline-sm text-lg text-on-surface font-black">
                      ₹7,039
                    </span>
                  </div>

                  {/* Visual Progress to next dispatch */}
                  <div className="mb-3">
                    <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant mb-1 font-bold">
                      <span>Cycle day 26 / 30</span>
                      <span>Fulfillment Batch Locked</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-secondary-container h-full rounded-full" style={{ width: '86%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => showToast('Subscription dispatch skipped by 1 cycle (30 days)', 'info')}
                      className="py-1.5 px-2 bg-surface-container-lowest text-on-surface rounded font-label-caps text-[10px] font-bold hover:bg-surface-container-high transition-colors cursor-pointer text-center border border-surface-container"
                    >
                      Skip 1 Ship
                    </button>
                    <button
                      onClick={() => showToast('Flavor swap dialog opened for Bulk Isolate', 'volt')}
                      className="py-1.5 px-2 bg-surface-container-lowest text-on-surface rounded font-label-caps text-[10px] font-bold hover:bg-surface-container-high transition-colors cursor-pointer text-center border border-surface-container"
                    >
                      Swap Flavor
                    </button>
                    <button
                      onClick={() => showToast('Managing subscription schedule & payment method', 'volt')}
                      className="py-1.5 px-2 bg-inverse-surface text-white rounded font-label-caps text-[10px] font-black hover:bg-on-surface transition-colors cursor-pointer text-center"
                    >
                      Manage
                    </button>
                  </div>
                </div>

                {/* Subscription 2 */}
                <div className="p-4 bg-surface-container-low rounded-lg flex flex-col justify-between border border-surface-container">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                        DISPATCH IN 34 DAYS
                      </span>
                      <h4 className="font-headline-sm text-sm text-on-surface font-bold mt-0.5 leading-snug">
                        Creapure® Micronized 500g
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        Cadence: Every 60 Days • Unflavored 100-Serv
                      </p>
                    </div>
                    <span className="font-headline-sm text-lg text-on-surface font-black">
                      ₹1,855
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant mb-1 font-bold">
                      <span>Cycle day 26 / 60</span>
                      <span className="text-primary font-black">On-Track</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '43%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => showToast('Subscription dispatch skipped by 1 cycle (60 days)', 'info')}
                      className="py-1.5 px-2 bg-surface-container-lowest text-on-surface rounded font-label-caps text-[10px] font-bold hover:bg-surface-container-high transition-colors cursor-pointer text-center border border-surface-container"
                    >
                      Skip 1 Ship
                    </button>
                    <button
                      onClick={() => showToast('Creapure Creatine dispatch expedited — shipping now!', 'volt')}
                      className="py-1.5 px-2 bg-surface-container-lowest text-on-surface rounded font-label-caps text-[10px] font-bold hover:bg-surface-container-high transition-colors cursor-pointer text-center border border-surface-container"
                    >
                      Send Now
                    </button>
                    <button
                      onClick={() => showToast('Managing Creapure subscription schedule', 'volt')}
                      className="py-1.5 px-2 bg-inverse-surface text-white rounded font-label-caps text-[10px] font-black hover:bg-on-surface transition-colors cursor-pointer text-center"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentView('catalog');
                  showToast('Choose any formulation to add to your Auto-Ship subscription (+15% OFF)', 'volt');
                }}
                className="w-full mt-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">add_circle</span>
                <span>Add Another Formula to Subscription (+15% OFF)</span>
              </button>
            </div>

            {/* Section: Lab Dossiers & HPLC Batch Verification Vault */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">biotech</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base font-black text-on-surface tracking-tight uppercase">
                      HPLC Batch COA Vault
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Independent 3rd-Party Lab Certificates
                    </p>
                  </div>
                </div>
              </div>

              {/* COA Records List */}
              <div className="flex flex-col gap-2">
                {/* Record 1 */}
                <div
                  onClick={() => openCoaModal('CFM-8820')}
                  className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-surface-container"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-headline-sm text-xs font-bold text-on-surface block truncate">
                        Batch #CFM-8820
                      </span>
                      <span className="font-body-sm text-xs text-on-surface-variant truncate block">
                        Hydrolyzed CFM • 99.4% Purity
                      </span>
                    </div>
                  </div>
                  <span className="p-1 text-primary hover:text-on-surface transition-colors flex items-center" title="Open COA Dossier">
                    <span className="material-symbols-outlined text-[22px]">download_for_offline</span>
                  </span>
                </div>

                {/* Record 2 */}
                <div
                  onClick={() => openCoaModal('APX-CR-904')}
                  className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-surface-container"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-headline-sm text-xs font-bold text-on-surface block truncate">
                        Batch #APX-CR-904
                      </span>
                      <span className="font-body-sm text-xs text-on-surface-variant truncate block">
                        Creapure® Creatine • 0.00% Heavy Metals
                      </span>
                    </div>
                  </div>
                  <span className="p-1 text-primary hover:text-on-surface transition-colors flex items-center" title="Open COA Dossier">
                    <span className="material-symbols-outlined text-[22px]">download_for_offline</span>
                  </span>
                </div>

                {/* Record 3 */}
                <div
                  onClick={() => openCoaModal('W5B-1092')}
                  className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-surface-container"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-headline-sm text-xs font-bold text-on-surface block truncate">
                        Batch #W5B-1092
                      </span>
                      <span className="font-body-sm text-xs text-on-surface-variant truncate block">
                        Bulk Isolate 5lb • WADA Screen Negative
                      </span>
                    </div>
                  </div>
                  <span className="p-1 text-primary hover:text-on-surface transition-colors flex items-center" title="Open COA Dossier">
                    <span className="material-symbols-outlined text-[22px]">download_for_offline</span>
                  </span>
                </div>

                {/* Record 4 */}
                <div
                  onClick={() => openCoaModal('CSN-7711')}
                  className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-surface-container"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-headline-sm text-xs font-bold text-on-surface block truncate">
                        Batch #CSN-7711
                      </span>
                      <span className="font-body-sm text-xs text-on-surface-variant truncate block">
                        Micellar Casein • Microbiological Pass
                      </span>
                    </div>
                  </div>
                  <span className="p-1 text-primary hover:text-on-surface transition-colors flex items-center" title="Open COA Dossier">
                    <span className="material-symbols-outlined text-[22px]">download_for_offline</span>
                  </span>
                </div>
              </div>

              {/* Verification Banner Card inside Vault */}
              <div className="mt-4 p-3 bg-inverse-surface rounded-lg text-inverse-on-surface flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-primary-container text-on-primary-fixed flex items-center justify-center shrink-0 font-headline-sm font-black text-lg">
                  ✓
                </div>
                <div className="min-w-0">
                  <p className="font-label-caps text-[10px] text-primary-container font-black uppercase">
                    Informed Sport Certificate
                  </p>
                  <p className="font-body-sm text-xs text-inverse-on-surface leading-tight mt-0.5">
                    Every single batch is tested against 280+ banned substances.
                  </p>
                </div>
              </div>

              <button
                onClick={() => showToast('Compiling all 12 ISO 17025 laboratory certificates into .ZIP...', 'volt')}
                className="w-full mt-3 py-2 bg-surface-container text-on-surface font-headline-sm text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">folder_zip</span>
                <span>Download All 12 Certificates (.ZIP)</span>
              </button>
            </div>

            {/* Quick Delivery Address & Billing Snapshot */}
            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-extrabold tracking-wider">
                  PRIMARY ATHLETE DISPATCH POINT
                </span>
                <span
                  onClick={() => showToast('Dispatch address edit modal opened', 'info')}
                  className="font-label-caps text-[10px] text-primary font-black uppercase cursor-pointer hover:underline"
                >
                  EDIT
                </span>
              </div>
              <p className="font-headline-sm text-sm text-on-surface font-bold">
                Olympic Training Village, Apt 402
              </p>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                Chula Vista Elite Athlete Center, CA 91915
              </p>
              <div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant border-t border-surface-container">
                <span className="font-body-sm text-xs flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">credit_card</span>
                  <span>MasterCard •••• 9924 (Exp 08/28)</span>
                </span>
                <span className="font-label-caps text-[10px] text-primary font-black uppercase">
                  DEFAULT
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerformanceDeckPage;

