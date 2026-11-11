import {
  Product,
  Review,
  PartnerAccount,
  LabTestMetric,
  HeavyMetalMetric,
  MicroMetric,
  AminoAcidProfileItem
} from '../types';
import extractedImages from './extracted_images.json';
import { NEW_PRODUCTS } from './newProducts';
import { ASSET_PRODUCTS } from './assetsProducts';
import { SPOTLIGHT_PRODUCTS } from './brandSpotlightData';
import { BUNDLE_PRODUCTS } from './bundleData';

// Helper to safely get image
export const IMAGES = extractedImages as Record<string, string>;

export const PRODUCTS: Product[] = [
  {
    id: 'apex-pro-whey',
    slug: 'apex-pro-whey-isolate',
    name: 'APEX PRO WHEY ISOLATE',
    subtitle: 'Cold Ceramic Microfiltration Circuit (CFM) • 90% Protein Fraction',
    badge: 'FLAGSHIP GOLD',
    badgeType: 'primary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.9,
    reviewCount: 1842,
    price: 4799,
    originalPrice: 5599,
    subscriptionPrice: 4079,
    image: IMAGES['Apex Pro Whey Isolate Tub 5lb'] || IMAGES['Massive 5lb tub of high-performance Apex Pro Whey Isolate in athletic obsidian packaging with vibrant volt green accents, set on an engineered concrete testing platform.'],
    galleryImages: [
      IMAGES['Apex Pro Whey Isolate Tub 5lb'],
      IMAGES['Front Tub'],
      IMAGES['Macro Label'],
      IMAGES['Instant Dissolution'],
      IMAGES['Athlete In Gym']
    ],
    macros: {
      protein: '30g',
      bcaa: '5.5g',
      sugar: '0g',
      calories: '120',
      carbs: '< 1g',
      fat: '0.5g'
    },
    flavors: [
      { id: 'chocolate-fudge', name: 'Double Rich Dutch Cocoa', color: '#3d2314', accentColor: '#d4ff00', inStock: true, notes: 'Rich, velvety European cocoa without chalky sweetness', tasteProfile: 'Velvety & Dense' },
      { id: 'vanilla-bean', name: 'Tahitian Vanilla Bean', color: '#e8dcba', accentColor: '#536600', inStock: true, notes: 'Pure aromatic Bourbon vanilla pods with floral warmth', tasteProfile: 'Creamy & Smooth' },
      { id: 'strawberry-cream', name: 'Wild Strawberry Cream', color: '#c94d65', accentColor: '#ff5722', inStock: true, notes: 'Freeze-dried Alpine strawberries with rich churned cream notes', tasteProfile: 'Bright & Fruity' },
      { id: 'unflavored-cfm', name: 'Unflavored Cold-Pressed', color: '#deded7', accentColor: '#006875', inStock: true, notes: '100% pure instantized CFM isolate, perfect for blending', tasteProfile: 'Neutral & Clean' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB', weight: '2 lbs (908g)', servings: 30, price: 4799, originalPrice: 5599, pricePerServing: 160 },
      { id: '5lb', label: '5 LB BULK (BEST VALUE)', weight: '5 lbs (2.27kg)', servings: 75, price: 9599, originalPrice: 11199, pricePerServing: 128 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (34g)',
      servingsPerContainer: 75,
      calories: 120,
      protein: 30,
      bcaas: 5.5,
      sugar: 0,
      totalFat: 0.5,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 5,
      sodium: 110,
      carbohydrates: 0.8,
      dietaryFiber: 0,
      potassium: 160,
      calcium: 140,
      iron: 0.4,
      digestiveEnzymes: 'DigeZyme® Multi-Enzyme Complex (50mg Protease, Amylase, Lactase, Lipase, Cellulase)'
    },
    coaBatchNumber: 'APX-9924-W',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['Informed-Sport Certified', 'Non-GMO', 'Gluten-Free', 'Lactose-Free <0.1%', 'Zero Added Sugar'],
    description: 'Cross-Flow Microfiltered 100% Whey Isolate engineered for zero gastric bloat, near-instant peptide absorption, and an uncompromising 30g pure protein macro payoff.',
    longDescription: 'Apex Pro Whey Isolate utilizes proprietary non-thermal ceramic microfiltration to preserve delicate immuno-globulins and glycomacropeptides while stripping away 99.8% of lactose, milk fats, and denatured protein fractions. Rigorously tested by independent ISO-17025 accredited laboratories with publicly downloadable Certificate of Analysis for every batch.',
    manufacturingCircuit: 'Cold Ceramic Microfiltration Circuit (CFM)'
  },
  {
    id: 'apex-hydrolyzed-whey',
    slug: 'apex-hydrolyzed-whey-isolate',
    name: 'APEX HYDROLYZED WHEY ISOLATE',
    subtitle: 'Cold-Enzymatic Hydrolyzed Whey Fraction 90% • Immediate Uptake',
    badge: 'ULTRA FAST',
    badgeType: 'secondary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.95,
    reviewCount: 940,
    price: 5199,
    originalPrice: 5999,
    subscriptionPrice: 4419,
    image: IMAGES['Premium sleek matte black supplement tub of Apex Hydrolyzed Whey Isolate with high-contrast electric volt green accents, set against a pristine minimalist studio pedestal with soft dramatic studio light.'] || IMAGES['Matte black tub of Apex Hydrolyzed Whey Isolate sports nutrition protein supplement with neon volt typography and batch lab tag, clean lighting against soft gray surface'],
    galleryImages: [
      IMAGES['Premium sleek matte black supplement tub of Apex Hydrolyzed Whey Isolate with high-contrast electric volt green accents, set against a pristine minimalist studio pedestal with soft dramatic studio light.'],
      IMAGES['Matte black tub of Apex Hydrolyzed Whey Isolate sports nutrition protein supplement with neon volt typography and batch lab tag, clean lighting against soft gray surface']
    ],
    macros: {
      protein: '31g',
      bcaa: '6.2g',
      sugar: '0g',
      calories: '125',
      carbs: '0.5g',
      fat: '0.2g'
    },
    flavors: [
      { id: 'dark-cocoa', name: 'Belgian Dark Chocolate', color: '#2a1a12', inStock: true, notes: 'Deep 85% cocoa with subtle sea salt bite' },
      { id: 'glazed-donut', name: 'Glazed Cinnamon Donut', color: '#d1985c', inStock: true, notes: 'Warm bakery glaze and Ceylon cinnamon' }
    ],
    sizes: [
      { id: '2lb', label: '2 LB TUB', weight: '2 lbs (908g)', servings: 30, price: 5199, originalPrice: 5999, pricePerServing: 173 },
      { id: '4lb', label: '4 LB BULK', weight: '4 lbs (1.81kg)', servings: 60, price: 9599, originalPrice: 11199, pricePerServing: 160 }
    ],
    nutrition: {
      servingSize: '1 Scoop (33g)',
      servingsPerContainer: 60,
      calories: 125,
      protein: 31,
      bcaas: 6.2,
      sugar: 0,
      totalFat: 0.2,
      carbohydrates: 0.5
    },
    coaBatchNumber: 'APX-9921-V',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['Enzymatic Hydrolysis', 'Zero Sugar', 'Informed-Sport Certified', 'Fast Digestion'],
    description: 'Enzymatically pre-cleaved whey peptide fractions engineered for lightning-speed systemic delivery within 15 minutes of heavy resistance training.'
  },
  {
    id: 'clear-whey-hydrolysate',
    slug: 'clear-whey-hydrolysate',
    name: 'CLEAR WHEY HYDROLYSATE',
    subtitle: 'Ultra-Filtered Transparent Crisp Refreshment • Light as Fruit Juice',
    badge: 'NEW CRISP TECH',
    badgeType: 'tertiary',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.88,
    reviewCount: 612,
    price: 3599,
    originalPrice: 3999,
    subscriptionPrice: 3059,
    image: IMAGES['Apex Clear Whey Hydrolysate slim canister with translucent light cyan and neon volt branding, surrounded by condensation drops representing refreshing fruit-infused protein.'] || IMAGES['Clear Whey Hydrolysate Citrus translucent sports drink jar with glowing electric yellow-lime liquid inside, droplets of condensation, pristine white reflective backdrop.'],
    galleryImages: [
      IMAGES['Apex Clear Whey Hydrolysate slim canister with translucent light cyan and neon volt branding, surrounded by condensation drops representing refreshing fruit-infused protein.'],
      IMAGES['Athlete pouring clear watermelon protein hydrolysate into icy glass tumbler post endurance bike ride']
    ],
    macros: {
      protein: '22g',
      bcaa: '4.8g',
      sugar: '0g',
      calories: '90',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'citrus-lime', name: 'Electric Citrus Tangerine', color: '#ffb300', inStock: true, notes: 'Crisp citrus burst with no milky residue' },
      { id: 'watermelon-splash', name: 'Sour Watermelon Splash', color: '#ff4d6d', inStock: true, notes: 'Refreshing summer watermelon with tangy bite' },
      { id: 'green-apple', name: 'Crisp Fuji Apple', color: '#7cb518', inStock: true, notes: 'Tart orchard green apple clarity' }
    ],
    sizes: [
      { id: '1.8lb', label: '25 SERVINGS', weight: '1.4 lbs (650g)', servings: 25, price: 3599, pricePerServing: 144 }
    ],
    nutrition: {
      servingSize: '1 Level Scoop (26g)',
      servingsPerContainer: 25,
      calories: 90,
      protein: 22,
      bcaas: 4.8,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-9884-U',
    isNew: true,
    inStock: true,
    dietaryTags: ['Dairy Clarity', 'Zero Fat', 'Zero Lactose', 'Informed-Sport'],
    description: 'Refreshing clear protein beverage isolate with the consistency of thirst-quenching fruit drink, delivering 22g pure protein with 0g sugar.'
  },
  {
    id: 'raw-plant-fuel',
    slug: 'raw-plant-fuel',
    name: 'APEX RAW PLANT FUEL 2.5LB',
    subtitle: 'Fermented Yellow Pea, Pumpkin Seed & Fava Bean Complete EAA Matrix',
    badge: 'VEGAN ELITE',
    badgeType: 'carbon',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.82,
    reviewCount: 479,
    price: 3999,
    originalPrice: 4559,
    subscriptionPrice: 3399,
    image: IMAGES['Matte dark olive and carbon black tub of Apex Raw Plant Fuel vegan protein powder, set on a modern architectural concrete surface with subtle plant shadows.'] || IMAGES['Raw Plant Fuel botanical protein canister in earthy sage green and matte white packaging, clean studio setting with organic botanical accents and studio illumination.'],
    galleryImages: [
      IMAGES['Matte dark olive and carbon black tub of Apex Raw Plant Fuel vegan protein powder, set on a modern architectural concrete surface with subtle plant shadows.']
    ],
    macros: {
      protein: '26g',
      bcaa: '4.6g',
      sugar: '< 1g',
      calories: '130',
      carbs: '2g',
      fat: '1.5g'
    },
    flavors: [
      { id: 'vanilla-chai', name: 'Madagascar Vanilla Pod', color: '#f3e9d2', inStock: true, notes: 'Velvety botanical vanilla with zero grit' },
      { id: 'dark-cacao', name: 'Salted Dark Cacao', color: '#382216', inStock: true, notes: 'Pure organic fair-trade Peruvian cacao' }
    ],
    sizes: [
      { id: '2.5lb', label: '2.5 LB TUB', weight: '2.5 lbs (1.13kg)', servings: 30, price: 3999, pricePerServing: 133 }
    ],
    nutrition: {
      servingSize: '1 Scoop (37g)',
      servingsPerContainer: 30,
      calories: 130,
      protein: 26,
      bcaas: 4.6,
      sugar: 0.5,
      totalFat: 1.5,
      carbohydrates: 2
    },
    coaBatchNumber: 'APX-9860-P',
    inStock: true,
    dietaryTags: ['100% Plant-Based', 'Zero Grit', 'Fermented Bio-Available', 'Soy-Free'],
    description: 'Smooth, cold-milled tri-source botanical protein offering a complete amino acid profile rivaling whey, with naturally occurring digestive enzymes.'
  },
  {
    id: 'night-micellar-casein',
    slug: 'night-micellar-casein',
    name: 'APEX NIGHT MICELLAR CASEIN',
    subtitle: 'Time-Release 8-Hour Sustained Amino Infusion • Anti-Catabolic Shield',
    badge: 'SUSTAINED UPTAKE',
    badgeType: 'carbon',
    category: 'powders',
    categoryLabel: 'Whey & Plant Powders',
    rating: 4.87,
    reviewCount: 520,
    price: 4399,
    originalPrice: 5039,
    subscriptionPrice: 3739,
    image: IMAGES['Matte midnight navy and graphite tub of Apex Night Micellar Casein, presented in deep calm lighting with sharp silver and volt typography.'] || IMAGES['Deep obsidian tub of Apex Night Micellar Casein with rich dark chocolate visual cues and laboratory grade seal'],
    galleryImages: [
      IMAGES['Matte midnight navy and graphite tub of Apex Night Micellar Casein, presented in deep calm lighting with sharp silver and volt typography.']
    ],
    macros: {
      protein: '25g',
      bcaa: '5.0g',
      sugar: '0g',
      calories: '120',
      carbs: '1g',
      fat: '0.5g'
    },
    flavors: [
      { id: 'chocolate-silk', name: 'Chocolate Silk Pudding', color: '#2f1e14', inStock: true, notes: 'Thick, dessert-like mousse consistency' },
      { id: 'vanilla-creme', name: 'Vanilla Crème Brûlée', color: '#eedbb0', inStock: true, notes: 'Golden vanilla with caramelized warmth' }
    ],
    sizes: [
      { id: '4lb', label: '4 LB TUB', weight: '4 lbs (1.81kg)', servings: 52, price: 4399, pricePerServing: 84 }
    ],
    nutrition: {
      servingSize: '1 Rounded Scoop (35g)',
      servingsPerContainer: 52,
      calories: 120,
      protein: 25,
      bcaas: 5.0,
      sugar: 0,
      totalFat: 0.5,
      carbohydrates: 1
    },
    coaBatchNumber: 'APX-9844-C',
    inStock: true,
    dietaryTags: ['Slow Digesting 8-Hour', 'Night Recovery', 'Anti-Catabolic', 'Microfiltered'],
    description: 'Dense native micellar casein micro-granules that form a continuous time-release gel in the stomach, keeping muscle protein synthesis active all night.'
  },
  {
    id: 'triple-crunch-bars',
    slug: 'triple-crunch-protein-bars',
    name: 'APEX TRIPLE CRUNCH BARS (12PK)',
    subtitle: 'Multi-Layered Crisp Protein Puffs with Gourmet Low-Sugar Ganache',
    badge: 'SNACK BESTSELLER',
    badgeType: 'secondary',
    category: 'bars',
    categoryLabel: 'Protein Bars & Snacks',
    rating: 4.92,
    reviewCount: 2310,
    price: 2799,
    originalPrice: 3199,
    subscriptionPrice: 2379,
    image: IMAGES['Modern display box of 12 Apex Triple Crunch Bars with high protein chocolate crisps visible in a cross-section bar render, high contrast studio lighting.'] || IMAGES['Box of 12 Apex Triple Crunch Protein Bars Dark Chocolate Peanut Butter displayed with one open bar revealing multi-layer crisp filling, modern studio photo'],
    galleryImages: [
      IMAGES['Modern display box of 12 Apex Triple Crunch Bars with high protein chocolate crisps visible in a cross-section bar render, high contrast studio lighting.'],
      IMAGES['Apex triple crunch protein bar cut in half showing crisp protein puff layers and caramel center on minimalist white tabletop, commercial sports nutrition product photo'],
      IMAGES['Array of unwrapped chocolate and peanut butter crispy athletic protein bars arranged cleanly on white studio surface']
    ],
    macros: {
      protein: '20g',
      sugar: '1g',
      calories: '210',
      carbs: '22g',
      fat: '7g'
    },
    flavors: [
      { id: 'peanut-butter', name: 'Dark Chocolate Peanut Butter', color: '#b97a38', inStock: true, notes: 'Roasted Spanish peanut butter layer with sea salt' },
      { id: 'salted-caramel', name: 'Salted Caramel Crunch', color: '#c68642', inStock: true, notes: 'Golden gooey caramel with crispy protein pearls' },
      { id: 'cookies-cream', name: 'Cookies & Cream Crisp', color: '#383838', inStock: true, notes: 'Dark cocoa wafer crisps smothered in white ganache' }
    ],
    sizes: [
      { id: '12pk', label: '12 BARS PER BOX', weight: '720g total', servings: 12, price: 2799, pricePerServing: 233 }
    ],
    nutrition: {
      servingSize: '1 Bar (60g)',
      servingsPerContainer: 12,
      calories: 210,
      protein: 20,
      sugar: 1,
      totalFat: 7,
      carbohydrates: 22
    },
    coaBatchNumber: 'APX-BAR-108',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['20g Protein', '1g Sugar', '14g Prebiotic Fiber', 'Gourmet Texture'],
    description: 'Eliminating the rubbery texture of traditional bars: triple crisp wafer layers with zero aftertaste and 20g whey isolate protein.'
  },
  {
    id: 'popped-protein-chips',
    slug: 'popped-protein-chips',
    name: 'APEX POPPED CHIPS (8PK)',
    subtitle: 'High-Protein Savory Crisp Baked Never Fried • 65% Less Fat',
    badge: 'SAVORY HIGH CRUNCH',
    badgeType: 'primary',
    category: 'snacks',
    categoryLabel: 'Protein Bars & Snacks',
    rating: 4.79,
    reviewCount: 388,
    price: 2159,
    originalPrice: 2399,
    subscriptionPrice: 1835,
    image: IMAGES['Multi-pack bags of Apex Popped Protein Chips in aerodynamic matte foil packaging with sea salt and jalapeno illustrations, shot in sharp editorial focus.'] || IMAGES['Apex Pro-Popped Protein Chips 8 pack bags Zesty BBQ flavor styled with scattered crispy protein chips on clean white modern surface'],
    galleryImages: [
      IMAGES['Multi-pack bags of Apex Popped Protein Chips in aerodynamic matte foil packaging with sea salt and jalapeno illustrations, shot in sharp editorial focus.']
    ],
    macros: {
      protein: '16g',
      sugar: '0g',
      calories: '140',
      carbs: '10g',
      fat: '3.5g'
    },
    flavors: [
      { id: 'zesty-bbq', name: 'Smoked Hickory BBQ', color: '#c4451c', inStock: true, notes: 'Smoky mesquite paprika with tangy brown glaze' },
      { id: 'cheddar-jalapeno', name: 'Sharp Cheddar & Jalapeño', color: '#e69500', inStock: true, notes: 'Real aged cheddar with crisp green jalapeño heat' }
    ],
    sizes: [
      { id: '8pk', label: '8 BAGS (35G EACH)', weight: '280g total', servings: 8, price: 2159, pricePerServing: 270 }
    ],
    nutrition: {
      servingSize: '1 Bag (35g)',
      servingsPerContainer: 8,
      calories: 140,
      protein: 16,
      sugar: 0,
      totalFat: 3.5,
      carbohydrates: 10
    },
    coaBatchNumber: 'APX-CHP-502',
    inStock: true,
    dietaryTags: ['Baked Not Fried', '16g Protein', 'Zero Trans Fats', 'Gluten-Free'],
    description: 'Crisp, high-pressure popped potato and soy protein chips seasoned with chef-crafted dry rubs for guilt-free athletic snacking.'
  },
  {
    id: 'overnight-power-oats',
    slug: 'overnight-power-oats',
    name: 'APEX OVERNIGHT POWER OATS TUB',
    subtitle: 'Organic Steel-Cut Oats Infused with Pure Whey Isolate & Roasted Chia',
    badge: 'MACRO BREAKFAST',
    badgeType: 'primary',
    category: 'oats',
    categoryLabel: 'High-Protein Oats',
    rating: 4.89,
    reviewCount: 885,
    price: 3199,
    originalPrice: 3599,
    subscriptionPrice: 2719,
    image: IMAGES['Wide tub of Apex Overnight Power Oats with clean typography, flanked by oat flakes and roasted chia seed elements in ultra high definition.'] || IMAGES['Overhead shot of a jar of Apex supercharged pro-oats with chia seeds and maple pecan crumbles in clean athletic kitchen lighting'],
    galleryImages: [
      IMAGES['Wide tub of Apex Overnight Power Oats with clean typography, flanked by oat flakes and roasted chia seed elements in ultra high definition.'],
      IMAGES['Overhead shot of a jar of Apex supercharged pro-oats with chia seeds and maple pecan crumbles in clean athletic kitchen lighting'],
      IMAGES['Athletic breakfast bowl containing hot high protein rolled oats topped with dark chocolate chunks and sliced almonds on clean white countertop']
    ],
    macros: {
      protein: '28g',
      sugar: '2g',
      calories: '360',
      carbs: '45g',
      fat: '6g'
    },
    flavors: [
      { id: 'maple-pecan', name: 'Maple Pecan Toasted Crunch', color: '#b5651d', inStock: true, notes: 'Vermont pure maple extract with crunchy roasted pecans' },
      { id: 'dark-cacao-flax', name: 'Dark Chocolate Cacao Nib', color: '#3d2516', inStock: true, notes: 'Rich cacao nibs and organic golden flax seeds' }
    ],
    sizes: [
      { id: '1kg', label: '1 KG TUB (20 SERVINGS)', weight: '1,000g', servings: 20, price: 3199, pricePerServing: 160 }
    ],
    nutrition: {
      servingSize: '1/2 Cup Dry (50g)',
      servingsPerContainer: 20,
      calories: 360,
      protein: 28,
      sugar: 2,
      totalFat: 6,
      carbohydrates: 45
    },
    coaBatchNumber: 'APX-OAT-301',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['Complex Clean Carbs', '28g Protein Per Bowl', 'Organic Chia & Flax', 'Heart Healthy'],
    description: 'Instant hot or overnight cold protein oats formulated with slow-burning complex carbohydrates, omega-3 fats, and 28g pure whey isolate.'
  },
  {
    id: 'creapure-creatine',
    slug: 'creapure-micronized-creatine',
    name: 'CREAPURE® MICRONIZED CREATINE 500G',
    subtitle: '100% German-Manufactured Pure Creapure® Monohydrate • 200 Mesh',
    badge: 'CLINICAL GOLD',
    badgeType: 'carbon',
    category: 'pre-workout',
    categoryLabel: 'Pre-Workout & Creatine',
    rating: 4.98,
    reviewCount: 3120,
    price: 2639,
    originalPrice: 3119,
    subscriptionPrice: 2243,
    image: IMAGES['Apex Creapure Micronized Creatine tub with clinical white and electric lime branding, laboratory beaker and molecular formula graphic backdrop.'] || IMAGES['Monochromatic technical tub of Creapure German Micronized Creatine powder with lab seals and Informed Sport certification badge on a clean background'],
    galleryImages: [
      IMAGES['Apex Creapure Micronized Creatine tub with clinical white and electric lime branding, laboratory beaker and molecular formula graphic backdrop.']
    ],
    macros: {
      protein: '0g',
      sugar: '0g',
      calories: '0',
      carbs: '0g',
      fat: '0g'
    },
    flavors: [
      { id: 'unflavored', name: 'Micro-Crystalline Unflavored', color: '#f0f0f0', inStock: true, notes: 'Instant dissolution in water or pre-workout' }
    ],
    sizes: [
      { id: '500g', label: '500G TUB (100 SERVINGS)', weight: '500g', servings: 100, price: 2639, pricePerServing: 26 }
    ],
    nutrition: {
      servingSize: '1 Scoop (5g)',
      servingsPerContainer: 100,
      calories: 0,
      protein: 0,
      sugar: 0,
      totalFat: 0,
      carbohydrates: 0
    },
    coaBatchNumber: 'APX-CRE-902',
    isBestSeller: true,
    inStock: true,
    dietaryTags: ['99.99% HPLC Pure', 'Informed-Sport Certified', 'Creapure® Germany', 'Zero Bloat'],
    description: 'Gold-standard German Creapure® monohydrate micronized to 200 mesh for maximum ATP muscle replenishment and cellular power output.'
  },
  ...NEW_PRODUCTS,
  ...ASSET_PRODUCTS,
  ...SPOTLIGHT_PRODUCTS,
  ...BUNDLE_PRODUCTS
];

export const AMINO_ACID_PROFILE: AminoAcidProfileItem[] = [
  // Essential Amino Acids (EAAs)
  { name: 'L-Leucine (BCAA)', amountMg: 3240, percentageStandard: 128, category: 'essential', biologicalFunction: 'Direct trigger of mTOR muscle protein synthesis pathway' },
  { name: 'L-Isoleucine (BCAA)', amountMg: 1780, percentageStandard: 112, category: 'essential', biologicalFunction: 'Facilitates glucose uptake during muscular contraction' },
  { name: 'L-Valine (BCAA)', amountMg: 1690, percentageStandard: 110, category: 'essential', biologicalFunction: 'Supports muscle tissue repair and cognitive stamina' },
  { name: 'L-Lysine', amountMg: 2850, percentageStandard: 119, category: 'essential', biologicalFunction: 'Crucial for collagen synthesis and calcium retention' },
  { name: 'L-Threonine', amountMg: 2040, percentageStandard: 115, category: 'essential', biologicalFunction: 'Structural component of intestinal mucus and immune antibodies' },
  { name: 'L-Methionine', amountMg: 680, percentageStandard: 108, category: 'essential', biologicalFunction: 'Essential precursor for creatine and cellular glutathione' },
  { name: 'L-Phenylalanine', amountMg: 960, percentageStandard: 105, category: 'essential', biologicalFunction: 'Neurotransmitter precursor for dopamine and norepinephrine' },
  { name: 'L-Histidine', amountMg: 520, percentageStandard: 104, category: 'essential', biologicalFunction: 'Precursor to carnosine intramuscular buffering agent' },
  { name: 'L-Tryptophan', amountMg: 490, percentageStandard: 102, category: 'essential', biologicalFunction: 'Serotonin and melatonin synthesis for recovery cycles' },

  // Conditionally Essential
  { name: 'L-Arginine', amountMg: 740, percentageStandard: 101, category: 'conditionally-essential', biologicalFunction: 'Nitric oxide vasodilation and nutrient delivery' },
  { name: 'L-Cysteine', amountMg: 710, percentageStandard: 122, category: 'conditionally-essential', biologicalFunction: 'Disulfide bridge stabilization and glutathione biosynthesis' },
  { name: 'L-Glutamine & Glutamic Acid', amountMg: 5120, percentageStandard: 124, category: 'conditionally-essential', biologicalFunction: 'Primary cellular fuel for enterocytes and immune cells' },
  { name: 'L-Tyrosine', amountMg: 920, percentageStandard: 106, category: 'conditionally-essential', biologicalFunction: 'Catecholamine maintenance under acute training stress' },
  { name: 'L-Proline', amountMg: 1820, percentageStandard: 114, category: 'conditionally-essential', biologicalFunction: 'Tendon, ligament, and connective tissue regeneration' },

  // Non-Essential
  { name: 'L-Alanine', amountMg: 1540, percentageStandard: 108, category: 'non-essential', biologicalFunction: 'Glucose-alanine cycle energy transfer during glycogen depletion' },
  { name: 'L-Aspartic Acid', amountMg: 3180, percentageStandard: 115, category: 'non-essential', biologicalFunction: 'Krebs cycle metabolic intermediate and cellular respiration' },
  { name: 'L-Glycine', amountMg: 530, percentageStandard: 100, category: 'non-essential', biologicalFunction: 'Collagen backbone peptide and antioxidant co-factor' },
  { name: 'L-Serine', amountMg: 1420, percentageStandard: 107, category: 'non-essential', biologicalFunction: 'Phospholipid cell membrane integrity and neurological support' }
];

export const LAB_METRICS: LabTestMetric[] = [
  { assayName: 'Total Protein Purity Assay (RP-HPLC)', targetClaim: '30.00g / 34g scoop (88.2%)', measuredResult: '30.42g / 34g scoop (89.47%)', variancePercentage: '+1.4%', methodology: 'AOAC 992.15 (Reverse Phase HPLC)', status: 'PASS' },
  { assayName: 'Lactose Content (High-Performance TLC)', targetClaim: '< 0.50g per serving', measuredResult: '0.08g per serving (< 0.1%)', variancePercentage: '-84.0%', methodology: 'Enzymatic UV Spectrophotometry', status: 'OPTIMAL' },
  { assayName: 'Moisture / Water Activity (Karl Fischer)', targetClaim: '< 4.5% Total Moisture', measuredResult: '3.12% Moisture', variancePercentage: '-30.6%', methodology: 'USP <921> Water Determination', status: 'PASS' },
  { assayName: 'Free Fat & Lipids (Gravimetric Soxhlet)', targetClaim: '< 1.0g per serving', measuredResult: '0.44g per serving', variancePercentage: '-56.0%', methodology: 'AOAC 933.05 Ether Extraction', status: 'PASS' }
];

export const HEAVY_METALS: HeavyMetalMetric[] = [
  { element: 'Lead (Pb)', symbol: 'Pb', fdaLimitPpm: '< 0.500 ppm', detectedPpm: '< 0.008 ppm', status: 'ND' },
  { element: 'Arsenic (As)', symbol: 'As', fdaLimitPpm: '< 0.200 ppm', detectedPpm: '< 0.004 ppm', status: 'ND' },
  { element: 'Cadmium (Cd)', symbol: 'Cd', fdaLimitPpm: '< 0.200 ppm', detectedPpm: '< 0.003 ppm', status: 'ND' },
  { element: 'Mercury (Hg)', symbol: 'Hg', fdaLimitPpm: '< 0.100 ppm', detectedPpm: '< 0.001 ppm', status: 'ND' }
];

export const MICRO_METRICS: MicroMetric[] = [
  { pathogen: 'Salmonella spp. (25g Composite)', specification: 'Absence / 25g', result: 'Not Detected (Negative)', status: 'PASS' },
  { pathogen: 'Escherichia coli (USP <2022>)', specification: '< 10 CFU/g', result: '< 1 CFU/g (Absent)', status: 'PASS' },
  { pathogen: 'Staphylococcus aureus', specification: '< 10 CFU/g', result: '< 1 CFU/g (Absent)', status: 'PASS' },
  { pathogen: 'Total Yeast & Mold Count', specification: '< 100 CFU/g', result: '< 10 CFU/g (Negligible)', status: 'PASS' }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Derek K.',
    sport: 'USAPL Competitive Powerlifter (-93kg)',
    verifiedBuyer: true,
    rating: 5,
    date: '2 Days Ago',
    title: 'Zero bloat, dissolves instantly in 8oz cold water without a shaker ball.',
    comment: 'I take 2 scoops post-squat sessions and have had zero digestive distress. The Dutch Cocoa has an authentic rich cocoa flavor that tastes like cold dark hot chocolate. Best CFM isolate on the market without questionable gum thickeners.',
    flavorUsed: 'Double Rich Dutch Cocoa (5lb Bulk)',
    macroGoal: 'Hypertrophy & Strength',
    helpfulCount: 84
  },
  {
    id: 'rev-2',
    author: 'Elena R.',
    sport: 'D1 Track & Field Decathlete',
    verifiedBuyer: true,
    rating: 5,
    date: '1 Week Ago',
    title: 'The downloadable COA lab test sold me. Cleanest protein on the market.',
    comment: 'Being in the drug testing pool, Informed-Sport certification is non-negotiable. Knowing my batch #APX-9924-W was independently tested by Eurofins for banned substances gives me complete peace of mind.',
    flavorUsed: 'Tahitian Vanilla Bean (2lb)',
    macroGoal: 'Speed & Power Endurance',
    helpfulCount: 62
  },
  {
    id: 'rev-3',
    author: 'Marcus V.',
    sport: 'CrossFit Games Regionals Athlete',
    verifiedBuyer: true,
    rating: 5,
    date: '2 Weeks Ago',
    title: 'Wild Strawberry with cold oat milk is unmatched.',
    comment: 'Normally artificial strawberry protein is nauseatingly sweet. This uses freeze-dried strawberry powder and has a clean, natural tartness. Stacks perfectly with the Creapure creatine.',
    flavorUsed: 'Wild Strawberry Cream (5lb Bulk)',
    macroGoal: 'Work Capacity & Recovery',
    helpfulCount: 47
  }
];

export const USER_ACCOUNT = {
  name: 'Marcus Vance',
  email: 'm.vance@apexperformance.io',
  membershipTier: 'APEX PRO ELITE TIER',
  apexPoints: 4280,
  memberSince: 'March 2024',
  avatar: IMAGES['High contrast professional athletic port'] || IMAGES['Profile'],
  macrosGoal: {
    dailyProteinTarget: 210,
    dailyCaloriesTarget: 2950,
    currentStackProtein: 165,
    currentStackCalories: 1840
  },
  savedProductIds: ['apex-hydrolyzed-whey', 'apex-pro-whey', 'clear-whey-hydrolysate', 'creapure-creatine', 'night-micellar-casein', 'overnight-power-oats'],
  activeAutoShip: {
    id: 'SUB-88192',
    frequency: 'Every 4 Weeks',
    nextDispatchDate: 'November 14, 2026',
    discountTier: '15% Off Auto-Ship Tier',
    itemsCount: 3,
    status: 'Active • Fast Track'
  }
};

export const PARTNER_ACCOUNT: PartnerAccount = {
  id: 'apex-performance-labs',
  brandName: 'Apex Performance Labs',
  handle: '@apexlabs.official',
  badge: 'OFFICIAL FORMULATION PARTNER',
  avatar: IMAGES['Apex Fuel Logo'],
  banner: IMAGES['A 5lb heavy duty gusset bag of Apex Pro'],
  bio: 'Formulating clinical-grade ergogenic aids and cold-microfiltered protein fractions for Olympic federations, NCAA Division 1 programs, and world-class athletic organizations since 2018.',
  credentials: ['ISO 17025 Accredited Laboratory Protocol', 'Informed-Sport Banned Substance Screened', 'cGMP FDA Registered Facility', 'NSF Certified for Sport'],
  commissionRate: 18.5,
  activeSkuCount: 14,
  totalRevenue: 11913600.00,
  batchPurityCompliance: 99.4,
  curatedProductIds: ['apex-pro-whey', 'apex-hydrolyzed-whey', 'clear-whey-hydrolysate', 'creapure-creatine', 'night-micellar-casein', 'overnight-power-oats'],
  exclusiveCode: 'APEXLABS20',
  discountPercentage: 20
};

