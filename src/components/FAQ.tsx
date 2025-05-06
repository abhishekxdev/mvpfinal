import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`mb-6 rounded-2xl overflow-hidden transition-all ${
        isOpen ? 'bg-white shadow-lg border border-indigo-100' : 'bg-white/50 border border-gray-200'
      }`}
    >
      <button
        className="w-full text-left px-8 py-6 font-semibold flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-gray-900 text-lg ${isOpen ? 'gradient-text' : ''}`}>{question}</span>
        <ChevronDown 
          className={`transition-transform duration-300 ease-in-out text-indigo-600 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-600 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Who Do You Work With?',
      answer: 'We work with startups, SaaS companies, e-commerce businesses, and B2B service providers looking to enhance their digital presence and user experience. Our clients range from early-stage startups to established businesses seeking a design refresh.',
    },
    {
      question: 'Do You Offer Refunds?',
      answer: 'Yes, we offer a satisfaction guarantee. If you\'re not happy with our work and we can\'t resolve the issues to your satisfaction, we offer partial refunds based on the work completed. However, this rarely happens as we ensure clear communication and multiple review points throughout the process.',
    },
    {
      question: 'When Can You Start?',
      answer: 'We can typically start new projects within 1-2 business days after the initial consultation and contract signing. Our streamlined onboarding process ensures we can begin bringing your vision to life quickly.',
    },
    {
      question: 'How Do We Communicate?',
      answer: 'We use a combination of tools like Slack, WhatsApp, or Telegram for quick daily communications, and regular video calls for more in-depth discussions. We believe in maintaining clear, consistent communication throughout the project.',
    },
    {
      question: 'Do You Offer On-Going Support?',
      answer: 'Yes, we offer ongoing support packages for all our clients. After project completion, you can choose from different support tiers based on your needs, from basic maintenance to continuous improvements and updates.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 gradient-text">Have Questions?</h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our design process, pricing, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 mt-12"
        >
          Need help with something else? Simply send us an email at{' '}
          <a href="mailto:support@mvpstudio.com" className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
            support@mvpstudio.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;