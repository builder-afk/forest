import React, { useEffect, Suspense, lazy } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageSkeleton } from './components/SkeletonLoader';
import { ToastContainer } from './components/ToastContainer';

// Lazy-loaded page components for route-level code splitting
const MarketplacePage = lazy(() =>
  import('./pages/MarketplacePage').then((m) => ({ default: m.MarketplacePage }))
);
const CatalogPage = lazy(() =>
  import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage }))
);
const PdpPage = lazy(() =>
  import('./pages/PdpPage').then((m) => ({ default: m.PdpPage }))
);
const AccountPage = lazy(() =>
  import('./pages/AccountPage').then((m) => ({ default: m.AccountPage }))
);
const PerformanceDeckPage = lazy(() =>
  import('./pages/PerformanceDeckPage').then((m) => ({ default: m.PerformanceDeckPage }))
);
const PartnerDashboardPage = lazy(() =>
  import('./pages/PartnerDashboardPage').then((m) => ({ default: m.PartnerDashboardPage }))
);
const PartnerStorefrontPage = lazy(() =>
  import('./pages/PartnerStorefrontPage').then((m) => ({ default: m.PartnerStorefrontPage }))
);
const CoaPage = lazy(() =>
  import('./pages/CoaPage').then((m) => ({ default: m.CoaPage }))
);

// Lazy-loaded overlay modals and slide-out drawers
const FlavorDrawer = lazy(() =>
  import('./components/FlavorDrawer').then((m) => ({ default: m.FlavorDrawer }))
);
const AminoModal = lazy(() =>
  import('./components/AminoModal').then((m) => ({ default: m.AminoModal }))
);
const CoaModal = lazy(() =>
  import('./components/CoaModal').then((m) => ({ default: m.CoaModal }))
);
const CartDrawer = lazy(() =>
  import('./components/CartDrawer').then((m) => ({ default: m.CartDrawer }))
);

export const AppContent: React.FC = () => {
  const { currentView, selectedProduct } = useApp();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
      {/* Top Fixed Header */}
      <Header />

      {/* Main View Router with Suspense Boundary */}
      <main className="flex-1 w-full">
        <Suspense fallback={<PageSkeleton />}>
          {currentView === 'marketplace' && <MarketplacePage />}
          {currentView === 'catalog' && <CatalogPage />}
          {currentView === 'pdp' && <PdpPage key={selectedProduct.id} />}
          {currentView === 'account' && <AccountPage />}
          {currentView === 'performance-deck' && <PerformanceDeckPage />}
          {currentView === 'partner-dashboard' && <PartnerDashboardPage />}
          {currentView === 'partner-storefront' && <PartnerStorefrontPage />}
          {currentView === 'coa' && <CoaPage />}
        </Suspense>
      </main>

      {/* Global Interactive Drawers & Modals (deferred) */}
      <Suspense fallback={null}>
        <FlavorDrawer />
        <AminoModal />
        <CoaModal />
        <CartDrawer />
      </Suspense>

      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};
