export interface HealthCategory {
  id: string;
  label: string;
  image: string;
  /** Optional catalog filter key when clicking the card */
  catalogFilter?: string;
  /** Fallback gradient when image is missing */
  gradient?: string;
}

/**
 * Row 1: "Health to Start With" – general wellness / everyday essentials
 */
export const HEALTH_ROW_1: HealthCategory[] = [
  {
    id: 'multivitamins',
    label: 'Multivitamins',
    image: '/images/products/health-multivitamins.jpg',
    catalogFilter: 'all',
  },
  {
    id: 'omega-3',
    label: 'Omega 3',
    image: '/images/products/health-omega3.jpg',
    catalogFilter: 'all',
  },
  {
    id: 'probiotics',
    label: 'Probiotics',
    image: '/images/products/health-probiotics.jpg',
    catalogFilter: 'all',
  },
  {
    id: 'collagen',
    label: 'Collagen',
    image: '/images/products/health-collagen.jpg',
    catalogFilter: 'powders',
  },
  {
    id: 'oats',
    label: 'Oats',
    image: '/images/products/health-oats.jpg',
    catalogFilter: 'oats',
  },
  {
    id: 'muesli',
    label: 'Muesli',
    image: '/images/products/health-muesli.jpg',
    catalogFilter: 'oats',
  },
  {
    id: 'dry-fruits',
    label: 'Dry Fruits',
    image: '/images/products/clear-vegan-peptides.jpg',
    catalogFilter: 'snacks',
    gradient: 'from-emerald-100 to-emerald-200',
  },
  {
    id: 'acv',
    label: 'ACV',
    image: '/images/products/health-acv.jpg',
    catalogFilter: 'all',
  },
];

/**
 * Row 2: "Stronger Days Start Here" – performance / sports nutrition
 */
export const HEALTH_ROW_2: HealthCategory[] = [
  {
    id: 'whey-protein',
    label: 'Whey Protein',
    image: '/images/products/apex-native-whey.jpg',
    catalogFilter: 'powders',
  },
  {
    id: 'creatine',
    label: 'Creatine',
    image: '/images/products/nitro-pre-workout.jpg',
    catalogFilter: 'pre-workout',
  },
  {
    id: 'protein-bars',
    label: 'Protein Bars',
    image: '/images/products/cookie-dough-crunch-bars.jpg',
    catalogFilter: 'bars',
  },
  {
    id: 'pre-workout',
    label: 'Pre-Workout',
    image: '/images/products/apex-intra-eaas.jpg',
    catalogFilter: 'pre-workout',
  },
  {
    id: 'peanut-butter',
    label: 'Peanut Butter',
    image: '/images/products/health-oats.jpg',
    catalogFilter: 'snacks',
    gradient: 'from-orange-100 to-orange-200',
  },
  {
    id: 'energy-drinks',
    label: 'Energy Drinks',
    image: '/images/products/apex-energy-drink.jpg',
    catalogFilter: 'drinks',
  },
  {
    id: 'protein-drinks',
    label: 'Protein Drinks',
    image: '/images/products/apex-protein-drink.jpg',
    catalogFilter: 'drinks',
  },
  {
    id: 'bcaa',
    label: 'BCAA',
    image: '/images/products/apex-collagen-peptides.jpg',
    catalogFilter: 'pre-workout',
  },
];
