import { Package, Globe, Heart } from 'lucide-react';

const cards = [
    {
        icon: Package,
        title: 'Our Mission',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'light' as const,
    },
    {
        icon: Globe,
        title: 'Our Vision',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'dark' as const,
    },
    {
        icon: Heart,
        title: 'Our Value',
        description: 'Commitment exceptional quality, patient-centric care,continuous innovation in dermatology.',
        variant: 'light' as const,
    },
];

export const MissionVisionSection = () => {
    return (
        <section className="relative py-20 lg:py-24">
            {/* Main Wrapper with Soft Pink Background */}
            <div className="relative bg-[#F6ECEF] lg:rounded-[40px] xl:rounded-[40px] mx-0 lg:mx-20 pt-16 lg:pt-24 pb-32 lg:pb-40 overflow-hidden">
                {/* Decorative Leaf - Left Bottom */}
                <svg
                    className="absolute left-0 bottom-10 w-48 h-48 lg:w-60 lg:h-60 opacity-30"
                    viewBox="0 0 240 240"
                    fill="none"
                >
                    <path
                        d="M40 200C40 200 80 140 120 100C160 60 200 40 200 40C200 40 160 60 120 100C80 140 40 200 40 200Z"
                        stroke="#24544B"
                        strokeWidth="3"
                        fill="none"
                    />
                    <path
                        d="M60 180C60 180 90 140 120 110C150 80 180 60 180 60"
                        stroke="#24544B"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                    />
                    <path
                        d="M50 190C50 190 75 155 100 130C125 105 150 90 150 90"
                        stroke="#24544B"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.4"
                    />
                </svg>

                {/* Decorative Leaf - Right Top */}
                <svg
                    className="absolute right-0 top-12 w-48 h-48 lg:w-60 lg:h-60 opacity-30"
                    viewBox="0 0 240 240"
                    fill="none"
                >
                    <path
                        d="M200 40C200 40 160 100 120 140C80 180 40 200 40 200C40 200 80 180 120 140C160 100 200 40 200 40Z"
                        stroke="#24544B"
                        strokeWidth="3"
                        fill="none"
                    />
                    <path
                        d="M180 60C180 60 150 100 120 130C90 160 60 180 60 180"
                        stroke="#24544B"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                    />
                    <path
                        d="M190 50C190 50 165 85 140 110C115 135 90 150 90 150"
                        stroke="#24544B"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.4"
                    />
                </svg>

                {/* Content Container */}
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    {/* Section Label */}
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#24544B]"></div>
                        <span className="font-body text-[#24544B] text-base">
                            Our Mission / Vision
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-heading text-[#0F3E34] text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[54px] text-center max-w-[880px] mx-auto mb-5">
                        Our Mission and Vision to Provide Exceptional Care Healthy, Radiant Skin
                    </h2>

                    {/* Subheading */}
                    <p className="font-body text-[#6C6C6C] text-base md:text-lg leading-relaxed text-center max-w-[760px] mx-auto mb-16">
                        With advanced treatments and personalized care, we aim to enhance your skin's health and boost your confidence at every step.
                    </p>
                </div>
            </div>

            {/* Cards Wrapper - Overlapping the bottom edge */}
            <div className="container mx-auto px-6 lg:px-12 relative -mt-24 lg:-mt-32 z-20">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-[28px] p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${card.variant === 'dark'
                                    ? 'bg-[#24544B] text-white'
                                    : 'bg-white text-[#0F3E34]'
                                }`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-[16px] mx-auto mb-6 flex items-center justify-center ${card.variant === 'dark'
                                        ? 'bg-white/10'
                                        : 'bg-[#F6ECEF]'
                                    }`}
                            >
                                <card.icon
                                    className={`w-8 h-8 ${card.variant === 'dark' ? 'text-white' : 'text-[#24544B]'
                                        }`}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className={`font-heading text-2xl lg:text-[28px] mb-4 ${card.variant === 'dark' ? 'text-white' : 'text-[#0F3E34]'
                                    }`}
                            >
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`font-body text-base leading-relaxed ${card.variant === 'dark' ? 'text-white/80' : 'text-[#6C6C6C]'
                                    }`}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
