import React, { useState, useEffect } from 'react';
import { Play, Calendar, User, Compass, CheckCircle2 } from 'lucide-react';

export default function GPSTrackingVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      {/* Step 0: Dashboard Filter Setup */}
      {step === 0 && (
        <div className="w-full max-w-[220px] bg-white border border-[#EAE3D5] p-3 shadow-xs space-y-3 rounded-none animate-fadeIn relative">
          <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1.5">
            <span className="font-extrabold text-[#0A2540]">ROUTE FILTER</span>
            <span className="text-[11px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 font-bold">READY</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-[#FAF9F6] border border-[#EAE3D5] px-2 py-1">
              <User className="w-3 h-3 text-indigo-700 shrink-0" />
              <div className="flex-1 flex justify-between">
                <span>TECH:</span>
                <span className="font-bold text-[#0A2540] animate-pulse">Youssef A.</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#FAF9F6] border border-[#EAE3D5] px-2 py-1">
              <Calendar className="w-3 h-3 text-indigo-700 shrink-0" />
              <div className="flex-1 flex justify-between">
                <span>RANGE:</span>
                <span className="font-bold text-[#0A2540]">Today (Live)</span>
              </div>
            </div>
          </div>

          {/* Button with animated virtual cursor */}
          <div className="relative pt-1">
            <button className="w-full bg-[#0A2540] text-white py-1.5 font-bold uppercase tracking-wider rounded-none relative overflow-hidden transition-all shadow-sm border border-[#0A2540] flex items-center justify-center gap-1">
              <Play className="w-2.5 h-2.5 fill-white" />
              Apply Filter
              <span className="absolute right-1 top-1 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
            </button>

            {/* Virtual cursor icon that "clicks" */}
            <div className="absolute bottom-[-10px] right-8 w-3 h-3 pointer-events-none transform translate-y-[-10px] animate-cursorClick">
              <svg className="w-3.5 h-3.5 text-[#0A2540] fill-white drop-shadow-md" viewBox="0 0 24 24">
                <path d="M4.5 3v15.2l3.9-3.9 3 7.3 2.6-1.1-3-7.3 5-.5z" stroke="currentColor" strokeWidth={1.5} />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Map Rendering & Leg 1 */}
      {step === 1 && (
        <div className="w-full h-full p-4 flex flex-col justify-between animate-fadeIn relative">
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white border border-[#EAE3D5] px-1.5 py-0.5 text-[11px] font-bold text-[#0A2540] shadow-xs">
            <Compass className="w-3 h-3 text-indigo-700 animate-spin" style={{ animationDuration: '4s' }} />
            <span>MAPPING: YOUSSEF A.</span>
          </div>

          {/* Map Grid Schematic Area */}
          <div className="flex-grow flex items-center justify-center relative border border-dashed border-[#EAE3D5] bg-white my-4 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-[#0A2540]"></div>
              ))}
            </div>

            {/* Route path Leg 1 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Path 1 */}
              <line
                x1="30%"
                y1="70%"
                x2="70%"
                y2="30%"
                stroke="#1d4ed8"
                strokeWidth="2"
                strokeDasharray="6"
                className="animate-drawPath"
              />
            </svg>

            {/* Markers */}
            <div className="absolute left-[30%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-[#0A2540] border-2 border-white rounded-full shadow-md"></div>
              <span className="text-[10px] font-bold text-[#0A2540] bg-white border border-[#EAE3D5] px-1 mt-0.5">START</span>
            </div>

            {/* Animated Technician dot */}
            <div 
              className="absolute w-4.5 h-4.5 bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg font-bold border-2 border-white animate-moveTechLeg1"
              style={{ fontSize: '9px' }}
            >
              YA
            </div>

            <div className="absolute left-[70%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-green-600 border-2 border-white rounded-full shadow-md animate-pulse"></div>
              <span className="text-[10px] font-bold text-green-700 bg-white border border-green-200 px-1 mt-0.5">SITE A</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold border-t border-[#EAE3D5]/60 pt-1.5">
            <span className="text-indigo-700">STATUS: TRANSIT TO SITE A</span>
            <span className="text-green-700 animate-pulse">GPS ACTIVE</span>
          </div>
        </div>
      )}

      {/* Step 2: Map Leg 2 & Coordinate Lock */}
      {step === 2 && (
        <div className="w-full h-full p-4 flex flex-col justify-between animate-fadeIn relative">
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white border border-[#EAE3D5] px-1.5 py-0.5 text-[11px] font-bold text-[#0A2540] shadow-xs">
            <Compass className="w-3 h-3 text-indigo-700" />
            <span>MAPPING: YOUSSEF A.</span>
          </div>

          {/* Map Grid Area */}
          <div className="flex-grow flex items-center justify-center relative border border-dashed border-[#EAE3D5] bg-white my-4 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-[#0A2540]"></div>
              ))}
            </div>

            {/* SVG Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="30%" y1="70%" x2="70%" y2="30%" stroke="#1d4ed8" strokeWidth="2" />
              <line
                x1="70%"
                y1="30%"
                x2="85%"
                y2="75%"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="6"
                className="animate-drawPath"
              />
            </svg>

            {/* Markers */}
            <div className="absolute left-[30%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2 h-2 bg-[#0A2540] rounded-full"></div>
            </div>

            <div className="absolute left-[70%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-[10px] font-bold text-green-700 bg-white border border-[#EAE3D5] px-0.5">✓ 14:15</span>
            </div>

            {/* Animated Technician dot leg 2 */}
            <div 
              className="absolute w-4.5 h-4.5 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg font-bold border-2 border-white animate-moveTechLeg2"
              style={{ fontSize: '9px' }}
            >
              YA
            </div>

            <div className="absolute right-[15%] bottom-[25%] translate-x-1/2 translate-y-1/2 flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-green-600 border-2 border-white rounded-full shadow-md animate-ping"></div>
              <span className="text-[10px] font-bold text-green-700 bg-white border border-green-200 px-1 mt-0.5">SITE B</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold border-t border-[#EAE3D5]/60 pt-1.5">
            <span className="text-green-700">STATUS: ARRIVED & LOCKING GPS</span>
            <span className="bg-green-50 border border-green-200 text-green-700 px-1 py-px rounded-none">✓ LOCK 12.2m</span>
          </div>
        </div>
      )}

      {/* Step 3: Route Complete & Audit Seal */}
      {step === 3 && (
        <div className="w-full max-w-[220px] bg-white border border-green-500 p-4 shadow-md space-y-3 rounded-none animate-scaleIn relative">
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-green-500"></div>

          <div className="text-center space-y-2 py-1">
            <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
              <CheckCircle2 className="w-6 h-6 animate-pulse" />
            </div>
            <h4 className="font-extrabold text-[#0A2540] uppercase tracking-wider text-xs">ROUTE AUDIT SEALED</h4>
            <p className="text-[11px] leading-relaxed text-[#5A6E85] font-semibold">
              Technician: <strong className="text-[#0A2540]">Youssef A.</strong> traveled path fully cross-referenced and validated within targeted SLA Radial bounds.
            </p>
          </div>

          <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-2 space-y-1 text-[10px] font-mono text-[#0A2540] font-bold">
            <div className="flex justify-between">
              <span>TOTAL SITES:</span>
              <span className="text-green-700">2 / 2 LOCKED</span>
            </div>
            <div className="flex justify-between">
              <span>DEV METRIC:</span>
              <span className="text-green-700">✓ 100% COMPLIANT</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
