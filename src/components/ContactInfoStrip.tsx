import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion'; // <-- Import motion
import React from 'react';

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

const contactItems = [
    {
        icon: <Mail className="w-5 h-5" />,
        title: 'Contact Us',
        lines: ['Email: info@domain.com', 'Phone: (123) 465 – 798'],
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: 'Our Location',
        lines: ['4517 Washington Ave. Manchester,', 'Kentucky 39495'],
    },
    {
        icon: <Clock className="w-5 h-5" />,
        title: 'Working Hours',
        lines: ['Monday – Friday : 9:00 am to 6:00 pm', 'Saturday : 11:00 am to 5pm'],
    },
];

export const ContactInfoStrip = () => {
    return (
        <section className=" bg-light-pink-100 py-12 lg:py-16 lg:px-10 xl:px-20">
            <div className="container mx-auto px-4 lg:px-8">
                {/* GRID (STAGGER CONTAINER) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 lg:gap-4"
                >
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp} // Apply individual fade-up to each item
                            className={`flex flex-col items-center text-center md:items-start md:text-left ${
                                index !== contactItems.length - 1
                                    ? 'md:border-r md:border-divider-gray-200 md:pr-8'
                                    : ''
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-deep-green-900">{item.icon}</span>
                                <h3 className="font-heading text-xl text-deep-green-900">{item.title}</h3>
                            </div>
                            {item.lines.map((line, i) => (
                                <p key={i} className="font-body text-lg text-text-gray-400">
                                    {line}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};