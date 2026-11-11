import { IMAGES } from './mockData';

export interface PartnerBrand {
  id: string; // slug for URL, e.g. 'apex-performance-labs'
  aliases?: string[]; // e.g. ['apex-labs', 'apex']
  name: string;
  tag: string;
  code: string;
  discountPercentage: number;
  rating: string;
  reviewCount: number;
  icon: string;
  image: string;
  bio: string;
  facility: string;
  cert: string;
  credentials: string[];
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'apex-performance-labs',
    aliases: ['apex-labs', 'apex', 'flagship'],
    name: 'Apex Performance Labs',
    tag: 'Flagship Lab',
    code: 'APEXLABS20',
    discountPercentage: 20,
    rating: '4.98',
    reviewCount: 1420,
    icon: 'AP',
    image: IMAGES['Massive 5lb tub of high-performance Apex Pro Whey Isolate in athletic obsidian packaging with vibrant volt green accents, set on an engineered concrete testing platform.'] || IMAGES['Apex Pro Whey Isolate Tub 5lb'],
    bio: 'Apex Performance Labs is our premier bio-engineering facility in Salt Lake City, UT. Specializing in CFM cold ceramic micro-filtered native whey isolates, pharmaceutical-grade Creapure®, and ultra-pure peptide matrices with zero nitrogen spiking and full HPLC transparency.',
    facility: 'Salt Lake City, UT • ISO 17025 Certified',
    cert: 'ACCREDITED FACILITY #APX-ISO-9901',
    credentials: ['ISO 17025 Accredited Laboratory Protocol', 'Informed-Sport Banned Substance Screened', 'cGMP FDA Registered Facility', 'NSF Certified for Sport']
  },
  {
    id: 'kinetix-bio-fuel',
    aliases: ['kinetix', 'endurance'],
    name: 'Kinetix Bio-Fuel',
    tag: 'Endurance Science',
    code: 'KINETIX15',
    discountPercentage: 15,
    rating: '4.91',
    reviewCount: 984,
    icon: 'KX',
    image: IMAGES['Male athlete eating an Apex crisp protein bar on running track bleachers in morning sunrise light'],
    bio: 'Kinetix Bio-Fuel pioneers high-cadence endurance matrices and rapid intra-workout glycogen replenishment. Developed alongside decathletes and ultra-endurance runners to eliminate gut distress while maximizing sustained cellular ATP output.',
    facility: 'Boulder, CO • High-Altitude Endurance Center',
    cert: 'ACCREDITED FACILITY #KTX-END-402',
    credentials: ['High-Altitude Tested Endurance Matrix', 'WADA 285+ Prohibited Substance Screened', '100% Rapid Osmolality Formula', 'Gluten & Soy Free Verification']
  },
  {
    id: 'ironcore-strength-labs',
    aliases: ['ironcore', 'strength-labs', 'powerlifting'],
    name: 'IronCore Strength Labs',
    tag: 'Powerlifting Heavy Spec',
    code: 'IRON25',
    discountPercentage: 25,
    rating: '4.95',
    reviewCount: 1128,
    icon: 'IC',
    image: IMAGES['Heavy-duty 5 pound bulk tub of Apex Pro Whey Isolate sports nutrition protein, premium industrial black container with high contrast volt lime lettering, clean minimalist white studio backdrop.'],
    bio: 'IronCore Strength Labs manufactures heavy-duty powerlifting formulations engineered for extreme mechanical tension, neuromuscular recovery, and maximal hypertrophy. High-yield bulk isolates and micronized German creatine.',
    facility: 'Columbus, OH • Powerlifting Spec Tested',
    cert: 'ACCREDITED FACILITY #IC-PWR-552',
    credentials: ['USAPL / IPF Competition Safe Protocol', 'Pharmaceutical Grade Creapure® Monohydrate', 'Zero Artificial Dyes or Filler Blends', 'Heavy Spec 30g+ Protein Yield / Scoop']
  },
  {
    id: 'hydropure-bio-peptides',
    aliases: ['hydropure', 'clear-whey', 'peptides'],
    name: 'HydroPure Bio-Peptides',
    tag: 'Peptide & Collagen Lab',
    code: 'HYDRO20',
    discountPercentage: 20,
    rating: '4.96',
    reviewCount: 890,
    icon: 'HP',
    image: IMAGES['Clear modern supplement jar containing translucent light yellow Clear Whey Hydrolysate Citrus powder with fresh sliced lemons beside packaging, high key studio shot'],
    bio: 'HydroPure Bio-Peptides produces enzymatically pre-digested clear whey hydrolysates and pasture-raised bovine collagen peptides. Designed for 15-minute gastric transit and instantaneous connective tissue repair.',
    facility: 'San Diego, CA • Clinical Peptide Lab',
    cert: 'ACCREDITED FACILITY #HP-PEP-309',
    credentials: ['Enzymatic Hydrolysis Fractionation', 'Bovine Type I & III Grass-Fed Collagen', 'Zero Lactose & Zero Sugar Certified', 'Fastest Gastric Emptying Rate']
  },
  {
    id: 'nocturnal-sleep-labs',
    aliases: ['nocturnal', 'casein', 'sleep-labs'],
    name: 'Nocturnal Sleep Labs',
    tag: 'Slow Micellar Casein',
    code: 'NOCTURN15',
    discountPercentage: 15,
    rating: '4.94',
    reviewCount: 654,
    icon: 'NL',
    image: IMAGES['Night Micellar Casein deep navy matte tub supplement with sleek minimalist typography, glowing accent light, high-end pharmaceutical fitness aesthetic on neutral concrete.'],
    bio: 'Nocturnal Sleep Labs architects time-released micellar casein proteins and restorative night sleep matrices. Provides sustained anti-catabolic amino trickle across 7 full hours of REM deep recovery.',
    facility: 'Austin, TX • Sleep Optimization & Circadian Lab',
    cert: 'ACCREDITED FACILITY #NOC-REM-720',
    credentials: ['7-Hour Sustained Micellar Trickle', 'Cold-Filtered Native Milk Protein Matrix', 'Tart Cherry & Magnesium Synergistic Blend', 'Zero Daytime Drowsiness Guarantee']
  },
  {
    id: 'origin-power-oats',
    aliases: ['origin', 'oats', 'power-oats'],
    name: 'Origin Power Oats',
    tag: 'Complex Carbohydrate Lab',
    code: 'ORIGIN20',
    discountPercentage: 20,
    rating: '4.93',
    reviewCount: 542,
    icon: 'OP',
    image: IMAGES['Athletic high-protein meal tub of Apex Overnight Power Oats with green apple, cinnamon bark and chia seeds in dynamic modern packaging'],
    bio: 'Origin Power Oats develops complex slow-digesting oat carb matrices enriched with native whey and cold-pressed MCTs. Sustained energy release for pre-competition glycogen loading and endurance pacing.',
    facility: 'Minneapolis, MN • Whole Grain Milling Lab',
    cert: 'ACCREDITED FACILITY #OP-OAT-104',
    credentials: ['Glycemic Index Below 45 Certified', 'Certified Gluten-Free Rolled Oats', 'Probiotic Bacillus Coagulans Culture', 'Zero Seed Oils or Corn Syrups']
  },
  {
    id: 'zenith-velocity-drinks',
    aliases: ['zenith', 'drinks', 'velocity-drinks'],
    name: 'Zenith Velocity Drinks',
    tag: 'Nootropic & RTD Fuel',
    code: 'ZENITH25',
    discountPercentage: 25,
    rating: '4.97',
    reviewCount: 812,
    icon: 'ZV',
    image: '/images/products/apex-energy-drink.jpg',
    bio: 'Zenith Velocity Drinks crafts ready-to-drink functional beverages: natural clean caffeine energy drinks, 32g cold-filtered protein shakes, and probiotic gut biome recovery elixirs.',
    facility: 'Miami, FL • Aseptic Cold-Fill RTD Facility',
    cert: 'ACCREDITED FACILITY #ZEN-RTD-900',
    credentials: ['Cold Aseptic Bottle Line Protocol', 'Natural Green Tea Leaf Caffeine', '32g Microfiltered Native Protein', 'Zero Crash & Zero Sucralose Formula']
  },
  {
    id: 'nitro-stim-labs',
    aliases: ['nitro', 'pre-workout', 'stim-labs', 'nitro-labs'],
    name: 'Nitro Stim Labs',
    tag: 'High-Stim Pre-Workout',
    code: 'NITRO30',
    discountPercentage: 30,
    rating: '4.96',
    reviewCount: 760,
    icon: 'NS',
    image: '/images/products/nitro-pre-workout.jpg',
    bio: 'Nitro Stim Labs specializes in clinical nitric oxide vasodilators, buffered beta-alanine, and pharmaceutical-grade cognitive nootropics for maximum workout intensity.',
    facility: 'Denver, CO • High-Stim Performance Lab',
    cert: 'ACCREDITED FACILITY #NITRO-STM-880',
    credentials: ['Clinical Beta-Alanine & Citrulline Malate', 'WADA Informed-Sport Batch Tested', 'Zero Crash Electrolyte Buffer', 'HPLC Purity Screened 99.4%']
  }
];

export const getPartnerBrandById = (idOrSlug: string): PartnerBrand | undefined => {
  const normalized = idOrSlug.toLowerCase().trim();
  return PARTNER_BRANDS.find(
    (b) => b.id === normalized || (b.aliases && b.aliases.includes(normalized))
  );
};

