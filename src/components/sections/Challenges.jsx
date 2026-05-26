import React from 'react';
import { AlertCircle, TrendingDown, Users, FileCheck, RotateCw } from 'lucide-react';
import CountUp from '../common/CountUp';

export const Challenges = () => {
  return (
    <section id="challenges" className="py-20 md:py-28 px-6 bg-white text-[#0A2540]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Card with Muted Alert */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-6 md:p-10 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-start lg:justify-center">
              <div className="w-14 h-14 bg-red-50 border border-red-200 rounded-full flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-red-600" />
              </div>
            </div>
            <div className="lg:col-span-9">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-2">THE INVISIBLE THRESHOLD</span>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0A2540] mb-3">
                Once field teams cross around <CountUp to={15} />–<CountUp to={20} />, supervision starts to stop scaling.
              </h3>
              <p className="text-sm text-[#5A6E85] leading-relaxed max-w-3xl font-semibold">
                At this point, office teams or supervisors tend to spend more time coordinating information than managing operations. Manual communication breaks, leading to critical visibility gaps and rising costs.
              </p>
            </div>
          </div>
        </div>

        {/* Three Critical Blindspots */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0A2540]">
              Critical Gaps in Unmanaged Field Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: "What's the Current Status? How Many Completed",
                answer: "No real-time work progress system to track completion or instant visit reports for validation."
              },
              {
                question: "Was the Visit Delayed? Is There a Penalty",
                answer: "SLA issues surface late, often after the customer follows up."
              },
              {
                question: "Where Is Team Right Now",
                answer: "No live visibility to quickly identify who is closest for an emergency visit."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-6 hover:bg-[#F4EFE6] transition-colors">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wide block mb-3">Blindspot 0{idx + 1}</span>
                <h4 className="text-base font-bold text-[#0A2540] mb-3 leading-snug">{item.question}</h4>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-semibold">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Operational Costs Grid */}
        <div className="border-t border-[#EAE3D5] pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-2 font-mono">BUSINESS IMPACT</span>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0A2540]">
              The Hidden Operational Costs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                title: "Rising Office Man-Hours",
                desc: "Admin hours wasted compiling reports, sending messages, and confirming locations."
              },
              {
                icon: Users,
                title: "Reduced Field Productivity",
                desc: "Ground staff idling due to verbal delays and manual coordination overhead."
              },
              {
                icon: FileCheck,
                title: "Unvalidated Reports & Missing Info",
                desc: "Proof of work details captured in fragments, missing compliance verification."
              },
              {
                icon: RotateCw,
                title: "Another Revisit",
                desc: "Revisits caused by missing information, incomplete work, or unclear closure."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D5] rounded-lg p-5 hover:border-[#5A6E85] transition-colors">
                <div className="w-8 h-8 rounded bg-[#F4EFE6] border border-[#EAE3D5] flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-[#0A2540]" />
                </div>
                <h4 className="text-sm font-bold text-[#0A2540] mb-2">{item.title}</h4>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
