import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const resourceLinks = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        'service_ov160cp', // Replace with your EmailJS Service ID
        'template_difdbth', // Updated Template ID
        templateParams,
        'WyrQhjTTMk91pcs0x' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmail('');
          setStatus({ loading: false, success: 'Thank you for subscribing!', error: null });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus({
            loading: false,
            success: null,
            error: 'Failed to subscribe. Please try again later.',
          });
        }
      );
  };

  return (
    <footer className="font-Kanit bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-20 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Join our newsletter</h2>
            <p className="text-gray-400 mb-8 text-lg">Stay updated with the latest in AI-powered education.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl bg-black/50 border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white transition-all placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={status.loading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                {status.loading ? 'Signing up...' : 'Subscribe'}
              </button>
            </form>
            {status.success && (
              <p className="text-emerald-400 mt-4 font-medium">{status.success}</p>
            )}
            {status.error && (
              <p className="text-red-400 mt-4 font-medium">{status.error}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 inline-block">
              LearnSpire
            </span>
            <p className="text-gray-400 leading-relaxed">
              Empowering institutions with a complete AI-driven educational ecosystem.
            </p>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/learnspire-ai/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.linkedin.com/company/learnspire-ai/', '_blank', 'noopener,noreferrer');
                }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-500 text-sm text-center w-full">
            © {new Date().getFullYear()} LearnSpire AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;