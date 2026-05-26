import React, { useState, useEffect } from 'react';
import SplitText from '../components/common/SplitText';
import CountUp from '../components/common/CountUp';
import { 
  Check, 
  ArrowRight, 
  Activity, 
  Compass, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  Users, 
  TrendingUp, 
  Layers, 
  MessageSquare, 
  FileText, 
  MapPin,
  HelpCircle,
  Briefcase,
  GitBranch
} from 'lucide-react';

export const Customers = ({ onNavigate }) => {
  // Transformation Tracker States
  const [slaMin, setSlaMin] = useState(4);
  const [slaSec, setSlaSec] = useState(12);
  const [coordinationHrs, setCoordinationHrs] = useState(2.2);
  const [recentLocks, setRecentLocks] = useState([
    { location: "Salmiya Office #3", status: "GPS OK", active: true },
    { location: "Al Hamra Tower", status: "GPS OK", active: false }
  ]);
  
  // Sentrah Coordination Command Console States
  const [techRosters, setTechRosters] = useState(240);
  const [slaCountdowns, setSlaCountdowns] = useState(18);
  const [gpsDelayedLimit] = useState("< 15m DEV");
  const [dbDelayValue, setDbDelayValue] = useState(0);
  const [telemetryLogs, setTelemetryLogs] = useState([
    { time: "12:15:02", text: "Coordinate lock 0x8A secured (Salmiya Office #3)", key: 1 },
    { time: "12:14:18", text: "Active SLA monitoring initialized on node SR-12", key: 2 }
  ]);
  
  // Strategic Milestones / Journey States
  const [activeStage, setActiveStage] = useState(1); // Stage 2 highlighted by default
  
  // Customer Partnership Card States
  const [onboardUsability, setOnboardUsability] = useState(98);
  const [consultantCycle, setConsultantCycle] = useState(1);
  const [evolutionApiCount, setEvolutionApiCount] = useState(4850);

  useEffect(() => {
    // 1. SLA timers ticking down
    const slaTimer = setInterval(() => {
      setSlaSec(prev => {
        if (prev === 0) {
          setSlaMin(m => (m === 0 ? 5 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);

    // 2. Coordination hrs fluctuating slightly between 2.1 and 2.3
    const coordinationInterval = setInterval(() => {
      setCoordinationHrs(prev => {
        const diff = (Math.random() * 0.2 - 0.1);
        const nextVal = parseFloat((prev + diff).toFixed(1));
        return nextVal >= 2.0 && nextVal <= 2.4 ? nextVal : 2.2;
      });
    }, 4500);

    // 3. Recent Locks list item active transitions
    const locksInterval = setInterval(() => {
      setRecentLocks(prev => {
        const next = [...prev];
        next.forEach(item => {
          item.active = !item.active;
        });
        return next;
      });
    }, 3000);

    // 4. Command Console stats fluctuation
    const consoleInterval = setInterval(() => {
      setTechRosters(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const nextVal = prev + change;
        return nextVal >= 235 && nextVal <= 245 ? nextVal : 240;
      });
      setSlaCountdowns(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1 to +1
        const nextVal = prev + change;
        return nextVal >= 15 && nextVal <= 22 ? nextVal : 18;
      });
      setDbDelayValue(prev => {
        const isSpike = Math.random() > 0.8;
        if (isSpike) {
          return Math.floor(Math.random() * 3) + 1; // 1-3 ms delay
        }
        return 0; // 0ms delay stable
      });
    }, 2000);

    // 5. Dynamic Telemetry Logs Appending/Cycling
    const logPool = [
      "Coordinate lock 0x8A secured (Salmiya Office #3)",
      "Active SLA monitoring initialized on node SR-12",
      "GPS boundary check completed for Kuwait Zone C",
      "Route optimization trigger processed (12 vehicles)",
      "Automated inspection report dispatched (Ticket #884A)",
      "Database connection pool synchronized successfully",
      "Ground device connection heartbeat verified on SR-84"
    ];

    const logsInterval = setInterval(() => {
      setTelemetryLogs(prev => {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const randomMsg = logPool[Math.floor(Math.random() * logPool.length)];
        const newLog = {
          time: timeStr,
          text: randomMsg,
          key: Math.random()
        };
        return [newLog, prev[0], prev[1]].filter(Boolean);
      });
    }, 5000);

    // 6. Active Strategic Milestones Cycle
    const milestonesInterval = setInterval(() => {
      setActiveStage(prev => (prev === 2 ? 0 : prev + 1));
    }, 6000);

    // 7. Onboarding Usability progress bar loop
    const onboardingInterval = setInterval(() => {
      setOnboardUsability(prev => (prev < 100 ? prev + 1 : 92));
    }, 1200);

    // 8. Dedicated Consultant checkpoint checklist
    const consultantInterval = setInterval(() => {
      setConsultantCycle(prev => (prev === 3 ? 1 : prev + 1));
    }, 4000);

    // 9. API usage counters scaling drift
    const evolutionInterval = setInterval(() => {
      setEvolutionApiCount(prev => prev + Math.floor(Math.random() * 4) - 1);
    }, 1500);

    return () => {
      clearInterval(slaTimer);
      clearInterval(coordinationInterval);
      clearInterval(locksInterval);
      clearInterval(consoleInterval);
      clearInterval(logsInterval);
      clearInterval(milestonesInterval);
      clearInterval(onboardingInterval);
      clearInterval(consultantInterval);
      clearInterval(evolutionInterval);
    };
  }, []);

  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen text-[#0A2540] font-sans">
      
      {/* =========================================================================
          1. CUSTOMERS HERO
          Purpose: Position Sentrah as an operational transformation partner.
          Headline: “Built for teams managing real-world operations at scale.”
          Visual: Operational transformation dashboard composition (NOT giant analytics).
          ========================================================================= */}
      <section className="relative py-24 md:py-32 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#FAF9F6] border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] uppercase">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Operational Transformation</span>
              </div>
              
              <SplitText
                text={"Built for teams\nmanaging **real-world** operations at scale."}
                tag="h1"
                className="text-4xl md:text-6xl font-medium tracking-tight text-[#0A2540] leading-none text-left"
                textAlign="left"
                delay={35}
              />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Live operational visibility",
                  "Automated SLA control",
                  "Faster team coordination",
                  "Scalable field execution"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                    <Check className="w-3.5 h-3.5 text-indigo-700" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Operational Transformation Dashboard Composition */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#EAE3D5] p-5 shadow-sm rounded-none">
                
                {/* Header bar */}
                <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-4 mb-4 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#0A2540] animate-pulse" strokeWidth={1.5} />
                    <span className="font-extrabold text-[#0A2540]">TRANSFORMATION TRACKER</span>
                    <span className="text-[#5A6E85]">/</span>
                    <span className="text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 font-bold flex items-center gap-1.5 rounded-none">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full animate-ping"></span>
                      <span>✓ SYNC ACTIVE</span>
                    </span>
                  </div>
                  <span className="text-[#5A6E85]">SLA COMPLIANCE: <strong className="text-[#0A2540]"><CountUp to={99.2} suffix="%" /></strong></span>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Left Column: Live check-in queue log */}
                  <div className="md:col-span-7 bg-[#FAF9F6] border border-[#EAE3D5] p-4 rounded-none font-mono text-[11px] space-y-3.5">
                    <span className="font-bold text-[#5A6E85] block border-b border-[#EAE3D5]/60 pb-1 uppercase text-[10px]">Recent Visited Coordinate Locks</span>
                    
                    <div className="space-y-2">
                      {recentLocks.map((lock, idx) => (
                        <div 
                          key={lock.location} 
                          className={`flex justify-between items-center p-2 border transition-all duration-500 rounded-none ${
                            lock.active 
                              ? 'bg-white border-[#5A6E85] shadow-xs' 
                              : 'bg-white/70 border-[#EAE3D5]'
                          }`}
                        >
                          <span className="text-[#0A2540] font-bold flex items-center gap-1">
                            <span className={`transition-transform duration-300 ${lock.active ? 'scale-110 text-red-600' : 'text-[#5A6E85]'}`}>📍</span>
                            <span>{lock.location}</span>
                          </span>
                          <span className={`font-extrabold flex items-center gap-1.5 ${lock.active ? 'text-green-700' : 'text-green-700/60'}`}>
                            <span className={`w-1 h-1 rounded-full bg-green-700 ${lock.active ? 'animate-ping' : ''}`}></span>
                            <span>{lock.status}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Live Counters */}
                  <div className="md:col-span-5 space-y-2.5">
                    <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-3 rounded-none font-mono text-left transition-all duration-300">
                      <span className="text-[10px] text-[#5A6E85] block">SLA TIMERS</span>
                      <span className="text-lg font-bold text-red-600 font-mono tracking-wider">
                        {String(slaMin).padStart(2, '0')}:{String(slaSec).padStart(2, '0')} mins
                      </span>
                      <span className="text-[10px] text-[#5A6E85] block mt-1">Remaining on node: SR-84</span>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-none font-mono text-left relative overflow-hidden group">
                      <div className="absolute inset-0 bg-indigo-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="text-[10px] text-indigo-700 block font-bold">COORDINATION ASSISTANCE</span>
                      <span className="text-[11px] font-bold text-indigo-900 leading-tight block">Roster Optimized</span>
                      <span className="text-[10px] text-indigo-700 block mt-1">Saves ~{coordinationHrs.toFixed(1)} hrs travel daily</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. CHAOS TO CLARITY (Before vs After)
          Purpose: Split-screen comparison showing transformation immediately.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">01 / OPERATIONAL SHIFT</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Chaos to Clarity
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Transition field coordination from scattered, unmanaged systems to direct operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#EAE3D5] border border-[#EAE3D5] bg-white rounded-none shadow-xs">
            
            {/* Left Side: Before (Traditional Chaos) */}
            <div className="p-8 md:p-12 space-y-8 bg-[#FAF9F6]/30">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" strokeWidth={1} />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">Traditional Operations (Manual Chaos)</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Constant Phone Follow-ups", desc: "Supervisors dial ground staff repeatedly to check on-site check-in parameters." },
                  { title: "WhatsApp Thread Gaps", desc: "Sign-off receipts, photos, and compliance notes lost in disjointed chats." },
                  { title: "Manual Excel Compiling", desc: "Office coordinators type on-site notes into tracking spreadsheets daily." },
                  { title: "Fragmented Status Updates", desc: "Coordinators remain unaware of task breaches until clients issue warnings." },
                  { title: "Delayed Field Visibility", desc: "Managers wait days to verify actual on-site maintenance completion details." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="text-red-600 font-extrabold text-sm select-none">✕</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0A2540] leading-snug">{item.title}</h4>
                      <p className="text-xs text-[#5A6E85] leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: After (Sentrah Clarity) */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-2 text-green-700">
                <ShieldCheck className="w-5 h-5" strokeWidth={1} />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">Sentrah Platform (Active Clarity)</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Live Operational Visibility", desc: "Ground locations lock automatically within targeted visit boundaries." },
                  { title: "Structured Workflows", desc: "Field staff complete pre-configured checklists directly on ground devices." },
                  { title: "Instant Report Dispatch", desc: "Unalterable service logs compile PDF outputs on check-out automatically." },
                  { title: "Automated SLA Tracking", desc: "Proactive countdown clocks trigger supervisor alerts before breaches happen." },
                  { title: "Validated Execution Seal", desc: "GPS coordinates and photo verification stamps guarantee proof of work." }
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-green-700 font-extrabold text-sm select-none">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0A2540] leading-snug">{item.title}</h4>
                      <p className="text-xs text-[#5A6E85] leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. OPERATIONAL OUTCOMES
          Purpose: Merge all metric-heavy sections into ONE clean outcome system.
          Layout: Large editorial KPI grid.
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">02 / CORE VALUE IMPACT</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Operational Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We consolidate complex metric stories into one direct, validated operational outcomes matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                to: 30,
                prefix: "-",
                suffix: "%",
                title: "Reduced Operational Overhead",
                desc: "Less manual coordinate phone check-in and Excel dependency."
              },
              {
                to: 40,
                prefix: "+",
                suffix: "%",
                title: "Faster Field Execution",
                desc: "Improved technician travel times and daily utilization."
              },
              {
                to: 99.8,
                suffix: "%",
                title: "Predictable SLA Performance",
                desc: "Arrival warnings are identified and resolved before escalation."
              },
              {
                to: 0,
                suffix: " hrs",
                title: "Stronger Office Visibility",
                desc: "Real-time task synchronization across supervisor consoles."
              },
              {
                to: 100,
                suffix: "%",
                title: "Better Customer Experience",
                desc: "GPS-validated proof and instant digital reporting upon close."
              }
            ].map((outcome, idx) => (
              <div key={outcome.title} className="bg-[#FAF9F6] border border-[#EAE3D5] p-5 hover:border-[#5A6E85] transition-all flex flex-col justify-between rounded-none shadow-xs min-h-[220px]">
                <div>
                  <span className="text-3xl font-bold font-mono tracking-tighter text-indigo-700 block mb-3">
                    <CountUp to={outcome.to} prefix={outcome.prefix} suffix={outcome.suffix} />
                  </span>
                  <h4 className="text-xs font-bold text-[#0A2540] mb-2 leading-tight">{outcome.title}</h4>
                  <p className="text-[11px] text-[#5A6E85] font-normal leading-relaxed">{outcome.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-green-700 block mt-4 border-t border-[#EAE3D5] pt-2 uppercase">✓ VALIDATED VALUE</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. VISIBILITY AT SCALE
          Purpose: Show enterprise scalability.
          Visual: Minimal operational command-center layout (no Technical engineering details).
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block">03 / ENTERPRISE CAPACITY</span>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                Visibility at Scale
              </h2>
              
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-md">
                Supervise multiple cross-functional coordinates simultaneously. Sentrah is architected to keep operational oversight stable as roster limits expand.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Manage larger field teams seamlessly",
                  "Maintain clean coordinator dashboard oversight",
                  "Reduce coordination complexity dynamically",
                  "Improve validated inspection execution quality"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                    <Check className="w-3.5 h-3.5 text-indigo-700" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Minimal Operational Command-Center layout */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#EAE3D5] p-6 shadow-xs rounded-none">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-3 mb-4 font-mono text-[10px] text-[#5A6E85]">
                  <span className="font-bold text-[#0A2540]">SENTRAH COORDINATION COMMAND CONSOLE</span>
                  <span>ACTIVE FEED</span>
                </div>

                {/* Command Center layout blocks */}
                <div className="space-y-3 font-mono text-[11px]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "TECH ROSTERS", value: `${techRosters} ACTIVE`, state: "STABLE", isStable: true },
                      { label: "SLA COUNTDOWNS", value: `${slaCountdowns} RUNNING`, state: "LOCKED", isStable: true },
                      { label: "GPS DELAYED LIMIT", value: gpsDelayedLimit, state: "SECURE", isStable: true },
                      { label: "DB CONNS", value: dbDelayValue === 0 ? "0ms DELAY" : `${dbDelayValue}ms DELAY`, state: dbDelayValue > 0 ? "STABILIZING" : "OK", isStable: dbDelayValue === 0 }
                    ].map((stat, idx) => (
                      <div 
                        key={stat.label} 
                        className={`border p-3 text-center rounded-none font-bold transition-all duration-500 ${
                          !stat.isStable 
                            ? 'bg-amber-50 border-amber-300 animate-pulse' 
                            : 'bg-[#FAF9F6] border-[#EAE3D5]'
                        }`}
                      >
                        <span className="text-[#5A6E85] block text-[10px]">{stat.label}</span>
                        <strong className="text-[#0A2540] text-[11px] block mt-1">{stat.value}</strong>
                        <span className={`text-[10px] block mt-1 ${stat.isStable ? 'text-green-700' : 'text-amber-700'}`}>
                          {stat.state}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-3 rounded-none text-[#5A6E85] space-y-1 overflow-hidden min-h-[72px]">
                    <span className="font-bold text-[#0A2540] block border-b border-[#EAE3D5]/60 pb-1 text-[10px] uppercase flex justify-between items-center">
                      <span>Telemetry Logs</span>
                      <span className="w-1 h-1 bg-indigo-700 rounded-full animate-ping"></span>
                    </span>
                    <div className="space-y-1 transition-all duration-500">
                      {telemetryLogs.map((log) => (
                        <p key={log.key} className="animate-fadeIn">
                          [{log.time}] {log.text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. OPERATIONAL GROWTH JOURNEY
          Purpose: Show long-term operational maturity via 3 stages.
          ========================================================================= */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">04 / STRATEGIC MILESTONES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Operational Growth Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We guide your enterprise through a structured path to long-term operational maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Stage 1 */}
            <div className={`bg-[#FAF9F6] p-6 relative flex flex-col justify-between rounded-none shadow-xs border transition-all duration-500 ${
              activeStage === 0 
                ? 'border-indigo-600 ring-1 ring-indigo-600 scale-[1.02] bg-white z-10' 
                : 'border-[#EAE3D5]'
            }`}>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2 flex items-center gap-1.5">
                  <span>STAGE 01</span>
                  {activeStage === 0 && <span className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-ping"></span>}
                </span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Visibility & Coordination</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Consolidate field coordinates, track live visit statuses, and eliminate manual coordination follow-ups. Establish real-time office awareness first.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6E85] block mt-6 border-t border-[#EAE3D5] pt-3 uppercase">ESTIMATED Setup: WEEKS 1-3</span>
            </div>

            {/* Stage 2 */}
            <div className={`bg-[#FAF9F6] p-6 relative flex flex-col justify-between rounded-none shadow-sm border transition-all duration-500 ${
              activeStage === 1 
                ? 'border-indigo-600 ring-1 ring-indigo-600 scale-[1.02] bg-white z-10' 
                : 'border-[#EAE3D5]'
            }`}>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2 flex items-center gap-1.5">
                  <span>STAGE 02</span>
                  {activeStage === 1 && <span className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-ping"></span>}
                </span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Standardized Execution</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Enforce unalterable SLA countdown timers, checklist rules, and automatic GPS-verified report compilation upon task close on ground clients.
                </p>
              </div>
              <span className={`text-[10px] font-mono block mt-6 border-t border-[#EAE3D5] pt-3 uppercase font-extrabold ${
                activeStage === 1 ? 'text-indigo-700 border-indigo-200' : 'text-[#5A6E85]'
              }`}>ESTIMATED Setup: WEEKS 4-6</span>
            </div>

            {/* Stage 3 */}
            <div className={`bg-[#FAF9F6] p-6 relative flex flex-col justify-between rounded-none shadow-xs border transition-all duration-500 ${
              activeStage === 2 
                ? 'border-indigo-600 ring-1 ring-indigo-600 scale-[1.02] bg-white z-10' 
                : 'border-[#EAE3D5]'
            }`}>
              <div>
                <span className="text-xs font-mono font-extrabold text-indigo-700 block mb-2 flex items-center gap-1.5">
                  <span>STAGE 03</span>
                  {activeStage === 2 && <span className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-ping"></span>}
                </span>
                <h3 className="text-base font-bold text-[#0A2540] mb-3">Automation & Operational Intelligence</h3>
                <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                  Integrate IoT alarm triggers to dispatch emergency repair codes, predict preventive maintenance patterns, and scale API ERP pipelines cleanly.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#5A6E85] block mt-6 border-t border-[#EAE3D5] pt-3 uppercase">ESTIMATED Setup: WEEK 7+ ONWARD</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CUSTOMER PARTNERSHIP
          Purpose: Position Sentrah as operational partner, NOT software vendor across 3 cards.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">05 / B2B COLLABORATION</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Customer Partnership
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              We operate as your long-term operational partner, not just a software vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Onboarding Specialist */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs hover:border-[#5A6E85] transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <Briefcase className="w-5 h-5 text-indigo-700 animate-pulse" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">Onboarding Specialist</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Our onboarding specialists map check-in coordinate limits, dispatcher rules, and checklist forms to Sentrah ahead of deployment. We guide ground teams until 100% usability is established.
                </p>
                
                {/* Micro-animation visual */}
                <div className="pt-2 font-mono text-[10px] text-[#5A6E85] space-y-1 border-t border-[#FAF9F6] mt-4">
                  <div className="flex justify-between font-bold">
                    <span>DEPLOYMENT READINESS</span>
                    <span className="text-indigo-700 font-extrabold">{onboardUsability}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#FAF9F6] border border-[#EAE3D5]">
                    <div 
                      className="h-full bg-indigo-700 transition-all duration-300"
                      style={{ width: `${onboardUsability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Dedicated Consultant */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs hover:border-[#5A6E85] transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <Users className="w-5 h-5 text-indigo-700 animate-pulse" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">Dedicated Consultant</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Your dedicated operations consultant reviews compliance status alerts, coordinator parameters, and SLA histories to optimize team routes dynamically on a periodic cycle.
                </p>
                
                {/* Micro-animation visual */}
                <div className="pt-2 font-mono text-[10px] text-[#5A6E85] border-t border-[#FAF9F6] mt-4">
                  <div className="flex gap-2 items-center bg-[#FAF9F6] p-1.5 border border-[#EAE3D5] rounded-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-700 animate-ping"></span>
                    <span className="font-bold text-[#0A2540]">ROUTE AUDIT:</span>
                    <span className="uppercase text-[10px] text-indigo-700 font-extrabold transition-all duration-500">
                      {consultantCycle === 1 ? "Analyzing SLA Logs" : consultantCycle === 2 ? "Mapping Hub Gaps" : "Optimizing Traces"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Continuous Evolution */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none shadow-xs hover:border-[#5A6E85] transition-colors duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FAF9F6] border border-[#EAE3D5] flex items-center justify-center text-[#0A2540] rounded-none">
                  <GitBranch className="w-5 h-5 text-indigo-700 animate-pulse" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-extrabold text-[#0A2540]">Continuous Evolution</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  We scale database parameters and API triggers module-by-module. As your operation implements new business rules, our architecture expands alongside your team.
                </p>
                
                {/* Micro-animation visual */}
                <div className="pt-2 font-mono text-[10px] text-[#5A6E85] border-t border-[#FAF9F6] mt-4">
                  <div className="flex justify-between items-center bg-[#FAF9F6] p-1.5 border border-[#EAE3D5] rounded-none">
                    <span className="font-bold text-[#0A2540]">API FLOW RATE:</span>
                    <span className="text-green-700 font-bold tracking-wider">{evolutionApiCount.toLocaleString()} req/min</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FINAL CTA
          Headline: “Bring operational clarity to every field team.”
          CTA: Talk to Our Team, Request a Demo
          ========================================================================= */}
      <section className="py-24 bg-[#F4EFE6] px-6 text-[#0A2540] text-center relative border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">SYSTEM TRANSFORMATION ACTIVE</span>
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] mb-6 leading-none max-w-2xl mx-auto">
            Bring operational clarity to every field team.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto mb-10 font-normal leading-relaxed">
            Gain complete oversight of coordinator flows, SLA countdown metrics, and unalterable digital inspect reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={() => onNavigate('company')}
              className="w-full px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2 border-none cursor-pointer"
            >
              Talk to Our Team <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => window.location.hash = '#request-demo'}
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
