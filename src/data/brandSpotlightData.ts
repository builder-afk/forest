import { Product } from '../types';
import extractedImages from './extracted_images.json';

const IMAGES = extractedImages as Record<string, string>;

export interface SpotlightProduct {
  id: string;
  slug: string;
  name: string;
  badge: string;
  badgeType: 'new' | 'tested' | 'bestseller';
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  weightOrPack: string;
  deliveryEstimate: string;
  proteinYield: string;
  fullProduct: Product;
}

export interface BrandSpotlight {
  id: string;
  brandName: string;
  brandTag: string;
  bannerImage: string;
  logoText: string;
  logoSubtext: string;
  taglineMain: string;
  taglineSub: string[];
  themeGradient: string;
  accentBg: string;
  badgeColor: string;
  pillBg: string;
  heroDecoration: 'lights' | 'organic';
  heroGraphic: string;
  highlights: string[];
  products: SpotlightProduct[];
}

export const SUPER_YOU_SPOTLIGHT: BrandSpotlight = {
  id: 'super-you',
  brandName: 'Super You',
  brandTag: 'SPORTS NUTRITION',
  bannerImage: '/banner2.png',
  logoText: 'SUPERYOU',
  logoSubtext: 'HIGH PROTEIN LABS',
  taglineMain: 'FROM CRUNCH',
  taglineSub: ['TO UNSTOPPABLE', 'MUSCLE POWER'],
  themeGradient: 'from-[#b5179e] via-[#7209b7] to-[#f72585]',
  accentBg: 'bg-fuchsia-600',
  badgeColor: 'bg-amber-400 text-neutral-950',
  pillBg: 'bg-white/15 backdrop-blur-md text-white border border-white/20',
  heroDecoration: 'lights',
  heroGraphic: '/images/products/cookie-dough-crunch-bars.jpg',
  highlights: [
    '21g Pure Protein / Bar',
    'India’s 1st Fermented Yeast Protein',
    'Zero Added Sugar & Zero Trans Fat',
    'Multi-Layer Gourmet Crispy Wafer'
  ],
  products: [
    {
      id: 'super-you-wafer-choco',
      slug: 'super-you-triple-crunch-choco-fudge',
      name: 'SuperYou Triple Crunch Protein Wafer Bar | Dark Cocoa Fudge | Pack of 12',
      badge: 'New Arrival',
      badgeType: 'new',
      rating: 4.8,
      reviewCount: 1420,
      price: 1899,
      originalPrice: 2799,
      discountPercentage: 32,
      image: '/images/products/cookie-dough-crunch-bars.jpg',
      weightOrPack: 'Pack of 12 (720g)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '21g Protein',
      fullProduct: {
        id: 'super-you-wafer-choco',
        slug: 'super-you-triple-crunch-choco-fudge',
        name: 'SUPERYOU TRIPLE CRUNCH PROTEIN WAFER BAR',
        subtitle: 'Multi-Layer Crispy Wafer With Intense Dark Cocoa Ganache • 21g Protein',
        badge: 'NEW ARRIVAL',
        badgeType: 'secondary',
        category: 'bars',
        categoryLabel: 'Protein Bars & Snacks',
        rating: 4.8,
        reviewCount: 1420,
        price: 1899,
        originalPrice: 2799,
        subscriptionPrice: 1614,
        image: '/images/products/cookie-dough-crunch-bars.jpg',
        galleryImages: ['/images/products/cookie-dough-crunch-bars.jpg'],
        macros: { protein: '21g', sugar: '0g', calories: '210', carbs: '14g', fat: '7g' },
        flavors: [{ id: 'choco-fudge', name: 'Dark Cocoa Fudge', color: '#3d2314', inStock: true }],
        sizes: [{ id: '12pk', label: 'BOX OF 12', weight: '720g', servings: 12, price: 1899, pricePerServing: 158 }],
        nutrition: { servingSize: '1 Bar (60g)', servingsPerContainer: 12, calories: 210, protein: 21, sugar: 0, totalFat: 7, carbohydrates: 14 },
        coaBatchNumber: 'SY-WFR-901',
        inStock: true,
        dietaryTags: ['Zero Added Sugar', 'Gluten Free', 'High Fiber'],
        description: 'SuperYou wafer bars deliver high-impact protein with gourmet multi-layer wafer crispness.'
      }
    },
    {
      id: 'super-you-yeast-protein',
      slug: 'super-you-fermented-yeast-protein-1kg',
      name: 'SuperYou Pro Fermented Yeast Protein | Belgian Chocolate | 1kg Jar',
      badge: 'H TESTED',
      badgeType: 'tested',
      rating: 4.9,
      reviewCount: 2038,
      price: 3499,
      originalPrice: 4999,
      discountPercentage: 30,
      image: '/images/products/apex-native-whey.jpg',
      weightOrPack: '1kg (30 Servings)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '28g Protein',
      fullProduct: {
        id: 'super-you-yeast-protein',
        slug: 'super-you-fermented-yeast-protein-1kg',
        name: 'SUPERYOU PRO FERMENTED YEAST PROTEIN',
        subtitle: 'Bio-Fermented Alternative Complete Protein • Ultra-Fast Bioavailability',
        badge: 'INNOVATION',
        badgeType: 'primary',
        category: 'powders',
        categoryLabel: 'Whey & Plant Powders',
        rating: 4.9,
        reviewCount: 2038,
        price: 3499,
        originalPrice: 4999,
        subscriptionPrice: 2974,
        image: '/images/products/apex-native-whey.jpg',
        galleryImages: ['/images/products/apex-native-whey.jpg'],
        macros: { protein: '28g', sugar: '0g', calories: '125', carbs: '1.5g', fat: '0.8g' },
        flavors: [{ id: 'belgian-choc', name: 'Belgian Chocolate', color: '#2b1d16', inStock: true }],
        sizes: [{ id: '1kg', label: '1 KG TUB', weight: '1000g', servings: 30, price: 3499, pricePerServing: 116 }],
        nutrition: { servingSize: '1 Scoop (33g)', servingsPerContainer: 30, calories: 125, protein: 28, sugar: 0, totalFat: 0.8, carbohydrates: 1.5 },
        coaBatchNumber: 'SY-YST-442',
        inStock: true,
        dietaryTags: ['Non-GMO', 'Dairy Free Alternative', 'Full Amino Spectrum'],
        description: 'Next-gen yeast protein with identical PDCAAS score to premium native whey.'
      }
    },
    {
      id: 'super-you-protein-puffs',
      slug: 'super-you-popped-protein-puffs',
      name: 'SuperYou Popped Protein Puffs | Fiery Ghost Pepper Crunch | 6 Pack',
      badge: 'Bestseller',
      badgeType: 'bestseller',
      rating: 4.7,
      reviewCount: 890,
      price: 1399,
      originalPrice: 1999,
      discountPercentage: 30,
      image: IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'] || '/images/products/cookie-dough-crunch-bars.jpg',
      weightOrPack: 'Pack of 6 (300g)',
      deliveryEstimate: 'Get it by Mon, Nov 16',
      proteinYield: '16g Protein',
      fullProduct: {
        id: 'super-you-protein-puffs',
        slug: 'super-you-popped-protein-puffs',
        name: 'SUPERYOU POPPED PROTEIN PUFFS',
        subtitle: 'Oven-Popped Savory Protein Snacks • Fiery Smoky Crunch',
        badge: 'SAVORY CRUNCH',
        badgeType: 'carbon',
        category: 'snacks',
        categoryLabel: 'Protein Bars & Snacks',
        rating: 4.7,
        reviewCount: 890,
        price: 1399,
        originalPrice: 1999,
        subscriptionPrice: 1189,
        image: IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'] || '/images/products/cookie-dough-crunch-bars.jpg',
        galleryImages: ['/images/products/cookie-dough-crunch-bars.jpg'],
        macros: { protein: '16g', sugar: '0.5g', calories: '140', carbs: '8g', fat: '3.5g' },
        flavors: [{ id: 'fiery-peri', name: 'Fiery Ghost Pepper', color: '#c0392b', inStock: true }],
        sizes: [{ id: '6pk', label: '6 BAGS', weight: '300g', servings: 6, price: 1399, pricePerServing: 233 }],
        nutrition: { servingSize: '1 Bag (50g)', servingsPerContainer: 6, calories: 140, protein: 16, sugar: 0.5, totalFat: 3.5, carbohydrates: 8 },
        coaBatchNumber: 'SY-PFF-108',
        inStock: true,
        dietaryTags: ['Baked Not Fried', 'Zero Trans Fat', 'Low Carb'],
        description: 'High-protein savory crunch without seed oils or deep frying.'
      }
    },
    {
      id: 'super-you-cookie-bites',
      slug: 'super-you-raw-cookie-dough-bites',
      name: 'SuperYou Protein Cookie Dough Bites | Salted Caramel Crunch | 8 Pack',
      badge: 'H TESTED',
      badgeType: 'tested',
      rating: 4.9,
      reviewCount: 1120,
      price: 1599,
      originalPrice: 2299,
      discountPercentage: 30,
      image: IMAGES['Apex Soft-Baked Protein Cookie box with broken cookie showing rich double chocolate fudge chunks on clean marble countertop'] || '/images/products/cookie-dough-crunch-bars.jpg',
      weightOrPack: 'Pack of 8 (400g)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '18g Protein',
      fullProduct: {
        id: 'super-you-cookie-bites',
        slug: 'super-you-raw-cookie-dough-bites',
        name: 'SUPERYOU PROTEIN COOKIE DOUGH BITES',
        subtitle: 'Soft-Baked Macro Cookie Bites Packed With Whey Crisps',
        badge: 'GOURMET',
        badgeType: 'secondary',
        category: 'snacks',
        categoryLabel: 'Protein Bars & Snacks',
        rating: 4.9,
        reviewCount: 1120,
        price: 1599,
        originalPrice: 2299,
        subscriptionPrice: 1359,
        image: IMAGES['Apex Soft-Baked Protein Cookie box with broken cookie showing rich double chocolate fudge chunks on clean marble countertop'] || '/images/products/cookie-dough-crunch-bars.jpg',
        galleryImages: ['/images/products/cookie-dough-crunch-bars.jpg'],
        macros: { protein: '18g', sugar: '1g', calories: '180', carbs: '12g', fat: '5g' },
        flavors: [{ id: 'salted-caramel', name: 'Salted Caramel', color: '#b27a3c', inStock: true }],
        sizes: [{ id: '8pk', label: '8 POUCHES', weight: '400g', servings: 8, price: 1599, pricePerServing: 199 }],
        nutrition: { servingSize: '1 Pouch (50g)', servingsPerContainer: 8, calories: 180, protein: 18, sugar: 1, totalFat: 5, carbohydrates: 12 },
        coaBatchNumber: 'SY-CKD-619',
        inStock: true,
        dietaryTags: ['Zero Sugar Added', 'Whey Protein', 'Cold Milled'],
        description: 'Decadent bakery-style protein cookie dough bites with real roasted nut butters.'
      }
    },
    {
      id: 'super-you-energy-rtd',
      slug: 'super-you-nootropic-energy-rtd',
      name: 'SuperYou Nootropic Electric RTD Fizz | Neon Citrus Rush | Pack of 6',
      badge: 'New Arrival',
      badgeType: 'new',
      rating: 4.8,
      reviewCount: 740,
      price: 1799,
      originalPrice: 2599,
      discountPercentage: 30,
      image: '/images/products/apex-energy-drink.jpg',
      weightOrPack: 'Pack of 6 Cans (330ml)',
      deliveryEstimate: 'Get it by Tue, Nov 17',
      proteinYield: 'Zero Crash',
      fullProduct: {
        id: 'super-you-energy-rtd',
        slug: 'super-you-nootropic-energy-rtd',
        name: 'SUPERYOU NOOTROPIC ELECTRIC ENERGY FIZZ',
        subtitle: 'Clean Green Tea Caffeine + Alpha-GPC + B-Complex Electrics',
        badge: 'ZERO CRASH',
        badgeType: 'tertiary',
        category: 'drinks',
        categoryLabel: 'Functional & Energy Drinks',
        rating: 4.8,
        reviewCount: 740,
        price: 1799,
        originalPrice: 2599,
        subscriptionPrice: 1529,
        image: '/images/products/apex-energy-drink.jpg',
        galleryImages: ['/images/products/apex-energy-drink.jpg'],
        macros: { protein: '0g', sugar: '0g', calories: '10', carbs: '1g', fat: '0g' },
        flavors: [{ id: 'neon-citrus', name: 'Neon Citrus Rush', color: '#d4ff00', inStock: true }],
        sizes: [{ id: '6can', label: '6 PACK CANS', weight: '1980ml', servings: 6, price: 1799, pricePerServing: 299 }],
        nutrition: { servingSize: '1 Can (330ml)', servingsPerContainer: 6, calories: 10, protein: 0, sugar: 0, totalFat: 0, carbohydrates: 1 },
        coaBatchNumber: 'SY-NRG-305',
        inStock: true,
        dietaryTags: ['Natural Caffeine', 'Zero Sugar', 'Nootropic Focus'],
        description: 'Fast-acting mental sharpness and cellular ATP generation with zero crash.'
      }
    }
  ]
};

