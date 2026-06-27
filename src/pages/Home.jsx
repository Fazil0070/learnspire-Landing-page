import { useEffect, useCallback, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  Activity,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Layers3,
  Lock,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

import dashboardImg from '../assets/dashboard.png';
import InsightsSection from './Insight';
import Footer from '../components/Footer';
import Benefits from './Benefits';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 hero-glow" />
    <div className="absolute inset-0 hero-premium-mesh" />

    <div className="hero-aurora hero-aurora-1" />
    <div className="hero-aurora hero-aurora-2" />
    <div className="hero-aurora hero-aurora-3" />

    <div className="absolute inset-0 hero-dot-grid opacity-40" />
    <div className="absolute inset-0 hero-circuit-grid" />

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,900px)] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
  </div>
);

const AI_CAPABILITIES = [
  { label: 'AI Proctoring', icon: '◈' },
  { label: 'Smart Analytics', icon: '◎' },
  { label: 'Adaptive Paths', icon: '◇' },
  { label: 'White-Label', icon: '✦' },
];

const HERO_CAPABILITIES = [
  { label: 'AI Proctoring', Icon: ShieldCheck },
  { label: 'Smart Analytics', Icon: BarChart3 },
  { label: 'Adaptive Paths', Icon: BrainCircuit },
  { label: 'White-Label', Icon: Sparkles },
];

const HERO_METRICS = [
  { value: '98%', label: 'exam integrity' },
  { value: '4.8x', label: 'faster reviews' },
  { value: '24/7', label: 'AI monitoring' },
];

const HeroPreview = () => (
  <div className="hero-browser-wrap relative w-full max-w-[min(100%,38rem)] lg:max-w-none mx-auto lg:mx-0">
    <div className="hero-orbit hidden lg:block" aria-hidden="true">
      <span className="hero-orbit-ring" />
      <span className="hero-orbit-ring hero-orbit-ring-2" />
    </div>

    <div className="hero-float-card hero-float-card-top hidden sm:flex">
      <div className="hero-float-icon text-purple-400">◈</div>
      <div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">AI Insight</p>
        <p className="text-xs font-semibold text-white">+12% learner engagement</p>
      </div>
    </div>

    <div className="hero-float-card hero-float-card-bottom hidden sm:flex">
      <div className="hero-float-icon text-pink-400">✓</div>
      <div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Auto-graded</p>
        <p className="text-xs font-semibold text-white">1,240 assessments today</p>
      </div>
    </div>

    <div className="hero-browser-frame">
      <div className="hero-browser-glow" aria-hidden="true" />

      <div className="hero-browser relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-zinc-900/95">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 min-w-0 flex justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 w-full max-w-[240px] sm:max-w-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-black/50 border border-white/10">
              <Lock className="w-3 h-3 text-emerald-500/80 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-zinc-300 truncate font-medium">learnspire.ai</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] sm:text-[10px] font-medium text-emerald-400/90 hidden xs:inline">AI Live</span>
          </div>
        </div>

        <div className="relative bg-white overflow-hidden hero-dashboard-screen">
          <img
            src={dashboardImg}
            alt="Learnspire AI institution dashboard"
            className="w-full h-auto block object-cover object-top"
            loading="eager"
            draggable={false}
          />
          <div className="hero-scan-line" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  </div>
);

const PremiumHeroPreview = () => (
  <div className="hero-browser-wrap relative w-full max-w-[min(100%,38rem)] lg:max-w-none mx-auto lg:mx-0">
    <div className="hero-orbit hidden lg:block" aria-hidden="true">
      <span className="hero-orbit-ring" />
      <span className="hero-orbit-ring hero-orbit-ring-2" />
    </div>

    <div className="hero-float-card hero-float-card-top hidden sm:flex">
      <div className="hero-float-icon text-purple-300">
        <Activity className="w-4 h-4" />
      </div>
      <div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">AI Insight</p>
        <p className="text-xs font-semibold text-white">+12% learner engagement</p>
      </div>
    </div>

    <div className="hero-float-card hero-float-card-bottom hidden sm:flex">
      <div className="hero-float-icon text-emerald-300">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Auto-graded</p>
        <p className="text-xs font-semibold text-white">1,240 assessments today</p>
      </div>
    </div>

    <div className="hero-browser-frame">
      <div className="hero-browser-glow" aria-hidden="true" />

      <div className="hero-browser relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-zinc-900/95">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 min-w-0 flex justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 w-full max-w-[240px] sm:max-w-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-black/50 border border-white/10">
              <Lock className="w-3 h-3 text-emerald-500/80 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-zinc-300 truncate font-medium">learnspire.ai/dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hero-status-dot" />
            <span className="text-[9px] sm:text-[10px] font-medium text-emerald-400/90 hidden xs:inline">AI Live</span>
          </div>
        </div>

        <div className="relative bg-white overflow-hidden hero-dashboard-screen">
          <div className="hero-dashboard-hud top-4 left-4 hidden md:block">
            <div className="flex items-center gap-2">
              <span className="hero-pulse-dot" />
              <span>Live campus intelligence</span>
            </div>
          </div>
          <div className="hero-dashboard-hud bottom-4 right-4 hidden md:block">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>AI actions synced</span>
            </div>
          </div>
          <img
            src={dashboardImg}
            alt="Learnspire AI institution dashboard"
            className="w-full h-auto block object-cover object-top"
            loading="eager"
            draggable={false}
          />
          <div className="hero-scan-line" aria-hidden="true" />
          <div className="hero-screen-sheen" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>

    <div className="hero-metric-rail hidden lg:grid" aria-label="Platform metrics">
      {HERO_METRICS.map((metric) => (
        <div key={metric.label} className="hero-metric-pill">
          <span>{metric.value}</span>
          <small>{metric.label}</small>
        </div>
      ))}
    </div>
  </div>
);

