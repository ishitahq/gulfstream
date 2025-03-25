import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CheckCircle, AlertCircle, RefreshCw, Shield } from 'lucide-react';
import { useAuth } from '@/utils/authContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    return () => {
      // Clean up video stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      setScanningState('scanning');
      setErrorMessage('');
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setScanningState('error');
      setErrorMessage('Camera access denied. Please enable camera permissions and try again.');
    }
  };

  const performFacialScan = () => {
    // Simulate facial recognition process
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Take a snapshot from the video
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Simulate facial recognition processing with timeout
        setTimeout(() => {
          // Simulate 90% success rate
          const success = Math.random() < 0.9;
          
          if (success) {
            setScanningState('success');
            // Simulate successful login after facial recognition
            setTimeout(() => {
              // Stop the video stream
              const stream = video.srcObject as MediaStream;
              if (stream) {
                stream.getTracks().forEach(track => track.stop());
              }
              // Set user as logged in
              login();
              // Redirect to profile page
              setLocation('/profile');
            }, 1500);
          } else {
            setScanningState('error');
            setErrorMessage('Face not recognized. Please try again.');
          }
        }, 2000);
      }
    }
  };

  const resetScan = () => {
    setScanningState('idle');
    setErrorMessage('');
    
    // Stop the video stream if it exists
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center"
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-light text-white mb-2">Gulf Stream</h1>
          <p className="text-white/60 text-sm">Secure Biometric Authentication</p>
        </div>
        
        <div className="mb-8 relative">
          <div className="aspect-video bg-black/30 rounded-xl overflow-hidden relative border border-white/10">
            <AnimatePresence mode="wait">
              {scanningState === 'idle' ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <p className="text-white/80 text-lg mb-4">Welcome to Gulf Stream</p>
                    <p className="text-white/60 text-sm px-4">
                      Please start the facial recognition process to access your account
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <video 
                    ref={videoRef}
                    autoPlay 
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                    onLoadedMetadata={performFacialScan}
                  />
                  <canvas 
                    ref={canvasRef} 
                    width="640" 
                    height="480" 
                    className="hidden"
                  />
                  
                  {scanningState === 'scanning' && (
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse flex flex-col items-center">
                          <span className="text-white text-lg font-light bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
                            Scanning...
                          </span>
                        </div>
                      </div>
                      
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[scan_2s_ease-in-out_infinite]"></div>
                    </div>
                  )}
                  
                  {scanningState === 'success' && (
                    <div className="absolute inset-0 border-2 border-green-500/50 rounded-xl flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-green-500/20 p-6 rounded-full"
                      >
                        <CheckCircle className="w-12 h-12 text-green-400" />
                      </motion.div>
                    </div>
                  )}
                  
                  {scanningState === 'error' && (
                    <div className="absolute inset-0 border-2 border-red-500/50 rounded-xl flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-red-500/20 p-6 rounded-full"
                      >
                        <AlertCircle className="w-12 h-12 text-red-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 mt-4 text-center text-sm"
            >
              {errorMessage}
            </motion.p>
          )}
        </div>
        
        <div className="flex justify-center">
          {scanningState === 'idle' && (
            <motion.button
              onClick={startCamera}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-light transition-all duration-300 border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-5 h-5" />
              Start Facial Recognition
            </motion.button>
          )}
          
          {scanningState === 'error' && (
            <motion.button
              onClick={resetScan}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-light transition-all duration-300 border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </motion.button>
          )}
        </div>
        
        <div className="mt-8 text-center text-sm text-white/40">
          <p>Advanced biometric security powered by Gulf Stream</p>
          <p className="mt-1">No biometric data is stored or processed</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login; 