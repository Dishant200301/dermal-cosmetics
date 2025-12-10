import React from "react";
import { ArrowRight, CheckSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedButton } from './AnimatedButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const ExpertiseBadge = () => {
  return (
    <motion.div variants={fadeInUp} className="absolute -top-2 md:-top-0 right-0 lg:top-0 md:right-0 lg:right-0 lg:mb-0 rounded-2xl md:rounded-[20px] bg-[#24544B] px-4 py-3 md:px-12 md:py-10 shadow-xl flex items-center gap-2 z-20">
      <div className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center">
        <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>

      <div>
        <p className="font-heading text-[18px] md:text-[32px] text-white leading-none">49+</p>
        <p className="font-body text-[11px] md:text-xs text-white/90 mt-0.5 md:mt-1">
          Reliable Expertise
        </p>
      </div>
    </motion.div>
  );
};

const ChecklistItem = ({ text }: { text: string }) => (
  <motion.div variants={fadeInUp} className="flex items-center gap-2.5">
    <CheckSquare className="w-5 h-5 md:w-5 md:h-5 text-[#24544B] flex-shrink-0" />
    <span className="font-body text-[#24544B] text-[15px] md:text-base">
      {text}
    </span>
  </motion.div>
);

const checklistItems = [
  "Expert Dermatologists",
  "Personalized Care",
  "Advanced Technology",
  "Comprehensive Services",
  "Effective Solutions",
  "Comfortable Environment",
];

export const CommitmentSection = () => {
  return (
    <section className="relative bg-[#F7EFEF] py-12 md:py-16 lg:py-20 xl:py-24 xl:px-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* IMAGE PANEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative order-1 xl:order-1 w-full max-w-[500px] mx-auto xl:mx-0"
          >
            <div className="relative">

              {/* Two Vertical Images Side-by-Side */}
              <div className="flex gap-4 md:gap-5 lg:gap-6">

                {/* Left Image */}
                <motion.div
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg flex-1"
                >
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=600&fit=crop"
                    className="w-full h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-cover"
                    alt="Dermatology Treatment"
                  />
                </motion.div>

                {/* Right Column - Image with Badge Overlay */}
                <div className="flex-1 relative">

                  {/* Right Image - Full height */}
                  <motion.div
                    variants={fadeInUp}
                    className="group relative overflow-hidden top-24 md:top-[180px] rounded-[20px] md:rounded-[24px] shadow-lg h-[280px] md:h-[320px] lg:h-[330px] xl:h-[340px]"
                  >
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Skin Care Treatment"
                    />
                  </motion.div>

                  {/* ExpertiseBadge - Overlaid on top of image */}
                  <ExpertiseBadge />

                </div>

              </div>

            </div>
          </motion.div>

          {/* CONTENT PANEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="order-2 xl:order-2 flex flex-col gap-5 md:gap-6 mt-12 md:mt-16 lg:mt-20 xl:mt-0"
          >

            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#24544B]" />
              <p className="font-body text-[#24544B] text-base">Who We Are</p>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-heading text-[#0F3E34] text-[30px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-tight">
              Committed to Excellence in Skin Health and Care
            </motion.h2>

            <motion.p variants={fadeInUp} className="font-body text-[#666] leading-relaxed text-base md:text-lg max-w-[540px]">
              Providing personalized dermatology solutions tailored to your
              unique skin needs, we offer expert care with a focus on long-term
              health.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3.5 mt-2">
              {checklistItems.map((item) => (
                <ChecklistItem key={item} text={item} />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <AnimatedButton to="/services" variant="primary" className="mt-4 md:mt-6 w-fit">
                Learn More
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};