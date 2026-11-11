import { Product } from '../types';

export interface BundlePackItem {
  id: string;
  slug: string;
  name: string;
  packLabel: string;
  badgeTopRight?: { text: string; subtext?: string; highlight?: string; type: 'shark-tank' | 'pack-tag' };
  badgeBottomLeft?: { text: string; subtext?: string };
  rating: number;
  reviewCount: number;
  features: string[];
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
}

export const BUNDLE_PACKS: BundlePackItem[] = [
  {
    id: 'bundle-pack-5',
    slug: 'assorted-high-protein-box-pack-of-5',
    name: 'ASSORTED HIGH PROTEIN BOX (PACK OF 5)',
    packLabel: 'PACK OF 5',
    badgeTopRight: { text: 'PACK', highlight: 'OF 5', type: 'pack-tag' },
    rating: 5.0,
    reviewCount: 151,
    features: ['20g Protein', '5-7g Fiber'],
    price: 499,
    originalPrice: 625,
    discount: '20% OFF',
    image: '/images/bundle-pack-5.jpg'
  },
  {
    id: 'bundle-pack-14',
    slug: 'assorted-protein-box-pack-of-14',
    name: 'ASSORTED PROTEIN BOX (PACK OF 14)',
    packLabel: 'PACK OF 14',
    badgeTopRight: { text: 'As seen on', subtext: 'SHARK TANK', highlight: 'INDIA', type: 'shark-tank' },
    badgeBottomLeft: { text: 'PACK', subtext: '14' },
    rating: 5.0,
    reviewCount: 109,
    features: ['20g Protein', '5-7g Fiber'],
    price: 1449,
    originalPrice: 1686,
    discount: '14% OFF',
    image: '/images/bundle-pack-14.jpg'
  },
  {
    id: 'bundle-pack-7',
    slug: 'assorted-high-protein-box-pack-of-7',
    name: 'ASSORTED HIGH PROTEIN BOX (PACK OF 7)',
    packLabel: 'PACK OF 7',
    badgeBottomLeft: { text: 'PACK', subtext: 'OF 7' },
    rating: 5.0,
    reviewCount: 16,
    features: ['20g Protein', '5-7g Fiber'],
    price: 749,
    originalPrice: 843,
    discount: '11% OFF',
    image: '/images/bundle-pack-7.jpg'
  }
];

export const BUNDLE_PRODUCTS: Product[] = BUNDLE_PACKS.map((bundle) => ({
  id: bundle.id,
  slug: bundle.slug,
  name: bundle.name,
  subtitle: 'Signature Gourmet High Protein Assortment Box',
  badge: bundle.packLabel,
  badgeType: 'primary',
  category: 'snacks',
  categoryLabel: 'Protein Bars & Snacks',
  rating: bundle.rating,
  reviewCount: bundle.reviewCount,
  price: bundle.price,
  originalPrice: bundle.originalPrice,
  image: bundle.image,
  galleryImages: [bundle.image],
  macros: {
    protein: '20g',
    sugar: '0g',
    calories: '180',
    carbs: '12g',
    fat: '4g'
  },
  flavors: [
    {
      id: `${bundle.id}-assorted`,
      name: 'Assorted Gourmet Selection',
      color: '#f59e0b',
      inStock: true,
      tasteProfile: 'Multi-Flavor Variety Box'
    }
  ],
  sizes: [
    {
      id: `${bundle.id}-box`,
      label: bundle.packLabel,
      weight: `${bundle.packLabel} (Box)`,
      servings: parseInt(bundle.packLabel.replace(/\D/g, '') || '5', 10),
      price: bundle.price,
      originalPrice: bundle.originalPrice,
      pricePerServing: Math.round(bundle.price / parseInt(bundle.packLabel.replace(/\D/g, '') || '5', 10))
    }
  ],
  nutrition: {
    servingSize: '1 Pack (45g)',
    servingsPerContainer: parseInt(bundle.packLabel.replace(/\D/g, '') || '5', 10),
    calories: 180,
    protein: 20,
    sugar: 0,
    totalFat: 4,
    carbohydrates: 12
  },
  coaBatchNumber: `BDL-${bundle.id.toUpperCase()}`,
  isBestSeller: true,
  inStock: true,
  dietaryTags: ['20g Protein', '5-7g Fiber', 'No Added Sugar', 'Gluten Free'],
  description: 'Our combo packs are the easiest way to explore variety, enjoy more flavours and save more on every order.'
}));

