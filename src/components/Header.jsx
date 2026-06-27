import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandName from './BrandName';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const smoothEase = [0.16, 1, 0.3, 1];

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Products', path: '/products' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 h-14 sm:h-[3.75rem] rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-zinc-950/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-purple-900/20'
              : 'bg-black/50 backdrop-blur-xl border-white/[0.08]'
          }`}
        >
          <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <BrandName size="sm" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05] group"
              >
                {item.text}
                <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Book a demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 -mr-1 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: smoothEase }}
              className="fixed inset-0 bg-black/70 z-[1001]"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: '100%', opacity: 0.96 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.96 }}
              transition={{ duration: 0.3, ease: smoothEase }}
              className="fixed top-0 right-0 w-full max-w-sm h-full z-[1002] flex flex-col border-l border-white/10 shadow-2xl shadow-black/50 transform-gpu will-change-transform"
              style={{ background: 'linear-gradient(160deg, #0a0a14 0%, #0d0d1a 100%)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-700/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06] relative z-10">
                <BrandName size="sm" />
                <button
                  onClick={toggleMenu}
                  className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 px-4 py-6 space-y-1 relative z-10">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 18, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 + index * 0.035, duration: 0.24, ease: smoothEase }}
                  >
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <span className="font-medium text-sm">{item.text}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-600" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 pb-8 pt-4 border-t border-white/[0.06] relative z-10">
                <Link to="/contact" onClick={toggleMenu} className="btn-primary w-full py-3 text-sm">
                  Book a demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
