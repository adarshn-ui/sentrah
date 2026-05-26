import React from 'react';
import LiveVisibilityVisual from '../visuals/LiveVisibilityVisual';

export const LiveVisibility = () => {
  return (
    <section id="live-operations" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#EAE3D5] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanatory Content */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">WHAT IT LOOKS LIKE WITH SENTRAH</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-6 leading-tight">
              Eyes on the Field: Real-Time Execution & SLA Control
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Live View of Field Execution",
                  desc: "Tasks, service visits, and technician location are visible as work happens."
                },
                {
                  title: "Clear SLA Visibility",
                  desc: "Response, attendance, and closure timelines are tracked live with timely escalations."
                },
                {
                  title: "Validated Proof & Auto-Reports",
                  desc: "Arrival, work progress, and closure are captured and verified on the field. Made available in exports or pdf."
                },
                {
                  title: "Faster Emergency Decisions",
                  desc: "When an emergency call comes in, teams can immediately see who is available and closest."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#EAE3D5] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <span className="text-[10px] font-extrabold text-[#0A2540]">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0A2540] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#5A6E85] leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Technician Widget Mockup */}
          <div className="lg:col-span-6">
            <LiveVisibilityVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
