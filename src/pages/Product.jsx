import React from 'react';
import { Book, Server, FlaskConical, Users } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
  <div className="group relative overflow-hidden bg-[#0B1120] rounded-2xl shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-2">
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
      title: 'Learning Management System',
      description:
        'Comprehensive platform to streamline educational processes, enhance learning experiences, and track student progress effectively.',
      iconBgColor: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Server,
      title: 'Technology Operations Platform',
      description:
        'Advanced management solution to optimize IT infrastructure, improve operational efficiency, and gain comprehensive technological insights.',
      iconBgColor: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Management System',
      description:
        'Intelligent system to manage lab resources, track experiments, schedule equipment, and streamline research workflows.',
      iconBgColor: 'bg-purple-900/30',
      iconColor: 'text-purple-400',
    },
    {
      icon: Users,
      title: 'Profiles Management System',
      description:
        'Seamless user profile management with advanced security, comprehensive access controls, and intuitive user data organization.',
      iconBgColor: 'bg-pink-900/30',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-36 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h1 className="text-center mb-10">
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Product Solutions
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
