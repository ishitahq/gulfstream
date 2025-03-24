import React from 'react';
import '@google/model-viewer';

// @ts-ignore
const Blueprint: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="blueprint-grid absolute inset-0" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">
              Experience <span className="blueprint-text">Innovation</span>
            </h2>
            <p className="text-muted mb-8">
              Explore our aircraft in stunning detail. Every curve and feature
              represents our commitment to excellence in aviation design.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Advanced aerodynamics</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>Luxurious interior design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400" />
                <span>State-of-the-art technology</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <model-viewer
              src="/models/airplane.glb"
              environment-image="/models/aircraft-hangar.hdr"
              poster="/images/model-poster.svg"
              shadow-intensity="1"
              camera-controls
              auto-rotate
              rotation-per-second="30deg"
              interaction-prompt="none"
              exposure="1"
              className="model-viewer"
              loading="eager"
              ar
              ar-modes="webxr scene-viewer quick-look"
            >
              <div className="absolute inset-0 flex items-center justify-center" slot="poster">
                <div className="inline-block px-4 py-2 rounded-lg bg-sky-500 dark:bg-sky-400 text-white">
                  Loading 3D Model...
                </div>
              </div>
            </model-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
