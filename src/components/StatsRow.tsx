import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

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

// ====================================================================
// ANIMATED COUNTER COMPONENT
// ====================================================================
interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract number and suffix (%, +, etc.)
  const match = value.match(/^([\d,]+)\s*(.*)$/);
  const numberPart = match ? match[1].replace(/,/g, '') : '0';
  const suffix = match ? match[2] : '';
  const targetNumber = parseInt(numberPart, 10);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = React.useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, targetNumber, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      // Format with commas if original had commas
      const formatted = match && match[1].includes(',')
        ? Math.floor(latest).toLocaleString()
        : Math.floor(latest).toString();
      setDisplayValue(formatted);
    });

    return unsubscribe;
  }, [springValue, match]);

  return (
    <p ref={ref} className={className}>
      {displayValue} {suffix}
    </p>
  );
};

const stats = [
  {
    icon: (
      <img
        src="/image/about-icon-1.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Patient Satisfaction"
      />
    ),
    value: "96 %",
    label: "Patient Satisfaction Rate",
  },
  {
    icon: (
      <img
        src="/image/about-icon-2.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Years Of Experience"
      />
    ),
    value: "12 +",
    label: "Years Of Experience",
  },
  {
    icon: (
      <img
        src="/image/about-icon-3.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Successful Surgeries"
      />
    ),
    value: "1,000 +",
    label: "Successful Surgeries",
  },
  {
    icon: (
      <img
        src="/image/about-icon-4.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="State Of The Art Facility"
      />
    ),
    value: "30 +",
    label: "State-Of-The-Art Facility",
  },
];

export const StatsRow = () => {
  return (
    <section className="xl:container mx-auto bg-[#FDF7F7] py-12">
      <div className="px-6 lg:px-10 xl:px-20">

        {/* Responsive Grid (STAGGER CONTAINER) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12"
        >

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp} // Apply individual fade-up animation to each stat block
              className="flex flex-col items-center md:items-start space-y-2"
            >

              {/* Mobile: Vertical Stack (icon, value, label) | Tablet+: Horizontal (icon + value, then label) */}

              {/* Icon - Centered on mobile, left-aligned on md+ */}
              <div className="flex-shrink-0 md:hidden">{stat.icon}</div>

              {/* Icon + Value Row - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex-shrink-0">{stat.icon}</div>

                {/* Animated Counter */}
                <AnimatedCounter
                  value={stat.value}
                  className="font-heading text-[32px] md:text-[36px] lg:text-[30px] xl:text-[40px] text-[#1C4942] leading-none"
                />
              </div>

              {/* Value - Centered on mobile, hidden on md+ */}
              <AnimatedCounter
                value={stat.value}
                className="md:hidden font-heading text-[32px] text-[#1C4942] leading-none"
              />

              {/* Label - Centered on mobile, left-aligned with padding on md+ */}
              <p className="font-body text-[14px] md:text-[15px] lg:text-[16px] text-[#6C6C6C] text-center md:text-left md:pl-[64px] lg:pl-[72px]">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};