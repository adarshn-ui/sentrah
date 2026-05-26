import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#EAE3D5] px-6 text-[#0A2540]">
      <div className="container mx-auto max-w-5xl text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">GET STARTED TODAY</span>
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-6 leading-tight max-w-3xl mx-auto">
          Take Intelligent Control of Your Field Operations
        </h2>
        
        <p className="text-sm md:text-base text-[#5A6E85] leading-relaxed max-w-xl mx-auto mb-10 font-semibold">
          Establish field execution visibility, live location mapping, and robust SLA monitoring in 14–21 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="mailto:connect@sentrah.com"
            className="w-full sm:w-auto px-8 py-4 bg-[#0A2540] text-white text-[12px] font-bold uppercase tracking-widest rounded hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+9689485229"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A2540] border border-[#EAE3D5] text-[12px] font-bold uppercase tracking-widest rounded hover:bg-[#F4EFE6] transition-colors"
          >
            Call: +968 9485229
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#EAE3D5] text-[#0A2540]">
          <div>
            <span className="text-[11px] font-bold text-[#5A6E85] uppercase tracking-wider block mb-1">Corporate Entity</span>
            <span className="text-xs font-extrabold uppercase">LUCID TECH SOLUTIONS LLC</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#5A6E85] uppercase tracking-wider block mb-1">Primary Email</span>
            <a href="mailto:connect@sentrah.com" className="text-xs font-extrabold underline text-indigo-700 hover:text-indigo-900">
              connect@sentrah.com
            </a>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#5A6E85] uppercase tracking-wider block mb-1">Operational Footprint</span>
            <span className="text-xs font-extrabold uppercase">Kuwait • Oman • India</span>
          </div>
        </div>

      </div>
    </section>
  );
};
