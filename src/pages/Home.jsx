import { useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dashboard from '../assets/dashboard.png';
import InsightsSection from './Insight';
import Footer from '../components/Footer';
import Benefits from './Benefits';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Loading Screen Component
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Wait a bit before fading out
      setTimeout(() => {
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }
        });
      }, 500);
    }
  }, [progress, onLoadingComplete]);

  useEffect(() => {
    // Animate letters appearing one by one
    const letters = document.querySelectorAll('.letter');
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.3
      }
    );

    // Animate the tagline
    gsap.fromTo(
      '.loading-tagline',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 2, ease: 'power3.out' }
    );

    // Animate progress bar container
    gsap.fromTo(
      '.progress-container',
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.8, delay: 1.5, ease: 'power3.out' }
    );
  }, []);

  if (!isVisible) return null;

  const logoText = 'LearnSpire';

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo text with letter animation */}
        <div className="mb-8 flex justify-center gap-1 perspective-1000">
          {logoText.split('').map((letter, index) => (
            <span
              key={index}
              className="letter inline-block text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="loading-tagline text-gray-400 text-lg md:text-xl mb-12 font-light">
          Empowering Education with AI
        </p>

        {/* Progress bar */}
        <div className="progress-container w-64 md:w-96 mx-auto">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <div className="mt-4 text-purple-400 text-sm font-semibold">
            {progress}%
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};


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

// Enhanced Cursor Follower with Trail and Ripple
const CursorFollower = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const updateCursor = (e) => {
      gsap.to('.cursor-follower', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out'
      });

      // Update trail
      gsap.to('.cursor-trail', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
        ease: 'power3.out'
      });
    };

    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Cursor trail */}
      <div className="cursor-trail fixed w-12 h-12 rounded-full bg-purple-500/20 pointer-events-none blur-md z-49 -translate-x-1/2 -translate-y-1/2" />
      {/* Main cursor */}
      <div className="cursor-follower fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pointer-events-none blur-sm z-50 -translate-x-1/2 -translate-y-1/2" />
      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed w-4 h-4 rounded-full border-2 border-purple-500 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </>
  );
};

// Tech Stack Marquee Component
const TechStackMarquee = () => {
  const techStack = {
    row1: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'GSAP', 'WebRTC', 'Socket.io'],
    row2: ['Python', 'TensorFlow', 'OpenAI', 'Docker', 'AWS', 'Redis', 'PostgreSQL', 'GraphQL'],
    row3: ['TypeScript', 'Next.js', 'Prisma', 'Stripe', 'Firebase', 'Vercel', 'GitHub Actions', 'Jest']
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
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-4">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: `marquee-${direction} ${speed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-black py-16 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Powered by Modern Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
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
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
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

const FeatureIcon = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:rotate-12 group-hover:scale-110">
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 className="text-xl font-semibold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className=" w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: " Interactive Courses",
      description: "Engage learners with dynamic, adaptive content that evolves with their progress."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Smart Attendance",
      description: "Effortlessly monitor participation and progress with AI-powered tracking systems."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Coding Challenges",
      description: "Sharpen skills with real-world programming tasks and instant AI-driven feedback."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Timely Announcements",
      description: "Keep everyone informed with automated, personalized updates and reminders."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AI Proctoring",
      description: "Ensure exam integrity with advanced AI-powered monitoring and analysis."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "User-Friendly UI",
      description: "Navigate effortlessly with our intuitive, customizable interface design."
    },
  ];

  return (
    <section className=" font-kamerik w-full bg-black py-20" id="features">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 reveal-up">
          <h2 className="font-bold text-2xl mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Features loved by everyone
          </h2>
          <p className="font-normal text-gray-400 max-w-2xl mx-auto">
            Discover the tools and features that make our platform the perfect choice for modern education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="reveal-up feature-card" data-delay={index * 0.2}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const setupAnimations = useCallback(() => {
    // Initial page load animation
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Hero image animations
    gsap.fromTo(
      '.hero-image-container',
      {
        scale: 0.8,
        opacity: 0,
        rotate: -5
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    // Floating animation with smooth easing
    gsap.to('.hero-image-container', {
      y: 20,
      duration: 2.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });

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
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Main Content */}
      <main className="font-kamerik  font mt-16" >
        <CursorFollower />
        <section className="hero-section min-h-screen w-full max-w-[100vw] relative flex flex-col overflow-hidden">
          {/* Animated Background Layers */}
          <StarField />
          <FloatingParticles />

          {/* Gradient Background Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="flex flex-col min-h-screen w-full p-[5%] gap-6 place-content-center max-xl:place-items-center max-lg:p-4 relative z-10">
            {/* Hero Content */}
            <div className="hero-content flex flex-col place-content-center items-center">
              {/* Hero Title */}
              <h1 className="text-center text-4xl font-bold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug">
                <span className="  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Level Up Your Learning with
                </span>
                <br />
                <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>

              {/* Hero Description */}
              <p className="font-thin mt-10 max-w-[450px] p-2 text-center text-gray-300">
                Experience a continuous improvement in learning outcomes with our AI-driven approach.
                We adapt content delivery, assessment methods, and personalization strategies based on
                real-time feedback for a more efficient learning journey.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex place-items-center gap-4">
                <a
                  href="/contact"
                  className="font-normal bg-purple-600 px-6 py-3 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/70 hover:bg-purple-500"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="hero-image-container relative mt-8 flex w-full place-content-center place-items-center">
              <div className="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full">
                <img
                  src={dashboard}
                  alt="Dashboard preview"
                  className="w-full h-full object-cover opacity-90 max-lg:object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div
                className="purple-glow absolute left-[20%] top-5 h-52 w-52 bg-purple-500/30 blur-[100px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee Section */}
        <TechStackMarquee />

        {/* Features Section */}
        <FeaturesSection />
        <Benefits />
        {/* Insights Section */}
        <InsightsSection />
        <Footer />

      </main>
    </>
  );
};

export default Home;