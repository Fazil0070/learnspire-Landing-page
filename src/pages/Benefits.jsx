import React from 'react';
import { Rocket, Brain, BarChart, Gauge, Users, Shield, Sparkles } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
    <div className="mb-6">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Accelerate Learning",
      description: "Boost engagement and completion rates with AI-enhanced interactive features."
    },
    {
      icon: Brain,
      title: "Personalized Paths",
      description: "Tailor learning journeys with AI-driven recommendations based on individual progress."
    },
    {
      icon: BarChart,
      title: "AI-Powered Analytics",
      description: "Gain insights with detailed, AI-driven reports on learner performance and outcomes."
    },
    {
      icon: Gauge,
      title: "Adaptive Learning",
      description: "Our AI adjusts content difficulty in real-time to optimize the learning experience."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Foster teamwork with AI-facilitated group projects and peer-to-peer learning."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Rest easy with our advanced encryption and privacy-first approach to data handling."
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key benefits</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;