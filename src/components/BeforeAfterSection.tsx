import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Before/After Image Comparison Component
interface BeforeAfterImageProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

const BeforeAfterImage = ({ beforeImage, afterImage, alt }: BeforeAfterImageProps) => {
    return (
        <div className="relative h-[320px] md:h-[380px] rounded-[24px] md:rounded-[30px] overflow-hidden group">
            {/* Before Image (Left Half) */}
            <div className="absolute inset-0 w-1/2 left-0">
                <img
                    src={beforeImage}
                    alt={`${alt} - Before`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* After Image (Right Half) */}
            <div className="absolute inset-0 w-1/2 right-0">
                <img
                    src={afterImage}
                    alt={`${alt} - After`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Vertical Divider Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/60 transform -translate-x-1/2" />

            {/* Circle Drag Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-transparent" />
        </div>
    );
};

// Before/After Data
const beforeAfterData = [
    {
        beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
        alt: 'Skin Treatment Result 1',
    },
    {
        beforeImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
        alt: 'Skin Treatment Result 2',
    },
];

export const BeforeAfterSection = () => {
    return (
        <section className="bg-[#F7F0F2] py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-20 max-w-[1300px]">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#7B798C]"></div>
                    <span className="font-body text-[#7B798C] text-base font-medium">
                        Our Result
                    </span>
                </div>

                {/* Main Heading */}
                <h2
                    className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-[110%] text-center max-w-[800px] mx-auto mb-5"
                    style={{ letterSpacing: '-1px' }}
                >
                    Before & after: witness the power of dermatology
                </h2>

                {/* Description Paragraph */}
                <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed text-center max-w-[650px] mx-auto mb-12 lg:mb-16">
                    See the remarkable transformations for yourself—our 'Before & After'
                    gallery highlights the powerful impact of dermatological treatments.
                </p>

                {/* Image Comparison Row */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
                    {beforeAfterData.map((item, index) => (
                        <BeforeAfterImage
                            key={index}
                            beforeImage={item.beforeImage}
                            afterImage={item.afterImage}
                            alt={item.alt}
                        />
                    ))}
                </div>

                {/* View All Result Button */}
                <div className="flex justify-center">
                    <Link
                        to="/results"
                        className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 bg-[#24544B] text-white rounded-full font-body text-base font-medium hover:bg-[#1C4942] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        View All Result
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
