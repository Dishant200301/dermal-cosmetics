import React, { useState, useRef, MouseEvent } from 'react';

interface HolographicImageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * HolographicImageWrapper - Adds premium holographic hover effect to images
 * 
 * Features:
 * - Cursor-tracking gradient sheen
 * - Glossy reflective surface animation
 * - Subtle scale-up on hover
 * - Smooth 400ms transitions
 */
export const HolographicImageWrapper: React.FC<HolographicImageWrapperProps> = ({
    children,
    className = ''
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setMousePosition({ x, y });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden transition-transform duration-400 ease-out ${isHovered ? 'scale-[1.02]' : 'scale-100'
                } ${className}`}
            style={{
                willChange: 'transform',
            }}
        >
            {/* Holographic Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-400 ease-out z-10"
                style={{
                    opacity: isHovered ? 0.4 : 0,
                    background: `radial-gradient(
                        600px circle at ${mousePosition.x}% ${mousePosition.y}%,
                        rgba(0, 255, 255, 0.15),
                        rgba(138, 43, 226, 0.1) 40%,
                        rgba(255, 20, 147, 0.05) 60%,
                        transparent 100%
                    )`,
                }}
            />

            {/* Shimmer Effect */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-400 ease-out z-10"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `linear-gradient(
                        ${mousePosition.x > 50 ? '135deg' : '45deg'},
                        transparent 30%,
                        rgba(255, 255, 255, 0.1) 50%,
                        transparent 70%
                    )`,
                }}
            />

            {/* Border Glow */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-400 ease-out z-10 rounded-[inherit]"
                style={{
                    opacity: isHovered ? 0.6 : 0,
                    boxShadow: `
                        0 0 20px rgba(0, 255, 255, 0.3),
                        0 0 40px rgba(138, 43, 226, 0.2),
                        inset 0 0 20px rgba(255, 255, 255, 0.05)
                    `,
                }}
            />

            {/* Content */}
            <div className="relative z-0">
                {children}
            </div>
        </div>
    );
};

export default HolographicImageWrapper;
