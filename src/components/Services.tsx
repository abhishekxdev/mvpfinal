import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, images, delay, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="relative group flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[200px] w-full perspective-1000 flex justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-[200px] transition-all duration-500 ${
              index === 0 
                ? 'z-20 -rotate-12 -translate-x-6' 
                : index === 1 
                ? 'z-10 rotate-0' 
                : 'rotate-12 translate-x-6'
            } ${
              isHovered 
                ? `${index === 0 ? '-translate-y-4 scale-110' : index === 1 ? '-translate-y-2 scale-105' : 'scale-100'}`
                : ''
            }`}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={image} 
                alt={`${title} example ${index + 1}`}
                className="w-full h-[120px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mt-8 text-center">{title}</h3>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Websites',
      images: [
        'https://framerusercontent.com/images/FXuSPfOHqoXncL66rl9o1qw84g0.png',
        'https://framerusercontent.com/images/bmMuVSstg1QzluMf2AG0sb1fcg.png',
        'https://framerusercontent.com/images/NG72MSdIwX2XKu3AGU6z09ZsTqE.png',
      ],
      delay: 0.2,
    },
    {
      title: 'Mobile Apps',
      images: [
        'https://framerusercontent.com/images/bmMuVSstg1QzluMf2AG0sb1fcg.png',
        'https://framerusercontent.com/images/NG72MSdIwX2XKu3AGU6z09ZsTqE.png',
        'https://framerusercontent.com/images/FXuSPfOHqoXncL66rl9o1qw84g0.png',
      ],
      delay: 0.3,
    },
    {
      title: 'Product Design',
      images: [
        'https://framerusercontent.com/images/NG72MSdIwX2XKu3AGU6z09ZsTqE.png',
        'https://framerusercontent.com/images/FXuSPfOHqoXncL66rl9o1qw84g0.png',
        'https://framerusercontent.com/images/bmMuVSstg1QzluMf2AG0sb1fcg.png',
      ],
      delay: 0.4,
    },
    {
      title: 'Logo Design',
      images: [
        'https://framerusercontent.com/images/QOOvVUDrsCHb6NNj1HE5qVf7pRU.png',
        'https://framerusercontent.com/images/ReE5VxeaG69Q3rEmttg0oAqo04g.png',
        'https://framerusercontent.com/images/FXuSPfOHqoXncL66rl9o1qw84g0.png',
      ],
      delay: 0.5,
    },
    {
      title: 'Branding',
      images: [
        'https://framerusercontent.com/images/ReE5VxeaG69Q3rEmttg0oAqo04g.png',
        'https://framerusercontent.com/images/QOOvVUDrsCHb6NNj1HE5qVf7pRU.png',
        'https://framerusercontent.com/images/NG72MSdIwX2XKu3AGU6z09ZsTqE.png',
      ],
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#f1f5f9]" ref={ref}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;