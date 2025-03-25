import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/utils/authContext';

const navVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Aircraft', href: '/aircraft' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Customer Support', href: '/customer-support' },
    { label: 'Contact', href: '/contact' }
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="navbar bg-black">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1"></div>
            <div className="text-xl font-display text-white text-center">GULFSTREAM</div>
            <div className="flex-1"></div>
          </div>
        </div>
      </nav>
    );
  }

  // Explicitly define left and right navigation items for perfect balance
  const leftNavItems = [navItems[0], navItems[1], navItems[2]]; // Aircraft, Sustainability, Our Story
  const rightNavItems = [navItems[3], navItems[4]]; // Customer Support, Contact

  return (
    <motion.nav
      className={`navbar bg-black ${isScrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
            {leftNavItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Center Logo - for both mobile and desktop */}
          <motion.div
            className="flex items-center justify-center mx-8 flex-1 md:flex-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <a className="logo text-white font-light text-xl whitespace-nowrap">
                GULFSTREAM
              </a>
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center justify-start space-x-6 flex-1">
            {rightNavItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Conditional Login/Profile Button */}
            <AnimatePresence mode="wait">
              {isLoggedIn ? (
                <motion.a
                  key="profile-button"
                  href="/profile"
                  className="nav-link px-5 py-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </motion.a>
              ) : (
                <motion.a
                  key="login-button"
                  href="/login"
                  className="nav-link px-5 py-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  Login
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end flex-1">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 space-y-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block nav-link text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Conditional Mobile Login/Profile Button */}
              {isLoggedIn ? (
                <motion.a
                  href="/profile"
                  className="block nav-link text-white font-medium border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-center backdrop-blur-sm transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-4 h-4 inline-block mr-2" />
                  Profile
                </motion.a>
              ) : (
                <motion.a
                  href="/login"
                  className="block nav-link text-white font-medium border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-center backdrop-blur-sm transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
