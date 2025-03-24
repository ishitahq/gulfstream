import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/utils/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[#0A0E1A]/50' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <svg className="h-10 md:h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10H100V12H20V10Z" fill="#E2BA5F"/>
            <path d="M10 15C10 12.2386 12.2386 10 15 10H25C27.7614 10 30 12.2386 30 15V25C30 27.7614 27.7614 30 25 30H15C12.2386 30 10 27.7614 10 25V15Z" fill="#E2BA5F"/>
            <path d="M35 15H95V20H35V15Z" fill="#E2BA5F"/>
            <path d="M35 25H75V30H35V25Z" fill="#E2BA5F"/>
          </svg>
          <div className="ml-3 md:ml-6">
            <span className="text-xl md:text-2xl font-montserrat font-semibold tracking-wide">GULFSTREAM</span>
            <span className="hidden md:inline-block text-sm text-[#E2BA5F] ml-2 font-light">AEROSPACE</span>
          </div>
        </div>
        
        <div className="hidden lg:flex space-x-12 font-montserrat text-sm tracking-wider">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className="nav-item opacity-90 hover:opacity-100 interactive relative"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-6">
          <motion.button 
            className="hidden md:block px-5 py-2 border-2 border-[#E2BA5F] text-[#E2BA5F] hover:bg-[#E2BA5F] hover:text-[#0A0E1A] transition duration-300 font-montserrat text-sm tracking-wide interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.button>
          <button 
            className="text-white interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-[#0A0E1A]/95 backdrop-blur-md lg:hidden pt-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-8 py-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-montserrat tracking-wider border-b border-[#5A6E8C]/20 pb-4"
                >
                  {item.label}
                </Link>
              ))}
              <motion.button 
                className="mt-8 px-5 py-3 border-2 border-[#E2BA5F] text-[#E2BA5F] hover:bg-[#E2BA5F] hover:text-[#0A0E1A] transition duration-300 font-montserrat text-sm tracking-wide interactive w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                CONTACT
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
