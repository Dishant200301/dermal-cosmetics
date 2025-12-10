import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import ImageWithShine from './ImageWithShine';

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
      "Highly recommend! My skin has never looked better. The treatment was personalized and the staff was incredibly kind and professional. The combination of medical treatments.",
    author: "Jenny Wilson",
    role: "Skin Expert",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. Their expertise in advanced dermatology is truly exceptional. The combination of medical treatments.",
    author: "David Julio",
    role: "Makeup Artist",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "A life-changing experience! My confidence has improved tenfold thanks to the comprehensive care and effective products they recommended. The combination of medical treatments.",
    author: "Maria Sanchez",
    role: "Aesthetics Nurse",
    avatar:
      "https://images.unsplash.com/photo-1610271340738-72644d6532ae?w=100&h=100&fit=crop&crop=face",
  },
];

// --- Framer Motion Variants ---
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
      staggerChildren: 0.2 // Delay between the start of each child's animation
    }
  }
};


// --- Sub-Components ---

// Review Card Component (No animation needed here, handled by slider container)
const ReviewCard = ({ review }: { review: Testimonial }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[calc(50%-20px)] bg-[#F7F0F2] rounded-[30px] transition-all duration-300 relative h-[280px] md:h-[316px] shadow-sm hover:shadow-md p-6 md:p-8">

      {/* Quote Icon - Top left */}
      <img src="/image/Quote.png" className="absolute left-6 md:left-8 top-6 md:top-8 w-5 h-5 md:w-10 md:h-8 text-[#1C4942]" />

      {/* Star Rating Row - Next to quote icon */}
      <div className="absolute left-12 md:left-20 top-6 md:top-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 md:w-5 md:h-5 fill-[#24544B] text-[#24544B]"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="absolute left-6 md:left-20 top-16 md:top-20 right-6 md:right-8 font-body text-sm md:text-base lg:text-lg leading-relaxed md:leading-7 lg:leading-8 text-black/50 line-clamp-5">
        {review.quote}
      </p>

      {/* Author Block - Bottom */}
      <div className="absolute left-6 md:left-20 bottom-6 md:bottom-8 flex items-center gap-3 md:gap-4">
        <ImageWithShine
          src={review.avatar}
          alt={review.author}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover flex-shrink-0"
          rounded="rounded-full"
        />
        <div className="min-w-0">
          <p className="font-heading text-sm md:text-base lg:text-lg text-[#1C4942] font-semibold truncate">
            {review.author}
          </p>
          <p className="font-body text-xs md:text-sm lg:text-base text-[#7B798C] truncate">
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

  // Auto-rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (isDesktop) {
          // Desktop: 2 cards visible, max index is length - 2
          const maxIndex = testimonials.length - 2;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        } else {
          // Mobile: 1 card visible, max index is length - 1
          const maxIndex = testimonials.length - 1;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        }
      });
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isDesktop, testimonials.length]);

  // Calculate transform offset
  const getTransformValue = () => {
    if (isDesktop) {
      // Desktop/Tablet/Laptop: 2 cards visible, each card is ~50% width + gap
      // Move by one card width (50% + gap spacing)
      const maxIndex = testimonials.length - 2; // Can't go beyond showing last 2 cards
      const safeIndex = Math.min(activeIndex, maxIndex);
      return `translateX(calc(-${safeIndex * 50}% - ${safeIndex * 20}px))`;
    } else {
      // Mobile: 1 card visible, 100% width
      return `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 40}px))`;
    }
  };

  return (
    <section
      className="container  overflow-hidden bg-[#FDF8F9] min-h-[900px] md:min-h-[1000px] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24"
      style={{
        backgroundImage: `url("https://demo.awaikenthemes.com/dermal/wp-content/uploads/2025/03/testimonial-bg.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header (STAGGERED CONTAINER) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer} // Use staggerContainer to control children sequence
          className="text-center mb-12 md:mb-16"
        >
          {/* Label with Dot (1st element) */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#24544B]" />
            <span className="font-sans text-base font-medium text-[#7B798C]">
              Testimonials
            </span>
          </motion.div>

          {/* Main Heading (2nd element) */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading mb-6 text-[28px] md:text-[32px] lg:text-[42px] leading-tight tracking-tight text-[#1C4942] sm:text-[40px]"
            style={{ letterSpacing: "-1px" }}
          >
            Real patient stories that reflect
            <br className="hidden md:block" />
            exceptional skin care
          </motion.h2>

          {/* Subtext (3rd element) */}
          <motion.p
            variants={fadeInUp}
            className="font-body mx-auto max-w-[640px] text-[16px] leading-[26px] text-[#7B798C] sm:text-[18px] sm:leading-[29px]"
          >
            Hear from our satisfied patients about their journey to healthier,
            glowing skin. Their stories reflect the care, expertise.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards Slider (Single Animation) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp} // Use fadeInUp for the entire slider block
          className="overflow-hidden mb-12"
        >
          <div
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: getTransformValue(),
            }}
          >
            {/* ReviewCard component is not a motion.div here as it's part of the slider's translate logic */}
            {testimonials.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </motion.div>

        {/* Pagination Dots (Single Animation, added slight delay after slider) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Custom delay to follow the slider
          className="flex justify-center gap-3 mb-24"
        >
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
        </motion.div>


        {/* Brands Section (Single Animation, added slight delay) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} // Custom delay to follow pagination
          className="container mx-auto px-6 max-w-7xl"
        >
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
            <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-0 xl:gap-2 items-center">
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
                <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-end items-center gap-8 lg:gap-0 xl:gap-2 min-w-max lg:min-w-0">                {brands.map((brand, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#24544B] flex-shrink-0">
                    <img
                      src={i % 2 === 0 ? "/image/logo-1.png" : "/image/logo-2.png"}
                      alt={`Brand logo ${i + 1}`}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="font-heading font-bold text-[18px] whitespace-nowrap">{brand}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;