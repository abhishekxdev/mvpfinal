import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ image }) => (
  <motion.div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="w-full aspect-[4/3]">
      <img src={image} alt="Process step" className="w-full h-full object-cover rounded-2xl" />
    </div>
  </motion.div>
);

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      image: '/images/Container2.png'
    },
    {
      image: '/images/Container51.png'
    },
    {
      image: '/images/White1.png'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6 gradient-text">Why Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our process is a blend of art and efficiency. Learn how we take you from concept to launch with a seamless, collaborative approach designed for your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProcessStep {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;