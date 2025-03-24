import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_METHODS } from '@/utils/constants';

const ContactCTA = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone': return <Phone className="h-8 w-8 text-[#E2BA5F]" />;
      case 'mail': return <Mail className="h-8 w-8 text-[#E2BA5F]" />;
      case 'map-pin': return <MapPin className="h-8 w-8 text-[#E2BA5F]" />;
      default: return <Phone className="h-8 w-8 text-[#E2BA5F]" />;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581350845039-7f59f4ae41d5?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light mb-6 leading-tight">
            Experience the <span className="text-[#E2BA5F]">Future</span> of Private Aviation
          </h2>
          <p className="text-[#7A8EA8] text-lg max-w-2xl mx-auto mb-8">
            Connect with our team to arrange a personal consultation and discover how the G800 can elevate your travel experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button 
              className="px-8 py-4 bg-[#E2BA5F] text-[#0A0E1A] font-montserrat font-medium tracking-wide hover:bg-[#F2D792] transition duration-300 interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SCHEDULE A CONSULTATION
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-white/30 hover:border-white/80 font-montserrat tracking-wide transition duration-300 interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD BROCHURE
            </motion.button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CONTACT_METHODS.map((method, index) => (
            <motion.div 
              key={method.title}
              className="bg-[#040608]/80 backdrop-blur-md p-6 border border-[#5A6E8C]/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                {getIcon(method.icon)}
              </div>
              <h3 className="font-montserrat text-lg mb-2">{method.title}</h3>
              {method.link ? (
                <a 
                  href={method.link} 
                  className="text-[#7A8EA8] hover:text-[#E2BA5F] transition whitespace-pre-line"
                >
                  {method.info}
                </a>
              ) : (
                <address className="text-[#7A8EA8] not-italic whitespace-pre-line">
                  {method.info}
                </address>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
