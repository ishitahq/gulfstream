import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    { label: 'Our Story', href: '/our-story' },
    { label: 'Customer Support', href: '/customer-support' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Contact', href: '/contact' }
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="navbar bg-black">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-display text-white">GULFSTREAM</div>
          </div>
        </div>
      </nav>
    );
  }

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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item) => (
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

          {/* Center Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <a className="logo text-white font-light">
                GULFSTREAM
              </a>
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(2).map((item) => (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
