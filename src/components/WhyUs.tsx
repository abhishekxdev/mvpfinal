import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageCard = ({ image, title, description }) => (
  <motion.div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="w-full aspect-[4/3]">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ScrollingTags = () => {
  const tags = [
    'Website Redesign', 'App Design', 'Branding', 'Pitch Decks',
    'No-Code Development', 'User Interface', 'Branding', 'Graphic Design',
    'Website Redesign', 'App Design', 'Branding', 'No-Code Development'
  ];

  return (
    <div className="overflow-hidden w-full mt-12">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ['0%', '-120%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...tags, ...tags].map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-indigo-100/50 text-indigo-600 text-sm"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Solo-Founders",
      description: "",
      image: '/images/who1.png',
      delay: 0.2,
    },
    {
      title: "Start-ups",
      description: "",
      image: '/images/Wh02.png',
      delay: 0.3,
    },
    {
      title: "Agencies",
      description: "",
      image: '/images/who3.png',
      delay: 0.4,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Who is it for?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It's for everyone who has any design needs but majority of our clients can be categorised into the below mentioned categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: category.delay }}
            >
              <ImageCard {...category} />
            </motion.div>
          ))}
        </div>

        <ScrollingTags />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mt-12"
        >
          <a
            href="https://calendly.com/vishnoiabhishek29/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            <span className="block text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
              Book free Discovery Call
            </span>
          </a>

          <a
            href="#pricing"
            className="px-6 py-3 rounded-lg border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            <span className="block text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
              View our Plans
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;