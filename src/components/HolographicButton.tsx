import React, { useRef, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface HolographicButtonProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

export const HolographicButton: React.FC<HolographicButtonProps> = ({
    to,
    children,
    className = ''
}) => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <Link
            ref={buttonRef}
            to={to}
            className={`holographic-button ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {/* Holographic overlay layer */}
            <div className="holographic-overlay" />

            {/* Radial glow that follows cursor */}
            {isHovering && (
                <div
                    className="holographic-glow"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                    }}
                />
            )}

            {/* Rainbow hologram pattern */}
            <div className="holographic-rainbow" />

            {/* Light trail effect */}
            {isHovering && (
                <div
                    className="holographic-trail"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                    }}
                />
            )}

            {/* Button content */}
            <span className="holographic-content">
                {children}
            </span>
        </Link>
    );
};
