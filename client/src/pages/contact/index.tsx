import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const OFFICE_LOCATIONS = [
  {
    name: 'Headquarters',
    address: '500 Gulfstream Road',
    city: 'Savannah, GA 31407',
    phone: '+1 (912) 965-3000',
    email: 'info@gulfstream.com'
  },
  {
    name: 'Sales & Design Center',
    address: '1850 Parkway Place',
    city: 'Marietta, GA 30067',
    phone: '+1 (770) 951-8200',
    email: 'sales@gulfstream.com'
  },
  {
    name: 'European Service Center',
    address: 'Aerospace Allee 3',
    city: 'Brunswick, Germany 38108',
    phone: '+49 531 2399 0',
    email: 'europe@gulfstream.com'
  }
];

const Contact: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-6"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl"
          >
            Get in touch with our team for inquiries about our aircraft and services.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Send us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-muted mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="heading-lg mb-6"
              >
                Our <span className="text-primary">Locations</span>
              </motion.h2>
              <div className="space-y-8">
                {OFFICE_LOCATIONS.map((office, index) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-secondary/10 rounded-lg"
                  >
                    <h3 className="text-xl font-light mb-4">{office.name}</h3>
                    <div className="space-y-3 text-muted">
                      <p className="flex items-center">
                        <MapPin className="w-5 h-5 text-primary mr-3" />
                        {office.address}
                        <br />
                        {office.city}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-5 h-5 text-primary mr-3" />
                        {office.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-5 h-5 text-primary mr-3" />
                        {office.email}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Support <span className="text-primary">Hours</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center"
          >
            <Clock className="w-6 h-6 text-primary mr-3" />
            <p className="text-lg">
              Technical Operations available{' '}
              <span className="text-primary">24/7/365</span>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 