// Scroll Progress Indicator
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${scrolled / 100})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-[9998]">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};



// Tech Stack Marquee Component
const TechStackMarquee = () => {
  const techStack = {
    row1: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite'],
    row2: ['Tailwind CSS', 'Shadcn', 'PostgreSQL', 'SQL', 'Docker'],
    row3: ['Spring Boot', 'Java', 'GitHub', 'Coolify', 'Hetzner']
  };

  useEffect(() => {
    // Add smooth animation for marquee items on mount
    gsap.fromTo('.tech-marquee-row',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const MarqueeRow = ({ items, direction = 'left', speed = 30 }) => {
    // Duplicate items for seamless loop 
    // Increased duplication to ensure no gaps on wider screens or fast scrolls
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-2 md:py-4">
        <div
          className="flex gap-4 md:gap-8 whitespace-nowrap will-change-transform transform-gpu"
          style={{
            animation: `marquee-${direction} ${speed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group cursor-default"
            >
              <span className="text-xs md:text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-black py-20 sm:py-24 overflow-hidden relative border-t border-white/[0.04]">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14">
          <span className="section-label mb-4">Tech stack</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 mt-4">
            Built on{' '}
            <span className="text-gradient-brand">modern infrastructure</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Reliable, scalable tools powering every part of the platform
          </p>
        </div>

        <div className="space-y-4 tech-marquee-container">
          <div className="tech-marquee-row">
            <MarqueeRow items={techStack.row1} direction="left" speed={40} />
          </div>
          <div className="tech-marquee-row">
            <MarqueeRow items={techStack.row2} direction="right" speed={35} />
          </div>
          <div className="tech-marquee-row">
            <MarqueeRow items={techStack.row3} direction="left" speed={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Process Flowchart Component
const ProcessFlowchart = () => {
  const steps = [
    {
      id: 1,
      title: "Onboard",
      icon: "rocket",
      description: "PMS: Profile & Performance Setup"
    },
    {
      id: 2,
      title: "Learn",
      icon: "book",
      description: "LMS: AI-Driven Learning Paths"
    },
    {
      id: 3,
      title: "Practice",
      icon: "code",
      description: "Coding Challenges & Labs"
    },
    {
      id: 4,
      title: "Assessment",
      icon: "clipboard",
      description: "AMS: Tests & LSRW Evaluation"
    },
    {
      id: 5,
      title: "Analyze",
      icon: "chart",
      description: "PMS: Performance Insights & Growth"
    }
  ];

  return (
    <section className="process-flowchart py-16 sm:py-24 px-5 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-label mb-4">How it works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 mt-4">
            The <span className="text-gradient-brand">Learnspire AI</span> journey
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            From onboarding to mastery — five integrated steps in one ecosystem.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-10">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-white/5 backdrop-blur-md border-x border-white/10 md:-translate-x-1/2 z-0 overflow-hidden rounded-full">
            {/* Energy Beam */}
            <div
              className="absolute inset-0 w-full h-full opacity-100"
              style={{
                background: 'linear-gradient(180deg, transparent, #a855f7, #ec4899, #a855f7, transparent)',
                backgroundSize: '100% 50%',
                animation: 'energy-beam-vertical 3s linear infinite'
              }}
            />
          </div>

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`group relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Step Node (Center) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 flex items-center justify-center z-10 group-hover:border-purple-400 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                    {/* Icons based on type */}
                    {step.icon === 'rocket' && (
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {step.icon === 'book' && (
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {step.icon === 'code' && (
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {step.icon === 'clipboard' && (
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    )}
                    {step.icon === 'chart' && (
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/90 backdrop-blur-md border-2 border-purple-500/50 flex items-center justify-center text-xs md:text-base font-bold text-white z-20 shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-110 group-hover:border-purple-400 group-hover:bg-purple-900/50 transition-all">
                      {step.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-24 md:pl-0 md:w-[45%] flex ${isEven ? 'md:justify-end text-left md:text-right' : 'md:justify-start text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 w-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-purple-500/50 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] shadow-xl relative overflow-hidden">
                      <div className={`absolute top-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none ${isEven ? 'right-0' : 'left-0'}`} />
                      <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3 group-hover:text-purple-300 transition-colors">{step.title}</h3>
                      <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


// Highlights Section Component with Spotlight Effect
const HighlightsSection = () => {
  const highlights = [
    {
      title: "White-Labeling",
      description: "Launch under your own brand — custom logos, colors, and domain for a fully white-labeled experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Open Source Core",
      description: "Built on transparent, community-driven open source technologies for ultimate flexibility.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Fully Secured",
      description: "Enterprise-grade security protocols ensuring your data remains protected at all times.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero Downtime",
      description: "Reliable, redundant infrastructure guarantees 99.99% uptime for your critical operations.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="highlights-section py-20 sm:py-28 px-5 sm:px-6 relative overflow-hidden bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-label mb-4">Why Learnspire AI</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 mt-4">
            Built for institutions that{' '}
            <span className="text-gradient-brand">demand more</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Enterprise reliability with the flexibility of open-source technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-8 overflow-hidden transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/[0.12]"
            >
              <div className="relative z-10">
                <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${item.gradient} mb-5 ring-1 ring-white/[0.08]`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Statistics Counter
const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { number: 10000, suffix: '+', label: 'Active Students', icon: '👥' },
    { number: 3, suffix: '', label: 'Integrated Platforms', icon: '🏛️' },
    { number: 95, suffix: '%', label: 'Success Rate', icon: '🎯' },
    { number: 50, suffix: '+', label: 'Expert Instructors', icon: '👨‍🏫' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        gsap.to({}, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function () {
            const progress = this.progress();
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(stat.number * progress);
              return newCounts;
            });
          }
        });
      });
    }
  }, [isVisible]);

  return (
    <section className="stats-section w-full bg-black py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Floating Action Button
const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let visible = false;
    const update = () => {
      const shouldShow = window.scrollY > 800;
      if (shouldShow !== visible) {
        visible = shouldShow;
        setIsVisible(shouldShow);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9997] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
        boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
      }}
      aria-label="Scroll to top"
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const FeatureIcon = ({ children }) => (
  <div
    className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 flex-shrink-0"
    style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}
  >
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 h-full transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12]">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 className="text-base font-semibold mb-2 text-white tracking-tight">
      {title}
    </h3>
    <p className="text-zinc-500 leading-relaxed text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Interactive Learning",
      description: "Engage learners with dynamic, adaptive content that evolves with their progress.",
      gradient: 'linear-gradient(135deg,#7c3aed55,#a855f755)'
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Smart Attendance",
      description: "Effortlessly monitor participation and progress with AI-powered tracking systems.",
      gradient: 'linear-gradient(135deg,#2563eb55,#7c3aed55)'
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Coding Challenges",
      description: "Sharpen skills with real-world programming tasks and instant AI-driven feedback.",
      gradient: 'linear-gradient(135deg,#0891b255,#2563eb55)'
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Timely Announcements",
      description: "Keep everyone informed with automated, personalized updates and reminders.",
      gradient: 'linear-gradient(135deg,#d9770655,#ec489955)'
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AI Proctoring",
      description: "Ensure exam integrity with advanced AI-powered monitoring and analysis.",
      gradient: 'linear-gradient(135deg,#ec489955,#7c3aed55)'
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "White-Labeling",
      description: "Deploy Learnspire under your institution's brand with custom logos, themes, and your own domain.",
      gradient: 'linear-gradient(135deg,#05966955,#0891b255)'
    },
  ];

  return (
    <section className="w-full bg-black py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.04]" id="features">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <span className="section-label mb-4">Platform features</span>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl mb-4 text-white mt-4">
            Everything your campus{' '}
            <span className="text-gradient-brand">needs</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-lg mx-auto leading-relaxed">
            From learning paths to assessments — one integrated platform for modern education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="reveal-up feature-card" data-delay={index * 0.2}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// CTA Banner
const DemoContactSection = () => (
  <div className="w-full bg-black px-5 sm:px-6 py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.04]">
    <div className="relative z-10 max-w-3xl mx-auto">
      <div className="card-surface px-6 sm:px-12 py-12 sm:py-16 text-center">
        <span className="section-label mb-4">Get started</span>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight mt-4">
          See <span className="text-gradient-brand">Learnspire AI</span> in action
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          Schedule a personalized walkthrough and discover how our platform fits your institution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/contact" className="btn-primary w-full sm:w-auto px-7 py-3.5 text-sm">
            Book a demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="/contact" className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-sm">
            Contact sales
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {


  const setupAnimations = useCallback(() => {
    ScrollTrigger.config({ limitCallbacks: true });

    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-visual',
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.15, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-float-card',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.5, stagger: 0.12, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-capability-pill, .hero-module-card, .hero-metric-pill',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55, delay: 0.35, stagger: 0.055, ease: 'power2.out' }
    );

    gsap.to('.hero-browser-frame', {
      y: -10,
      duration: 4.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.hero-float-card-top', {
      y: -8,
      x: 4,
      duration: 3.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.hero-float-card-bottom', {
      y: 8,
      x: -4,
      duration: 4.2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.utils.toArray('.feature-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  useEffect(() => {
    setupAnimations();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setupAnimations]);

  return (
    <>


      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Main Content */}
      <main>
        <section className="hero-section relative overflow-hidden bg-black min-h-[calc(100vh-5rem)] lg:min-h-screen flex flex-col">
          <HeroBackground />

          <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 w-full">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-12 lg:gap-10 xl:gap-14 items-center h-full">
              <div className="hero-content flex flex-col gap-5 sm:gap-6 text-center lg:text-left order-1">
                <div className="hero-eyebrow inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md text-white hero-ai-badge">
                    <Cpu className="w-3 h-3" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">Premium AI campus operating system</span>
                </div>

                <h1
                  className="hero-title font-display font-extrabold tracking-tight leading-[1.05] px-1 sm:px-0"
                  style={{ fontSize: 'clamp(2rem, 5.5vw + 0.25rem, 3.75rem)' }}
                >
                  <span className="text-white">Where campuses</span>
                  <br />
                  <span className="text-shimmer">meet AI.</span>
                </h1>

                <p className="hero-copy leading-relaxed max-w-xl mx-auto lg:mx-0 text-[15px] sm:text-base lg:text-lg px-2 sm:px-0">
                  One intelligent platform for LMS, AMS &amp; PMS — with white-labeling, AI proctoring, coding labs, and LSRW built in.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-lg mx-auto lg:mx-0">
                  {HERO_CAPABILITIES.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="hero-capability-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-zinc-100 border border-white/[0.07] bg-white/[0.03] hover:border-purple-500/30 hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-purple-300" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 lg:justify-start justify-center pt-1 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
                  <a href="/contact" className="btn-primary w-full xs:w-auto px-7 py-3.5 text-sm justify-center">
                    Start with AI
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a href="#features" className="btn-secondary w-full xs:w-auto px-7 py-3.5 text-sm justify-center">
                    See platform
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-5 sm:pt-6 border-t border-white/[0.06] mt-1 max-w-md mx-auto lg:mx-0 lg:max-w-none w-full">
                  {[
                    { value: 'LMS', label: 'Learning', desc: 'AI-driven paths' },
                    { value: 'AMS', label: 'Assessment', desc: 'Smart grading' },
                    { value: 'PMS', label: 'Performance', desc: 'Profile & growth' },
                  ].map((mod) => (
                    <div key={mod.value} className="hero-module-card group rounded-xl border border-white/[0.08] bg-white/[0.02] px-2 sm:px-3 py-3 sm:py-4 text-center lg:text-left transition-colors hover:border-purple-500/25 hover:bg-white/[0.04]">
                      <div className="mb-2 hidden lg:flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-purple-300">
                        <Layers3 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm sm:text-lg font-bold text-gradient-brand tracking-tight">{mod.value}</p>
                      <p className="text-[10px] sm:text-xs text-zinc-200 mt-0.5 font-semibold">{mod.label}</p>
                      <p className="text-[9px] sm:text-[10px] text-zinc-400 mt-1 hidden sm:block group-hover:text-zinc-200 transition-colors">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-visual w-full order-2 pb-4 sm:pb-8 lg:pb-0">
                <PremiumHeroPreview />
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full border-t border-white/[0.04] mt-auto">
            <ProcessFlowchart />
          </div>
        </section>

        {/* Tech Stack Marquee Section */}
        <TechStackMarquee />

        {/* Highlights Section */}
        <HighlightsSection />

        {/* Features Section */}
        <FeaturesSection />
        <Benefits />
        {/* Insights Section */}
        <InsightsSection />



        <DemoContactSection />

        <Footer />

      </main>
    </>
  );
};

export default Home;
