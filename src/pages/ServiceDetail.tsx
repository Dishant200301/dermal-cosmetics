import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Play, Phone, Check } from 'lucide-react';
import { services } from '../data/serviceDetails';
import { faqItems } from '../data/serviceDetails';
import { ArrowIcon } from '@/components/icons';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
    const [selectedServiceId, setSelectedServiceId] = useState<string>('dermal-fillers');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const currentService = services.find(s => s.id === selectedServiceId) || services[0];

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Framer Motion variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.0, 0.0, 0.2, 1.0] as const
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>{currentService.name} - Dermal Dermatology Clinic</title>
                <meta name="description" content={currentService.description[0]} />
            </Helmet>

            <div className="min-h-screen bg-[#FEF7F8]">
                <Header />

                <main>
                    {/* Hero Banner */}
                    <motion.section
                        className="container mx-auto  lg:px-8 lg:pt-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center overflow-hidden">
                            <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite]">
                                <img src="/image/leaf-bottom-left.png" alt="Leaf" className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48" />
                            </div>
                            {/* Decorative Leaf - Top Right */}
                            <div className="absolute top-0 right-0 animate-[float_8s_ease-in-out_infinite]">
                                <img src="/image/leaf-top-right.png" alt="Leaf" className="w-100 h-100 md:w-100 md:h-100 lg:w-50 lg:h-50 xl:w-100 xl:h-100" />
                            </div>

                            {/* Hero Content */}
                            <h1 className="font-heading text-white text-[32px] md:text-[40px] lg:text-[56px] mb-4 md:mb-5 z-10">
                                {currentService.name}
                            </h1>
                            <div className="font-body text-white text-base md:text-lg z-10">
                                <a href="/" className="opacity-70">Home</a>
                                <span className="mx-2">/</span>
                                <a href="/services" className="opacity-70">Services</a>
                                <span className="mx-2">/</span>
                                <span>{currentService.name}</span>
                            </div>
                        </div>
                    </motion.section>

                    {/* Main Content: Two-Column Layout */}
                    <section className="container mx-auto px-6 lg:px-32 py-12 lg:py-20 xl:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                            {/* LEFT SIDEBAR */}
                            <aside className="lg:col-span-3">
                                <div className="lg:sticky lg:top-24 space-y-8">
                                    {/* Services Category Card */}
                                    <motion.div
                                        className="bg-[#F7F0F2] rounded-[30px] p-4"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={fadeInUp}
                                    >
                                        <h3 className="font-heading text-[#1C4942] text-[22px] mb-6">
                                            Services Category
                                        </h3>
                                        <div className="space-y-3">
                                            {services.map((service) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => setSelectedServiceId(service.id)}
                                                    className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${selectedServiceId === service.id
                                                        ? 'bg-white shadow-md '
                                                        : 'bg-white hover:shadow-sm'
                                                        }`}
                                                >
                                                    <span
                                                        className={`font-body text-[16px] ${selectedServiceId === service.id
                                                            ? 'text-[#1C4942] font-semibold'
                                                            : 'text-[#7B798C]'
                                                            }`}
                                                    >
                                                        {service.name}
                                                    </span>
                                                    <ArrowIcon
                                                        className={`w-5 h-5 transition-transform invert ${selectedServiceId === service.id
                                                            ? 'text-[#24544B]'
                                                            : 'text-[#7B798C]'
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Promo Card */}
                                    <motion.div
                                        className="relative rounded-[30px] overflow-hidden h-[400px] bg-cover bg-center"
                                        style={{
                                            backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop)'
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={fadeInUp}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C4942]/95 via-[#1C4942]/70 to-transparent" />
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                            <div>
                                                <p className="font-body text-white text-sm mb-3 opacity-90">
                                                    Small Steps, Big Transformations
                                                </p>
                                                <h4 className="font-heading text-white text-[24px] leading-tight">
                                                    EMPOWERING EVERY INDIVIDUAL THROUGH SKINCARE
                                                </h4>
                                            </div>

                                            <div className="bg-white rounded-lg p-4 flex items-center gap-3 group cursor-pointer hover:shadow-lg transition-all duration-300">
                                                <div className="bg-white border-[1px] border-[#24544B] rounded-lg p-3 transition-all duration-300 group-hover:bg-[#24544B]">
                                                    <Phone className="w-5 h-5 text-[#24544B] transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                                                </div>
                                                <div>
                                                    <p className="font-body text-[#7B798C] text-sm">Call Us</p>
                                                    <p className="font-heading text-[#1C4942] text-lg">+91 123 456 7890</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </aside>

                            {/* RIGHT MAIN CONTENT */}
                            <div className="lg:col-span-9">
                                {/* Hero Service Image */}
                                <motion.div
                                    className="group relative rounded-[30px] overflow-hidden mb-8 transition-opacity duration-500"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={fadeInUp}
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                                    <img
                                        src={currentService.heroImage}
                                        alt={currentService.name}
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                    />
                                </motion.div>

                                {/* Intro Text & Bullet List */}
                                <motion.div
                                    className="mb-12"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={staggerContainer}
                                >
                                    {currentService.description.map((paragraph, idx) => (
                                        <motion.p
                                            key={idx}
                                            className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-4"
                                            variants={fadeInUp}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}

                                    <motion.div
                                        className="grid md:grid-cols-2 gap-4 mt-8"
                                        variants={fadeInUp}
                                    >
                                        {currentService.bulletPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3 group">
                                                <div className="bg-white border-2 border-[#24544B] rounded-lg p-2 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#24544B]">
                                                    <Check className="w-4 h-4 text-[#24544B] transition-colors duration-300 group-hover:text-white" strokeWidth={2.5} />
                                                </div>
                                                <span className="font-body text-[#1C4942] text-[16px]">{point}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Comprehensive Care Section */}
                                <motion.div
                                    className="mb-16"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                >
                                    <motion.h2
                                        className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[50px] mb-4"
                                        variants={fadeInUp}
                                    >
                                        Comprehensive care for your skin
                                    </motion.h2>
                                    <motion.p
                                        className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-8"
                                        variants={fadeInUp}
                                    >
                                        Our holistic approach combines advanced medical treatments with personalized care to deliver exceptional results for every patient.
                                    </motion.p>

                                    {/* Images Row */}
                                    <motion.div
                                        className="grid md:grid-cols-2 gap-6 mb-8"
                                        variants={fadeInUp}
                                    >
                                        {currentService.comprehensiveImages.map((img, idx) => (
                                            <div key={idx} className="group relative rounded-[30px] overflow-hidden">
                                                {/* Shine Effect */}
                                                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                                                <img
                                                    src={img}
                                                    alt={`Treatment ${idx + 1}`}
                                                    className="w-full h-[300px] object-cover"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Feature Cards Grid */}
                                    <motion.div
                                        className="grid md:grid-cols-2 gap-6"
                                        variants={fadeInUp}
                                    >
                                        {currentService.featureCards.map((card, idx) => (
                                            <div
                                                key={idx}
                                                className={`rounded-[30px] p-6 ${card.variant === 'dark'
                                                    ? 'bg-[#1C4942] text-white'
                                                    : 'bg-white'
                                                    }`}
                                            >
                                                <div
                                                    className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[30px] mb-4 ${card.variant === 'dark' ? 'bg-white/10' : 'bg-[#F7F0F2]'
                                                        }`}
                                                >
                                                    {card.icon}
                                                </div>
                                                <h4
                                                    className={`font-heading text-[20px] md:text-[22px] mb-3 ${card.variant === 'dark' ? 'text-white' : 'text-[#1C4942]'
                                                        }`}
                                                >
                                                    {card.title}
                                                </h4>
                                                <p
                                                    className={`font-body text-[16px] ${card.variant === 'dark' ? 'text-white/90' : 'text-[#7B798C]'
                                                        }`}
                                                >
                                                    {card.description}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Enhancing Natural Beauty Section */}
                                <motion.div
                                    className="mb-16"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                >
                                    <motion.h2
                                        className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[50px] mb-4"
                                        variants={fadeInUp}
                                    >
                                        Enhancing your natural beauty
                                    </motion.h2>
                                    <motion.p
                                        className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-8"
                                        variants={fadeInUp}
                                    >
                                        {currentService.enhancingText}
                                    </motion.p>

                                    {/* Video Card */}
                                    <motion.div
                                        className="relative rounded-[30px] overflow-hidden h-[400px] bg-cover bg-center mb-8"
                                        style={{ backgroundImage: `url(${currentService.videoThumbnail})` }}
                                        variants={fadeInUp}
                                    >
                                        <div className="absolute inset-0 bg-black/20" />
                                        <button className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-[#24544B] rounded-full p-6 shadow-2xl hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                                            </div>
                                        </button>
                                    </motion.div>

                                    {/* Stats Row */}
                                    <motion.div
                                        className="grid md:grid-cols-3 gap-8"
                                        variants={fadeInUp}
                                    >
                                        {currentService.stats.map((stat, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-[40px] mb-2">{stat.icon}</div>
                                                <div className="font-heading text-[#1C4942] text-[36px] md:text-[42px] mb-2">
                                                    {stat.value}
                                                </div>
                                                <div className="font-body text-[#7B798C] text-[16px]">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* FAQ Section */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                >
                                    <motion.h2
                                        className="font-heading text-[#1C4942] text-[32px] md:text-[40px] mb-8"
                                        variants={fadeInUp}
                                    >
                                        Frequently asked questions
                                    </motion.h2>
                                    <motion.div
                                        className="space-y-4"
                                        variants={fadeInUp}
                                    >
                                        {faqItems.map((faq, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-[20px] overflow-hidden border border-gray-100"
                                            >
                                                <button
                                                    onClick={() => toggleFaq(idx)}
                                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                                >
                                                    <span className="font-heading text-[#1C4942] text-[18px] md:text-[20px] pr-4">
                                                        {faq.question}
                                                    </span>
                                                    <ChevronRight
                                                        className={`w-6 h-6 text-[#24544B] flex-shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-90' : ''
                                                            }`}
                                                    />
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'max-h-96' : 'max-h-0'
                                                        }`}
                                                >
                                                    <div className="px-6 pb-6">
                                                        <p className="font-body text-[#7B798C] text-[16px] leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Scrolling Marquee */}
                    <Marquee />
                </main>

                <Footer />
            </div >
        </>
    );
};

export default ServiceDetail;