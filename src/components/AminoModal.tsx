import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AMINO_ACID_PROFILE } from '../data/mockData';

export const AminoModal: React.FC = () => {
  const { isAminoModalOpen, closeAminoModal, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'essential' | 'conditionally-essential' | 'non-essential'>('all');

  if (!isAminoModalOpen) return null;

  const filteredList = AMINO_ACID_PROFILE.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleDownloadPdf = () => {
    showToast('Downloading ISO-17025 Certified HPLC Amino Assay PDF...', 'volt');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/70 transition-all">
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_#000] my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#F4F0EA] text-black p-5 sm:p-6 relative shrink-0 border-b-2 border-black">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#FFE600] text-black font-label-caps text-[10px] px-2.5 py-1 font-black uppercase tracking-wider border border-black rounded-lg shadow-[1px_1px_0px_#000]">
                  CLINICAL HPLC ASSAY • BATCH #APX-9924-W
                </span>
                <span className="flex items-center gap-1 text-[#0038FF] text-xs font-black uppercase">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  ISO/IEC 17025 VERIFIED
                </span>
              </div>
              <h2 className="font-headline-sm text-2xl uppercase tracking-tight text-black font-black">
                COMPLETE AMINO ACID SPECTRUM
              </h2>
              <p className="text-xs text-neutral-600 font-medium">
                Quantitative Reverse Phase High-Performance Liquid Chromatography (RP-HPLC) Assay per 34g Serving
              </p>
            </div>

            <button
              onClick={closeAminoModal}
              className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-xl text-black hover:bg-[#E63946] hover:text-white transition-colors cursor-pointer shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-xl font-bold">close</span>
            </button>
          </div>

          {/* Key Stat Cards Strip */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-white border-2 border-black rounded-2xl p-3 text-center shadow-[2.5px_2.5px_0px_#000]">
              <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">
                TOTAL EAAs
              </span>
              <span className="font-headline-sm text-xl font-black text-black mt-0.5 block">
                13,850 mg
              </span>
              <span className="text-[10px] text-neutral-600 font-bold">Essential Amino Acids</span>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-3 text-center shadow-[2.5px_2.5px_0px_#000]">
              <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">
                TOTAL BCAAs
              </span>
              <span className="font-headline-sm text-xl font-black text-[#0038FF] mt-0.5 block">
                6,710 mg
              </span>
              <span className="text-[10px] text-neutral-600 font-bold">2:1:1 Clinical Ratio</span>
            </div>

            <div className="bg-white border-2 border-black rounded-2xl p-3 text-center shadow-[2.5px_2.5px_0px_#000]">
              <span className="font-label-caps text-[10px] text-neutral-600 block uppercase font-black">
                L-LEUCINE
              </span>
              <span className="font-headline-sm text-xl font-black text-[#E63946] mt-0.5 block">
                3,240 mg
              </span>
              <span className="text-[10px] text-neutral-600 font-bold">mTOR Anabolic Trigger</span>
            </div>
          </div>
        </div>

        {/* Tab Filter Strip */}
        <div className="px-5 py-3 bg-[#F4F0EA] border-b-2 border-black flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 font-label-caps text-xs font-black uppercase transition-all cursor-pointer border-2 border-black rounded-xl ${
                activeTab === 'all'
                  ? 'bg-[#FFE600] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF7F2]'
              }`}
            >
              All 18 Aminos ({AMINO_ACID_PROFILE.length})
            </button>
            <button
              onClick={() => setActiveTab('essential')}
              className={`px-3.5 py-1.5 font-label-caps text-xs font-black uppercase transition-all cursor-pointer border-2 border-black rounded-xl ${
                activeTab === 'essential'
                  ? 'bg-[#FFE600] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF7F2]'
              }`}
            >
              Essential EAAs (9)
            </button>
            <button
              onClick={() => setActiveTab('conditionally-essential')}
              className={`px-3.5 py-1.5 font-label-caps text-xs font-black uppercase transition-all cursor-pointer border-2 border-black rounded-xl ${
                activeTab === 'conditionally-essential'
                  ? 'bg-[#FFE600] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF7F2]'
              }`}
            >
              Conditionally Essential (5)
            </button>
            <button
              onClick={() => setActiveTab('non-essential')}
              className={`px-3.5 py-1.5 font-label-caps text-xs font-black uppercase transition-all cursor-pointer border-2 border-black rounded-xl ${
                activeTab === 'non-essential'
                  ? 'bg-[#FFE600] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF7F2]'
              }`}
            >
              Non-Essential (4)
            </button>
          </div>

          <span className="hidden sm:inline text-[11px] text-neutral-600 font-black uppercase">
            WHO/FAO Standard Ref: 100%
          </span>
        </div>

        {/* Amino Table */}
        <div className="p-5 overflow-y-auto flex-1 divide-y-2 divide-black/10">
          <div className="grid grid-cols-12 text-[11px] font-label-caps uppercase text-black pb-2 px-3 font-black border-b-2 border-black">
            <div className="col-span-5">Amino Acid & Biological Role</div>
            <div className="col-span-3 text-right">Yield (mg/scoop)</div>
            <div className="col-span-4 pl-6">Standard Benchmark Ratio</div>
          </div>

          {filteredList.map((item, idx) => (
            <div
              key={item.name}
              className={`grid grid-cols-12 items-center py-3 px-3 transition-colors ${
                idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'
              } hover:bg-[#F4F0EA]`}
            >
              <div className="col-span-5">
                <div className="font-label-md text-sm font-black text-black flex items-center gap-1.5">
                  {item.name}
                  {item.category === 'essential' && (
                    <span className="bg-[#FFE600] text-black text-[9px] font-black px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                      EAA
                    </span>
                  )}
                </div>
                {item.biologicalFunction && (
                  <p className="text-[11px] text-neutral-600 font-medium line-clamp-1 mt-0.5">
                    {item.biologicalFunction}
                  </p>
                )}
              </div>

              <div className="col-span-3 text-right">
                <span className="font-headline-sm text-base font-black text-black">
                  {item.amountMg.toLocaleString()}
                </span>
                <span className="text-[11px] text-neutral-600 ml-1 font-bold">mg</span>
              </div>

              <div className="col-span-4 pl-6">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-[#F4F0EA] border border-black overflow-hidden">
                    <div
                      className="h-full bg-[#0038FF]"
                      style={{ width: `${Math.min(100, (item.percentageStandard / 130) * 100)}%` }}
                    />
                  </div>
                  <span className="font-label-caps text-[11px] font-black text-[#0038FF] min-w-[36px]">
                    {item.percentageStandard}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Strip */}
        <div className="p-4 px-6 bg-[#F4F0EA] border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-700 font-semibold">
            <span className="material-symbols-outlined text-base text-[#0038FF] font-bold">verified</span>
            <span>Zero added glycine, taurine, or free-form fillers (100% genuine dairy protein assay).</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 bg-white hover:bg-[#FAF7F2] text-black border-2 border-black rounded-xl font-label-md text-xs uppercase font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm font-bold">download</span>
              <span>DOWNLOAD RP-HPLC PDF</span>
            </button>
            <button
              onClick={closeAminoModal}
              className="px-5 py-2 bg-black hover:bg-neutral-800 text-white border-2 border-black rounded-xl font-label-md text-xs uppercase font-black transition-all cursor-pointer shadow-[2px_2px_0px_#FFE600] active:translate-x-0.5 active:translate-y-0.5"
            >
              CLOSE AUDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
