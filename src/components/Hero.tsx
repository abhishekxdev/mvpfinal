import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
  <section 
  id="home" 
  className="pt-[240px] pb-16 md:pt-[250px] md:pb-24 overflow-hidden"
  ref={ref}
>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center mb-12"
        >
         
          
<h1 className="text-5xl md:text-7xl font-inter font-extrabold text-black mb-2 leading-[1.2]">
  Start Smart – MVPs That<br />
  <span className="font-inter font-extrabold gradient-text">Dominate</span> and <span className="font-inter font-extrabold gradient-text leading-[1.2]">Grow</span><br />
</h1>

          <p className="text-black mb-8 max-w-2xl mx-auto">
           Launch with confidence — we develop MVPs across Web, Mobile, and AI to help you validate before scaling.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
<a 
  href="#pricing" 
  className="inline-block px-6 py-3 rounded-lg border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
>
  <span className="block text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
    View Our Plans
  </span>
</a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;