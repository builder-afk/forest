import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Flavor, SizeOption } from '../types';
import { PRODUCTS, USER_ACCOUNT } from '../data/mockData';
import { PARTNER_BRANDS, getPartnerBrandById } from '../data/partnerBrands';
import { parseCurrentRoute, syncBrowserUrl } from '../utils/router';

export type AppView =
  | 'marketplace'
  | 'catalog'
  | 'pdp'
  | 'account'
  | 'performance-deck'
  | 'partner-dashboard'
  | 'partner-storefront'
  | 'coa';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'volt';
}

interface AppContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  navigateToProduct: (productSlugOrId: string) => void;
  
  // Partner Storefront Navigation
  selectedPartnerSlug: string;
  setSelectedPartnerSlug: (slug: string) => void;
  navigateToPartnerStore: (slug: string) => void;
  
  // Drawer & Modal controls
  isFlavorDrawerOpen: boolean;
  flavorDrawerProduct: Product | null;
  openFlavorDrawer: (product?: Product) => void;
  closeFlavorDrawer: () => void;
  
  isAminoModalOpen: boolean;
  openAminoModal: () => void;
  closeAminoModal: () => void;
  
  isCoaModalOpen: boolean;
  openCoaModal: (batchNumber?: string) => void;
  closeCoaModal: () => void;
  selectedBatchNumber: string;
  setSelectedBatchNumber: (batch: string) => void;
  
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (
    product: Product,
    flavor?: Flavor,
    size?: SizeOption,
    quantity?: number,
    isSubscription?: boolean,
    frequency?: string
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  cartTotal: number;
  cartCount: number;
  
  // Saved / Wishlist
  savedProductIds: string[];
  toggleSaveProduct: (productId: string) => void;
  isProductSaved: (productId: string) => boolean;

  // Search query & global filter
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;

  // Toast
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'volt') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize route from current browser URL
  const initialRoute = parseCurrentRoute();
  const [currentView, setCurrentViewInternal] = useState<AppView>(initialRoute.view);
  const [selectedPartnerSlug, setSelectedPartnerSlugInternal] = useState<string>(
    initialRoute.partnerSlug || PARTNER_BRANDS[0].id
  );
  
  const initialProduct = initialRoute.productSlug
    ? PRODUCTS.find(
        (p) =>
          p.slug.toLowerCase() === initialRoute.productSlug?.toLowerCase() ||
          p.id.toLowerCase() === initialRoute.productSlug?.toLowerCase()
      ) || PRODUCTS[0]
    : PRODUCTS[0];
  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProduct);
  
  // Drawer states
  const [isFlavorDrawerOpen, setIsFlavorDrawerOpen] = useState(false);
  const [flavorDrawerProduct, setFlavorDrawerProduct] = useState<Product | null>(null);
  
  const [isAminoModalOpen, setIsAminoModalOpen] = useState(false);
  const [isCoaModalOpen, setIsCoaModalOpen] = useState(false);
  const [selectedBatchNumber, setSelectedBatchNumber] = useState(
    initialRoute.coaBatch || 'APX-9924-W'
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0],
      flavor: PRODUCTS[0].flavors[0],
      size: PRODUCTS[0].sizes[0],
      quantity: 1,
      isSubscription: false
    }
  ]);

  // Saved items
  const [savedProductIds, setSavedProductIds] = useState<string[]>(USER_ACCOUNT.savedProductIds);
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'volt' = 'volt') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const setCurrentView = (view: AppView) => {
    setCurrentViewInternal(view);
    syncBrowserUrl({
      view,
      partnerSlug: selectedPartnerSlug,
      productSlug: selectedProduct.slug,
      coaBatch: selectedBatchNumber
    });
  };

  const setSelectedPartnerSlug = (slug: string) => {
    const brand = getPartnerBrandById(slug);
    const validSlug = brand ? brand.id : slug;
    setSelectedPartnerSlugInternal(validSlug);
    if (currentView === 'partner-storefront') {
      syncBrowserUrl({ view: 'partner-storefront', partnerSlug: validSlug });
    }
  };

  const navigateToPartnerStore = (slug: string) => {
    const brand = getPartnerBrandById(slug);
    const validSlug = brand ? brand.id : slug;
    setSelectedPartnerSlugInternal(validSlug);
    setCurrentViewInternal('partner-storefront');
    syncBrowserUrl({ view: 'partner-storefront', partnerSlug: validSlug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (productSlugOrId: string) => {
    const query = productSlugOrId.trim().toLowerCase();
    const found = PRODUCTS.find(
      (p) =>
        p.id.toLowerCase() === query ||
        p.slug.toLowerCase() === query ||
        p.name.toLowerCase() === query
    );
    if (found) {
      setSelectedProduct(found);
      setCurrentViewInternal('pdp');
      syncBrowserUrl({ view: 'pdp', productSlug: found.slug });
    } else {
      setCurrentViewInternal('pdp');
      syncBrowserUrl({ view: 'pdp', productSlug: productSlugOrId });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFlavorDrawer = (product?: Product) => {
    const target = product || selectedProduct;
    setFlavorDrawerProduct(target);
    setIsFlavorDrawerOpen(true);
  };

  const closeFlavorDrawer = () => {
    setIsFlavorDrawerOpen(false);
  };

  const openAminoModal = () => setIsAminoModalOpen(true);
  const closeAminoModal = () => setIsAminoModalOpen(false);

  const openCoaModal = (batchNumber?: string) => {
    if (batchNumber) setSelectedBatchNumber(batchNumber);
    setIsCoaModalOpen(true);
  };
  const closeCoaModal = () => setIsCoaModalOpen(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (
    product: Product,
    flavor?: Flavor,
    size?: SizeOption,
    quantity = 1,
    isSubscription = false,
    frequency = 'Every 4 Weeks'
  ) => {
    const chosenFlavor = flavor || product.flavors[0];
    const chosenSize = size || product.sizes[0];
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.flavor.id === chosenFlavor.id &&
        item.size.id === chosenSize.id &&
        item.isSubscription === isSubscription
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        product,
        flavor: chosenFlavor,
        size: chosenSize,
        quantity,
        isSubscription,
        frequency
      };
      setCart((prev) => [newItem, ...prev]);
    }
    showToast(`Added ${quantity}x ${product.name} (${chosenFlavor.name}) to cart!`, 'volt');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Removed item from fuel cart.', 'info');
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const cartTotal = cart.reduce((acc, item) => {
    const unitPrice = item.isSubscription
      ? item.product.subscriptionPrice || item.size.price * 0.85
      : item.size.price;
    return acc + unitPrice * item.quantity;
  }, 0);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleSaveProduct = (productId: string) => {
    if (savedProductIds.includes(productId)) {
      setSavedProductIds((prev) => prev.filter((id) => id !== productId));
      showToast('Formulation removed from saved list', 'info');
    } else {
      setSavedProductIds((prev) => [...prev, productId]);
      showToast('Formulation saved to your athletic fuel profile', 'volt');
    }
  };

  const isProductSaved = (productId: string) => savedProductIds.includes(productId);

  // Close modals on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFlavorDrawer();
        closeAminoModal();
        closeCoaModal();
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen to browser Back / Forward buttons and sync state from URL
  useEffect(() => {
    // Initial sync to ensure canonical URL formatting
    syncBrowserUrl(
      {
        view: currentView,
        partnerSlug: selectedPartnerSlug,
        productSlug: selectedProduct.slug,
        coaBatch: selectedBatchNumber
      },
      true
    );

    const handlePopState = () => {
      const route = parseCurrentRoute();
      setCurrentViewInternal(route.view);
      if (route.partnerSlug) {
        const brand = getPartnerBrandById(route.partnerSlug);
        if (brand) setSelectedPartnerSlugInternal(brand.id);
      }
      if (route.productSlug) {
        const query = route.productSlug.trim().toLowerCase();
        const prod = PRODUCTS.find(
          (p) =>
            p.slug.toLowerCase() === query ||
            p.id.toLowerCase() === query ||
            p.name.toLowerCase() === query
        );
        if (prod) setSelectedProduct(prod);
      }
      if (route.coaBatch) {
        setSelectedBatchNumber(route.coaBatch);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProduct,
        setSelectedProduct,
        navigateToProduct,
        selectedPartnerSlug,
        setSelectedPartnerSlug,
        navigateToPartnerStore,
        isFlavorDrawerOpen,
        flavorDrawerProduct,
        openFlavorDrawer,
        closeFlavorDrawer,
        isAminoModalOpen,
        openAminoModal,
        closeAminoModal,
        isCoaModalOpen,
        openCoaModal,
        closeCoaModal,
        selectedBatchNumber,
        setSelectedBatchNumber,
        isCartOpen,
        openCart,
        closeCart,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        savedProductIds,
        toggleSaveProduct,
        isProductSaved,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        toasts,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

