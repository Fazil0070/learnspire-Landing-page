import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Variants for animated elements
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted', formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90 z-0"></div>
      
      {/* Starry night effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-gray-900 opacity-50 z-0"></div>
      
      {/* Subtle animated particles */}
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="absolute bg-white opacity-10 rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 2}s`
          }}
        />
      ))}

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gray-950 shadow-2xl rounded-3xl w-full max-w-md overflow-hidden border border-gray-800 relative z-10"
      >
        <div className="p-8">
          {/* Logo & Title */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LearnSpire
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Welcome back! Login to continue
            </p>
          </motion.div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div 
              variants={itemVariants} 
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div 
              variants={itemVariants} 
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center"
            >
              <LogIn className="mr-2 w-5 h-5" />
              Login
            </motion.button>

            {/* Forgot Password */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center text-sm text-gray-400"
            >
              <a 
                href="#" 
                className="hover:text-white transition-colors"
              >
                Forgot Password?
              </a>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;