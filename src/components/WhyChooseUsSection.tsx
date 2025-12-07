import React from "react";
import { Star, HeartHandshake } from "lucide-react";
import chooseImage from "/image/choose-us.png"; // update your image path

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-[#fef7f8]  py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= IMAGE (Mobile Top / Desktop Right) ================= */}
          <div className="order-1 lg:order-2">
            <div className="rounded-[28px] overflow-hidden shadow-sm">
              <img
                src={chooseImage}
                alt="Why Choose Us Dermatology"
                className="w-full h-[360px] md:h-[430px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

          {/* ================= CONTENT (Mobile Bottom / Desktop Left) ================= */}
          <div className="order-2 lg:order-1">

            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24544B]" />
              <p className="font-body text-[#7B798C] text-base">Why Choose Us</p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[48px] leading-[1.15] max-w-[600px] mb-4">
              Why choose us for all your dermatology needs
            </h2>

            {/* Sub text */}
            <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[650px] mb-10">
              We’re dedicated to helping you achieve and maintain beautiful, healthy skin.
              Trust us to provide exceptional care tailored to you.
            </p>

            {/* ================= FEATURE LIST CARDS ================= */}
            <div className="space-y-8">

              {/* CARD 1 */}
              <div className="border-t border-[#7B798C24] pt-8 flex gap-5">
                <div className="bg-[#F7F0F2] w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-10 h-10  bg-[#F7F0F2] rounded-md flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-[#1C4942]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-[#1C4942] text-xl mb-2">
                    Personalized, compassionate care
                  </h3>

                  <p className="font-body text-[#7B798C] leading-relaxed text-base max-w-[580px]">
                    We believe every patient is unique. That's why we take the time to
                    understand your specific needs and tailor treatment plans.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="border-t border-[#7B798C24] pt-8 flex gap-5">
                <div className="bg-[#F7F0F2] w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-10 h-10  rounded-md flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#1C4942]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-[#1C4942] text-xl mb-2">
                    Comprehensive care for all skin needs
                  </h3>

                  <p className="font-body text-[#7B798C] leading-relaxed text-base max-w-[580px]">
                    Whether you’re seeking medical dermatology, cosmetic treatments, 
                    or preventive care, we offer a complete range of services.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
