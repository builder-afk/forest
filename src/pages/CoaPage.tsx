import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LAB_METRICS, HEAVY_METALS, MICRO_METRICS, AMINO_ACID_PROFILE } from '../data/mockData';

export const CoaPage: React.FC = () => {
  const { selectedBatchNumber, setSelectedBatchNumber, setCurrentView, showToast } = useApp();
  const [activeSheet, setActiveSheet] = useState<'sheet-1' | 'sheet-2'>('sheet-1');
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    showToast(`Downloading ISO-17025 Certified HPLC Batch Dossier #${selectedBatchNumber} (PDF)...`, 'volt');
  };

  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Document Action Toolbar */}
      <aside
        aria-label="Document Controls"
        className="no-print sticky top-36 z-30 bg-surface/95 backdrop-blur-md shadow-sm border-b border-surface-container"
      >
        <div className="w-full px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-1.5 font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">
              <button
                onClick={() => setCurrentView('marketplace')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                QA Network
              </button>
              <span>/</span>
              <button
                onClick={() => setCurrentView('catalog')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Certificates
              </button>
              <span>/</span>
              <select
                value={selectedBatchNumber}
                onChange={(e) => setSelectedBatchNumber(e.target.value)}
                className="bg-surface-container text-on-surface font-bold px-2.5 py-1 rounded text-xs border-none focus:ring-1 focus:ring-primary cursor-pointer font-mono"
              >
                <option value="APX-9924-W">LOT #APX-9924-W (Apex Pro Whey)</option>
                <option value="APX-9921-V">LOT #APX-9921-V (Hydrolyzed Isolate)</option>
                <option value="APX-9884-U">LOT #APX-9884-U (Clear Whey Hydrolysate)</option>
              </select>
            </nav>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-fixed font-label-caps text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              HASH: e8c4..9f12 • ISO 17025 ACCREDITED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center bg-surface-container rounded p-0.5 text-xs font-label-caps">
              <button
                onClick={() => setActiveSheet('sheet-1')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeSheet === 'sheet-1'
                    ? 'bg-surface-container-lowest text-on-surface shadow-sm font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Page 1: Amino Profile (HPLC)
              </button>
              <button
                onClick={() => setActiveSheet('sheet-2')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeSheet === 'sheet-2'
                    ? 'bg-surface-container-lowest text-on-surface shadow-sm font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Page 2: Heavy Metals & Micro
              </button>
            </div>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high font-label-md text-xs font-bold text-on-surface transition-colors cursor-pointer"
              title="Toggle Zoom"
            >
              <span className="material-symbols-outlined text-sm">aspect_ratio</span>
              <span>{isZoomed ? 'Actual Size' : 'Fit Sheet'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-fixed font-label-md text-xs font-black uppercase transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>PDF DOSSIER</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
              title="Print Certificate"
            >
              <span className="material-symbols-outlined text-base">print</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Certificate Viewing Frame */}
      <section className="w-full bg-surface-container-low py-8 md:py-12 px-4 md:px-6 flex justify-center items-center flex-col gap-8">
        {/* PAGE 1: HPLC AMINO PROFILE & PURITY */}
        {activeSheet === 'sheet-1' && (
          <article
            className={`w-full max-w-[1040px] bg-surface-container-lowest text-on-surface shadow-2xl rounded-xl p-6 sm:p-10 md:p-14 flex flex-col gap-8 transition-all border border-surface-container-high ${
              isZoomed ? 'scale-105' : ''
            }`}
          >
            {/* Header: Lab Identity & Certifications */}
            <header className="flex flex-col gap-6 border-b-2 border-on-surface pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 bg-on-surface text-primary-container flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-3xl font-black">biotech</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-lg font-black uppercase tracking-tight text-on-surface">
                        APEX ANALYTICAL LABS
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-[10px] font-bold">
                        LIMS-4.9
                      </span>
                    </div>
                    <span className="font-body-sm text-xs text-on-surface-variant">
                      Performance Nutritional Assay & High-Purity Testing Services
                    </span>
                    <span className="font-label-caps text-outline text-[10px] font-bold">
                      EUROFINS & AGILENT ACCREDITED PARTNER FACILITY #882-US
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex flex-col items-center justify-center p-2 rounded bg-surface-container-low min-w-[76px] text-center border border-surface-container">
                    <span className="material-symbols-outlined text-lg text-primary">verified</span>
                    <span className="font-label-caps text-[9px] uppercase font-black text-on-surface">
                      ISO/IEC 17025
                    </span>
                    <span className="font-body-sm text-[8px] text-on-surface-variant">A2LA Cert #4192</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded bg-surface-container-low min-w-[76px] text-center border border-surface-container">
                    <span className="material-symbols-outlined text-lg text-secondary">verified_user</span>
                    <span className="font-label-caps text-[9px] uppercase font-black text-on-surface">
                      INFORMED-SPORT
                    </span>
                    <span className="font-body-sm text-[8px] text-on-surface-variant">Banned Substance</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded bg-surface-container-low min-w-[76px] text-center border border-surface-container">
                    <span className="material-symbols-outlined text-lg text-tertiary">health_and_safety</span>
                    <span className="font-label-caps text-[9px] uppercase font-black text-on-surface">
                      cGMP FDA 21
                    </span>
                    <span className="font-body-sm text-[8px] text-on-surface-variant">CFR Part 111</span>
                  </div>
                </div>
              </div>

              {/* Document Banner */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-4 border-t border-surface-container">
                <div>
                  <span className="font-label-caps text-[11px] text-primary font-black uppercase tracking-widest block">
                    OFFICIAL DOSSIER OF CONFORMANCE
                  </span>
                  <h1 className="font-headline-lg text-2xl uppercase font-black tracking-tight text-on-surface">
                    CERTIFICATE OF ANALYSIS: AMINO ACID PROFILE ASSAY (RP-HPLC)
                  </h1>
                </div>
                <div className="text-right">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                    REPORT NUMBER
                  </span>
                  <span className="font-mono text-sm font-bold text-on-surface">
                    COA-APX-{selectedBatchNumber}-01
                  </span>
                </div>
              </div>
            </header>

            {/* Spec Information Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-surface-container-low p-4 rounded-xl text-left text-xs font-body-sm border border-surface-container">
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  Product Description
                </span>
                <span className="font-bold text-on-surface block mt-0.5">Apex Pro Whey Isolate (CFM)</span>
                <span className="text-[11px] text-on-surface-variant">Double Rich Dutch Cocoa</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  Lot / Batch ID
                </span>
                <span className="font-mono font-bold text-on-surface block mt-0.5">{selectedBatchNumber}</span>
                <span className="text-[11px] text-on-surface-variant">Bulk Container Run #04</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  Manufacture Date
                </span>
                <span className="font-bold text-on-surface block mt-0.5">October 12, 2026</span>
                <span className="text-[11px] text-on-surface-variant">Expiry: October 2028 (24 Mo)</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  Assay Methodology
                </span>
                <span className="font-bold text-on-surface block mt-0.5">AOAC 992.15 (RP-HPLC)</span>
                <span className="text-[11px] text-primary font-bold">Reverse Phase Gradient</span>
              </div>
            </section>

            {/* Assay 1: Protein Purity Highlights */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  LABEL TARGET
                </span>
                <span className="font-headline-sm text-xl font-black text-on-surface mt-1 block">30.00g</span>
                <span className="text-[10px] text-on-surface-variant font-bold">Per 34g Scoop</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  MEASURED YIELD
                </span>
                <span className="font-headline-sm text-xl font-black text-primary mt-1 block">30.42g</span>
                <span className="text-[10px] text-primary font-bold">101.4% Target (PASS)</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  TOTAL EAAS
                </span>
                <span className="font-headline-sm text-xl font-black text-on-surface mt-1 block">13.85g</span>
                <span className="text-[10px] text-on-surface-variant font-bold">45.5% Protein Fraction</span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold block">
                  BCAA MATRIX (2:1:1)
                </span>
                <span className="font-headline-sm text-xl font-black text-secondary-container mt-1 block">6.71g</span>
                <span className="text-[10px] text-secondary font-bold">3,240mg Leucine Spike</span>
              </div>
            </section>

            {/* HPLC Amino Acid Breakdown Table */}
            <section className="space-y-3">
              <div className="flex items-center justify-between border-b pb-2 border-surface-container">
                <h3 className="font-headline-sm text-base uppercase font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">biotech</span>
                  QUANTITATIVE HPLC AMINO ACID SPECTRUM (PER 34G SERVING)
                </h3>
                <span className="font-label-caps text-xs text-primary font-bold">NO AMINO SPIKING DETECTED</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-surface-container rounded-lg overflow-hidden">
                  <thead className="bg-surface-container text-on-surface-variant font-label-caps text-[10px] uppercase">
                    <tr>
                      <th className="p-3">Amino Acid Analyte</th>
                      <th className="p-3">Classification</th>
                      <th className="p-3 text-right">Measured (mg)</th>
                      <th className="p-3 text-right">Label Spec (mg)</th>
                      <th className="p-3 text-right">WHO Standard Ratio</th>
                      <th className="p-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm">
                    {AMINO_ACID_PROFILE.map((amino) => (
                      <tr key={amino.name} className="hover:bg-surface-container-low transition-colors">
                        <td className="p-3 font-bold text-on-surface">{amino.name}</td>
                        <td className="p-3 uppercase font-label-caps text-[10px] text-on-surface-variant font-bold">
                          {amino.category}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-on-surface">
                          {amino.amountMg.toLocaleString()} mg
                        </td>
                        <td className="p-3 text-right text-on-surface-variant font-mono">
                          {Math.round(amino.amountMg * 0.96).toLocaleString()} mg
                        </td>
                        <td className="p-3 text-right font-bold text-primary font-label-caps">
                          {amino.percentageStandard}%
                        </td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-fixed font-label-caps text-[9px] font-black">
                            CONFORMING
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Official Sign-Off Strip */}
            <footer className="pt-6 border-t-2 border-on-surface flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold font-mono text-on-surface">
                  EV
                </div>
                <div>
                  <span className="font-headline-sm text-xs font-bold text-on-surface block">
                    Dr. Elena Vance, PhD
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Principal Analytical Chemist • Eurofins Bioanalytical Protocol
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-label-caps text-[10px] text-outline-variant block font-mono">
                  SHA256: 8f9b2c31e9a4f6d0b5e8c1a7d3f2e4b6c8a0d9e7f1
                </span>
                <span className="text-xs text-primary font-bold">Certified Valid Electronic Signature</span>
              </div>
            </footer>
          </article>
        )}

        {/* PAGE 2: ICP-MS HEAVY METALS & MICROBIOLOGICAL SCREEN */}
        {activeSheet === 'sheet-2' && (
          <article
            className={`w-full max-w-[1040px] bg-surface-container-lowest text-on-surface shadow-2xl rounded-xl p-6 sm:p-10 md:p-14 flex flex-col gap-8 transition-all border border-surface-container-high ${
              isZoomed ? 'scale-105' : ''
            }`}
          >
            <header className="flex flex-col gap-6 border-b-2 border-on-surface pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 bg-on-surface text-secondary-container flex items-center justify-center rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-3xl font-black">shield</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-lg font-black uppercase tracking-tight text-on-surface block">
                      APEX ANALYTICAL LABS
                    </span>
                    <span className="font-body-sm text-xs text-on-surface-variant">
                      Elemental Spectroscopy & Trace Contaminants Division
                    </span>
                    <span className="font-label-caps text-outline text-[10px] font-bold block">
                      AGILENT 7900 ICP-MS INSTRUMENT SUITE #MS-994
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="bg-primary-container text-on-primary-fixed font-label-caps text-xs px-2.5 py-1 rounded font-black uppercase">
                    TRACE PURITY VERIFIED
                  </span>
                </div>
              </div>

              <div>
                <span className="font-label-caps text-[11px] text-secondary font-black uppercase tracking-widest block">
                  CONTAMINANT SCREENING PROTOCOL
                </span>
                <h1 className="font-headline-lg text-2xl uppercase font-black tracking-tight text-on-surface">
                  HEAVY METALS & ELEMENTAL PURITY ASSAY (ICP-MS)
                </h1>
              </div>
            </header>

            {/* Heavy Metals Table */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2 border-surface-container">
                <h3 className="font-headline-sm text-base uppercase font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">shield</span>
                  INDUCTIVELY COUPLED PLASMA MASS SPECTROMETRY (ICP-MS)
                </h3>
                <span className="font-label-caps text-xs text-secondary font-bold">METHOD: EPA 6020B / USP &lt;233&gt;</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-surface-container rounded-lg overflow-hidden">
                  <thead className="bg-surface-container text-on-surface-variant font-label-caps text-[10px] uppercase">
                    <tr>
                      <th className="p-3">Analyte Element</th>
                      <th className="p-3">Symbol</th>
                      <th className="p-3">FDA/USP Strict Limit</th>
                      <th className="p-3">Quantifiable Detection Limit</th>
                      <th className="p-3">Sample Result</th>
                      <th className="p-3 text-right">Disposition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm">
                    {HEAVY_METALS.map((hm) => (
                      <tr key={hm.element} className="hover:bg-surface-container-low transition-colors">
                        <td className="p-3 font-bold text-on-surface">{hm.element}</td>
                        <td className="p-3 font-mono font-bold text-on-surface-variant">{hm.symbol}</td>
                        <td className="p-3 text-on-surface-variant">{hm.fdaLimitPpm}</td>
                        <td className="p-3 text-on-surface-variant">0.001 ppm</td>
                        <td className="p-3 font-mono font-bold text-primary">{hm.detectedPpm}</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-fixed font-label-caps text-[10px] font-black">
                            NOT DETECTED (PASS)
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pathogen Safety Screen */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2 border-surface-container">
                <h3 className="font-headline-sm text-base uppercase font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">bug_report</span>
                  MICROBIOLOGICAL PATHOGEN SAFETY ASSAY (USP &lt;2021/2022&gt;)
                </h3>
                <span className="font-label-caps text-xs text-primary font-bold">ZERO PATHOGEN DETECTION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MICRO_METRICS.map((micro) => (
                  <div
                    key={micro.pathogen}
                    className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between"
                  >
                    <div>
                      <span className="font-label-md text-xs font-bold text-on-surface block">
                        {micro.pathogen}
                      </span>
                      <span className="text-[11px] text-on-surface-variant">Spec: {micro.specification}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-caps text-[10px] font-black">
                      {micro.result}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <footer className="pt-6 border-t-2 border-on-surface flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold font-mono text-on-surface">
                  MT
                </div>
                <div>
                  <span className="font-headline-sm text-xs font-bold text-on-surface block">
                    Marcus Thorne
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    VP Quality Assurance & Formulation Integrity, Apex Labs
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-label-caps text-[10px] text-outline-variant block font-mono">
                  ICP-MS RUN #8842-B • VALIDATED
                </span>
                <span className="text-xs text-primary font-bold">100% Release Approval Granted</span>
              </div>
            </footer>
          </article>
        )}
      </section>
    </div>
  );
};

