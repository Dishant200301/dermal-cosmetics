import React from "react";
import { ArrowRight, ShieldCheck, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import benefitsImage from "/image/benefits.png";

const BenefitSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F0F2] rounded-[30px] py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE BLOCK */}
          <div className="relative rounded-[30px] overflow-hidden shadow-xl">
            <img
              src={benefitsImage}
              alt="Dermatology Care"
              className="w-full h-[380px] md:h-[460px] lg:h-[500px] object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C4942CC]" />

            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/15 border border-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Layers3 className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-white font-heading text-xl md:text-2xl mb-1 leading-tight">
                  Continuous Care & Follow-Up
                </h3>
                <p className="text-white/85 font-body text-sm md:text-base leading-relaxed max-w-[360px]">
                  Your skin’s health is our priority, so we provide ongoing care
                  and continuous follow-up to ensure effective results.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col">

            {/* Subheading */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#24544B] rounded-full"></span>
              <p className="text-[#7B798C] font-body text-[16px]">Our Benefits</p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[45px] leading-[1.15] mb-6">
              Exceptional dermatology,
              <br className="hidden lg:block" />
              every step
            </h2>

            {/* Feature List */}
            <div className="space-y-10">

              {/* ITEM 1 */}
              <div className="flex gap-4">
                <div className="lg:w-14 lg:h-14 w-24 h-12 md:w-14 md:h-14 bg-[#1C4942] rounded-xl flex items-center justify-center">
                  <Layers3 className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="font-heading text-[#1C4942] text-xl mb-2 leading-tight">
                    Comprehensive Services
                  </h3>
                  <p className="font-body text-[#7B798C] text-base leading-relaxed max-w-[530px]">
                    Our team offers a full spectrum of solutions tailored to meet your
                    needs. From initial consultation to project completion.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <div className="lg:w-14 lg:h-14 w-24 h-12 md:w-14 md:h-14 bg-[#1C4942] rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="font-heading text-[#1C4942] text-xl mb-2 leading-tight">
                    High Safety Standards
                  </h3>
                  <p className="font-body text-[#7B798C] text-base leading-relaxed max-w-[530px]">
                    Our team follows strict safety protocols to ensure safe, high-quality
                    dermatology care throughout each treatment stage.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              to="/contact"
              className="mt-10 w-[158px] h-[50px] inline-flex items-center gap-2 bg-[#24544B] text-white px-7 py-3.5 rounded-full text-sm font-body shadow-md transition-all duration-300 hover:bg-[#1C4942] hover:scale-[1.05]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
