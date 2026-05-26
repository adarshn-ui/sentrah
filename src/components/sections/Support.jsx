import React from 'react';
import { Users, LifeBuoy, RotateCw, Check } from 'lucide-react';

export const Support = () => {
  return (
    <section id="support" className="py-20 md:py-28 bg-white border-t border-[#EAE3D5] px-6 text-[#0A2540]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">CUSTOMER SUCCESS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            Customer Support That Feels Like Partnership
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] font-semibold max-w-lg mx-auto">
            We do not just hand over software. We deploy, configure, train, and continuously refine our system to ensure your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-8 flex flex-col hover:border-[#5A6E85] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded bg-white border border-[#EAE3D5] flex items-center justify-center mb-6 shadow-sm">
              <Users className="w-5 h-5 text-[#0A2540]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A2540] mb-4">Onboarding Specialist</h3>
            <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-semibold">
              Your dedicated specialist works directly with your office staff and ground crew to map operations cleanly.
            </p>
            <ul className="space-y-3.5 text-xs text-[#0A2540] font-extrabold border-t border-[#EAE3D5] pt-5 mt-auto">
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Personalized setup
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Team training
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Process mapping
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-8 flex flex-col hover:border-[#5A6E85] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded bg-white border border-[#EAE3D5] flex items-center justify-center mb-6 shadow-sm">
              <LifeBuoy className="w-5 h-5 text-[#0A2540]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A2540] mb-4">Dedicated Consultant</h3>
            <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-semibold">
              Direct access to an operations professional to solve problems in real time as your business requirements shift.
            </p>
            <ul className="space-y-3.5 text-xs text-[#0A2540] font-extrabold border-t border-[#EAE3D5] pt-5 mt-auto">
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Fast response times
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Dedicated contact person
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Real-time operations assistance
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-8 flex flex-col hover:border-[#5A6E85] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded bg-white border border-[#EAE3D5] flex items-center justify-center mb-6 shadow-sm">
              <RotateCw className="w-5 h-5 text-[#0A2540]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A2540] mb-4">Continuous System Evolution</h3>
            <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-semibold">
              Your platform does not sit static. We update, optimize, and expand configurations dynamically to support scale.
            </p>
            <ul className="space-y-3.5 text-xs text-[#0A2540] font-extrabold border-t border-[#EAE3D5] pt-5 mt-auto">
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Custom feature updates
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Ongoing performance optimization
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" /> Seamless custom enhancements
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
