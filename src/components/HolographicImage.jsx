// HolographicImage.jsx

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Configuration for the effect strength
const config = {
  rotationRange: 8, // Max rotation (in degrees) on X and Y axis
  shineIntensity: 0.5, // Intensity of the shine/lighting effect
  scaleFactor: 1.05, // How much the image scales up on hover
};

export const HolographicImage = ({ src, alt, className = '', containerClassName = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 1. Calculate Rotation (Tilt Effect)
  // Maps mouse position (0 to ref.offsetWidth) to a rotation range (-config.rotationRange to +config.rotationRange)
  const rotateX = useTransform(y, [0, 1], [config.rotationRange, -config.rotationRange]);
  const rotateY = useTransform(x, [0, 1], [-config.rotationRange, config.rotationRange]);

  // 2. Calculate Shine Position (Light Spot)
  // Used to position a radial gradient overlay
  const shineX = useTransform(x, [0, 1], ['100%', '0%']);
  const shineY = useTransform(y, [0, 1], ['100%', '0%']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the element (0 to 1)
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    // Update MotionValues
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset MotionValues to center (0.5 for a range of 0 to 1) on mouse leave
    x.set(0.5);
    y.set(0.5);
  };

  return (
    // Outer container for the shadow and overall sizing
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative isolate will-change-transform ${containerClassName}`}
      style={{
        // Set perspective for 3D effect. The higher the value, the less dramatic the tilt.
        perspective: '1000px',
      }}
    >
      {/* The main image element with 3D rotation and scale */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full ${className}`}
        style={{
          rotateX,
          rotateY,
          scale: useTransform(x, [0, 1], [config.scaleFactor, config.scaleFactor]), // Scale up on hover
          transformStyle: 'preserve-3d', // Necessary for children to inherit 3D space
          transition: 'box-shadow 0.3s ease', // Smooth transition for non-motion values
        }}
        transition={{
          // Use a spring for a natural, smooth stop
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Holographic/Shine Overlay */}
      <motion.div
        className="absolute inset-0 rounded-[30px] md:rounded-[40px] pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          // Use the shine position and rotation values to create the light effect
          opacity: useTransform(x, [0, 1], [config.shineIntensity, config.shineIntensity]),
          rotateX,
          rotateY,
          background: useTransform(
            [shineX, shineY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`
          ),
          transformStyle: 'preserve-3d',
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
        // The opacity will be set to 1 on hover via CSS in a parent if you need it to fade in
      />
    </motion.div>
  );
};