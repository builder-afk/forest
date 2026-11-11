import React, { useState } from 'react';
import { useApp, AppView } from '../context/AppContext';

export const QuickNavSwitcher: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    openFlavorDrawer,
    openAminoModal,
    openCoaModal,
    openCart
  } = useApp();

  const [isExpanded, setIsExpanded] = useState(true);

  const pages: { id: AppView; label: string; icon: string; designDir: string }[] = [
    {
      id: 'marketplace',
      label: '1. Marketplace Home',
      icon: 'storefront',
      designDir: 'apex_fuel_protein_supplements_marketplace'
    },
    {
      id: 'catalog',
      label: '2. Fuel Directory',
      icon: 'view_module',
      designDir: 'apex_fuel_products_directory_filter_catalog'
    },
    {
      id: 'pdp',
      label: '3. Apex Pro Whey PDP',
      icon: 'science',
      designDir: 'apex_pro_whey_isolate_desktop_pdp_1440px'
    },
    {
      id: 'account',
      label: '4. User Dashboard',
      icon: 'person',
      designDir: 'apex_fuel_user_account_dashboard_saved_liked_products'
    },
    {
      id: 'partner-storefront',
      label: '5. Brand Storefront',
      icon: 'workspace_premium',
      designDir: 'apex_fuel_partner_storefront_brand_products_showcase'
    },
    {
      id: 'partner-dashboard',
      label: '6. Partner Portal',
      icon: 'dashboard',
      designDir: 'apex_fuel_partner_account_storefront_dashboard'
    }
  ];

  return (
    <aside
      aria-label="Screen View Controller"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-full px-3"
    >
      <div className="bg-inverse-surface/95 backdrop-blur-md text-inverse-on-surface rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] border border-white/10 px-3 py-2 flex items-center gap-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-container/20 text-primary-container font-label-caps text-xs font-black uppercase hover:bg-surface-container/30 transition-colors cursor-pointer"
          title="Toggle page navigator"
        >
          <span className="material-symbols-outlined text-sm">view_carousel</span>
          <span>PAGES ({pages.length})</span>
          <span className="material-symbols-outlined text-xs">
            {isExpanded ? 'expand_more' : 'expand_less'}
          </span>
        </button>

        {isExpanded && (
          <>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-1 overflow-x-auto max-w-[70vw] sm:max-w-none no-scrollbar">
              {pages.map((p) => {
                const isActive = currentView === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setCurrentView(p.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-label-md font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-primary-container text-on-primary-fixed shadow-sm scale-105'
                        : 'text-surface-variant hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">{p.icon}</span>
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="h-6 w-px bg-white/20 hidden md:block" />

            {/* Quick Drawers & Modals test buttons */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => openFlavorDrawer()}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-label-caps text-tertiary-fixed font-bold flex items-center gap-1 cursor-pointer"
                title="Open Flavor Selection Drawer"
              >
                <span className="material-symbols-outlined text-xs">tune</span>
                Drawer
              </button>
              <button
                onClick={openAminoModal}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-label-caps text-primary-fixed font-bold flex items-center gap-1 cursor-pointer"
                title="Open HPLC Amino Modal"
              >
                <span className="material-symbols-outlined text-xs">bubble_chart</span>
                Amino Modal
              </button>
              <button
                onClick={() => openCoaModal('APX-9924-W')}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-label-caps text-secondary-fixed font-bold flex items-center gap-1 cursor-pointer"
                title="Open Certificate of Analysis (COA)"
              >
                <span className="material-symbols-outlined text-xs">science</span>
                COA Lab
              </button>
              <button
                onClick={openCart}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-label-caps text-white font-bold flex items-center gap-1 cursor-pointer"
                title="Open Cart Drawer"
              >
                <span className="material-symbols-outlined text-xs">shopping_cart</span>
                Cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

