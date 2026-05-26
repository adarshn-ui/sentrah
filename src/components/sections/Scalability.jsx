import React from 'react';
import { Layers2, Sliders, Settings, Zap } from 'lucide-react';

export const Scalability = () => {
  const scalabilityPillars = [
    {
      icon: Layers2,
      title: "Core First",
      desc: "Live field visibility, SLA control, and validated execution form the operational foundation."
    },
    {
      icon: Sliders,
      title: "Modular by Design",
      desc: "Additional capabilities can be introduced independently, without disrupting existing operations."
    },
    {
      icon: Settings,
      title: "Configurable",
      desc: "Workflows, rules, and reporting adapt to how your operations run—not the other way around."
    },
    {
      icon: Zap,
      title: "Automation-Ready",
      desc: "Built to support deeper automation over time, including preventive maintenance and task creation."
    }
  ];

  const modules = [
    "Asset & Customer Data Management",
    "Assignment Rules",
    "Vehicle Tracker",
    "Stock Tracker",
    "Attendance Module",
    "Reports & Analytics",
    "Task Management",
    "Petty Cash Tracker",
    "Daily Email Report",
    "Proof of Work",
    "SLA",
    "System Integration",
    "Route Optimization",
    "Staff Hours & Incentives",
    "Appointment Setting",
    "Data Validation",
    "Warehouse Management",
    "Target Assurance",
    "Sales Management",
    "Customer Feedback",
    "Dashboard",
    "Equipment Monitoring",
    "Document Management",
    "Project Planner",
    "Call Centre Module",
    "Live Fieldstaff Tracking",
    "Asset History",
    "Historical Location Data",
    "Compliance and Audits",
    "AI Insights",
    "IoT Connectivity",
    "Custom Ground Logic"
  ];

  return (
    <section className="py-20 md:py-28 bg-white px-6 text-[#0A2540]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">SYSTEM RESILIENCE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            Designed to Scale When You’re Ready
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] font-semibold max-w-lg mx-auto">
            Start with essential control, then configure advanced operations module-by-module without friction.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {scalabilityPillars.map((item, idx) => (
            <div key={idx} className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-xl p-6 hover:border-[#5A6E85] transition-colors">
              <div className="w-9 h-9 rounded bg-white border border-[#EAE3D5] flex items-center justify-center mb-5 shadow-sm">
                <item.icon className="w-4.5 h-4.5 text-[#0A2540]" />
              </div>
              <h4 className="text-base font-bold text-[#0A2540] mb-2">{item.title}</h4>
              <p className="text-xs text-[#5A6E85] leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* The 32 Modules Grid (High Density Enterprise Map) */}
        <div className="border border-[#EAE3D5] rounded-xl p-6 md:p-8 bg-[#FAF9F6] shadow-sm">
          <div className="border-b border-[#EAE3D5] pb-4 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6E85] block mb-1">ENTERPRISE FUNCTIONAL MAP</span>
            <h3 className="text-sm font-bold text-[#0A2540]">Sentrah Modular Ecosystem</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {modules.map((module, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D5] rounded px-3 py-2 text-[10px] font-bold text-[#0A2540] hover:bg-[#F4EFE6] transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#5A6E85] rounded-full flex-shrink-0"></span>
                <span className="line-clamp-2">{module}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
