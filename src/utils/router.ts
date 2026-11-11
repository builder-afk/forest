import { AppView } from '../context/AppContext';
import { getPartnerBrandById, PARTNER_BRANDS } from '../data/partnerBrands';
import { PRODUCTS } from '../data/mockData';

export interface RouteState {
  view: AppView;
  partnerSlug?: string;
  productSlug?: string;
  coaBatch?: string;
}

/**
 * Parses the current browser URL (pathname, search query params, and hash)
 * to determine the active view and parameters.
 */
export function parseCurrentRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { view: 'marketplace' };
  }

  // 1. Check pathname first
  let path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const searchParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  // If there's a hash-based route, prioritize it for hash routing environments
  if (hash.startsWith('store/') || hash.startsWith('partner/') || hash.startsWith('catalog') || hash.startsWith('product/')) {
    path = '/' + hash;
  }

  // Check query parameters like ?store=kinetix-bio-fuel or ?partner=...
  const queryStore = searchParams.get('store') || searchParams.get('partner') || searchParams.get('brand');
  if (queryStore) {
    const brand = getPartnerBrandById(queryStore);
    return {
      view: 'partner-storefront',
      partnerSlug: brand ? brand.id : queryStore
    };
  }

  const queryProduct = searchParams.get('product') || searchParams.get('p');
  if (queryProduct) {
    return {
      view: 'pdp',
      productSlug: queryProduct
    };
  }

  const queryView = searchParams.get('view');
  if (queryView && isValidView(queryView)) {
    return { view: queryView as AppView };
  }

  // 2. Parse Pathname Patterns
  // Partner Storefront: /store/:slug, /partner/:slug, /partner-storefront/:slug, /storefront/:slug, /partner-stores/:slug
  const partnerMatch = path.match(/^\/(?:store|partner|partner-storefront|storefront|partner-stores)(?:\/([a-z0-9_-]+))?$/i);
  if (partnerMatch) {
    const rawSlug = partnerMatch[1];
    if (rawSlug) {
      const brand = getPartnerBrandById(rawSlug);
      return {
        view: 'partner-storefront',
        partnerSlug: brand ? brand.id : rawSlug
      };
    }
    return {
      view: 'partner-storefront',
      partnerSlug: PARTNER_BRANDS[0].id
    };
  }

  // Product PDP: /product/:slug or /pdp/:slug
  const pdpMatch = path.match(/^\/(?:product|pdp)\/([a-z0-9_-]+)$/i);
  if (pdpMatch) {
    return {
      view: 'pdp',
      productSlug: pdpMatch[1]
    };
  }

  // Catalog / Directory: /catalog or /directory
  if (path === '/catalog' || path === '/directory' || path === '/products') {
    return { view: 'catalog' };
  }

  // Performance Deck: /performance-deck or /deck
  if (path === '/performance-deck' || path === '/deck') {
    return { view: 'performance-deck' };
  }

  // Partner Dashboard: /partner-dashboard or /partner-portal or /portal
  if (path === '/partner-dashboard' || path === '/partner-portal' || path === '/portal') {
    return { view: 'partner-dashboard' };
  }

  // Account: /account or /profile
  if (path === '/account' || path === '/profile') {
    return { view: 'account' };
  }

  // COA: /coa or /lab-dossier
  const coaMatch = path.match(/^\/(?:coa|lab-dossier)(?:\/([a-z0-9_-]+))?$/i);
  if (coaMatch) {
    return {
      view: 'coa',
      coaBatch: coaMatch[1] || undefined
    };
  }

  // Default to marketplace
  return { view: 'marketplace' };
}

function isValidView(v: string): boolean {
  return [
    'marketplace',
    'catalog',
    'pdp',
    'account',
    'performance-deck',
    'partner-dashboard',
    'partner-storefront',
    'coa'
  ].includes(v);
}

/**
 * Returns the canonical URL path for a given view & state.
 */
export function getUrlForRoute(route: RouteState): string {
  switch (route.view) {
    case 'partner-storefront': {
      const slug = route.partnerSlug || PARTNER_BRANDS[0].id;
      return `/store/${slug}`;
    }
    case 'catalog':
      return '/catalog';
    case 'pdp': {
      const slug = route.productSlug || 'apex-pro-whey';
      return `/product/${slug}`;
    }
    case 'performance-deck':
      return '/performance-deck';
    case 'partner-dashboard':
      return '/partner-dashboard';
    case 'account':
      return '/account';
    case 'coa':
      return route.coaBatch ? `/coa/${route.coaBatch}` : '/coa';
    case 'marketplace':
    default:
      return '/';
  }
}

/**
 * Updates the browser URL without full page reload.
 */
export function syncBrowserUrl(route: RouteState, replace = false): void {
  if (typeof window === 'undefined') return;

  const url = getUrlForRoute(route);
  const currentPath = window.location.pathname + window.location.search;

  if (currentPath !== url) {
    if (replace) {
      window.history.replaceState({ ...route }, '', url);
    } else {
      window.history.pushState({ ...route }, '', url);
    }
  }

  // Dynamic Document Title
  if (route.view === 'partner-storefront' && route.partnerSlug) {
    const brand = getPartnerBrandById(route.partnerSlug);
    if (brand) {
      document.title = `${brand.name} — Accredited Partner Storefront | The Protein Forest`;
      return;
    }
  } else if (route.view === 'pdp' && route.productSlug) {
    const prod = PRODUCTS.find((p) => p.slug === route.productSlug || p.id === route.productSlug);
    if (prod) {
      document.title = `${prod.name} — Clinical Macro Specs | The Protein Forest`;
      return;
    }
  } else if (route.view === 'catalog') {
    document.title = 'Fuel Directory — Formulations | The Protein Forest';
    return;
  } else if (route.view === 'performance-deck') {
    document.title = 'Athlete Performance Deck — Active Subscriptions | The Protein Forest';
    return;
  } else if (route.view === 'partner-dashboard') {
    document.title = 'Partner Storefront & Lot Audits Portal | The Protein Forest';
    return;
  } else if (route.view === 'coa') {
    document.title = 'HPLC Certificate of Analysis Dossier | The Protein Forest';
    return;
  }

  document.title = 'The Protein Forest — Sports Nutrition & Performance Marketplace';
}

