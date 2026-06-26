import React from 'react';
import { Book, Server, FlaskConical, Users, Code, Database } from 'lucide-react';
import Footer from '../components/Footer';

const ProductCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
  <div className="font-kamerik group relative overflow-hidden bg-[#0B1120] rounded-2xl shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-2">
    <div className="p-6 space-y-4">
      <div
        className={`w-16 h-16 ${iconBgColor} ${iconColor} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
    <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/10 rounded-full blur-[120px]" />
  </div>
);

const Products = () => {
  const products = [
    {
      icon: Book,
      title: 'Learnspire PAT',
      description: 'Placement Assessment and Training platform to evaluate and develop student skills, ensuring career readiness and optimal job placement.',
      iconBgColor: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Code,
      title: 'Learnspire Coder',
      description: 'Comprehensive coding platform that provides interactive coding challenges, real-time assessments, and skill development tools for programmers.',
      iconBgColor: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
    },
    {
      icon: Server,
      title: 'Learnspire OpsTech',
      description: 'Technology Operations Platform (TOP) to manage and optimize technological infrastructure, streamline IT processes, and enhance operational efficiency.',
      iconBgColor: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: FlaskConical,
      title: 'Learnspire LabSync',
      description: 'Laboratory Management Platform (LMP) to intelligently manage lab resources, track experiments, schedule equipment, and streamline research workflows.',
      iconBgColor: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
    },
    {
      icon: Users,
      title: 'Learnspire Profile+',
      description: 'Profile & Performance Management System (PMS) — manage student profiles, track performance metrics, and deliver actionable growth insights with advanced security and access controls.',
      iconBgColor: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Database,
      title: 'Learnspire LMS',
      description: 'Learning Management System that provides a comprehensive platform to streamline educational processes, enhance learning experiences, and track student progress effectively.',
      iconBgColor: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
    }
  ];

  return (
    <div className=" font-Kamerik min-h-screen bg-black pt-36 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h1 className="text-center mb-10">
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Learnspire Product Solutions
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;