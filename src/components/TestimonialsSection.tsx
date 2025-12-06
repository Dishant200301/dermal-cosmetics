import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

// --- Design Colors and Constants ---
const COLORS = {
  primaryDark: "#1C4942", // Main Heading, Quote Icon, Name
  secondaryDark: "#24544B", // Star Color, Dot Icon, Active Dot
  lightGrayText: "#7B798C", // Label, Subtext, Role, Inactive Dot
  cardBackground: "#F7F0F2", // Review Card Background
  sectionBackground: "#FDF8F9", // Simulated pale pink background
};

// --- Review Data (5 reviews for slider) ---
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}
const brands = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];
const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.",
    author: "Jane Cooper",
    role: "Beauty Treatments",
    avatar:
      "https://images.unsplash.com/photo-1594744803329-e58b31de7812?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "The experts at this clinic took the time to truly understand my condition and prescribed a treatment plan that worked wonders. The combination of medical treatments.",
    author: "Dianne Russell",
    role: "Eczema Treatment",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Highly recommend! My skin has never looked better. The treatment was personalized and the staff was incredibly kind and professional.",
    author: "Jenny Wilson",
    role: "Skin Expert",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. Their expertise in advanced dermatology is truly exceptional.",
    author: "David Julio",
    role: "Makeup Artist",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "A life-changing experience! My confidence has improved tenfold thanks to the comprehensive care and effective products they recommended.",
    author: "Maria Sanchez",
    role: "Aesthetics Nurse",
    avatar:
      "https://images.unsplash.com/photo-1610271340738-72644d6532ae?w=100&h=100&fit=crop&crop=face",
  },
];

// --- Sub-Components ---

// Review Card Component
const ReviewCard = ({ review }: { review: Testimonial }) => {
  return (
    <div
      className="flex-shrink-0 w-full md:w-[calc(50%-20px)] rounded-[30px] transition-all duration-300 relative"
      style={{
        backgroundColor: COLORS.cardBackground,
        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        height: "316px",
      }}
    >
      {/* Quote Icon - Absolute positioned at top-left */}
      <Quote
        className="absolute w-[60px] h-[60px]"
        style={{
          color: COLORS.primaryDark,
          left: "30px",
          top: "30px"
        }}
      />

      {/* Star Rating Row - Absolute positioned */}
      <div
        className="absolute flex gap-1"
        style={{
          left: "110px",
          top: "30px",
          height: "20px"
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-current"
            style={{ color: COLORS.secondaryDark }}
          />
        ))}
      </div>

      {/* Testimonial Text - Absolute positioned */}
      <p
        className="absolute font-body text-[20px] leading-[32px]"
        style={{
          color: "rgba(0, 0, 0, 0.50)",
          left: "110px",
          top: "72.41px",
          width: "427.75px",
          maxWidth: "calc(100% - 140px)", // Responsive constraint
        }}
      >
        {review.quote}
      </p>

      {/* Author Block - Absolute positioned */}
      <div
        className="absolute flex items-center gap-4"
        style={{
          left: "110px",
          top: "228px"
        }}
      >
        <img
          src={review.avatar}
          alt={review.author}
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <p
            className="font-heading text-[22px] leading-[24px] mb-1"
            style={{ color: COLORS.primaryDark }}
          >
            {review.author}
          </p>
          <p
            className="font-body text-[18px] leading-[29px]"
            style={{ color: COLORS.lightGrayText }}
          >
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const testimonials = defaultTestimonials;

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate transform offset
  const getTransformValue = () => {
    if (isDesktop) {
      // Desktop: 2 cards visible, each card is ~50% width + gap
      // Move by one card width (50% + gap spacing)
      const maxIndex = testimonials.length - 2; // Can't go beyond showing last 2 cards
      const safeIndex = Math.min(activeIndex, maxIndex);
      return `translateX(calc(-${safeIndex * 50}% - ${safeIndex * 20}px))`;
    } else {
      // Mobile/Tablet: 1 card visible, 100% width
      return `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 40}px))`;
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: COLORS.sectionBackground,
        minHeight: "1000px",
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundImage: `url("https://demo.awaikenthemes.com/dermal/wp-content/uploads/2025/03/testimonial-bg.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label with Dot */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS.secondaryDark }}
            />
            <span
              className="font-sans text-[16px] font-medium"
              style={{ color: COLORS.lightGrayText }}
            >
              Testimonials
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="font-heading mb-6 text-[32px] leading-tight tracking-tight text-[#1C4942] sm:text-[40px] md:text-[50px]"
            style={{ letterSpacing: "-1px" }}
          >
            Real patient stories that reflect
            <br className="hidden md:block" />
            exceptional skin care
          </h2>

          {/* Subtext */}
          <p
            className="font-body mx-auto max-w-[640px] text-[16px] leading-[26px] text-[#7B798C] sm:text-[18px] sm:leading-[29px]"
          >
            Hear from our satisfied patients about their journey to healthier,
            glowing skin. Their stories reflect the care, expertise.
          </p>
        </div>

        {/* Testimonial Cards Slider */}
        <div className="overflow-hidden mb-12">
          <div
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: getTransformValue(),
            }}
          >
            {testimonials.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mb-24">
          {testimonials.map((_, index) => {
            // On desktop, disable dots that would show incomplete sets
            const isDisabled = isDesktop && index > testimonials.length - 2;

            return (
              <button
                key={index}
                onClick={() => !isDisabled && setActiveIndex(index)}
                disabled={isDisabled}
                className={`transition-all duration-300 rounded-full h-[10px] ${index === activeIndex
                  ? "w-[22px]"
                  : "w-[10px]"
                  }`}
                style={{
                  backgroundColor:
                    index === activeIndex
                      ? COLORS.secondaryDark
                      : "rgba(123, 121, 140, 0.14)",
                  opacity: isDisabled ? 0.3 : 1,
                  cursor: isDisabled ? 'not-allowed' : 'pointer'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Brands Section */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className="border-t pt-12 md:pt-16"
          style={{ borderColor: "rgba(123, 121, 140, 0.14)" }}
        >
          {/* Mobile: Heading + horizontal scroll logos */}
          <div className="md:hidden">
            {/* Heading - Center aligned */}
            <h3
              className="font-heading text-[22px] leading-[31px] text-center mb-8"
              style={{
                color: COLORS.primaryDark,
                letterSpacing: "-0.44px"
              }}
            >
              Trusted By Leading Brands In The Industry
            </h3>

            {/* Logos - Horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex flex-nowrap items-center gap-8 min-w-max">
                {brands.map((brand, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#24544B] flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 4L4 28h24L16 4zm0 6l8 14H8l8-14z" />
                    </svg>
                    <span className="font-heading text-[18px] whitespace-nowrap">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet & Desktop: Grid layout with heading on left */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
            {/* Heading - Left side (3 columns) */}
            <h3
              className="font-heading text-[22px] leading-[31px] text-center md:text-left md:col-span-3"
              style={{
                color: COLORS.primaryDark,
                letterSpacing: "-0.44px"
              }}
            >
              Trusted By Leading Brands In The Industry
            </h3>

            {/* Logos - Right side (9 columns) */}
<div className="md:col-span-9 overflow-x-auto lg:overflow-visible scrollbar-hide">
  <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-end items-center gap-8 lg:gap-2 min-w-max lg:min-w-0">                {brands.map((brand, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#24544B] flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 4L4 28h24L16 4zm0 6l8 14H8l8-14z" />
                    </svg>
                    <span className="font-heading text-[18px] whitespace-nowrap">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;