import React from 'react';
import { motion } from 'framer-motion';

const OurStory: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="client/public/images/grid-3.jpg"
          alt="Gulfstream legacy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-6"
          >
            Our <span className="text-primary">Legacy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl"
          >
            For over 60 years, we've been committed to creating and delivering the
            world's finest aviation experience.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="heading-lg mb-6"
              >
                The Art of <span className="text-primary">Excellence™</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted"
              >
                We're driven by our endless pursuit of excellence. We boldly
                anticipate your future needs, elevating aviation to an art form.
              </motion.p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="client/public/images/luxury-1.jpg"
                alt="Gulfstream vision"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="space-y-12">
            {/* Add timeline items here */}
            <TimelineItem
              year="1958"
              title="The Beginning"
              description="Gulfstream I becomes the first aircraft specifically designed and developed for business travel."
            />
            <TimelineItem
              year="1967"
              title="Setting New Standards"
              description="The Gulfstream II introduces new capabilities in business aviation."
            />
            <TimelineItem
              year="2008"
              title="Revolutionary Design"
              description="Launch of the revolutionary Gulfstream G650, setting new standards in business aviation."
            />
            <TimelineItem
              year="2024"
              title="The Future of Aviation"
              description="Continuing to push boundaries with the latest innovations in aerospace technology."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
}> = ({ year, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex gap-8"
  >
    <div className="w-24 md:w-48 shrink-0">
      <span className="text-primary text-2xl md:text-3xl font-light">{year}</span>
    </div>
    <div className="flex-1 pb-8 border-b border-accent/20">
      <h3 className="text-xl md:text-2xl font-light mb-4">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  </motion.div>
);

export default OurStory; 
