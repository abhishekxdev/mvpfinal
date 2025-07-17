import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type PortfolioItemProps = {
  title: string;
  description: string;
  image: string;
  categories: string[];
  services: string;
  delay: number;
  inView: boolean;
};

const PortfolioItem = ({ title, description, image, categories, services, delay, inView }: PortfolioItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative transform-gpu rounded-2xl overflow-hidden box"
      style={{
        transformStyle: 'preserve-3d',
        borderRadius: '16px'
      }}
    >
      <div className="relative z-10 bg-white rounded-2xl">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category: string, index: number) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
            {services}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    {
      title: 'Horoscope AI',
      description: 'An AI-powered horoscope application that provides personalized astrological insights and predictions with modern design and intuitive user experience.',
      image: '/images/horoscope.PNG',
      categories: ['AI', 'Mobile App', 'Astrology'],
      services: 'App Design - AI Integration - UX/UI',
      delay: 0.2,
    },
    {
      title: 'CRM Dashboard',
      description: 'A comprehensive customer relationship management system with advanced analytics, lead tracking, and automated workflows for sales teams.',
      image: '/images/crm.png',
      categories: ['SaaS', 'CRM', 'Analytics'],
      services: 'Web Design - Dashboard Design - Data Visualization',
      delay: 0.3,
    },
    {
      title: 'Don Platform',
      description: 'A modern business platform designed to streamline operations and enhance productivity with clean interfaces and powerful functionality.',
      image: '/images/don.png',
      categories: ['Business', 'Platform', 'Productivity'],
      services: 'Web Design - Platform Development - UX Strategy',
      delay: 0.4,
    },
    {
      title: 'Email AI Assistant',
      description: 'An intelligent email management system that uses AI to automate responses, categorize emails, and improve communication efficiency.',
      image: '/images/emailai.png',
      categories: ['AI', 'Email', 'Automation'],
      services: 'AI Integration - Email Design - Automation',
      delay: 0.5,
    },
    {
      title: 'Nuro Deep Analytics',
      description: 'Advanced analytics platform providing deep insights into business data with interactive visualizations and predictive modeling capabilities.',
      image: '/images/nurodeep.png',
      categories: ['Analytics', 'Data Science', 'SaaS'],
      services: 'Data Visualization - Analytics Design - Dashboard',
      delay: 0.6,
    },
    {
      title: 'Outreach Pro',
      description: 'A comprehensive outreach and marketing automation platform designed to help businesses scale their customer acquisition efforts.',
      image: '/images/outreach.png',
      categories: ['Marketing', 'Automation', 'SaaS'],
      services: 'Web Design - Marketing Automation - UX Design',
      delay: 0.7,
    }
  ];

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <style>
        {`
          .box {
            position: relative;
            transform-style: preserve-3d;
          }
          
          .box::before {
            content: "";
            position: absolute;
            inset: -1px;
            background: conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700);
            filter: blur(4px);
            transform: translate3d(0px,-2px,-1px);
            border-radius: 5px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .box:hover::before {
            opacity: 1;
          }
        `}
      </style>
      
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 gradient-text">MVP's Built for Founders and Startups</h2>
          <p className="body-lg max-w-2xl mx-auto">
            We sign NDAs with all clients, so most projects aren't public and we can't share much code. If a preview exists, it's usually just the frontend clone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;