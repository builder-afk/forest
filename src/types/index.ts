export interface Flavor {
  id: string;
  name: string;
  color: string;
  accentColor?: string;
  inStock: boolean;
  notes?: string;
  tasteProfile?: string;
}

export interface SizeOption {
  id: string;
  label: string;
  weight: string;
  servings: number;
  price: number;
  originalPrice?: number;
  pricePerServing: number;
}

export interface NutritionFacts {
  servingSize: string;
  servingsPerContainer: number;
  calories: number;
  protein: number;
  bcaas?: number;
  sugar: number;
  totalFat: number;
  saturatedFat?: number;
  transFat?: number;
  cholesterol?: number;
  sodium?: number;
  carbohydrates: number;
  dietaryFiber?: number;
  potassium?: number;
  calcium?: number;
  iron?: number;
  digestiveEnzymes?: string;
}

export interface AminoAcidProfileItem {
  name: string;
  amountMg: number;
  percentageStandard: number;
  category: 'essential' | 'conditionally-essential' | 'non-essential';
  biologicalFunction?: string;
}

export interface LabTestMetric {
  assayName: string;
  targetClaim: string;
  measuredResult: string;
  variancePercentage: string;
  methodology: string;
  status: 'PASS' | 'OPTIMAL' | 'VERIFIED';
}

export interface HeavyMetalMetric {
  element: string;
  symbol: string;
  fdaLimitPpm: string;
  detectedPpm: string;
  status: 'PASS' | 'ND' | 'OPTIMAL';
}

export interface MicroMetric {
  pathogen: string;
  specification: string;
  result: string;
  status: 'PASS' | 'NEGATIVE';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary' | 'carbon';
  subtitle: string;
  category: 'powders' | 'bars' | 'snacks' | 'oats' | 'pre-workout' | 'drinks';
  categoryLabel: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  subscriptionPrice?: number;
  image: string;
  galleryImages: string[];
  macros: {
    protein: string;
    bcaa?: string;
    sugar: string;
    calories: string;
    carbs?: string;
    fat?: string;
  };
  flavors: Flavor[];
  sizes: SizeOption[];
  nutrition: NutritionFacts;
  aminoAcids?: AminoAcidProfileItem[];
  coaBatchNumber: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  isHighStim?: boolean;
  inStock: boolean;
  dietaryTags: string[];
  description: string;
  longDescription?: string;
  manufacturingCircuit?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  flavor: Flavor;
  size: SizeOption;
  quantity: number;
  isSubscription: boolean;
  frequency?: string;
}

export interface Review {
  id: string;
  author: string;
  sport: string;
  verifiedBuyer: boolean;
  rating: number;
  date: string;
  title: string;
  comment: string;
  flavorUsed: string;
  macroGoal: string;
  helpfulCount: number;
}

export interface PartnerAccount {
  id: string;
  brandName: string;
  handle: string;
  badge: string;
  avatar: string;
  banner: string;
  bio: string;
  credentials: string[];
  commissionRate: number;
  activeSkuCount: number;
  totalRevenue: number;
  batchPurityCompliance: number;
  curatedProductIds: string[];
  exclusiveCode: string;
  discountPercentage: number;
}

