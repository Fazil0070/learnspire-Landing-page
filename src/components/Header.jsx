import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };



  const menuItems = [
    { text: 'Home', path: '/', id: 'home' },
    { text: 'About', path: '/about', id: 'about' },
    { text: 'Products', path: '/products', id: 'products' },
    { text: 'Contact', path: '/contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`font-Kanit fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl transition-all duration-500 rounded-full border ${scrolled ? 'bg-zinc-950/40 backdrop-blur-xl border-white/10 shadow-2xl shadow-purple-900/20 py-3' : 'bg-transparent border-transparent py-4'}`}
        style={{ zIndex: 1000 }}
      >
        <nav className="px-6 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  LearnSpire
                </span>
                <Sparkles
                  className="absolute -top-2 -right-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  size={20}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation & CTA */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-8 mr-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group py-1"
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`text-sm tracking-wide transition-colors duration-300 ${activeSection === item.id ? 'text-white font-semibold' : 'text-zinc-400 group-hover:text-white font-medium'}`}
                    >
                      {item.text}
                    </motion.span>
                    {activeSection === item.id && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Book Demo
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleMenu}
              style={{ zIndex: 1001 }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-[300px] h-full"
              style={{
                background: 'linear-gradient(160deg,#0a0a14 0%,#0d0d1a 100%)',
                borderLeft: '1px solid rgba(168,85,247,0.15)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.8)',
                zIndex: 1002,
              }}
            >
              {/* Ambient glow inside drawer */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-700/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-700/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col h-full relative z-10">
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                  <span className="text-xl font-bold" style={{ background: 'linear-gradient(90deg,#c084fc,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    LearnSpire
                  </span>
                  <button
                    onClick={toggleMenu}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-zinc-400" />
                  </button>
                </div>

                {/* Nav links */}
                <div className="flex-1 overflow-y-auto px-4 py-8 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                          activeSection === item.id
                            ? 'text-white'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                        style={activeSection === item.id ? {
                          background: 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(168,85,247,0.1))',
                          border: '1px solid rgba(168,85,247,0.3)'
                        } : {}}
                      >
                        <span className="font-medium text-sm tracking-wide">{item.text}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                          activeSection === item.id ? 'text-purple-400' : 'text-zinc-600'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="px-4 pb-8 pt-4 border-t border-white/[0.06]">
                  <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)',
                      boxShadow: '0 0 25px rgba(168,85,247,0.3)'
                    }}
                  >
                    Book a Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;