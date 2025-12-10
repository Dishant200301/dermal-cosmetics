import React from "react";

interface HolographicHoverCardProps {
    src: string;
    alt: string;
    className?: string;
}

export default function HolographicHoverCard({ src, alt, className = "" }: HolographicHoverCardProps) {
    return (
        <div className="relative group rounded-3xl overflow-hidden p-[3px] transition-all duration-500">

            {/* Holographic Glow Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-200/60 to-transparent 
                      opacity-60 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            {/* Card Content */}
            <div className="relative rounded-3xl overflow-hidden">
                <img                            
                    src={src}
                    alt={alt}
                    className={`rounded-3xl w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${className}`}
                />
            </div>
        </div>
    );
}
