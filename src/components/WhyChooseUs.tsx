import React from 'react';
import { ArrowRight, Play, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Rotating Badge Component
const RotatingBadge = () => (
  <div className="absolute -right-8 top-12 lg:-right-10 lg:top-16 z-20">
    <div className="relative w-[110px] h-[110px] lg:w-[100px] lg:h-[130px]">
      {/* Rotating Circle */}
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite] ">
        <svg className="w-full h-full" viewBox="0 0 140 140">
          <defs>
            <path id="circlePath" d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" />
          </defs>
          <circle cx="70" cy="70" r="70" fill="#1C4942" />
          <text fill="#fff" fontSize="11" fontWeight="600" letterSpacing="2.5px">
            <textPath href="#circlePath" startOffset="0%">
              • CONTACT US • CONTACT US • CONTACT US • 
            </textPath>
          </text>
        </svg>
      </div>
      {/* Center Arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 text-white -rotate-45" strokeWidth={2.5} />
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const benefits = [
    'Commitment to Excellence in Skin Health',
    'State-of-the-Art Facility and Technology',
    'Trusted by Thousands of Satisfied Patients',
  ];

  return (
    <section className="bg-[#FDF4F4] py-10 md:py-[60px] lg:py-[80px]">
      <div className="container mx-auto px-[5%] md:px-[7%] lg:px-20 max-w-[1440px]">

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

          {/* LEFT COLUMN - Images */}
          <div className="relative mb-16 md:mb-20 lg:mb-0">
            {/* Main Image */}
            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop"
                alt="Dermatologist examining patient"
                className="w-full h-[380px] md:h-[520px] lg:h-[580px] object-cover rounded-[30px] md:rounded-[40px]"
              />

              {/* Rotating Badge - Tablet & Desktop Only */}
              <div className="hidden md:block">
                <RotatingBadge />
              </div>
            </div>

            {/* Overlapping Second Image */}
            <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 lg:-right-12 w-[85%] md:w-[320px] lg:w-[340px]">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop"
                alt="Skin treatment procedure"
                className="w-full h-[200px] md:h-[220px] object-cover rounded-[20px] border-[6px] border-[#FDF4F4] shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Content */}
          <div className="flex flex-col justify-center pt-4 lg:pt-0">

            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1C4942]"></span>
              <span className="text-[#6B6B6B] font-medium text-[14px] md:text-[15px] uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-[#1C4942] text-[28px] md:text-[36px] lg:text-[50px] leading-[110%] mb-5 lg:mb-6">
              Why choose us for all your dermatology needs
            </h2>

            {/* Description */}
            <p className="font-body text-[#7B798C] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] mb-8 lg:mb-10 max-w-[600px]">
              We're dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
            </p>

            {/* Feature List + Team Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-10 items-start">

              {/* Left Column: Feature List + Buttons */}
              <div className="flex flex-col gap-6 md:gap-8">

                {/* Feature List - Vertical Stack on Mobile, Single Line on Desktop */}
                <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-8 lg:gap-x-10">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 rounded-sm bg-[#1C4942] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-body text-[#7B798C] text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed md:whitespace-nowrap">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Buttons - Below Checklist */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">

                  {/* Contact Us Button */}
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-[#1C4942] text-white px-6 py-3 md:py-4 rounded-full font-medium text-[16px] md:text-[17px] hover:bg-[#143630] hover:scale-105 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  {/* Play Session Button */}
                  <button className="flex items-center justify-center gap-2 border border-[#1C4942] text-[#1C4942] bg-white px-6 py-3 md:py-4 rounded-full font-medium text-[16px] md:text-[17px] hover:bg-[#1C4942] hover:text-white transition-all duration-300 group">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-current">
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                    Play Session
                  </button>
                </div>

                {/* Team Card - Mobile Only (Below Buttons) */}
                <div className="md:hidden bg-[#1C4942] text-white rounded-[24px] p-6 w-full flex flex-col items-center justify-center shadow-2xl mt-8">
                  <Users className="w-10 h-10 mb-3" strokeWidth={1.5} />
                  <div className="text-[42px] font-serif leading-none mb-2">29+</div>
                  <div className="text-[14px] font-medium opacity-90">Team Members</div>
                </div>

              </div>

              {/* Team Card - Tablet & Desktop Only (Right of Features + Buttons) */}
              <div className="hidden lg:hidden xl:block md:flex bg-[#1C4942] text-center text-white rounded-[24px] p-6 w-[196px] h-[238px] flex-col items-center justify-center shadow-2xl flex-shrink-0">
                <Users className="w-12 h-12 mb-3 items-center xl:ml-12 xl:mt-5" strokeWidth={1.5} />
                <div className="text-[42px] md:text-[46px] lg:text-[50px] font-serif leading-none mb-2">29+</div>
                <div className="text-[14px] md:text-[15px] font-medium opacity-90">Team Members</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
