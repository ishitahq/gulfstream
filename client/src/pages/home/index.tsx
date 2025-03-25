import React from 'react';
import Hero from '@/components/Hero';
import Blueprint from '@/components/Blueprint';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      
      {/* Innovation Section with Blueprint */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">
              Innovative <span className="text-primary">Engineering</span>
            </h2>
            <p className="text-muted">
              Discover the cutting-edge features that make our aircraft the most
              advanced in their class.
            </p>
          </div>
          <Blueprint />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
