import React from "react";
import { Star, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import chooseImage from "/image/choose-us.png";

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


const WhyChooseUsSection = () => {
    return (
        <section className="xl:container w-full bg-[#fef7f8]  py-16 md:py-20 lg:py-24 xl:px-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ================= IMAGE (Single Animation Block) ================= */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="order-1 lg:order-2"
                    >
                        <div className="group rounded-[28px] overflow-hidden shadow-sm relative">
                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                            <img
                                src={chooseImage}
                                alt="Why Choose Us Dermatology"
                                className="w-full h-[360px] md:h-[430px] lg:h-[520px] object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* ================= CONTENT (STAGGER CONTAINER) ================= */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="order-2 lg:order-1"
                    >

                        {/* 1. Label */}
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#24544B]" />
                            <p className="font-body text-[#7B798C] text-base">Why Choose Us</p>
                        </motion.div>

                        {/* 2. Heading */}
                        <motion.h2 variants={fadeInUp} className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[48px] leading-[1.15] max-w-[600px] mb-4">
                            Why choose us for all your dermatology needs
                        </motion.h2>

                        {/* 3. Sub text */}
                        <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[650px] mb-10">
                            We're dedicated to helping you achieve and maintain beautiful, healthy skin.
                            Trust us to provide exceptional care tailored to you.
                        </motion.p>

                        {/* ================= FEATURE LIST CARDS (Inner Stagger Container) ================= */}
                        <motion.div variants={staggerContainer} className="space-y-8">

                            {/* CARD 1 (4th item in sequence) */}
                            <motion.div variants={fadeInUp} className="border-t border-[#7B798C24] pt-8 flex gap-5">
                                <div className="bg-[#F7F0F2] w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center">
                                    <div className="w-10 h-10  bg-[#F7F0F2] rounded-md flex items-center justify-center">
                                        <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1C4942]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-heading text-[#1C4942] text-xl mb-2">
                                        Personalized, compassionate care
                                    </h3>

                                    <p className="font-body text-[#7B798C] leading-relaxed text-base max-w-[580px]">
                                        We believe every patient is unique. That's why we take the time to
                                        understand your specific needs and tailor treatment plans.
                                    </p>
                                </div>
                            </motion.div>

                            {/* CARD 2 (5th item in sequence) */}
                            <motion.div variants={fadeInUp} className="border-t border-[#7B798C24] pt-8 flex gap-5">
                                <div className="bg-[#F7F0F2] w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center">
                                    <div className="w-10 h-10  bg-[#F7F0F2] rounded-md flex items-center justify-center">
                                        <Star className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1C4942]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-heading text-[#1C4942] text-xl mb-2">
                                        Comprehensive care for all skin needs
                                    </h3>

                                    <p className="font-body text-[#7B798C] leading-relaxed text-base max-w-[580px]">
                                        Whether you're seeking medical dermatology, cosmetic treatments,
                                        or preventive care, we offer a complete range of services.
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;