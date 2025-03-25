import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Maximize, RotateCcw } from 'lucide-react';

const InteractiveModel = () => {
  const [activeView, setActiveView] = useState('exterior');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds
  setTimeout(() => setIsLoading(false), 3000);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-light mb-6">
              <span className="text-[#E2BA5F]">Explore</span> Every Angle
            </h2>
            <p className="text-[#7A8EA8] mb-8 leading-relaxed">
              Discover the G800's revolutionary design through our interactive 3D model. 
              Rotate, zoom, and explore every detail of the aircraft that's setting new standards in ultra-long-range aviation.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-3">
                <button 
                  className={`w-3 h-3 rounded-full ${activeView === 'exterior' ? 'bg-[#E2BA5F]' : 'bg-white/30 hover:bg-white/60 transition'}`}
                  onClick={() => setActiveView('exterior')}
                  aria-label="Exterior view"
                />
                <button 
                  className={`w-3 h-3 rounded-full ${activeView === 'interior' ? 'bg-[#E2BA5F]' : 'bg-white/30 hover:bg-white/60 transition'}`}
                  onClick={() => setActiveView('interior')}
                  aria-label="Interior view"
                />
                <button 
                  className={`w-3 h-3 rounded-full ${activeView === 'cockpit' ? 'bg-[#E2BA5F]' : 'bg-white/30 hover:bg-white/60 transition'}`}
                  onClick={() => setActiveView('cockpit')}
                  aria-label="Cockpit view"
                />
                <span className="text-sm text-[#7A8EA8] ml-3">
                  {activeView === 'exterior' ? 'Exterior View' : 
                   activeView === 'interior' ? 'Interior View' : 'Cockpit View'}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="px-4 py-2 bg-[#5A6E8C]/20 hover:bg-[#5A6E8C]/30 transition text-sm flex items-center space-x-2 interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveView(activeView === 'exterior' ? 'interior' : 'exterior')}
                >
                  <Eye className="h-4 w-4" />
                  <span>View {activeView === 'exterior' ? 'Interior' : 'Exterior'}</span>
                </motion.button>
                
                <motion.button 
                  className="px-4 py-2 bg-[#5A6E8C]/20 hover:bg-[#5A6E8C]/30 transition text-sm flex items-center space-x-2 interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Maximize className="h-4 w-4" />
                  <span>Fullscreen</span>
                </motion.button>
                
                <motion.button 
                  className="px-4 py-2 bg-[#5A6E8C]/20 hover:bg-[#5A6E8C]/30 transition text-sm flex items-center space-x-2 interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset View</span>
                </motion.button>
              </div>
            </div>
            
            <div className="bg-[#1A2038]/50 border border-[#5A6E8C]/20 p-4 text-sm text-[#7A8EA8]">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E2BA5F] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Interactive Controls</span>
              </div>
              <p className="text-xs leading-relaxed">
                Click and drag to rotate • Scroll to zoom • Double-click to focus on specific areas • 
                Use the buttons above to change views or reset the model orientation.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 h-[500px] lg:h-[600px] relative bg-[#1A2038]/20 backdrop-blur-sm border border-[#5A6E8C]/10 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {isLoading ? (
              <div className="text-center p-10">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#E2BA5F]/50 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg mb-3">Interactive 3D Model</h3>
                <p className="text-[#7A8EA8] text-sm mb-6">
                  The interactive 3D model is loading. This feature uses Three.js to provide a detailed exploration of the G800.
                </p>
                <div className="inline-block">
                  <div className="skeleton-loading h-1 w-48 mb-2"></div>
                  <div className="text-xs text-[#5A6E8C] text-left">Loading model assets (65%)</div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Placeholder for Three.js model - would be replaced with actual Three.js implementation */}
                  <img 
                    src={activeView === 'exterior' 
                      ? "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop" 
                      : activeView === 'interior'
                      ? "https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=2000&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1574749298507-78c0a4bf41e7?q=80&w=2000&auto=format&fit=crop"
                    } 
                    alt={`G800 ${activeView} view`}
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-[#0A0E1A]/80 rounded-sm backdrop-blur-md text-center">
                      <p className="text-[#E2BA5F]">Drag to rotate • Scroll to zoom</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveModel;
