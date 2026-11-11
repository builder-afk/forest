/**
 * Brand spotlight showcase banners data.
 * Each entry powers a full-width branded section with a hero
 * left panel and a horizontally scrollable product rail on the right.
 */
export interface BrandShowcase {
  id: string;
  /** Brand display name */
  brandName: string;
  /** Large hero tagline (line-broken) */
  tagline: string[];
  /** Sub-label above the tagline */
  subLabel: string;
  /** Background gradient CSS classes (from/via/to) */
  bgGradient: string;
  /** Accent text color for highlight elements */
  accentColor: string;
  /** Product IDs from PRODUCTS array to display on the rail */
  productIds: string[];
  /** Brand hero image (displayed behind tagline area) */
  heroImage: string;
}

export const BRAND_SHOWCASES: BrandShowcase[] = [
  {
    id: 'super-you',
    brandName: 'Apex Performance Labs',
    tagline: ['FROM', 'WHEY', 'TO MUSCLE'],
    subLabel: 'SPORTS NUTRITION',
    bgGradient: 'from-yellow-500 via-amber-400 to-yellow-600',
    accentColor: 'text-amber-900',
    productIds: [
      'apex-native-whey',
      'apex-irish-grass-fed-whey',
      'apex-dual-velocity-micellar-whey',
      'apex-hydrolyzed-collagen-whey-hybrid',
      'apex-egg-white-peptide-powder',
    ],
    heroImage: '/images/products/apex-native-whey.jpg',
  },

];

