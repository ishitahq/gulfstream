import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Wrench, Plane, Users } from 'lucide-react';

const SUPPORT_FEATURES = [
  {
    icon: Shield,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated support team.'
  },
  {
    icon: Wrench,
    title: 'Technical Operations',
    description: 'Expert maintenance and repair services worldwide.'
  },
  {
    icon: Plane,
    title: 'Parts & Materials',
    description: 'Rapid access to genuine Gulfstream parts and materials.'
  },
  {
    icon: Users,
    title: 'Training',
    description: 'Comprehensive training programs for flight and maintenance crews.'
  }
];

const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Technical Operations',
    content: '+1 (800) 810-4853',
    description: 'Available 24/7 for technical assistance'
  },
  {
    icon: Mail,
    title: 'Email Support',
    content: 'support@gulfstream.com',
    description: 'For general inquiries and support'
  },
  {
    icon: MapPin,
    title: 'Service Centers',
    content: 'Worldwide Locations',
    description: 'Find your nearest service center'
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 1 Hour',
    description: 'For critical support requests'
  }
];

const CustomerSupport: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="client/public/images/customer-support-hero.jpg"
          alt="Customer Support"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-6"
          >
            Customer <span className="text-primary">Support</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl"
          >
            Exceptional service and support, wherever you are in the world.
          </motion.p>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SUPPORT_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-secondary/10 rounded-lg"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Contact <span className="text-primary">Information</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_INFO.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-2">{info.title}</h3>
                <p className="text-primary mb-2">{info.content}</p>
                <p className="text-sm text-muted">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="heading-lg mb-6"
              >
                Global Service <span className="text-primary">Network</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted mb-8"
              >
                With service centers strategically located worldwide, Gulfstream
                ensures your aircraft receives the highest level of maintenance
                and support, no matter where your journey takes you.
              </motion.p>
              <ul className="space-y-4 text-muted">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Factory-authorized service centers
                </li>
                <li className="flex items-center">
                  <Wrench className="w-5 h-5 text-primary mr-3" />
                  Certified technicians and engineers
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  Rapid response teams
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="client/public/images/grid-2.jpg"
                alt="Global Service Network"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomerSupport; 
