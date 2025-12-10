import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons';

interface AnimatedButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  to,
  children,
  variant = 'primary',
  className = '',
  showArrow = true,
  onClick,
}) => {
  const baseClasses = 'relative overflow-hidden z-[1] flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-full font-medium text-[16px] md:text-[17px] transition-colors duration-[400ms] ease-out';

  // Variant-specific classes with different CSS class names for different hover effects
  const variantConfig = {
    primary: {
      baseStyle: 'bg-[#24544B] text-white',
      animationClass: 'animated-btn-primary'
    },
    secondary: {
      baseStyle: 'bg-white text-[#1C4942]',
      animationClass: 'animated-btn-secondary'
    },
  };

  const config = variantConfig[variant];

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${config.animationClass} ${baseClasses} ${config.baseStyle} ${className}`}
    >
      <span className="relative z-[2]">{children}</span>
      {showArrow && <ArrowIcon className="w-5 h-5 relative z-[2]" />}
    </Link>

  );
};
