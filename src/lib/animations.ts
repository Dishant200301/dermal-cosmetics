/**
 * Framer Motion Animation Constants
 * 
 * This file contains reusable animation variants and easing functions
 * that are type-safe and can be used across the application.
 */

// Type-safe easing function (easeOut as cubic-bezier)
export const EASE_OUT = [0.0, 0.0, 0.2, 1.0] as const;

// Standard animation duration
export const ANIMATION_DURATION = 0.6;

// Standard stagger delay
export const STAGGER_DELAY = 0.15;

// Fade In Up Variant (Type-safe)
export const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: ANIMATION_DURATION, 
            ease: EASE_OUT
        } 
    }
} as const;

// Stagger Container Variant (Type-safe)
export const staggerContainerVariant = {
    hidden: {}, 
    visible: {
      transition: {
        staggerChildren: STAGGER_DELAY,
      }
    }
} as const;

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
    once: true,
    amount: 0.3
} as const;
