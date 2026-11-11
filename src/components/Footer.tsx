import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentView, openCoaModal, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Welcome to the VIP Athlete Briefing! 15% discount code applied: APEXVIP', 'volt');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#F4F0EA] text-black border-t-2 border-black mt-0">
      {/* ========================================================= */}
      {/* 1. TRUST BADGES STRIP (Preserved Text Content) */}
      {/* ========================================================= */}
      <div className="bg-black text-white py-10 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#FFE600] border-2 border-white flex items-center justify-center flex-shrink-0 text-black shadow-[2px_2px_0px_#FFE600]">
              <span className="material-symbols-outlined text-2xl font-bold">science</span>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-black">
                100% Lab Tested
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">
                Third-party HPLC purity verified for zero fillers or nitrogen spikes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#0038FF] border-2 border-white flex items-center justify-center flex-shrink-0 text-white shadow-[2px_2px_0px_#0038FF]">
              <span className="material-symbols-outlined text-2xl font-bold">verified_user</span>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-black">
                Informed-Sport Certified
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">
                Screened for 285+ WADA banned substances for Olympic athletes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#E63946] border-2 border-white flex items-center justify-center flex-shrink-0 text-white shadow-[2px_2px_0px_#E63946]">
              <span className="material-symbols-outlined text-2xl font-bold">published_with_changes</span>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-black">
                30-Day Taste Guarantee
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">
                Hassle-free refunds if your macros don't hit right or flavor fails.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#FFE600] border-2 border-white flex items-center justify-center flex-shrink-0 text-black shadow-[2px_2px_0px_#FFE600]">
              <span className="material-symbols-outlined text-2xl font-bold">local_shipping</span>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white font-black">
                Carbon-Neutral Shipping
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">
                Dispatched same-day via eco-certified carriers on orders over ₹999.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. NEWSLETTER SIGNUP STRIP (Preserved Text Content) */}
      {/* ========================================================= */}
      <div className="bg-[#FFE600] py-10 px-4 md:px-6 border-b-2 border-black">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-label-caps text-xs text-black uppercase font-black tracking-widest block mb-1">
              VIP ATHLETE BRIEFING
            </span>
            <h3 className="text-2xl md:text-3xl text-black uppercase font-black tracking-tight">
              GET 15% OFF YOUR FIRST FUEL PACK
            </h3>
            <p className="text-sm text-black/80 mt-2 font-semibold">
              Join 85,000+ strength competitors receiving weekly macro protocols, clean science releases, and subscriber-only flash restocks.
            </p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 bg-white text-black font-semibold text-sm placeholder:text-neutral-500 border-2 border-black focus:outline-none focus:shadow-[3px_3px_0px_#000] transition-all rounded-xl"
                placeholder="Enter your training email..."
                type="email"
                required
              />
              <button
                className="h-12 px-6 bg-black hover:bg-neutral-900 text-[#FFE600] border-2 border-black font-headline-sm text-xs uppercase tracking-wider font-black transition-all shadow-[2.5px_2.5px_0px_#000] whitespace-nowrap cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded-xl"
                type="submit"
              >
                UNLOCK 15% OFF
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. "KNOW MORE ABOUT THE PROTEIN FOREST" ACCORDION BUTTON */}
      {/* ========================================================= */}
      <div className="w-full bg-[#F4F0EA] py-6 px-4 md:px-6 border-b-2 border-black flex flex-col items-center">
        <button
          onClick={() => setIsKnowMoreOpen(!isKnowMoreOpen)}
          className="w-full max-w-4xl py-3 px-6 bg-white hover:bg-neutral-50 text-black border-2 border-black rounded-xl font-headline-sm text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
          aria-expanded={isKnowMoreOpen}
        >
          <span>KNOW MORE ABOUT THE PROTEIN FOREST</span>
          <span
            className={`material-symbols-outlined text-xl transition-transform duration-200 ${
              isKnowMoreOpen ? 'rotate-180' : ''
            }`}
          >
            expand_more
          </span>
        </button>

        {/* Collapsible Accordion Content */}
        {isKnowMoreOpen && (
          <div className="w-full max-w-4xl mt-4 p-6 bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#FFE600] border-2 border-black flex items-center justify-center p-1 rounded-lg shadow-[1.5px_1.5px_0px_#000] overflow-hidden">
                <img
                  src="/images/brand/the-protein-forest-mark.png"
                  alt="The Protein Forest Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-headline-sm text-[10px] font-black uppercase tracking-[0.25em] text-[#E63946] block">
                  THE
                </span>
                <span className="font-headline-sm text-xl uppercase tracking-tight text-black font-black">
                  PROTEIN FOREST
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
              The Protein Forest performance nutrition systems engineered for clean athletic fuel, uncompromised label transparency, and natural metabolic power. Every formulation is verified by third-party HPLC assays, Informed-Sport screened, and crafted without artificial fillers, amino spiking, or banned substances.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-neutral-700">
              <div className="p-3 bg-[#F4F0EA] border border-black/20 rounded-xl">
                <span className="text-black font-black block">CERAMIC CFM FILTRATION</span>
                <span className="text-[11px] text-neutral-600 font-medium">Native protein yield with intact bioactive fractions.</span>
              </div>
              <div className="p-3 bg-[#F4F0EA] border border-black/20 rounded-xl">
                <span className="text-black font-black block">ZERO NITROGEN SPIKING</span>
                <span className="text-[11px] text-neutral-600 font-medium">Full HPLC batch dossiers publicly accessible per lot.</span>
              </div>
              <div className="p-3 bg-[#F4F0EA] border border-black/20 rounded-xl">
                <span className="text-black font-black block">WADA / OLYMPIC GRADE</span>
                <span className="text-[11px] text-neutral-600 font-medium">Screened for 285+ banned substances under ISO 17025.</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 4. VIBRANT RED 5-COLUMN FOOTER GRID (SUPER YOU STYLE) */}
      {/* ========================================================= */}
      <div className="w-full bg-[#ED1C24] text-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: SHOP ALL (Fuel Categories) */}
          <div className="p-6 md:p-8 border-b lg:border-b-0 md:border-r border-white/20">
            <h5 className="font-headline-sm text-sm sm:text-base uppercase text-white mb-5 tracking-wider font-black">
              SHOP ALL
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-white/90">
              <li>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Whey &amp; Plant Powders
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Protein Bars &amp; Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  High-Protein Oats
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Pre-Workout &amp; Creatine
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Clearance Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: KNOW MORE (Scientific Dossiers) */}
          <div className="p-6 md:p-8 border-b lg:border-b-0 md:border-r border-white/20">
            <h5 className="font-headline-sm text-sm sm:text-base uppercase text-white mb-5 tracking-wider font-black">
              KNOW MORE
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-white/90">
              <li>
                <button
                  onClick={() => openCoaModal('APX-9924-W')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Certificate of Analysis (COA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('pdp')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  HPLC Amino Acid Assay
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('pdp')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  CFM Ceramic Microfiltration
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('pdp')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Informed-Sport Registry
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('pdp')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Clinical Dosing Specs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: ATHLETE ECOSYSTEM / SUPPORT & POLICY */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20">
            <h5 className="font-headline-sm text-sm sm:text-base uppercase text-white mb-5 tracking-wider font-black">
              SUPPORT &amp; POLICY
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-white/90">
              <li>
                <button
                  onClick={() => setCurrentView('performance-deck')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Athlete Performance Deck
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('partner-storefront')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Official Brand Storefront
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('partner-dashboard')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Partner Creator Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('performance-deck')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Auto-Ship Subscriptions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('account')}
                  className="hover:text-[#FFE600] hover:underline transition-colors cursor-pointer font-semibold block text-left"
                >
                  Forest Points Rewards
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW ALONG */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col">
            <h5 className="font-headline-sm text-sm sm:text-base uppercase text-white mb-5 tracking-wider font-black">
              FOLLOW ALONG
            </h5>
            <div className="flex items-center gap-3 mt-1">
              {/* Instagram White Circle */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#FFE600] hover:scale-110 transition-all shadow-md cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube White Circle */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#FFE600] hover:scale-110 transition-all shadow-md cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 5: GET IN TOUCH */}
          <div className="p-6 md:p-8">
            <h5 className="font-headline-sm text-sm sm:text-base uppercase text-white mb-5 tracking-wider font-black">
              GET IN TOUCH
            </h5>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-white/90 shrink-0 mt-0.5">
                  help_outline
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white/80 block">
                    ORDER RELATED QUERIES
                  </span>
                  <a
                    href="mailto:support@theproteinforest.com"
                    className="text-xs sm:text-sm font-bold text-white underline hover:text-[#FFE600] transition-colors break-all"
                  >
                    support@theproteinforest.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-white/90 shrink-0 mt-0.5">
                  handshake
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white/80 block">
                    MARKETING / COLLABS
                  </span>
                  <a
                    href="mailto:partners@theproteinforest.com"
                    className="text-xs sm:text-sm font-bold text-white underline hover:text-[#FFE600] transition-colors break-all"
                  >
                    partners@theproteinforest.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-white/90 shrink-0 mt-0.5">
                  schedule
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white/80 block">
                    WORKING HOURS
                  </span>
                  <span className="text-xs font-semibold text-white/90 block">
                    10AM - 6PM IST (Monday to Saturday)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. SUB-FOOTER BOTTOM BAR (SUPER YOU STYLE) */}
        {/* ========================================================= */}
        <div className="border-t border-white/20 py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Forest Squad Loyalty Button & Copyright */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => {
                setCurrentView('account');
                showToast('Forest Squad: 4,280 Forest Points Available!', 'volt');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer border border-white/20 shadow-sm"
            >
              <span>🎁</span>
              <span>Forest Squad</span>
            </button>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider font-label-caps">
              © 2026 THE PROTEIN FOREST. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Right: Payment Icons */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-black uppercase text-white/90 tracking-wider mr-1">
              PAY USING:
            </span>
            <span className="px-2.5 py-1 bg-white text-[#0038FF] font-black text-[10px] rounded tracking-wider shadow-sm">
              VISA
            </span>
            <span className="px-2.5 py-1 bg-white text-[#EB001B] font-black text-[10px] rounded tracking-wider shadow-sm flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block -mr-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] inline-block opacity-90" />
              <span className="ml-0.5 text-black">MC</span>
            </span>
            <span className="px-2.5 py-1 bg-[#002663] text-white font-black text-[10px] rounded tracking-wider shadow-sm">
              AMEX
            </span>
            <span className="px-2.5 py-1 bg-white text-[#008276] font-black text-[10px] rounded tracking-wider shadow-sm">
              UPI
            </span>
            <span className="px-2.5 py-1 bg-white text-neutral-800 font-black text-[10px] rounded tracking-wider shadow-sm">
              GPay
            </span>
            <span className="px-2.5 py-1 bg-white text-[#00B9F5] font-black text-[10px] rounded tracking-wider shadow-sm">
              Paytm
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
