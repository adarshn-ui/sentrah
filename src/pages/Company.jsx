import React, { useState, useEffect } from 'react';
import SplitText from '../components/common/SplitText';
import CountUp from '../components/common/CountUp';
import { 
  Check, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Globe, 
  Users, 
  Zap, 
  Layers, 
  HeartHandshake,
  Workflow
} from 'lucide-react';


export const Company = ({ onNavigate }) => {
  const [hoveredPhrase, setHoveredPhrase] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    staffSize: '15-20',
    message: ''
  });

  const [activePipelineStep, setActivePipelineStep] = useState(1); // Data Engine active initially

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePipelineStep(prev => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen text-[#0A2540] font-sans">
      
      {/* =========================================================================
          1. COMPANY HERO
          Purpose: Position Sentrah beyond software.
          Headline: “Built to bring clarity to field operations.”
          Visual: Minimal operational ecosystem composition (NOT dashboard-heavy).
          ========================================================================= */}
      <section className="relative py-24 md:py-32 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#FAF9F6] border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] uppercase">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Operational Core</span>
              </div>
              
              <SplitText
                text={"Built to bring\n**clarity** to field operations."}
                tag="h1"
                className="text-4xl md:text-6xl font-medium tracking-tight text-[#0A2540] leading-none text-left"
                textAlign="left"
                delay={35}
              />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Live operational visibility",
                  "Scalable team execution",
                  "Enterprise coordination",
                  "Real-world workflow intelligence"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                    <Check className="w-3.5 h-3.5 text-indigo-700" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Minimal Operational Ecosystem Composition (No dashboard clutter) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-8 rounded-none relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                
                {/* Visual Label */}
                <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-[#5A6E85]">
                  <Workflow className="w-2.5 h-2.5 text-indigo-700" />
                  <span>OPERATIONAL ECOSYSTEM PIPELINE</span>
                </div>

                {/* 3-Part Connectivity flow */}
                <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 w-full max-w-md">
                  
                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto transition-all duration-500 border ${
                    activePipelineStep === 0 
                      ? 'bg-indigo-50 border-indigo-300 shadow-sm scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    <span className={`font-extrabold block ${activePipelineStep === 0 ? 'text-indigo-700' : 'text-[#0A2540]'}`}>FIELD STAFF</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">GPS Coordinate Lock</span>
                  </div>

                  <div className={`hidden sm:block font-mono text-[11px] font-bold transition-colors duration-500 ${
                    activePipelineStep === 0 ? 'text-indigo-600' : 'text-[#5A6E85]'
                  }`}>--&gt;</div>

                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto relative transition-all duration-500 border ${
                    activePipelineStep === 1 
                      ? 'bg-indigo-50 border-indigo-300 shadow-sm scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    {activePipelineStep === 1 && <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#0A2540]"></div>}
                    <span className={`font-extrabold block ${activePipelineStep === 1 ? 'text-indigo-700' : 'text-indigo-700/60'}`}>DATA ENGINE</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Real-Time Sync Lock</span>
                  </div>

                  <div className={`hidden sm:block font-mono text-[11px] font-bold transition-colors duration-500 ${
                    activePipelineStep === 1 ? 'text-indigo-600' : 'text-[#5A6E85]'
                  }`}>--&gt;</div>

                  <div className={`p-3 text-center rounded-none font-mono text-[11px] flex-1 w-full sm:w-auto transition-all duration-500 border ${
                    activePipelineStep === 2 
                      ? 'bg-indigo-50 border-indigo-300 shadow-sm scale-105 z-10' 
                      : 'bg-white border-[#EAE3D5] opacity-75'
                  }`}>
                    <span className={`font-extrabold block ${activePipelineStep === 2 ? 'text-indigo-700' : 'text-[#0A2540]'}`}>OFFICE COMMAND</span>
                    <span className="text-[10px] text-[#5A6E85] mt-1 block">Unified Coordinator Portal</span>
                  </div>

                </div>

                {/* Background flowlines */}
                <div className="absolute inset-x-12 top-1/2 border-t border-dashed border-[#EAE3D5] -z-0"></div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. ABOUT SENTRAH
          Purpose: Natural storytelling blending mission, vision, and overview.
          ========================================================================= */}
      <section 
        className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]"
        onMouseMove={handleMouseMove}
      >
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block">01 / OUR PURPOSE</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  About Sentrah
                </h2>
              </div>
            </div>

            {/* Right Col: Blended Narrative Story with highlights */}
            <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
              <p>
                Sentrah was developed to solve one critical ground reality: the gap between office planning and on-site field execution.
              </p>
              <p>
                Traditionally, enterprise field teams operate inside unmanaged coordination loops—relying on repetitive{" "}
                <span
                  className="underline decoration-red-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-red-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('phone-check-ins')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  phone check-ins
                </span>
                ,{" "}
                <span
                  className="underline decoration-red-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-red-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('whatsapp-threads')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  WhatsApp threads
                </span>
                , and{" "}
                <span
                  className="underline decoration-red-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-red-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('manual-spreadsheet-logs')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  manual spreadsheet logs
                </span>
                .
              </p>
              <p>
                This administrative load creates delayed coordinate visibility and frequent{" "}
                <span
                  className="underline decoration-red-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-red-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('sla-breach-penalties')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  SLA breach penalties
                </span>
                .
              </p>
              
              <h4 className="text-sm font-extrabold text-[#0A2540] pt-2">Our Operational Philosophy</h4>
              
              <p>
                We build tools that capture system truth dynamically.
              </p>
              <p>
                By securing{" "}
                <span
                  className="underline decoration-green-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-green-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('gps-verified-arrivals')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  GPS-verified arrivals
                </span>
                ,{" "}
                <span
                  className="underline decoration-indigo-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-indigo-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('route-optimization-patterns')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  route optimization patterns
                </span>
                , and{" "}
                <span
                  className="underline decoration-green-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-green-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('validated-service-checklists')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  validated service checklists
                </span>{" "}
                on a{" "}
                <span
                  className="underline decoration-indigo-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-indigo-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('unified-android-application')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  unified Android application
                </span>
                , we enable supervisors to manage multiple teams without overhead.
              </p>
              <p>
                Our philosophy prioritizes a non-disruptive footprint.
              </p>
              <p>
                Sentrah deploys alongside your existing systems within{" "}
                <span
                  className="underline decoration-indigo-500/50 underline-offset-4 font-bold text-[#0A2540] hover:text-indigo-700 cursor-help transition-colors"
                  onMouseEnter={() => setHoveredPhrase('14-21-days')}
                  onMouseLeave={() => setHoveredPhrase(null)}
                >
                  14–21 days
                </span>
                , establishing absolute ground oversight without team training delays.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Floating Explanatory Tooltip Cards (Placed precisely adjacent to cursor, exactly like AWS card reference) */}
      {hoveredPhrase && (
        <div
          style={{
            position: 'fixed',
            left: mousePos.x + 20,
            top: mousePos.y + 30,
            pointerEvents: 'none',
            zIndex: 1000,
            transition: 'left 0.05s ease, top 0.05s ease',
          }}
        >
          {hoveredPhrase === 'phone-check-ins' && (
            <div className="bg-[#0A2540] border border-red-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-red-400">📞 CALL OVERHEAD</span>
                <span className="text-red-400 font-bold">● DISCONNECTED</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Manual Coordination Gaps</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Supervisor making 5 consecutive phone calls to check team locations. Fragmented updates, manual log gaps.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-red-300 font-extrabold">
                <span>⚠️ 14:32 - CALL FAILED</span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'whatsapp-threads' && (
            <div className="bg-[#0A2540] border border-red-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-red-400">💬 CHAT CHAOS</span>
                <span className="text-red-400 font-bold">● UNSTRUCTURED</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Unorganized Proofs</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Scattered updates, unorganized photo proofs, and delayed task updates buried inside endless group chats.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-red-300 font-extrabold">
                <span>[!] MISSING GPS LOCKS</span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'manual-spreadsheet-logs' && (
            <div className="bg-[#0A2540] border border-red-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-red-400">📋 ADMIN OVERHEAD</span>
                <span className="text-red-400 font-bold">● MANUAL ENTRY</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Spreadsheet Admin Gaps</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Coordinator manually copy-pasting arrival times from chat history into local spreadsheets at 6:00 PM.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-red-300 font-extrabold">
                <span>ERROR RATIO: <CountUp to={12} suffix="% MISSED" /></span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'sla-breach-penalties' && (
            <div className="bg-[#0A2540] border border-red-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-red-400">⚠️ SLA BREACH</span>
                <span className="text-red-400 font-bold">● OVERDUE</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Escalation Pathway Active</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Response window expired. Ticket #98422 overdue by <CountUp to={42} /> mins. Escalation path triggered to regional director.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-red-300 font-extrabold">
                <span>PENALTY RATIO: HIGH</span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'gps-verified-arrivals' && (
            <div className="bg-[#0A2540] border border-green-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-green-400">📍 GPS VERIFICATION</span>
                <span className="text-green-400 font-bold">● LOCKED</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Automated Registry</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Arrival registered automatically via coordinate lock at Salmiya block #3. GPS matches client destination exactly.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-green-300 font-extrabold">
                <span>✓ GPS MATCH OK</span>
                <span>14:32:05</span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'route-optimization-patterns' && (
            <div className="bg-[#0A2540] border border-indigo-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-[#A5B4FC]">⚡ ROUTE OPTIMIZATION</span>
                <span className="text-green-400 font-bold">● ACTIVE</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Travel Time Reduction</p>
              <p className="text-white/95 leading-relaxed font-normal">
                Real-time sequence adjustment saving <CountUp to={22} /> minutes travel time per field specialist.
              </p>
              <div className="pt-1 border-t border-white/10 flex justify-between text-[10px] text-[#A5B4FC] font-extrabold">
                <span>PATH: A -&gt; C -&gt; B</span>
                <span><CountUp to={15} prefix="-" suffix="% Fuel Overhead" /></span>
              </div>
            </div>
          )}

          {hoveredPhrase === 'validated-service-checklists' && (
            <div className="bg-[#0A2540] border border-green-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-green-400">✓ SERVICE VALIDATION</span>
                <span className="text-green-400 font-bold">● APPROVED</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Proof of Work Checks</p>
              <ul className="space-y-1 text-[10px] text-white/90">
                <li className="flex items-center gap-1.5">✓ Safety Checklist Verified</li>
                <li className="flex items-center gap-1.5">✓ Before/After photos locked</li>
                <li className="flex items-center gap-1.5">✓ Client signature locked</li>
              </ul>
              <div className="pt-1 border-t border-white/10 text-[10px] text-green-300 font-extrabold">
                STATUS: REPORT ARCHIVED
              </div>
            </div>
          )}

          {hoveredPhrase === 'unified-android-application' && (
            <div className="bg-[#0A2540] border border-indigo-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-[#A5B4FC]">📱 MOBILE CLIENT UI</span>
                <span className="text-green-400 font-bold">● ONLINE</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Offline Sync Enabled</p>
              <div className="text-[10px] bg-white/10 p-2 space-y-1 font-normal text-white/90">
                <p className="font-extrabold">Task: HVAC Maintenance</p>
                <p className="text-green-400">● Check-in Registered</p>
              </div>
              <div className="pt-1 border-t border-white/10 text-[10px] text-[#5A6E85] font-extrabold">
                AUTOMATIC TELEMETRY UPLOAD
              </div>
            </div>
          )}

          {hoveredPhrase === '14-21-days' && (
            <div className="bg-[#0A2540] border border-indigo-500 text-white p-4 rounded-none font-mono text-[11px] shadow-2xl space-y-2 w-56 backdrop-blur-xs">
              <div className="flex justify-between items-center border-b border-white/20 pb-1.5">
                <span className="font-extrabold text-[#A5B4FC]">📅 DEPLOYMENT</span>
                <span className="text-green-400 font-bold">● FAST TRACK</span>
              </div>
              <p className="text-[10px] text-[#A5B4FC] uppercase tracking-wider">Rollout Phases</p>
              <div className="space-y-1 text-[10px] text-white/90 font-normal">
                <p>Days 1-7: Integration & Mapping</p>
                <p>Days 8-14: Dispatcher Config</p>
                <p>Days 15-21: Roster Launch</p>
              </div>
              <div className="pt-1 border-t border-white/10 text-[10px] text-green-300 font-extrabold">
                ONBOARDING COMPLETE
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          3. OUR OPERATIONAL PHILOSOPHY
          Purpose: Explain HOW Sentrah thinks (intellectually, not just marketing copy).
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">02 / CORE THEMES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Our Operational Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Five core principles driving our enterprise B2B workflow intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Operational Clarity", desc: "Removing manual phone coordinate follow-ups and WhatsApp guessing completely." },
              { title: "System Truth", desc: "Every task checklist closure is backed by coordinate verification parameters." },
              { title: "Scalable Coordination", desc: "Enables a single office supervisor to manage 20+ teams seamlessly." },
              { title: "Visibility Before Escalation", desc: "Proactive countdown clocks detect delay parameters before breaches happen." },
              { title: "Execution Over Follow-ups", desc: "Dynamic route and coordinate locks replace manual administrative paperwork." }
            ].map((theme, idx) => (
              <div key={idx} className="bg-[#FAF9F6] border border-[#EAE3D5] p-5 hover:border-[#5A6E85] transition-all flex flex-col justify-between rounded-none shadow-xs min-h-[200px]">
                <div>
                  <span className="text-indigo-700 font-mono text-[10px] font-extrabold block mb-3">0{idx+1} // CORE</span>
                  <h4 className="text-xs font-bold text-[#0A2540] mb-2 leading-tight">{theme.title}</h4>
                  <p className="text-[10px] text-[#5A6E85] font-normal leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. PARTNERSHIP EXPERIENCE
          Purpose: Merge support into 3 clean, human cards (NOT support ticket based).
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">03 / COLLABORATION SYSTEM</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Partnership Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We operate as your dedicated operational partner, ensuring complete usability and system growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Card A: Guided Onboarding */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <Users className="w-5 h-5" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">A. Guided Onboarding</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Our specialists work alongside your office dispatchers and ground teams. We provide full setup assistance, map custom check-in coordinates, and run on-site team training logs until 100% usability is locked.
                </p>
              </div>
            </div>

            {/* Card B: Dedicated Operational Support */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <HeartHandshake className="w-5 h-5" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">B. Dedicated Operational Support</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  No cold ticketing queues. You gain direct coordinate contact with an operations specialist who understands your specific sector constraints. We resolve layout changes and coordinator updates rapidly.
                </p>
              </div>
            </div>

            {/* Card C: Continuous Platform Evolution */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <Activity className="w-5 h-5" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">C. Continuous Platform Evolution</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Sentrah expands dynamically as your enterprise capacity grows. We continuously implement speed optimizations, custom checklist items, and database pipeline integrations module-by-module.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. BUILT ACROSS REGIONS
          Purpose: Show operational footprint simply without heavy giant maps.
          ========================================================================= */}
      <section className="py-12 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[11px] text-[#5A6E85]">
            <span className="font-bold text-[#0A2540] uppercase">REGIONAL OPERATIONAL PRESENCE</span>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-extrabold text-[#0A2540]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Kuwait Operations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Oman Operations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>India Development Center</span>
              </div>
            </div>

            <span className="bg-[#FAF9F6] border border-[#EAE3D5] px-2 py-0.5 rounded-none text-[#5A6E85]">LUCID TECH SOLUTIONS LLC</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CONTACT & CONNECTION
          Purpose: Unified B2B communication grid + inquiry form with square inputs.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block">04 / GET IN TOUCH</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
              Contact & Connection
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-md">
              Submit your B2B inquiries here to request a live supervisor command-center demonstration matching your field staff capacity.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#EAE3D5] text-xs font-bold text-[#0A2540]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5A6E85]" />
                <a href="mailto:connect@sentrah.com" className="underline text-indigo-700">connect@sentrah.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5A6E85]" />
                <a href="tel:+9689485229" className="hover:underline">+968 9485229</a>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form (Perfect square inputs - rounded-none) */}
          <div className="lg:col-span-7 bg-white border border-[#EAE3D5] p-6 md:p-8 rounded-none shadow-xs">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-none bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">Operational Details Logged</h3>
                <p className="text-xs text-[#5A6E85] font-normal max-w-sm mx-auto leading-relaxed">
                  Thank you. Your details are secured. An onboarding consultant will coordinate with you at the email provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold text-[#0A2540]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      required
                      placeholder="e.g. Lucid Tech Solutions" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="px-3.5 py-2.5 bg-[#FAF9F6] border border-[#EAE3D5] rounded-none focus:outline-none focus:border-indigo-600 font-semibold text-[#0A2540]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contactPerson">Contact Person</label>
                    <input 
                      type="text" 
                      id="contactPerson" 
                      required
                      placeholder="e.g. Youssef A." 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-3.5 py-2.5 bg-[#FAF9F6] border border-[#EAE3D5] rounded-none focus:outline-none focus:border-indigo-600 font-semibold text-[#0A2540]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="workEmail">Work Email</label>
                    <input 
                      type="email" 
                      id="workEmail" 
                      required
                      placeholder="e.g. connect@sentrah.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-3.5 py-2.5 bg-[#FAF9F6] border border-[#EAE3D5] rounded-none focus:outline-none focus:border-indigo-600 font-semibold text-[#0A2540]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="staffSelect">Field Staff Size</label>
                    <select 
                      id="staffSelect"
                      value={formData.staffSize}
                      onChange={(e) => setFormData({...formData, staffSize: e.target.value})}
                      className="px-3.5 py-2.5 bg-[#FAF9F6] border border-[#EAE3D5] rounded-none focus:outline-none focus:border-indigo-600 font-semibold text-[#0A2540]"
                    >
                      <option value="Under 15">Under 15 staff members</option>
                      <option value="15-20">15-20 staff members (Threshold)</option>
                      <option value="20-50">20-50 staff members</option>
                      <option value="50+">50+ staff members</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fieldChallenges">Brief Field Challenges</label>
                  <textarea 
                    id="fieldChallenges" 
                    rows="4"
                    required
                    placeholder="e.g. travel verification delays, manual billing reports compile bottleneck..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="px-3.5 py-2.5 bg-[#FAF9F6] border border-[#EAE3D5] rounded-none focus:outline-none focus:border-indigo-600 font-semibold text-[#0A2540]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors cursor-pointer border-none flex items-center justify-center gap-2"
                >
                  Submit Demonstration Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FINAL CTA
          Headline: “Build operational clarity with Sentrah.”
          CTA: Talk to Our Team, Request a Demo
          ========================================================================= */}
      <section className="py-24 bg-[#F4EFE6] px-6 text-[#0A2540] text-center relative border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">SYSTEM DEPLOYMENT ACTIVE</span>
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] mb-6 leading-none max-w-2xl mx-auto">
            Build operational clarity with Sentrah.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto mb-10 font-normal leading-relaxed">
            Gain immediate oversight of coordinator flows, SLA countdown metrics, and secure PDF service reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={() => {
                const formElement = document.getElementById('companyName');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                  formElement.focus();
                }
              }}
              className="w-full px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2 border-none cursor-pointer"
            >
              Talk to Our Team <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                const formElement = document.getElementById('companyName');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                  formElement.focus();
                }
              }}
              className="w-full px-6 py-3.5 bg-white text-[#0A2540] border border-[#EAE3D5] text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#FAF8F3] transition-colors cursor-pointer"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
