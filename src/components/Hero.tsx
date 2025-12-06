import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroModel from '@/assets/hero-model.jpg';

const RotatingBadge = () => (
  <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
    <div className="relative w-[120px] h-[120px]">
      <svg className="w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 120 120">
        <defs>
          <path
            id="circlePath"
            d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text className="fill-white text-[13px] font-inter uppercase tracking-widest">
          <textPath href="#circlePath">
            Contact Us • Contact Us • Contact Us •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-deep-green-800 -rotate-45" />
        </div>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="bg-light-pink-100 px-4 lg:px-8 py-6">
      <div className="container mx-auto">
        <div className="bg-deep-green-800 rounded-30 overflow-hidden relative">
          {/* Decorative leaf SVG */}
          <svg className="absolute top-4 right-4 w-40 h-40 opacity-30" viewBox="0 0 100 100" fill="none">
            <path d="M80 20C60 30 50 50 50 80C70 70 80 50 80 20Z" stroke="currentColor" strokeWidth="1" className="text-deep-green-900"/>
            <path d="M70 30C55 38 48 52 50 75" stroke="currentColor" strokeWidth="1" className="text-deep-green-900"/>
          </svg>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h1 className="font-heading text-4xl md:text-5xl xl:text-[56px] text-white leading-tight tracking-tighter mb-6">
                Comprehensive care for your skin's health and beauty
              </h1>
              <p className="font-body text-lg text-white/90 mb-8 max-w-md">
                At Dermal we believe in creating digital solution that drive real-world impact. From creative strategies to cutting-edge.
              </p>

              <Link to="/services" className="btn-secondary w-fit mb-10">
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="border-t border-white/20 pt-6">
                <p className="font-heading text-xl text-white mb-4">Reviews</p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                    alt="Happy patient"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <p className="font-body text-lg text-white flex-1">
                    I am beyond thrilled with the results of my facelift.
                  </p>
                  <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full">
                    <span className="font-body font-medium text-deep-green-800">5.0</span>
                    <Star className="w-4 h-4 fill-deep-green-800 text-deep-green-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={heroModel}
                alt="Beautiful woman with clear skin"
                className="w-full h-full object-cover object-top"
              />
              <RotatingBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
