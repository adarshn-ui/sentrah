import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function SLAMonitoringVisual() {
  const [step, setStep] = useState(0);
  const [timer1, setTimer1] = useState(34);
  const [timer2, setTimer2] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 0) {
      setTimer1(34);
      setTimer2(18);
    } else if (step === 1) {
      setTimer1(12);
      setTimer2(0);
    } else if (step === 2) {
      setTimer1(12);
      setTimer2(3); // Shows 3 mins away after reassignment
    }
  }, [step]);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      
      {/* SLA Dashboard Panel */}
      <div className="w-full max-w-[280px] bg-white border border-[#EAE3D5] p-3 shadow-sm space-y-3 rounded-none relative">
        <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1.5 font-bold">
          <span className="text-[#0A2540] uppercase tracking-wider text-[11px]">SLA Real-time Dashboard</span>
          <span className="flex items-center gap-1 text-[10px] text-green-700 bg-green-50 px-1.5 py-0.5 border border-green-200 uppercase">
            ✓ MONITOR ACTIVE
          </span>
        </div>

        {/* Dynamic Countdown Rows */}
        <div className="space-y-2.5">
          
          {/* Ticket 1: Salmiya Site */}
          <div className={`p-2 border transition-all duration-300 rounded-none ${
            step >= 1 ? 'border-yellow-500 bg-yellow-50/10' : 'border-[#EAE3D5]'
          }`}>
            <div className="flex justify-between items-center text-[10px] font-bold">
              <span className="text-[#0A2540]">#M5028 • Salmiya Site</span>
              
              {/* Dynamic countdown time */}
              <span className={`px-1.5 py-0.5 border font-extrabold flex items-center gap-1 ${
                step >= 1 ? 'text-yellow-700 bg-yellow-50 border-yellow-200 animate-pulse' : 'text-green-700 bg-green-50 border-green-200'
              }`}>
                {timer1}m left
              </span>
            </div>
            
            {/* Warning banner triggered on low time */}
            {step >= 1 && (
              <div className="mt-1.5 flex items-center gap-1 text-[10px] text-yellow-700 font-extrabold animate-fadeIn">
                <AlertTriangle className="w-2.5 h-2.5 shrink-0" />
                <span>WARNING: Below SLA threshold (Notification sent)</span>
              </div>
            )}
          </div>

          {/* Ticket 2: Ruwi Station */}
          <div className={`p-2 border transition-all duration-300 rounded-none ${
            step === 0 ? 'border-[#EAE3D5]' : step === 1 ? 'border-red-500 bg-red-50/10' : 'border-green-500 bg-green-50/10'
          }`}>
            <div className="flex justify-between items-center text-[10px] font-bold">
              <span className="text-[#0A2540]">#F8421 • Ruwi Station</span>
              
              {/* Dynamic countdown time */}
              {step === 0 && (
                <span className="text-yellow-700 bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 font-extrabold">
                  {timer2}m left
                </span>
              )}
              {step === 1 && (
                <span className="text-white bg-red-600 border border-red-600 px-1.5 py-0.5 font-extrabold animate-pulse">
                  BREACHED
                </span>
              )}
              {step === 2 && (
                <span className="text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 font-extrabold">
                  {timer2}m away
                </span>
              )}
            </div>

            {/* Step dependent breach / resolved banners */}
            {step === 1 && (
              <div className="mt-1.5 flex items-center gap-1 text-[10px] text-red-600 font-extrabold animate-pulse">
                <span>✕ URGENT: Escalation active</span>
              </div>
            )}
            {step === 2 && (
              <div className="mt-1.5 flex items-center gap-1 text-[10px] text-green-700 font-extrabold animate-scaleIn">
                <ShieldCheck className="w-2.5 h-2.5 shrink-0" />
                <span>✓ RE-ROUTED: Tech dispatched</span>
              </div>
            )}
          </div>

        </div>

        {/* Action Button & Virtual cursor for Step 1 -> Step 2 transition */}
        {step === 1 && (
          <div className="relative pt-1 animate-fadeIn">
            <button className="w-full bg-[#0A2540] text-white py-1.5 font-bold uppercase tracking-wider rounded-none relative border border-[#0A2540] flex items-center justify-center gap-1 shadow-sm">
              <Zap className="w-2.5 h-2.5 fill-indigo-400 text-indigo-400 animate-bounce" />
              Re-route Nearest Technician
              <span className="absolute right-1 top-1 w-1 h-1 bg-red-400 rounded-full animate-ping"></span>
            </button>

            {/* Virtual cursor clicking the re-route action */}
            <div className="absolute bottom-[-12px] right-14 w-3.5 h-3.5 pointer-events-none transform translate-y-[-10px] animate-cursorClick">
              <svg className="w-3.5 h-3.5 text-[#0A2540] fill-white drop-shadow-md" viewBox="0 0 24 24">
                <path d="M4.5 3v15.2l3.9-3.9 3 7.3 2.6-1.1-3-7.3 5-.5z" stroke="currentColor" strokeWidth={1.5} />
              </svg>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
