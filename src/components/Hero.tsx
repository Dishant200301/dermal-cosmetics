import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroModel from '/image/hero-model.png';
import { ArrowIcon } from './icons';
import { motion } from 'framer-motion'; // <-- Import motion

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


export const Hero = () => {
    return (
        <section className="xl:container bg-[#f7f0f2] px-4 lg:px-8 xl:px-4 py-2 ">
            <div className=" mx-auto">
                <div className=" bg-deep-green-800 rounded-30  relative">
                    {/* Decorative leaf SVGs (Static, no animation) */}

                    {/* Decorative Leaf - Bottom Left */}
                    <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                        <img
                            src="/image/leaf-bottom-left.png"
                            alt="Decorative leaf"
                            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-30"
                        />
                    </div>

                    {/* Decorative Leaf - Top Right */}
                    <div className="absolute top-10 right-0 animate-[float_8s_ease-in-out_infinite] pointer-events-none">
                        <img
                            src="/image/leaf-top-right.png"
                            alt="Decorative leaf"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-[1200px] xl:h-[800px] opacity-50"
                        />
                    </div>

                    {/* Main Grid (STAGGER CONTAINER) */}
                    <motion.div
                        initial="hidden"
                        animate="visible" // Use animate for hero sections that appear immediately on load
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {/* Left Content (Inner Staggering) */}
                        <div className="p-8 lg:p-12 xl:p-24 flex flex-col justify-center">

                            {/* 1. Main Heading */}
                            <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl xl:text-[56px] text-white leading-tight tracking-wide mb-6">
                                Comprehensive care for your skin's health and beauty
                            </motion.h1>

                            {/* 2. Description */}
                            <motion.p variants={fadeInUp} className="font-body text-md text-white/90 mb-8 max-w-lg">
                                At Dermal we believe in creating digital solution that drive real-world impact. From creative strategies to cutting-edge.
                            </motion.p>

                            {/* 3. CTA Button */}
                            <motion.div variants={fadeInUp}>
                                <Link
                                    to="/services"
                                    className="btn-secondary w-fit mb-10 group:hover:text-[#1c4942]"
                                >
                                    View Our Services
                                    {/* Icon will inherit color from parent button text */}
                                    <ArrowIcon className="w-4 h-4 group-hover:text-[#1c4942]" />
                                </Link>
                            </motion.div>

                            {/* 4. Review Block */}
                            <motion.div variants={fadeInUp} className="border-t border-white/20 pt-6">
                                <p className="font-heading text-xl text-white mb-4">Reviews</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                                        alt="Happy patient"
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <p className="font-body text-lg text-white flex-1">
                                        I am beyond thrilled with the results of my facelift.
                                    </p>
                                    <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full">
                                        <span className="font-body font-medium text-deep-green-800">5.0</span>
                                        <Star className="w-4 h-4 fill-deep-green-800 text-deep-green-800" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image (Final sequential item) */}
                        <motion.div variants={fadeInUp} className="relative h-[400px] md:h-auto lg:h-auto">
                            <img
                                src={heroModel}
                                alt="Beautiful woman with clear skin"
                                className="w-full h-full object-cover object-top"
                            />

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};