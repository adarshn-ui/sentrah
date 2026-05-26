import React, { useState, useEffect } from 'react';
import { Camera, Lock, Check } from 'lucide-react';

export default function ProofOfWorkVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      {/* Container Box */}
      <div className="w-full max-w-[280px] flex items-stretch gap-3 bg-white border border-[#EAE3D5] p-3 shadow-sm rounded-none">
        
        {/* Left: Interactive Snapshot Viewfinder */}
        <div className="relative w-[130px] h-[110px] bg-[#FAF9F6] border border-[#EAE3D5] flex flex-col items-center justify-center overflow-hidden rounded-none shrink-0">
          
          {/* Grid Layout background */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-5 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-[#0A2540]"></div>
            ))}
          </div>

          {/* Viewfinder Reticle */}
          {step === 0 && (
            <div className="absolute inset-2 border border-dashed border-indigo-700/30 flex items-center justify-center animate-pulse">
              <Camera className="w-6 h-6 text-indigo-700/60 animate-bounce" />
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-indigo-700"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-indigo-700"></div>
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-indigo-700"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-indigo-700"></div>
            </div>
          )}

          {/* Camera Shutter Flash (Step 1) */}
          {step === 1 && (
            <div className="absolute inset-0 bg-white z-20 animate-shutterFlash flex items-center justify-center">
              <span className="font-extrabold text-[#0A2540] text-[10px]">CAPTURING...</span>
            </div>
          )}

          {/* Photo Captured & Scanning (Step 2 and 3) */}
          {(step === 2 || step === 3) && (
            <div className="absolute inset-0 z-10 bg-indigo-50/20 flex flex-col items-center justify-center animate-fadeIn">
              
              {/* Technical Object representation */}
              <div className="w-10 h-10 border-2 border-indigo-700/30 rounded-full flex items-center justify-center relative bg-white">
                <div className="w-6 h-6 border border-indigo-700/40 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-700 animate-pulse"></div>
                </div>
                <div className="absolute inset-[-4px] border border-dashed border-indigo-700/20 rounded-full"></div>
              </div>

              {/* Scanning Radial Line */}
              {step === 2 && (
                <div className="absolute inset-x-0 h-0.5 bg-indigo-500 animate-scanLine z-20 shadow-md"></div>
              )}

              {/* Geo-coordinate Stamp overlay */}
              <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#0A2540] text-white p-1.5 text-[10px] leading-tight space-y-0.5 shadow-md border-l border-indigo-500">
                <p className="font-bold">LAT: 29.3725° N</p>
                <p className="font-bold">LNG: 47.9742° E</p>
                <p className="text-green-400 font-extrabold flex items-center gap-0.5">
                  <span>✓</span> GPS SEAL LOCKED
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right: Validation Checklist & Metadata */}
        <div className="flex-grow flex flex-col justify-between py-1">
          <div className="space-y-2">
            <div className="border-b border-[#EAE3D5] pb-1">
              <span className="font-extrabold text-[#0A2540] block uppercase tracking-wider text-[10px]">Telemetry Seal</span>
            </div>
            
            <div className="space-y-1.5 text-[10px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className={`w-3.5 h-3.5 flex items-center justify-center border text-[10px] ${step >= 1 ? 'bg-green-700 border-green-700 text-white font-extrabold' : 'border-[#EAE3D5] text-transparent'}`}>
                  ✓
                </span>
                <span className={step >= 1 ? 'text-green-700' : 'text-[#5A6E85]'}>VISUAL PROOF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-3.5 h-3.5 flex items-center justify-center border text-[10px] ${step >= 2 ? 'bg-green-700 border-green-700 text-white font-extrabold' : 'border-[#EAE3D5] text-transparent'}`}>
                  ✓
                </span>
                <span className={step >= 2 ? 'text-green-700' : 'text-[#5A6E85]'}>COORD LOCKED</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-3.5 h-3.5 flex items-center justify-center border text-[10px] ${step >= 3 ? 'bg-green-700 border-green-700 text-white font-extrabold' : 'border-[#EAE3D5] text-transparent'}`}>
                  ✓
                </span>
                <span className={step >= 3 ? 'text-green-700' : 'text-[#5A6E85]'}>AUDIT SEALED</span>
              </div>
            </div>
          </div>

          {/* Cryptographic metadata seal */}
          {step === 3 && (
            <div className="bg-[#FAF9F6] border border-indigo-200/50 p-1 flex items-center gap-1 text-[10px] text-indigo-700 font-extrabold rounded-none animate-scaleIn shrink-0">
              <Lock className="w-2 h-2 text-indigo-700 shrink-0" />
              <div className="overflow-hidden">
                <p className="tracking-wider uppercase text-[10px] text-[#0A2540]">SECURED SHA256</p>
                <p className="text-[10px] text-indigo-500 truncate font-mono">0x9F3E8A1D...C721</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
