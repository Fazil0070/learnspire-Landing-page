import { useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import InsightsSection from './Insight';
import Footer from '../components/Footer';
import Benefits from './Benefits';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Animated Star Field Component
const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  useEffect(() => {
    // Animate stars flowing downward
    stars.forEach((star) => {
      gsap.to(`#star-${star.id}`, {
        y: '+=100vh',
        duration: star.duration * 10,
        repeat: -1,
        ease: 'none',
        delay: star.delay,
      });

      // Twinkle effect
      gsap.to(`#star-${star.id}`, {
        opacity: star.opacity * 0.3,
        duration: star.duration,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    });
  }, [stars]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          id={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    particles.forEach((particle) => {
      gsap.to(`#particle-${particle.id}`, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: particle.duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: particle.delay,
      });
    });
  }, [particles]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          id={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
      ))}
    </div>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-[9998]">
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
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
              className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 transform-gpu group cursor-default"
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
    <section className="w-full bg-black py-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      {/* Fade edges on marquee */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Tech Stack
          </div>
          <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
            Powered by{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Modern Technologies
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base">
            Built with cutting-edge tools and frameworks for optimal performance
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

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes flow-animation {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes energy-beam {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes energy-beam-vertical {
          0% {
            background-position: 0 -200%;
          }
          100% {
            background-position: 0 200%;
          }
        }
      `}</style>
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
      description: "PMS: Profile Creation & Setup"
    },
    {
      id: 2,
      title: "Learn",
      icon: "book",
      description: "LMS: AI-Driven Coursework"
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
      description: "Performance Insights & Growth"
    }
  ];

  return (
    <section className="process-flowchart py-10 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 py-2 leading-relaxed drop-shadow-sm">
            The Learnspire Ecology
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A seamless journey from onboarding to mastery, powered by integrated intelligent systems.
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
      title: "Custom Branding",
      description: "Fully customizable interface to seamlessly match your unique brand identity.",
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

  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("highlight-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section
      className="highlights-section py-24 px-4 relative overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Why Learnspire
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Choose{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Learnspire?
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base sm:text-lg">
            Experience the next evolution of educational technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Spotlight Effect Layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
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
    { number: 500, suffix: '+', label: 'Courses Available', icon: '📚' },
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
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9997] w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-500/70 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
    >
      <svg
        className="w-6 h-6 text-white group-hover:animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const FeatureIcon = ({ children, gradient }) => (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0"
    style={{ background: gradient || 'linear-gradient(135deg,#7c3aed,#a855f7)' }}
  >
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="group relative p-px rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
    style={{ background: 'rgba(255,255,255,0.06)' }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
      style={{ background: gradient }}
    />
    <div className="relative bg-[#0a0a0a] rounded-3xl p-7 h-full">
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[70px] pointer-events-none rounded-full"
        style={{ background: gradient }}
      />
      <FeatureIcon gradient={gradient}>{icon}</FeatureIcon>
      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-purple-200 transition-colors tracking-tight">
        {title}
      </h3>
      <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed text-sm">{description}</p>
    </div>
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
      title: "Interactive Courses",
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
          <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "User-Friendly UI",
      description: "Navigate effortlessly with our intuitive, customizable interface design.",
      gradient: 'linear-gradient(135deg,#05966955,#0891b255)'
    },
  ];

  return (
    <section className="font-kamerik w-full bg-black py-24 relative overflow-hidden" id="features">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Platform Features
          </div>
          <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5 text-white">
            Features loved by{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>everyone</span>
          </h2>
          <p className="font-light text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto">
            Discover the tools and features that make our platform the perfect choice for modern education
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


// Premium CTA Banner
const DemoContactSection = () => (
  <div className="w-full bg-black px-4 sm:px-6 py-24 relative overflow-hidden">
    {/* Glow orbs */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-800/20 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-pink-800/15 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Card with gradient border */}
      <div className="relative rounded-3xl p-px overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#7c3aed40,#a855f740,#ec489940,#7c3aed40)' }}
      >
        <div className="relative bg-[#0a0a10] rounded-3xl px-8 sm:px-16 py-14 sm:py-20 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-purple-500/10" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-pink-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Get Started Today
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to transform{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              education?
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Interested in seeing what our platform can do for you? Get in touch with us for a personalized demo and discover the future of learning.
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-white rounded-full hover:-translate-y-1 transition-all duration-300 px-8 py-4"
              style={{
                background: 'linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)',
                boxShadow: '0 0 40px rgba(168,85,247,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
            >
              Book a Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-zinc-300 hover:text-white rounded-full px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {


  const setupAnimations = useCallback(() => {
    // Initial page load animation
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );



    // Feature cards stagger animation with smooth reveal
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Smooth scroll handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
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
      <main className="font-kamerik  font mt-16" >

        <section className="hero-section min-h-screen w-full max-w-[100vw] relative flex flex-col overflow-hidden bg-black">
          {/* Animated Star + Particle Background */}
          <StarField />
          <FloatingParticles />

          {/* Mesh Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Gradient Orbs */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
          <div className="absolute top-[-10%] left-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-purple-700/25 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-[-5%] right-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-pink-700/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-indigo-700/15 rounded-full blur-[160px] animate-pulse pointer-events-none" style={{ animationDuration: '9s', animationDelay: '3s' }} />

          {/* Hero Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="hero-content w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">

              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.07] border border-white/[0.15] backdrop-blur-2xl hover:bg-white/[0.12] transition-all duration-300 cursor-pointer group shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-purple-500"></span>
                </span>
                <span
                  className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase"
                  style={{ background: 'linear-gradient(90deg,#c084fc,#f472b6,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Next Generation Learning Platform
                </span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hero Headline */}
              <h1 className="font-extrabold tracking-tight leading-[1.1] text-white w-full"
                style={{ fontSize: 'clamp(2rem, 5.5vw + 0.5rem, 4.5rem)' }}
              >
                <span className="block text-white/90 mb-1 sm:mb-2">
                  The Complete AI-Powered
                </span>
                <span
                  className="block pb-2"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 30%, #f472b6 65%, #fb923c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.4))'
                  }}
                >
                  LMS, AMS &amp; PMS Ecosystem
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-zinc-400 leading-relaxed max-w-2xl font-light px-2"
                style={{ fontSize: 'clamp(0.9rem, 1.8vw + 0.3rem, 1.2rem)' }}
              >
                Unify learning, assessment, and profile management with our advanced ecosystem.
                From AI-driven coding challenges and LSRW communication suites to comprehensive
                student profiling and analytics—empower your institution with a secure,
                open-source solution tailored for success.
              </p>

              {/* Platform Pillars */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2">
                {[
                  { label: 'LMS', desc: 'Learning', color: 'from-violet-500/20 to-violet-500/5', border: 'border-violet-500/30', text: 'text-violet-300' },
                  { label: 'AMS', desc: 'Assessment', color: 'from-fuchsia-500/20 to-fuchsia-500/5', border: 'border-fuchsia-500/30', text: 'text-fuchsia-300' },
                  { label: 'PMS', desc: 'Profiling', color: 'from-pink-500/20 to-pink-500/5', border: 'border-pink-500/30', text: 'text-pink-300' },
                  { label: 'Coding', desc: 'Challenges', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-300' },
                  { label: 'LSRW', desc: 'Communication', color: 'from-sky-500/20 to-sky-500/5', border: 'border-sky-500/30', text: 'text-sky-300' },
                ].map((pill) => (
                  <div key={pill.label}
                    className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${pill.color} border ${pill.border} backdrop-blur-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-default`}
                  >
                    <span className={`text-xs sm:text-sm font-bold ${pill.text}`}>{pill.label}</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 hidden xs:inline">{pill.desc}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 w-full">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 font-semibold text-white transition-all duration-500 rounded-full hover:-translate-y-1 w-full xs:w-auto"
                  style={{
                    padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.75rem, 3vw, 2.5rem)',
                    fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)',
                    background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                    boxShadow: '0 0 35px rgba(168,85,247,0.45), inset 0 1px 0 rgba(255,255,255,0.15)'
                  }}
                >
                  <span>Get Started Free</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 font-semibold text-zinc-200 transition-all duration-300 rounded-full border border-white/[0.12] bg-white/[0.05] backdrop-blur-xl hover:bg-white/[0.1] hover:border-white/25 hover:-translate-y-1 hover:text-white w-full xs:w-auto"
                  style={{
                    padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.75rem, 3vw, 2.5rem)',
                    fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)',
                  }}
                >
                  <span>Explore Features</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>

              {/* Trust Line */}
              <div className="flex items-center gap-3 mt-2 opacity-60">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-[10px] sm:text-xs text-zinc-500 tracking-widest uppercase">Trusted by Institutions Nationwide</span>
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/30" />
              </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
              <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Process Flowchart flows naturally below */}
          <div className="relative z-10 w-full">
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