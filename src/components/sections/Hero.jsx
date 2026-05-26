import React from 'react';
import SplitText from '../common/SplitText';
import CountUp from '../common/CountUp';
import HeroDashboardVisual from '../visuals/HeroDashboardVisual';
import { Zap, Check, ArrowRight, Wrench, Clock, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4EFE6] border border-[#EAE3D5] text-xs font-bold uppercase tracking-wider text-[#5A6E85] mb-6">
              <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779793203/Group_52_qjffst.svg" alt="Sentrah Logo" className="w-16 h-4 object-contain" /> Enterprise Field Operations Platform
            </span>
            
            <SplitText
              text="Enterprise Field Operations Platform"
              tag="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.05] mb-6 text-left"
              textAlign="left"
              delay={35}
            />
            
            <p className="text-lg md:text-xl text-[#5A6E85] font-normal leading-relaxed mb-8 max-w-xl">
              Field execution visibility and SLA control implemented in 14–21 days.
            </p>

            {/* Supporting Points */}
            <div className="space-y-3.5 mb-8 w-full">
              {[
                "Real-time field task status",
                "Service reports",
                "Live location tracking",
                "Automated SLA escalations",
                "Non-disruptive deployment—no changes to existing systems"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white border border-[#EAE3D5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0A2540]" />
                  </div>
                  <span className="text-sm font-semibold text-[#0A2540]">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="mailto:connect@sentrah.com"
                className="px-6 py-3.5 bg-[#0A2540] text-white text-[12px] font-bold uppercase tracking-wider rounded hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2 text-center"
              >
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#live-operations"
                className="px-6 py-3.5 bg-white text-[#0A2540] border border-[#EAE3D5] text-[12px] font-bold uppercase tracking-wider rounded hover:bg-[#F4EFE6] transition-colors text-center"
              >
                View Live Operations
              </a>
            </div>
          </div>

          {/* Right Dashboard Preview Mockup (Static High Fidelity Grid) */}
          <div className="lg:col-span-6">
            <HeroDashboardVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
