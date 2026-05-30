import React, { useState, useEffect } from 'react';
import { Edit3, CheckCircle2, FileText, Send, SquareCheck } from 'lucide-react';

export default function InstantReportsVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      {/* Step 0: Form filling & checking */}
      {step === 0 && (
        <div className="w-full max-w-[220px] bg-white border border-[#EAE3D5] p-3 shadow-xs space-y-3 rounded-none animate-fadeIn">
          <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1.5">
            <span className="font-extrabold text-[#0A2540] uppercase">VISIT LOG: #F8421</span>
            <span className="text-[11px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 font-bold">EDITING</span>
          </div>

          <div className="space-y-2 text-[11px] font-bold">
            <div className="flex items-center justify-between border-b border-[#FAF9F6] pb-1">
              <span className="text-[#0A2540]">1. Pre-Checklist:</span>
              <span className="text-green-700 font-extrabold animate-pulse">✓ COMPLETED</span>
            </div>

            <div className="space-y-1.5 pl-2 font-medium">
              <div className="flex items-center gap-1.5 text-green-700">
                <SquareCheck className="w-3.5 h-3.5" />
                <span>Pressure values logged</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0A2540] animate-pulse">
                <div className="w-3 h-3 border border-indigo-700 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                </div>
                <span>Checking refrigeration levels...</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold pt-1.5 border-t border-[#EAE3D5]">
            <span>FIELD TECH ACTIVE</span>
            <span className="flex items-center gap-1 text-indigo-700">
              <Edit3 className="w-2.5 h-2.5 animate-bounce" /> Writing
            </span>
          </div>
        </div>
      )}

      {/* Step 1: Signature Pad & Sign Off */}
      {step === 1 && (
        <div className="w-full max-w-[220px] bg-white border border-[#EAE3D5] p-3 shadow-xs space-y-2.5 rounded-none animate-fadeIn">
          <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1">
            <span className="font-extrabold text-[#0A2540] uppercase">CLIENT SIGN-OFF</span>
            <span className="text-[11px] text-yellow-700 bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 font-bold uppercase">Awaiting Signature</span>
          </div>

          <p className="text-[10px] leading-snug">Confirm that HVAC chiller compressor maintenance was executed fully under contract SLA terms.</p>

          {/* Signature canvas mockup */}
          <div className="relative h-16 border border-[#EAE3D5] bg-[#FAF9F6] rounded-none overflow-hidden flex items-center justify-center">
            <div className="absolute top-1 left-2 text-[10px] text-[#5A6E85]/50">DRAW SIGNATURE HERE</div>
            {/* Drawing Signature Path SVG */}
            <svg className="w-full h-full absolute inset-0 pointer-events-none">
              <path
                d="M 30,35 Q 60,10 90,45 T 150,25 T 190,40"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="1.8"
                className="animate-drawSignature"
              />
            </svg>
            <div className="absolute right-2 bottom-1 text-[10px] text-[#5A6E85]/30">LISA JACKSON</div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-extrabold text-green-700 animate-pulse">
            <span>✓ VERIFIED CREDENTIALS</span>
            <span>SIGNED OFF</span>
          </div>
        </div>
      )}

      {/* Step 2: PDF compiled & Dispatched */}
      {step === 2 && (
        <div className="w-full max-w-[230px] bg-white border border-[#EAE3D5] p-3.5 shadow-md space-y-3 rounded-none animate-fadeIn relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500"></div>

          <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-2">
            <div className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
              <span className="font-bold text-[#0A2540]">Service Sheet #F8421</span>
            </div>
            <span className="text-[11px] text-green-700 bg-green-50 px-1.5 border border-green-200 uppercase font-bold rounded-none animate-bounce">✓ Signed Off</span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-4.5 h-4.5 bg-[#0A2540] text-white flex items-center justify-center font-bold text-[10px] rounded-none">LJ</div>
            <div>
              <p className="font-extrabold text-[#0A2540]">Lisa Jackson</p>
              <p className="text-[10px] text-[#5A6E85]">Lead Operations Consultant</p>
            </div>
          </div>

          {/* Flying/Sync Arrow Visual */}
          <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-2 flex justify-between items-center rounded-none relative">
            <span className="text-green-700 font-bold text-xs">✓ PDF Report Archive Dispatched</span>
            <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
              <Send className="w-4 h-4 text-indigo-700 animate-reportFly" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
