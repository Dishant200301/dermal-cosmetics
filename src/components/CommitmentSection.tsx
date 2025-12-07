import { ArrowRight, CheckSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------------- Circular Rotating Badge ---------------------- */
const CircularBadge = () => {
  return (
    <div className="absolute left-20 top-28 md:left-24 md:top-32 lg:left-28 lg:top-36 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white bg-[#24544B] flex items-center justify-center shadow-xl z-20 animate-spin-slow">
      <svg viewBox="0 0 120 120" className="w-[90%] h-[90%]">
        <defs>
          <path
            id="circleTextPath"
            d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text className="fill-white text-[10px] tracking-[0.18em] font-medium font-body">
          <textPath href="#circleTextPath">
            CONTACT • US • CONTACT • US • CONTACT • US •
          </textPath>
        </text>
      </svg>

      <span className="absolute text-white text-xl">↗</span>
    </div>
  );
};

/* ---------------------- Expertise Badge ---------------------- */
const ExpertiseBadge = () => {
  return (
    <div className="absolute -top-6 right-4 md:right-6 lg:right-8 rounded-2xl bg-[#24544B] px-6 py-4 shadow-xl flex items-center gap-4 z-20">
      <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
        <Users className="w-6 h-6 text-white" />
      </div>

      <div>
        <p className="font-heading text-[32px] text-white leading-none">49+</p>
        <p className="font-body text-xs text-white/90 mt-1">
          Reliable Expertise
        </p>
      </div>
    </div>
  );
};

/* ---------------------- Checklist Item ---------------------- */
const ChecklistItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckSquare className="w-5 h-5 text-[#24544B]" />
    <span className="font-body text-[#24544B] text-[15px] md:text-[16px]">
      {text}
    </span>
  </div>
);

const checklistItems = [
  "Expert Dermatologists",
  "Personalized Care",
  "Advanced Technology",
  "Comprehensive Services",
  "Effective Solutions",
  "Comfortable Environment",
];

/* ================================================================== */
/* ---------------------- MAIN SECTION ------------------------------ */
/* ================================================================== */

export const CommitmentSection = () => {
  return (
    <section className="relative bg-[#F7EFEF] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ---------------------- LEFT COLUMN IMAGES ---------------------- */}
          <div className="relative order-2 lg:order-1">
            {/* Top Image */}
            <div className="relative overflow-hidden rounded-[28px] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                className="w-full h-[420px] md:h-[480px] lg:h-[540px] object-cover"
                alt="Dermatology Care"
              />

              {/* Floating Badges */}
              <CircularBadge />
              <ExpertiseBadge />
            </div>

            {/* Bottom Overlapping Image */}
            <div className="absolute left-24 md:left-32 lg:left-40 -bottom-12 w-[60%] md:w-[55%] lg:w-[50%] rounded-[24px] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop"
                className="w-full h-[260px] md:h-[300px] lg:h-[340px] object-cover"
                alt="Skin Treatment"
              />
            </div>
          </div>

          {/* ---------------------- RIGHT COLUMN CONTENT ---------------------- */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24544B]" />
              <p className="font-body text-[#24544B] text-base">Who We Are</p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[#0F3E34] text-3xl md:text-4xl lg:text-[42px] leading-tight">
              Committed to Excellence in Skin Health and Care
            </h2>

            {/* Description */}
            <p className="font-body text-[#666] leading-relaxed text-base md:text-lg max-w-[540px]">
              Providing personalized dermatology solutions tailored to your
              unique skin needs, we offer expert care with a focus on long-term
              health.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {checklistItems.map((item) => (
                <ChecklistItem key={item} text={item} />
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/services"
              className="mt-4 bg-[#24544B] text-white font-body px-7 py-3.5 rounded-full inline-flex items-center gap-2 w-fit hover:bg-[#1C4942] transition-all duration-300 hover:scale-105 shadow-md"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Spinning animation */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
