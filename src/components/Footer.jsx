import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const resourceLinks = [
    { label: 'About us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'Privacy policy', href: '#' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="bg-[#111] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-2">Join our newsletter</h2>
          <p className="text-gray-400 mb-6">Lorem ipsum dolor sit.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="email"
              className="flex-1 px-4 py-2 rounded-lg bg-transparent border border-gray-800 focus:outline-none focus:border-white text-white"
            />
            <button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg transition-colors duration-200">
              Signup
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Resources Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow us</h3>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;