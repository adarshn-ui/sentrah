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
  Cpu
} from 'lucide-react';

export const Platform = ({ onNavigate }) => {
  // Sticky tab state holding the 6 operational capability items
  const [activePlatformTab, setActivePlatformTab] = useState('visibility');

  // High-fidelity active B2B simulation state hooks
  const [amLat, setAmLat] = useState(29.3759);
  const [amLng, setAmLng] = useState(47.9774);
  const [ysLat, setYsLat] = useState(29.3791);
  const [ysLng, setYsLng] = useState(47.9904);
  const [mohLat, setMohLat] = useState(29.2104);
  const [mohLng, setMohLng] = useState(47.9691);

  const [criticalSlaSec, setCriticalSlaSec] = useState(22);
  const [fixRate, setFixRate] = useState(91.4);
  const [gpsAcc, setGpsAcc] = useState(99.8);

  const [slaPipelineStep, setSlaPipelineStep] = useState(2); // Step 3 active initially
  const [slaMinutesLeft, setSlaMinutesLeft] = useState(12);

  const [reportDeviations, setReportDeviations] = useState([8.4, 2.1, 12.6]);
  const [shutterFlash, setShutterFlash] = useState(false);

  const [mobileStep, setMobileStep] = useState(0);

  useEffect(() => {
    let elapsedMs = 0;
    const globalInterval = setInterval(() => {
      elapsedMs += 500;

      // 1. Critical Warning Countdown Ticker (every 1000ms)
      if (elapsedMs % 1000 === 0) {
        setCriticalSlaSec(prev => (prev > 1 ? prev - 1 : 22));
      }

      // 2. Radar & Table Coordinate Drifts (every 2000ms)
      if (elapsedMs % 2000 === 0) {
        setAmLat(prev => prev + (Math.random() * 0.0002 - 0.0001));
        setAmLng(prev => prev + (Math.random() * 0.0002 - 0.0001));
        setYsLat(prev => prev + (Math.random() * 0.0002 - 0.0001));
        setYsLng(prev => prev + (Math.random() * 0.0002 - 0.0001));
        setMohLat(prev => prev + (Math.random() * 0.0002 - 0.0001));
        setMohLng(prev => prev + (Math.random() * 0.0002 - 0.0001));
      }

      // 3. Field report GPS deviation drift (every 2500ms)
      if (elapsedMs % 2500 === 0) {
        setReportDeviations(prev => [
          parseFloat((8.4 + (Math.random() * 0.6 - 0.3)).toFixed(1)),
          parseFloat((2.1 + (Math.random() * 0.4 - 0.2)).toFixed(1)),
          parseFloat((12.6 + (Math.random() * 0.8 - 0.4)).toFixed(1))
        ]);
      }

      // 4. KPI Telemetry Fluctuations & Mobile Step (every 3000ms)
      if (elapsedMs % 3000 === 0) {
        setFixRate(prev => parseFloat((91.4 + (Math.random() * 0.4 - 0.2)).toFixed(1)));
        setGpsAcc(prev => parseFloat((99.8 + (Math.random() * 0.2 - 0.1)).toFixed(1)));
        setMobileStep(prev => (prev === 3 ? 0 : prev + 1));
      }

      // 5. Camera Shutter Snap Flash loop (every 4000ms)
      if (elapsedMs % 4000 === 0) {
        setShutterFlash(true);
        setTimeout(() => setShutterFlash(false), 150);
      }

      // 6. SLA Workflow pipeline progression (every 4500ms)
      if (elapsedMs % 4500 === 0) {
        setSlaPipelineStep(prev => (prev === 3 ? 0 : prev + 1));
      }

      // 7. SLA minutes left ticker (every 5000ms)
      if (elapsedMs % 5000 === 0) {
        setSlaMinutesLeft(prev => (prev > 5 ? prev - 1 : 12));
      }

      // Reset to prevent overflow (LCM of all intervals is 180,000ms)
      if (elapsedMs >= 180000) {
        elapsedMs = 0;
      }
    }, 500);

    return () => {
      clearInterval(globalInterval);
    };
  }, []);


  const platformTabs = [
    { id: 'visibility', label: 'Operational Visibility' },
    { id: 'sla', label: 'SLA & Execution Control' },
    { id: 'reporting', label: 'Field Reporting & Validation' },
    { id: 'experience', label: 'Field Experience' },
    { id: 'admin', label: 'Admin Control Center' },
    { id: 'scale', label: 'Built to Scale' }
  ];

  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen text-[#0A2540] font-sans">
      
      {/* =========================================================================
          1. PLATFORM HERO
          Purpose: Position Sentrah as the operational control layer.
          Visual: Single premium dashboard composition panel (not scattered).
          ========================================================================= */}
      <section className="relative py-20 md:py-28 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#FAF9F6] border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] uppercase">
                <span className="w-1.5 h-1.5 bg-indigo-700"></span>
                <span>Sentrah Control Hub</span>
              </div>
              
              <SplitText
                text={"Enterprise\noperational **visibility**"}
                tag="h1"
                className="text-4xl md:text-6xl font-medium tracking-tight text-[#0A2540] leading-none text-left"
                textAlign="left"
                delay={35}
              />
              
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed max-w-md">
                Real-time field execution, SLA intelligence, and live coordination designed into a single, unified enterprise operational control layer.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Unalterable GPS and visual validation",
                  "Automated compliance escalation paths",
                  "Modular, scalable platform architecture",
                  "Resilient offline-ready ground clients"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                    <Check className="w-3.5 h-3.5 text-indigo-700" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Single Premium Dashboard Composition Visual */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#EAE3D5] p-5 shadow-sm rounded-none">
                
                {/* Dashboard Top Header */}
                <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-4 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-indigo-700" strokeWidth={1.5} />
                    <span className="font-bold text-[#0A2540]">SENTRAH COORD CONTROL</span>
                    <span className="text-[#5A6E85]">/</span>
                    <span className="text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 font-bold">✓ ACTIVE HUB</span>
                  </div>
                  <div className="flex gap-4 text-[#5A6E85]">
                    <span>SLA: <strong className="text-[#0A2540]"><CountUp to={98.2} suffix="%" /></strong></span>
                    <span>TECH: <strong className="text-[#0A2540]"><CountUp to={18} suffix=" ACTIVE" /></strong></span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Left Column: Tech coordinates map simulator */}
                  <div className="md:col-span-8 bg-[#FAF9F6] border border-[#EAE3D5] p-4 flex flex-col justify-between h-[200px] rounded-none relative">

                    {/* Compass Ring Art */}
                    <div className="w-24 h-24 border border-indigo-700/10 rounded-full flex items-center justify-center self-center my-auto relative">
                      <div className="absolute w-16 h-16 border border-dashed border-indigo-700/20 rounded-full"></div>
                      
                      {/* Rotating Sweep Line */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-full relative rounded-full">
                          <div className="absolute top-1/2 left-1/2 w-12 h-[1px] bg-gradient-to-r from-indigo-600 to-transparent origin-left animate-radarSweep"></div>
                        </div>
                      </div>

                      <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-pulse"></div>
                      
                      {/* AM-84 Target Dot */}
                      <div className="absolute top-6 right-6 w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                        <span className="relative block rounded-full bg-green-500 w-2 h-2"></span>
                      </div>

                      {/* YS-12 Target Dot */}
                      <div className="absolute bottom-6 left-6 w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping"></span>
                        <span className="relative block rounded-full bg-indigo-500 w-2 h-2"></span>
                      </div>
                    </div>

                    <div className="flex justify-between font-mono text-[10px] text-[#5A6E85] border-t border-[#EAE3D5]/60 pt-2">
                      <span>RADIAL SECTORS: STABLE</span>
                      <span className="transition-all duration-1000">DEV: {(0.12 + (Math.sin(criticalSlaSec) * 0.02)).toFixed(2)}m</span>
                    </div>
                  </div>

                  {/* Right Column: Status Log */}
                  <div className="md:col-span-4 space-y-2.5">
                    <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-3 rounded-none text-left font-mono">
                      <span className="text-[10px] text-[#5A6E85] block">SLA METRIC TARGET</span>
                      <span className="text-lg font-bold text-[#0A2540]"><CountUp to={14.2} suffix=" min" /></span>
                      <span className="text-[10px] text-green-700 block mt-1 font-bold">✓ <CountUp to={3.2} suffix="m UNDER LIMIT" /></span>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-3 rounded-none text-left font-mono animate-pulseGlow transition-all duration-500">
                      <span className="text-[10px] text-red-600 block font-bold">CRITICAL WARNING</span>
                      <span className="text-xs font-bold text-red-900 leading-tight block">AM-84 SLA Alert</span>
                      <span className="text-[10px] text-red-700 block mt-1">Threshold: {criticalSlaSec}s Left</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          STICKY TAB NAVIGATION BAR (img2 horizontal pill design, rounded-none style)
          ========================================================================= */}
      <div className="sticky top-[61px] z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE3D5] py-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none justify-start lg:justify-center">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActivePlatformTab(tab.id);
                  // Quick scroll assist to snap to the tab view nicely
                  const element = document.getElementById('platform-tour-content');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-none transition-all cursor-pointer whitespace-nowrap border ${
                  activePlatformTab === tab.id
                    ? 'bg-[#0A2540] text-white border-[#0A2540]'
                    : 'bg-white text-[#5A6E85] border-[#EAE3D5] hover:text-[#0A2540] hover:border-[#5A6E85]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Anchor scroll point for smoother tab transitions */}
      <div id="platform-tour-content" className="scroll-mt-[135px]"></div>

      {/* =========================================================================
          INTERACTIVE TOUR CONTENTS: RENDERS ACTIVE CAPABILITY
          ========================================================================= */}
      
      {/* 2. OPERATIONAL VISIBILITY */}
      {activePlatformTab === 'visibility' && (
        <section className="py-20 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">01 / REAL-TIME AWARENESS</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  Operational Visibility
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  Unlock instantaneous operational awareness. Sentrah brings technician location tracking, active visit queues, and performance metrics together into a single digital coordinate repository.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Large Dashboard Panel */}
              <div className="lg:col-span-8 bg-white border border-[#EAE3D5] p-5 shadow-xs flex flex-col justify-between rounded-none">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-3 font-mono text-xs">
                    <span className="font-bold text-[#0A2540]">COORDINATOR TELEMETRY DASHBOARD</span>
                    <span className="text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 font-bold">✓ REAL-TIME FEED SECURE</span>
                  </div>
 
                  <div className="overflow-x-auto text-xs font-bold">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#FAF9F6] border-b border-[#EAE3D5] text-[10px] text-[#5A6E85] uppercase">
                          <th className="p-3">Technician</th>
                          <th className="p-3">Active Site Address</th>
                          <th className="p-3 font-mono">Locked Coordinates</th>
                          <th className="p-3">Compliance Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#EAE3D5]">
                        {[
                          { name: "Ahmad Khalil", site: "Salmiya Tower 3, Floor 1", lat: amLat, lng: amLng, status: "On-Site Check-in", color: "bg-green-700" },
                          { name: "Youssef A.", site: "Al Hamra Tower, Office 14", lat: ysLat, lng: ysLng, status: "Route Transit", color: "bg-indigo-700" },
                          { name: "Mohammed R.", site: "Kuwait Airport Unit B", lat: mohLat, lng: mohLng, status: "SLA Alert Warning", color: "bg-red-600 animate-pulse" },
                        ].map((tech, idx) => (
                          <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                            <td className="p-3 text-[#0A2540]">{tech.name}</td>
                            <td className="p-3 text-[#5A6E85] font-semibold">{tech.site}</td>
                            <td className="p-3 font-mono text-[#0A2540] text-[11px] tabular-nums">
                              {tech.lat.toFixed(4)}°N | {tech.lng.toFixed(4)}°E
                            </td>
                            <td className="p-3">
                              <span className="inline-flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 ${tech.color} rounded-none animate-pulse`}></span>
                                <span className="text-[#0A2540] font-extrabold text-[10px] uppercase">{tech.status}</span>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
 
                  <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-3.5 rounded-none font-mono text-[10px] space-y-2">
                    <span className="font-bold text-[#5A6E85] block border-b border-[#EAE3D5]/60 pb-1 uppercase text-[10px]">Live Operations Feed</span>
                    <div className="flex justify-between text-green-700">
                      <span>[17:15:02] ✓ Ahmad Khalil checked in at Salmiya Tower 3 ({amLat.toFixed(4)}°N | {amLng.toFixed(4)}°E)</span>
                      <span>SUCCESS ({(12.2 + (Math.sin(criticalSlaSec) * 1.5)).toFixed(1)}m accuracy)</span>
                    </div>
                    <div className="flex justify-between text-indigo-700">
                      <span>[17:10:14] → Youssef A. changed coordinate status: TRANSIT ({ysLat.toFixed(4)}°N | {ysLng.toFixed(4)}°E)</span>
                      <span>SYNCED</span>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Right: Supporting KPI Cards */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                <div className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between flex-grow rounded-none">
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#5A6E85]/20"></div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">FIELDSTAFF PERFORMANCE</span>
                    <h3 className="text-sm font-extrabold text-[#0A2540] mb-2">Unmatched Accuracy Rates</h3>
                    <p className="text-xs text-[#5A6E85] font-normal leading-relaxed mb-4">
                      Track technician efficiency, visual upload times, and average client sign-off intervals automatically.
                    </p>
                  </div>
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="flex justify-between items-center border-b border-[#EAE3D5]/50 pb-1.5">
                      <span>Average Daily Fix Rate:</span>
                      <strong className="text-green-700 font-extrabold tabular-nums">{fixRate}% [HIGH]</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#EAE3D5]/50 pb-1.5">
                      <span>GPS Lock Accuracy:</span>
                      <strong className="text-[#0A2540] font-extrabold tabular-nums">{gpsAcc}% (Avg Dev &lt;15m)</strong>
                    </div>
                  </div>
                </div>
 
                <div className="bg-[#0A2540] p-6 relative flex flex-col justify-between rounded-none text-white">
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20"></div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-200 mb-2">COORDINATION CLARITY</h4>
                    <p className="text-[11px] text-[#A5B4FC] font-normal leading-relaxed">
                      "Sentrah replaced 8 daily coordination telephone calls per technician, populating dispatch times on-screen instantly."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. SLA & EXECUTION CONTROL */}
      {activePlatformTab === 'sla' && (
        <section className="py-20 px-6 bg-white border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">02 / OPERATIONAL GOVERNANCE</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  SLA & Execution Control
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  Take systematic control of response targets. Sentrah enforces automated SLA timelines, alerts, and escalation pathways to protect service contracts from compliance breaches.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Explanation */}
              <div className="lg:col-span-4 bg-[#FAF9F6] border border-[#EAE3D5] p-8 flex flex-col justify-between rounded-none">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 mb-4 uppercase rounded-none">
                      ✓ ACTIVE GOVERNANCE
                    </span>
                    <h3 className="text-base font-extrabold text-[#0A2540] mb-3">Enforce Response Accountability</h3>
                    <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                      SLA thresholds trigger automatic alerts on the supervisor's console. If response goals remain unfulfilled, escalations route immediately through custom pathways to keep targets secure.
                    </p>
                  </div>
                  <div className="space-y-3 font-mono text-[11px] text-[#5A6E85]">
                    <p><strong>Assignment Logic:</strong> Tickets route to closest tech coordinates based on location locks.</p>
                    <p><strong>Overdue Indicators:</strong> Warnings populate instantly on-screen when arrival deviates &gt;15 min.</p>
                  </div>
                </div>
              </div>

              {/* Right: Pipeline Visualizer */}
              <div className="lg:col-span-8 bg-white border border-[#EAE3D5] p-6 shadow-xs flex flex-col justify-between rounded-none">
                <div className="border-b border-[#EAE3D5] pb-3 mb-6 font-mono text-[11px] font-bold text-[#0A2540] uppercase">
                  SLA Compliance Workflow Pipeline
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {[
                    { step: "01", title: "Ticket Dispatched", metric: "T+0 min", desc: "Coordinates matched", status: "COMPLETE", color: "text-green-700 bg-green-50 border-green-200" },
                    { step: "02", title: "Transit Route Lock", metric: "T+15 min limit", desc: "Tech gps active", status: "IN ROUTE", color: "text-indigo-700 bg-indigo-50 border-indigo-200" },
                    { step: "03", title: "Arrival SLA Limit", metric: "T+30 min limit", desc: "30m proximity seal", status: `${slaMinutesLeft}m LEFT`, color: "text-red-700 bg-red-50 border-red-200 animate-pulse font-extrabold" },
                    { step: "04", title: "Escalation Hub", metric: "T+35 min trigger", desc: "Push notification alert", status: "ARMED", color: "text-orange-700 bg-orange-50 border-orange-200" }
                  ].map((node, idx) => {
                    const isActive = slaPipelineStep === idx;
                    return (
                      <div key={idx} className={`bg-white border p-4 flex flex-col justify-between relative rounded-none h-[150px] transition-all duration-500 ${
                        isActive 
                          ? 'border-indigo-600 shadow-md scale-[1.03] z-10' 
                          : 'border-[#EAE3D5] opacity-75'
                      }`}>
                        <span className="text-[10px] text-[#5A6E85] font-mono">{node.step}</span>
                        <div>
                          <h4 className="text-[11px] font-extrabold text-[#0A2540] leading-tight mb-1">{node.title}</h4>
                          <span className="text-[11px] font-mono text-indigo-700 block mb-2">{node.metric}</span>
                        </div>
                        <span className={`text-[10px] font-extrabold px-1 border uppercase text-center block rounded-none ${node.color}`}>{node.status}</span>
                        {isActive && (
                          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-700 rounded-full animate-ping"></span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-3.5 mt-6 rounded-none font-mono text-[11px] text-[#5A6E85] flex justify-between items-center animate-pulseGlow transition-all duration-300">
                  <span className="flex items-center gap-1.5 font-bold"><AlertCircle className="w-3.5 h-3.5 text-red-600 animate-bounce" /> Active Alarm Protocol: Locked to node Salmiya Tower 3.</span>
                  <span className="text-red-700 font-extrabold">STATUS: CRITICAL</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 4. FIELD REPORTING & VALIDATION */}
      {activePlatformTab === 'reporting' && (
        <section className="py-20 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">03 / VALIDATED EXECUTION</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  Field Reporting & Validation
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  Zero manual report compilation. Sentrah locks proof of work photos, parts inventories, and signatures on on-site ticket closure, sending validated reports instantly.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Table */}
              <div className="lg:col-span-7 bg-white border border-[#EAE3D5] p-5 shadow-xs flex flex-col justify-between rounded-none">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-3 font-mono text-[11px]">
                    <span className="font-bold text-[#0A2540]">DIGITAL SERVICE REPORT ARCHIVE</span>
                    <span className="text-indigo-700 bg-indigo-50 border border-indigo-200 px-1 font-bold">EXPORT TO EXCEL READY</span>
                  </div>

                  <div className="overflow-x-auto text-xs font-bold">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#FAF9F6] border-b border-[#EAE3D5] text-[11px] text-[#5A6E85] uppercase">
                          <th className="p-3">Report ID</th>
                          <th className="p-3">Asset Closed</th>
                          <th className="p-3 font-mono">GPS Match</th>
                          <th className="p-3 text-right">PDF File</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-[#EAE3D5]">
                        {[
                          { id: "SR-84920", asset: "Chiller Comp #A4", deviation: reportDeviations[0] },
                          { id: "SR-84921", asset: "Telecom Tower #B12", deviation: reportDeviations[1] },
                          { id: "SR-84922", asset: "Utility Meter #C14", deviation: reportDeviations[2] }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                            <td className="p-3 text-[#0A2540]">{row.id}</td>
                            <td className="p-3 text-[#5A6E85] font-semibold">{row.asset}</td>
                            <td className="p-3 font-mono text-[11px] text-green-700 font-extrabold tabular-nums">
                              ✓ LOCKED ({row.deviation.toFixed(1)}m deviation)
                            </td>
                            <td className="p-3 text-right">
                              <button className="text-indigo-700 hover:underline border-none bg-none font-bold text-[11px] cursor-pointer">
                                DOWNLOAD PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-3 justify-end pt-3">
                    <button className="px-4 py-2 bg-white border border-[#EAE3D5] text-[#0A2540] font-mono text-[11px] font-bold rounded-none hover:bg-[#FAF8F3] cursor-pointer">
                      EXPORT ALL CSV
                    </button>
                    <button className="px-4 py-2 bg-[#0A2540] text-white font-mono text-[11px] font-bold rounded-none hover:bg-[#06182c] cursor-pointer">
                      EXPORT PLATFORM EXCEL
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Camera Photo Proof seal */}
              <div className="lg:col-span-5 bg-white border border-[#EAE3D5] p-5 shadow-xs flex flex-col justify-between rounded-none">
                <div className="space-y-4">
                  <div className="border-b border-[#EAE3D5] pb-3 font-mono text-[11px] font-bold text-[#0A2540]">
                    ACTIVE PREVIEW: REPORT SR-84920
                  </div>
                  <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-4 font-mono text-[11px] text-[#5A6E85] space-y-3 rounded-none">
                    <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1">
                      <span className="font-bold text-[#0A2540]">VISUAL PROOF DETECTED</span>
                      <span className="text-[10px] text-green-700 bg-green-50 px-1 border border-green-200 animate-pulse font-extrabold">✓ SECURED</span>
                    </div>

                    <div className="relative w-full h-[100px] bg-white border border-[#EAE3D5] flex items-center justify-center overflow-hidden rounded-none">
                      <div className="absolute inset-2 border border-dashed border-[#5A6E85]/20 flex items-center justify-center">
                        {/* Viewfinder Target Lines */}
                        <div className="absolute w-3 h-3 border-t-2 border-l-2 border-indigo-700 top-1 left-1"></div>
                        <div className="absolute w-3 h-3 border-t-2 border-r-2 border-indigo-700 top-1 right-1"></div>
                        <div className="absolute w-3 h-3 border-b-2 border-l-2 border-indigo-700 bottom-1 left-1"></div>
                        <div className="absolute w-3 h-3 border-b-2 border-r-2 border-indigo-700 bottom-1 right-1"></div>
                        
                        <span className="text-[#0A2540]/30 font-sans text-xs font-bold animate-pulse">[ + ] PHOTO PROOF</span>
                      </div>

                      {/* Camera Shutter Flash overlay */}
                      <div className={`absolute inset-0 bg-white z-20 pointer-events-none transition-opacity duration-150 ${
                        shutterFlash ? 'opacity-95' : 'opacity-0'
                      }`}></div>

                      <div className="absolute bottom-2 left-2 bg-[#0A2540] text-white p-1 text-[10px] leading-tight space-y-px shadow z-10 font-mono tabular-nums">
                        <p>LAT: {amLat.toFixed(4)}° N</p>
                        <p>LNG: {amLng.toFixed(4)}° E</p>
                      </div>
                      <svg className="w-8 h-8 text-[#5A6E85]/20 animate-pulse" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>

                    <div className="space-y-1 text-[10px] font-bold">
                      <div className="flex justify-between border-b border-[#EAE3D5]/50 pb-1">
                        <span>VISIT VALIDATION STATUS:</span>
                        <span className="text-green-700 animate-pulse">✓ SUCCESS MATCH</span>
                      </div>
                      <div className="flex justify-between text-[#5A6E85] font-mono tabular-nums">
                        <span>COMPILATION DELAY:</span>
                        <span>{(0.03 + Math.sin(criticalSlaSec) * 0.01).toFixed(3)}s (INSTANT DISPATCH)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. FIELD EXPERIENCE */}
      {activePlatformTab === 'experience' && (
        <section className="py-20 px-6 bg-white border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">04 / FIELD STAFF EMPOWERMENT</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  Field Experience
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  Usability is a deployment necessity. Sentrah's mobile workflow application is optimized for low-bandwidth zones and native multilingual demographics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none h-[210px]">
                  <div>
                    <div className="w-8 h-8 rounded-none bg-white border border-[#EAE3D5] flex items-center justify-center mb-4 text-[#0A2540]">
                      <Wifi className="w-4 h-4" strokeWidth={1} />
                    </div>
                    <h4 className="text-xs font-bold text-[#0A2540] mb-2">Offline Resilient Syncing</h4>
                    <p className="text-[11px] text-[#5A6E85] leading-relaxed font-normal">
                      Field crews log checklist parameters and coordinate photo captures offline in low-connectivity areas. Sentrah buffers data and auto-syncs securely on network recovery.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none h-[210px]">
                  <div>
                    <div className="w-8 h-8 rounded-none bg-white border border-[#EAE3D5] flex items-center justify-center mb-4 text-[#0A2540]">
                      <Globe className="w-4 h-4" strokeWidth={1} />
                    </div>
                    <h4 className="text-xs font-bold text-[#0A2540] mb-2">Multilingual Demographic Interface</h4>
                    <p className="text-[11px] text-[#5A6E85] leading-relaxed font-normal">
                      Accessible selector grids allow team members to navigate and log reports in English, Arabic, or Urdu. Promotes direct usability across diverse workforces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Android Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                {/* Phone Chassis */}
                <div className="relative w-[260px] h-[480px] bg-[#0A2540] rounded-[42px] p-2.5 shadow-2xl border-[3px] border-slate-700/80 flex flex-col justify-between overflow-visible">
                  {/* Speaker Grill */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-800 rounded-full z-50"></div>
                  
                  {/* Punch Hole Front Camera */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full z-50 border border-slate-900/40"></div>

                  {/* Side Buttons (CSS indicators) */}
                  <div className="absolute -right-[3px] top-24 w-[3px] h-10 bg-slate-800 rounded-r-sm"></div>
                  <div className="absolute -right-[3px] top-40 w-[3px] h-16 bg-slate-800 rounded-r-sm"></div>

                  {/* Android screen inner container */}
                  <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col justify-between font-mono text-[11px] text-[#5A6E85] p-3 pt-4 pb-3 border border-slate-950 relative select-none">
                    
                    {/* Status Bar */}
                    <div className="w-full flex justify-between items-center text-[8px] font-bold text-slate-400 font-sans px-1 pb-1 border-b border-[#EAE3D5]">
                      <span>15:43</span>
                      <span className="flex items-center gap-1">5G 📶 🔋 98%</span>
                    </div>

                    <div className="flex justify-between items-center border-b border-[#EAE3D5] py-2 font-bold">
                      <span className="text-[#0A2540] text-[10px]">SENTRAH MOBILE v3.2</span>
                      <span className={`text-[10px] px-1 border transition-all duration-300 ${
                        mobileStep === 3 
                          ? 'text-indigo-700 bg-indigo-50 border-indigo-200 animate-pulse' 
                          : 'text-green-700 bg-green-50 border-green-200'
                      }`}>{mobileStep === 3 ? '✓ SYNCED' : '✓ OFFLINE OK'}</span>
                    </div>

                    <div className="flex-grow py-3 space-y-3">
                      <div className="space-y-1">
                        <span className="text-[9px] text-[#5A6E85] block font-bold">CURRENT VISIT SITE</span>
                        <div className="p-2 bg-[#FAF9F6] border border-[#EAE3D5] text-[#0A2540] font-bold text-[9px] leading-tight rounded-none transition-all duration-300">
                          📍 Salmiya Tower 3, Floor 1
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] text-[#5A6E85] block font-bold">VISIT CHECKLIST ACTIONS</span>
                        <div className="space-y-1.5 font-bold">
                          <div className={`flex items-center gap-1.5 text-[9px] transition-all duration-300 ${
                            mobileStep >= 1 ? 'text-green-700' : 'text-[#5A6E85]'
                          }`}>
                            <span>{mobileStep >= 1 ? '✓' : '•'}</span> <span>On-Site Proximity Lock</span>
                          </div>
                          <div className={`flex items-center gap-1.5 text-[9px] transition-all duration-300 ${
                            mobileStep >= 2 ? 'text-green-700' : 'text-[#5A6E85]'
                          }`}>
                            <span>{mobileStep >= 2 ? '✓' : '•'}</span> <span>Photo Proof Attached</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className={`w-full py-2 font-bold uppercase tracking-wider text-[9px] rounded-none border-none transition-all duration-300 ${
                      mobileStep === 3 
                        ? 'bg-green-700 text-white' 
                        : mobileStep === 2 
                          ? 'bg-indigo-700 text-white animate-bounce cursor-pointer shadow-md' 
                          : 'bg-[#5A6E85] text-white opacity-70 cursor-not-allowed'
                    }`}>
                      {mobileStep === 3 ? '✓ Verification Sent' : 'Submit Visit Verification'}
                    </button>

                    {/* Bottom Navigation Gesture Bar */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 6. ADMIN CONTROL CENTER */}
      {activePlatformTab === 'admin' && (
        <section className="py-20 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">05 / OPERATIONS MANAGEMENT</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  Admin Control Center
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  Management-side overview. The Sentrah Admin Console allocates executive coordination control, approval management channels, and high-level reports validation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Administrative list */}
              <div className="lg:col-span-8 bg-white border border-[#EAE3D5] p-5 shadow-xs flex flex-col justify-between rounded-none">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-3 font-mono text-[11px] font-bold text-[#0A2540]">
                    <span>EXECUTIVE OPERATIONS CENTER</span>
                    <span className="text-green-700 bg-green-50 border border-green-200 px-1 font-bold">✓ CONNECTED</span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px] text-[#5A6E85]">
                    <span className="font-bold text-[#0A2540] block border-b border-[#EAE3D5]/50 pb-1 uppercase text-[10px]">Pending Approvals Dashboard</span>
                    {[
                      { id: "APP-042", tech: "Ahmad Khalil", request: "Requested Compressor Replacement Code #B2", cost: "$42.50" },
                      { id: "APP-043", tech: "Youssef A.", request: "Requested Overtime Extension (SLA breach cover)", cost: "1.5 hrs" }
                    ].map((app, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-[#FAF9F6] border border-[#EAE3D5] gap-2 rounded-none font-bold">
                        <div>
                          <span className="text-indigo-700">[{app.id}]</span> <span className="text-[#0A2540]">{app.tech}</span> - {app.request} (<strong className="text-[#0A2540]">{app.cost}</strong>)
                        </div>
                        <div className="flex gap-2">
                          <button className="px-2.5 py-1 bg-green-700 text-white border-none rounded-none text-[10px] font-bold cursor-pointer hover:bg-green-800">
                            APPROVE
                          </button>
                          <button className="px-2.5 py-1 bg-red-600 text-white border-none rounded-none text-[10px] font-bold cursor-pointer hover:bg-red-700">
                            DENY
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Overview stats */}
              <div className="lg:col-span-4 bg-[#0A2540] p-6 relative flex flex-col justify-between rounded-none text-white">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20"></div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-200 block mb-2">EXECUTIVE DASHBOARDS</span>
                  <h3 className="text-sm font-bold leading-snug mb-3">Complete Regional Oversight</h3>
                  <p className="text-xs text-[#A5B4FC] font-normal leading-relaxed mb-4">
                    Allocate resources, configure custom field validation checklists, and monitor system KPIs instantly.
                  </p>
                </div>
                <div className="space-y-2 font-mono text-[11px] text-white border-t border-white/10 pt-3">
                  <div className="flex justify-between">
                    <span>Weekly SLA Compliance:</span>
                    <strong className="text-green-400"><CountUp to={98.4} suffix="%" /></strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Supervisor Nodes:</span>
                    <strong className="text-indigo-200"><CountUp to={12} suffix=" Connected" /></strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 7. BUILT TO SCALE */}
      {activePlatformTab === 'scale' && (
        <section className="py-20 px-6 bg-white border-b border-[#EAE3D5] animate-fadeIn">
          <div className="container mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">06 / ENTERPRISE PLATFORM SCHEMATIC</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                  Built to Scale
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-8">
                <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                  A system built for longevity. Sentrah's modular framework integrates smoothly with legacy ERP systems, scaling database limits and IoT triggers cleanly as requirements evolve.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Architecture Diagram */}
              <div className="lg:col-span-8 bg-[#FAF9F6] border border-[#EAE3D5] p-6 shadow-xs flex flex-col justify-between rounded-none">
                <div className="border-b border-[#EAE3D5]/60 pb-3 mb-6 font-mono text-[11px] font-bold text-[#0A2540] uppercase">
                  Modular Platform Architecture & Integrations
                </div>

                <div className="flex-grow flex flex-col justify-center space-y-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white border border-[#EAE3D5] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] min-h-[84px] transition-all duration-300 hover:border-[#5A6E85]">
                      <Smartphone className="w-3.5 h-3.5 mb-1.5 text-indigo-700" strokeWidth={1.5} />
                      <span className="font-bold text-[#0A2540] block">Android Client</span>
                    </div>
                    <div className="bg-white border border-[#EAE3D5] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] min-h-[84px] transition-all duration-300 hover:border-[#5A6E85]">
                      <Cpu className="w-3.5 h-3.5 mb-1.5 text-indigo-700" strokeWidth={1.5} />
                      <span className="font-bold text-[#0A2540] block">IoT Telemetry</span>
                    </div>
                    <div className="bg-white border border-[#EAE3D5] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] min-h-[84px] transition-all duration-300 hover:border-[#5A6E85]">
                      <Globe className="w-3.5 h-3.5 mb-1.5 text-indigo-700" strokeWidth={1.5} />
                      <span className="font-bold text-[#0A2540] block">Web Portals</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-[1px] h-6 border-l border-dashed border-[#5A6E85]"></div>
                  </div>

                  <div className="bg-white border border-[#0A2540] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] max-w-md mx-auto w-full min-h-[84px] transition-all duration-300 hover:shadow-xs">
                    <Server className="w-4 h-4 mb-2 text-indigo-700" strokeWidth={1.5} />
                    <span className="font-extrabold text-[#0A2540] block uppercase tracking-wide">Sentrah Telemetry engine</span>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-[1px] h-6 border-l border-dashed border-[#5A6E85]"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto w-full">
                    <div className="bg-white border border-[#EAE3D5] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] min-h-[84px] transition-all duration-300 hover:border-[#5A6E85]">
                      <Database className="w-3.5 h-3.5 mb-1.5 text-indigo-700" strokeWidth={1.5} />
                      <span className="font-bold text-[#0A2540] block">Secure Database</span>
                    </div>
                    <div className="bg-white border border-[#EAE3D5] p-4 flex flex-col items-center justify-center text-center rounded-none font-mono text-[11px] min-h-[84px] transition-all duration-300 hover:border-[#5A6E85]">
                      <Sliders className="w-3.5 h-3.5 mb-1.5 text-indigo-700" strokeWidth={1.5} />
                      <span className="font-bold text-[#0A2540] block">Enterprise Connectors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Scale text */}
              <div className="lg:col-span-4 bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between rounded-none">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 mb-4 uppercase rounded-none">
                      ✓ SECURE & SCALABLE
                    </span>
                    <h3 className="text-sm font-extrabold text-[#0A2540] mb-2">Scale Without Bottlenecks</h3>
                    <p className="text-xs text-[#5A6E85] font-normal leading-relaxed">
                      Designed to scale operational oversight dynamically. As team rosters expand, the telemetry processor manages thousands of simultaneous coordinate queries cleanly.
                    </p>
                  </div>
                  <div className="space-y-3 font-mono text-[11px] text-[#5A6E85] border-t border-[#F4EFE6] pt-4">
                    <p><strong>Configurable Workflows:</strong> Adjust dynamic checklist templates instantly.</p>
                    <p><strong>Ecosystem Ready:</strong> API structures map to Oracle, SAP, and Salesforce.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          8. PLATFORM OUTCOMES
          Purpose: Summarize value.
          Style: Large metrics + concise statements.
          ========================================================================= */}
      <section className="py-24 px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">07 / PLATFORM VALUE METRICS</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Platform Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Objective system outcomes measured across actual enterprise field operations deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 30, prefix: "-", suffix: "%", title: "Coordination Overhead", desc: "Eliminated manual tracking checks, location phone calls, and admin entry errors." },
              { to: 99.8, suffix: "%", title: "GPS Check Lock Accuracy", desc: "Technician location checks are sealed with high-accuracy radial proximity coordinates." },
              { to: 0, suffix: " hrs", title: "Manual Report Typing", desc: "Digital inspection logs compile PDF output instantly upon on-site ticket closure." },
              { to: 3, suffix: "x", title: "Supervision Scaling", desc: "Supervisors control hundreds of field teams concurrently with automated SLA alerts." }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between rounded-none">
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
          9. CTA SECTION
          Headline: “Built for operational clarity at scale.”
          CTA: Talk to Our Team, Request Platform Demo
          ========================================================================= */}
      <section className="py-24 bg-[#F4EFE6] px-6 text-[#0A2540] text-center relative border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">SYSTEM DEPLOYMENT ACTIVE</span>
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] mb-6 leading-none max-w-2xl mx-auto">
            Built for operational clarity at scale.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto mb-10 font-normal leading-relaxed">
            Gain immediate control of coordinator workflows, SLA countdown metrics, and secure PDF service reports.
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
              Request Platform Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
