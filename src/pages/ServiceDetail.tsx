import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Play, Phone, Check } from 'lucide-react';
import { services } from '../data/serviceDetails';
import { faqItems } from '../data/serviceDetails';
const ServiceDetail = () => {
    const [selectedServiceId, setSelectedServiceId] = useState<string>('dermal-fillers');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const currentService = services.find(s => s.id === selectedServiceId) || services[0];

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
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
          <section className=" mx-auto  lg:px-8 lg:pt-2">
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center overflow-hidden">
                            {/* Decorative Leaf - Top Left */}
                            <svg
                                className="absolute top-6 left-6 md:top-10 md:left-10 w-20 h-20 md:w-28 md:h-28 opacity-20"
                                viewBox="0 0 100 100"
                                fill="none"
                            >
                                <path
                                    d="M20 80C20 80 30 60 40 50C50 40 60 30 80 20C60 30 50 40 40 50C30 60 20 80 20 80Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path
                                    d="M25 75C25 75 35 60 42 52C48 45 55 38 70 28"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>

                            {/* Decorative Leaf - Bottom Right */}
                            <svg
                                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-20 h-20 md:w-28 md:h-28 opacity-20"
                                viewBox="0 0 100 100"
                                fill="none"
                            >
                                <path
                                    d="M80 20C80 20 70 40 60 50C50 60 40 70 20 80C40 70 50 60 60 50C70 40 80 20 80 20Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path
                                    d="M75 25C75 25 65 40 58 48C52 55 45 62 30 72"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>

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
                    </section>

                    {/* Main Content: Two-Column Layout */}
                    <section className=" mx-auto px-6 lg:px-32 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                            {/* LEFT SIDEBAR */}
                            <aside className="lg:col-span-3">
                                <div className="lg:sticky lg:top-24 space-y-8">
                                    {/* Services Category Card */}
                                    <div className="bg-[#F7F0F2] rounded-[30px] p-4">
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
                                                    <ChevronRight
                                                        className={`w-5 h-5 transition-transform ${selectedServiceId === service.id
                                                            ? 'text-[#24544B] transform rotate-90'
                                                            : 'text-[#7B798C]'
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Promo Card */}
                                    <div
                                        className="relative rounded-[30px] overflow-hidden h-[400px] bg-cover bg-center"
                                        style={{
                                            backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop)'
                                        }}
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

                                            <div className="bg-white rounded-lg p-4 flex items-center gap-3">
                                                <div className="bg-[#24544B] rounded-full p-3">
                                                    <Phone className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-body text-[#7B798C] text-sm">Call Us</p>
                                                    <p className="font-heading text-[#1C4942] text-lg">+91 123 456 7890</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* RIGHT MAIN CONTENT */}
                            <div className="lg:col-span-9">
                                {/* Hero Service Image */}
                                <div className="rounded-[30px] overflow-hidden mb-8 transition-opacity duration-500">
                                    <img
                                        src={currentService.heroImage}
                                        alt={currentService.name}
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                    />
                                </div>

                                {/* Intro Text & Bullet List */}
                                <div className="mb-12">
                                    {currentService.description.map((paragraph, idx) => (
                                        <p key={idx} className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-4">
                                            {paragraph}
                                        </p>
                                    ))}

                                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                                        {currentService.bulletPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="bg-[#24544B] rounded-full p-1 mt-1 flex-shrink-0">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="font-body text-[#1C4942] text-[16px]">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Comprehensive Care Section */}
                                <div className="mb-16">
                                    <h2 className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[50px] mb-4">
                                        Comprehensive care for your skin
                                    </h2>
                                    <p className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-8">
                                        Our holistic approach combines advanced medical treatments with personalized care to deliver exceptional results for every patient.
                                    </p>

                                    {/* Images Row */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {currentService.comprehensiveImages.map((img, idx) => (
                                            <div key={idx} className="rounded-[30px] overflow-hidden">
                                                <img
                                                    src={img}
                                                    alt={`Treatment ${idx + 1}`}
                                                    className="w-full h-[300px] object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Feature Cards Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
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
                                    </div>
                                </div>

                                {/* Enhancing Natural Beauty Section */}
                                <div className="mb-16">
                                    <h2 className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[50px] mb-4">
                                        Enhancing your natural beauty
                                    </h2>
                                    <p className="font-body text-[#7B798C] text-[16px] md:text-[18px] leading-relaxed mb-8">
                                        {currentService.enhancingText}
                                    </p>

                                    {/* Video Card */}
                                    <div
                                        className="relative rounded-[30px] overflow-hidden h-[400px] bg-cover bg-center mb-8"
                                        style={{ backgroundImage: `url(${currentService.videoThumbnail})` }}
                                    >
                                        <div className="absolute inset-0 bg-black/20" />
                                        <button className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-[#24544B] rounded-full p-6 shadow-2xl hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                                            </div>
                                        </button>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="grid md:grid-cols-3 gap-8">
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
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div>
                                    <h2 className="font-heading text-[#1C4942] text-[32px] md:text-[40px] mb-8">
                                        Frequently asked questions
                                    </h2>
                                    <div className="space-y-4">
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
                                    </div>
                                </div>
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
