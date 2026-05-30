import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Compass, Shield, Users, Wifi } from 'lucide-react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

// Import images from assets directory
import image1 from '../../assets/image1.png';
import image2 from '../../assets/imag2.png';

export function SentrahSplashScreen({ onComplete }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const topImageRef = useRef(null);
  const bottomImageRef = useRef(null);
  const overlayRef = useRef(null);
  const textGroupRef = useRef(null);

  const [coords, setCoords] = useState({ lat: '29.3759', lon: '47.9774' });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [systemStatus, setSystemStatus] = useState('ESTABLISHING SECURE PROTOCOLS...');
  const [interactionActive, setInteractionActive] = useState(false);

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

  // Dynamic Floating Holographic Particle System (GPU-optimized)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle factory
    const particleCount = isMobile ? 25 : 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.4,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.1, // Drifting upwards
        opacity: Math.random() * 0.4 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        // Drift movement
        p.y += p.speedY;
        p.x += p.speedX;

        // Gentle opacity breathing
        p.opacity += p.pulseSpeed * p.pulseDir;
        if (p.opacity > 0.65) p.pulseDir = -1;
        if (p.opacity < 0.1) p.pulseDir = 1;

        // Wrap around bounds
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Cyan and Indigo gradient particle hues
        const isCyan = p.radius > 1;
        ctx.fillStyle = isCyan
          ? `rgba(6, 182, 212, ${p.opacity})` // Cyan glow
          : `rgba(29, 78, 216, ${p.opacity})`; // Rich blue brand color

        ctx.fill();
      });
      animationId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

  // Main GSAP Cinematic Intro Animation Sequence
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setInteractionActive(true);
        }
      });

      // Hide all initially
      gsap.set(['.glow-bg', '.hero-grid', '.text-element', '.image-frame'], { opacity: 0 });
      gsap.set('.text-element', { y: 25 });
      gsap.set('.image-frame', { scale: 0.98 });

      // Step 1: Fade-in background grids and ambient glows
      tl.to('.hero-grid', {
        opacity: 0.15,
        duration: 1.0,
        ease: 'power2.out'
      })
        .to('.glow-bg', {
          opacity: 1,
          duration: 1.4,
          stagger: 0.2,
          ease: 'power3.out'
        }, '-=0.6')


        // Step 2: Fade-in widescreen cinemascope portal frame
        .to('.image-frame', {
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: 'power4.out',
          onStart: () => {
            setSystemStatus('LOADING PORTAL METRICS...');
          }
        }, '-=1.0')

        // Step 6: Reveal interaction activates (initialize status and keep radius at 0)
        .to(maskParams.current, {
          radius: 0,
          duration: 0.1,
          onStart: () => {
            setSystemStatus('ESTABLISHED SECURE PROTOCOLS...');
          }
        }, '-=0.4')

        // Step 4: Stagger reveal for bottom text blocks
        .to('.text-element', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out'
        }, '-=0.6');
    });

    return () => ctx.revert();
  }, []);

  // GSAP quickTo and Ticker for buttery smooth radial masking
  useEffect(() => {
    const topImage = topImageRef.current;
    if (!topImage) return;

    // quickTo interpolation for x and y mask offsets with customized fluid dragging
    const xTo = gsap.quickTo(maskParams.current, 'x', { duration: 0.45, ease: 'sine.out' });
    const yTo = gsap.quickTo(maskParams.current, 'y', { duration: 0.45, ease: 'sine.out' });

    const lastParams = { x: -1, y: -1, radius: -1 };

    // Set starting center inside container bounding rectangle
    const setInitialCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const nextX = rect.width / 2;
        const nextY = rect.height / 2;
        if (maskParams.current.x !== nextX || maskParams.current.y !== nextY) {
          maskParams.current.x = nextX;
          maskParams.current.y = nextY;
        }
      }
    };
    setInitialCenter();
    window.addEventListener('resize', setInitialCenter);

    const renderMask = () => {
      const { x, y, radius } = maskParams.current;

      // Skip frame calculations if mouse and radius parameters are static
      if (x === lastParams.x && y === lastParams.y && radius === lastParams.radius) {
        return;
      }

      lastParams.x = x;
      lastParams.y = y;
      lastParams.radius = radius;

      const bottomImage = bottomImageRef.current;

      if (radius <= 0) {
        topImage.style.maskImage = 'none';
        topImage.style.WebkitMaskImage = 'none';
        if (bottomImage) {
          bottomImage.style.display = 'none';
        }
        return;
      }

      if (bottomImage) {
        bottomImage.style.display = 'block';
        const maskStrBottom = `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 80%, transparent 100%)`;
        bottomImage.style.maskImage = maskStrBottom;
        bottomImage.style.WebkitMaskImage = maskStrBottom;
      }

      // Radial feathered transparent mask circle to reveal bottom image2
      const maskStrTop = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.85) 80%, black 100%)`;
      topImage.style.maskImage = maskStrTop;
      topImage.style.WebkitMaskImage = maskStrTop;
    };

    // Render loop on GSAP ticker
    gsap.ticker.add(renderMask);

    const handlePointerMove = (e) => {
      if (!interactionActive || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      xTo(relX);
      yTo(relY);

      // Proactively ensure the flashlight opens if the mouse is moving inside the screen
      if (maskParams.current.radius < 5) {
        setIsHovered(true);
        gsap.to(maskParams.current, {
          radius: window.innerWidth < 1024 ? 200 : 400,
          duration: 1.2,
          ease: 'power2.out'
        });
      }
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
  }, [interactionActive]);

  // Expand radius dynamically when hovering over screen, no dissolve to 0 needed since it's fullscreen
  const handleMouseEnter = () => {
    if (!interactionActive) return;
    setIsHovered(true);
    gsap.to(maskParams.current, {
      radius: window.innerWidth < 1024 ? 200 : 400,
      duration: 1.2,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    if (!interactionActive) return;
    setIsHovered(false);
    
    // Smoothly and fluidly glide back to the center of the viewport and close flashlight
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      gsap.to(maskParams.current, {
        x: rect.width / 2,
        y: rect.height / 2,
        radius: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    }
  };

  // Exit splash screen transition
  const handleExitSplash = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      scale: 1.03,
      duration: 1.2,
      ease: 'power3.inOut',
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  return (
    <div
      ref={overlayRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed inset-0 z-[99999] bg-[#FAF9F6] w-screen h-screen overflow-hidden select-none select-none-all font-sans antialiased text-slate-900"
    >
      {/* 1. Cinematic Ambient Backlighting Layers */}
      <div className="absolute inset-0 bg-[#FAF9F6] z-0 pointer-events-none" />

      {/* Rotating radial ambient glow centered initially */}
      <div className="glow-bg absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="glow-bg absolute bottom-1/3 left-1/4 w-[50vw] h-[50vw] bg-radial from-indigo-500/8 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none select-none animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      {/* 2. High-Tech Grid & Scanline Architecture */}
      <div
        className="hero-grid absolute inset-0 z-1 pointer-events-none opacity-15 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Vertical Scanning Line overlay sweep */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        <div
          className="w-full h-1/3 opacity-[0.05] bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
          style={{
            animation: 'scanSweep 12s linear infinite',
            transform: 'translateY(-100%)'
          }}
        />
      </div>

      <style>{`
        @keyframes scanSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>

      {/* Dynamic drifting canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-3 pointer-events-none opacity-70"
      />

      {/* TOP BAR BRAND LAYER */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100px] flex justify-center items-center z-50 bg-transparent pointer-events-auto border-none"
      >
        <div className="flex flex-col items-center">
          <img 
            src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779793203/Group_52_qjffst.svg" 
            alt="Sentrah Logo" 
            className="w-64 h-16 object-contain filter drop-shadow-[0_0_12px_rgba(29,78,216,0.3)] animate-pulse"
            style={{ animationDuration: '6s' }}
          />
        </div>
      </div>

      {/* FULLSCREEN MASK IMAGE PORTAL BELOW THE LOGO WITH AN 8PX GAP */}
      <div 
        ref={containerRef}
        className="absolute inset-x-0 bottom-0 z-10 cursor-crosshair select-none overflow-hidden animate-pulse-slow bg-transparent border-none"
        style={{ top: '108px' }}
      >
        {/* BOTTOM LAYER: Image 2 - Field operations execution (revealed) */}
        <div 
          ref={bottomImageRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none overflow-hidden will-change-transform"
          style={{
            willChange: 'mask-image, -webkit-mask-image'
          }}
        >
          <img
            src={image2}
            alt="Real-time Field Operations"
            className="w-full h-full object-cover object-top filter brightness-[0.75] contrast-[1.05]"
            draggable={false}
          />
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
            className="w-full h-full object-cover object-top filter brightness-[0.75] grayscale-[10%] contrast-[1.05]"
            draggable={false}
          />
        </div>
      </div>

      {/* BOTTOM ENTRY BUTTON */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col justify-center items-center z-50 py-4 select-none pointer-events-none">
        <div className="pointer-events-auto w-full md:w-auto text-center">
          <HoverBorderGradient
            containerClassName="rounded-lg w-full md:w-auto mx-auto shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            as="button"
            onClick={handleExitSplash}
            className="w-full md:w-auto px-8 py-3.5 bg-slate-950 text-white font-bold font-mono text-xs tracking-widest flex items-center justify-center gap-2 group cursor-pointer rounded-lg"
          >
            <span>ACCESS INTEL CONSOLE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
