import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-montserrat font-light mb-4">
          <span className="text-[#E2BA5F]">404</span> - Page Not Found
        </h1>
        <p className="text-[#7A8EA8] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <a 
          href="/" 
          className="px-6 py-3 border-2 border-[#E2BA5F] text-[#E2BA5F] hover:bg-[#E2BA5F] hover:text-[#0A0E1A] transition duration-300 font-montserrat"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound; 