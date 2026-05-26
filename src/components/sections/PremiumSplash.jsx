import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Compass, Shield, Users } from 'lucide-react';

// Import images from assets
import image1 from '../../assets/image1.png';
import image2 from '../../assets/imag2.png';

export function PremiumSplash({ onNavigate }) {
  const sectionRef = useRef(null);
  const topImageRef = useRef(null);
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);
  
  const [coords, setCoords] = useState({ lat: '29.3759', lon: '47.9774' });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse coordinates tracking with GSAP
  const maskParams = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, radius: 0 });

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // GSAP Smooth Entrance Timeline Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hide all initially for smooth fade-in
      gsap.set('.glow-bg', { opacity: 0, scale: 0.8 });
      gsap.set('.hero-grid', { opacity: 0 });
      gsap.set('.text-element', { opacity: 0, y: 30 });
      gsap.set('.image-frame', { opacity: 0, scale: 0.98 });

      // Step 1: Fade-in background grids and ambient glows
      tl.to('.hero-grid', {
        opacity: 0.15,
        duration: 1.2,
        ease: 'power2.out'
      })
      .to('.glow-bg', {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.8')
      
      // Step 2: Fade-in widescreen image portal frame
      .to('.image-frame', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out'
      }, '-=1.2')

      // Step 3: Sequential stagger reveal for text elements
      .to('.text-element', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.8');
    });

    return () => ctx.revert();
  }, []);

  // GSAP quickTo and Ticker for buttery smooth radial masking
  useEffect(() => {
    const topImage = topImageRef.current;
    if (!topImage) return;

    // quickTo interpolations for x and y coordinates
    const xTo = gsap.quickTo(maskParams.current, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(maskParams.current, 'y', { duration: 0.35, ease: 'power3.out' });

    // Set starting center inside container bounding rectangle
    const setInitialCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        maskParams.current.x = rect.width / 2;
        maskParams.current.y = rect.height / 2;
      }
    };
    setInitialCenter();
    window.addEventListener('resize', setInitialCenter);

    const renderMask = () => {
      const { x, y, radius } = maskParams.current;

      // Radial feathered transparent mask circle to reveal bottom image2
      const maskStr = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.85) 80%, black 100%)`;
      
      topImage.style.maskImage = maskStr;
      topImage.style.WebkitMaskImage = maskStr;
    };

    // Render loop on GSAP ticker
    gsap.ticker.add(renderMask);

    const handlePointerMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      // Track relative pointer positioning
      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      xTo(relX);
      yTo(relY);

      // Clamp percentage to grid and calculate dynamic Lat/Lon telemetry
      const pctX = Math.max(0, Math.min(1, relX / rect.width));
      const pctY = Math.max(0, Math.min(1, relY / rect.height));
      const baseLat = 29.3759;
      const baseLon = 47.9774;
      
      const dynLat = (baseLat + (0.5 - pctY) * 0.08).toFixed(4);
      const dynLon = (baseLon + (pctX - 0.5) * 0.08).toFixed(4);

      setCoords({ lat: dynLat, lon: dynLon });
    };

    // Listen globally on window for fluid pointer movement
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      gsap.ticker.remove(renderMask);
      window.removeEventListener('resize', setInitialCenter);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  // Smooth hover expansions and leave dissolves
  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(maskParams.current, {
      radius: isMobile ? 80 : 160,
      duration: 1.0,
      ease: 'power3.out'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(maskParams.current, {
      radius: 0,
      duration: 1.4,
      ease: 'power3.inOut' // Cinematic slow dissolve back to management layer
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#030712] overflow-hidden text-white flex flex-col justify-between py-24 md:py-32 px-6 md:px-12 z-10"
    >
      {/* 1. LAYERED FUTURISTIC GLOW BACKDROPS (Slow pulsing breathing ambient) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Soft rotating cyan glow */}
        <div className="glow-bg absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-radial from-cyan-500/10 via-cyan-950/2 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Deep operational indigo glow */}
        <div className="glow-bg absolute bottom-1/3 left-1/4 w-[50vw] h-[50vw] bg-radial from-indigo-500/8 via-indigo-950/2 to-transparent rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      {/* 2. ENGINEERING PRECISION GRID PATH */}
      <div 
        className="hero-grid absolute inset-0 z-1 pointer-events-none opacity-15 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Grid crosshair visual details */}
      <div className="absolute top-12 left-12 w-2 h-2 border-t border-l border-cyan-500/30 pointer-events-none" />
      <div className="absolute top-12 right-12 w-2 h-2 border-t border-r border-cyan-500/30 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-2 h-2 border-b border-l border-cyan-500/30 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-2 h-2 border-b border-r border-cyan-500/30 pointer-events-none" />

      {/* Blank spacing to balance vertical flex layout */}
      <div className="h-4 w-full select-none" />

      {/* 3. CENTER VIEWPORT: CINEMATIC aspect aspect-widescreen image reveal portal */}
      <div className="w-full flex items-center justify-center my-auto z-10 px-0 md:px-6">
        <div 
          data-aos="fade-up"
          className="image-frame relative p-1.5 border border-white/10 rounded-2xl bg-gray-950/30 backdrop-blur-md max-w-5xl w-full flex items-center justify-center pointer-events-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Futuristic HUD brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg pointer-events-none" />

          {/* Interactive instruction capsule */}
          <div className="absolute -top-3.5 left-4 font-mono text-[7px] md:text-[8px] tracking-widest text-cyan-400 bg-[#030712] px-2 py-0.5 border border-cyan-500/30 rounded flex items-center gap-1.5 z-30 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>PORTAL: EXECUTIVE VISIBILITY STREAM</span>
          </div>

          <div className="absolute -bottom-3.5 right-4 font-mono text-[7px] md:text-[8px] tracking-wider text-indigo-400/80 bg-[#030712] px-2 py-0.5 border border-indigo-500/20 rounded z-30 select-none">
            CINEMASCOPE 2.39:1 • {isHovered ? 'HOVER SCANNING' : 'SYSTEM LOCK'}
          </div>

          {/* Inner Image reveal bounding box */}
          <div 
            ref={containerRef}
            className="w-full aspect-[2.1/1] md:aspect-[2.39/1] rounded-xl overflow-hidden bg-slate-950 relative cursor-crosshair select-none"
          >
            {/* BOTTOM LAYER: Image 2 - Field operations execution (revealed) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none">
              <img 
                src={image2} 
                alt="Real-time Field Operations"
                className="w-full h-full object-cover lg:object-contain filter brightness-[0.8] contrast-[1.05]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/20 pointer-events-none" />
            </div>

            {/* TOP LAYER: Image 1 - Executive / Management Dashboard (default view) */}
            <div 
              ref={topImageRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-20 select-none will-change-transform"
              style={{
                willChange: 'mask-image, -webkit-mask-image'
              }}
            >
              <img 
                src={image1} 
                alt="Management Dashboard Visibility"
                className="w-full h-full object-cover lg:object-contain filter brightness-[0.7] grayscale-[10%] contrast-[1.05]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-[#030712]/20 to-gray-950/15 pointer-events-none" />
            </div>

            {/* 4. REAL-TIME HUD CURSOR RINGS AND READINGS */}
            <div 
              className="absolute pointer-events-none z-30 flex flex-col gap-0.5 font-mono text-[8px] md:text-[9px] tracking-wider text-cyan-400 shadow-xl pointer-events-none"
              style={{
                left: `${maskParams.current.x + 20}px`,
                top: `${maskParams.current.y - 30}px`,
                opacity: maskParams.current.radius > 5 ? 0.9 : 0,
                transition: 'opacity 0.3s ease',
                willChange: 'left, top'
              }}
            >
              <div className="flex items-center gap-1 text-[#5A6E85]">
                <Compass className="w-2.5 h-2.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>RESOLVING UPLINK</span>
              </div>
              <div className="bg-gray-950/90 border border-cyan-500/20 px-2.5 py-1.5 rounded backdrop-blur-md flex flex-col gap-0.5">
                <div>LAT: <span className="text-white font-bold">{coords.lat}° N</span></div>
                <div>LON: <span className="text-white font-bold">{coords.lon}° E</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ELEGANT BOTTOM-LEFT TYPOGRAPHY & HUD SYSTEMS */}
      <div 
        ref={textGroupRef}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 z-10 pointer-events-none"
      >
        {/* Left Aligned Content */}
        <div className="flex flex-col items-start text-left max-w-2xl pointer-events-auto">
          {/* Eyebrow badge style text */}
          <span 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-element inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] md:text-[10px] tracking-widest text-cyan-400 uppercase mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span>FIELD OPERATIONS CONSOLE // ACT_V4.2</span>
          </span>

          {/* Core Widescreen Header */}
          <h2 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-element text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-4 md:mb-6 uppercase"
          >
            INTELLIGENT FIELD<br />OPERATIONS CONSOLE.
          </h2>

          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-element text-xs md:text-sm text-gray-400 font-normal leading-relaxed mb-6 md:mb-8 max-w-lg"
          >
            Systematically decrypt, scale, and trace real-time execution coordinates. Connect executive resource boards with live technician dispatch routes dynamically.
          </p>

          {/* Action CTAs */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-element flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('company')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold font-mono text-[10px] tracking-widest rounded hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border-none"
            >
              TALK TO OUR TEAM
            </button>
            <button
              onClick={() => onNavigate('platform')}
              className="px-6 py-3 bg-transparent text-white border border-white/10 hover:border-white/30 font-bold font-mono text-[10px] tracking-widest rounded hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 group"
            >
              <span>EXPLORE PLATFORM</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right HUD Metrics Widget */}
        <div 
          data-aos="fade-up"
          data-aos-delay="350"
          className="text-element hidden lg:flex flex-col gap-3 font-mono text-[9px] tracking-widest text-[#5A6E85] text-right bg-gray-950/40 border border-white/5 p-4 rounded-lg backdrop-blur-sm pointer-events-auto"
        >
          <div className="flex items-center gap-2 justify-end text-cyan-400">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>SLA COMPLIANCE: SECURE</span>
          </div>
          <div className="flex items-center gap-2 justify-end text-indigo-400">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>ONLINE DISPATCHERS: 128/128</span>
          </div>
          <div className="text-gray-500 border-t border-white/5 pt-2 mt-1">
            NETWORK_STATUS: LINK_ESTABLISHED
          </div>
        </div>

      </div>
    </section>
  );
}
