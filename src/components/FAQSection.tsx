import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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


const faqs = [
    {
        question: 'What types of treatments do you offer?',
        answer: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.',
    },
    {
        question: 'Do I need a consultation before getting treatment?',
        answer: 'Yes, we recommend a consultation to assess your skin condition and create a personalized treatment plan that best suits your needs.',
    },
    {
        question: 'Are your treatments suitable for all skin types?',
        answer: 'Absolutely! Our expert dermatologists are trained to work with all skin types and customize treatments accordingly.',
    },
    {
        question: 'Do you offer cosmetic dermatology services?',
        answer: 'Yes, we offer a full range of cosmetic services including Botox, fillers, chemical peels, laser treatments, and more.',
    },
    {
        question: 'What should I expect during my first visit?',
        answer: 'During your first visit, our dermatologist will review your medical history, examine your skin, and discuss your concerns and goals.',
    },
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    // Calculate base delay needed before the accordion starts
    const baseDelay = 4 * 0.15 + 0.15; // 4 header items * 0.15s stagger + 0.15s buffer

    return (
        <section className="xl:container bg-[#fef7f8] py-16 lg:py-10 relative overflow-hidden">
            {/* Decorative leaf (static) */}
            <div className="absolute bottom-10 left-10 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                <img
                    src="/image/leaf-bottom-left.png"
                    alt="Decorative leaf"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-70 "
                />
            </div>

            <div className="container mx-auto px-0 lg:px-8 xl:px-0">
                <div className="bg-deep-green-800 lg:rounded-30 xl:rounded-30 p-8 lg:p-12 xl:p-20">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left Content (STAGGER CONTAINER 1) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            {/* 1. Section Label */}
                            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-white/80 font-body mb-4">
                                <span className="w-2 h-2 rounded-full bg-white/80"></span>
                                Frequently Asked Questions
                            </motion.span>

                            {/* 2. Heading */}
                            <motion.h2 variants={fadeInUp} className="font-heading text-3xl lg:text-4xl text-white mb-4">
                                Frequently asked question<br />find out more
                            </motion.h2>

                            {/* 3. Description */}
                            <motion.p variants={fadeInUp} className="font-body text-lg text-white/70 mb-8">
                                Have questions about our dermatology services? Our 'Frequently Asked Questions' section.
                            </motion.p>

                            {/* 4. CTA Button */}
                            <motion.div variants={fadeInUp}>
                                <AnimatedButton to="/contact" variant="secondary" className="w-fit">
                                    View All FAQs
                                </AnimatedButton>
                            </motion.div>
                        </motion.div>

                        {/* Right - Accordion (STAGGER CONTAINER 2) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            // Start timing after the header has finished its sequence
                            transition={{ delay: baseDelay, staggerChildren: 0.15 }}
                            className="space-y-4"
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp} // Each FAQ item animates sequentially
                                    className={`border-b border-white/20 pb-4 ${index === 0 ? 'border-t pt-4' : ''}`}
                                >
                                    <button
                                        className="w-full flex items-center justify-between text-left"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="font-heading text-lg lg:text-xl text-white pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="font-body text-white/70">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};