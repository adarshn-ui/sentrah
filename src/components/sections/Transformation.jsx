import React from 'react';

export const Transformation = () => {
  return (
    <section id="transformation" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#EAE3D5] px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">TRANSFORMATION TIMELINE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            What Changes With Sentrah Within 14–21 Days
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] font-semibold max-w-lg mx-auto">
            Real operational metrics improve quickly once administrative work is automated.
          </p>
        </div>

        {/* Grid: Before vs After State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Left: The Before State */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
              <h3 className="text-sm md:text-base font-extrabold uppercase tracking-wider text-[#0A2540]">Traditional Operations (Before Sentrah)</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Constant status checks via phone calls",
                  desc: "Wasted hours contacting field staff to verify arrival and task progression."
                },
                {
                  title: "Scattered data across WhatsApp threads",
                  desc: "Photos, customer sign-offs, and service notes sent separately, out of context."
                },
                {
                  title: "Excel sheets manually maintained",
                  desc: "Administrative bottleneck to compile service records and key data into systems."
                },
                {
                  title: "Reactive SLA crisis management",
                  desc: "Compliance failures and delays detected only after client complaints surface."
                }
              ].map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-[#F4EFE6] last:border-b-0 last:pb-0">
                  <h4 className="text-xs font-bold text-red-700 flex items-center gap-2">
                    <span className="text-sm">✕</span> {item.title}
                  </h4>
                  <p className="text-[11px] text-[#5A6E85] mt-1 pl-4 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The After State */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              <h3 className="text-sm md:text-base font-extrabold uppercase tracking-wider text-[#0A2540]">Active Operations (Within 14–21 Days)</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Reduced Dependency on Calls and Messages",
                  desc: "Live operational visibility replaces constant follow-ups across calls and WhatsApp."
                },
                {
                  title: "Less Manual Work, More System Truth",
                  desc: "Service data is captured once on the field and becomes immediately usable — without daily Excel consolidation."
                },
                {
                  title: "Predictable SLA Performance",
                  desc: "Response and closure timelines are visible and managed before they become customer issues."
                },
                {
                  title: "Stronger Control at Scale",
                  desc: "Supervisors manage execution with clarity, even as teams and coverage grow."
                }
              ].map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-[#F4EFE6] last:border-b-0 last:pb-0">
                  <h4 className="text-xs font-bold text-green-700 flex items-center gap-2">
                    <span className="text-sm">✓</span> {item.title}
                  </h4>
                  <p className="text-[11px] text-[#5A6E85] mt-1 pl-4 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Business Impact Grid (4-8 Weeks) */}
        <div className="border-t border-[#EAE3D5] pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-2 font-mono">BUSINESS IMPACT</span>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0A2540]">
              Sustained Benefits Within 4–8 Weeks
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Reduced Costs",
                desc: "Lower man hours, fewer penalties, optimized resource allocation."
              },
              {
                title: "Increased Productivity",
                desc: "More tasks completed, better utilization, faster execution."
              },
              {
                title: "Higher Satisfaction",
                desc: "Faster response times, transparent service delivery."
              },
              {
                title: "Happier Office Team",
                desc: "Less manual coordination, clearer oversight."
              },
              {
                title: "Operational Data",
                desc: "Thousands of field activities, locations, and operational events captured daily."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D5] rounded-lg p-5 flex flex-col justify-between hover:border-[#5A6E85] transition-colors shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#0A2540] block mb-2">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-[#0A2540] mb-2">{item.title}</h4>
                  <p className="text-xs text-[#5A6E85] leading-relaxed font-medium">{item.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-green-600 block mt-4 font-mono">✓ Verified</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
