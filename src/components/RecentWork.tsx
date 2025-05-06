import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({ imagePath }: { imagePath: string }) => (
  <div className="min-w-[500px] mx-4 h-[300px]">
    <img
      src={imagePath}
      alt="Project"
      className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    />
  </div>
);

const RecentWork = () => {
  const images = [
    '/images/MockupMVP@.jpg',
    '/images/MockupMVP3.jpg',
    '/images/MockupMVP4.jpg',
    '/images/Mockup6.jpg',
    '/images/Mockup7.jpg'
  ];

  return (
    <section className="py-16 overflow-hidden relative">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(/images/backart2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex"
        >
          {[...Array(2)].map((_, outerIndex) => (
            images.map((image, index) => (
              <WorkCard key={`${outerIndex}-${index}`} imagePath={image} />
            ))
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWork;