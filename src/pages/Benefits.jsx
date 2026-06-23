import React from 'react';
import { Brain, BarChart, Gauge, Users, Shield, Sparkles } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, gradient, glow }) => (
  <div className="group relative rounded-2xl p-px overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.07)` }}
  >
    {/* Animated gradient border on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{ background: gradient, filter: 'blur(1px)' }}
    />
    <div className="relative bg-[#0d0d0d] rounded-2xl p-7 h-full flex flex-col gap-5">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px] pointer-events-none"
        style={{ background: glow }}
      />
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: gradient }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{description}</p>
      </div>
    </div>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Accelerate Learning",
      description: "Boost engagement and completion rates with AI-enhanced interactive features.",
      gradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
      glow: 'rgba(168,85,247,0.4)'
    },
    {
      icon: Brain,
      title: "Personalized Paths",
      description: "Tailor learning journeys with AI-driven recommendations based on individual progress.",
      gradient: 'linear-gradient(135deg,#2563eb,#7c3aed)',
      glow: 'rgba(37,99,235,0.4)'
    },
    {
      icon: BarChart,
      title: "AI-Powered Analytics",
      description: "Gain insights with detailed, AI-driven reports on learner performance and outcomes.",
      gradient: 'linear-gradient(135deg,#0891b2,#2563eb)',
      glow: 'rgba(8,145,178,0.4)'
    },
    {
      icon: Gauge,
      title: "Adaptive Learning",
      description: "Our AI adjusts content difficulty in real-time to optimize the learning experience.",
      gradient: 'linear-gradient(135deg,#059669,#0891b2)',
      glow: 'rgba(5,150,105,0.4)'
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Foster teamwork with AI-facilitated group projects and peer-to-peer learning.",
      gradient: 'linear-gradient(135deg,#d97706,#ec4899)',
      glow: 'rgba(217,119,6,0.4)'
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Rest easy with our advanced encryption and privacy-first approach to data handling.",
      gradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
      glow: 'rgba(236,72,153,0.4)'
    }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>
      {/* Faint grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="font-Kanit max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Why Learnspire
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Key{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Benefits
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base sm:text-lg">
            Everything your institution needs to accelerate student growth and placement success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;