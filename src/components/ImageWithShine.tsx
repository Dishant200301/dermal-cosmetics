import React from 'react';

interface ImageWithShineProps {
    src: string;
    alt: string;
    className?: string;
    rounded?: string;
    wrapperClassName?: string;
}

/**
 * Reusable Image Component with Shine Hover Effect
 * Usage: <ImageWithShine src="..." alt="..." className="..." />
 */
const ImageWithShine: React.FC<ImageWithShineProps> = ({
    src,
    alt,
    className = '',
    rounded = 'rounded-[30px]',
    wrapperClassName = ''
}) => {
    return (
        <div className={`group relative overflow-hidden ${rounded} ${wrapperClassName}`}>
            {/* Shine Effect - Sweeps from left to right on hover */}
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

            {/* Image */}
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-transform duration-700 ${className}`}
            />
        </div>
    );
};

export default ImageWithShine;
