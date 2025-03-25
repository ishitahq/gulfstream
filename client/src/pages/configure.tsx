import React from 'react';
import AIAircraftConfigurator from '@/components/AIAircraftConfigurator';

const ConfigurePage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="heading-xl mb-6">Configure Your Aircraft</h1>
        <p className="text-muted max-w-3xl mb-12">
          Experience the future of aircraft customization with our AI-powered configurator.
          Get real-time recommendations and insights as you design your perfect Gulfstream aircraft.
        </p>
        <AIAircraftConfigurator />
      </div>
    </div>
  );
};

export default ConfigurePage; 