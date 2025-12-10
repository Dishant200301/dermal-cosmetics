import { motion } from 'framer-motion';
import { Check, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import doctorProcedure from "/image/doctor-procedure.png";
import { ArrowIcon } from "./icons";
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

const leftChecklist = [
  "Expert Dermatologists",
  "Advanced Technology",
  "Effective Solutions",
];

const rightChecklist = [
  "Personalized Care",
  "Comprehensive Services",
  "Comfortable Environment",
];

export const ProcessSection = () => {
  return (
    <section className="xl:container w-full bg-[#fef7f8] mx-auto py-16 md:py-20 lg:py-16 px-0 lg:px-6 xl:px-24">
      <div className="bg-[#F7F0F2] lg:rounded-[30px] xl:rounded-[30px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* =====================================================================================
            LEFT COLUMN — IMAGE + GRADIENT + VIDEO CTA (Single Animation)
        ===================================================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="group relative h-[460px] md:h-[600px] lg:h-[797px] xl:h-[630px] lg:rounded-t-[30px] xl:rounded-t-[30px] lg:rounded-l-[30px] xl:rounded-l-[30px] lg:rounded-tr-none overflow-hidden"
        >
          {/* Shine Effect */}
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

          {/* Image */}
          <img
            src={doctorProcedure}
            alt="Dermatology procedure"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,73,66,0)] via-[rgba(28,73,66,0.45)] to-[rgba(28,73,66,0.9)]" />

          {/* Video Button + Text */}
          <div className="absolute bottom-12 left-10 flex items-start gap-5 ">
            {/* Play Button */}
            <button className="w-[60px] h-[60px] border border-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300">
              <Play className="w-6 h-6 text-white fill-white" />
            </button>

            {/* Text Block */}
            <div className="text-white">
              <p className="font-heading text-[16px] opacity-90">Our process</p>
              <p className="font-heading text-[26px] md:text-[40px] lg:text-[42px] leading-[1.1] mt-1">
                Watch our procedure
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================================================
            RIGHT COLUMN — TEXT BLOCK (Staggered Animation Container)
        ===================================================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-14 px-6 md:px-10 lg:px-14 lg:py-6 flex flex-col justify-center"
        >
          {/* 1. Subheading */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#24544B]" />
            <p className="font-body text-[16px] text-[#7B798C]">Our Process</p>
          </motion.div>

          {/* 2. Heading */}
          <motion.h2 variants={fadeInUp} className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[36px] xl:text-[36px] leading-[1.12] max-w-[550px] mb-6">
            Expert dermatology care for healthy, radiant skin
          </motion.h2>

          {/* 3. Description */}
          <motion.p variants={fadeInUp} className="font-body text-[18px] xl:text-[16px] leading-[29px] text-[#7B798C] max-w-[550px] mb-10">
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </motion.p>

          {/* 4. CHECKLIST GRID (Inner stagger for checklist items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 mb-12">
            {/* Checklists are combined into a single sequence */}
            {[...leftChecklist, ...rightChecklist].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (index * 0.1) + 0.6
                }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 border border-[#1C4942] rounded flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#1C4942]" />
                </div>
                <span className="font-body text-[18px] lg:text-[14px] text-[#7B798C]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 5. CTA BUTTON */}
          <motion.div variants={fadeInUp}>
            <AnimatedButton to="/about" variant="primary" className="mb-8 w-fit">
              Learn More
            </AnimatedButton>
          </motion.div>

          {/* 6. Bottom Text */}
          <motion.p variants={fadeInUp} className="font-body text-[18px] lg:text-[16px] text-[#7B798C]">
            Your skin's transformation starts here –{" "}
            <Link
              to="/contact"
              className="font-bold text-[#1C4942] hover:underline"
            >
              Book Today!
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};