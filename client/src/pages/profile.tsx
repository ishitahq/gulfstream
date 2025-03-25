import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { User, Mail, MapPin, Phone, Calendar, Shield, LogOut, Wrench, ArrowRight } from 'lucide-react';
import { useAuth } from '@/utils/authContext';

const Profile: React.FC = () => {
  const { logout } = useAuth();
  const [, setLocation] = useLocation();
  
  // Handle logout
  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  // Mock user data - in a real app, this would come from your backend
  const userData = {
    name: 'Alexander Wright',
    email: 'a.wright@gulfstream.com',
    location: 'New York, United States',
    phone: '+1 (555) 123-4567',
    memberSince: 'March 2024',
    aircraft: 'G800',
    flightHours: '342',
    nextService: 'April 15, 2024'
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
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <User className="w-16 h-16 text-white/70" />
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-light text-white">{userData.name}</h1>
          <p className="text-white/60 mt-2 font-light">Gulf Stream Elite Member</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-light text-white mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <Mail className="w-5 h-5" />
                <span className="font-light">{userData.email}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <MapPin className="w-5 h-5" />
                <span className="font-light">{userData.location}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Phone className="w-5 h-5" />
                <span className="font-light">{userData.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Calendar className="w-5 h-5" />
                <span className="font-light">Member since {userData.memberSince}</span>
              </div>
            </div>
          </motion.div>

          {/* Aircraft Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-light text-white mb-6">Aircraft Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-sm mb-1">Current Aircraft</p>
                  <p className="text-white font-light text-lg">{userData.aircraft}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-sm mb-1">Flight Hours</p>
                  <p className="text-white font-light text-lg">{userData.flightHours}h</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-white/50 text-sm mb-1">Next Scheduled Service</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-light">{userData.nextService}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLocation('/service-booking')}
                    className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 transition-colors"
                  >
                    Schedule Service
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-white text-lg font-light">Aircraft Servicing</h3>
                <p className="text-white/60 text-sm">Schedule maintenance for your Gulf Stream aircraft</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLocation('/service-booking')}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Book Service
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex justify-end"
        >
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-6 py-3 rounded-full font-light transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 