import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '@/styles/globals.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="min-h-screen"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </div>
  );
} 