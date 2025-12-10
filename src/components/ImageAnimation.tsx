import React from 'react';
import { motion } from 'framer-motion';
import { HolographicImageWrapper } from './HolographicImageWrapper';

interface ImageAnimationProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    disableHolographic?: boolean;
    disableScrollAnimation?: boolean;
}

/**
 * ImageAnimation - Universal image component with scroll fade-in and holographic hover
 * 
 * GLOBAL RULE: Use this component for ALL images across the site
 * 
 * Features:
 * ✅ Smooth fade-in animation on scroll (opacity, scale, y-motion)
 * ✅ Holographic hover effect with cursor tracking
 * ✅ Fully responsive (mobile, tablet, laptop, desktop)
 * ✅ Animation triggers only when image enters viewport
 * ✅ No animation repeat after first reveal
 * 
 * @param src - Image source URL
 * @param alt - Image alt text for accessibility
 * @param className - Classes applied to the <img> element
 * @param containerClassName - Classes applied to the outer container
 * @param disableHolographic - Set to true to disable hover effect
 * @param disableScrollAnimation - Set to true to disable scroll animation
 * 
 * @example
 * <ImageAnimation
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   className="w-full h-[400px] object-cover rounded-[30px]"
 * />
 */
export const ImageAnimation: React.FC<ImageAnimationProps> = ({
    src,
    alt,
    className = '',
    containerClassName = '',
    disableHolographic = false,
    disableScrollAnimation = false,
}) => {
    // Scroll animation configuration
    const scrollAnimationProps = {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: {
            duration: 0.7,
            ease: [0.0, 0.0, 0.2, 1.0] as const
        },
        viewport: {
            once: true,  // Animation triggers only once
            amount: 0.3  // Triggers when 30% of image is visible
        },
    };

    // If both effects are disabled, return plain image
    if (disableHolographic && disableScrollAnimation) {
        return (
            <div className={containerClassName}>
                <img src={src} alt={alt} className={className} />
            </div>
        );
    }

    // If only holographic is disabled
    if (disableHolographic) {
        return (
            <motion.div
                {...scrollAnimationProps}
                className={containerClassName}
            >
                <img src={src} alt={alt} className={className} />
            </motion.div>
        );
    }

    // If only scroll animation is disabled
    if (disableScrollAnimation) {
        return (
            <div className={containerClassName}>
                <HolographicImageWrapper className="w-full h-full">
                    <img src={src} alt={alt} className={className} />
                </HolographicImageWrapper>
            </div>
        );
    }

    // Full experience: Scroll animation + Holographic hover
    return (
        <motion.div
            {...scrollAnimationProps}
            className={containerClassName}
        >
            <HolographicImageWrapper className="w-full h-full">
                <img src={src} alt={alt} className={className} />
            </HolographicImageWrapper>
        </motion.div>
    );
};

export default ImageAnimation;
