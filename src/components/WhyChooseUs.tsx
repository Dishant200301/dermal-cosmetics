import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowIcon } from './icons';
import { AnimatedButton } from './AnimatedButton';

// ====================================================================
// FRAMER MOTION VARIANTS (Defined once for reuse)
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
      staggerChildren: 0.15, // Delay between the start of each child's animation
    }
  }
};

// Team Members Card Component with Count Animation
const TeamMembersCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 29, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <div
      ref={ref}
      className="md:hidden bg-[#1C4942] text-white rounded-[24px] p-6 w-full flex flex-col items-center justify-center shadow-2xl mt-8 lg:left-0"
    >
      <Users className="w-10 h-10 mb-3" strokeWidth={1.5} />
      <div className="text-[42px] font-serif leading-none mb-2">
        <motion.span>{rounded}</motion.span>+
      </div>
      <div className="text-[14px] font-medium opacity-90">Team Members</div>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    'Commitment to Excellence in Skin Health',
    'State-of-the-Art Facility and Technology',
    'Trusted by Thousands of Satisfied Patients',
  ];

  return (
    <section className="bg-[#fef7f8] py-10 md:py-[60px] lg:py-[80px]">
      <div className=" mx-auto px-[5%] md:px-[7%] lg:px-0 xl:px-28 max-w-[1440px]">

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-0 items-center">

          {/* LEFT COLUMN - Images (Single Animation Block) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeInUp}
            className="relative mb-16 md:mb-20 lg:mb-0"
          >
            <div className="group relative w-full max-w-[400px] mx-auto lg:mx-20 xl:mx-0 overflow-hidden rounded-[30px] md:rounded-[40px]">

              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop"
                alt="Dermatologist examining patient"
                className="w-full h-[380px] md:h-[520px] lg:h-[580px] object-cover transition-transform duration-700 "
              />
            </div>

            <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 lg:-right-16 xl:right-20 w-[85%] md:w-[320px] lg:w-[340px]">
              <div className="group relative overflow-hidden rounded-[20px]">

                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop"
                  alt="Skin treatment procedure"
                  className="w-full h-[200px] md:h-[220px] object-cover rounded-[20px] border-[6px] border-[#FDF4F4] shadow-2xl transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Content (STAGGER CONTAINER) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer} // Parent controls the stagger sequence
            className="flex flex-col justify-center pt-4 lg:pt-0"
          >

            {/* 1. Tagline */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1C4942]"></span>
              <span className="text-[#6B6B6B] font-medium text-[14px] md:text-[15px] uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h2 variants={fadeInUp} className="font-heading text-[#1C4942] text-[28px] md:text-[36px] lg:text-[30px] xl:text-[40px] leading-[110%] mb-5 lg:mb-6">
              Why choose us for all your dermatology needs
            </motion.h2>

            {/* 3. Description */}
            <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-[16px] md:text-[17px] lg:text-[18px] xl:text-[16px] leading-[1.7] mb-8 lg:mb-10 max-w-[600px]">
              We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
            </motion.p>

            {/* 4. Feature List + Team Card Grid (The content of this grid is the 4th motion block) */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-10 xl:gap-6 items-start">

              {/* Left Column: Feature List + Buttons */}
              <div className="flex flex-col gap-6 md:gap-8">

                {/* Feature List - The list items themselves can be staggered for a cooler effect */}
                <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-8 lg:gap-x-10">
                  {/* Since the outer div already uses fadeInUp, we manually apply stagger here to the LI items */}
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      // Manual transition for nested stagger effect: starts after previous block
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2 + (index * 0.1) // Base delay + sequential delay
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 mt-0.5 rounded-sm bg-[#1C4942] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-body text-[#7B798C] text-[16px] md:text-[17px] lg:text-[18px] xl:text-[16px] leading-relaxed md:whitespace-nowrap">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Buttons - Below Checklist (Treated as one motion block, still part of the outer stagger) */}
                <div className="flex flex-row md:flex-col lg:flex-col xl:flex-row gap-3 md:gap-3">

                  {/* About More Button - Animated Slide Effect */}
                  <AnimatedButton to="/about" variant="primary" >
                    About Us
                  </AnimatedButton>

                  {/* Play Session Button */}
                  <AnimatedButton to="/play-session" variant="secondary" className='border border-[#1C4942]' showArrow={false}>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full border border-current">
                        <Play className="w-3 h-3 fill-current" />
                      </span>
                      <span>Play Session</span>
                    </div>
                  </AnimatedButton>
                </div>

                {/* Team Card - Mobile Only (Below Buttons) */}
                <TeamMembersCard />

              </div>

              {/* Team Card - Tablet & Desktop Only (Right of Features + Buttons) */}
              <div className="
                hidden md:flex lg:hidden xl:flex
                bg-[#1C4942] text-white 
                rounded-[24px] 
                p-6 
                
                /* Responsive width & height - XL matches reference */
                w-[196px]           /* Tablet/Desktop: Fixed 196px */
                xl:w-[160px]        /* XL: Narrower (160px) */
                
                h-[238px]           /* Tablet/Desktop: 238px */
                xl:h-[220px]        /* XL: Taller (280px) */
                
                flex-col items-center justify-center 
                shadow-2xl 
                flex-shrink-0
              ">
                <Users className="w-12 h-12 mb-3" strokeWidth={1.5} />
                <div className="text-[42px] md:text-[46px] lg:text-[50px] font-serif leading-none mb-2">29+</div>
                <div className="text-[14px] md:text-[15px] font-medium opacity-90">Team Members</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;