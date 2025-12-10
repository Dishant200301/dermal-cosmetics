import React from "react";
import { motion } from "framer-motion"; // <-- Import motion

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


const stats = [
  {
    icon: (
      <img
        src="/image/about-icon-1.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Patient Satisfaction"
      />
    ),
    value: "96 %",
    label: "Patient Satisfaction Rate",
  },
  {
    icon: (
      <img
        src="/image/about-icon-2.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Years Of Experience"
      />
    ),
    value: "12 +",
    label: "Years Of Experience",
  },
  {
    icon: (
      <img
        src="/image/about-icon-3.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Successful Surgeries"
      />
    ),
    value: "1,000 +",
    label: "Successful Surgeries",
  },
  {
    icon: (
      <img
        src="/image/about-icon-4.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="State Of The Art Facility"
      />
    ),
    value: "30 +",
    label: "State-Of-The-Art Facility",
  },
];

export const StatsRow = () => {
  return (
    <section className="bg-[#FDF7F7] py-12">
      <div className="container mx-auto px-6 lg:px-20 xl:px-28">

        {/* Responsive Grid (STAGGER CONTAINER) */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >

          {stats.map((stat, index) => (
            <motion.div 
                key={index} 
                variants={fadeInUp} // Apply individual fade-up animation to each stat block
                className="flex flex-col items-start space-y-2"
            >

              {/* Icon + Value (always left icon, right value) */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{stat.icon}</div>

                <p className="font-heading text-[32px] md:text-[36px] lg:text-[40px] text-[#1C4942] leading-none">
                  {stat.value}
                </p>
              </div>

              {/* Label Below - aligned with value, not icon */}
              <p className="font-body text-[14px] md:text-[15px] lg:text-[16px] text-[#6C6C6C] pl-[64px] md:pl-[72px]">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};