import React, { useRef } from 'react';
import { ArrowRight, Play, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- REUSABLE HOLOGRAPHIC COMPONENT ---
const HolographicCard = ({ src, className, rounded = "rounded-[30px]" }) => {
  const ref = useRef(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt (Ye jerkiness hatata hai)
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Convert mouse position to rotation degrees
  // X axis mouse movement = Rotate Y axis (Left/Right tilt)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Shine effect position (Moves opposite to tilt)
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden transition-all duration-200 ease-out ${rounded} ${className}`}
    >
      {/* The Image */}
      <img
        src={src}
        alt="Holographic view"
        className={`w-full h-full object-cover pointer-events-none ${rounded}`}
        style={{ transform: "translateZ(20px)" }} // Adds depth
      />

      {/* Holographic Shine/Glare Overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          mixBlendMode: "overlay", // Makes it look like light
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />
      
      {/* Extra gloss reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
export default HolographicCard;