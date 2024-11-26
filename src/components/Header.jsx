import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuItems = [
    { text: 'Home', path: '/', gradient: 'from-blue-400 to-cyan-500', glowColor: 'blue' },
    { text: 'About', path: '/about', gradient: 'from-purple-500 to-pink-500', glowColor: 'purple' },
    { text: 'Products', path: '/products', gradient: 'from-green-400 to-teal-500', glowColor: 'green' },
    { text: 'Contact', path: '/contact', gradient: 'from-orange-400 to-red-500', glowColor: 'orange' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Sparkle Effect */}
          <Link 
            to="/" 
            className="flex items-center group relative"
          >
            <motion.span 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              LearnSpire
            </motion.span>
            <Sparkles 
              className="absolute -top-2 -right-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              size={20} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div 
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  delay: menuItems.findIndex(i => i.path === item.path) * 0.1 
                }}
              >
                <Link
                  to={item.path}
                  className="relative group"
                >
                  <motion.span 
                    className="text-gray-300 text-lg font-medium transition-colors duration-300 group-hover:text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.text}
                  </motion.span>
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${item.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  ></span>
                </Link>
              </motion.div>
            ))}
            
            {/* Enhanced Login Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
            >
              <Link
                to="/login"
                className="relative inline-flex items-center px-6 py-2.5 overflow-hidden group rounded-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg"></span>
                <span className="relative z-10 flex items-center text-white font-medium tracking-wide text-sm bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-2.5 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <LogIn className="mr-2 w-4 h-4" />
                  Login
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z-50 relative"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 z-40"
                onClick={toggleMenu}
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className="fixed top-0 right-0 w-4/5 max-w-md h-full bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl shadow-2xl z-50 rounded-l-3xl overflow-hidden"
              >
                <div className="relative h-full flex flex-col">
                  <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                  <div className="flex-1 overflow-y-auto px-6 pt-20 space-y-8">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            delay: index * 0.1,
                            type: 'spring',
                            stiffness: 300,
                          },
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={toggleMenu}
                          className={`flex items-center justify-between bg-white/5 text-${item.glowColor}-400 p-4 rounded-2xl group transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-${item.glowColor}-400 relative overflow-hidden`}
                        >
                          <span className="relative z-10 text-lg font-medium">
                            {item.text}
                          </span>
                          <ChevronRight className={`text-${item.glowColor}-400 opacity-70 group-hover:translate-x-1 transition-transform relative z-10`} />
                          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-0"></span>
                        </Link>
                      </motion.div>
                    ))}
                    <div className="mt-8">
                      <Link
                        to="/login"
                        onClick={toggleMenu}
                        className="flex items-center justify-center bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-3 rounded-full hover:from-indigo-800 hover:to-purple-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg font-semibold tracking-wide"
                      >
                        <LogIn className="mr-3 w-6 h-6" />
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;