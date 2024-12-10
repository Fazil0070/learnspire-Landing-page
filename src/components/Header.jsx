import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, ChevronRight, Sparkles } from 'lucide-react';
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

  const handleLogin = () => {
    navigate('/login');
    if (isMenuOpen) toggleMenu();
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
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}
        style={{ zIndex: 1000 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`text-gray-300 font-medium transition-colors duration-300   
                      group-hover:text-white   
                      ${activeSection === item.id ? 'text-white' : ''}`}
                  >
                    {item.text}
                  </motion.span>
                </Link>
              ))}

              {/* Login Button */}
              <motion.button
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
              >
                <LogIn size={18} />
                <span>Login</span>
              </motion.button>
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
              className="fixed top-0 right-0 w-[280px] h-full bg-gray-900"
              style={{ zIndex: 1002 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMenu}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`flex items-center justify-between p-4 rounded-xl ${  
                          activeSection === item.id  
                            ? 'bg-white/10 text-white'  
                            : 'text-gray-400 hover:bg-white/5'  
                        } transition-all duration-300`}
                      >
                        <span className="font-medium">{item.text}</span>
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Login Button */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                    className="px-4 pt-6"
                  >
                    <button
                      onClick={handleLogin}
                      className="w-full py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out"
                    >
                      <LogIn size={18} />
                      <span>Login</span>
                    </button>
                  </motion.div>
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