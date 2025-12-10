import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

// ====================================================================
// HOVER EFFECT UTILITIES (Magnifying/Holographic Effect)
// ====================================================================

/**
 * Calculates the X and Y rotation values based on mouse position.
 * @param rect - Bounding box of the element.
 * @param event - Mouse event.
 * @returns {x: number, y: number} - Rotation values (-1 to 1).
 */
const calculateRotation = (rect: DOMRect, event: React.MouseEvent) => {
  const { width, height, left, top } = rect;
  const mouseX = event.clientX - left;
  const mouseY = event.clientY - top;

  // Normalize x and y to be between -1 and 1
  const normalizedX = (mouseX / width) * 2 - 1;
  const normalizedY = (mouseY / height) * 2 - 1;

  // The rotation is inversely proportional to the mouse position for a "3D" effect
  // Max rotation: 5 degrees
  const rotationX = normalizedY * -5;
  const rotationY = normalizedX * 5;

  return { rotationX, rotationY };
};

// ====================================================================
// IMAGE ANIMATION COMPONENT
// ====================================================================

interface ImageAnimationProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string; // Classes for the actual <img> tag
  containerClassName?: string; // Classes for the outer <div> container
}

/**
 * A reusable component for an image that includes:
 * 1. Scroll-based fade-in (using Framer Motion's 'variants')
 * 2. An interactive holographic-like hover effect (using Framer Motion's 'useSpring' and CSS).
 */
export const ImageAnimation: React.FC<ImageAnimationProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  ...props
}) => {
  // Motion values for the interactive 3D/Holographic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth rotation
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  // State to track if the element is being hovered (used for the shine effect)
  const [isHovering, setIsHovering] = useState(false);

  // Reference for the bounding box
  const cardRef = React.useRef<HTMLDivElement>(null);

  /**
   * Handles mouse movement to calculate 3D rotation and shine position.
   */
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateRotation(rect, event);

    // Update Motion Values for rotation
    rotateX.set(rotationX);
    rotateY.set(rotationY);

    // Update Motion Values for the shine effect's radial gradient position
    // Map client coordinates to normalized coordinates (0 to 1) for the shine
    const normalizedShineX = (event.clientX - rect.left) / rect.width;
    const normalizedShineY = (event.clientY - rect.top) / rect.height;
    mouseX.set(normalizedShineX); // This M.V. is used for the gradient shine in CSS
    mouseY.set(normalizedShineY);
  };

  /**
   * Resets rotation and shine position when the mouse leaves.
   */
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovering(false);
  };

  /**
   * Sets the hover state when the mouse enters.
   */
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Variant for the scroll animation (Fade Up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Outer container for positioning and scroll animation
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp} // Apply the scroll-based animation here
      className={`relative w-full overflow-hidden ${containerClassName}`}
      // Interactive 3D/Holographic Effect Handlers
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      // Apply the spring-driven 3D rotation to the entire container
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover relative z-10 ${className}`}
        {...props}
        // Ensure the image itself doesn't cause overflow issues during rotation
        style={{
          transform: 'translateZ(20px)', // A slight 3D translation
        }}
      />

      {/* Holographic Shine Pseudo-Element (Rendered conditionally based on hover state) */}
      {isHovering && (
        <motion.div
          className="holographic-shine absolute inset-0 z-20 pointer-events-none"
          // We use 'motion.div' to apply the motion values for the background
          style={{
            // Apply a slight scale-up on hover to enhance the 3D effect
            scale: 1.05,
            // The magic happens here: use the motion values to position the radial gradient
            background: useTransform(
              [mouseX, mouseY] as [MotionValue<number>, MotionValue<number>],
              ([x, y]) =>
                `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 60%)`
            ),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

// Export the component as a default export if desired, but named export is fine
// export default ImageAnimation;