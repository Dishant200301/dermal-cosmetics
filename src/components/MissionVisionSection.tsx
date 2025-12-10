import React from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import { Package, Globe, Heart } from 'lucide-react';

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


const cards = [
    {
        icon: Package,
        title: 'Our Mission',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'light' as const,
    },
    {
        icon: Globe,
        title: 'Our Vision',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'dark' as const,
    },
    {
        icon: Heart,
        title: 'Our Value',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'light' as const,
    },
];

export const MissionVisionSection = () => {
    return (
        <section className="relative py-20 lg:py-24">
            {/* Main Wrapper with Soft Pink Background */}
            <div className="relative bg-[#F6ECEF] lg:rounded-[40px] xl:rounded-[40px] mx-0 lg:mx-20 pt-16 lg:pt-24 pb-32 lg:pb-40 overflow-hidden">
                {/* Decorative SVG elements remain static, no animation added */}
               

                {/* Content Container (STAGGER CONTAINER 1 - Header Text) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="container mx-auto px-6 lg:px-12 relative z-10"
                >
                    {/* 1. Section Label */}
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#24544B]"></div>
                        <span className="font-body text-[#24544B] text-base">
                            Our Mission / Vision
                        </span>
                    </motion.div>

                    {/* 2. Main Heading */}
                    <motion.h2 variants={fadeInUp} className="font-heading text-[#0F3E34] text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[54px] text-center max-w-[880px] mx-auto mb-5">
                        Our Mission and Vision to Provide Exceptional Care Healthy, Radiant Skin
                    </motion.h2>

                    {/* 3. Subheading */}
                    <motion.p variants={fadeInUp} className="font-body text-[#6C6C6C] text-base md:text-lg leading-relaxed text-center max-w-[760px] mx-auto mb-16">
                        With advanced treatments and personalized care, we aim to enhance your skin's health and boost your confidence at every step.
                    </motion.p>
                </motion.div>
            </div>

            {/* Cards Wrapper (STAGGER CONTAINER 2 - Cards) */}
            <div className="container mx-auto px-6 lg:px-12 relative -mt-24 lg:-mt-32 z-20">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer} // Parent controls the card stagger
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp} // Each card animates sequentially
                            className={`rounded-[28px] p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${card.variant === 'dark'
                                    ? 'bg-[#24544B] text-white'
                                    : 'bg-white text-[#0F3E34]'
                                }`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-[16px] mx-auto mb-6 flex items-center justify-center ${card.variant === 'dark'
                                        ? 'bg-white/10'
                                        : 'bg-[#F6ECEF]'
                                    }`}
                            >
                                <card.icon
                                    className={`w-8 h-8 ${card.variant === 'dark' ? 'text-white' : 'text-[#24544B]'
                                        }`}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className={`font-heading text-2xl lg:text-[28px] mb-4 ${card.variant === 'dark' ? 'text-white' : 'text-[#0F3E34]'
                                    }`}
                            >
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`font-body text-base leading-relaxed ${card.variant === 'dark' ? 'text-white/80' : 'text-[#6C6C6C]'
                                    }`}
                            >
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};