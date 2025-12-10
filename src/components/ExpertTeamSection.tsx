import React from "react";
import { motion } from "framer-motion";

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

interface TeamCardProps {
    image: string;
    name: string;
    specialty: string;
}

const TeamCard = ({ image, name, specialty }: TeamCardProps) => {
    return (
        <motion.div variants={fadeInUp} className="relative w-full h-[427px] rounded-[24px] overflow-hidden group">
            {/* Shine Effect */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

            {/* Team Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(28, 73, 66, 0) 43%, #1C4942 100%)',
                }}
            />

            {/* Doctor Info */}
            <div className="absolute bottom-10 w-full text-center px-4">
                <h3 className="font-heading text-white text-[22px] mb-2">{name}</h3>
                <p className="font-body text-white text-lg leading-relaxed">{specialty}</p>
            </div>
        </motion.div>
    );
};

const SectionHeader = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
        >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7B798C]"></div>
                <span className="font-body text-[#7B798C] text-base font-medium">
                    Our Expert Team
                </span>
            </motion.div>

            <motion.h2
                variants={fadeInUp}
                className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] max-w-[810px] mx-auto mb-5"
                style={{ letterSpacing: '-1px' }}
            >
                Our expert team: committed to your skin health and beauty
            </motion.h2>

            <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[615px] mx-auto">
                Our team of dermatology professionals is dedicated to providing you with
                the highest quality care. With years of experience.
            </motion.p>
        </motion.div>
    );
};

const teamMembers = [
    {
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Kathryn Murphy',
        specialty: 'Anesthesiology',
    },
    {
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Kristin Watson',
        specialty: 'Infectious Disease',
    },
    {
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Arlene Mccoy',
        specialty: 'Cardiology',
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Jenny Wilson',
        specialty: 'Anesthesiology',
    },
];

export const ExpertTeamSection = () => {
    return (
        <section className="relative bg-[#fef7f8] lg:px-0 xl:py-20">
            <div className="lg:bg-[#f7f0f2] md:bg-[#f7f0f2] md:rounded-[30px] lg:rounded-[30px] xl:rounded-[30px] mx-6 lg:mx-4 py-24 lg:py-[80px] overflow-hidden">
                {/* Decorative Leaf - Left Bottom */}
                <div className="absolute bottom-20 left-5 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                    <img
                        src="/image/leaf-bottom-left.png"
                        alt="Decorative leaf"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[100px] xl:h-[100px] opacity-70 invert"
                    />
                </div>

                {/* Decorative Leaf - Top Right */}
                <div className="absolute top-20 right-5 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                    <img
                        src="/image/leaf-top-right.png"
                        alt="Decorative leaf"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[900px] xl:h-[800px] opacity-70 invert "
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-[1280px] mx-auto md:px-6 lg:px-[40px] xl:px-[0px]">
                    <SectionHeader />

                    {/* Team Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                image={member.image}
                                name={member.name}
                                specialty={member.specialty}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};