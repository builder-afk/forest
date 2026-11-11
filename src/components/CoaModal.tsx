import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LAB_METRICS, HEAVY_METALS, MICRO_METRICS, AMINO_ACID_PROFILE } from '../data/mockData';

export const CoaModal: React.FC = () => {
  const { isCoaModalOpen, closeCoaModal, selectedBatchNumber, setSelectedBatchNumber, showToast } = useApp();
  const [activePage, setActivePage] = useState<'amino' | 'heavy-metals'>('amino');

  if (!isCoaModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDossier = () => {
    showToast(`Downloading official Certificate of Analysis for Lot #${selectedBatchNumber} (PDF)...`, 'volt');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/70">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] my-auto flex flex-col max-h-[94vh]">
        {/* Document Action Toolbar */}
        <div className="bg-[#F4F0EA] px-4 sm:px-6 py-3 border-b-2 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-1.5 font-label-caps text-xs text-neutral-600 uppercase tracking-wider font-bold">
              <span>QA &amp; Lab Network</span>
              <span>/</span>
              <span>Certificates</span>
              <span>/</span>
              <select
                value={selectedBatchNumber}
                onChange={(e) => setSelectedBatchNumber(e.target.value)}
                className="bg-white text-black font-black px-2.5 py-1 border-2 border-black rounded-lg text-xs focus:outline-none cursor-pointer shadow-[1px_1px_0px_#000]"
              >
                <option value="APX-9924-W">LOT #APX-9924-W (Apex Pro Whey)</option>
                <option value="APX-9921-V">LOT #APX-9921-V (Hydrolyzed)</option>
                <option value="APX-9884-U">LOT #APX-9884-U (Clear Whey)</option>
              </select>
            </nav>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFE600] text-black font-label-caps text-[11px] font-black border border-black rounded-lg shadow-[1px_1px_0px_#000]">
              <span className="w-2 h-2 bg-black rounded-full inline-block" />
              HASH: e8c4..9f12 • ISO 17025 ACCREDITED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1 bg-white border-2 border-black rounded-xl p-0.5 text-xs font-label-caps">
              <button
                onClick={() => setActivePage('amino')}
                className={`px-3 py-1 text-xs font-black uppercase transition-all cursor-pointer rounded-lg ${
                  activePage === 'amino'
                    ? 'bg-[#FFE600] text-black border border-black shadow-[1px_1px_0px_#000]'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Page 1: Protein &amp; Aminos
              </button>
              <button
                onClick={() => setActivePage('heavy-metals')}
                className={`px-3 py-1 text-xs font-black uppercase transition-all cursor-pointer rounded-lg ${
                  activePage === 'heavy-metals'
                    ? 'bg-[#FFE600] text-black border border-black shadow-[1px_1px_0px_#000]'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Page 2: Heavy Metals &amp; Micro
              </button>
            </div>

            <button
              onClick={handleDownloadDossier}
              className="px-3.5 py-1.5 bg-[#0038FF] hover:bg-[#002BCC] text-white font-label-md text-xs font-black uppercase transition-all flex items-center gap-1 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span className="hidden md:inline">Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 bg-white hover:bg-[#F4F0EA] text-black text-xs border-2 border-black rounded-xl shadow-[1.5px_1.5px_0px_#000] transition-colors cursor-pointer"
              title="Print Certificate"
            >
              <span className="material-symbols-outlined text-base">print</span>
            </button>

            <button
              onClick={closeCoaModal}
              className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-xl text-black hover:bg-[#E63946] hover:text-white transition-colors cursor-pointer shadow-[1.5px_1.5px_0px_#000] ml-1"
            >
              <span className="material-symbols-outlined text-xl font-bold">close</span>
            </button>
          </div>
        </div>

        {/* Certificate Paper Frame */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-[#F4F0EA] font-body-sm text-black">
          <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000] p-6 md:p-10 space-y-8">
            {/* Header Letterhead */}
            <div className="border-b-2 border-black pb-6 flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FFE600] border-2 border-black rounded-2xl text-black flex items-center justify-center font-black text-2xl shadow-[2px_2px_0px_#000]">
                  <span className="material-symbols-outlined text-3xl font-black">science</span>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-[#0038FF] font-black uppercase tracking-widest block">
                    EUROFINS BIOANALYTICAL TESTING PARTNER
                  </span>
                  <h1 className="font-headline-sm text-xl uppercase font-black tracking-tight text-black">
                    CERTIFICATE OF ANALYSIS (COA)
                  </h1>
                  <span className="text-xs text-neutral-600 font-bold">
                    Independent Laboratory Verification • ISO/IEC 17025:2017 #L22-841
                  </span>
                </div>
              </div>

              <div className="text-right sm:self-center border-2 border-black rounded-xl p-3 bg-[#F4F0EA] shadow-[2px_2px_0px_#000]">
                <span className="font-label-caps text-[10px] uppercase text-neutral-600 block font-black">
                  VERIFIED ASSAY STATUS
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-black text-black bg-[#FFE600] px-2 py-0.5 border border-black rounded-md font-label-caps mt-1">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  100% LABEL CLAIM PASS
                </span>
              </div>
            </div>

            {/* Spec Information Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F4F0EA] border-2 border-black text-xs font-semibold">
              <div>
                <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">Product Name</span>
                <span className="font-black text-black">Apex Pro 100% Whey Isolate</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">Lot / Batch ID</span>
                <span className="font-black font-mono text-[#0038FF]">{selectedBatchNumber}</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">Production Date</span>
                <span className="font-black text-black">October 12, 2026</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">Retest / Expiry</span>
                <span className="font-black text-black">October 2028 (24 Mo)</span>
              </div>
            </div>

            {activePage === 'amino' ? (
              <>
                {/* Assay 1: Protein Purity HPLC */}
                <div>
                  <div className="flex items-center justify-between border-b-2 pb-2 mb-4 border-black">
                    <h3 className="font-headline-sm text-base uppercase font-black text-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0038FF] text-xl font-bold">biotech</span>
                      PROTEIN PURITY & MACRONUTRIENT ASSAY (RP-HPLC)
                    </h3>
                    <span className="font-label-caps text-xs text-black font-black bg-[#FFE600] px-2 py-0.5 border border-black">
                      METHOD: AOAC 992.15
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-2 border-black">
                      <thead className="bg-[#F4F0EA] text-black font-label-caps text-[10px] uppercase font-black border-b-2 border-black">
                        <tr>
                          <th className="p-3 border-r-2 border-black">Assay Parameter</th>
                          <th className="p-3 border-r-2 border-black">Target / Label Claim</th>
                          <th className="p-3 border-r-2 border-black">Lab Measured Result</th>
                          <th className="p-3 border-r-2 border-black">Variance</th>
                          <th className="p-3 text-right">Assay Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-black/10">
                        {LAB_METRICS.map((row) => (
                          <tr key={row.assayName} className="hover:bg-[#FAF7F2] transition-colors">
                            <td className="p-3 font-black text-black border-r-2 border-black/10">{row.assayName}</td>
                            <td className="p-3 text-neutral-700 font-medium border-r-2 border-black/10">{row.targetClaim}</td>
                            <td className="p-3 font-mono font-black text-black border-r-2 border-black/10">{row.measuredResult}</td>
                            <td className="p-3 text-[#0038FF] font-black border-r-2 border-black/10">{row.variancePercentage}</td>
                            <td className="p-3 text-right">
                              <span className="px-2 py-0.5 bg-[#FFE600] text-black font-label-caps text-[10px] font-black border border-black shadow-[1px_1px_0px_#000]">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* HPLC Amino Profile Preview */}
                <div>
                  <div className="flex items-center justify-between border-b-2 pb-2 mb-4 border-black">
                    <h3 className="font-headline-sm text-base uppercase font-black text-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0038FF] text-xl font-bold">bubble_chart</span>
                      KEY AMINO ACID RECOVERY FRACTIONS (MG/SCOOP)
                    </h3>
                    <span className="font-label-caps text-xs text-neutral-600 font-black">ZERO AMINO-SPIKING</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {AMINO_ACID_PROFILE.slice(0, 8).map((amino) => (
                      <div key={amino.name} className="p-3 bg-[#F4F0EA] border-2 border-black shadow-[2px_2px_0px_#000]">
                        <span className="font-label-md text-xs font-black text-black block truncate uppercase">
                          {amino.name}
                        </span>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="font-headline-sm text-base font-black text-black">
                            {amino.amountMg} mg
                          </span>
                          <span className="text-[10px] font-black text-[#0038FF] font-label-caps">
                            {amino.percentageStandard}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Assay 2: Heavy Metals ICP-MS */}
                <div>
                  <div className="flex items-center justify-between border-b-2 pb-2 mb-4 border-black">
                    <h3 className="font-headline-sm text-base uppercase font-black text-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#E63946] text-xl font-bold">shield</span>
                      HEAVY METALS & CONTAMINANT ASSAY (ICP-MS)
                    </h3>
                    <span className="font-label-caps text-xs text-white font-black bg-[#E63946] px-2 py-0.5 border border-black">
                      METHOD: EPA 6020B / USP &lt;233&gt;
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-2 border-black">
                      <thead className="bg-[#F4F0EA] text-black font-label-caps text-[10px] uppercase font-black border-b-2 border-black">
                        <tr>
                          <th className="p-3 border-r-2 border-black">Analyte Element</th>
                          <th className="p-3 border-r-2 border-black">Symbol</th>
                          <th className="p-3 border-r-2 border-black">FDA & USP Strict Limit</th>
                          <th className="p-3 border-r-2 border-black">Detected Concentration</th>
                          <th className="p-3 text-right">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-black/10">
                        {HEAVY_METALS.map((hm) => (
                          <tr key={hm.element} className="hover:bg-[#FAF7F2] transition-colors">
                            <td className="p-3 font-black text-black border-r-2 border-black/10">{hm.element}</td>
                            <td className="p-3 font-mono text-neutral-600 font-bold border-r-2 border-black/10">{hm.symbol}</td>
                            <td className="p-3 text-neutral-700 font-medium border-r-2 border-black/10">{hm.fdaLimitPpm}</td>
                            <td className="p-3 font-mono font-black text-[#0038FF] border-r-2 border-black/10">{hm.detectedPpm}</td>
                            <td className="p-3 text-right">
                              <span className="px-2 py-0.5 bg-[#FFE600] text-black font-label-caps text-[10px] font-black border border-black shadow-[1px_1px_0px_#000]">
                                NOT DETECTED (PASS)
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Assay 3: Pathogen Screen */}
                <div>
                  <div className="flex items-center justify-between border-b-2 pb-2 mb-4 border-black">
                    <h3 className="font-headline-sm text-base uppercase font-black text-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0038FF] text-xl font-bold">bug_report</span>
                      MICROBIOLOGICAL PATHOGEN SAFETY SCREEN
                    </h3>
                    <span className="font-label-caps text-xs text-black font-black bg-[#FFE600] px-2 py-0.5 border border-black rounded-md">
                      METHOD: FDA-BAM / AOAC
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MICRO_METRICS.map((micro) => (
                      <div key={micro.pathogen} className="p-3.5 bg-[#F4F0EA] border-2 border-black rounded-xl flex items-center justify-between shadow-[2px_2px_0px_#000]">
                        <div>
                          <span className="font-label-md text-xs font-black text-black block uppercase">
                            {micro.pathogen}
                          </span>
                          <span className="text-[11px] text-neutral-600 font-semibold">Spec: {micro.specification}</span>
                        </div>
                        <span className="px-2 py-1 bg-white border border-black text-[#0038FF] font-label-caps text-[10px] font-black rounded-md shadow-[1px_1px_0px_#000]">
                          {micro.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Official Signatures Strip */}
            <div className="border-t-2 border-black pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-black bg-[#FFE600] rounded-xl flex items-center justify-center font-black font-mono text-black shadow-[1.5px_1.5px_0px_#000]">
                  EV
                </div>
                <div>
                  <span className="font-label-md text-xs font-black text-black block">
                    Dr. Elena Vance, PhD
                  </span>
                  <span className="text-[11px] text-neutral-600 font-medium">
                    Lead Analytical Chemist, Eurofins Bioanalytical LLC
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-black bg-[#FFE600] rounded-xl flex items-center justify-center font-black font-mono text-black shadow-[1.5px_1.5px_0px_#000]">
                  MT
                </div>
                <div>
                  <span className="font-label-md text-xs font-black text-black block">
                    Marcus Thorne
                  </span>
                  <span className="text-[11px] text-neutral-600 font-medium">
                    VP Quality Assurance & Formulation Integrity, Apex Labs
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-label-caps text-[10px] text-neutral-600 block font-mono font-black">
                  DIGITAL CERTIFICATE #APX-ISO-8842-COA
                </span>
                <span className="text-xs text-[#0038FF] font-black">2048-Bit SHA Cryptographic Seal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
