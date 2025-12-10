import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterImage = ({ beforeImage, afterImage, alt }: BeforeAfterImageProps) => {
  const [position, setPosition] = useState(100); // Start fully "Before" (right)
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-animate on mount: slide from right (100%) to middle (50%)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition(50);
      setHasAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;
    newPos = Math.max(0, Math.min(100, newPos));
    setPosition(newPos);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const move = (ev: MouseEvent) => {
      ev.preventDefault();
      handleMove(ev.clientX);
    };

    const stop = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);

    const move = (ev: TouchEvent) => {
      ev.preventDefault();
      handleMove(ev.touches[0].clientX);
    };

    const stop = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", stop);
    };

    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("touchend", stop);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative h-[320px] md:h-[380px] rounded-[24px] md:rounded-[30px] overflow-hidden select-none cursor-pointer group"
    >
      {/* After Image (Right Side - Full Background) */}
      <img
        src={afterImage}
        alt={`${alt} - After`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Left Side - Clipped) */}
      <div
        className={`absolute inset-0 overflow-hidden ${!hasAnimated ? '' : isDragging ? 'transition-none' : 'transition-all duration-300 ease-out'
          }`}
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="absolute inset-0 h-full object-cover"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
            transform: 'translateZ(0)',
          }}
          draggable={false}
        />
      </div>

      {/* White Vertical Divider Line - Top Segment (above circle) */}
      <div
        className="absolute top-0 bg-white w-[3px]"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          height: 'calc(50% - 21.4px)', // 50% minus half of circle height (42.8px / 2)
        }}
      />

      {/* White Vertical Divider Line - Bottom Segment (below circle) */}
      <div
        className="absolute bottom-0 bg-white w-[3px]"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          height: 'calc(50% - 21.4px)', // 50% minus half of circle height (42.8px / 2)
        }}
      />

      {/* Circular Draggable Slider Knob - Transparent Background */}
      <div
        className="absolute rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          boxSizing: 'border-box',
          width: '42.8px',
          height: '42.8px',
          left: `${position}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: 'transparent',
          border: '2px solid #FFFFFF',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          borderRadius: '100px',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Left Arrow Icon */}
        <svg
          className="absolute left-2 w-3 h-3 text-white drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

        {/* Right Arrow Icon */}
        <svg
          className="absolute right-2 w-3 h-3 text-white drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
