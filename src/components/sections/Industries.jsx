import React from 'react';

export const Industries = () => {
  const industries = [
    {
      industry: "HVAC & Refrigeration",
      uses: ["Periodic Maintenance", "Emergency Services", "Surveys"]
    },
    {
      industry: "Utility Metering",
      sub: "Electricity & Water Metering",
      uses: ["Replacements", "Inspections", "DCRC", "Manual Meter Reading", "Calibration & Testing"]
    },
    {
      industry: "FMCG & Manufacturing",
      uses: ["Field Sales", "Target Assurance", "Sales Punch", "Stock Monitoring"]
    },
    {
      industry: "MEP",
      uses: ["Daily Progress Reports", "Manpower Utilisation", "Resource Tracking"]
    },
    {
      industry: "Logistics",
      uses: ["Fleet Management", "Delivery Optimisation", "Warehouse Coordination"]
    },
    {
      industry: "Telecom Infrastructure",
      uses: ["Periodic Maintenance", "Emergency Services", "Inspections"]
    },
    {
      industry: "Oil & Gas",
      uses: ["Construction Tracking", "Field Asset Audits", "Incident Management"]
    },
    {
      industry: "Service & AMC Contracts",
      uses: ["Contract Compliance", "SLA Monitoring", "Recurring Visit Planning"]
    },
    {
      industry: "Facility Management",
      uses: ["Service Dispatch", "Asset Historical Conditions", "Ground Proof Verification"]
    },
    {
      industry: "Healthcare & Pharma",
      uses: ["Equipment Compliance", "Delivery Tracing", "Audit-Proof Data Trails"]
    }
  ];

  return (
    <section id="sectors" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#EAE3D5] px-6 text-[#0A2540]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-3">VERTICAL COMPATIBILITY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] mb-4">
            Where We Add Value
          </h2>
          <p className="text-sm md:text-base text-[#5A6E85] font-semibold max-w-lg mx-auto">
            Purpose-built systems adapted to specific field realities, operational challenges, and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#EAE3D5] rounded-xl p-6 flex flex-col justify-between hover:border-[#5A6E85] transition-colors shadow-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6E85] block mb-1">Use Case 0{idx + 1}</span>
                <h3 className="text-sm md:text-base font-extrabold text-[#0A2540] mb-1">{item.industry}</h3>
                {item.sub && <span className="text-[11px] text-[#5A6E85] font-bold block mb-3">{item.sub}</span>}
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.uses.map((use, uIdx) => (
                    <span key={uIdx} className="text-[11px] font-bold px-2 py-0.5 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] rounded shadow-sm">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-[#F4EFE6] pt-4 mt-5 text-[11px] text-[#5A6E85] font-extrabold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Industry Verified
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
