import React from 'react';
import { Globe, Laptop } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAF9F6] px-6 text-[#0A2540]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">DEPLOYMENT READY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            What Do You Need to Adopt This?
          </h2>
          <div className="inline-flex flex-wrap justify-center gap-3 mt-2 text-xs font-bold text-[#0A2540]">
            <span className="px-3 py-1 bg-white border border-[#EAE3D5] rounded shadow-sm">NO new IT infrastructure</span>
            <span className="px-3 py-1 bg-white border border-[#EAE3D5] rounded shadow-sm">NO dependency on existing systems</span>
            <span className="px-3 py-1 bg-white border border-[#EAE3D5] rounded shadow-sm">NO heavy training</span>
          </div>
          <p className="text-sm font-bold text-[#0A2540] mt-6">
            Our answer is simple: <span className="underline decoration-2 text-indigo-700">Almost nothing.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Field Teams */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-8 flex flex-col text-[#0A2540] shadow-sm">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] border border-[#EAE3D5] flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#0A2540]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#5A6E85] uppercase tracking-wider block">GROUND COMPONENT</span>
                <h3 className="text-lg font-bold text-[#0A2540]">Field Teams Use Android Phones</h3>
              </div>
            </div>
            
            <p className="text-sm text-[#5A6E85] leading-relaxed mb-6 font-semibold">
              Fieldstaff require only standard Android mobile devices. Ground operations are executed transparently without requiring local tech installations.
            </p>

            <div className="space-y-4 border-t border-[#F4EFE6] pt-6 mt-auto">
              {[
                {
                  title: "Mobile Work Orders",
                  desc: "Receive assigned work orders with clear operational detail on the Android device."
                },
                {
                  title: "Integrated Navigation",
                  desc: "Navigate directly to assigned job locations using integrated maps."
                },
                {
                  title: "Active On-site Capture",
                  desc: "On-site activities, completion photos, and service metrics are captured live as work progresses."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-extrabold shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540]">{step.title}</h4>
                    <p className="text-[11px] text-[#5A6E85] leading-relaxed font-semibold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-4 mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="text-[11px] font-bold text-[#5A6E85] uppercase block">Works Offline</span>
                <span className="text-xs font-bold text-green-700">Offline-Capable Cache</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#5A6E85] uppercase block">Multilingual</span>
                <span className="text-xs font-bold text-indigo-700">Multi-Language Ready</span>
              </div>
            </div>
          </div>

          {/* Office Admins */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-8 flex flex-col text-[#0A2540] shadow-sm">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] border border-[#EAE3D5] flex items-center justify-center">
                <Laptop className="w-5 h-5 text-[#0A2540]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#5A6E85] uppercase tracking-wider block">CONTROL COMPONENT</span>
                <h3 className="text-lg font-bold text-[#0A2540]">Office Admins Just Need a Laptop</h3>
              </div>
            </div>
            
            <p className="text-sm text-[#5A6E85] leading-relaxed mb-6 font-semibold">
              Management teams access a unified central hub through a secure web application. Supervision scales without infrastructure barriers.
            </p>

            <div className="space-y-4 border-t border-[#F4EFE6] pt-6 mt-auto">
              {[
                {
                  title: "Live Unified Command Center",
                  desc: "Complete live view of job status, technician routes, and field activity on a single screen."
                },
                {
                  title: "Automatic Report Dispatch",
                  desc: "Service reports and proof of work are compiled and dispatched automatically without administrative typing."
                },
                {
                  title: "Proactive SLA Alerts",
                  desc: "Automated escalation rules alert supervisors before task timelines slide into overdue status."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-extrabold shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540]">{step.title}</h4>
                    <p className="text-[11px] text-[#5A6E85] leading-relaxed font-semibold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-4 mt-6 text-center">
              <span className="text-[11px] font-bold text-[#5A6E85] uppercase block mb-1">DATA PROTECTION PRACTICE</span>
              <p className="text-[11px] text-[#0A2540] font-bold leading-relaxed">
                Follow security and privacy practices aligned with GDPR principles. Role-Based Access (RBAC) & Encryption.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
