import React from 'react';
import { PhoneCall, MessageSquare, FileText } from 'lucide-react';

export const Problems = () => {
  return (
    <section id="chaos" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#EAE3D5] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">OPERATIONAL REALITY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            The Root Causes of Operational Chaos
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] leading-relaxed max-w-2xl mx-auto">
            Before implementing a structured field operating system, day-to-day coordination relies on fragmented channels, causing friction at every turn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Chaos 1: Calls */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-6 md:p-8 flex flex-col h-full text-[#0A2540] shadow-sm">
            <div className="w-10 h-10 rounded bg-[#FDF4E7] border border-[#F5C27B] flex items-center justify-center mb-6">
              <PhoneCall className="w-5 h-5 text-[#C2410C]" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-[#0A2540]">Constant Phone Calls</h3>
            <p className="text-sm text-[#5A6E85] leading-relaxed mb-6">
              Supervisors rely entirely on continuous calls to know where ground teams are and what they are doing.
            </p>
            <div className="border-t border-[#F4EFE6] pt-5 mt-auto">
              <ul className="space-y-2.5 text-xs text-[#0A2540] font-semibold">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Fieldstaff location status confirmed through phone call</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Job assignments communicated verbally</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Follow-ups done repeatedly to check progress</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chaos 2: Messages */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-6 md:p-8 flex flex-col h-full text-[#0A2540] shadow-sm">
            <div className="w-10 h-10 rounded bg-[#FDF4E7] border border-[#F5C27B] flex items-center justify-center mb-6">
              <MessageSquare className="w-5 h-5 text-[#C2410C]" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-[#0A2540]">Fragmented Messages</h3>
            <p className="text-sm text-[#5A6E85] leading-relaxed mb-6">
              Work details and site verification are scattered across individual messaging threads, creating informational blind spots.
            </p>
            <div className="border-t border-[#F4EFE6] pt-5 mt-auto">
              <ul className="space-y-2.5 text-xs text-[#0A2540] font-semibold">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Work details shared through WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Job status updates sent as text messages</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Photos and visit proofs received separately, out of sequence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chaos 3: Excel Sheets */}
          <div className="bg-white border border-[#EAE3D5] rounded-xl p-6 md:p-8 flex flex-col h-full text-[#0A2540] shadow-sm">
            <div className="w-10 h-10 rounded bg-[#FDF4E7] border border-[#F5C27B] flex items-center justify-center mb-6">
              <FileText className="w-5 h-5 text-[#C2410C]" />
            </div>
            <h3 className="text-lg font-bold mb-4 text-[#0A2540]">Manual Excel Sheets</h3>
            <p className="text-sm text-[#5A6E85] leading-relaxed mb-6">
              Operational records require constant admin overhead to compile, verify, and key into system repositories.
            </p>
            <div className="border-t border-[#F4EFE6] pt-5 mt-auto">
              <ul className="space-y-2.5 text-xs text-[#0A2540] font-semibold">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Excel sheets manually maintained to track job status</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Updates manually compiled by office admin</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#C2410C] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Data repeatedly re-entered into internal or client systems</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
