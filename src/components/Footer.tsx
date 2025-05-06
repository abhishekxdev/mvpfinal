import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <footer ref={ref} className="relative bg-white text-gray-900 pt-16 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="mb-8">
              <img
                src="/images/Variant 1.png"
                alt="MVPStudio"
                className="h-16"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">Let's Build Something Great Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a free call or send us a message and let's discuss your project!
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-8"
            >
              <a
                href="https://cal.com/mimic/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-bold text-lg transition-all duration-300 shadow-[0_8px_16px_rgba(99,102,241,0.2)] hover:shadow-[0_12px_24px_rgba(99,102,241,0.3)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_4px_8px_rgba(99,102,241,0.2)]"
              >
                Book a Free Intro Call
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start gap-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <p className="text-gray-500">
                  ©{currentYear} MVPStudio. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                  <a href="#" className="hover:text-gray-900 transition-colors">Careers</a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-full hidden md:flex justify-center md:justify-end pb-8"
          >
            <img
              src="/images/Iphonemockup-Photoroom.png"
              alt="iPhone Mockup"
              className="w-auto h-[400px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;