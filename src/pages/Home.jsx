import React, { useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dashboard from '../assets/dashboard.png';
import InsightsSection from './Insight';
import Footer from '../components/Footer';
import Benefits from './Benefits';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      gsap.to('.cursor-follower', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="cursor-follower fixed w-8 h-8 rounded-full bg-purple-500/30 pointer-events-none blur-sm z-50 -translate-x-1/2 -translate-y-1/2" />
  );
};

const FeatureIcon = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 transition-all duration-300 group-hover:bg-purple-500/20">
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Interactive Courses",
      description: "Engage learners with dynamic, adaptive content that evolves with their progress."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Smart Attendance",
      description: "Effortlessly monitor participation and progress with AI-powered tracking systems."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Coding Challenges",
      description: "Sharpen skills with real-world programming tasks and instant AI-driven feedback."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Timely Announcements",
      description: "Keep everyone informed with automated, personalized updates and reminders."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "AI Proctoring",
      description: "Ensure exam integrity with advanced AI-powered monitoring and analysis."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "User-Friendly UI",
      description: "Navigate effortlessly with our intuitive, customizable interface design."
    },
  ];

  return (
    <section className="w-full bg-black py-20" id="features">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Features loved by everyone
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
    <main className="mt-16">
      <CursorFollower />
      <section className="min-h-screen w-full max-w-[100vw] relative flex flex-col overflow-hidden">
        <div className="flex flex-col min-h-screen w-full p-[5%] gap-6 place-content-center max-xl:place-items-center max-lg:p-4">
          {/* Hero Content */}
          <div className="hero-content flex flex-col place-content-center items-center">
            {/* Hero Title */}
            <h1 className="text-center text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Level Up Your Learning with
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            
            {/* Hero Description */}
            <p className="mt-10 max-w-[450px] p-2 text-center text-gray-300">
              Experience a continuous improvement in learning outcomes with our AI-driven approach. 
              We adapt content delivery, assessment methods, and personalization strategies based on 
              real-time feedback for a more efficient learning journey.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex place-items-center gap-4">
              <a
                href="/contact"
                className="bg-purple-600 px-6 py-3 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/70 hover:bg-purple-500"
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

      {/* Features Section */}
      <FeaturesSection />
      <Benefits />
      {/* Insights Section */}
      <InsightsSection />
      <Footer />

    </main>
  );
};

export default Home;