import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterImage = ({ beforeImage, afterImage, alt }: BeforeAfterImageProps) => {
  const [position, setPosition] = useState(50); // middle position
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;
    if (newPos < 0) newPos = 0;
    if (newPos > 100) newPos = 100;
    setPosition(newPos);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const move = (ev: MouseEvent) => handleMove(ev.clientX);
    const stop = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  };

  const handleTouchStart = () => {
    const move = (ev: TouchEvent) => handleMove(ev.touches[0].clientX);
    const stop = () => {
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", stop);
    };
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", stop);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] md:h-[380px] rounded-[24px] md:rounded-[30px] overflow-hidden select-none"
    >
      {/* After Image (full background) */}
      <img
        src={afterImage}
        alt={`${alt} - After`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (crop width by slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Vertical Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/70"
        style={{ left: `${position}%`, transform: "translateX(-1px)" }}
      />

      {/* Circle Drag Handle */}
      <div
        className="
          absolute w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white
          bg-white/10 backdrop-blur-sm shadow-lg cursor-grab active:cursor-grabbing
          flex items-center justify-center
        "
        style={{ left: `${position}%`, top: "50%", transform: "translate(-50%, -50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
