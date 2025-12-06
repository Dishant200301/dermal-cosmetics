import { ArrowRight, CheckSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Circular Badge with Rotating Text
const CircularBadge = () => {
    return (
        <div className="absolute left-24 top-32 lg:left-28 lg:top-36 w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-[#24544B] bg-white flex items-center justify-center shadow-lg z-10 animate-subtle-rotate">
            <svg viewBox="0 0 120 120" className="w-full h-full">
                <defs>
                    <path
                        id="circlePath"
                        d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    />
                </defs>
                <text className="text-[9px] fill-[#24544B] font-body tracking-wider font-medium">
                    <textPath href="#circlePath" startOffset="0%">
                        Dermal • Care • SkinClinic •
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

// Expertise Badge
const ExpertiseBadge = () => {
    return (
        <div className="absolute -top-5 right-0 lg:right-0 bg-[#24544B] text-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
            </div>
            <div>
                <p className="font-heading text-2xl font-bold">49+</p>
                <p className="font-body text-xs text-white/90">Reliable Expertise</p>
            </div>
        </div>
    );
};

// Checklist Item Component
const ChecklistItem = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#24544B] flex-shrink-0" />
            <span className="font-body text-[#24544B] text-base">{text}</span>
        </div>
    );
};

const checklistItems = [
    'Expert Dermatologists',
    'Personalized Care',
    'Advanced Technology',
    'Comprehensive Services',
    'Effective Solutions',
    'Comfortable Environment',
];

export const CommitmentSection = () => {
    return (
        <section className="bg-[#F7EFEF] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left Column - Images */}
                    <div className="relative order-2 lg:order-1">
                        {/* Top Large Image */}
                        <div className="relative">
                            <div className="rounded-[20px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                                    alt="Dermatology Care"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Circular Floating Badge */}
                            <CircularBadge />

                            {/* Expertise Badge */}
                            <ExpertiseBadge />
                        </div>

                        {/* Bottom Medium Image - Overlapping */}
                        <div className="absolute left-36 lg:left-44 -bottom-10 w-[65%] rounded-[20px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop"
                                alt="Skin Treatment"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 flex flex-col gap-5">
                        {/* Section Label */}
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#24544B]"></div>
                            <span className="font-body text-[#24544B] text-base">Who We Are</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-heading text-[#0F3E34] text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[54px] max-w-[520px]">
                            Committed to Excellence in Skin Health and Care
                        </h2>

                        {/* Paragraph */}
                        <p className="font-body text-[#666666] text-base md:text-lg leading-relaxed max-w-[540px]">
                            Providing personalized dermatology solutions tailored to your unique skin needs, we offer expert care with a focus on long-term health.
                        </p>

                        {/* Checklist Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-2">
                            {checklistItems.map((item, index) => (
                                <ChecklistItem key={index} text={item} />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/services"
                            className="bg-[#24544B] text-white font-body font-medium px-7 py-3.5 rounded-full hover:bg-[#1C4942] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 w-fit mt-5"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Custom Animation for Circular Badge */}
            <style>{`
        @keyframes subtle-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-subtle-rotate {
          animation: subtle-rotate 20s linear infinite;
        }
      `}</style>
        </section>
    );
};
