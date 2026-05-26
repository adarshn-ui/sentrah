import React, { useState, useEffect } from 'react';
import { Search, UserCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function LiveTaskVisibilityVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      {/* Container Box */}
      <div className="w-full max-w-[280px] bg-white border border-[#EAE3D5] shadow-sm font-mono text-xs text-[#5A6E85] rounded-none">
        
        {/* Ticket Header & Search mockup */}
        <div className="p-2 border-b border-[#EAE3D5] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-indigo-700" />
            <span className="text-[#0A2540] font-bold">
              {step === 0 ? 'Search' : 'Search: '}
              <span className="text-indigo-700 font-extrabold border-r border-[#0A2540] pr-0.5 animate-pulse">
                {step === 0 && 'A'}
                {step === 1 && 'AM'}
                {step >= 2 && 'AMC'}
              </span>
            </span>
          </div>
          <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 font-bold">✓ ACTIVE CONTROL</span>
        </div>

        {/* Dynamic Ticket Row */}
        <div className="p-2 space-y-2">
          
          {/* Ticket Card */}
          <div className={`p-2 border transition-all rounded-none duration-300 ${step >= 2 ? 'border-indigo-700 bg-indigo-50/10' : 'border-[#EAE3D5]'}`}>
            
            {/* Top row */}
            <div className="flex items-center justify-between pb-1.5 border-b border-[#EAE3D5]/50">
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-none ${step === 3 ? 'bg-green-600 animate-pulse' : 'bg-indigo-700'}`}></span>
                <span className="text-[#0A2540] font-bold">AMC Repair Chiller</span>
              </div>
              <span className="text-[11px] bg-red-50 text-red-700 px-1.5 py-0.5 border border-red-200 uppercase font-bold">HIGH</span>
            </div>

            {/* Step dependent operational updates */}
            <div className="pt-2 space-y-2">
              
              {/* Step 0 & 1: Unassigned state & Assign Tech */}
              {step <= 1 && (
                <div className="flex justify-between items-center py-1">
                  <span>TECHNICIAN:</span>
                  {step === 0 ? (
                    <span className="text-red-600 bg-red-50 px-1 border border-red-200 font-bold">UNASSIGNED</span>
                  ) : (
                    <span className="text-indigo-700 bg-indigo-50 px-1 border border-indigo-200 font-bold flex items-center gap-0.5 animate-pulse">
                      <UserCheck className="w-2.5 h-2.5" /> Assigning: Ahmad K.
                    </span>
                  )}
                </div>
              )}

              {/* Step 2 & 3: Active Status Milestones */}
              {step >= 2 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span>DISPATCHED: <strong className="text-[#0A2540]">Ahmad Khalil</strong></span>
                    <span className="text-green-700">✓ SYNCED</span>
                  </div>

                  {/* Progressive Milestone timeline */}
                  <div className="flex items-center justify-between text-[10px] font-bold pt-1">
                    
                    <div className="flex items-center gap-1">
                      <span className="w-3.5 h-3.5 bg-indigo-700 text-white rounded-none flex items-center justify-center text-[10px]">01</span>
                      <span className="text-indigo-700">TRANSIT</span>
                    </div>

                    <ChevronRight className="w-3 h-3 text-[#5A6E85]/40" />

                    <div className="flex items-center gap-1">
                      <span className={`w-3.5 h-3.5 rounded-none flex items-center justify-center text-[10px] ${step === 3 ? 'bg-indigo-700 text-white' : 'border border-[#EAE3D5] text-[#5A6E85]'}`}>02</span>
                      <span className={step === 3 ? 'text-indigo-700' : 'text-[#5A6E85]'}>ARRIVED</span>
                    </div>

                    <ChevronRight className="w-3 h-3 text-[#5A6E85]/40" />

                    <div className="flex items-center gap-1">
                      <span className={`w-3.5 h-3.5 rounded-none flex items-center justify-center text-[10px] ${step === 3 ? 'bg-green-700 text-white font-extrabold' : 'border border-[#EAE3D5] text-[#5A6E85]'}`}>
                        {step === 3 ? '✓' : '03'}
                      </span>
                      <span className={step === 3 ? 'text-green-700 font-extrabold' : 'text-[#5A6E85]'}>DONE</span>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Interactive footer status update */}
          <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-2 text-center text-[10px] font-extrabold">
            {step === 0 && <span className="text-[#5A6E85]">Awaiting dispatch filter...</span>}
            {step === 1 && <span className="text-indigo-700 animate-pulse">Matching closest technician by radial proximity...</span>}
            {step === 2 && <span className="text-indigo-700">Technician dispatched. Live coordinate telemetry active.</span>}
            {step === 3 && <span className="text-green-700 flex items-center justify-center gap-1 animate-scaleIn">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> Service checklist complete. Ticket archived.
            </span>}
          </div>

        </div>

      </div>
    </div>
  );
}
