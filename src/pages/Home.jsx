import React, { useState, useEffect } from 'react';
import SplitText from '../components/common/SplitText';
import CountUp from '../components/common/CountUp';
import LiveTaskVisibilityVisual from '../components/visuals/LiveTaskVisibilityVisual';
import SLAMonitoringVisual from '../components/visuals/SLAMonitoringVisual';
import GPSTrackingVisual from '../components/visuals/GPSTrackingVisual';
import InstantReportsVisual from '../components/visuals/InstantReportsVisual';
import ProofOfWorkVisual from '../components/visuals/ProofOfWorkVisual';
import OfflineCapabilityVisual from '../components/visuals/OfflineCapabilityVisual';
import {
  Zap,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  FileText,
  Gauge,
  Database,
  Globe,
  Clock,
  MapPin,
  CheckSquare,
  ShieldAlert,
  Compass,
  Layers,
  WifiOff,
  CheckCircle2,
  Users,
  Shield
} from 'lucide-react';

export const Home = ({ onNavigate }) => {
  // High-fidelity active simulations state hooks
  const [mepLat, setMepLat] = useState(29.37);
  const [mepLng, setMepLng] = useState(47.97);
  const [amcActiveRow, setAmcActiveRow] = useState(0);
  const [onboardBase, setOnboardBase] = useState(90);
  const [onboardRoles, setOnboardRoles] = useState(95);
  const [dedicatedStep, setDedicatedStep] = useState(2); // 2 steps checked
  const [apiDelay, setApiDelay] = useState(0);

  // New micro-workflow simulator states
  const [hubSla, setHubSla] = useState([12, 55, 112]);
  const [hubLatAhmad, setHubLatAhmad] = useState(29.3759);
  const [hubLngAhmad, setHubLngAhmad] = useState(47.9774);
  const [hubLatLaura, setHubLatLaura] = useState(23.5859);
  const [hubLngLaura, setHubLngLaura] = useState(58.4059);
  const [hubLatArthur, setHubLatArthur] = useState(19.0760);
  const [hubLngArthur, setHubLngArthur] = useState(72.8777);
  const [completedSheetIndex, setCompletedSheetIndex] = useState(0);
  const [schematicLayer, setSchematicLayer] = useState(0);
  
  const [hvacActual, setHvacActual] = useState(21.8);
  const [telecomStr, setTelecomStr] = useState(98.4);
  const [logisticsStep, setLogisticsStep] = useState(0);
  const [utilityKwh, setUtilityKwh] = useState(482.15);
  const [gasPressure, setGasPressure] = useState(12.4);

  useEffect(() => {
    // 1. Coordinates drift for MEP Facilities blueprint
    const coordsInterval = setInterval(() => {
      setMepLat(prev => parseFloat((prev + (Math.random() * 0.02 - 0.01)).toFixed(2)));
      setMepLng(prev => parseFloat((prev + (Math.random() * 0.02 - 0.01)).toFixed(2)));
    }, 3000);

    // 2. AMC Periodic Cycle active glowing row loop
    const amcInterval = setInterval(() => {
      setAmcActiveRow(prev => (prev === 0 ? 1 : 0));
    }, 4000);

    // 3. Onboarding Specialist progress loading loops
    const progressInterval = setInterval(() => {
      setOnboardBase(prev => (prev < 100 ? prev + 1 : 85));
      setOnboardRoles(prev => (prev < 100 ? prev + 1 : 90));
    }, 800);

    // 4. Dedicated Consultant sequential console setup ticks
    const dedicatedInterval = setInterval(() => {
      setDedicatedStep(prev => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    // 5. Continuous System Evolution api delay fluctuations
    const apiInterval = setInterval(() => {
      setApiDelay(prev => (Math.random() > 0.6 ? Math.floor(Math.random() * 3) : 0));
    }, 2500);

    // 6. Dynamic countdown for SLAs in Command Hub
    const hubSlaInterval = setInterval(() => {
      setHubSla(prev => [
        prev[0] > 1 ? prev[0] - 1 : 12,
        prev[1] > 1 ? prev[1] - 1 : 55,
        prev[2] > 1 ? prev[2] - 1 : 112
      ]);
    }, 4000);

    // 7. Drifts for all 3 technicians in Command Hub
    const hubCoordsInterval = setInterval(() => {
      setHubLatAhmad(prev => prev + (Math.random() * 0.0002 - 0.0001));
      setHubLngAhmad(prev => prev + (Math.random() * 0.0002 - 0.0001));
      setHubLatLaura(prev => prev + (Math.random() * 0.0002 - 0.0001));
      setHubLngLaura(prev => prev + (Math.random() * 0.0002 - 0.0001));
      setHubLatArthur(prev => prev + (Math.random() * 0.0002 - 0.0001));
      setHubLngArthur(prev => prev + (Math.random() * 0.0002 - 0.0001));
    }, 2500);

    // 8. Dynamic rotation of completed sheet logs
    const logInterval = setInterval(() => {
      setCompletedSheetIndex(prev => (prev === 2 ? 0 : prev + 1));
    }, 6000);

    // 9. System Schematic Pipeline Active Layer Flow
    const layerInterval = setInterval(() => {
      setSchematicLayer(prev => (prev === 2 ? 0 : prev + 1));
    }, 3000);

    // 10. Sectors: HVAC Temp drifts
    const hvacInterval = setInterval(() => {
      setHvacActual(prev => parseFloat((21.8 + (Math.sin(Date.now() / 2000) * 0.3)).toFixed(1)));
    }, 1500);

    // 11. Sectors: Telecom signal fluctuation
    const telecomInterval = setInterval(() => {
      setTelecomStr(prev => parseFloat((98.4 + (Math.random() * 0.6 - 0.3)).toFixed(1)));
    }, 2000);

    // 12. Sectors: Logistics route vehicle progression
    const logisticsInterval = setInterval(() => {
      setLogisticsStep(prev => (prev === 2 ? 0 : prev + 1));
    }, 4000);

    // 13. Sectors: Utility Load meter count ups
    const utilityInterval = setInterval(() => {
      setUtilityKwh(prev => parseFloat((prev + (Math.random() * 0.05)).toFixed(2)));
    }, 1000);

    // 14. Sectors: Gas safety pressure shift
    const gasInterval = setInterval(() => {
      setGasPressure(prev => parseFloat((12.4 + (Math.random() * 0.4 - 0.2)).toFixed(1)));
    }, 3000);

    return () => {
      clearInterval(coordsInterval);
      clearInterval(amcInterval);
      clearInterval(progressInterval);
      clearInterval(dedicatedInterval);
      clearInterval(apiInterval);
      clearInterval(hubSlaInterval);
      clearInterval(hubCoordsInterval);
      clearInterval(logInterval);
      clearInterval(layerInterval);
      clearInterval(hvacInterval);
      clearInterval(telecomInterval);
      clearInterval(logisticsInterval);
      clearInterval(utilityInterval);
      clearInterval(gasInterval);
    };
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-[#0A2540] antialiased">

      {/* 2. HERO SECTION
          Purpose: Immediate positioning.
          Content: Enterprise Field Operations Platform, Field execution visibility and SLA control, plus 3 core parameters.
          Ratio: 50% Content / 50% Floating UI Composition */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-[120px] px-6 border-b border-[#EAE3D5] relative overflow-hidden">

        {/* Pinstripe diagonal background */}
        <div className="absolute inset-0 -z-10 opacity-30"
          style={{ background: 'repeating-linear-gradient(-45deg, #EAE3D5, #EAE3D5 1px, transparent 1px, transparent 12px)' }}>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Side Content (Immediate Positioning) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">

              {/* Product capsule badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] mb-6">
                <span className="w-1.5 h-1.5 bg-[#0A2540]"></span>
                <span>SYSTEM ACTIVE • VERSION 4.2</span>
              </div>

              {/* H1 Heading */}
              <SplitText
                text={"Enterprise Field\nOperations Platform."}
                tag="h1"
                className="text-4xl sm:text-5xl lg:text-[62px] font-medium tracking-tighter leading-[1.05] text-[#0A2540] mb-6 text-left"
                textAlign="left"
                delay={35}
              />

              {/* Primary Subheading */}
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-8 max-w-lg font-normal">
                Field execution visibility and SLA control. Systematically coordinate dispatch schedules, track technical trace routes, and audit completion parameters.
              </p>

              {/* 3 Core Bullet Points */}
              <div className="space-y-3 mb-8 w-full max-w-md">
                {[
                  "14–21 day implementation timeline",
                  "Live, coordinate-checked operational visibility",
                  "Non-disruptive deployment into existing grids"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[11px] font-mono font-bold text-[#0A2540]">
                    <span className="w-1.5 h-1.5 bg-[#0A2540]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('company')}
                  className="px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors cursor-pointer border-none shadow-xs"
                >
                  Talk to Our Team
                </button>
                <button
                  onClick={() => onNavigate('platform')}
                  className="px-6 py-3.5 bg-white text-[#0A2540] border border-[#EAE3D5] text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                >
                  Explore Platform
                </button>
              </div>

            </div>

            {/* Right Side Visual (NOT full dashboard - 3-4 Floating UI cards on schematic grid) */}
            <div className="lg:col-span-6 relative">

              {/* Schematic outer bounds (100% sharp corner radius) */}
              <div className="bg-white border border-[#EAE3D5] p-4 sm:p-8 shadow-xs relative h-auto min-h-[420px] lg:h-[420px] flex items-center justify-center">

                {/* Engineering Precision Crosshairs */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#5A6E85]/30"></div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#5A6E85]/30"></div>
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#5A6E85]/30"></div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#5A6E85]/30"></div>
                
                {/* Center Target grid lines - hidden on mobile/tablet for clean space */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-[1px] bg-[#5A6E85]"></div>
                  <div className="h-full w-[1px] bg-[#5A6E85] absolute"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:absolute lg:inset-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:p-8 z-10 w-full">
                  {/* Top-Left Quadrant */}
                  <div className="flex items-center justify-center p-2">
                    {/* Floating UI Card 1: KPI Snippet */}
                    <div className="w-full max-w-[208px] bg-[#FAF9F6] border border-[#EAE3D5] p-3 text-xs font-mono shadow-xs hover:-translate-y-1 transition-all duration-300">
                      <span className="text-[11px] font-bold text-[#5A6E85] block mb-1 uppercase tracking-wider">COMPLIANCE METRIC</span>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0A2540] text-sm"><CountUp to={98.2} suffix="% SLA" /></span>
                        <span className="text-green-700 bg-green-50 px-1.5 py-0.5 border border-green-200 text-[10px] font-extrabold">CHECKED</span>
                      </div>
                    </div>
                  </div>

                  {/* Top-Right Quadrant */}
                  <div className="flex items-center justify-center p-2">
                    {/* Floating UI Card 2: Live Technician Status */}
                    <div className="w-full max-w-[224px] bg-white border border-[#EAE3D5] p-3 sm:p-4 text-xs shadow-sm hover:-translate-y-1 transition-all duration-300">
                      <span className="text-[11px] font-mono font-bold text-[#5A6E85] block mb-1.5 uppercase">LIVE TELEMETRY</span>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-600"></div>
                        <span className="font-bold text-[#0A2540]">Ahmad Khalil</span>
                      </div>
                      <div className="text-xs font-mono text-[#5A6E85]">
                        In Transit • Kuwait Zone C
                      </div>
                      <div className="border-t border-[#F4EFE6] pt-2 mt-2 flex justify-between text-[10px] font-mono">
                        <span>ETA: <CountUp to={22} suffix=" MINS" /></span>
                        <span className="text-indigo-700">✓ LIVE TRACKING</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Left Quadrant */}
                  <div className="flex items-center justify-center p-2">
                    {/* Floating UI Card 3: SLA chip / Task Card */}
                    <div className="w-full max-w-[240px] bg-[#FAF9F6] border border-[#EAE3D5] p-3 sm:p-4 text-xs shadow-sm hover:-translate-y-1 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-[#EAE3D5]">
                        <span className="font-mono font-bold text-[#0A2540]">TASK #F8421</span>
                        <span className="text-[10px] font-mono text-orange-700 bg-orange-50 px-1.5 py-0.5 border border-orange-200">SLA ALERT</span>
                      </div>
                      <p className="text-xs text-[#5A6E85] font-semibold mb-2">
                        HVAC Compressor Calibration
                      </p>
                      <div className="flex justify-between text-[10px] font-mono text-[#5A6E85]">
                        <span>LIMIT: <CountUp to={90} suffix=" MINS" /></span>
                        <span className="text-red-600 font-extrabold"><CountUp to={12} suffix=" MINS REMAINING" /></span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Right Quadrant */}
                  <div className="flex items-center justify-center p-2">
                    {/* Floating UI Card 4: Action check */}
                    <div className="bg-[#0A2540] text-white p-3 text-[10px] font-mono tracking-widest uppercase hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-xs">
                      <span>SYSTEM FEED ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5: TRUSTED PARTNERS / LOGO MARQUEE LOOP */}
      <section className="border-b border-[#EAE3D5] bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">

            {/* Left Title: Sticky on the left with border divider */}
            <div className="md:col-span-3 py-6 px-6 md:py-8 md:pr-8 border-b md:border-b-0 md:border-r border-[#EAE3D5] flex items-center bg-white z-10">
              <h3 className="text-xs md:text-sm font-semibold tracking-tight text-[#5A6E85] leading-normal uppercase">
                Trusted by some of the <br className="hidden md:block" /> biggest companies
              </h3>
            </div>

            {/* Right Marquee Scroll Area */}
            <div className="md:col-span-9 py-6 md:py-8 overflow-hidden relative marquee-container select-none flex items-center">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

              <div className="flex w-max min-w-full">
                {/* Loop 1 */}
                <div className="flex shrink-0 items-center gap-16 min-w-full justify-around px-8 animate-marquee">
                  {[
                    { name: "Plura", icon: <circle cx="12" cy="12" r="9" /> },
                    { name: "Okoblox", icon: <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" /> },
                    { name: "Tunogen", icon: <path d="M4 4h16v16H4z" /> },
                    { name: "Runebolt", icon: <path d="M12 3v3M12 18v3M4.93 4.93l2.12 2.12" /> },
                    { name: "Mythosync", icon: <line x1="6" y1="18" x2="18" y2="6" /> },
                    { name: "Fizzyriff", icon: <circle cx="12" cy="12" r="6" /> }
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-[#5A6E85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
                        {brand.icon}
                      </svg>
                      <span className="text-[#0A2540] font-bold text-xs tracking-tight font-sans uppercase">{brand.name}</span>
                    </div>
                  ))}
                </div>

                {/* Loop 2 */}
                <div className="flex shrink-0 items-center gap-16 min-w-full justify-around px-8 animate-marquee">
                  {[
                    { name: "Plura", icon: <circle cx="12" cy="12" r="9" /> },
                    { name: "Okoblox", icon: <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" /> },
                    { name: "Tunogen", icon: <path d="M4 4h16v16H4z" /> },
                    { name: "Runebolt", icon: <path d="M12 3v3M12 18v3M4.93 4.93l2.12 2.12" /> },
                    { name: "Mythosync", icon: <line x1="6" y1="18" x2="18" y2="6" /> },
                    { name: "Fizzyriff", icon: <circle cx="12" cy="12" r="6" /> }
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-[#5A6E85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
                        {brand.icon}
                      </svg>
                      <span className="text-[#0A2540] font-bold text-xs tracking-tight font-sans uppercase">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL CHAOS → CLARITY
          Purpose: Show why Sentrah exists. Merges all "problem" content into one split section. */}
      <section className="py-20 md:py-[120px] px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] mb-4">
                <span className="w-1.5 h-1.5 bg-[#0A2540]"></span>
                <span>The Operational Reality</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                Operational Chaos <br />
                <span className="text-indigo-700">→ Structured Clarity</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed font-normal">
                Why coordinate manually when you can systematically validate? Sentrah replaces scattered chat groups and spreadsheet logging with a unified coordinate-checked repository.
              </p>
            </div>
          </div>

          {/* Before vs After split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* The Chaos (Before) */}
            <div className="bg-[#FAF9F6] border border-[#EAE3D5] p-8 relative flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-red-300"></div>

              <div>
                <span className="inline-flex px-2 py-0.5 text-[11px] font-mono font-bold text-red-600 bg-red-50 border border-red-200 mb-6 uppercase">
                  ✕ Manual Field Coordination
                </span>

                <h3 className="text-lg font-bold text-[#0A2540] mb-6">Redundant Coordination Chaos</h3>

                <div className="space-y-6 text-xs text-[#5A6E85]">
                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Constant Phone Calls:</strong> Office teams spend hours repeating manual status updates just to verify simple technician locations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Fragmented WhatsApp Chats:</strong> Key photos, site coordination updates, and client check-ins are scattered across unorganized chat groups.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Manual Excel Sheets:</strong> Redundant administrative compilation cycles are spent to log check-outs, materials inventory, and client sign-offs.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Late Updates & Coordination:</strong> Delays in dispatch metrics translate to unnoticed SLA breaches and administrative coordination overhead.</p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#5A6E85] mt-12 pt-4 border-t border-[#EAE3D5]">
                UNTRACKED COORDINATES • ZERO COMPLIANCE AUDITS
              </div>
            </div>

            {/* The Clarity (After) */}
            <div className="bg-white border border-[#0A2540] p-8 relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#0A2540]"></div>

              <div>
                <span className="inline-flex px-2 py-0.5 text-[11px] font-mono font-bold text-green-700 bg-green-50 border border-green-200 mb-6 uppercase">
                  ✓ Sentrah Platform Clarity
                </span>

                <h3 className="text-lg font-bold text-[#0A2540] mb-6">Centralized Digital Authority</h3>

                <div className="space-y-6 text-xs text-[#5A6E85]">
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Live Operational Visibility:</strong> View active coordinates, active schedules, and status milestones instantly inside command center panels.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Structured Dynamic Execution:</strong> Field users run unalterable step-by-step checklist parameter templates straight from the mobile client.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Real-Time SLA & GPS Feeds:</strong> Automatic location coordinate checks are logged securely, fully cross-referenced against response parameters.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-4 h-4 text-[#0A2540] shrink-0 shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="leading-relaxed"><strong className="text-[#0A2540]">Complete Audit Readiness:</strong> Dynamic inventory checking logs, reports, and signature captures save hours of redundant data entry.</p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#0A2540] mt-12 pt-4 border-t border-[#EAE3D5] font-bold">
                100% SECURE GPS VERIFICATION • PROACTIVE ALERTS
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE PLATFORM CAPABILITIES
          Purpose: Merge multiple separate feature sections into ONE premium system section.
          Layout: Centered header with a visual-heavy 2-column staggered grid. */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          {/* Centered Header matching reference design */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] mb-4 uppercase">
              <span className="w-1.5 h-1.5 bg-indigo-700"></span>
              <span>01 / FEATURE MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Unlock core capabilities <br />
              that drive <span className="text-indigo-700 font-extrabold">operational results</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Everything you need to coordinate, track, and optimize your field force in one place.
            </p>
          </div>

          {/* 2-column visual-heavy grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Capability 1: Live Task Visibility (Smart Dashboard) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <LiveTaskVisibilityVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Live Task Visibility</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Track every job ticket and technician status milestone dynamically. Central dispatch centers receive real-time, coordinate-validated progress updates.
                </p>
              </div>
            </div>

            {/* Capability 2: SLA Monitoring (AI-Powered Solutions) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <SLAMonitoringVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">SLA Monitoring</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Establish automatic compliance rules. Monitor active countdown timers and send proactive alert triggers to coordinators before breaches happen.
                </p>
              </div>
            </div>

            {/* Capability 3: GPS Tracking (Launch Task Quickly) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <GPSTrackingVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">GPS Tracking</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Validate field visits automatically. Secure, unalterable GPS coordinate tracking seals each site check-in without manual dispatcher checks.
                </p>
              </div>
            </div>

            {/* Capability 4: Instant Reports (Automation Engine) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <InstantReportsVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Instant Reports</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Compile detailed audit summaries instantly. Digital checklist outputs, client sign-offs, and materials tracking maps populate the database on site-close.
                </p>
              </div>
            </div>

            {/* Capability 5: Proof of Work (Unalterable Site Logs) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <ProofOfWorkVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Proof of Work</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Anchor site logs securely. Photo evidence captures, diagnostic readings, and field inventory usage are mapped directly to coordinate nodes.
                </p>
              </div>
            </div>

            {/* Capability 6: Offline Syncing (Collaboration Tools) */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[280px] w-full">
                <OfflineCapabilityVisual />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Offline Capability</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Keep operations active without cellular coverage. Local client data syncs back systematically the moment technician connection is restored.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LIVE OPERATIONS PREVIEW
          Purpose: Show the actual operational intelligence.
          Include: technician live tracking, SLA timeline, service reports, KPI metrics, operational table.
          Style: Large centered platform preview. */}
      <section className="py-20 md:py-[120px] px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">02 / CORE OPERATIONS PREVIEW</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-4">
              Operational Command Hub
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] font-normal">
              A single coordinate-checked dashboard. Monitor technician trace coordinates, check SLA countdowns, and verify site signature logs side-by-side.
            </p>
          </div>

          {/* Large Centered Platform Preview */}
          <div className="bg-white border border-[#EAE3D5] p-6 shadow-xs relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#5A6E85]/30"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#5A6E85]/30"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#5A6E85]/30"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#5A6E85]/30"></div>

            {/* Platform UI Container */}
            <div className="bg-[#FAF9F6] border border-[#EAE3D5]">

              {/* Header Bar */}
              <div className="px-4 py-3 bg-white border-b border-[#EAE3D5] flex flex-wrap justify-between items-center text-[10px] font-mono text-[#5A6E85] gap-4">
                <span className="font-bold uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-600"></span>
                  SENTRAH LIVE METRIC PIPELINE
                </span>
                <div className="flex gap-4">
                  <span>LAT 29.3759° N • LON 47.9774° E</span>
                  <span className="text-green-700 font-bold">✓ SECURE CONNECTION ACTIVE</span>
                </div>
              </div>

              {/* Hub Layout Grid */}
              <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">

                {/* 1. Live Feed & SLA Timeline (Left 4 cols) */}
                <div className="lg:col-span-4 bg-white border border-[#EAE3D5] p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#5A6E85] block mb-3 uppercase tracking-wider">ACTIVE SLA TIMELINE</span>

                    <div className="space-y-3">
                      {[
                        { ticket: "HVAC Compressor A2", time: `${hubSla[0]} Mins Left`, state: "Urgent Warning", alert: true },
                        { ticket: "Tower B Power Check", time: `${hubSla[1]} Mins Left`, state: "In Transit", alert: false },
                        { ticket: "Oman Depot System", time: `${hubSla[2]} Mins Left`, state: "Normal Check", alert: false }
                      ].map((row, idx) => (
                        <div key={idx} className={`p-2.5 border transition-all duration-300 ${row.alert ? 'animate-pulseGlow bg-red-50/50' : 'bg-[#FAF9F6] border-[#EAE3D5]'} text-xs`}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-[#0A2540]">{row.ticket}</span>
                            <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 border ${row.alert ? 'text-red-700 bg-red-50 border-red-200 animate-pulse' : 'text-[#5A6E85] bg-[#EAE3D5] border-transparent'}`}>
                              {row.state}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#5A6E85] font-mono tabular-nums">COUNTDOWN: {row.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F4EFE6] text-[10px] font-mono text-[#5A6E85]">
                    AUTOMATIC ESCALATIONS: ACTIVE
                  </div>
                </div>

                {/* 2. Operational Table & Live Map Pins (Right 8 cols) */}
                <div className="lg:col-span-8 bg-white border border-[#EAE3D5] p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#5A6E85] block mb-3 uppercase tracking-wider">REAL-TIME GPS TELEMETRY & REPORT LOGS</span>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#EAE3D5] text-[10px] font-mono uppercase tracking-wider text-[#5A6E85]">
                            <th className="py-2">Technician</th>
                            <th className="py-2">Assigned Site</th>
                            <th className="py-2">Site Coordinates</th>
                            <th className="py-2 text-right">Verification Seal</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs font-mono text-[#5A6E85]">
                          {[
                            { name: "Ahmad Khalil", site: "Salmiya Tower C", lat: hubLatAhmad, lng: hubLngAhmad, check: "GPS CHECKED" },
                            { name: "Laura P.", site: "Ruwi Telecom Unit", lat: hubLatLaura, lng: hubLngLaura, check: "GPS CHECKED" },
                            { name: "Arthur G.", site: "Andheri MEP Complex", lat: hubLatArthur, lng: hubLngArthur, check: "GPS CHECKED" }
                          ].map((row, idx) => (
                            <tr key={idx} className="border-b border-[#F4EFE6] last:border-b-0 hover:bg-[#FAF9F6]/50 transition-colors">
                              <td className="py-2.5 font-bold text-[#0A2540]">{row.name}</td>
                              <td className="py-2.5 font-bold">{row.site}</td>
                              <td className="py-2.5 text-[#5A6E85] tabular-nums">
                                {row.lat.toFixed(4)}° N | {row.lng.toFixed(4)}° E
                              </td>
                              <td className="py-2.5 text-right">
                                <span className="text-green-700 bg-green-50 px-1.5 py-0.5 border border-green-150 text-[10px] font-extrabold animate-pulse">
                                  {row.check}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Active Service Report Preview Block */}
                  <div className="mt-4 p-3 bg-[#FAF9F6] border border-[#EAE3D5] text-xs font-mono text-[#5A6E85] flex flex-wrap justify-between items-center transition-all duration-500 h-[42px] content-center">
                    <div className="transition-all duration-500 flex-grow">
                      {completedSheetIndex === 0 && (
                        <div className="animate-fadeIn">
                          <strong className="text-[#0A2540] uppercase">COMPLETED SHEET LOG #F8421: </strong>
                          <span>Ahmad Khalil logged 2x compressor parts at Salmiya Site.</span>
                        </div>
                      )}
                      {completedSheetIndex === 1 && (
                        <div className="animate-fadeIn">
                          <strong className="text-[#0A2540] uppercase">COMPLETED SHEET LOG #F8422: </strong>
                          <span>Laura P. verified tower lock and route calibration at Ruwi Site.</span>
                        </div>
                      )}
                      {completedSheetIndex === 2 && (
                        <div className="animate-fadeIn">
                          <strong className="text-[#0A2540] uppercase">COMPLETED SHEET LOG #F8423: </strong>
                          <span>Arthur G. closed MEP safety diagnostics check sheet at Andheri Site.</span>
                        </div>
                      )}
                    </div>
                    <span className="text-green-700 font-extrabold uppercase text-[10px] animate-pulse">✓ SIGNED OFF</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. DESIGNED TO SCALE
          Purpose: Position Sentrah as enterprise-ready.
          Visual: Modular architecture diagram built cleanly. */}
      <section className="py-20 md:py-[120px] px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">03 / ARCHITECTURE</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
                Designed to Scale
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8 font-normal">
                Sentrah isn't built as a rigid, one-size-fits-all tool. Our platform features a highly modular structure. Implement core coordinates logging today, and scale parameters systematically as your operations expand.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Modular by design", desc: "Enable or disable module parameters on-demand." },
                  { title: "Configurable workflows", desc: "Build step-by-step checklist sheets matching actual sectors." },
                  { title: "Automation-ready", desc: "Sync live status feeds with core CRM/ERP software seamlessly." },
                  { title: "Expandable ecosystem", desc: "Extend capabilities from route tracking to inventory checkout." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#0A2540] shrink-0 mt-1.5"></span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0A2540]">{item.title}</h4>
                      <p className="text-[10px] text-[#5A6E85]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modular Architecture Diagram Visual */}
            <div className="lg:col-span-7 bg-white border border-[#EAE3D5] p-6 relative">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#5A6E85]/30"></div>
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#5A6E85]/30"></div>

              <span className="text-[10px] font-mono font-bold text-[#5A6E85] block mb-6 uppercase tracking-wider">SENTRAH SYSTEM SCHEMATIC PIPELINE</span>

              <div className="space-y-4 text-[10px] font-mono font-bold text-[#0A2540]">

                {/* Layer 1: Core Engine */}
                <div className={`p-4 border text-center transition-all duration-500 rounded-none ${
                  schematicLayer === 0 
                    ? 'bg-indigo-50 border-indigo-300 shadow-xs scale-[1.01]' 
                    : 'bg-[#FAF9F6] border-[#EAE3D5]'
                }`}>
                  <div className="text-[10px] text-[#5A6E85] uppercase mb-1">CORE COMMAND DATABASE</div>
                  <span>CENTRAL TELEMETRY DATABASE LAYER</span>
                </div>

                {/* Connecting Lines */}
                <div className={`flex justify-around text-[11px] font-mono transition-colors duration-500 ${
                  schematicLayer === 0 ? 'text-indigo-600 font-extrabold' : 'text-[#5A6E85]'
                }`}>
                  <span className={schematicLayer === 0 ? 'animate-bounce' : ''}>↓</span>
                  <span className={schematicLayer === 0 ? 'animate-bounce delay-75' : ''}>↓</span>
                  <span className={schematicLayer === 0 ? 'animate-bounce delay-150' : ''}>↓</span>
                </div>

                {/* Layer 2: Core Workflows */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { pipeline: "GPS PIPELINE", label: "Route Trace" },
                    { pipeline: "SLA ENGINE", label: "Timing Limits" },
                    { pipeline: "AUDIT STACK", label: "Report Sheets" }
                  ].map((node, idx) => (
                    <div key={idx} className={`p-3 border text-center transition-all duration-500 rounded-none ${
                      schematicLayer === 1 
                        ? 'bg-indigo-50 border-indigo-300 shadow-xs scale-[1.02]' 
                        : 'bg-white border-[#EAE3D5]'
                    }`}>
                      <span className="block text-[10px] text-[#5A6E85] mb-1">{node.pipeline}</span>
                      <span>{node.label}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting Lines */}
                <div className={`flex justify-around text-[11px] font-mono transition-colors duration-500 ${
                  schematicLayer === 1 ? 'text-indigo-600 font-extrabold' : 'text-[#5A6E85]'
                }`}>
                  <span className={schematicLayer === 1 ? 'animate-bounce' : ''}>↓</span>
                  <span className={schematicLayer === 1 ? 'animate-bounce delay-75' : ''}>↓</span>
                  <span className={schematicLayer === 1 ? 'animate-bounce delay-150' : ''}>↓</span>
                </div>

                {/* Layer 3: Expansion Modules */}
                <div className={`p-4 border transition-all duration-500 rounded-none ${
                  schematicLayer === 2 
                    ? 'bg-indigo-50 border-indigo-300 shadow-xs scale-[1.01]' 
                    : 'bg-[#FAF9F6] border-[#EAE3D5]'
                }`}>
                  <div className="text-[10px] text-[#5A6E85] uppercase text-center mb-3">EXPANDABLE ENTERPRISE ADAPTER MODULES</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-center font-bold">
                    {[
                      "Workforce HR",
                      "Stock & Parts",
                      "Petty Cash",
                      "ERP Connectors"
                    ].map((mod, idx) => (
                      <div key={idx} className={`p-1.5 border transition-all duration-500 ${
                        schematicLayer === 2 
                          ? 'bg-white border-indigo-200 text-indigo-800' 
                          : 'bg-white border-[#EAE3D5] text-[#0A2540]'
                      }`}>
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES WE SUPPORT
          Purpose: Build relevance quickly. Minimal grid cards with high-fidelity visual telemetry mockups. */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          {/* Centered Header matching reference layout */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] mb-4 uppercase">
              <span className="w-1.5 h-1.5 bg-indigo-700"></span>
              <span>04 / SUPPORTED SECTORS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Operating natively across <br />
              critical <span className="text-indigo-700 font-extrabold">industries</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              Sentrah operates natively across critical infrastructure, AMC maintenance contracts, and ground service operations.
            </p>
          </div>

          {/* Staggered visual grid layout (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Sector 1: HVAC & Refrigeration */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779714236/Group_51_v5obz0.svg" alt="HVAC & Refrigeration" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">HVAC & Refrigeration</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Response-time SLA checks and active task sheets tracking compressor and chiller status levels.
                </p>
              </div>
            </div>

            {/* Sector 2: Telecom Infrastructure */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779714236/Group_52_a46gom.svg" alt="Telecom Infrastructure" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">Telecom Infrastructure</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Unalterable site coordinate audits and active asset logging across cell tower towers and terminal sites.
                </p>
              </div>
            </div>

            {/* Sector 3: Logistics */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779776037/Group_55_k2qvsg.svg" alt="Logistics & Supply" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">Logistics & Supply</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Location check-out verification, route status sequence updates, and digital customer signature sign-offs.
                </p>
              </div>
            </div>
 
            {/* Sector 4: Utility Metering */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779779214/Group_56_oaaf9f.svg" alt="Utility Metering" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">Utility Metering</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Systematic route sequences and coordinates pipeline mapping to log utility parameters efficiently on site.
                </p>
              </div>
            </div>
 
            {/* Sector 5: FMCG & Manufacturing */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779779214/Group_57_m9wrcz.svg" alt="FMCG & Manufacturing" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">FMCG & Manufacturing</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Live dispatch parameters tracking, field stock inventory maps, and coordinate-linked material logs.
                </p>
              </div>
            </div>

            {/* Sector 6: Oil & Gas */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779780394/Group_58_neauir.svg" alt="Oil & Gas Infrastructure" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">Oil & Gas Infrastructure</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Strict safety compliance checklist rules and secure audit trace logs for remote coordinates deployments.
                </p>
              </div>
            </div>

            {/* Sector 7: MEP Facilities */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779780394/Group_59_funxk5.svg" alt="MEP Facilities" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">MEP Facilities</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Continuous facility coordination, maintenance checklists, and dynamic mechanical engineering telemetry logs.
                </p>
              </div>
            </div>

            {/* Sector 8: Service & AMC Contracts */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779780395/Group_60_d7rbhs.svg" alt="Service & AMC Contracts" className="w-24 h-24 object-contain transition-all duration-300 hover:scale-105" />
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <div className="mb-1.5">
                  <h3 className="text-sm font-extrabold text-[#0A2540]">Service & AMC Contracts</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Scheduled maintenance service cycles, SLA tracking limits, and automated recurring coordinator tickets.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('solutions')}
              className="px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors inline-flex items-center gap-2 cursor-pointer border-none"
            >
              Explore Solutions Stack
            </button>
          </div>

        </div>
      </section>

      {/* 8. OPERATIONAL OUTCOMES
          Purpose: Merge customer results into ONE concise section.
          Metrics Style: Large clean KPI blocks. */}
      <section className="py-20 md:py-[120px] px-6 bg-[#FAF9F6] border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">05 / PLATFORM METRICS</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none">
                Operational Outcomes
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-xs sm:text-sm text-[#5A6E85] font-normal leading-relaxed">
                Objective system outcomes measured across actual enterprise field operations deployments. We establish digital authority to drive bottom-line coordination efficiency.
              </p>
            </div>
          </div>

          {/* Large Clean KPI Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 22, prefix: "-", suffix: "%", title: "Reduced Operational Cost", desc: "Eliminated redundant administrative tracking updates and call routing." },
              { to: 35, prefix: "+", suffix: "%", title: "Increased Field Productivity", desc: "Technicians execute direct checklist parameters without manual delays." },
              { to: 98.2, suffix: "%", title: "Higher Customer Satisfaction", desc: "Proactive compliance checks avoid contract penalties and SLA breaches." },
              { to: 90, suffix: "%", title: "Happier Office Teams", desc: "Coordination coordinates populate automatically, reducing check-in telephone calls." }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white border border-[#EAE3D5] p-6 relative flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#5A6E85]/20"></div>

                <div>
                  <span className="text-4xl lg:text-[46px] font-bold font-mono tracking-tighter text-indigo-700 block mb-2">
                    <CountUp to={metric.to} prefix={metric.prefix} suffix={metric.suffix} />
                  </span>
                  <h4 className="text-xs font-bold text-[#0A2540] mb-2">{metric.title}</h4>
                  <p className="text-[10px] text-[#5A6E85] font-normal leading-relaxed">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. SUPPORT & PARTNERSHIP
          Purpose: Human trust layer (operational partnership tone, no support fluff).
          Layout: Centered header with a visual-heavy 3-column grid mapping support metrics. */}
      <section className="py-24 px-6 bg-white border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-7xl">

          {/* Centered Header matching reference layout */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-[#EAE3D5] text-[10px] font-mono tracking-wider text-[#5A6E85] mb-4 uppercase">
              <span className="w-1.5 h-1.5 bg-indigo-700"></span>
              <span>06 / HUMAN TRUST LAYER</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] leading-none mb-6">
              Support & <span className="text-indigo-700 font-extrabold">partnership</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto font-normal leading-relaxed">
              An engineering-level deployment team allocated directly to your operational hub coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Onboarding Specialist */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <div className="w-full max-w-[200px] bg-white border border-[#EAE3D5] p-3 shadow-xs font-mono text-[11px] text-[#5A6E85] space-y-2 rounded-none">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1">
                    <span className="font-bold text-[#0A2540]">ONBOARDING HUB</span>
                    <span className="text-[10px] text-green-700 bg-green-50 px-1 border border-green-200">✓ DEPLOYED</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-[#0A2540]">
                      <span>Base Coordinates:</span>
                      <span className="font-bold">{onboardBase}% [✓]</span>
                    </div>
                    <div className="w-full bg-[#FAF9F6] border border-[#EAE3D5] h-1.5 rounded-none overflow-hidden">
                      <div className="bg-indigo-700 h-full transition-all duration-300" style={{ width: `${onboardBase}%` }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#0A2540]">
                      <span>Coordinator Roles:</span>
                      <span className="font-bold">{onboardRoles}% [✓]</span>
                    </div>
                    <div className="w-full bg-[#FAF9F6] border border-[#EAE3D5] h-1.5 rounded-none overflow-hidden">
                      <div className="bg-indigo-700 h-full transition-all duration-300" style={{ width: `${onboardRoles}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Onboarding Specialist</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  We place a dedicated specialist directly at your dispatch node to customize coordination parameters and upload baseline data grids.
                </p>
              </div>
            </div>

            {/* Card 2: Dedicated Consultant */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <div className="w-full max-w-[200px] bg-white border border-[#EAE3D5] p-3 shadow-xs font-mono text-[11px] text-[#5A6E85] space-y-2 rounded-none">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1">
                    <span className="font-bold text-[#0A2540]">CONSOLE SETUP</span>
                    <span className={`text-[10px] px-1 border transition-all duration-500 ${
                      dedicatedStep === 2
                        ? 'text-indigo-700 bg-indigo-50 border-indigo-200'
                        : 'text-gray-500 bg-gray-50 border-gray-200'
                    }`}>{dedicatedStep === 2 ? 'ACTIVE' : 'CONFIGURING'}</span>
                  </div>
                  <div className="space-y-1">
                    <div className={`p-1 border text-[10px] font-bold rounded-none flex items-center gap-1 transition-all duration-500 ${
                      dedicatedStep >= 1 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : 'bg-[#FAF9F6] border-[#EAE3D5] text-[#5A6E85]'
                    }`}>
                      <span>{dedicatedStep >= 1 ? '✓' : '•'}</span> <span>SLA Countdown Rules Active</span>
                    </div>
                    <div className={`p-1 border text-[10px] font-bold rounded-none flex items-center gap-1 transition-all duration-500 ${
                      dedicatedStep >= 2 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : 'bg-[#FAF9F6] border-[#EAE3D5] text-[#5A6E85]'
                    }`}>
                      <span>{dedicatedStep >= 2 ? '✓' : '•'}</span> <span>Training Modules Assigned</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Dedicated Consultant</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  Receive constant setup guides, coordinator console setup parameters, and custom user training programs to guarantee frictionless adaptation.
                </p>
              </div>
            </div>

            {/* Card 3: Continuous System Evolution */}
            <div className="flex flex-col bg-white border border-[#EAE3D5] p-4 rounded-none">
              {/* Visual Box */}
              <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-none p-6 flex items-center justify-center relative overflow-hidden h-[210px] w-full">
                <div className="w-full max-w-[200px] bg-white border border-[#EAE3D5] p-3 shadow-xs font-mono text-[11px] text-[#5A6E85] space-y-2 rounded-none">
                  <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-1">
                    <span className="font-bold text-[#0A2540]">API SCALING</span>
                    <span className="text-[10px] text-[#0A2540] bg-indigo-50 px-1 border border-indigo-250 animate-pulse">UNLOCKED</span>
                  </div>
                  <div className="h-10 flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-full h-full text-indigo-700/10" viewBox="0 0 100 40">
                      <path 
                        d={`M0 35 Q 20 ${30 + (apiDelay * 4)} 40 10 T 80 ${5 + (apiDelay * 2)} T 100 0`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth={1} 
                        className="transition-all duration-300"
                      />
                    </svg>
                    <div className="relative text-[10px] text-center font-bold text-[#0A2540] transition-all duration-300">
                      API Load: OK • {apiDelay}ms Delay
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Below */}
              <div className="pt-4 px-1">
                <h3 className="text-sm font-extrabold text-[#0A2540] mb-1.5">Continuous System Evolution</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-normal">
                  As operations expand, our engineering support adapts custom API endpoints, databases scaling, and newly unlocked modules on demand.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FINAL CTA SECTION
          Headline: “Bring clarity to field operations.”
          CTA: Talk to Our Team, View Platform (Minimal and calm). */}
      <section className="py-24 bg-[#F4EFE6] px-6 text-[#0A2540] text-center relative border-b border-[#EAE3D5]">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A6E85] block mb-2">SYSTEM DEPLOYMENT READY</span>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0A2540] mb-6 leading-none max-w-2xl mx-auto">
            Bring clarity to field operations.
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-md mx-auto mb-10 font-normal">
            Take unalterable control of dispatch coordinates, compliance timelines, and report flows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={() => onNavigate('company')}
              className="w-full px-6 py-3.5 bg-[#0A2540] text-white text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#06182c] transition-colors flex items-center justify-center gap-2 border-none cursor-pointer"
            >
              Talk to Our Team <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('platform')}
              className="w-full px-6 py-3.5 bg-white text-[#0A2540] border border-[#EAE3D5] text-[11px] font-bold uppercase tracking-wider rounded-none hover:bg-[#FAF8F3] transition-colors cursor-pointer"
            >
              View Platform
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

