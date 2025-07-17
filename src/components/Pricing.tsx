import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, popular, delay, inView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative transform-gpu p-6 mt-6 flex flex-col h-full overflow-hidden"
    >
      {popular && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold py-1.5 px-6 rounded-full shadow-md z-20">
          Most Popular
        </div>
      )}
      
      <div className="relative z-10 bg-white rounded-2xl h-full w-full overflow-hidden shadow-lg">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url(/images/pricingbg.JPG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 flex flex-col h-full p-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
            <div className="flex justify-center items-end mb-2">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full block text-center py-3 rounded-full font-bold relative ${
                popular 
                  ? 'btn-gradient'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 transition-colors'
              }`}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingOptions = [
    {
      title: 'Landing Page Design',
      price: 'Rs. 20,000',
      features: [
        'Single Page Design',
        'Responsive Layout',
        'Basic SEO Setup',
        'Contact Form Integration',
        '5 Day Delivery',
       
        '2 design concepts',
        'Basic support',
      ],
      popular: false,
      delay: 0.1,
    },
    {
      title: 'Standard Full Stack Website',
      price: 'Rs. 50,000',
      features: [
        'Website ready in 2-3 weeks',
        'Web & mobile apps with modern, scalable tech',
        'Seamless integrations: payments, auth & more',
        '30 days free maintenance post-launch',
        'Founder-led, personalized development',
        'Transparent process with regular updates',
      ],
      popular: false,
      delay: 0.2,
    },
    {
      title: 'Growth Plan',
      price: 'Rs. 75,000',
      features: [
        '60 hours of dev time each month',
        'Flexible hours, tailored to your needs',
        'Weekly strategy & progress calls',
        'Priority handling for key features',
        'Ongoing maintenance & improvements',
        'Same-day response for urgent issues'
      ],
      popular: true,
      delay: 0.3,
    }
  ];

  return (
    <section id="pricing" className="section-padding relative" ref={ref}>
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(/images/pricingbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1
        }}
      ></div>
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 gradient-text">Simple Pricing</h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-600">
            Choose the package that suits your needs. All prices are transparent with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;