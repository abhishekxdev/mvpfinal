import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ name, role, company, content, image }) => (
  <motion.div 
    className="box relative transform-gpu preserve-3d rounded-2xl p-8 bg-white"
    style={{
      transformStyle: 'preserve-3d',
      borderRadius: '16px'
    }}
  >
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} @ {company}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Anubhav",
      role: "Co-Founder and CTO",
      company: "Nuro AI",
      content: "I've worked with agencies before, but none have matched the level of dedication and detail MVP Studio brought to the table. From our first call, they understood our vision, user needs, and brand identity. They designed and built an MVP that not only looked beautiful but also functioned without a hitch.",
      image: "/images/anubhav.jpeg"
    },
    {
      name: "Sourav M",
      role: "Founder",
      company: "Wealth AI",
      content: "We needed a quick launch and MVP Studio delivered big time. Their UI/UX sense is unmatched.",
      image: "/images/sourav.jpeg"
    },
    {
      name: "David",
      role: "Founder",
      company: "Mono",
      content: "We were under pressure to launch fast, and MVP Studio came through with flying colors. Their approach to product development is lean, focused, and insanely efficient. ",
      image: "/images/daveed.jpeg"
    },
    {
      name: "Mira",
      role: "Co-Founder and CEO",
      company: "Planirium",
      content: "MVP Studio didn't just build what we asked—they questioned, iterated, and improved it. They became a real thought partner in our startup journey. We were struggling with defining our product scope, but their clarity and product thinking helped us focus on what actually mattered to users.",
      image: "/images/MIRA.jpeg"
    },
    {
      name: "Shelina",
      role: "Founder and CEO",
      company: "Flexfi",
      content: "What stood out to me about MVP Studio was how invested they became in our mission. They weren't just executing tasks—they were brainstorming ideas, challenging assumptions, and proactively suggesting improvements.",
      image: "/images/shelina.jpeg"
    },
    {
      name: "Raghu",
      role: "Founder",
      company: "Mono",
      content: "We were under pressure to launch fast, and MVP Studio came through with flying colors. Their approach to product development is lean, focused, and insanely efficient. ",
      image: "/images/raghu.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50" ref={ref}>
      <style>
        {`
          .box {
            position: relative;
            transform-style: preserve-3d;
            border-radius: 16px;
          }
          
          .box::before {
            content: "";
            position: absolute;
            inset: -1px;
            background: conic-gradient(from 90deg at 40% -25%, #4F46E5, #7C3AED, #6366F1, #4F46E5, #7C3AED, #6366F1, #4F46E5);
            filter: blur(10px);
            transform: translate3d(-12px,17px,-1px);
            border-radius: inherit;
            pointer-events: none;
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
          <h2 className="heading-lg mb-4 gradient-text font-sans">Hear why people recommend us</h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-600 font-sans">
            Your satisfaction is my top priority. I'm honored to share the positive experiences and feedback from the wonderful clients I've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;