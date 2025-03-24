import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0E1A] text-white py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#E2BA5F] font-montserrat text-lg mb-4">GULFSTREAM</h3>
            <p className="text-[#7A8EA8] text-sm">
              Setting the standard in business aviation with unmatched innovation and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm mb-4">CONTACT</h4>
            <p className="text-[#7A8EA8] text-sm mb-2">500 Gulfstream Road</p>
            <p className="text-[#7A8EA8] text-sm mb-2">Savannah, GA 31408</p>
            <p className="text-[#7A8EA8] text-sm">+1 (800) 810-4853</p>
          </div>

          <div>
            <h4 className="font-montserrat text-sm mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#7A8EA8] text-sm hover:text-[#E2BA5F] transition">Privacy Policy</a></li>
              <li><a href="#" className="text-[#7A8EA8] text-sm hover:text-[#E2BA5F] transition">Terms of Use</a></li>
              <li><a href="#" className="text-[#7A8EA8] text-sm hover:text-[#E2BA5F] transition">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-sm mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#7A8EA8] hover:text-[#E2BA5F] transition">LinkedIn</a>
              <a href="#" className="text-[#7A8EA8] hover:text-[#E2BA5F] transition">Twitter</a>
              <a href="#" className="text-[#7A8EA8] hover:text-[#E2BA5F] transition">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#5A6E8C]/20 mt-12 pt-8">
          <p className="text-[#7A8EA8] text-sm text-center">
            © {new Date().getFullYear()} Gulfstream Aerospace Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
