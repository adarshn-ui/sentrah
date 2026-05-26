import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function OfflineCapabilityVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden font-mono text-xs text-[#5A6E85]">
      <div className="w-full max-w-[280px] bg-white border border-[#EAE3D5] shadow-sm text-[#5A6E85] p-3 space-y-3 rounded-none relative">
        
        {/* Connection Bar Header */}
        <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-2 text-[11px] font-extrabold">
          <span className="text-[#0A2540] uppercase tracking-wider">Sync Activity Queue</span>
          
          {/* Animated network status badges */}
          {step === 0 && (
            <span className="flex items-center gap-1 text-green-700 bg-green-50 px-1 border border-green-200">
              <Wifi className="w-2.5 h-2.5" /> ONLINE
            </span>
          )}
          {step === 1 && (
            <span className="flex items-center gap-1 text-red-600 bg-red-50 px-1 border border-red-200 animate-pulse">
              <WifiOff className="w-2.5 h-2.5" /> OFFLINE (CACHE ACTIVE)
            </span>
          )}
          {step === 2 && (
            <span className="flex items-center gap-1 text-indigo-700 bg-indigo-50 px-1 border border-indigo-200 animate-pulse">
              <RefreshCw className="w-2.5 h-2.5 animate-spin" /> SYNCING...
            </span>
          )}
          {step === 3 && (
            <span className="flex items-center gap-1 text-green-700 bg-green-50 px-1 border border-green-200">
              <Wifi className="w-2.5 h-2.5" /> ONLINE
            </span>
          )}
        </div>

        {/* Sync Queue Rows */}
        <div className="space-y-2">
          
          {/* Row 1: Emma Carter */}
          <div className="flex items-center justify-between py-1 border-b border-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] flex items-center justify-center font-bold text-[10px] rounded-none">
                EC
              </div>
              <div>
                <p className="font-extrabold text-[#0A2540]">Emma Carter</p>
                <p className="text-[10px]">Logged offline ticket</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-bold">
              {/* Dynamic status indicators */}
              {step === 0 && (
                <span className="text-[10px] text-[#5A6E85] font-semibold">Idle</span>
              )}
              {step === 1 && (
                <span className="text-[10px] text-yellow-700 bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 uppercase animate-pulse">
                  ● Pending (Cached)
                </span>
              )}
              {step === 2 && (
                <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 flex items-center gap-1">
                  <RefreshCw className="w-2 h-2 animate-spin" /> Syncing...
                </span>
              )}
              {step === 3 && (
                <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 flex items-center gap-1 animate-scaleIn">
                  ✓ Synced
                </span>
              )}
            </div>
          </div>

          {/* Row 2: James Patel */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] flex items-center justify-center font-bold text-[10px] rounded-none">
                JP
              </div>
              <div>
                <p className="font-extrabold text-[#0A2540]">James Patel</p>
                <p className="text-[10px]">Synced coordinates</p>
              </div>
            </div>

            <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 font-bold">
              ✓ Synced
            </span>
          </div>

        </div>

        {/* Dynamic status footer explanation */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-2 rounded-none text-center text-[10px]">
          {step === 0 && <span className="font-bold text-[#5A6E85]">Connection stable. Sync queue is up-to-date.</span>}
          {step === 1 && <span className="font-extrabold text-red-600 animate-pulse">NO INTERNET: visit coordinates secured inside local ground cache.</span>}
          {step === 2 && <span className="font-extrabold text-indigo-700">NETWORK DETECTED: pushing 1 cached activity to command database...</span>}
          {step === 3 && <span className="font-extrabold text-green-700 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> Local cached transaction synchronized successfully!
          </span>}
        </div>

      </div>
    </div>
  );
}
