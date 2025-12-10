import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // <-- Import motion
import BeforeAfterImage from "./BeforeAfterImage";

import before1 from "/image/before-1.png";
import after1 from "/image/after-1.png";
import before2 from "/image/before-2.png";
import after2 from "/image/after-2.png";
import { ArrowIcon } from "./icons";

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


const beforeAfterData = [
    { beforeImage: before1, afterImage: after1, alt: "Skin Result 1" },
    { beforeImage: before2, afterImage: after2, alt: "Skin Result 2" },
];

export const BeforeAfterSection = () => {
    // Calculate base delay needed before the button starts
    const baseDelay = 3 * 0.15 + 0.15; // 3 header items * 0.15s stagger + 0.15s buffer

    return (
        <section className="bg-[#fef7f8] py-20 lg:py-28">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

                {/* Header Block (STAGGER CONTAINER 1) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="mb-14 lg:mb-20"
                >
                    {/* 1. Top Label */}
                    <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#7B798C]"></div>
                        <p className="font-body text-[16px] text-[#7B798C] font-medium">
                            Our Result
                        </p>
                    </motion.div>

                    {/* 2. Main Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        className="
                            font-heading text-center text-[#1C4942]
                            text-[36px] md:text-[42px] lg:text-[50px]
                            leading-[110%] tracking-[-1px]
                            max-w-[800px] mx-auto mb-4
                        "
                    >
                        Before & after: witness the power of dermatology
                    </motion.h2>

                    {/* 3. Description */}
                    <motion.p variants={fadeInUp} className="
                        font-body text-[#7B798C] text-[18px] leading-[29px]
                        max-w-[650px] mx-auto text-center
                    ">
                        See the remarkable transformations for yourself—our ‘Before & After’
                        gallery highlights the powerful impact of dermatological treatments.
                    </motion.p>
                </motion.div>

                {/* Image Grid (STAGGER CONTAINER 2) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-12"
                >
                    {beforeAfterData.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <BeforeAfterImage {...item} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Button (Sequential item after image grid) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }} // Add small delay after image grid
                    className="flex justify-center"
                >
                    <Link
                        to="/results"
                        className="
                            flex items-center gap-2 px-8 h-[50px]
                            bg-[#24544B] text-white rounded-full font-body text-[16px] font-medium
                            hover:bg-[#1C4942] transition-all duration-300
                        "
                    >
                        View All Result
                        <ArrowIcon/>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};