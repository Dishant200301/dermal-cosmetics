import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Droplet, Heart, Zap, Scissors, Smile } from 'lucide-react';
import { services } from '@/data/serviceDetails';

// ====================================================================
// ICON MAPPING
// ====================================================================
const serviceIcons = {
    'dermal-fillers': Sparkles,
    'chemical-peels': Droplet,
    'acne-treatment': Heart,
    'skin-tightening': Zap,
    'scar-revision': Scissors,
    'wrinkle-reduction': Smile,
};

// ====================================================================
// MOTION VARIANTS
// ====================================================================
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

// ====================================================================
// MAIN COMPONENT
// ====================================================================
export const ServicesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const navigate = useNavigate();

    // Clone 3 cards (for 3-card desktop)
    const extendedServices = [...services, ...services.slice(0, 3)];

    const trackRef = useRef<HTMLDivElement | null>(null);
    const cardWidthRef = useRef(0);

    // ======================================================================================
    // 1) Measure real card width (because mobile/tablet/laptop cards have different widths)
    // ======================================================================================
    useEffect(() => {
        function updateWidth() {
            const firstCard = trackRef.current?.children[0] as HTMLElement;
            if (firstCard) {
                cardWidthRef.current = firstCard.offsetWidth + 24; // card width + 24px gap
            }
        }
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // ======================================================================================
    // 2) Auto-slide every 3 sec
    // ======================================================================================
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // ======================================================================================
    // 3) Seamless reset → when index hits original length (6)
    // ======================================================================================
    useEffect(() => {
        if (currentIndex === services.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);

                requestAnimationFrame(() => setIsTransitioning(true));
            }, 700);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    // ======================================================================================
    // 4) Calculate movement based on REAL pixel width
    // ======================================================================================
    const translateX = -(currentIndex * cardWidthRef.current);

    const handleCardClick = (id: string) => navigate(`/services/${id}`);

    const handleDotClick = (index: number) => {
        setIsTransitioning(true);
        setCurrentIndex(index);
    };

    const baseDelay = 0.6;

    return (
        <section className="bg-[#fef7f8] px-2 py-16 lg:py-24 relative">
            <div className="w-full bg-[#f7f0f2] lg:rounded-[30px] xl:rounded-[50px] py-10 px-0 lg:px-[10px] lg:py-12">

                {/* Floating leaf */}
                <div className="absolute bottom-20 left-0 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                    <img
                        src="/image/leaf-bottom-left.png"
                        alt="Decorative leaf"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-70 invert"
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-8 xl:px-28">

                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.span variants={fadeInUp} className="section-label justify-center mb-4">
                            Our Services
                        </motion.span>

                        <motion.h2
                            variants={fadeInUp}
                            className="font-heading text-3xl lg:text-5xl text-deep-green-900 mb-4"
                        >
                            Comprehensive dermatology services<br />for every skin need
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="font-body text-lg text-text-gray-400 max-w-2xl mx-auto"
                        >
                            From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage.
                        </motion.p>
                    </motion.div>

                    {/* ======================================================================================
                        SERVICE CAROUSEL (FULLY FIXED)
                    ====================================================================================== */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="relative mb-8 overflow-hidden"
                    >
                        <div
                            ref={trackRef}
                            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{
                                transform: `translateX(${translateX}px)`
                            }}
                        >
                            {extendedServices.map((service, index) => {
                                const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];

                                return (
                                    <div
                                        key={`${service.id}-${index}`}
                                        className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                    >
                                        <div
                                            onClick={() => handleCardClick(service.id)}
                                            className="relative overflow-hidden rounded-[30px] h-[324px] lg:h-[424px] cursor-pointer group"
                                        >
                                            {/* Shine Effect */}
                                            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-20 group-hover:left-[200%] pointer-events-none" />

                                            <img
                                                src={service.heroImage}
                                                alt={service.name}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-deep-green-900/90 via-deep-green-900/40 to-transparent" />

                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                                <div className="w-14 h-14 bg-white group-hover:bg-deep-green-900 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                                                    {IconComponent && (
                                                        <IconComponent className="w-6 h-6 text-deep-green-900 group-hover:text-white transition-colors duration-300" />
                                                    )}
                                                </div>

                                                <h3 className="font-heading text-xl text-white mb-2">{service.name}</h3>

                                                <p className="font-body text-white/80 line-clamp-2">
                                                    {service.description[0].substring(0, 80)}...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Pagination Dots */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: baseDelay, ease: 'easeOut' }}
                        className="flex justify-center gap-2 mb-8"
                    >
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 rounded-full ${(currentIndex % services.length) === index
                                    ? 'w-8 h-2.5 bg-deep-green-900'
                                    : 'w-2.5 h-2.5 bg-text-gray-400'
                                    }`}
                            />
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: baseDelay + 0.15, ease: 'easeOut' }}
                        className="text-center font-body text-lg text-text-gray-400"
                    >
                        Professional dermatology solutions for every need.{' '}
                        <button
                            onClick={() => navigate('/contact')}
                            className="font-bold text-deep-green-900 underline hover:text-deep-green-800 cursor-pointer transition-colors duration-300"
                        >
                            Contact Us Today!
                        </button>
                    </motion.p>

                </div>
            </div>
        </section>
    );
};
