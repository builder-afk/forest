import { Product } from '../types';
import extractedImages from './extracted_images.json';

const IMAGES = extractedImages as Record<string, string>;

export const NEW_PRODUCTS: Product[] = [
  {
    id: 'apex-native-whey',
    slug: 'apex-native-whey-isolate',
    name: 'APEX NATIVE WHEY 95%',
    subtitle: 'Direct Cold Ceramic Microfiltration From Fresh Skim Milk • 95% Native Protein Fraction',
    badge: 'PRISTINE NATIVE',
    badgeType: 'primary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.98,
    reviewCount: 762,
    price: 5599,
    originalPrice: 6399,
    subscriptionPrice: 4759,
    image: '/images/products/apex-native-whey.jpg',
    galleryImages: [
      '/images/products/apex-native-whey.jpg'
    ],
    macros: {
      protein: '32g',
      bcaa: '6.2g',
      sugar: '0g',
      calories: '130',
      carbs: '< 1g',
      fat: '0.2g'
    },
    flavors: [
      { id: 'dark-cocoa', name: 'Double Dark Dutch Cocoa', color: '#2b1d16', accentColor: '#d4ff00', inStock: true, notes: 'Pure Ecuadorian cocoa with velvet finish', tasteProfile: 'Rich & Bold' },
      { id: 'vanilla-pod', name: 'French Vanilla Pod', color: '#e8dcba', accentColor: '#536600', inStock: true, notes: 'Bourbon vanilla bean essence', tasteProfile: 'Silky & Delicate' },
      { id: 'unflavored-native', name: 'Unflavored Pure Native', color: '#deded7', accentColor: '#006875', inStock: true, notes: '100% pure native microfiltered isolate', tasteProfile: 'Neutral & Pure' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB', weight: '2 lbs (908g)', servings: 28, price: 5599, originalPrice: 6399, pricePerServing: 200 },
      { id: '5lb', label: '5 LB BULK (BEST VALUE)', weight: '5 lbs (2.27kg)', servings: 70, price: 11199, originalPrice: 12799, pricePerServing: 160 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (32g)',
      servingsPerContainer: 70,
      calories: 130,
      protein: 32,
      bcaas: 6.2,
      sugar: 0,
      totalFat: 0.2,
      saturatedFat: 0,
      cholesterol: 2,
      sodium: 90,
      carbohydrates: 0.5,
      potassium: 180,
      calcium: 160,
      digestiveEnzymes: 'DigeZyme® Multi-Enzyme Complex (50mg)'
    },
    coaBatchNumber: 'APX-8801-NW',
    isBestSeller: true,
    isNew: true,
    inStock: true,
    dietaryTags: ['Informed-Sport Certified', 'Non-GMO', 'Gluten-Free', 'Lactose-Free <0.05%', 'Native Cold-Filtered'],
    description: 'Pristine Native Whey extracted directly from fresh pasture-raised milk using low-temperature ceramic microfiltration.',
    longDescription: 'Unlike standard whey protein derived from heated cheese manufacturing whey byproducts, Apex Native Whey is extracted directly from fresh, raw skim milk through non-thermal micro-filtration. This guarantees 17% higher Leucine bioavailability and preserves the complete structure of fragile immunoglobulins.',
    manufacturingCircuit: 'Pristine Native Milk Microfiltration Circuit'
  },
  {
    id: 'clear-vegan-peptides',
    slug: 'clear-vegan-pea-peptides',
    name: 'CLEAR VEGAN PEA PEPTIDE ISOLATE',
    subtitle: 'Enzymatically Hydrolyzed Golden Pea Peptides • 100% Translucent Clarity',
    badge: '100% BOTANICAL',
    badgeType: 'secondary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.91,
    reviewCount: 512,
    price: 3759,
    originalPrice: 4399,
    subscriptionPrice: 3195,
    image: '/images/products/clear-vegan-peptides.jpg',
    galleryImages: [
      '/images/products/clear-vegan-peptides.jpg'
    ],
    macros: {
      protein: '24g',
      bcaa: '4.8g',
      sugar: '0g',
      calories: '100',
      carbs: '1g',
      fat: '0g'
    },
    flavors: [
      { id: 'lime-yuzu', name: 'Electric Lime Yuzu', color: '#c6e838', inStock: true, notes: 'Tart Japanese yuzu citrus punch', tasteProfile: 'Crisp & Tangy' },
      { id: 'pink-guava', name: 'Pink Guava Splash', color: '#ff6b8b', inStock: true, notes: 'Refreshing tropical pink guava', tasteProfile: 'Juicy & Sweet' },
      { id: 'green-apple', name: 'Orchard Green Apple', color: '#88d438', inStock: true, notes: 'Crisp granny smith tartness', tasteProfile: 'Clean Orchard' }
    ],
    sizes: [
      { id: '1.5lb', label: '25 SERVINGS', weight: '1.3 lbs (600g)', servings: 25, price: 3759, originalPrice: 4399, pricePerServing: 150 }
    ],
    nutrition: {
      servingSize: '1 Scoop (24g)',
      servingsPerContainer: 25,
      calories: 100,
      protein: 24,
      bcaas: 4.8,
      sugar: 0,
      totalFat: 0,
      cholesterol: 0,
      sodium: 120,
      carbohydrates: 1
    },
    coaBatchNumber: 'APX-7742-VP',
    isNew: true,
    inStock: true,
    dietaryTags: ['100% Vegan', 'Dairy-Free', 'Hypoallergenic', 'Gluten-Free', 'Soy-Free'],
    description: 'Breakthrough hydrolyzed plant protein that mixes completely translucent like light fruit juice with zero milky texture.',
    longDescription: 'Apex Clear Vegan utilizes targeted enzymatic hydrolysis to dismantle golden pea isolate molecules into ultra-low molecular weight peptide chains. The result is total water solubility and instantaneous gastric emptying without plant grit.',
    manufacturingCircuit: 'Enzymatic Plant Peptide Clarification'
  },
  {
    id: 'apex-collagen-peptides',
    slug: 'apex-bovine-collagen-peptides',
    name: 'HYDROLYZED BOVINE COLLAGEN PEPTIDES',
    subtitle: 'Grass-Fed Pasture-Raised Type I & III Peptides • Instant Hydrolysate',
    badge: 'JOINT & TENDON',
    badgeType: 'tertiary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.94,
    reviewCount: 684,
    price: 3439,
    originalPrice: 3999,
    subscriptionPrice: 2923,
    image: '/images/products/apex-collagen-peptides.jpg',
    galleryImages: [
      '/images/products/apex-collagen-peptides.jpg'
    ],
    macros: {
      protein: '20g',
      bcaa: '3.1g',
      sugar: '0g',
      calories: '80',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'unflavored-collagen', name: 'Pure Unflavored Hydrolysate', color: '#deded7', inStock: true, notes: 'Instant dissolution in hot coffee or cold shakes', tasteProfile: 'Neutral' },
      { id: 'blackberry-hibiscus', name: 'Wild Blackberry Hibiscus', color: '#5e2348', inStock: true, notes: 'Floral blackberry antioxidant blend', tasteProfile: 'Tart Berry' }
    ],
    sizes: [
      { id: '1lb', label: '45 SERVINGS (450G)', weight: '1 lb (454g)', servings: 45, price: 3439, originalPrice: 3999, pricePerServing: 76 }
    ],
    nutrition: {
      servingSize: '1 Scoop (10g)',
      servingsPerContainer: 45,
      calories: 80,
      protein: 20,
      bcaas: 3.1,
      sugar: 0,
      totalFat: 0,
      cholesterol: 0,
      sodium: 50,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-6619-COL',
    inStock: true,
    dietaryTags: ['Pasture-Raised Grass-Fed', 'Keto Certified', 'Paleo Friendly', 'Zero Sugar', 'Dairy-Free'],
    description: 'Clinically verified Type I & Type III bio-active collagen peptides engineered to accelerate connective tissue repair and ligament resilience.',
    longDescription: 'Derived exclusively from grass-fed, pasture-raised South American cattle, our hydrolyzed collagen peptides feature a low average molecular weight of 2,000 Daltons for rapid peptide absorption and maximum synthesis in connective joint tissue.',
    manufacturingCircuit: 'Low-Dalton Enzymatic Hydrolysis Circuit'
  },
  {
    id: 'nitro-pre-workout',
    slug: 'nitro-pre-performance-matrix',
    name: 'NITRO-PRE HIGH-VELOCITY PRE-WORKOUT',
    subtitle: '350mg Organic PurCaf® • 6000mg L-Citrulline • 3200mg CarnoSyn®',
    badge: 'MAX STIMULANT',
    badgeType: 'primary',
    category: 'pre-workout',
    categoryLabel: 'Pre-Workout & Creatine',
    rating: 4.96,
    reviewCount: 1180,
    price: 3999,
    originalPrice: 4799,
    subscriptionPrice: 3399,
    image: '/images/products/nitro-pre-workout.jpg',
    galleryImages: [
      '/images/products/nitro-pre-workout.jpg'
    ],
    macros: {
      protein: '0g',
      sugar: '0g',
      calories: '5',
      carbs: '1g',
      fat: '0g'
    },
    flavors: [
      { id: 'blue-rocket', name: 'Blue Rocket Pop', color: '#1e88e5', inStock: true, notes: 'Cherry, lime, and blue raspberry chill', tasteProfile: 'Electric Sweet' },
      { id: 'sour-citrus', name: 'Sour Electric Citrus', color: '#d4ff00', inStock: true, notes: 'High-voltage sour lemon and lime', tasteProfile: 'Super Sour' },
      { id: 'blood-orange', name: 'Blood Orange Dragonfruit', color: '#e64a19', inStock: true, notes: 'Exotic citrus with crisp dragonfruit bite', tasteProfile: 'Exotic Citrus' }
    ],
    sizes: [
      { id: '30srv', label: '30 HIGH-STIM SERVINGS', weight: '420g', servings: 30, price: 3999, originalPrice: 4799, pricePerServing: 133 }
    ],
    nutrition: {
      servingSize: '1 Scoop (14g)',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 1
    },
    coaBatchNumber: 'APX-5531-PRE',
    isHighStim: true,
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['Vegan', 'Informed-Sport Certified', 'Zero Sugar', 'Banned Substance Screened'],
    description: 'Clinical-dose high-velocity pre-workout delivering 6000mg L-Citrulline nitric oxide pump, 3200mg CarnoSyn beta-alanine, and 350mg organic caffeine.',
    longDescription: 'Nitro-Pre delivers uncompromising cellular vasodilation, neuro-cognitive focus, and sustained power output without beta-alanine itching crashes or gastrointestinal distress.',
    manufacturingCircuit: 'Clinical Ergo-Stimulant Formulation'
  },
  {
    id: 'apex-intra-eaas',
    slug: 'apex-fermented-intra-eaas',
    name: 'FERMENTED INTRA-WORKOUT EAAs',
    subtitle: 'Full-Spectrum 9 Essential Amino Acids • 10g Total Aminos • Aquamin® Minerals',
    badge: 'RECOVERY MATRIX',
    badgeType: 'secondary',
    category: 'pre-workout',
    categoryLabel: 'Pre-Workout & Creatine',
    rating: 4.89,
    reviewCount: 438,
    price: 3199,
    originalPrice: 3839,
    subscriptionPrice: 2719,
    image: '/images/products/apex-intra-eaas.jpg',
    galleryImages: [
      '/images/products/apex-intra-eaas.jpg'
    ],
    macros: {
      protein: '10g',
      bcaa: '7g',
      sugar: '0g',
      calories: '40',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'glacier-melon', name: 'Crisp Glacier Melon', color: '#4caf50', inStock: true, notes: 'Honeydew melon and icy spearmint', tasteProfile: 'Cool & Refreshing' },
      { id: 'island-pineapple', name: 'Pacific Island Pineapple', color: '#fbc02d', inStock: true, notes: 'Golden Maui sweet pineapple splash', tasteProfile: 'Tropical Burst' }
    ],
    sizes: [
      { id: '30srv', label: '30 SERVINGS', weight: '360g', servings: 30, price: 3199, originalPrice: 3839, pricePerServing: 106 }
    ],
    nutrition: {
      servingSize: '1 Scoop (12g)',
      servingsPerContainer: 30,
      calories: 40,
      protein: 10,
      bcaas: 7,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-4412-EAA',
    inStock: true,
    dietaryTags: ['Fermented Botanical Aminos', 'Zero Sugar', 'Electrolyte Infused', 'Gluten-Free'],
    description: 'Plant-fermented Essential Amino Acids with all 9 EAAs in human clinical tissue ratios combined with ocean-harvested Aquamin ionic minerals.',
    longDescription: 'Synthesized via non-GMO microbial plant fermentation rather than duck feathers or animal keratin. Directly halts exercise-induced muscle protein breakdown while replenishing sweat electrolyte losses during grueling endurance sessions.',
    manufacturingCircuit: 'Fermented Amino Bio-Synthesis Circuit'
  },
  {
    id: 'cookie-dough-crunch-bars',
    slug: 'apex-cookie-dough-crunch-bars',
    name: 'TRIPLE-LAYER COOKIE DOUGH CRUNCH',
    subtitle: '22g Whey Isolate Protein • Soft-Baked Cookie Dough Core • Dark Cocoa Ganache',
    badge: 'GOURMET ATHLETIC',
    badgeType: 'primary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.97,
    reviewCount: 1420,
    price: 2959,
    originalPrice: 3439,
    subscriptionPrice: 2515,
    image: '/images/products/cookie-dough-crunch-bars.jpg',
    galleryImages: [
      '/images/products/cookie-dough-crunch-bars.jpg'
    ],
    macros: {
      protein: '22g',
      bcaa: '4.5g',
      sugar: '1g',
      calories: '210',
      carbs: '18g',
      fat: '6g'
    },
    flavors: [
      { id: 'cookie-dough', name: 'Chocolate Chip Cookie Dough', color: '#d2a679', inStock: true, notes: 'Warm vanilla cookie dough with chocolate crisps', tasteProfile: 'Gourmet Bakery' },
      { id: 'caramel-fudge', name: 'Salted Caramel Fudge', color: '#b27a3c', inStock: true, notes: 'Rich golden caramel with crunchy soy crisps', tasteProfile: 'Sweet & Salty' },
      { id: 'birthday-cake', name: 'Birthday Cake Vanilla Crunch', color: '#f3e5ab', inStock: true, notes: 'Frosted white chocolate with rainbow crunch', tasteProfile: 'Decadent' }
    ],
    sizes: [
      { id: '12pk', label: '12 BARS PER BOX', weight: '744g', servings: 12, price: 2959, originalPrice: 3439, pricePerServing: 246 }
    ],
    nutrition: {
      servingSize: '1 Bar (62g)',
      servingsPerContainer: 12,
      calories: 210,
      protein: 22,
      bcaas: 4.5,
      sugar: 1,
      totalFat: 6,
      saturatedFat: 2.5,
      carbohydrates: 18,
      dietaryFiber: 10
    },
    coaBatchNumber: 'APX-3390-BR',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['10g Prebiotic Fiber', 'Low Glycemic', 'No Palm Oil', 'Whey Isolate Primary'],
    description: 'Triple-layer artisan bar featuring a soft-baked vanilla dough base, protein crisp pearls, and dark Belgian chocolate coating.',
    longDescription: 'Created for demanding macro athletes who refuse to compromise on texture or taste. Engineered with 22g pure protein from CFM whey isolate and non-denatured milk protein concentrate.',
    manufacturingCircuit: 'Artisan Low-Shear Protein Bar Enrobing'
  },
  {
    id: 'keto-collagen-crisps',
    slug: 'apex-keto-collagen-crisps',
    name: 'SAVORY KETO COLLAGEN PROTEIN CRISPS',
    subtitle: '20g Bovine Collagen & Whey Isolate • Slow-Baked Air Crunch • 1g Net Carb',
    badge: '1G NET CARB',
    badgeType: 'secondary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.88,
    reviewCount: 390,
    price: 2319,
    originalPrice: 2799,
    subscriptionPrice: 1971,
    image: IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'],
    galleryImages: [
      IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface']
    ],
    macros: {
      protein: '20g',
      bcaa: '3.2g',
      sugar: '0g',
      calories: '140',
      carbs: '2g',
      fat: '5g'
    },
    flavors: [
      { id: 'bbq-mesquite', name: 'Smoked Mesquite BBQ', color: '#c0392b', inStock: true, notes: 'Smoked hickory bark and sweet paprika', tasteProfile: 'Smoky & Tangy' },
      { id: 'white-cheddar', name: 'Aged White Cheddar', color: '#f39c12', inStock: true, notes: 'Sharp 18-month Wisconsin white cheddar', tasteProfile: 'Rich Cheese' },
      { id: 'sea-salt', name: 'Sea Salt & Cracked Pepper', color: '#7f8c8d', inStock: true, notes: 'Coarse Mediterranean sea salt and tellicherry peppercorn', tasteProfile: 'Crisp & Savory' }
    ],
    sizes: [
      { id: '8pk', label: '8 BAGS (38G EACH)', weight: '304g', servings: 8, price: 2319, originalPrice: 2799, pricePerServing: 290 }
    ],
    nutrition: {
      servingSize: '1 Bag (38g)',
      servingsPerContainer: 8,
      calories: 140,
      protein: 20,
      bcaas: 3.2,
      sugar: 0,
      totalFat: 5,
      carbohydrates: 2,
      dietaryFiber: 1
    },
    coaBatchNumber: 'APX-2218-CRP',
    inStock: true,
    dietaryTags: ['Keto Certified', 'Grain-Free', 'Gluten-Free', 'Soy-Free', 'Baked Never Fried'],
    description: 'Crispy slow-baked savory chips loaded with 20g of pure whey isolate and bovine collagen protein per single bag.',
    longDescription: 'Satisfy savory snack cravings without sabotaging ketogenic or competition cutting macros. Air-popped under low heat to preserve protein bioavailability and maximize chip crunch.',
    manufacturingCircuit: 'Air-Popped Bio-Crisp Convection Line'
  },
  {
    id: 'protein-lava-brownie',
    slug: 'apex-double-chocolate-protein-lava-brownie',
    name: 'DOUBLE CHOCOLATE PROTEIN LAVA BROWNIE',
    subtitle: '20g Whey Isolate • Molten Dutch Chocolate Core • Zero Added Sugar',
    badge: 'MOLTEN CORE',
    badgeType: 'primary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.95,
    reviewCount: 890,
    price: 2799,
    originalPrice: 3199,
    subscriptionPrice: 2379,
    image: IMAGES['Apex Soft-Baked Protein Cookie box with broken cookie showing rich double chocolate fudge chunks on clean marble countertop'],
    galleryImages: [
      IMAGES['Apex Soft-Baked Protein Cookie box with broken cookie showing rich double chocolate fudge chunks on clean marble countertop']
    ],
    macros: {
      protein: '20g',
      bcaa: '4.2g',
      sugar: '1g',
      calories: '190',
      carbs: '16g',
      fat: '5g'
    },
    flavors: [
      { id: 'triple-choc', name: 'Molten Triple Chocolate', color: '#1a110d', inStock: true, notes: 'Dark cocoa cake with warm chocolate fudge center', tasteProfile: 'Intense Cocoa' },
      { id: 'caramel-swirl', name: 'Salted Caramel Swirl', color: '#935116', inStock: true, notes: 'Dark fudge brownie swirled with golden caramel', tasteProfile: 'Decadent Caramel' }
    ],
    sizes: [
      { id: '10pk', label: '10 BROWNIES PER BOX', weight: '600g', servings: 10, price: 2799, originalPrice: 3199, pricePerServing: 279 }
    ],
    nutrition: {
      servingSize: '1 Brownie (60g)',
      servingsPerContainer: 10,
      calories: 190,
      protein: 20,
      bcaas: 4.2,
      sugar: 1,
      totalFat: 5,
      carbohydrates: 16,
      dietaryFiber: 8
    },
    coaBatchNumber: 'APX-1194-BW',
    isNew: true,
    inStock: true,
    dietaryTags: ['Microwave 10s For Molten Core', 'Zero Added Sugar', 'Non-GMO', 'Real Dutch Cocoa'],
    description: 'Decadent bakery-fresh protein brownie featuring a velvety molten chocolate center with 20g premium whey isolate.',
    longDescription: 'Heat in the microwave for 10 seconds to release a warm, flowing chocolate lava core. Formulated using almond flour, cold-filtered whey isolate, and natural monk fruit extract.',
    manufacturingCircuit: 'Artisan Molten Injection Bakery Circuit'
  },
  {
    id: 'protein-pancake-mix',
    slug: 'apex-instant-protein-pancake-mix',
    name: 'INSTANT GOLDEN PROTEIN PANCAKE MIX',
    subtitle: '28g Protein Per Serving • Scottish Oat Flour + Whey Isolate • Just Add Water',
    badge: 'JUST ADD WATER',
    badgeType: 'secondary',
    category: 'oats',
    categoryLabel: 'Overnight Macro Oats',
    rating: 4.92,
    reviewCount: 715,
    price: 1999,
    originalPrice: 2399,
    subscriptionPrice: 1699,
    image: IMAGES['Apex Instant Pro-Oatmeal box with individual 10 single-serve packets Spiced Apple Cinnamon flavor in warm bright morning kitchen aesthetic'],
    galleryImages: [
      IMAGES['Apex Instant Pro-Oatmeal box with individual 10 single-serve packets Spiced Apple Cinnamon flavor in warm bright morning kitchen aesthetic']
    ],
    macros: {
      protein: '28g',
      bcaa: '5.2g',
      sugar: '2g',
      calories: '260',
      carbs: '32g',
      fat: '2.5g'
    },
    flavors: [
      { id: 'buttermilk', name: 'Golden Farmhouse Buttermilk', color: '#f5b041', inStock: true, notes: 'Classic fluffy diner-style buttermilk pancake', tasteProfile: 'Golden & Fluffy' },
      { id: 'blueberry-cinnamon', name: 'Blueberry Cinnamon Spice', color: '#5b2c6f', inStock: true, notes: 'Wild dried Maine blueberries with Ceylon cinnamon', tasteProfile: 'Fruity & Warm' },
      { id: 'choc-chip', name: 'Dark Chocolate Chip Batter', color: '#2e1c14', inStock: true, notes: 'Melted dark chocolate bits folded into batter', tasteProfile: 'Bakery Chocolate' }
    ],
    sizes: [
      { id: '32oz', label: '32 OZ POUCH (16 SERVINGS)', weight: '908g', servings: 16, price: 1999, originalPrice: 2399, pricePerServing: 125 }
    ],
    nutrition: {
      servingSize: '2/3 Cup (57g mix)',
      servingsPerContainer: 16,
      calories: 260,
      protein: 28,
      bcaas: 5.2,
      sugar: 2,
      totalFat: 2.5,
      carbohydrates: 32,
      dietaryFiber: 5
    },
    coaBatchNumber: 'APX-9012-PAN',
    inStock: true,
    dietaryTags: ['100% Whole Grain Scottish Oats', 'Non-GMO', 'No Artificial Flavors', 'High Potassium'],
    description: 'Fluffy golden restaurant-style protein pancakes ready in 3 minutes. Just add cold water, whisk, and pour on a hot skillet.',
    longDescription: 'Combines micro-milled Scottish whole grain oats with instantized cold-filtered whey isolate and organic egg white protein. Produces airy, towering pancakes with 28g complete protein per short stack.',
    manufacturingCircuit: 'Whole Grain Precision Milling Line'
  },
  {
    id: 'micronized-glutamine',
    slug: 'apex-micronized-fermented-glutamine',
    name: 'APEX MICRONIZED FERMENTED L-GLUTAMINE',
    subtitle: '100% Kyowa Quality® Fermented L-Glutamine • Gut Lining & Immune Resiliency',
    badge: '100% KYOWA',
    badgeType: 'tertiary',
    category: 'pre-workout',
    categoryLabel: 'Pre-Workout & Creatine',
    rating: 4.94,
    reviewCount: 480,
    price: 2399,
    originalPrice: 2959,
    subscriptionPrice: 2039,
    image: IMAGES['Monochromatic technical tub of Creapure German Micronized Creatine powder with lab seals and Informed Sport certification badge on a clean background'],
    galleryImages: [
      IMAGES['Monochromatic technical tub of Creapure German Micronized Creatine powder with lab seals and Informed Sport certification badge on a clean background']
    ],
    macros: {
      protein: '5g',
      sugar: '0g',
      calories: '20',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'pure-unflavored', name: 'Micro-Crystalline Pure Unflavored', color: '#f8f9fa', inStock: true, notes: 'Instant dissolution in any cold beverage', tasteProfile: 'Neutral' }
    ],
    sizes: [
      { id: '500g', label: '500G TUB (100 SERVINGS)', weight: '500g', servings: 100, price: 2399, originalPrice: 2959, pricePerServing: 24 }
    ],
    nutrition: {
      servingSize: '1 Teaspoon (5g)',
      servingsPerContainer: 100,
      calories: 20,
      protein: 5,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-7731-GLU',
    inStock: true,
    dietaryTags: ['Kyowa Quality® Certified', 'Vegan Fermented', 'Ultra-Micronized', 'Zero Fillers'],
    description: 'Gold-standard pharmaceutical grade fermented L-Glutamine for rapid intestinal barrier repair and elite athletic immune recovery.',
    longDescription: 'Sourced exclusively from Kyowa Hakko Bio, the world leader in amino acid fermentation. Ultra-micronized to 200 mesh for immediate solubility and maximum intestinal cellular uptake.',
    manufacturingCircuit: 'Pharmaceutical Amino Micronization Circuit'
  },
  {
    id: 'apex-hydration-matrix',
    slug: 'apex-electrolyte-hydration-matrix',
    name: 'ELECTROLYTE HYDRATION MATRIX',
    subtitle: '1000mg Sodium • 200mg Potassium • 60mg Magnesium • Albion® Mineral Chelates',
    badge: 'CLINICAL HYDRATION',
    badgeType: 'primary',
    category: 'pre-workout',
    categoryLabel: 'Pre-Workout & Creatine',
    rating: 4.97,
    reviewCount: 1340,
    price: 2639,
    originalPrice: 3199,
    subscriptionPrice: 2243,
    image: IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.'],
    galleryImages: [
      IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.']
    ],
    macros: {
      protein: '0g',
      sugar: '0g',
      calories: '10',
      carbs: '1g',
      fat: '0g'
    },
    flavors: [
      { id: 'citrus-lemon', name: 'Himalayan Citrus Lemon', color: '#f7dc6f', inStock: true, notes: 'Fresh squeezed California lemon with crisp salinity', tasteProfile: 'Crisp Citrus Salt' },
      { id: 'watermelon-salt', name: 'Watermelon Lime Salt', color: '#ec7063', inStock: true, notes: 'Sweet summer watermelon with key lime bite', tasteProfile: 'Refreshing Watermelon' },
      { id: 'raw-unflavored', name: 'Raw Unflavored Pure Electrolyte', color: '#ebedef', inStock: true, notes: 'Zero flavor pure electrolyte minerals', tasteProfile: 'Pure Saline' }
    ],
    sizes: [
      { id: '30pk', label: '30 SINGLE-SERVE STICK PACKS', weight: '210g', servings: 30, price: 2639, originalPrice: 3199, pricePerServing: 88 }
    ],
    nutrition: {
      servingSize: '1 Stick Pack (7g)',
      servingsPerContainer: 30,
      calories: 10,
      protein: 0,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 1,
      sodium: 1000,
      potassium: 200
    },
    coaBatchNumber: 'APX-8104-HYD',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['Real Himalayan Pink Salt', 'Zero Sugar', 'Albion® Chelated Minerals', 'Keto & Fasting Friendly'],
    description: 'Targeted optimal ratio electrolyte replenishment delivering 1000mg bio-identical sodium without maltodextrin, sugar, or synthetic dyes.',
    longDescription: 'Engineered specifically for heavy sweaters, endurance athletes, and low-carb keto performers. Contains bio-available Albion magnesium malate and potassium chloride to eradicate muscle cramping.',
    manufacturingCircuit: 'Micro-Encapsulated Mineral Chelation'
  },
  {
    id: 'protein-almond-butter',
    slug: 'apex-high-protein-almond-butter',
    name: 'HIGH-PROTEIN ALMOND MACADAMIA BUTTER',
    subtitle: '12g Protein Per 2 Tbsp • Stone-Ground California Almonds & Macadamias + Whey Isolate',
    badge: 'STONE GROUND',
    badgeType: 'secondary',
    category: 'oats',
    categoryLabel: 'Overnight Macro Oats',
    rating: 4.96,
    reviewCount: 625,
    price: 1519,
    originalPrice: 1839,
    subscriptionPrice: 1291,
    image: IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop'],
    galleryImages: [
      IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop']
    ],
    macros: {
      protein: '12g',
      bcaa: '2.5g',
      sugar: '1g',
      calories: '180',
      carbs: '6g',
      fat: '14g'
    },
    flavors: [
      { id: 'cinnamon-swirl', name: 'Roasted Cinnamon Swirl', color: '#b9770e', inStock: true, notes: 'Slow-roasted almonds with golden Ceylon cinnamon', tasteProfile: 'Warm Nut Butter' },
      { id: 'choc-drizzle', name: 'Dark Chocolate Drizzle', color: '#3e2723', inStock: true, notes: 'Stone-ground nut butter with dark cacao ribbons', tasteProfile: 'Velvety Cacao' },
      { id: 'sea-salt-butter', name: 'Pure Sea Salt Crunch', color: '#d35400', inStock: true, notes: 'Crunchy stone-ground nut pieces with pink salt', tasteProfile: 'Savory Nutty' }
    ],
    sizes: [
      { id: '16oz', label: '16 OZ GLASS JAR (14 SERVINGS)', weight: '454g', servings: 14, price: 1519, originalPrice: 1839, pricePerServing: 108 }
    ],
    nutrition: {
      servingSize: '2 Tablespoons (32g)',
      servingsPerContainer: 14,
      calories: 180,
      protein: 12,
      bcaas: 2.5,
      sugar: 1,
      totalFat: 14,
      saturatedFat: 1.5,
      carbohydrates: 6,
      dietaryFiber: 4
    },
    coaBatchNumber: 'APX-6523-ALM',
    isNew: true,
    inStock: true,
    dietaryTags: ['Stone-Ground', 'No Added Palm Oil', 'Whey Isolate Infused', 'Gluten-Free', 'Keto Friendly'],
    description: 'Slow stone-ground California almonds and buttery Hawaiian macadamias infused with ultra-pure whey isolate.',
    longDescription: 'Ditch sugar-loaded supermarket spreads. We stone-grind whole dry-roasted nuts for 24 hours until naturally velvety smooth, then blend in CFM whey isolate and sea salt for an unbeatable 12g protein per serving.',
    manufacturingCircuit: 'Granite Stone Mill Micro-Grinding'
  },
  // ==========================================
  // 5 NEW HIGH-PROTEIN OATS FORMULATIONS
  // ==========================================
  {
    id: 'apex-steel-cut-pro-oats',
    slug: 'apex-clinical-steel-cut-protein-oats',
    name: 'APEX CLINICAL STEEL-CUT PROTEIN OATS',
    subtitle: 'Slow-Steam Steel-Cut Groats + 100% CFM Whey Isolate • Low Glycemic Sustained Fuel',
    badge: 'SLOW GLYCOGEN',
    badgeType: 'primary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.95,
    reviewCount: 388,
    price: 1999,
    originalPrice: 2399,
    subscriptionPrice: 1699,
    image: IMAGES['High tech box of 10 individual instant high protein oatmeal packets from Apex Fuel with spiced cinnamon aroma styling and pure studio aesthetic.'],
    galleryImages: [
      IMAGES['High tech box of 10 individual instant high protein oatmeal packets from Apex Fuel with spiced cinnamon aroma styling and pure studio aesthetic.'],
      IMAGES['Overhead shot of a jar of Apex supercharged pro-oats with chia seeds and maple pecan crumbles in clean athletic kitchen lighting']
    ],
    macros: {
      protein: '28g',
      bcaa: '4.5g',
      sugar: '1g',
      calories: '240',
      carbs: '38g',
      fat: '3g'
    },
    flavors: [
      { id: 'cinnamon-spice', name: 'Golden Ceylon Apple Cinnamon', color: '#b9770e', inStock: true, notes: 'Whole groats infused with warm Ceylon cinnamon and crisp dried apple bits', tasteProfile: 'Warm & Spiced' },
      { id: 'pure-maple', name: 'Vermont Grade-A Dark Maple', color: '#795548', inStock: true, notes: 'Rich kettle-simmered dark amber maple sweetness', tasteProfile: 'Deep & Caramelized' },
      { id: 'unflavored-raw', name: '100% Whole Groat Natural', color: '#deded7', inStock: true, notes: 'Unsweetened slow-steamed groats with cold microfiltered whey', tasteProfile: 'Earthy & Clean' }
    ],
    sizes: [
      { id: '2lb', label: '2.2 LB TUB (20 SERVINGS)', weight: '1kg (2.2 lbs)', servings: 20, price: 1999, originalPrice: 2399, pricePerServing: 100 },
      { id: '4lb', label: '4.4 LB BULK TUB (40 SERVINGS)', weight: '2kg (4.4 lbs)', servings: 40, price: 3599, originalPrice: 4399, pricePerServing: 90 }
    ],
    nutrition: {
      servingSize: '1 Scoop (50g)',
      servingsPerContainer: 20,
      calories: 240,
      protein: 28,
      bcaas: 4.5,
      sugar: 1,
      totalFat: 3,
      saturatedFat: 0.5,
      carbohydrates: 38,
      dietaryFiber: 6,
      sodium: 85
    },
    coaBatchNumber: 'APX-OAT-9102',
    isNew: true,
    inStock: true,
    dietaryTags: ['Informed-Sport Certified', 'Slow-Release Carbs', 'CFM Whey Infused', 'Zero Added Sugar', 'Non-GMO'],
    description: 'Slow-steamed whole grain steel-cut groats micro-blended with CFM whey isolate for optimal glycogen replenishment and zero mid-morning insulin spikes.',
    longDescription: 'Engineered for decathletes, marathon runners, and hybrid lifters requiring sustained 4-hour glycogen release. Combines the slow digestion kinetics of steel-cut groats with instant muscle protein synthesis from pure cross-flow microfiltered isolate.',
    manufacturingCircuit: 'Slow-Steam Whole Grain Hydro-Thermal Cleaving'
  },
  {
    id: 'apex-ancient-grain-chia-oats',
    slug: 'apex-ancient-grain-black-chia-pro-oats',
    name: 'APEX ANCIENT GRAIN & BLACK CHIA PRO-OATS',
    subtitle: 'Rolled Spelt, Quinoa Flakes, Black Chia Seeds & Native Isolate • Sustained Endurance Matrix',
    badge: 'OMEGA-3 DENSE',
    badgeType: 'tertiary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.92,
    reviewCount: 274,
    price: 2159,
    originalPrice: 2639,
    subscriptionPrice: 1835,
    image: IMAGES['Bag of Apex High-Protein Granola Crunch Maple Pecan flavor with crunchy clusters poured into ceramic white bowl with fresh berries'],
    galleryImages: [
      IMAGES['Bag of Apex High-Protein Granola Crunch Maple Pecan flavor with crunchy clusters poured into ceramic white bowl with fresh berries'],
      IMAGES['Pouch packaging of Apex High-Protein Granola Crunch with visible clusters of pumpkin seeds and protein crisps against a graphite dark laboratory backdrop.']
    ],
    macros: {
      protein: '30g',
      bcaa: '5.0g',
      sugar: '2g',
      calories: '260',
      carbs: '42g',
      fat: '4g'
    },
    flavors: [
      { id: 'vanilla-almond', name: 'Madagascar Vanilla Roasted Almond', color: '#e8dcba', inStock: true, notes: 'Fragrant Bourbon vanilla with toasted almond slivers', tasteProfile: 'Silky Nutty' },
      { id: 'dark-cacao-nibs', name: 'Peruvian Cacao & Chia', color: '#3e2723', inStock: true, notes: 'Crushed raw Peruvian cacao nibs with whole black chia seeds', tasteProfile: 'Dark & Crisp' }
    ],
    sizes: [
      { id: '2.5lb', label: '2.5 LB TUB (22 SERVINGS)', weight: '1.13kg (2.5 lbs)', servings: 22, price: 2159, originalPrice: 2639, pricePerServing: 98 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (55g)',
      servingsPerContainer: 22,
      calories: 260,
      protein: 30,
      bcaas: 5.0,
      sugar: 2,
      totalFat: 4,
      saturatedFat: 0.6,
      carbohydrates: 42,
      dietaryFiber: 8,
      potassium: 310
    },
    coaBatchNumber: 'APX-ANC-4411',
    isNew: true,
    inStock: true,
    dietaryTags: ['Ancient Grains', 'Black Chia Omega-3', 'High Fiber 8g', 'Zero Artificial Sweeteners', 'Clean Label'],
    description: 'Ancestral heritage grains including organic spelt, quinoa flakes, and cold-milled black chia seeds fortified with 30g pure protein per bowl.',
    longDescription: 'Combines anti-inflammatory ALA omega-3 fatty acids from high-altitude black chia with complete microfiltered protein fractions. Perfect for long-distance training blocks and heavy metabolic conditioning.',
    manufacturingCircuit: 'Heritage Cold-Rolled Grain Blending'
  },
  {
    id: 'apex-maple-pecan-crunch-oats',
    slug: 'apex-roasted-maple-pecan-crunch-pro-oats',
    name: 'APEX ROASTED MAPLE PECAN CRUNCH PRO-OATS',
    subtitle: 'Kettle-Toasted Rolled Oats with Crushed Texas Pecans & Bioactive Whey Peptides',
    badge: 'KETTLE ROASTED',
    badgeType: 'secondary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.97,
    reviewCount: 429,
    price: 1919,
    originalPrice: 2319,
    subscriptionPrice: 1631,
    image: IMAGES['High-Protein Granola Crunch resealable clean athletic stand-up pouch, high resolution studio food pack shot with crisp white background and volt accents.'],
    galleryImages: [
      IMAGES['High-Protein Granola Crunch resealable clean athletic stand-up pouch, high resolution studio food pack shot with crisp white background and volt accents.'],
      IMAGES['Bag of Apex High-Protein Granola Crunch Maple Pecan flavor with crunchy clusters poured into ceramic white bowl with fresh berries']
    ],
    macros: {
      protein: '26g',
      bcaa: '4.2g',
      sugar: '2g',
      calories: '250',
      carbs: '36g',
      fat: '5g'
    },
    flavors: [
      { id: 'maple-pecan', name: 'Smoky Kettle Maple Pecan', color: '#b9770e', inStock: true, notes: 'Golden kettle-roasted oats with butter pecan crunch', tasteProfile: 'Buttery & Toasted' },
      { id: 'brown-sugar-cinnamon', name: 'Cinnamon Bark Crumb', color: '#8d6e63', inStock: true, notes: 'Spiced bakery crust aroma with zero refined sugar', tasteProfile: 'Warm Bakery' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB (18 SERVINGS)', weight: '908g', servings: 18, price: 1919, originalPrice: 2319, pricePerServing: 106 },
      { id: '4lb', label: '4 LB BULK (36 SERVINGS)', weight: '1.81kg', servings: 36, price: 3439, originalPrice: 4159, pricePerServing: 95 }
    ],
    nutrition: {
      servingSize: '1 Cup Measured (52g)',
      servingsPerContainer: 18,
      calories: 250,
      protein: 26,
      bcaas: 4.2,
      sugar: 2,
      totalFat: 5,
      saturatedFat: 0.8,
      carbohydrates: 36,
      dietaryFiber: 5
    },
    coaBatchNumber: 'APX-MPL-5520',
    isNew: true,
    inStock: true,
    dietaryTags: ['Texas Pecans', 'Kettle-Toasted', 'Gluten-Free Oats', 'HPLC Verified', 'Low GI'],
    description: 'Golden kettle-toasted gluten-free oats folded with crunchy roasted Texas pecan halves and enzymatic whey protein peptides.',
    longDescription: 'Toasted at precise low temperatures to preserve delicate beta-glucans and micronutrients while delivering an unmatched bakery crunch without refined syrups.',
    manufacturingCircuit: 'Low-Temp Precision Rotary Drum Roasting'
  },
  {
    id: 'apex-overnight-wild-blueberry-oats',
    slug: 'apex-overnight-wild-blueberry-pro-oats',
    name: 'APEX OVERNIGHT WILD BLUEBERRY PRO-OATS',
    subtitle: 'Freeze-Dried Nordic Bilberries + High-Viscosity Rolled Oats + 27g Grass-Fed Protein',
    badge: 'ANTIOXIDANT HIGH',
    badgeType: 'primary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.94,
    reviewCount: 312,
    price: 2039,
    originalPrice: 2479,
    subscriptionPrice: 1734,
    image: IMAGES['Athletic high-protein meal tub of Apex Overnight Power Oats with green apple, cinnamon bark and chia seeds in dynamic modern packaging'],
    galleryImages: [
      IMAGES['Athletic high-protein meal tub of Apex Overnight Power Oats with green apple, cinnamon bark and chia seeds in dynamic modern packaging'],
      IMAGES['Meal prep layout showing three jars of prepared Apex high protein overnight oats with fresh berries on marble counter']
    ],
    macros: {
      protein: '27g',
      bcaa: '4.8g',
      sugar: '3g',
      calories: '230',
      carbs: '35g',
      fat: '2.5g'
    },
    flavors: [
      { id: 'wild-blueberry', name: 'Nordic Wild Bilberry Cream', color: '#3949ab', inStock: true, notes: 'Freeze-dried Arctic wild bilberries with rich churned sweet cream', tasteProfile: 'Tart Berry & Cream' },
      { id: 'acai-blackberry', name: 'Patagonian Dark Berry', color: '#4a148c', inStock: true, notes: 'Dark antioxidant berry blend with crisp rolled oats', tasteProfile: 'Rich Anthocyanin' }
    ],
    sizes: [
      { id: '2.2lb', label: '2.2 LB TUB (20 SERVINGS)', weight: '1kg (2.2 lbs)', servings: 20, price: 2039, originalPrice: 2479, pricePerServing: 102 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (50g)',
      servingsPerContainer: 20,
      calories: 230,
      protein: 27,
      bcaas: 4.8,
      sugar: 3,
      totalFat: 2.5,
      saturatedFat: 0.4,
      carbohydrates: 35,
      dietaryFiber: 6,
      calcium: 180
    },
    coaBatchNumber: 'APX-BLU-7729',
    isNew: true,
    inStock: true,
    dietaryTags: ['Wild Nordic Berries', 'Anthocyanin Rich', 'Overnight Instant Mix', 'No Added Sugar', 'Informed-Sport'],
    description: 'Nutrient-dense overnight oats engineered with freeze-dried wild Scandinavian bilberries, slow-churned sweet cream notes, and 27g protein.',
    longDescription: 'Simply add cold almond milk or water before sleep; by morning, the thick rolled oats soften into a velvety porridge bursting with natural blue anthocyanin antioxidants and muscle-rebuilding BCAAs.',
    manufacturingCircuit: 'Cryo-Freeze Drying & Vacuum Micro-Blending'
  },
  {
    id: 'apex-instant-morning-fuel-oats',
    slug: 'apex-instant-pro-oatmeal-express-packs',
    name: 'APEX INSTANT PRO-OATMEAL EXPRESS PACKS',
    subtitle: '10 Single-Serve Nitrogen-Flushed Sachets • 60-Second Boiling Water Hydration',
    badge: '60-SEC PREP',
    badgeType: 'tertiary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.98,
    reviewCount: 516,
    price: 1759,
    originalPrice: 2159,
    subscriptionPrice: 1495,
    image: IMAGES['Apex Overnight Power Oats large protein oatmeal tub, sleek modern branding, crisp white aesthetic with oats texture detail on neutral stone pedestal.'],
    galleryImages: [
      IMAGES['Apex Overnight Power Oats large protein oatmeal tub, sleek modern branding, crisp white aesthetic with oats texture detail on neutral stone pedestal.'],
      IMAGES['Athletic breakfast bowl containing hot high protein rolled oats topped with dark chocolate chunks and sliced almonds on clean white countertop']
    ],
    macros: {
      protein: '25g',
      bcaa: '4.0g',
      sugar: '1g',
      calories: '220',
      carbs: '32g',
      fat: '2g'
    },
    flavors: [
      { id: 'spiced-apple', name: 'Roasted Honeycrisp Apple & Cinnamon', color: '#d84315', inStock: true, notes: 'Dehydrated Honeycrisp apple dices with Saigon cinnamon bark', tasteProfile: 'Crisp Apple Spice' },
      { id: 'golden-honey', name: 'Wildflower Honey Oat Crunch', color: '#ffb300', inStock: true, notes: 'Golden honey crystal essence with toasted flaxseed flakes', tasteProfile: 'Sweet & Warm' },
      { id: 'cocoa-mocha', name: 'Dark Espresso Cocoa', color: '#4e342e', inStock: true, notes: 'Roasted Colombian espresso powder with Dutch dark cacao', tasteProfile: 'Roasted Mocha' }
    ],
    sizes: [
      { id: '10pk', label: 'BOX OF 10 SACHET PACKS (10 x 60g)', weight: '600g', servings: 10, price: 1759, originalPrice: 2159, pricePerServing: 176 },
      { id: '24pk', label: 'BOX OF 24 SACHET PACKS (24 x 60g)', weight: '1.44kg', servings: 24, price: 3759, originalPrice: 4559, pricePerServing: 156 }
    ],
    nutrition: {
      servingSize: '1 Individual Sachet (60g)',
      servingsPerContainer: 10,
      calories: 220,
      protein: 25,
      bcaas: 4.0,
      sugar: 1,
      totalFat: 2,
      saturatedFat: 0.3,
      carbohydrates: 32,
      dietaryFiber: 5
    },
    coaBatchNumber: 'APX-EXP-8810',
    isNew: true,
    inStock: true,
    dietaryTags: ['10 Individual Sachet Packs', 'Nitrogen Flushed', 'Travel Ready', 'Zero Synthetic Flavors', 'NSF Certified'],
    description: 'Precision pre-portioned single-serve packets formulated for elite athletes on the move. Rehydrates completely in 60 seconds with hot water.',
    longDescription: 'Packaged in nitrogen-flushed barrier foil to maintain maximum freshness and prevent lipid oxidation. Delivers 25g clean whey and oat protein anywhere on Earth.',
    manufacturingCircuit: 'Automated Multi-Lane Nitrogen Pouch Packing'
  },

  // ==========================================
  // 5 NEW PROTEIN SNACK PACKS FORMULATIONS
  // ==========================================
  {
    id: 'apex-jalapeno-protein-puffs',
    slug: 'apex-high-protein-crispy-jalapeno-puffs',
    name: 'APEX HIGH-PROTEIN CRISPY JALAPEÑO PUFFS',
    subtitle: 'Oven-Baked Milk Protein Isolate Puffs • Tangy White Cheddar & Fire-Roasted Jalapeño',
    badge: 'SAVORY CRUNCH',
    badgeType: 'secondary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.91,
    reviewCount: 342,
    price: 2239,
    originalPrice: 2799,
    subscriptionPrice: 1903,
    image: IMAGES['Multi-pack bags of Apex Popped Protein Chips in aerodynamic matte foil packaging with sea salt and jalapeno illustrations, shot in sharp editorial focus.'],
    galleryImages: [
      IMAGES['Multi-pack bags of Apex Popped Protein Chips in aerodynamic matte foil packaging with sea salt and jalapeno illustrations, shot in sharp editorial focus.'],
      IMAGES['High protein savory chips and sweet protein cookies in sleek foil snack pouches on pristine athletic gym floor bench']
    ],
    macros: {
      protein: '21g',
      bcaa: '3.8g',
      sugar: '0g',
      calories: '140',
      carbs: '3g',
      fat: '4g'
    },
    flavors: [
      { id: 'roasted-jalapeno', name: 'Fire-Roasted Jalapeño White Cheddar', color: '#2e7d32', inStock: true, notes: 'Medium pepper heat balanced with aged Vermont white cheddar', tasteProfile: 'Spicy & Savory' },
      { id: 'nacho-sol', name: 'Smoked Paprika & Nutritional Yeast', color: '#e65100', inStock: true, notes: 'Savory vegan cheese-style zest with roasted pimentón', tasteProfile: 'Zesty & Umami' }
    ],
    sizes: [
      { id: '8pk', label: '8-PACK BOX (8 x 45g BAGS)', weight: '360g', servings: 8, price: 2239, originalPrice: 2799, pricePerServing: 280 },
      { id: '16pk', label: '16-PACK BULK CASE (16 x 45g BAGS)', weight: '720g', servings: 16, price: 3999, originalPrice: 5039, pricePerServing: 250 }
    ],
    nutrition: {
      servingSize: '1 Bag (45g)',
      servingsPerContainer: 8,
      calories: 140,
      protein: 21,
      bcaas: 3.8,
      sugar: 0,
      totalFat: 4,
      saturatedFat: 0.5,
      carbohydrates: 3,
      dietaryFiber: 2,
      sodium: 190
    },
    coaBatchNumber: 'APX-PUF-3310',
    isNew: true,
    inStock: true,
    dietaryTags: ['Baked Not Fried', 'Keto Certified', '21g Pure Protein', 'Gluten-Free', 'Zero Trans Fat'],
    description: 'Crispy high-density milk protein isolate puffs tossed in fire-roasted jalapeño seasoning and aged white cheddar powder.',
    longDescription: 'Replaces junk-food cheese puffs with a clinical 21g protein yield per bag. Extruded under low heat to maintain milk protein integrity, producing a feather-light snap with zero greasy residue.',
    manufacturingCircuit: 'Low-Moisture Thermal Extrusion Puffer'
  },
  {
    id: 'apex-bbq-popped-protein-chips',
    slug: 'apex-pro-popped-smoky-mesquite-bbq-chips',
    name: 'APEX PRO-POPPED SMOKY MESQUITE BBQ CHIPS',
    subtitle: 'High-Pressure Air-Popped Soy & Whey Crisp Matrix • Real Wood-Smoked Mesquite',
    badge: 'KETO COMPLIANT',
    badgeType: 'primary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.96,
    reviewCount: 468,
    price: 2399,
    originalPrice: 2880,
    subscriptionPrice: 2039,
    image: IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'],
    galleryImages: [
      IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'],
      IMAGES['High protein savory chips and sweet protein cookies in sleek foil snack pouches on pristine athletic gym floor bench']
    ],
    macros: {
      protein: '22g',
      bcaa: '4.0g',
      sugar: '1g',
      calories: '150',
      carbs: '4g',
      fat: '3.5g'
    },
    flavors: [
      { id: 'smoky-mesquite', name: 'Texas Hickory Mesquite BBQ', color: '#bf360c', inStock: true, notes: 'Authentic smokehouse spices with a touch of molasses sweetness', tasteProfile: 'Smoky & Tangy' },
      { id: 'sweet-chipotle', name: 'Sweet Amber Chili Chipotle', color: '#d84315', inStock: true, notes: 'Smoked jalapeño chili with organic monk fruit sweetness', tasteProfile: 'Sweet Heat' }
    ],
    sizes: [
      { id: '8pk', label: '8-PACK VARIETY BOX (8 x 40g)', weight: '320g', servings: 8, price: 2399, originalPrice: 2880, pricePerServing: 300 },
      { id: '16pk', label: '16-PACK PRO BOX (16 x 40g)', weight: '640g', servings: 16, price: 4399, originalPrice: 5440, pricePerServing: 275 }
    ],
    nutrition: {
      servingSize: '1 Bag (40g)',
      servingsPerContainer: 8,
      calories: 150,
      protein: 22,
      bcaas: 4.0,
      sugar: 1,
      totalFat: 3.5,
      saturatedFat: 0.5,
      carbohydrates: 4,
      dietaryFiber: 3,
      sodium: 210
    },
    coaBatchNumber: 'APX-CHP-6621',
    isNew: true,
    inStock: true,
    dietaryTags: ['Air-Popped Under 2 Bar', '70% Less Fat Than Potato Chips', 'Zero Hydrogenated Oils', 'HPLC Screened'],
    description: 'High-pressure air-popped protein crisps delivering an intense crunch seasoned with Texas pit-master mesquite and garlic.',
    longDescription: 'Each crisp is expanded using high-temperature, high-pressure steam without immersion in frying vats. Delivers an extraordinary 22g protein with only 4g net carbohydrates.',
    manufacturingCircuit: 'High-Pressure Micro-Air Expansion'
  },
  {
    id: 'apex-raw-choc-chip-cookie-dough-bites',
    slug: 'apex-raw-chocolate-chip-cookie-dough-bites',
    name: 'APEX RAW CHOCOLATE CHIP COOKIE DOUGH BITES',
    subtitle: 'Cold-Pressed Almond Butter, Whey Isolate & 70% Dark Chocolate Nibs • Bite-Sized Energy',
    badge: 'GUILT-FREE',
    badgeType: 'tertiary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.93,
    reviewCount: 290,
    price: 1599,
    originalPrice: 1999,
    subscriptionPrice: 1359,
    image: IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop'],
    galleryImages: [
      IMAGES['Apex Almond Butter Protein Bites resealable stand-up pouch Cinnamon Roll flavor with round nut butter bites displayed on pristine tabletop'],
      IMAGES['Artisanal soft-baked macro cookie with dark chocolate chips inside premium modern packaging from Apex Fuel, set against clean concrete studio background.']
    ],
    macros: {
      protein: '20g',
      bcaa: '3.6g',
      sugar: '2g',
      calories: '190',
      carbs: '8g',
      fat: '7g'
    },
    flavors: [
      { id: 'classic-choc-chip', name: 'Classic Brown Sugar Cookie Dough', color: '#795548', inStock: true, notes: 'Authentic bakery raw cookie dough flavor with dark cacao nibs', tasteProfile: 'Rich & Chewy' },
      { id: 'birthday-cake', name: 'Vanilla Frosting & Mineral Sprinkles', color: '#ec407a', inStock: true, notes: 'Golden vanilla cake batter with natural plant-colored crisps', tasteProfile: 'Sweet & Creamy' }
    ],
    sizes: [
      { id: '8oz', label: 'RESEALABLE 8 OZ POUCH (6 SERVINGS)', weight: '227g', servings: 6, price: 1599, originalPrice: 1999, pricePerServing: 266 },
      { id: '3pk', label: '3-POUCH MULTI-PACK (18 SERVINGS)', weight: '681g', servings: 18, price: 4239, originalPrice: 5279, pricePerServing: 235 }
    ],
    nutrition: {
      servingSize: '4 Bites (38g)',
      servingsPerContainer: 6,
      calories: 190,
      protein: 20,
      bcaas: 3.6,
      sugar: 2,
      totalFat: 7,
      saturatedFat: 1.5,
      carbohydrates: 8,
      dietaryFiber: 4
    },
    coaBatchNumber: 'APX-BIT-1190',
    isNew: true,
    inStock: true,
    dietaryTags: ['Cold-Pressed', 'Raw Nutrient Retention', 'No Added Sugar', 'Zero Sugar Alcohols', 'Gluten-Free'],
    description: 'Delectable spherical dough bites crafted with stone-ground raw almond butter, non-denatured whey isolate, and dark chocolate chips.',
    longDescription: 'Created for rapid energy top-offs without spike-and-crash sugar highs. Cold-pressed under 105°F to ensure uncompromised peptide bioactivity and velvety dough mouthfeel.',
    manufacturingCircuit: 'Cold-Form Extrusion & Ultrasonic Ball Rolling'
  },
  {
    id: 'apex-protein-wafer-crisps',
    slug: 'apex-quad-layer-chocolate-protein-wafer-crisps',
    name: 'APEX QUAD-LAYER CHOCOLATE PROTEIN WAFER CRISPS',
    subtitle: 'Delicate Light Multi-Layer Protein Wafers with Velvety Cocoa Cream Core',
    badge: 'LIGHT & CRISPY',
    badgeType: 'secondary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.89,
    reviewCount: 318,
    price: 2279,
    originalPrice: 2720,
    subscriptionPrice: 1938,
    image: IMAGES['Array of unwrapped chocolate and peanut butter crispy athletic protein bars arranged cleanly on white studio surface'],
    galleryImages: [
      IMAGES['Array of unwrapped chocolate and peanut butter crispy athletic protein bars arranged cleanly on white studio surface'],
      IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo']
    ],
    macros: {
      protein: '18g',
      bcaa: '3.2g',
      sugar: '1g',
      calories: '160',
      carbs: '6g',
      fat: '6g'
    },
    flavors: [
      { id: 'belgian-cocoa', name: 'Dark Belgian Chocolate Cream', color: '#2b1d16', inStock: true, notes: 'Crisp micro-wafers filled with silky Dutch cocoa protein mousse', tasteProfile: 'Crisp & Luxurious' },
      { id: 'hazelnut-praline', name: 'Roasted Hazelnut Gianduja', color: '#6d4c41', inStock: true, notes: 'Piedmont roasted hazelnut butter cream layer', tasteProfile: 'Nutty & Delicate' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 TWIN-PACKS (12 x 40g)', weight: '480g', servings: 12, price: 2279, originalPrice: 2720, pricePerServing: 190 }
    ],
    nutrition: {
      servingSize: '1 Twin-Pack (40g)',
      servingsPerContainer: 12,
      calories: 160,
      protein: 18,
      bcaas: 3.2,
      sugar: 1,
      totalFat: 6,
      saturatedFat: 2.0,
      carbohydrates: 6,
      dietaryFiber: 3
    },
    coaBatchNumber: 'APX-WAF-8422',
    isNew: true,
    inStock: true,
    dietaryTags: ['Quad-Layer Wafer', 'Ultra-Low Sugar 1g', 'Informed-Sport Tested', 'Crisp Snap Texture', 'No Heavy Fillers'],
    description: 'Four ultra-thin golden wafer layers laminated with protein-infused velvety chocolate cream. The ultimate light post-workout treat.',
    longDescription: 'Engineered for athletes tired of dense, jaw-fatiguing protein bars. Offers a light, delicate pastry snap with 18g high-bioavailability protein.',
    manufacturingCircuit: 'Continuous Multi-Deck Wafer Baking Oven'
  },
  {
    id: 'apex-soft-baked-macro-cookie',
    slug: 'apex-triple-dark-chocolate-macro-cookie',
    name: 'APEX TRIPLE DARK CHOCOLATE MACRO COOKIE',
    subtitle: 'Bakery-Style Soft-Baked Cookie Infused with 24g Protein and Prebiotic Chicory Fiber',
    badge: 'FRESH BAKED',
    badgeType: 'primary',
    category: 'snacks',
    categoryLabel: 'Protein Snack Packs',
    rating: 4.97,
    reviewCount: 654,
    price: 2639,
    originalPrice: 3199,
    subscriptionPrice: 2243,
    image: IMAGES['Artisanal soft-baked macro cookie with dark chocolate chips inside premium modern packaging from Apex Fuel, set against clean concrete studio background.'],
    galleryImages: [
      IMAGES['Artisanal soft-baked macro cookie with dark chocolate chips inside premium modern packaging from Apex Fuel, set against clean concrete studio background.'],
      IMAGES['Soft-Baked Protein Cookie 12-pack retail box and single wrapper, fresh baked high protein snack presentation, minimal athletic branding in high-key photography.']
    ],
    macros: {
      protein: '24g',
      bcaa: '4.4g',
      sugar: '3g',
      calories: '220',
      carbs: '14g',
      fat: '6g'
    },
    flavors: [
      { id: 'triple-dark-chocolate', name: 'Dark Dutch Cacao Chunks', color: '#1a0e08', inStock: true, notes: 'Dense chocolate cookie dough loaded with melting 72% chocolate drops', tasteProfile: 'Decadent & Moist' },
      { id: 'salted-caramel-pecan', name: 'Sea Salted Caramel Pecan', color: '#b9770e', inStock: true, notes: 'Soft brown butter cookie packed with buttery pecan chips', tasteProfile: 'Warm Caramel Butter' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 INDIVIDUAL COOKIES (12 x 75g)', weight: '900g', servings: 12, price: 2639, originalPrice: 3199, pricePerServing: 220 }
    ],
    nutrition: {
      servingSize: '1 Cookie (75g)',
      servingsPerContainer: 12,
      calories: 220,
      protein: 24,
      bcaas: 4.4,
      sugar: 3,
      totalFat: 6,
      saturatedFat: 2.5,
      carbohydrates: 14,
      dietaryFiber: 10,
      iron: 3.2
    },
    coaBatchNumber: 'APX-CKI-9014',
    isNew: true,
    inStock: true,
    dietaryTags: ['Soft-Baked In Small Batches', '10g Prebiotic Fiber', 'Non-GMO', '24g Complete Protein', 'Soy-Free'],
    description: 'Thick, moist bakery-fresh cookie formulated with 24g CFM whey and milk protein, rich prebiotic fiber, and gourmet chocolate chunks.',
    longDescription: 'Bake-stable protein encapsulation prevents the protein matrix from turning dry or chalky during the baking cycle. Melts in your mouth when warmed for 8 seconds.',
    manufacturingCircuit: 'Batch Tunnel Oven Moist Baking'
  },

  // ==========================================
  // 5 NEW CRISPY PROTEIN BARS FORMULATIONS
  // ==========================================
  {
    id: 'apex-peanut-butter-fudge-bar',
    slug: 'apex-crunch-roasted-peanut-butter-fudge-bar',
    name: 'APEX CRUNCH ROASTED PEANUT BUTTER FUDGE BAR',
    subtitle: 'Triple-Layer Whey Crisp Base with Slow-Roasted Peanut Butter & Dark Cacao Glaze',
    badge: 'TOP RATED',
    badgeType: 'primary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.98,
    reviewCount: 882,
    price: 2799,
    originalPrice: 3360,
    subscriptionPrice: 2379,
    image: IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo'],
    galleryImages: [
      IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo'],
      IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo']
    ],
    macros: {
      protein: '22g',
      bcaa: '4.8g',
      sugar: '1g',
      calories: '210',
      carbs: '12g',
      fat: '7g'
    },
    flavors: [
      { id: 'creamy-pb-fudge', name: 'Valdosta Roasted Peanut Butter', color: '#c67d00', inStock: true, notes: 'Golden Georgia roasted peanut butter with crisp whey puffs', tasteProfile: 'Savory Sweet PB' },
      { id: 'crunchy-almond-toffee', name: 'Toasted Almond Butter Crunch', color: '#8d6e63', inStock: true, notes: 'Slow-roasted almonds with brittle toffee crunch crisps', tasteProfile: 'Toasty Nutty' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 BARS (12 x 64g)', weight: '768g', servings: 12, price: 2799, originalPrice: 3360, pricePerServing: 234 },
      { id: '24pk', label: '24-BAR DUAL PACK (2 x 12PK)', weight: '1.54kg', servings: 24, price: 5039, originalPrice: 6399, pricePerServing: 210 }
    ],
    nutrition: {
      servingSize: '1 Bar (64g)',
      servingsPerContainer: 12,
      calories: 210,
      protein: 22,
      bcaas: 4.8,
      sugar: 1,
      totalFat: 7,
      saturatedFat: 2.0,
      carbohydrates: 12,
      dietaryFiber: 8,
      sodium: 140
    },
    coaBatchNumber: 'APX-BAR-4911',
    isNew: true,
    inStock: true,
    dietaryTags: ['Triple-Layer Architecture', 'Real Peanut Butter', 'Zero Trans Fats', 'Informed-Sport Screened', 'No Gelatin'],
    description: 'An athletic triumph in texture: crisp whey protein crisps layered with velvety roasted peanut butter and dipped in dark chocolate fudge.',
    longDescription: 'Engineered with a triple-layer texture that resists melting in gym bags up to 90°F. Contains zero cheap collagen fillers—every gram of protein comes from premium dairy isolates.',
    manufacturingCircuit: 'Tri-Extrusion Lamination & Enrobing Tunnel'
  },
  {
    id: 'apex-white-choc-macadamia-bar',
    slug: 'apex-white-chocolate-macadamia-crunch-bar',
    name: 'APEX WHITE CHOCOLATE MACADAMIA CRUNCH BAR',
    subtitle: 'Roasted Hawaiian Macadamias & Golden Whey Crisps Cloaked in Pure Cacao Butter White Coating',
    badge: 'PREMIUM NUTS',
    badgeType: 'secondary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.94,
    reviewCount: 395,
    price: 2959,
    originalPrice: 3520,
    subscriptionPrice: 2515,
    image: IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo'],
    galleryImages: [
      IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo'],
      IMAGES['Array of unwrapped chocolate and peanut butter crispy athletic protein bars arranged cleanly on white studio surface']
    ],
    macros: {
      protein: '21g',
      bcaa: '4.2g',
      sugar: '2g',
      calories: '215',
      carbs: '11g',
      fat: '8g'
    },
    flavors: [
      { id: 'white-macadamia', name: 'Hawaiian Macadamia & Pure Vanilla', color: '#f5f5dc', inStock: true, notes: 'Buttery roasted macadamia nuts with real cacao butter white coating', tasteProfile: 'Silky Buttercream' },
      { id: 'white-pistachio', name: 'Sicilian Pistachio & Sea Salt', color: '#a5d6a7', inStock: true, notes: 'Crushed raw Sicilian pistachios with pink Himalayan salt', tasteProfile: 'Nutty & Refined' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 BARS (12 x 65g)', weight: '780g', servings: 12, price: 2959, originalPrice: 3520, pricePerServing: 246 }
    ],
    nutrition: {
      servingSize: '1 Bar (65g)',
      servingsPerContainer: 12,
      calories: 215,
      protein: 21,
      bcaas: 4.2,
      sugar: 2,
      totalFat: 8,
      saturatedFat: 3.0,
      carbohydrates: 11,
      dietaryFiber: 7
    },
    coaBatchNumber: 'APX-BAR-7714',
    isNew: true,
    inStock: true,
    dietaryTags: ['Hawaiian Macadamias', 'Pure Cacao Butter Coating', 'Zero High-Fructose Corn Syrup', 'Informed-Sport'],
    description: 'Gourmet roasted macadamia nuts embedded in light whey crisps and enveloped in pure cacao butter white chocolate.',
    longDescription: 'We replace cheap palm oil coatings with genuine deodorized cacao butter and Bourbon vanilla, delivering an opulent melt-in-the-mouth sensation with 21g high-potency protein.',
    manufacturingCircuit: 'Precision Temperature Controlled Enrobing'
  },
  {
    id: 'apex-salted-caramel-crisp-bar',
    slug: 'apex-sea-salt-dulce-de-leche-crisp-bar',
    name: 'APEX SEA SALT DULCE DE LECHE CRISP BAR',
    subtitle: 'Gooey Sea Salt Caramel Layer, Whey Isolate Crisps & 55% Cocoa Coating',
    badge: 'GOOEY CORE',
    badgeType: 'tertiary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.96,
    reviewCount: 524,
    price: 2799,
    originalPrice: 3360,
    subscriptionPrice: 2379,
    image: IMAGES['Modern display box of 12 Apex Triple Crunch Bars with high protein chocolate crisps visible in a cross-section bar render, high contrast studio lighting.'],
    galleryImages: [
      IMAGES['Modern display box of 12 Apex Triple Crunch Bars with high protein chocolate crisps visible in a cross-section bar render, high contrast studio lighting.'],
      IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo']
    ],
    macros: {
      protein: '20g',
      bcaa: '4.0g',
      sugar: '1g',
      calories: '205',
      carbs: '13g',
      fat: '6.5g'
    },
    flavors: [
      { id: 'salted-caramel', name: 'Maldon Sea Salt Dulce De Leche', color: '#c57d2a', inStock: true, notes: 'Gooey caramel ribbon sprinkled with flaky British Maldon sea salt', tasteProfile: 'Salty & Sweet' },
      { id: 'espresso-caramel', name: 'Italian Espresso Caramel Swirl', color: '#5d4037', inStock: true, notes: 'Roasted dark roast espresso infused directly into the caramel core', tasteProfile: 'Coffee Caramel' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 BARS (12 x 62g)', weight: '744g', servings: 12, price: 2799, originalPrice: 3360, pricePerServing: 234 }
    ],
    nutrition: {
      servingSize: '1 Bar (62g)',
      servingsPerContainer: 12,
      calories: 205,
      protein: 20,
      bcaas: 4.0,
      sugar: 1,
      totalFat: 6.5,
      saturatedFat: 2.2,
      carbohydrates: 13,
      dietaryFiber: 8,
      sodium: 170
    },
    coaBatchNumber: 'APX-BAR-8820',
    isNew: true,
    inStock: true,
    dietaryTags: ['Maldon Sea Salt', 'Gooey Layer Technology', 'Gluten-Free Certified', 'Zero Collagen Filler', 'Clean Macros'],
    description: 'An indulgent gooey salted caramel core flowing over golden whey crisps, coated in silky 55% cocoa dark chocolate.',
    longDescription: 'Features our proprietary slow-flow caramel ribbon that stays soft and decadent even when refrigerated. Formulated with 20g protein and only 1g natural sugar.',
    manufacturingCircuit: 'Continuous Dual-Layer Sheeting & Depositing'
  },
  {
    id: 'apex-lemon-poppyseed-bar',
    slug: 'apex-glazed-lemon-poppyseed-crunch-bar',
    name: 'APEX GLAZED LEMON POPPYSEED CRUNCH BAR',
    subtitle: 'Zesty Sorrento Lemon Zest, Organic Blue Poppy Seeds & Crispy Native Milk Protein',
    badge: 'ZESTY & BRIGHT',
    badgeType: 'primary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.91,
    reviewCount: 310,
    price: 2719,
    originalPrice: 3200,
    subscriptionPrice: 2311,
    image: IMAGES['Male athlete eating an Apex crisp protein bar on running track bleachers in morning sunrise light'],
    galleryImages: [
      IMAGES['Male athlete eating an Apex crisp protein bar on running track bleachers in morning sunrise light'],
      IMAGES['Modern display box of 12 Apex Triple Crunch Bars with high protein chocolate crisps visible in a cross-section bar render, high contrast studio lighting.']
    ],
    macros: {
      protein: '20g',
      bcaa: '3.9g',
      sugar: '2g',
      calories: '195',
      carbs: '12g',
      fat: '5g'
    },
    flavors: [
      { id: 'sorrento-lemon', name: 'Sorrento Lemon Glaze & Poppyseed', color: '#fbc02d', inStock: true, notes: 'Cold-pressed Italian lemon oil with nutty poppy seeds and sweet glaze', tasteProfile: 'Bright Citrus' },
      { id: 'key-lime-graham', name: 'Key Lime & Graham Crisp', color: '#c0ca33', inStock: true, notes: 'Tangy Florida key lime curd ribbon with golden gluten-free biscuit crunch', tasteProfile: 'Tart & Sweet' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 BARS (12 x 60g)', weight: '720g', servings: 12, price: 2719, originalPrice: 3200, pricePerServing: 226 }
    ],
    nutrition: {
      servingSize: '1 Bar (60g)',
      servingsPerContainer: 12,
      calories: 195,
      protein: 20,
      bcaas: 3.9,
      sugar: 2,
      totalFat: 5,
      saturatedFat: 1.8,
      carbohydrates: 12,
      dietaryFiber: 7
    },
    coaBatchNumber: 'APX-BAR-3109',
    isNew: true,
    inStock: true,
    dietaryTags: ['Real Lemon Zest', 'Zero Chalky Aftertaste', 'Clean Protein Blend', 'No Sucralose', 'Non-GMO'],
    description: 'Refreshing Mediterranean citrus profile with real cold-pressed Sorrento lemon oil, poppy seeds, and a golden glaze coating.',
    longDescription: 'A breath of fresh air in a market dominated by heavy chocolate and peanut butter bars. Crisp, light, and tangy with 20g clean bioavailable dairy protein.',
    manufacturingCircuit: 'Citrus Essential Oil Cold Infusion & Enrobing'
  },
  {
    id: 'apex-dark-cacao-peppermint-bar',
    slug: 'apex-85-dark-cacao-peppermint-bark-bar',
    name: 'APEX 85% DARK CACAO PEPPERMINT BARK BAR',
    subtitle: 'Rich 85% Raw Ecuadorian Cacao, Peppermint Oil & Multi-Layer Protein Crunch',
    badge: '85% RAW CACAO',
    badgeType: 'secondary',
    category: 'bars',
    categoryLabel: 'Crispy Protein Bars',
    rating: 4.95,
    reviewCount: 441,
    price: 2879,
    originalPrice: 3439,
    subscriptionPrice: 2447,
    image: IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo'],
    galleryImages: [
      IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo'],
      IMAGES['Array of unwrapped chocolate and peanut butter crispy athletic protein bars arranged cleanly on white studio surface']
    ],
    macros: {
      protein: '22g',
      bcaa: '4.6g',
      sugar: '1g',
      calories: '205',
      carbs: '10g',
      fat: '6.5g'
    },
    flavors: [
      { id: 'peppermint-bark', name: 'Alpine Winter Peppermint Bark', color: '#1b5e20', inStock: true, notes: 'Steam-distilled Oregon peppermint oil folded into deep dark chocolate crisps', tasteProfile: 'Cool Mint & Dark Cacao' },
      { id: 'black-cherry-cacao', name: 'Oregon Black Cherry Cacao', color: '#880e4f', inStock: true, notes: 'Tart dried black cherry pieces with deep 85% chocolate crunch', tasteProfile: 'Berry Cacao' }
    ],
    sizes: [
      { id: '12pk', label: 'BOX OF 12 BARS (12 x 64g)', weight: '768g', servings: 12, price: 2879, originalPrice: 3439, pricePerServing: 240 }
    ],
    nutrition: {
      servingSize: '1 Bar (64g)',
      servingsPerContainer: 12,
      calories: 205,
      protein: 22,
      bcaas: 4.6,
      sugar: 1,
      totalFat: 6.5,
      saturatedFat: 2.8,
      carbohydrates: 10,
      dietaryFiber: 8,
      iron: 2.8
    },
    coaBatchNumber: 'APX-BAR-6291',
    isNew: true,
    inStock: true,
    dietaryTags: ['85% Raw Cacao', 'Natural Peppermint Oil', 'Keto Friendly', 'Clean HPLC Verified', 'Dairy Isolate'],
    description: 'Deep, rich dark chocolate bark experience with crisp protein crisps, Ecuadorian cacao, and refreshing steam-distilled mint.',
    longDescription: 'High in natural cacao flavonols and polyphenols to support nitric oxide vascular tone and mental focus, combined with 22g complete muscle-recovery protein.',
    manufacturingCircuit: 'Raw Cacao Bean Stone Refining & Cold Pressing'
  },

  // ==========================================
  // 5 NEW WHEY & PLANT POWDERS FORMULATIONS
  // ==========================================
  {
    id: 'apex-irish-grass-fed-whey',
    slug: 'apex-100-irish-grass-fed-whey-concentrate',
    name: 'APEX 100% IRISH GRASS-FED WHEY CONCENTRATE',
    subtitle: 'Pasture-Raised Irish Dairy Whey 80% • Rich in Natural Immunoglobulins & Lactoferrin',
    badge: '100% PASTURE RAISED',
    badgeType: 'primary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.97,
    reviewCount: 712,
    price: 4399,
    originalPrice: 5199,
    subscriptionPrice: 3739,
    image: IMAGES['A 5lb heavy duty gusset bag of Apex Pro Whey Isolate Dark Belgian Cocoa Fudge with athletic volt accents and lab batch certificate badge'],
    galleryImages: [
      IMAGES['A 5lb heavy duty gusset bag of Apex Pro Whey Isolate Dark Belgian Cocoa Fudge with athletic volt accents and lab batch certificate badge'],
      IMAGES['Heavy-duty 5 pound bulk tub of Apex Pro Whey Isolate sports nutrition protein, premium industrial black container with high contrast volt lime lettering, clean minimalist white studio backdrop.']
    ],
    macros: {
      protein: '26g',
      bcaa: '5.8g',
      sugar: '1.5g',
      calories: '130',
      carbs: '2g',
      fat: '1.8g'
    },
    flavors: [
      { id: 'sweet-cream-vanilla', name: 'Irish Sweet Cream Vanilla', color: '#f5f5dc', inStock: true, notes: 'Golden churned sweet cream with fragrant vanilla bean pod', tasteProfile: 'Rich & Churned' },
      { id: 'rich-cocoa', name: 'Kerry Gold Cacao Fudge', color: '#3e2723', inStock: true, notes: 'European roasted cacao with deep whole-milk undertones', tasteProfile: 'Velvety & Full' },
      { id: 'unflavored-pasture', name: 'Pure Pasture Raw Unflavored', color: '#f5f5f5', inStock: true, notes: 'Zero sweeteners, zero flavors—100% non-denatured grass-fed whey', tasteProfile: 'Neutral & Clean' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB (28 SERVINGS)', weight: '908g', servings: 28, price: 4399, originalPrice: 5199, pricePerServing: 157 },
      { id: '5lb', label: '5 LB BULK TUB (70 SERVINGS)', weight: '2.27kg', servings: 70, price: 8799, originalPrice: 10399, pricePerServing: 126 }
    ],
    nutrition: {
      servingSize: '1 Scoop (32g)',
      servingsPerContainer: 28,
      calories: 130,
      protein: 26,
      bcaas: 5.8,
      sugar: 1.5,
      totalFat: 1.8,
      saturatedFat: 0.8,
      carbohydrates: 2,
      calcium: 160
    },
    coaBatchNumber: 'APX-WPC-8012',
    isNew: true,
    inStock: true,
    dietaryTags: ['Irish Grass-Fed Guaranteed', 'Non-Denatured WPC80', 'rBGH & Hormone Free', 'Sunflower Lecithin Only'],
    description: 'Sourced exclusively from small family farms in County Cork, Ireland. Pasture-raised 300+ days per year for optimal CLA and immunoglobulin density.',
    longDescription: 'Low-temperature ultrafiltration preserves delicate bio-fractions including immunoglobulins, lactoferrin, and bovine serum albumin for superior gut health and immune defense.',
    manufacturingCircuit: 'Low-Temperature Tangential Membrane Ultrafiltration'
  },
  {
    id: 'apex-bio-fermented-plant-isolate',
    slug: 'apex-bio-fermented-7-source-plant-isolate',
    name: 'APEX BIO-FERMENTED 7-SOURCE PLANT ISOLATE',
    subtitle: 'Fermented Yellow Pea, Sprouted Brown Rice, Sacha Inchi, Pumpkin & Watermelon Seed Protein',
    badge: 'BIO-FERMENTED',
    badgeType: 'tertiary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.93,
    reviewCount: 540,
    price: 4239,
    originalPrice: 5039,
    subscriptionPrice: 3603,
    image: IMAGES['Raw Plant Fuel botanical protein canister in earthy sage green and matte white packaging, clean studio setting with organic botanical accents and studio illumination.'],
    galleryImages: [
      IMAGES['Raw Plant Fuel botanical protein canister in earthy sage green and matte white packaging, clean studio setting with organic botanical accents and studio illumination.'],
      IMAGES['Matte dark olive and carbon black tub of Apex Raw Plant Fuel vegan protein powder, set on a modern architectural concrete surface with subtle plant shadows.']
    ],
    macros: {
      protein: '28g',
      bcaa: '5.2g',
      sugar: '0g',
      calories: '135',
      carbs: '1g',
      fat: '1.5g'
    },
    flavors: [
      { id: 'vanilla-chai-botanical', name: 'Vanilla Cardamom Spiced Chai', color: '#d7ccc8', inStock: true, notes: 'Crushed green cardamom pods with organic Bourbon vanilla and cinnamon', tasteProfile: 'Warm Chai Spice' },
      { id: 'salted-dark-cocoa', name: 'Roasted Cacao & Himalayan Salt', color: '#4e342e', inStock: true, notes: 'Dutch processed cacao with pink rock salt to cut plant earthiness', tasteProfile: 'Smooth Dark Chocolate' },
      { id: 'golden-turmeric', name: 'Ayurvedic Golden Chai Milk', color: '#ffd54f', inStock: true, notes: 'Organic turmeric curcumin with black pepper extract and ginger', tasteProfile: 'Earthy Golden Milk' }
    ],
    sizes: [
      { id: '2.2lb', label: '2.2 LB TUB (30 SERVINGS)', weight: '1kg', servings: 30, price: 4239, originalPrice: 5039, pricePerServing: 142 },
      { id: '4.4lb', label: '4.4 LB BULK TUB (60 SERVINGS)', weight: '2kg', servings: 60, price: 7759, originalPrice: 9199, pricePerServing: 130 }
    ],
    nutrition: {
      servingSize: '1 Scoop (34g)',
      servingsPerContainer: 30,
      calories: 135,
      protein: 28,
      bcaas: 5.2,
      sugar: 0,
      totalFat: 1.5,
      saturatedFat: 0.2,
      carbohydrates: 1,
      dietaryFiber: 2,
      iron: 4.5
    },
    coaBatchNumber: 'APX-PLT-9304',
    isNew: true,
    inStock: true,
    dietaryTags: ['7 Bio-Fermented Plants', 'Complete Amino Score 1.0 PDCAAS', 'Zero Grittiness', 'Enzyme Enhanced', 'Vegan Certified'],
    description: 'Breakthrough 7-seed and legume blend bio-fermented with Lactobacillus to eliminate phytates, anti-nutrients, and plant grittiness.',
    longDescription: 'Achieves a complete 1.0 PDCAAS score equivalent to gold-standard whey isolate. Zero bloating, instant cold-water dispersion, and rich in natural plant minerals.',
    manufacturingCircuit: 'Lactobacillus Probiotic Fermentation & Enzyme Hydrolysis'
  },
  {
    id: 'apex-egg-white-peptide-powder',
    slug: 'apex-crystalline-egg-white-peptide-isolate',
    name: 'APEX CRYSTALLINE EGG WHITE PEPTIDE ISOLATE',
    subtitle: '100% Pure Non-GMO Egg Albumen Protein • Dairy-Free Complete PDCAAS 1.0 Bioavailability',
    badge: '100% DAIRY FREE',
    badgeType: 'secondary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.96,
    reviewCount: 385,
    price: 4719,
    originalPrice: 5599,
    subscriptionPrice: 4011,
    image: IMAGES['Minimalist clinical supplement packaging of Apex Hydrolyzed Whey Isolate in a matte white tub with bold black typography, bright volt lime badge accent, displayed on a sterile concrete pedestal in soft studio lighting.'],
    galleryImages: [
      IMAGES['Minimalist clinical supplement packaging of Apex Hydrolyzed Whey Isolate in a matte white tub with bold black typography, bright volt lime badge accent, displayed on a sterile concrete pedestal in soft studio lighting.'],
      IMAGES['Modern sleek matte black tub of Apex Pro Whey Isolate Vanilla Bean on clean bright white concrete athletic studio stage with subtle yellow volt neon rim lighting, high resolution product photography']
    ],
    macros: {
      protein: '28g',
      bcaa: '5.6g',
      sugar: '0g',
      calories: '120',
      carbs: '< 1g',
      fat: '0g'
    },
    flavors: [
      { id: 'bourbon-vanilla', name: 'Bourbon French Vanilla Cream', color: '#fff9c4', inStock: true, notes: 'Silky smooth vanilla bean without eggy aftertaste', tasteProfile: 'Silky & Custardy' },
      { id: 'dutch-chocolate', name: 'Pure Dutch Chocolate Silk', color: '#3e2723', inStock: true, notes: 'Heavy dark cocoa powder masking natural albumen aroma', tasteProfile: 'Dense Cocoa' },
      { id: 'unflavored-albumen', name: 'Pure Crystalline Albumen', color: '#fafafa', inStock: true, notes: '100% unflavored egg whites for culinary baking and savory shakes', tasteProfile: 'Neutral & Clean' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB (28 SERVINGS)', weight: '908g', servings: 28, price: 4719, originalPrice: 5599, pricePerServing: 169 },
      { id: '4lb', label: '4 LB TUB (56 SERVINGS)', weight: '1.81kg', servings: 56, price: 8399, originalPrice: 9999, pricePerServing: 150 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (31g)',
      servingsPerContainer: 28,
      calories: 120,
      protein: 28,
      bcaas: 5.6,
      sugar: 0,
      totalFat: 0,
      saturatedFat: 0,
      carbohydrates: 0.5,
      sodium: 320,
      potassium: 380
    },
    coaBatchNumber: 'APX-EGG-7740',
    isNew: true,
    inStock: true,
    dietaryTags: ['100% Dairy & Lactose Free', 'Zero Fat Zero Cholesterol', 'Informed-Sport Tested', 'Paleo & Keto Approved'],
    description: 'Ultra-pure pasteurized egg white albumen crystallites providing the purest non-dairy animal protein source on Earth.',
    longDescription: 'Zero dairy, zero lactose, zero fat, zero cholesterol. Completely bioavailable with high sulfur-containing amino acids (methionine and cysteine) for glutathione production and tissue regeneration.',
    manufacturingCircuit: 'Continuous Pasteurization & Low-Temperature Spray Crystallization'
  },
  {
    id: 'apex-hydrolyzed-collagen-whey-hybrid',
    slug: 'apex-collagen-whey-isolate-hybrid',
    name: 'APEX TYPE I & III COLLAGEN + WHEY ISOLATE HYBRID',
    subtitle: 'Fortigel® Bioactive Collagen Peptides 10g + CFM Whey Isolate 20g • Joint, Tendon & Hypertrophy Matrix',
    badge: 'JOINT & TENDON',
    badgeType: 'primary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.95,
    reviewCount: 620,
    price: 5039,
    originalPrice: 5999,
    subscriptionPrice: 4283,
    image: IMAGES['Clear modern supplement jar containing translucent light yellow Clear Whey Hydrolysate Citrus powder with fresh sliced lemons beside packaging, high key studio shot'],
    galleryImages: [
      IMAGES['Clear modern supplement jar containing translucent light yellow Clear Whey Hydrolysate Citrus powder with fresh sliced lemons beside packaging, high key studio shot'],
      IMAGES['Apex Clear Whey Hydrolysate 2lb tub Watermelon Splash flavor vibrant athletic studio lighting clean transparent packaging design']
    ],
    macros: {
      protein: '30g',
      bcaa: '5.4g',
      sugar: '0g',
      calories: '130',
      carbs: '0g',
      fat: '0.5g'
    },
    flavors: [
      { id: 'strawberry-hibiscus', name: 'Wild Alpine Strawberry & Hibiscus', color: '#e91e63', inStock: true, notes: 'Crisp fruity refresher that dissolves completely crystal-clear', tasteProfile: 'Tart & Refreshing' },
      { id: 'citrus-tangerine', name: 'Crisp Sunburst Citrus', color: '#ff9800', inStock: true, notes: 'Bright sun-ripened orange and tangerine zest', tasteProfile: 'Zesty Citrus' },
      { id: 'pure-unflavored', name: 'Crystal Clear Unflavored', color: '#eeeeee', inStock: true, notes: 'Zero color, zero flavor, mixes instantly into morning coffee or electrolyte drinks', tasteProfile: 'Neutral' }
    ],
    sizes: [
      { id: '2.2lb', label: '2.2 LB TUB (30 SERVINGS)', weight: '1kg', servings: 30, price: 5039, originalPrice: 5999, pricePerServing: 168 }
    ],
    nutrition: {
      servingSize: '1 Scoop (33g)',
      servingsPerContainer: 30,
      calories: 130,
      protein: 30,
      bcaas: 5.4,
      sugar: 0,
      totalFat: 0.5,
      saturatedFat: 0,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-COL-4829',
    isNew: true,
    inStock: true,
    dietaryTags: ['Fortigel® Bioactive Peptides', 'Type I & III Peptides', 'Instant CFM Dissolution', 'Clinically Dosed 10g Collagen', 'NSF Certified'],
    description: 'Synergistic formulation combining 10g clinically validated Fortigel® bioactive collagen peptides with 20g CFM whey isolate.',
    longDescription: 'Targets both muscle hypertrophy via mTOR and connective tissue remodeling via collagen synthesis. Proven in clinical human trials to stimulate extracellular matrix repair in competitive athletes.',
    manufacturingCircuit: 'Targeted Enzymatic Peptide Cleaving & Micro-Encapsulation'
  },
  {
    id: 'apex-dual-velocity-micellar-whey',
    slug: 'apex-dual-velocity-cfm-hybrid-whey-matrix',
    name: 'APEX DUAL-VELOCITY CFM HYBRID WHEY MATRIX',
    subtitle: '50% Ultra-Rapid Hydrolyzed Whey + 50% Native Micellar Casein • 8-Hour Sustained Amino Acid Curve',
    badge: 'DUAL VELOCITY',
    badgeType: 'secondary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.98,
    reviewCount: 789,
    price: 5359,
    originalPrice: 6399,
    subscriptionPrice: 4555,
    image: IMAGES['Matte midnight navy and graphite tub of Apex Night Micellar Casein, presented in deep calm lighting with sharp silver and volt typography.'],
    galleryImages: [
      IMAGES['Matte midnight navy and graphite tub of Apex Night Micellar Casein, presented in deep calm lighting with sharp silver and volt typography.'],
      IMAGES['Night Micellar Casein deep navy matte tub supplement with sleek minimalist typography, glowing accent light, high-end pharmaceutical fitness aesthetic on neutral concrete.']
    ],
    macros: {
      protein: '30g',
      bcaa: '6.0g',
      sugar: '0g',
      calories: '135',
      carbs: '1g',
      fat: '0.5g'
    },
    flavors: [
      { id: 'midnight-chocolate', name: 'Midnight Triple Dutch Chocolate', color: '#1f130e', inStock: true, notes: 'Heavy dark cocoa with slow-thickening velvety pudding mouthfeel', tasteProfile: 'Decadent & Creamy' },
      { id: 'vanilla-custard', name: 'Bourbon Vanilla Custard', color: '#fff59d', inStock: true, notes: 'Silky warm vanilla pudding with sweet cream highlights', tasteProfile: 'Rich & Silky' },
      { id: 'banana-cream', name: 'Cavendish Banana Cream Pudding', color: '#ffee58', inStock: true, notes: 'Real ripe banana essence with rich bakery custard finish', tasteProfile: 'Creamy Fruit' }
    ],
    sizes: [
      { id: '2.5lb', label: '2.5 LB TUB (32 SERVINGS)', weight: '1.13kg', servings: 32, price: 5359, originalPrice: 6399, pricePerServing: 167 },
      { id: '5lb', label: '5 LB BULK (64 SERVINGS)', weight: '2.27kg', servings: 64, price: 9999, originalPrice: 11999, pricePerServing: 156 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (35g)',
      servingsPerContainer: 32,
      calories: 135,
      protein: 30,
      bcaas: 6.0,
      sugar: 0,
      totalFat: 0.5,
      saturatedFat: 0.2,
      carbohydrates: 1,
      calcium: 290
    },
    coaBatchNumber: 'APX-HYB-9901',
    isNew: true,
    inStock: true,
    dietaryTags: ['50/50 Rapid & Sustained Release', 'Cold Microfiltered Ceramic', '8-Hour mTOR Elevation', 'Informed-Sport Screened'],
    description: 'The pinnacle anabolic matrix: rapid di- and tri-peptides from hydrolyzed whey combined with steady, slow-digesting micellar casein.',
    longDescription: 'Spikes plasma leucine levels within 20 minutes to trigger muscle protein synthesis, followed by an unbroken 8-hour anti-catabolic amino acid stream. Ideal for bedtime recovery or long gaps between meals.',
    manufacturingCircuit: 'Dual-Phase Ceramic Microfiltration & Enzymatic Hydrolysis'
  },
  // ==========================================
  // FUNCTIONAL & ENERGY DRINKS CATEGORY
  // (Energy Drinks, Protein Drinks & Probiotic Drinks)
  // ==========================================
  {
    id: 'apex-nitro-voltage-energy',
    slug: 'apex-nitro-voltage-nootropic-energy-drink',
    name: 'APEX NITRO VOLTAGE NOOTROPIC ENERGY DRINK',
    subtitle: '200mg PurCaf® Green Coffee Caffeine + 250mg Cognizin® Citicoline + L-Theanine • Zero Sugar',
    badge: 'ZERO CRASH',
    badgeType: 'primary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.97,
    reviewCount: 618,
    price: 2959,
    originalPrice: 3520,
    subscriptionPrice: 2515,
    image: '/images/products/apex-energy-drink.jpg',
    galleryImages: [
      '/images/products/apex-energy-drink.jpg',
      IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.']
    ],
    macros: {
      protein: '0g',
      bcaa: '1.5g',
      sugar: '0g',
      calories: '10',
      carbs: '1g',
      fat: '0g'
    },
    flavors: [
      { id: 'electric-citrus', name: 'Electric Citrus Lime', color: '#c6ff00', inStock: true, notes: 'Sharp Key lime with zesty Meyer lemon and carbonated snap', tasteProfile: 'Electric Tart' },
      { id: 'blue-raspberry', name: 'Hyper Blue Raspberry', color: '#00e5ff', inStock: true, notes: 'Refreshing mountain raspberry with clean crisp finish', tasteProfile: 'Crisp & Sweet' },
      { id: 'midnight-cherry', name: 'Obsidian Black Cherry', color: '#b71c1c', inStock: true, notes: 'Deep Bing cherry essence with subtle botanical bitters', tasteProfile: 'Bold Cherry' }
    ],
    sizes: [
      { id: '12pk', label: '12-CAN SLIM PACK (12 x 12 fl oz)', weight: '4.26L (9.4 lbs)', servings: 12, price: 2959, originalPrice: 3520, pricePerServing: 246 },
      { id: '24pk', label: '24-CAN PRO CRATE (24 x 12 fl oz)', weight: '8.52L (18.8 lbs)', servings: 24, price: 5519, originalPrice: 6720, pricePerServing: 230 }
    ],
    nutrition: {
      servingSize: '1 Can (355mL / 12 fl oz)',
      servingsPerContainer: 12,
      calories: 10,
      protein: 0,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 1,
      sodium: 120,
      potassium: 150
    },
    coaBatchNumber: 'APX-NRG-9941',
    isNew: true,
    inStock: true,
    dietaryTags: ['200mg PurCaf® Natural Caffeine', 'Cognizin® Citicoline', 'Zero Sugar Zero Calorie', 'Informed-Sport Certified', 'Keto Approved'],
    description: 'High-performance nootropic energy beverage formulated with organic green coffee caffeine, Cognizin® citicoline, and L-theanine for laser cognitive focus without jitters or midday crashes.',
    longDescription: 'Traditional canned energy drinks spike your bloodstream with synthetic caffeine and excess sugars, resulting in severe adrenaline depletion. Apex Nitro Voltage pairs 200mg of organic botanical caffeine with Alpha-GPC and electrolytes to sustain cerebral blood flow, peak reaction velocity, and motor coordination.',
    manufacturingCircuit: 'Sterile Nitrogen Tunnel Micro-Canning & Cold Carbonation'
  },
  {
    id: 'apex-clean-sparkling-adaptogen',
    slug: 'apex-clean-energy-sparkling-adaptogen',
    name: 'APEX CLEAN ENERGY ADAPTOGEN TONIC',
    subtitle: '150mg Wild Amazonian Guayusa + Siberian Ginseng + Himalayan Pink Salt • Zero Jitter',
    badge: 'CLEAN BOTANICAL',
    badgeType: 'tertiary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.93,
    reviewCount: 382,
    price: 2799,
    originalPrice: 3360,
    subscriptionPrice: 2379,
    image: IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.'],
    galleryImages: [
      IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.'],
      '/images/products/apex-energy-drink.jpg'
    ],
    macros: {
      protein: '0g',
      sugar: '0g',
      calories: '5',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'blood-orange-yuzu', name: 'Blood Orange Yuzu', color: '#ff6d00', inStock: true, notes: 'Sicilian blood orange with fragrant Japanese yuzu zest', tasteProfile: 'Tart & Citrusy' },
      { id: 'passionfruit-guava', name: 'Amazonian Passionfruit', color: '#ff4081', inStock: true, notes: 'Tropical passionfruit and guava blossom notes', tasteProfile: 'Exotic & Fruity' }
    ],
    sizes: [
      { id: '12pk', label: '12-CAN PACK (12 x 12 fl oz)', weight: '4.26L', servings: 12, price: 2799, originalPrice: 3360, pricePerServing: 234 }
    ],
    nutrition: {
      servingSize: '1 Can (355mL / 12 fl oz)',
      servingsPerContainer: 12,
      calories: 5,
      protein: 0,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 0,
      sodium: 140,
      potassium: 180
    },
    coaBatchNumber: 'APX-ADP-7719',
    isNew: true,
    inStock: true,
    dietaryTags: ['Wild Guayusa Leaf', 'Adaptogenic Eleuthero', 'Zero Sugar', 'Organic Botanicals', 'HPLC Verified'],
    description: 'Sparkling botanical adaptogen beverage brewed from hand-harvested wild Amazonian Guayusa leaves and Siberian Ginseng to promote steady, sustained cellular endurance.',
    longDescription: 'Guayusa contains a unique molecular matrix of caffeine, theobromine, and chlorogenic acids that metabolize smoothly over 5 hours without elevating cortisol or heart rate variability.',
    manufacturingCircuit: 'Continuous Botanical Hydro-Extraction & Micro-Filtration'
  },
  {
    id: 'apex-rtd-whey-isolate-shake',
    slug: 'apex-rtd-cold-filtered-isolate-shake',
    name: 'APEX RTD COLD-FILTERED WHEY ISOLATE SHAKE',
    subtitle: '32g Pure Microfiltered Protein • 0g Added Sugar • 100% Lactose-Free Ready-To-Drink',
    badge: '32G PURE PROTEIN',
    badgeType: 'primary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.98,
    reviewCount: 924,
    price: 3599,
    originalPrice: 4160,
    subscriptionPrice: 3059,
    image: '/images/products/apex-protein-drink.jpg',
    galleryImages: [
      '/images/products/apex-protein-drink.jpg',
      IMAGES['Athletic protein shaker bottle with creamy isolate shake inside, gym chalk and kettlebells softly blurred in background, high contrast editorial']
    ],
    macros: {
      protein: '32g',
      bcaa: '6.2g',
      sugar: '0g',
      calories: '150',
      carbs: '2g',
      fat: '1.5g'
    },
    flavors: [
      { id: 'dark-chocolate-silk', name: 'Double Dutch Dark Chocolate Silk', color: '#2b1d16', inStock: true, notes: 'European cold-pressed cocoa with thick velvet milkshake texture', tasteProfile: 'Rich & Silky' },
      { id: 'madagascar-vanilla', name: 'Bourbon Madagascar Vanilla Cream', color: '#fff8e1', inStock: true, notes: 'Aromatic Bourbon vanilla pod essence with creamy dairy finish', tasteProfile: 'Velvety & Smooth' },
      { id: 'cold-brew-latte', name: 'Nitro Cold Brew Mocha', color: '#3e2723', inStock: true, notes: 'Single-origin Colombian cold brew coffee with dark chocolate notes', tasteProfile: 'Robust Coffee' }
    ],
    sizes: [
      { id: '12pk', label: '12-BOTTLE CASE (12 x 14 fl oz / 414mL)', weight: '4.97L', servings: 12, price: 3599, originalPrice: 4160, pricePerServing: 300 },
      { id: '24pk', label: '24-BOTTLE DUAL CASE', weight: '9.94L', servings: 24, price: 6639, originalPrice: 7920, pricePerServing: 276 }
    ],
    nutrition: {
      servingSize: '1 Bottle (414mL / 14 fl oz)',
      servingsPerContainer: 12,
      calories: 150,
      protein: 32,
      bcaas: 6.2,
      sugar: 0,
      totalFat: 1.5,
      carbohydrates: 2,
      calcium: 420,
      potassium: 360
    },
    coaBatchNumber: 'APX-RTD-8824',
    isNew: true,
    inStock: true,
    dietaryTags: ['32g Complete CFM Isolate', '100% Lactose-Free', 'Zero Added Sugar', 'Informed-Sport Certified', 'Keto Friendly'],
    description: 'Ultra-premium shelf-stable ready-to-drink protein shake packing 32g of ceramic-microfiltered whey isolate with zero chalkiness, zero grittiness, and zero digestive distress.',
    longDescription: 'Formulated for immediate post-training muscle repair and on-the-go athlete convenience. Aseptic cold-fill processing ensures the milk proteins remain un-denatured while eliminating lactose and excess dairy fats.',
    manufacturingCircuit: 'Aseptic Cold Ultra-High Temperature (UHT) Micro-Bottling'
  },
  {
    id: 'apex-clear-protein-hydrator-rtd',
    slug: 'apex-clear-isolate-protein-hydrator-rtd',
    name: 'APEX CLEAR ISOLATE PROTEIN HYDRATOR',
    subtitle: '20g Crisp Whey Isolate Drink + Real Coconut Water Electrolytes • 100% Translucent & Light',
    badge: 'ZERO MILKY TEXTURE',
    badgeType: 'secondary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.94,
    reviewCount: 452,
    price: 3199,
    originalPrice: 3840,
    subscriptionPrice: 2719,
    image: IMAGES['Athlete pouring clear watermelon protein hydrolysate into icy glass tumbler post workout on stainless steel athletic table, high key commercial photography'],
    galleryImages: [
      IMAGES['Athlete pouring clear watermelon protein hydrolysate into icy glass tumbler post workout on stainless steel athletic table, high key commercial photography'],
      '/images/products/apex-protein-drink.jpg'
    ],
    macros: {
      protein: '20g',
      bcaa: '4.5g',
      sugar: '0g',
      calories: '90',
      carbs: '1g',
      fat: '0g'
    },
    flavors: [
      { id: 'watermelon-ice', name: 'Crisp Watermelon Ice', color: '#e91e63', inStock: true, notes: 'Sun-ripened summer watermelon with cool cucumber undertones', tasteProfile: 'Light & Crisp' },
      { id: 'lemon-lime-quencher', name: 'Electric Lemon Lime', color: '#c6ff00', inStock: true, notes: 'Bright thirst-quenching citrus with Himalayan mineral salt', tasteProfile: 'Zesty & Tart' },
      { id: 'tropical-punch', name: 'Hawaiian Island Punch', color: '#ff5722', inStock: true, notes: 'Pineapple, passionfruit, and guava fruit essence', tasteProfile: 'Fruity & Juicy' }
    ],
    sizes: [
      { id: '12pk', label: '12-BOTTLE CASE (12 x 16 fl oz / 473mL)', weight: '5.67L', servings: 12, price: 3199, originalPrice: 3840, pricePerServing: 266 }
    ],
    nutrition: {
      servingSize: '1 Bottle (473mL / 16 fl oz)',
      servingsPerContainer: 12,
      calories: 90,
      protein: 20,
      bcaas: 4.5,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 1,
      sodium: 160,
      potassium: 220
    },
    coaBatchNumber: 'APX-CLR-5502',
    isNew: true,
    inStock: true,
    dietaryTags: ['Crisp Translucent Isolate', 'Zero Milky Texture', '20g Pure Protein', 'Electrolyte Infused', 'Gluten-Free'],
    description: 'Thirst-quenching translucent fruit protein beverage combining 20g hydrolyzed clear whey isolate with isotonic coconut water minerals for rapid intra- and post-workout rehydration.',
    longDescription: 'Eliminates the thick, milky mouthfeel of traditional protein shakes. Drinks like an ice-cold sports drink while providing a full clinical dose of muscle-building essential amino acids.',
    manufacturingCircuit: 'Enzymatically Clarified Cold Isolate Micro-Blending'
  },
  {
    id: 'apex-bio-culture-gut-recovery',
    slug: 'apex-bio-culture-probiotic-recovery-tonic',
    name: 'APEX BIO-CULTURE PROBIOTIC RECOVERY DRINK',
    subtitle: '10 Billion CFU Spore Probiotics + 5g L-Glutamine + Organic Prebiotics • Gut Barrier Shield',
    badge: '10B LIVE SPORES',
    badgeType: 'primary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.96,
    reviewCount: 528,
    price: 3119,
    originalPrice: 3680,
    subscriptionPrice: 2651,
    image: '/images/products/apex-probiotic-drink.jpg',
    galleryImages: [
      '/images/products/apex-probiotic-drink.jpg',
      IMAGES['Clear modern supplement jar containing translucent light yellow Clear Whey Hydrolysate Citrus powder with fresh sliced lemons beside packaging, high key studio shot']
    ],
    macros: {
      protein: '5g',
      sugar: '1g',
      calories: '30',
      carbs: '3g',
      fat: '0g'
    },
    flavors: [
      { id: 'pink-grapefruit', name: 'Sparkling Ruby Red Grapefruit', color: '#f06292', inStock: true, notes: 'Crisp bitter-sweet ruby red grapefruit with micro-bubbles', tasteProfile: 'Citrus & Sparkling' },
      { id: 'ginger-lemongrass', name: 'Crisp Ginger Lemongrass', color: '#dce775', inStock: true, notes: 'Warm ginger root warmth balanced with fresh crushed lemongrass', tasteProfile: 'Warm & Zesty' },
      { id: 'blackberry-sage', name: 'Wild Mountain Blackberry Sage', color: '#4a148c', inStock: true, notes: 'Ripe tart blackberries with earthy botanical French sage', tasteProfile: 'Tart Berry Herbal' }
    ],
    sizes: [
      { id: '12pk', label: '12-CAN CASE (12 x 12 fl oz / 355mL)', weight: '4.26L', servings: 12, price: 3119, originalPrice: 3680, pricePerServing: 260 }
    ],
    nutrition: {
      servingSize: '1 Can (355mL / 12 fl oz)',
      servingsPerContainer: 12,
      calories: 30,
      protein: 5,
      sugar: 1,
      totalFat: 0,
      carbohydrates: 3,
      dietaryFiber: 4,
      sodium: 65
    },
    coaBatchNumber: 'APX-BIO-6612',
    isNew: true,
    inStock: true,
    dietaryTags: ['10 Billion CFU Bacillus Coagulans', '5g Fermented L-Glutamine', 'Microbiome Shield', 'Low Sugar 1g', 'Informed-Sport'],
    description: 'Lightly effervescent functional gut health recovery tonic packed with 10 Billion heat-stable probiotic spores, fermented L-glutamine, and prebiotic acacia fiber.',
    longDescription: 'Intense athletic training causes gastrointestinal barrier stress and micro-inflammation. Apex Bio-Culture provides resilient spore-forming probiotics that survive stomach acid intact to replenish the microbiome and optimize systemic nutrient absorption.',
    manufacturingCircuit: 'Cold Sterile Spore Blending & Micro-Effervescence Ingestion'
  },
  {
    id: 'apex-fermented-botanical-tonic',
    slug: 'apex-fermented-botanical-probiotic-tonic',
    name: 'APEX FERMENTED GINGER & BOTANICAL PROBIOTIC TONIC',
    subtitle: 'Raw Aged Apple Cider Vinegar + Peruvian Yellow Ginger + Turmeric Curcumin + Active Cultures',
    badge: 'RAW FERMENTED',
    badgeType: 'secondary',
    category: 'drinks',
    categoryLabel: 'Functional & Energy Drinks',
    rating: 4.92,
    reviewCount: 314,
    price: 2959,
    originalPrice: 3520,
    subscriptionPrice: 2515,
    image: '/images/products/apex-probiotic-drink.jpg',
    galleryImages: [
      '/images/products/apex-probiotic-drink.jpg',
      IMAGES['Athlete pouring clear watermelon protein hydrolysate into icy glass tumbler post workout on stainless steel athletic table, high key commercial photography']
    ],
    macros: {
      protein: '0g',
      sugar: '2g',
      calories: '25',
      carbs: '5g',
      fat: '0g'
    },
    flavors: [
      { id: 'spicy-ginger-citrus', name: 'Cold-Pressed Peruvian Ginger Citrus', color: '#f57f17', inStock: true, notes: 'Fiery organic ginger juice with crisp Meyer lemon and pink salt', tasteProfile: 'Spicy & Warming' },
      { id: 'pomegranate-elderberry', name: 'Pomegranate Elderberry Immune', color: '#880e4f', inStock: true, notes: 'Dark antioxidant elderberry juice with tangy tart pomegranate', tasteProfile: 'Rich Tart Berry' }
    ],
    sizes: [
      { id: '12pk', label: '12-BOTTLE APOTHECARY CASE (12 x 10 fl oz / 295mL)', weight: '3.54L', servings: 12, price: 2959, originalPrice: 3520, pricePerServing: 246 }
    ],
    nutrition: {
      servingSize: '1 Bottle (295mL / 10 fl oz)',
      servingsPerContainer: 12,
      calories: 25,
      protein: 0,
      sugar: 2,
      totalFat: 0,
      carbohydrates: 5,
      dietaryFiber: 2,
      sodium: 80,
      potassium: 190
    },
    coaBatchNumber: 'APX-BOT-3301',
    isNew: true,
    inStock: true,
    dietaryTags: ['Raw Living ACV Mother', 'Cold-Pressed Peruvian Ginger', 'Curcumin Enhanced', 'Zero Artificial Ingredients', 'Non-GMO'],
    description: 'Traditional botanical fermented tonic crafted from oak-barrel aged raw apple cider vinegar, fresh-pressed ginger rhizomes, and anti-inflammatory organic turmeric.',
    longDescription: 'Supports optimal stomach pH, reduces exercise-induced delayed onset muscle soreness (DOMS), and provides natural bioactive acetic acid to regulate glucose metabolism after high-carb refuel meals.',
    manufacturingCircuit: 'Living Culture Wild-Fermentation & Ambient Micro-Filtration'
  }
];
