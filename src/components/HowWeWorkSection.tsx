import { Phone } from "lucide-react";
import workImage from "/image/how-we-work.png";

export const HowWeWorkSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-10 xl:px-20 bg-[#fef7f8]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 lg:gap-20 items-start">

        {/* ---------- RIGHT IMAGE (Tablet/Mobile FIRST) ---------- */}
        <div className="order-2 lg:order-2">
          <div className="bg-[#1C4942] rounded-[30px] overflow-hidden shadow-md relative">
            <img
              src={workImage}
              alt="Skin treatment"
              className="w-full h-[380px] md:h-[500px] lg:h-[615px] object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,73,66,0)] via-[rgba(28,73,66,0.45)] to-[rgba(28,73,66,0.9)]" />

            {/* Overlay text block */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[18px] font-heading mb-3 opacity-90">
                Have Questions? We’re Here to Help You!
              </p>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 w-fit">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white text-[18px] font-body tracking-wide">
                  (123) 456 789
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="order-1 lg:order-1">
          {/* Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#24544B] rounded-full"></span>
            <p className="font-body text-[16px] text-[#7B798C] font-medium">
              How We work
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[#1C4942] text-[34px] md:text-[42px] lg:text-[40px] xl:text-[46px] leading-[1.15] tracking-[-1px] mb-4 max-w-[620px]">
            How we work: a commitment to your skin health
          </h2>

          {/* Description */}
          <p className="font-body text-[18px] text-[#7B798C] leading-[29px] mb-10 max-w-[620px]">
            We’re dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us
            to provide exceptional care tailored to you.
          </p>

          {/* Steps List */}
          <div className="space-y-4">

            {/* STEP 1 */}
            <StepItem
              number="01"
              title="Personalized Consultation"
              description="This helps us create a customized treatment plan that aligns with your specific needs and expectations."
            />

            {/* Divider */}
            <div className="border-b border-[#7B798C]/20"></div>

            {/* STEP 2 */}
            <StepItem
              number="02"
              title="Tailored Treatment Plans"
              description="This helps us create a customized treatment plan that aligns with your specific needs and expectations."
            />

            {/* Divider */}
            <div className="border-b border-[#7B798C]/20 "></div>

            {/* STEP 3 */}
            <StepItem
              number="03"
              title="Continuous Care & Follow-Up"
              description="This helps us create a customized treatment plan that aligns with your specific needs and expectations."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------ */
/* REUSABLE STEP ITEM COMPONENT */
/* ------------------------------------------ */

const StepItem = ({ number, title, description }) => {
  return (
    <div className="flex items-start gap-6">
      <p className="font-heading text-[32px] text-[#24544B]">{number}</p>

      <div>
        <h3 className="font-heading text-[22px] text-[#1C4942] mb-2">
          {title}
        </h3>
        <p className="font-body text-[18px] leading-[29px] text-[#7B798C] max-w-[520px]">
          {description}
        </p>
      </div>
    </div>
  );
};
