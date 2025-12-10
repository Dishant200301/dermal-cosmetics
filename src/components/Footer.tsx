import { motion } from 'framer-motion'; // <-- Import motion
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Headphones, Facebook, Instagram, Dribbble } from 'lucide-react';
import { useState } from 'react';
import { ArrowIcon } from './icons';

// ====================================================================
// FRAMER MOTION VARIANTS
// ====================================================================

// 1. Variant for Individual Elements (Fade Up)
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.6, // Animation duration
            ease: "easeOut" 
        } 
    }
};

// 2. Container Variant (Staggering)
const staggerContainer = {
    hidden: {}, 
    visible: {
      transition: {
        staggerChildren: 0.15, // Delay between the start of each child's animation (0.15s)
      }
    }
};


export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#FEF7F8] pt-2 lg:pt-0">
      <div className=" mx-auto md:px-2 md:pb-2 lg:pb-6 lg:px-4">
        {/* Main Footer Content */}
        <div className="bg-[#24544B] lg:rounded-[30px] md:rounded-[30px] xl:rounded-[30px] px-6 sm:px-8 lg:px-16 xl:px-24 pt-16 lg:pt-20 pb-12 lg:pb-16 relative overflow-hidden">
          {/* Decorative Leaf - Bottom Left */}
          <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
            <img
              src="/image/leaf-bottom-left.png"
              alt="Decorative leaf"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-70 "
            />
          </div>

          {/* Decorative Leaf - Top Right */}
          <div className="absolute top-0 right-0 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
            <img
              src="/image/leaf-top-right.png"
              alt="Decorative leaf"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[900px] xl:h-[800px] opacity-70 "
            />
          </div>
          

          {/* 4 Column Grid (STAGGER CONTAINER) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer} // Parent controls the stagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative z-10"
          >
            {/* Column 1: Brand + Newsletter (1st item) */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img src="/image/logo.png" alt="" className="w-8 h-8 object-contain text-white" />
                </div>
                <span className="font-heading text-[28px] text-white">Dermal.</span>
              </Link>

              {/* Description */}
              <p className="font-body text-white text-base lg:text-lg leading-relaxed mb-6 max-w-sm">
                With a passion for skin health, Dermal combines the latest technologies.
              </p>

              {/* Email Subscribe */}
              <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg h-[60px] p-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 font-body text-[#7B798C] placeholder:text-[#7B798C] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-[50px] h-[50px] bg-[#24544B] rounded-lg flex items-center justify-center hover:bg-[#1C4942] transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowIcon />
                </button>
              </form>
            </motion.div>

            {/* Column 2: Contact Us (2nd item) */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-heading text-[22px] text-white mb-6">Contact Us</h3>
              <div className="space-y-5">
                {/* For more information */}
                <div className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] bg-white border-2 border-[#24544B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#24544B]" />
                  </div>
                  <div>
                    <p className="font-body text-white/80 text-sm mb-1">For more information</p>
                    <p className="font-body text-white text-base lg:text-lg">(702) 555-0122</p>
                  </div>
                </div>

                {/* Emergency toll free */}
                <div className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-[#24544B]" />
                  </div>
                  <div>
                    <p className="font-body text-white/80 text-sm mb-1">Emergency toll free no</p>
                    <p className="font-body text-white text-base lg:text-lg">(219) 555-0114</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Get In Touch (3rd item) */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-heading text-[22px] text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {/* Location */}
                <div>
                  <p className="font-body text-white/80 text-sm mb-1">Location</p>
                  <p className="font-body text-white text-base leading-relaxed">
                    6391 Elgin St. Santa Ana
                    <br />
                    Celina, Delaware 10299
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="font-body text-white/80 text-sm mb-1">Email</p>
                  <p className="font-body text-white text-base">info@domain.com</p>
                </div>
              </div>
            </motion.div>

            {/* Column 4: Quick Links (4th item) */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-heading text-[22px] text-white mb-6">Quick Link</h3>
              {/* To simplify staggering for the list, we treat the whole list as one motion item */}
              <ul className="space-y-3.5">
                <li>
                  <Link
                    to="/"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-body text-white text-lg hover:text-white/80 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar (5th item in the sequence) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} // Manually delay after the 4 columns finish (4 * 0.15s = 0.6s)
            className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.14] flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          >
            {/* Copyright */}
            <p className="font-body text-white text-base lg:text-lg">
              Copyright © 2025 All Rights Reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="font-body text-white text-base lg:text-lg mr-2">
                Follow Us On Social
              </span>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5 text-[#24544B]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#24544B]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#24544B]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};