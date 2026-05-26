import React from 'react';
import { MapPin, Layers, Gauge, FileText, Database, Globe, Wifi, Users } from 'lucide-react';

export const Features = () => {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-y border-[#EAE3D5] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">TECHNICAL ARCHITECTURE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            Core Platform Capabilities
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] font-semibold max-w-lg mx-auto">
            Built with precision to handle heavy ground operations with structured control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Live Fieldstaff Location",
              desc: "Real-time GPS tracking and live mapping of all active field teams."
            },
            {
              icon: Layers,
              title: "Task Status Overview",
              desc: "Complete, end-to-end visibility of all pending and completed work orders."
            },
            {
              icon: Gauge,
              title: "SLA Time Status Dashboard",
              desc: "Track compliance and response time benchmarks dynamically."
            },
            {
              icon: FileText,
              title: "Instant Maintenance Reports",
              desc: "Generate professional service reports instantly with clean Excel exporting."
            },
            {
              icon: Database,
              title: "Digital Report Repository",
              desc: "Centralized secure storage for all digital proof of work and service history."
            },
            {
              icon: Globe,
              title: "GPS Tracking",
              desc: "Accurate tracing of technician visits with verified geographical metrics."
            },
            {
              icon: Wifi,
              title: "Offline Capability",
              desc: "Robust offline data capture that synchronizes automatically when network returns."
            },
            {
              icon: Users,
              title: "Multilingual Support",
              desc: "Highly accessible ground interfaces, designed to accommodate multiple languages."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-6 flex flex-col h-full text-[#0A2540] hover:border-[#5A6E85] transition-colors">
              <div className="w-9 h-9 rounded bg-white border border-[#EAE3D5] flex items-center justify-center mb-5 shadow-sm">
                <feature.icon className="w-4.5 h-4.5 text-[#0A2540]" />
              </div>
              <h4 className="text-base font-bold text-[#0A2540] mb-2">{feature.title}</h4>
              <p className="text-xs text-[#5A6E85] leading-relaxed font-semibold">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
