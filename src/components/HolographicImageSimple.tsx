import React from 'react';

interface HolographicImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

/**
 * HolographicImage - Image component with holographic hover effect
 * 
 * Features:
 * - Cyan holographic shine sweep on hover
 * - Scale-up animation (1.0 → 1.05)
 * - Glowing cyan shadow effect
 * - Smooth 500ms transitions
 * 
 * Usage:
 * <HolographicImage
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   className="w-full h-[400px] object-cover rounded-[30px]"
 * />
 */
export const HolographicImage: React.FC<HolographicImageProps> = ({
    src,
    alt,
    className = '',
    containerClassName = '',
}) => {
    return (
        <div className={`relative ${containerClassName}`}>
            {/* Main Card Container */}
            <div className="holographic-card group relative overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">

                {/* Image */}
                <img
                    src={src}
                    alt={alt}
                    className={`relative z-10 w-full h-full ${className}`}
                />

                {/* Holographic Shine Sweep Effect */}
                <div
                    className="holographic-shine absolute inset-0 pointer-events-none opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
                    style={{
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'linear-gradient(0deg, transparent, transparent 30%, rgba(0, 255, 255, 0.3))',
                        transform: 'rotate(-45deg)',
                        transition: 'all 0.5s ease',
                    }}
                />
            </div>

            {/* Global Styles for Hover Animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
          .holographic-card:hover .holographic-shine {
            transform: rotate(-45deg) translateY(100%);
          }
        `
            }} />
        </div>
    );
};

export default HolographicImage;
