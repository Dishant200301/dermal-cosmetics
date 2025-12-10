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
import ImageWithShine from "./ImageWithShine";

import benefitsModel from "/image/benefits-model.png";

/* --------------------------------------------------------- */
/*   ANIMATION VARIANTS                                      */
/* --------------------------------------------------------- */

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

/* --------------------------------------------------------- */
/*   BENEFIT DATA                                            */
/* --------------------------------------------------------- */

const leftBenefits = [
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

const rightBenefits = [
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

/* --------------------------------------------------------- */
/*   BENEFIT ITEM                                            */
/* --------------------------------------------------------- */

const BenefitItem = ({ item, alignRight = false }) => (
    <motion.div
        variants={fadeInUp}
        className={`flex items-start gap-5 ${alignRight ? "md:flex-row-reverse md:text-right xl:flex-row-reverse xl:text-right" : ""
            }`}
    >
        <div className="w-[60px] h-[60px] bg-white rounded-[10px] flex items-center justify-center flex-shrink-0">
            {item.icon}
        </div>

        <div className={`max-w-[300px] leading-tight`}>
            <h3 className="font-heading text-[22px] md:text-[18px] text-white mb-2">
                {item.title}
            </h3>
            <p className="font-body text-[18px] md:text-[14px] lg:text-[16px] leading-[29px] text-white">
                {item.description}
            </p>
        </div>
    </motion.div>
);

/* --------------------------------------------------------- */
/*   MAIN SECTION                                            */
/* --------------------------------------------------------- */

export const BenefitsSection = () => {
    return (
        <section className="xl:container w-full bg-[#fef7f8] py-16 lg:py-20 lg:px-2 xl:py-24 px-0 ">
            <div
                className="
                    bg-[#24544B]
                    rounded-none lg:rounded-[30px]
                    min-h-[1036px]
                    relative
                    overflow-hidden
                    px-6 sm:px-8 lg:px-16 xl:px-24
                    py-16 lg:py-20
                    flex items-start lg:items-center
                "
            >


                <img
                    src="/image/leaf-bottom-left.png"
                    className="absolute left-0 bottom-0 w-[220px] opacity-20 animate-[float_6s_ease-in-out_infinite]"
                    alt=""
                />
                <img
                    src="/image/leaf-bottom-right.png"
                    className="absolute right-6 bottom-6 w-[220px] opacity-30 animate-[float_8s_ease-in-out_infinite]"
                    alt=""
                />

                {/* ---------------- TOP CONTENT ---------------- */}
                <div className="w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        className="text-center max-w-[850px] mx-auto mb-16"
                    >
                        {/* Subheading */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center items-center gap-2 mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-white" />
                            <p className="font-body text-[16px] text-white font-medium tracking-[-0.32px]">
                                Our Benefits
                            </p>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h2
                            variants={fadeInUp}
                            className="
                                font-heading text-white
                                text-[32px] md:text-[40px] lg:text-[50px]
                                leading-[40px] md:leading-[50px] lg:leading-[55px]
                                tracking-[-1px]
                                mb-4
                            "
                        >
                            Exceptional dermatology, every step of the way
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="font-body text-[18px] leading-[29px] text-white max-w-[630px] mx-auto"
                        >
                            Experience personalized care, advanced treatments, and visible
                            results with our expert dermatology services.
                        </motion.p>
                    </motion.div>

                    {/* ---------------- DESKTOP LAYOUT ---------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        className="
                            hidden xl:grid
                            grid-cols-[1fr_auto_1fr]
                            gap-20 xl:gap-10
                            items-center
                        "
                    >
                        {/* Left column */}
                        <div className="flex flex-col space-y-12">
                            {leftBenefits.map((item) => (
                                <BenefitItem
                                    key={item.title}
                                    item={item}
                                    alignRight={true}
                                />
                            ))}
                        </div>

                        {/* Center oval image */}
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div
                                className="
                                    w-[340px] h-[512px]
                                    rounded-[200px]
                                    overflow-hidden shadow-xl bg-[#1C4942]
                                "
                            >
                                <ImageWithShine
                                    src={benefitsModel}
                                    alt="Dermatology model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right column */}
                        <div className="flex flex-col space-y-12">
                            {rightBenefits.map((item) => (
                                <BenefitItem key={item.title} item={item} />
                            ))}
                        </div>
                    </motion.div>


                    {/* ---------------- TABLET / LAPTOP (md to lg) ---------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        className="hidden md:flex xl:hidden flex-col gap-12"
                    >
                        {/* Benefits in 2 separate columns */}
                        <div className="grid grid-cols-2 gap-x-10">
                            {/* Left column - 3 benefits (text right-aligned, icon on right) */}
                            <div className="flex flex-col gap-y-10">
                                {leftBenefits.map((item) => (
                                    <BenefitItem key={item.title} item={item} alignRight={true} />
                                ))}
                            </div>

                            {/* Right column - 3 benefits (text left-aligned, icon on left) */}
                            <div className="flex flex-col gap-y-10">
                                {rightBenefits.map((item) => (
                                    <BenefitItem key={item.title} item={item} alignRight={false} />
                                ))}
                            </div>
                        </div>

                        {/* Oval image below */}
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div
                                className="
                                    w-[300px] h-[420px]
                                    lg:w-[320px] lg:h-[480px]
                                    rounded-[200px]
                                    overflow-hidden shadow-xl bg-[#1C4942]
                                "
                            >
                                <ImageWithShine
                                    src={benefitsModel}
                                    alt="Dermatology model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ---------------- MOBILE ONLY ---------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        className="md:hidden flex flex-col gap-12"
                    >
                        {/* First 3 benefits */}
                        <div className="grid grid-cols-1 gap-10">
                            {leftBenefits.map((item) => (
                                <BenefitItem key={item.title} item={item} />
                            ))}
                        </div>

                        {/* Oval image */}
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div
                                className="
                                    w-[260px] h-[380px]
                                    rounded-[200px]
                                    overflow-hidden shadow-xl bg-[#1C4942]
                                "
                            >
                                <ImageWithShine
                                    src={benefitsModel}
                                    alt="Dermatology model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Last 3 benefits */}
                        <div className="grid grid-cols-1 gap-10">
                            {rightBenefits.map((item) => (
                                <BenefitItem key={item.title} item={item} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
