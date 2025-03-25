import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle, CheckCircle, ChevronDown, ChevronRight, Plane } from 'lucide-react';
import { useAuth } from '@/utils/authContext';

const ServiceBooking: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Current date for calculations
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate future months (current month + 6 months minimum)
  const futureMonths = Array.from({ length: 8 }, (_, i) => {
    const futureDate = new Date(currentYear, currentMonth + 6 + i, 1);
    return {
      month: futureDate.toLocaleString('default', { month: 'long' }),
      year: futureDate.getFullYear(),
      dates: Array.from({ length: 3 }, (_, j) => {
        const day = 10 + j * 5;
        return {
          day,
          formattedDate: `${futureDate.toLocaleString('default', { month: 'short' })} ${day}, ${futureDate.getFullYear()}`,
          available: Math.random() > 0.5,
          timeSlots: [
            { time: '9:00 AM', available: Math.random() > 0.5 },
            { time: '2:00 PM', available: Math.random() > 0.6 }
          ]
        };
      })
    };
  });

  const serviceTypes = [
    { id: 'regular', name: 'Regular Maintenance', duration: '1-2 days', description: 'Standard aircraft inspection and maintenance service.' },
    { id: 'comprehensive', name: 'Comprehensive Service', duration: '3-5 days', description: 'Detailed inspection and servicing of all aircraft systems.' },
    { id: 'avionics', name: 'Avionics Update', duration: '2-3 days', description: 'Software and hardware updates for all avionics systems.' },
    { id: 'interior', name: 'Interior Refurbishment', duration: '7-14 days', description: 'Complete interior cleaning, repair, and refurbishment.' }
  ];

  const handleBookService = () => {
    if (selectedDate && selectedService) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 md:p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <Plane className="w-8 h-8 text-white/70" />
          </div>
          <h1 className="text-4xl font-light text-white mb-2">Aircraft Service Booking</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Schedule premium maintenance for your Gulf Stream aircraft with our certified technicians.
          </p>
        </motion.div>

        {/* Booking Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4"
        >
          <div className="mt-1 shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-amber-400 font-medium mb-1">Limited Availability</h3>
            <p className="text-white/70 text-sm">
              Due to high demand, our service appointments are currently booked 6+ months in advance, 
              with only 2 service slots available per day. 
              We prioritize our elite members and appreciate your understanding.
            </p>
          </div>
        </motion.div>

        {showConfirmation ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-light text-white mb-2">Service Appointment Confirmed</h2>
            <p className="text-white/70 mb-6">
              Your service has been scheduled for {selectedDate} for {serviceTypes.find(s => s.id === selectedService)?.name}.
            </p>
            <div className="bg-white/5 rounded-xl p-6 text-left mb-6">
              <h3 className="text-white/90 text-lg mb-4 font-light">Appointment Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90">{selectedDate}</p>
                    <p className="text-white/50 text-sm">Please arrive 30 minutes prior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90">Duration: {serviceTypes.find(s => s.id === selectedService)?.duration}</p>
                    <p className="text-white/50 text-sm">Loaner aircraft available upon request</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowConfirmation(false)}
              className="bg-white/10 hover:bg-white/15 text-white py-3 px-6 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              Return to Booking
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service Types */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                <h2 className="text-xl font-light text-white mb-6">Select Service Type</h2>
                <div className="space-y-3">
                  {serviceTypes.map((service) => (
                    <motion.div
                      key={service.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedService === service.id
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-white/5 border border-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-white">{service.name}</h3>
                        <span className="text-white/50 text-sm">{service.duration}</span>
                      </div>
                      <p className="text-white/60 text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Calendar Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                <h2 className="text-xl font-light text-white mb-6">Select Service Date</h2>
                
                <div className="overflow-auto pb-2">
                  <div className="space-y-6">
                    {futureMonths.map((month, monthIndex) => (
                      <div key={`${month.month}-${month.year}`} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-white/90 mb-4 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-white/50" />
                          {month.month} {month.year}
                          {monthIndex === 0 && (
                            <span className="text-xs text-white/40 ml-2 bg-white/10 px-2 py-1 rounded-full">
                              Earliest Availability
                            </span>
                          )}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {month.dates.map((date) => (
                            <div
                              key={date.formattedDate}
                              className={`p-3 rounded-xl border ${
                                !date.available
                                  ? 'bg-white/5 border-white/5 opacity-50'
                                  : selectedDate === date.formattedDate
                                  ? 'bg-white/15 border-white/20'
                                  : 'bg-white/10 border-white/10 hover:bg-white/15'
                              } transition-all duration-300`}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="text-white font-light">{date.formattedDate}</h4>
                                {!date.available && (
                                  <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                                    Booked
                                  </span>
                                )}
                              </div>
                              
                              {date.available && (
                                <div className="space-y-2 mt-3">
                                  <p className="text-xs text-white/40 mb-2">Only 2 slots available per day</p>
                                  {date.timeSlots.map((slot) => (
                                    <button
                                      key={slot.time}
                                      disabled={!slot.available}
                                      onClick={() => setSelectedDate(date.formattedDate)}
                                      className={`w-full py-2 px-3 rounded-lg text-sm ${
                                        !slot.available
                                          ? 'bg-white/5 text-white/30'
                                          : selectedDate === date.formattedDate
                                          ? 'bg-blue-500/20 text-blue-400'
                                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                                      } transition-all duration-300`}
                                    >
                                      {slot.time}
                                      {!slot.available && ' - Reserved'}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Booking Button */}
        {!showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={handleBookService}
              disabled={!selectedDate || !selectedService}
              className={`px-8 py-3 rounded-full flex items-center gap-2 font-light transition-all duration-300 ${
                !selectedDate || !selectedService
                  ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Reserve Service Appointment
            </button>
          </motion.div>
        )}

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6">
            <h3 className="text-white/80 text-lg mb-2 font-light">24/7 Support</h3>
            <p className="text-white/50 text-sm">
              Emergency service available worldwide for our elite members
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-white/80 text-lg mb-2 font-light">Priority Status</h3>
            <p className="text-white/50 text-sm">
              Owner members receive priority scheduling for critical maintenance
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-white/80 text-lg mb-2 font-light">Global Network</h3>
            <p className="text-white/50 text-sm">
              Service centers in 35 countries with factory-trained technicians
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBooking; 