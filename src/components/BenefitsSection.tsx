import React from "react";
import {
    Layers,
    Grid3X3,
    Shield,
    Smile,
    Database,
    ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";
import ImageWithShine from './ImageWithShine';

import benefitsModel from "/image/benefits-model.png";

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

type Benefit = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const leftBenefits: Benefit[] = [
    {
        icon: <ClipboardList className="w-7 h-7 text-[#24544B]" />,
        title: "Expert Dermatologists",
        description:
            "Our team consists board-certified dermatologists with experience",
    },
    {
        icon: <Database className="w-7 h-7 text-[#24544B]" />,
        title: "Advanced Technology",
        description: "We use cutting-edge equipment and innovative techniques",
    },
    {
        icon: <Grid3X3 className="w-7 h-7 text-[#24544B]" />,
        title: "Personalized Care",
        description:
            "Every treatment plan is tailored to your unique skin type, concerns",
    },
];

const rightBenefits: Benefit[] = [
    {
        icon: <Layers className="w-7 h-7 text-[#24544B]" />,
        title: "Comprehensive Services",
        description:
            "From medical dermatology cosmetic enhancements, we offer a treatment",
    },
    {
        icon: <Shield className="w-7 h-7 text-[#24544B]" />,
        title: "High Safety Standards",
        description:
            "Your safety is our priority. We adhere to strict hygiene and safety protocols",
    },
    {
        icon: <Smile className="w-7 h-7 text-[#24544B]" />,
        title: "Comfortable Environment",
        description:
            "Our clinic provides a welcoming and stress-free atmosphere",
    },
];

/* ---------------------------------------------------------------- */
/* Reusable Benefit Item Component (Individual motion element) */
/* ---------------------------------------------------------------- */

type BenefitItemProps = {
    item: Benefit;
    isRightAligned?: boolean;
};

const BenefitItem: React.FC<BenefitItemProps> = ({
    item,
    isRightAligned = false,
}) => {
    return (
        <motion.div // Apply motion to the individual item
            variants={fadeInUp}
            className={`
                flex items-start gap-5
                ${isRightAligned ? "xl:flex-row-reverse xl:text-right" : ""}
            `}
        >
            {/* Icon box */}
            <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white rounded-[10px] flex items-center justify-center flex-shrink-0">
                {item.icon}
            </div>

            {/* Text */}
            <div
                className={`
                    leading-tight max-w-[400px]
                    ${isRightAligned ? "xl:ml-auto" : ""}
                `}
            >
                <h3 className="font-heading text-[22px] mb-2">{item.title}</h3>
                <p className="font-body text-[16px] lg:text-[18px] leading-[29px]">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};


export const BenefitsSection: React.FC = () => {
    return (
        <section className="bg-[#fef7f8] py-16 md:py-20 lg:py-16 px-0 sm:px-0 lg:px-8">
            <div
                className="
                    bg-[#24544B]
                    lg:rounded-[30px]
                    xl:rounded-[30px]
                    relative
                    overflow-hidden
                    min-h-[1036px]
                    flex
                    items-center
                    px-4 sm:px-8 lg:px-16
                    py-16 lg:py-20
                "
            >
                {/* Decorative leaves: static, no animation */}
                <img
                    src="/image/leaves-corner-left.png"
                    className="pointer-events-none select-none absolute left-0 top-0 w-[220px] opacity-20"
                    alt=""
                />
                <img
                    src="/image/leaves-corner-right.png"
                    className="pointer-events-none select-none absolute right-0 top-0 w-[220px] opacity-20"
                    alt=""
                />
                <img
                    src="/image/leaves-corner-left.png"
                    className="pointer-events-none select-none absolute left-0 bottom-0 w-[220px] opacity-20"
                    alt=""
                />
                <img
                    src="/image/leaves-corner-right.png"
                    className="pointer-events-none select-none absolute right-6 bottom-6 w-[220px] opacity-30"
                    alt=""
                />

                {/* CONTENT WRAPPER to center everything vertically */}
                <div className="w-full">

                    {/* ---------------- TOP CONTENT (STAGGER CONTAINER 1) ---------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="text-center max-w-[850px] mx-auto mb-12 md:mb-14 lg:mb-16"
                    >
                        {/* 1. Subheading label */}
                        <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            <p className="font-body text-[16px] font-medium text-white tracking-[-0.32px]">
                                Our Benefits
                            </p>
                        </motion.div>

                        {/* 2. Main heading */}
                        <motion.h2
                            variants={fadeInUp}
                            className="
                                font-heading
                                text-white
                                text-[32px]
                                md:text-[40px]
                                lg:text-[50px]
                                leading-[40px]
                                md:leading-[48px]
                                lg:leading-[55px]
                                tracking-[-1px]
                                mb-4 md:mb-5
                            "
                        >
                            Exceptional dermatology, every step of the way
                        </motion.h2>

                        {/* 3. Description paragraph */}
                        <motion.p variants={fadeInUp} className="font-body text-[18px] leading-[29px] text-white max-w-[630px] mx-auto">
                            Experience personalized care, advanced treatments, and visible
                            results with our expert dermatology services.
                        </motion.p>
                    </motion.div>

                    {/* ---------------- MIDDLE GRID (STAGGER CONTAINER 2) ---------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="
                            grid
                            grid-cols-1
                            gap-12
                            xl:grid-cols-[1fr_auto_1fr]
                            xl:gap-20
                            items-center
                            text-white
                        "
                    >

                        {/* LEFT COLUMN BENEFITS — desktop only */}
                        <div className="hidden xl:flex flex-col space-y-12">
                            {/* NOTE: We manually create a stagger array for the desktop layout */}
                            {[
                                ...leftBenefits.map(item => ({ ...item, isRightAligned: true })),
                                // This is an empty placeholder to ensure the benefit sequence aligns correctly with the center image
                                { icon: <></>, title: '', description: '', placeholder: true },
                                { icon: <></>, title: '', description: '', placeholder: true },
                                { icon: <></>, title: '', description: '', placeholder: true },
                            ].filter((_, i) => i < leftBenefits.length).map((item) => (
                                <BenefitItem key={item.title} item={item} isRightAligned />
                            ))}
                        </div>

                        {/* CENTER OVAL IMAGE (Treated as an individual sequential item) */}
                        <motion.div variants={fadeInUp} className="flex justify-center order-1 xl:order-none">
                            <div
                                className="
                                    w-[260px] h-[380px]
                                    md:w-[280px] md:h-[420px]
                                    lg:w-[320px] lg:h-[480px]
                                    xl:w-[340px] xl:h-[512px]
                                    rounded-[200px]
                                    overflow-hidden
                                    bg-[#1C4942]
                                    shadow-xl
                                    mx-auto
                                    group
                                "
                            >
                                <ImageWithShine
                                    src={benefitsModel}
                                    alt="Dermatology model"
                                    className="w-full h-full object-cover"
                                    rounded="rounded-[200px]"
                                />
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN BENEFITS — desktop only */}
                        <div className="hidden xl:flex flex-col space-y-12">
                            {rightBenefits.map((item) => (
                                <BenefitItem key={item.title} item={item} />
                            ))}
                        </div>

                        {/* TABLET & MOBILE & LAPTOP (below xl) BENEFITS GRID */}
                        {/* All 6 benefits are staggered here, appearing after the central image */}
                        <div className="xl:hidden order-2 grid grid-cols-1 sm:grid-cols-2 gap-10f">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                {[...leftBenefits, ...rightBenefits].map((item) => (
                                    <BenefitItem key={item.title} item={item} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};