import React, { useState, useEffect } from 'react';
import SplitText from '../components/common/SplitText';
import CountUp from '../components/common/CountUp';
import { 
  Layers, 
  Gauge, 
  MapPin, 
  FileCheck, 
  Wifi, 
  Globe, 
  Shield, 
  Clock, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Activity, 
  Smartphone, 
  Server, 
  Database, 
  ChevronRight, 
  Compass, 
  ShieldCheck,
  FileText,
  Sliders,
  TrendingUp,
  Cpu,
  Wrench,
  Cable,
  Truck,
  Zap,
  BarChart,
  HardDrive
} from 'lucide-react';

export const Solutions = ({ onNavigate }) => {
  // Tabs for Section 4: Operational Workflows
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('field');

  const [dispatchStep, setDispatchStep] = useState(1); // 02 / ROUTE LOCK active initially

  useEffect(() => {
    const timer = setInterval(() => {
      setDispatchStep(prev => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen text-[#0A2540] font-sans">
      
      {/* =========================================================================
          1. SOLUTIONS HERO
          Purpose: Introduce Sentrah as a flexible operational system.
          Visual: Minimal connected operational modules (NOT dashboard overload).
          ========================================================================= */}
      <section className="relative py-24 md:py-32 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#FAF9F6] border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] uppercase">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Flexible Field Architecture</span>
              </div>
              
              <SplitText
                text={"Built for\nreal-world **field operations**"}
                tag="h1"
                className="text-4xl md:text-6xl font-medium tracking-tight text-[#0A2540] leading-none text-left"
                textAlign="left"
                delay={35}
              />
              
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-md">
                An adaptable system designed across vertical industry constraints. Configure operational intelligence, custom reporting templates, and compliance guardrails seamlessly.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Adaptable across heavy industries",
                  "Configurable check-list and report templates",
                  "Modular, scalable telemetry infrastructure",
                  "Real-time operational insight routing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                    <Check className="w-3.5 h-3.5 text-indigo-700" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Minimal Connected Operational Modules Visual */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-8 rounded-none relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                
                {/* Visual Title */}
                <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-[#5A6E85]">
                  <Cpu className="w-2.5 h-2.5 text-indigo-700" />
                  <span>CONNECTED CORE DISPATCH FLOW</span>
                </div>

                {/* Horizontal Module Path Diagram */}
                 <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 relative z-10 w-full max-w-lg">
                  
                  {/* Module 1 */}
                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto transition-all duration-500 border ${
                    dispatchStep === 0 
                      ? 'bg-indigo-50 border-indigo-300 shadow-md scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    {dispatchStep === 0 && <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-indigo-500 animate-pulse"></div>}
                    <span className={`font-extrabold block ${dispatchStep === 0 ? 'text-indigo-700 font-extrabold' : 'text-[#0A2540]'}`}>01 / DISPATCH</span>
                    <span className="text-[10px] text-[#5A6E85] block mt-1">Ticket routed to coords</span>
                  </div>

                  {/* Connector Arrow */}
                  <div className={`hidden sm:block font-mono text-[10px] px-1 font-bold transition-colors duration-500 ${
                    dispatchStep === 0 ? 'text-indigo-600' : 'text-[#5A6E85]'
                  }`}>---</div>

                  {/* Module 2 */}
                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto relative transition-all duration-500 border ${
                    dispatchStep === 1 
                      ? 'bg-indigo-50 border-indigo-300 shadow-md scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    {dispatchStep === 1 && <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#0A2540]"></div>}
                    <span className={`font-extrabold block ${dispatchStep === 1 ? 'text-indigo-700 font-extrabold' : 'text-[#0A2540]'}`}>02 / ROUTE LOCK</span>
                    <span className="text-[10px] text-[#5A6E85] block mt-1">Active tech GPS tracking</span>
                  </div>

                  {/* Connector Arrow */}
                  <div className={`hidden sm:block font-mono text-[10px] px-1 font-bold transition-colors duration-500 ${
                    dispatchStep === 1 ? 'text-indigo-600' : 'text-[#5A6E85]'
                  }`}>---</div>

                  {/* Module 3 */}
                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto transition-all duration-500 border ${
                    dispatchStep === 2 
                      ? 'bg-indigo-50 border-indigo-300 shadow-md scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    {dispatchStep === 2 && <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-indigo-500 animate-pulse"></div>}
                    <span className={`font-extrabold block ${dispatchStep === 2 ? 'text-indigo-700 font-extrabold' : 'text-[#0A2540]'}`}>03 / REPORT</span>
                    <span className="text-[10px] text-[#5A6E85] block mt-1">Instant GPS-matched PDF</span>
                  </div>

                </div>

                {/* Connecting Architecture Dotted Line background */}
                <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-[#EAE3D5] -z-0"></div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. HOW TEAMS USE SENTRAH
          Purpose: Replaces old complexity, simplifies architectural understanding.
          3 Use Cases: Manage Field Execution, Monitor Operations Live, Scale Operational Control.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">01 / FUNCTIONAL OVERVIEW</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              How Teams Use Sentrah
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We organize complex field realities into three high-fidelity operational tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Lane A: Manage Field Execution */}
            <div className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none shadow-xs">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-indigo-700/30"></div>
              <div>
                <span className="text-[10px] font-mono text-[#5A6E85] block mb-2">OPERATIONAL TRACK 01</span>
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">A. Manage Field Execution</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-normal">
                  Consolidate the entire daily roster workflow of your mobile staff cleanly without endless coordination loops.
                </p>

                <div className="space-y-2 border-t border-[#FAF9F6] pt-4 font-mono text-[11px] text-[#5A6E85]">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Automated Task Allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Intelligent Route Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Fieldstaff Attendance Logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>On-Site Crew Coordination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lane B: Monitor Operations Live */}
            <div className="bg-white border border-[#0A2540] p-6 relative flex flex-col justify-between rounded-none shadow-sm">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#0A2540]"></div>
              <div>
                <span className="text-[10px] font-mono text-indigo-700 block mb-2">OPERATIONAL TRACK 02</span>
                <h3 className="text-lg font-bold text-indigo-700 mb-4">B. Monitor Operations Live</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-normal">
                  Establish total operational awareness. Verify coordinates, track traveling times, and review reports dynamically.
                </p>

                <div className="space-y-2 border-t border-[#FAF9F6] pt-4 font-mono text-[11px] text-[#5A6E85]">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Live SLA Clock Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>GPS Check-in Coordinates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Live Task Completion Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Instant Compliance Audits</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lane C: Scale Operational Control */}
            <div className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none shadow-xs">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-indigo-700/30"></div>
              <div>
                <span className="text-[10px] font-mono text-[#5A6E85] block mb-2">OPERATIONAL TRACK 03</span>
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">C. Scale Operational Control</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed mb-6 font-normal">
                  Prepare your enterprise architecture for scalability with dynamic webhooks and secure automated pipelines.
                </p>

                <div className="space-y-2 border-t border-[#FAF9F6] pt-4 font-mono text-[11px] text-[#5A6E85]">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Legacy ERP API Integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Predictive AI Task Scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>Configurable Modular Rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>IoT System Warning Triggers</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INDUSTRY SOLUTIONS
          Purpose: Show operational adaptability across 8 compact grid cards.
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">02 / SECTOR ADAPTABILITY</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                Industry Solutions
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                Sentrah's templates adapt to specific ground constraints instantly. We establish clear workflows for 8 critical enterprise sectors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "HVAC", title: "HVAC & Refrigeration", challenge: "Tracking checklist accuracy & travel duration.", workflow: "Preventive & SLA Repair Visit Planner", usage: "Verifies actual parts items completed on-site." },
              { id: "TEL", title: "Telecom Infrastructure", challenge: "Enforcing response times & generator checks.", workflow: "Emergency Tower Dispatch Scheduler", usage: "Maps coordinates to keep strict 2-hour SLAs secure." },
              { id: "LOG", title: "Logistics & Fleet", challenge: "Recording unalterable dispatch proof at gates.", workflow: "Route Transit & Destination Tracker", usage: "Validates verified coordinates on delivery check." },
              { id: "UTI", title: "Utility Metering", challenge: "Preventing manual meter entry transcription errors.", workflow: "Bulk Reading & Replacement Pipeline", usage: "Uses on-site photos and unalterable coordinate tags." },
              { id: "MFG", title: "FMCG & Manufacturing", challenge: "Auditing distributor store stock levels dynamically.", workflow: "Sales Path Audit & Stock Punch", usage: "Verifies distributor attendance and stock records." },
              { id: "O&G", title: "Oil & Gas", challenge: "Gathering safe logs in remote, off-network oilfields.", workflow: "Offline Inspection & Safety Audit Queue", usage: "Buffers checklists offline and auto-syncs securely." },
              { id: "MEP", title: "MEP Operations", challenge: "Mapping labor man-hours directly with daily reports.", workflow: "Manpower & Daily Progress Logboard", usage: "Tracks site check-in times to verify labor hours." },
              { id: "AMC", title: "Service & AMC Contracts", challenge: "Scheduling recurring contract visits automatically.", workflow: "Recurring Maintenance SLA Planner", usage: "Dispatches visits ahead of contract target deadlines." },
            ].map((ind, idx) => (
              <div key={ind.id} className="bg-[#FAF9F6] border border-[#EAE3D5] p-5 hover:border-[#5A6E85] transition-all flex flex-col justify-between rounded-none shadow-xs min-h-[220px]">
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-[10px] text-[#5A6E85]">
                    <span>SECTOR USE CASE 0{idx+1}</span>
                    <span className="text-indigo-700 font-extrabold">[{ind.id}]</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0A2540] mb-2 leading-tight">{ind.title}</h3>
                  <div className="space-y-1.5 text-[11px] text-[#5A6E85] font-normal leading-relaxed">
                    <p><strong>Challenge:</strong> {ind.challenge}</p>
                    <p><strong>Workflow:</strong> {ind.workflow}</p>
                    <p><strong>Usage:</strong> <span className="text-[#0A2540] font-bold">{ind.usage}</span></p>
                  </div>
                </div>
                
                <div className="border-t border-[#EAE3D5] pt-3 mt-4 flex justify-between items-center text-[10px] font-mono text-green-700">
                  <span>✓ PROVEN UTILITY</span>
                  <span className="bg-white border border-[#EAE3D5] px-1 rounded-none text-[#5A6E85]">14-21 Days</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OPERATIONAL WORKFLOWS (Redesigned: Centered Header & 2x2 grid cards with minimal icons)
          Purpose: Centered heading & subheading, 4 points in a 2x2 grid with minimal icons.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          {/* Centered Heading and Subheading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">03 / CAPABILITY LIFECYCLES</span>
            
            {activeWorkflowTab === 'field' && (
              <>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-4">
                  Field Operations
                </h2>
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-xl mx-auto">
                  Enforces accurate ground coordination through location tracking, route planners, and verified checklist closures.
                </p>
              </>
            )}

            {activeWorkflowTab === 'reporting' && (
              <>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-4">
                  Reporting & Compliance
                </h2>
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-xl mx-auto">
                  Guarantees unalterable operational governance with dynamic SLA triggers and automatic PDF reports compiling.
                </p>
              </>
            )}

            {activeWorkflowTab === 'asset' && (
              <>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-4">
                  Asset & Resource Management
                </h2>
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-xl mx-auto">
                  Optimizes parts consumption, equipment logs, and field-sales booking targets in one portal.
                </p>
              </>
            )}
          </div>

          {/* Tab Selection Bar (rounded-none, B2B styling centered under subheading) */}
          <div className="flex border-b border-[#EAE3D5] mb-12 overflow-x-auto scrollbar-none justify-start sm:justify-center gap-2">
            {[
              { id: 'field', label: 'Field Operations' },
              { id: 'reporting', label: 'Reporting & Compliance' },
              { id: 'asset', label: 'Asset & Resource Management' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWorkflowTab(tab.id)}
                className={`pb-3 px-4 text-[10px] font-extrabold uppercase tracking-widest transition-all cursor-pointer border-b-2 rounded-none whitespace-nowrap bg-transparent border-none ${
                  activeWorkflowTab === tab.id
                    ? 'border-indigo-700 text-indigo-700'
                    : 'border-transparent text-[#5A6E85] hover:text-[#0A2540]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 2x2 Grid Output */}
          <div className="animate-fadeIn">
            
            {/* Group A: Field Operations */}
            {activeWorkflowTab === 'field' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Task Management", desc: "Digital visit planners, priority dispatching, and site coordinate assignments.", icon: Smartphone },
                  { name: "Attendance Lock", desc: "GPS-verified check-in times and attendance coordinates on on-site clocking.", icon: MapPin },
                  { name: "Route Optimization", desc: "Dynamic route mapping to reduce coordinator telephone calls and travel times.", icon: Compass },
                  { name: "Proof of Work Seal", desc: "GPS coordinates, photos, and digital inspector signatures logged on closure.", icon: ShieldCheck }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name} className="bg-white border border-[#EAE3D5] p-6 rounded-none flex items-start gap-4 shadow-xs">
                      <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] flex items-center justify-center flex-shrink-0 rounded-none">
                        <IconComponent className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-indigo-700 font-mono text-[11px] font-extrabold block">A.{idx+1} // CAPABILITY</span>
                        <h4 className="text-sm font-extrabold text-[#0A2540]">{item.name}</h4>
                        <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Group B: Reporting & Compliance */}
            {activeWorkflowTab === 'reporting' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "SLA Monitoring", desc: "Real-time compliance timers and proactive alert escalations to coordinators.", icon: Gauge },
                  { name: "Reports & Analytics", desc: "Manager dashboard monitors outlining weekly team performance metrics.", icon: BarChart },
                  { name: "Daily Reports Generator", desc: "Automatically generates validated field logs on task close without manual typing.", icon: FileText },
                  { name: "Compliance & Safety Audits", desc: "Digital inspect verification forms locked to site proximity parameters.", icon: Shield }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name} className="bg-white border border-[#EAE3D5] p-6 rounded-none flex items-start gap-4 shadow-xs">
                      <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] flex items-center justify-center flex-shrink-0 rounded-none">
                        <IconComponent className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-indigo-700 font-mono text-[11px] font-extrabold block">B.{idx+1} // CAPABILITY</span>
                        <h4 className="text-sm font-extrabold text-[#0A2540]">{item.name}</h4>
                        <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Group C: Asset & Resource Management */}
            {activeWorkflowTab === 'asset' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Warehouse & Parts Logs", desc: "Records inventory codes and material usage per maintenance ticket.", icon: Wrench },
                  { name: "Asset History Tracking", desc: "Maintains absolute service, checkup, and incident histories per asset ID.", icon: Database },
                  { name: "Sales target Management", desc: "Validates path sales, customer orders, and distributor stock balances.", icon: TrendingUp },
                  { name: "Customer Feedback Capture", desc: "Records digital client signatures and satisfaction ratings instantly.", icon: Check }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name} className="bg-white border border-[#EAE3D5] p-6 rounded-none flex items-start gap-4 shadow-xs">
                      <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] flex items-center justify-center flex-shrink-0 rounded-none">
                        <IconComponent className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-indigo-700 font-mono text-[11px] font-extrabold block">C.{idx+1} // CAPABILITY</span>
                        <h4 className="text-sm font-extrabold text-[#0A2540]">{item.name}</h4>
                        <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MODULAR ECOSYSTEM
          Purpose: Connected modular system map.
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">04 / ARCHITECTURE INTEGRATION</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                Modular Ecosystem
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                Position Sentrah as your enterprise coordination core, connecting legacy databases and operational modules.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Interactive connected system map schematic */}
            <div className="lg:col-span-8 bg-[#FAF9F6] border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none">
              
              <div className="border-b border-[#EAE3D5]/60 pb-3 mb-6 font-mono text-[11px] font-bold text-[#0A2540] uppercase">
                Enterprise Connectivity Schematic
              </div>

              {/* Connected map grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative py-6">
                
                {/* Inputs block */}
                <div className="space-y-3 font-mono text-[10px] text-[#5A6E85]">
                  <div className="bg-white border border-[#EAE3D5] p-3 rounded-none shadow-xs">
                    <span className="font-extrabold text-[#0A2540] block">IoT Alerts Trigger</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Automatic coordinates check</span>
                  </div>
                  <div className="bg-white border border-[#EAE3D5] p-3 rounded-none shadow-xs">
                    <span className="font-extrabold text-[#0A2540] block">Android Client App</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Offline buffer logs ready</span>
                  </div>
                </div>

                {/* Core block with connector lines */}
                <div className="bg-[#0A2540] p-4 text-center rounded-none text-white font-mono text-[11px] relative shadow-md">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                  <Server className="w-4 h-4 mx-auto mb-2 text-indigo-200" strokeWidth={1.5} />
                  <span className="font-extrabold block">SENTRAH CORE</span>
                  <span className="text-[10px] text-[#A5B4FC] block mt-1">Operational Data Foundation</span>
                </div>

                {/* Outputs block */}
                <div className="space-y-3 font-mono text-[10px] text-[#5A6E85]">
                  <div className="bg-white border border-[#EAE3D5] p-3 rounded-none shadow-xs">
                    <span className="font-extrabold text-[#0A2540] block">Legacy ERP API Connect</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Oracle / SAP / Salesforce</span>
                  </div>
                  <div className="bg-white border border-[#EAE3D5] p-3 rounded-none shadow-xs">
                    <span className="font-extrabold text-[#0A2540] block">Automated Dispatcher</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Direct coordinator alerts</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: Operational Foundation details */}
            <div className="lg:col-span-4 bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 mb-4 uppercase rounded-none">
                    ✓ SECURE & READY
                  </span>
                  <h3 className="text-sm font-extrabold text-[#0A2540] mb-2">Operational Data Foundation</h3>
                  <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                    Establish an unalterable operational logboard. Every checklist entry, traveling metric, and coordinator seal is logged securely to support dynamic expansion and AI forecast logs.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-[11px] text-[#5A6E85]">
                  <p><strong>Configurable Rules:</strong> Adapt templates to specific vertical operations instantly.</p>
                  <p><strong>Open Integrations:</strong> REST API pipelines map to your existing B2B systems.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. GROWTH WITH SENTRAH
          Purpose: Show operational maturity progression.
          3-Step Timeline: Visibility & Coordination, Process Standardization, Automation & Intelligence.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">05 / TIMELINE STAGES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Growth With Sentrah
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We guide your field operations through a structured three-step maturity progression.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
            
            {/* Stage 1: Visibility & Coordination */}
            <div className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none shadow-xs">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-indigo-700/30"></div>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2">STAGE 01</span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Visibility & Coordination</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Consolidate field coordinates, track live task check-ins, and eliminate location telephone calls. Establish absolute real-time supervisor awareness.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6E85] block mt-6 border-t border-[#F4EFE6] pt-3 uppercase">ESTIMATED CYCLE: WEEKS 1-3</span>
            </div>

            {/* Stage 2: Process Standardization */}
            <div className="bg-white border border-[#0A2540] p-6 relative flex flex-col justify-between rounded-none shadow-sm">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#0A2540]"></div>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2">STAGE 02</span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Process Standardization</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Enforce unalterable SLA countdown clocks, on-site checklist validations, and automatic GPS-verified report compilation upon task close.
                </p>
              </div>
              <span className="text-[10px] font-mono text-indigo-700 block mt-6 border-t border-[#F4EFE6] pt-3 uppercase font-extrabold">ESTIMATED CYCLE: WEEKS 4-6</span>
            </div>

            {/* Stage 3: Automation & Intelligence */}
            <div className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none shadow-xs">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-indigo-700/30"></div>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2">STAGE 03</span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Automation & Intelligence</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Connect IoT telemetry warning feeds to auto-dispatch repair coordinates, predict maintenance lifecycles, and scale dynamic API ERP databases.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6E85] block mt-6 border-t border-[#F4EFE6] pt-3 uppercase">ESTIMATED CYCLE: WEEK 7+ ONWARD</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. SOLUTION OUTCOMES
          Purpose: Summarize impact across large metrics + concise statements.
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">06 / EMPIRICAL OUTCOMES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Solutions Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Objective operational benefits validated across actual enterprise field team implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 30, prefix: "-", suffix: "%", title: "Coordination Overhead", desc: "Dispatched site tasks directly, eliminating location phone check-in delays." },
              { to: 14.2, suffix: " min", title: "Average Response Time", desc: "Route tracking alerts enable instant dispatching and travel time optimization." },
              { to: 99.8, suffix: "%", title: "SLA Target Compliance", desc: "Automated alert escalations prevent critical contract compliance breaches." },
              { to: 40, prefix: "+", suffix: "%", title: "Field Staff Productivity", desc: "Field technicians navigate tasks efficiently without administrative paperwork blocks." }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-[#FAF9F6] border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none shadow-xs">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#5A6E85]/20"></div>
                
                <div>
                  <span className="text-4xl lg:text-[46px] font-bold font-mono tracking-tighter text-indigo-700 block mb-2">
                    <CountUp to={outcome.to} prefix={outcome.prefix} suffix={outcome.suffix} />
                  </span>
                  <h4 className="text-xs font-bold text-[#0A2540] mb-2">{outcome.title}</h4>
                  <p className="text-[10px] text-[#5A6E85] font-normal leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. CTA SECTION
          Headline: “Operational clarity across every workflow.”
          CTA: Explore Platform, Talk to Our Team
          ========================================================================= */}
      <section className="py-24 bg-[#F4EFE6] px-6 text-[#0A2540] text-center relative border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">SYSTEM DEPLOYMENT ACTIVE</span>
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] mb-6 leading-none max-w-2xl mx-auto">
            Operational clarity across every workflow.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto mb-10 font-normal leading-relaxed">
            Gain immediate oversight of coordinator flows, SLA countdown metrics, and secure PDF service reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={() => onNavigate('platform')}
              className="w-full px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2 border-none cursor-pointer"
            >
              Explore Platform <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('company')}
              className="w-full px-6 py-3.5 bg-white text-[#0A2540] border border-[#EAE3D5] text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#FAF8F3] transition-colors cursor-pointer"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