export const YOGA_BAR_SPOTLIGHT: BrandSpotlight = {
  id: 'yoga-bar',
  brandName: 'Yoga Bar',
  brandTag: 'WHOLE FOOD NUTRITION',
  bannerImage: '/banner1.png',
  logoText: 'YOGABAR',
  logoSubtext: '100% REAL INGREDIENTS',
  taglineMain: 'SMART FITNESS',
  taglineSub: ['FUEL WITH ZERO', 'ARTIFICIAL CHEAT'],
  themeGradient: 'from-[#004b23] via-[#007200] to-[#005f73]',
  accentBg: 'bg-emerald-600',
  badgeColor: 'bg-emerald-400 text-neutral-950',
  pillBg: 'bg-white/15 backdrop-blur-md text-white border border-white/20',
  heroDecoration: 'organic',
  heroGraphic: '/images/products/health-oats.jpg',
  highlights: [
    '100% Whole Real Food Ingredients',
    'Certified Non-GMO Steel-Cut Rolled Oats',
    'No High-Fructose Corn Syrup or Palm Oil',
    'Rich in Dietary Fiber, Omega-3 & Natural Antioxidants'
  ],
  products: [
    {
      id: 'yoga-bar-dark-choc-oats',
      slug: 'yogabar-high-protein-dark-chocolate-oats-1kg',
      name: 'Yogabar High Protein Dark Chocolate Oats | Whey Isolate + Probiotics | 1kg',
      badge: 'Bestseller',
      badgeType: 'bestseller',
      rating: 4.9,
      reviewCount: 3120,
      price: 1699,
      originalPrice: 2499,
      discountPercentage: 32,
      image: '/images/products/health-oats.jpg',
      weightOrPack: '1kg Bulk Tub (25 Bowls)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '22g Protein / 100g',
      fullProduct: {
        id: 'yoga-bar-dark-choc-oats',
        slug: 'yogabar-high-protein-dark-chocolate-oats-1kg',
        name: 'YOGABAR HIGH PROTEIN DARK CHOCOLATE OATS',
        subtitle: '100% Rolled Golden Oats Infused With Whey Isolate & Raw Cocoa Nibs',
        badge: 'BESTSELLER',
        badgeType: 'primary',
        category: 'oats',
        categoryLabel: 'High-Protein Oats',
        rating: 4.9,
        reviewCount: 3120,
        price: 1699,
        originalPrice: 2499,
        subscriptionPrice: 1444,
        image: '/images/products/health-oats.jpg',
        galleryImages: ['/images/products/health-oats.jpg'],
        macros: { protein: '22g', sugar: '3g', calories: '370', carbs: '58g', fat: '6g' },
        flavors: [{ id: 'dark-choco', name: 'Dark Chocolate Cocoa', color: '#3d2314', inStock: true }],
        sizes: [{ id: '1kg', label: '1 KG TUB', weight: '1000g', servings: 25, price: 1699, pricePerServing: 68 }],
        nutrition: { servingSize: '1 Bowl (40g)', servingsPerContainer: 25, calories: 148, protein: 9, sugar: 1.2, totalFat: 2.4, carbohydrates: 23 },
        coaBatchNumber: 'YB-OAT-711',
        inStock: true,
        dietaryTags: ['100% Whole Grain', 'High Fiber', 'Probiotic Enhanced'],
        description: 'Clean sustained morning glycogen loading with raw Ecuadorian cocoa and probiotic bacillus.'
      }
    },
    {
      id: 'yoga-bar-protein-bar-hazelnut',
      slug: 'yogabar-20g-protein-bar-hazelnut-toffee',
      name: 'Yogabar 20g Whey Protein Bar | Roasted Hazelnut Toffee Crunch | Box of 6',
      badge: 'H TESTED',
      badgeType: 'tested',
      rating: 4.8,
      reviewCount: 1640,
      price: 1499,
      originalPrice: 2199,
      discountPercentage: 31,
      image: IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo'] || '/images/products/cookie-dough-crunch-bars.jpg',
      weightOrPack: 'Box of 6 Bars (360g)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '20g Protein',
      fullProduct: {
        id: 'yoga-bar-protein-bar-hazelnut',
        slug: 'yogabar-20g-protein-bar-hazelnut-toffee',
        name: 'YOGABAR 20G WHEY PROTEIN BAR',
        subtitle: 'Whole Turkish Hazelnuts + Slow-Churned Toffee + 20g Whey Isolate',
        badge: 'CLEAN FUEL',
        badgeType: 'secondary',
        category: 'bars',
        categoryLabel: 'Protein Bars & Snacks',
        rating: 4.8,
        reviewCount: 1640,
        price: 1499,
        originalPrice: 2199,
        subscriptionPrice: 1274,
        image: IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo'] || '/images/products/cookie-dough-crunch-bars.jpg',
        galleryImages: ['/images/products/cookie-dough-crunch-bars.jpg'],
        macros: { protein: '20g', sugar: '2g', calories: '230', carbs: '16g', fat: '8g' },
        flavors: [{ id: 'hazelnut-toffee', name: 'Hazelnut Toffee', color: '#8d5b4c', inStock: true }],
        sizes: [{ id: '6pk', label: 'BOX OF 6', weight: '360g', servings: 6, price: 1499, pricePerServing: 249 }],
        nutrition: { servingSize: '1 Bar (60g)', servingsPerContainer: 6, calories: 230, protein: 20, sugar: 2, totalFat: 8, carbohydrates: 16 },
        coaBatchNumber: 'YB-BAR-402',
        inStock: true,
        dietaryTags: ['No Artificial Sweeteners', 'Real Nuts', 'Cold Processed'],
        description: 'Made exclusively with whole crushed hazelnuts, cold-filtered whey isolate, and zero palm oils.'
      }
    },
    {
      id: 'yoga-bar-dark-choc-peanut-butter',
      slug: 'yogabar-dark-chocolate-peanut-butter-1kg',
      name: 'Yogabar 100% Pure Slow-Roasted Dark Chocolate Peanut Butter | 1kg Jar',
      badge: 'New Arrival',
      badgeType: 'new',
      rating: 4.9,
      reviewCount: 2280,
      price: 1299,
      originalPrice: 1899,
      discountPercentage: 32,
      image: IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop'] || '/images/products/health-oats.jpg',
      weightOrPack: '1kg Stone-Milled Glass Jar',
      deliveryEstimate: 'Get it by Mon, Nov 16',
      proteinYield: '28g Protein / 100g',
      fullProduct: {
        id: 'yoga-bar-dark-choc-peanut-butter',
        slug: 'yogabar-dark-chocolate-peanut-butter-1kg',
        name: 'YOGABAR SLOW-ROASTED DARK CHOC PEANUT BUTTER',
        subtitle: 'Stone-Ground Slow-Roasted Peanuts With Organic Cocoa & Brown Jaggery',
        badge: 'STONE MILLED',
        badgeType: 'tertiary',
        category: 'snacks',
        categoryLabel: 'Protein Bars & Snacks',
        rating: 4.9,
        reviewCount: 2280,
        price: 1299,
        originalPrice: 1899,
        subscriptionPrice: 1104,
        image: IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop'] || '/images/products/health-oats.jpg',
        galleryImages: ['/images/products/health-oats.jpg'],
        macros: { protein: '28g', sugar: '4g', calories: '590', carbs: '22g', fat: '45g' },
        flavors: [{ id: 'crunchy-choc', name: 'Crunchy Dark Choc', color: '#4a2c11', inStock: true }],
        sizes: [{ id: '1kg', label: '1 KG JAR', weight: '1000g', servings: 31, price: 1299, pricePerServing: 42 }],
        nutrition: { servingSize: '2 Tbsp (32g)', servingsPerContainer: 31, calories: 190, protein: 9, sugar: 1.3, totalFat: 15, carbohydrates: 7 },
        coaBatchNumber: 'YB-PNT-998',
        inStock: true,
        dietaryTags: ['Zero Palm Oil', 'Stone Milled', '100% Peanuts'],
        description: 'Single-origin roasted Gujarat runner peanuts ground slowly to preserve natural nutrient density.'
      }
    },
    {
      id: 'yoga-bar-super-muesli',
      slug: 'yogabar-super-seeds-cranberry-muesli',
      name: 'Yogabar Super Muesli | Almonds, Dried Cranberries & Quinoa | 850g Pouch',
      badge: 'H TESTED',
      badgeType: 'tested',
      rating: 4.8,
      reviewCount: 1890,
      price: 1449,
      originalPrice: 2099,
      discountPercentage: 31,
      image: '/images/products/health-muesli.jpg',
      weightOrPack: '850g Resealable Pouch',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: 'High Fiber & Zinc',
      fullProduct: {
        id: 'yoga-bar-super-muesli',
        slug: 'yogabar-super-seeds-cranberry-muesli',
        name: 'YOGABAR SUPER MUESLI SEEDS & CRANBERRIES',
        subtitle: 'Toasted Multi-Grain Clusters With Pumpkin Seeds, Chia & Golden Raisins',
        badge: 'CRUNCHY FIBER',
        badgeType: 'carbon',
        category: 'oats',
        categoryLabel: 'High-Protein Oats',
        rating: 4.8,
        reviewCount: 1890,
        price: 1449,
        originalPrice: 2099,
        subscriptionPrice: 1231,
        image: '/images/products/health-muesli.jpg',
        galleryImages: ['/images/products/health-muesli.jpg'],
        macros: { protein: '12g', sugar: '6g', calories: '380', carbs: '64g', fat: '8g' },
        flavors: [{ id: 'cranberry-almond', name: 'Cranberry Almond', color: '#9c1c38', inStock: true }],
        sizes: [{ id: '850g', label: '850G POUCH', weight: '850g', servings: 17, price: 1449, pricePerServing: 85 }],
        nutrition: { servingSize: '50g Bowl', servingsPerContainer: 17, calories: 190, protein: 6, sugar: 3, totalFat: 4, carbohydrates: 32 },
        coaBatchNumber: 'YB-MSL-310',
        inStock: true,
        dietaryTags: ['Raw Seeds', 'High Antioxidants', 'Zero Refined Sugars'],
        description: 'Crisp oven-toasted whole grains blended with 7 types of seeds, roasted nuts, and dried berries.'
      }
    },
    {
      id: 'yoga-bar-blueberry-chia-oats',
      slug: 'yogabar-overnight-wild-blueberry-chia-oats',
      name: 'Yogabar Overnight Power Oats | Wild Blueberry & Black Chia | 800g Tub',
      badge: 'Bestseller',
      badgeType: 'bestseller',
      rating: 4.9,
      reviewCount: 1470,
      price: 1549,
      originalPrice: 2249,
      discountPercentage: 31,
      image: IMAGES['Apex Overnight Power Oats large 1kg tub Dark Chocolate Sea Salt flavor with rustic glass jar containing prepared overnight oats topped with chia seeds, studio lighting'] || '/images/products/health-oats.jpg',
      weightOrPack: '800g Tub (20 Servings)',
      deliveryEstimate: 'Get it by Sun, Nov 15',
      proteinYield: '20g Protein / Bowl',
      fullProduct: {
        id: 'yoga-bar-blueberry-chia-oats',
        slug: 'yogabar-overnight-wild-blueberry-chia-oats',
        name: 'YOGABAR OVERNIGHT WILD BLUEBERRY & CHIA OATS',
        subtitle: 'Cold-Soak Rolled Oats Infused With Organic Blueberries & Raw Chia Seeds',
        badge: 'OVERNIGHT BIO',
        badgeType: 'primary',
        category: 'oats',
        categoryLabel: 'High-Protein Oats',
        rating: 4.9,
        reviewCount: 1470,
        price: 1549,
        originalPrice: 2249,
        subscriptionPrice: 1316,
        image: IMAGES['Apex Overnight Power Oats large 1kg tub Dark Chocolate Sea Salt flavor with rustic glass jar containing prepared overnight oats topped with chia seeds, studio lighting'] || '/images/products/health-oats.jpg',
        galleryImages: ['/images/products/health-oats.jpg'],
        macros: { protein: '20g', sugar: '3.5g', calories: '350', carbs: '55g', fat: '5.5g' },
        flavors: [{ id: 'wild-blueberry', name: 'Wild Blueberry Chia', color: '#3b2f63', inStock: true }],
        sizes: [{ id: '800g', label: '800G TUB', weight: '800g', servings: 20, price: 1549, pricePerServing: 77 }],
        nutrition: { servingSize: '40g Serving', servingsPerContainer: 20, calories: 140, protein: 8, sugar: 1.4, totalFat: 2.2, carbohydrates: 22 },
        coaBatchNumber: 'YB-BLU-808',
        inStock: true,
        dietaryTags: ['Overnight Cold Prep', 'Omega-3 Dense', 'Zero Preservatives'],
        description: 'Effortless morning breakfast: add cold milk or Greek yogurt, refrigerate overnight, enjoy sustained energy.'
      }
    }
  ]
};

export const SPOTLIGHT_PRODUCTS: Product[] = [
  ...SUPER_YOU_SPOTLIGHT.products.map((p) => p.fullProduct),
  ...YOGA_BAR_SPOTLIGHT.products.map((p) => p.fullProduct)
];


