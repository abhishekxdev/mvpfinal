import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us?', href: '#why-us' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="mx-auto max-w-[980px] bg-white rounded-full border border-gray-200 shadow-lg px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/images/Variant 1.png"
              alt="MVP Experience"
              className="h-16 w-52 object-contain"
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex gap-4 text-[17px] text-gray-600">
            <a href="#why-us" className="hover:text-gray-900 transition-colors">Why Us?</a>
            <a href="#portfolio" className="hover:text-gray-900 transition-colors">Our Work</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQs</a>
          </div>

          {/* CTA and Social Buttons */}
          <div className="flex items-center gap-4">
            {/* X (Twitter) Button */}
            <a
              href="https://x.com/abhishekxbiz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center"
            >
              <img
                src="/images/xlogo-Photoroom.png"
                alt="X (Twitter)"
                className="h-12 w-13"
              />
            </a>

            {/* Book Call Button */}
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-3 rounded-lg border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              <span className="block text-center font-bold text-[16px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
                Let's Build Your Idea
              </span>
            </a>

            {/* Mobile CTA */}
            <a
              href="https://calendly.com/vishnoiabhishek29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden px-3 py-1.5 rounded-[54.69px] border border-indigo-500/20 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(99,102,241,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              <span className="block text-center font-bold text-[13px] tracking-[-0.02em] text-white font-[Manrope,sans-serif]">
                Book Call
              </span>
            </a>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white absolute top-full w-full border-t border-gray-200"
        >
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Mobile X (Twitter) Link */}
              <li>
                <a
                  href="https://x.com/abhishekxbiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <img
                    src="/images/xlogo-Photoroom.png"
                    alt="X (Twitter)"
                    className="h-4 w-4"
                  />
                  <span>Follow on X</span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;