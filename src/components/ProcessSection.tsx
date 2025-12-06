import { Check, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import doctorProcedure from "@/assets/doctor-procedure.jpg";

const leftChecklist = [
  "Expert Dermatologists",
  "Advanced Technology",
  "Effective Solutions",
];

const rightChecklist = [
  "Personalized Care",
  "Comprehensive Services",
  "Comfortable Environment",
];

export const ProcessSection = () => {
  return (
    <section className="container mx-auto w-full h-full py-16 lg:py-24 px-6 lg:px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  rounded-[30px] bg-[#F7F0F2]">

        {/* LEFT — Image with Gradient + Video CTA */}
        <div className="relative w-full h-[450px] md:h-[600px] lg:h-[793px] rounded-[30px] lg:rounded-l-[30px] lg:rounded-r-none overflow-hidden">
          <img
            src={doctorProcedure}
            alt="Dermatology procedure"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C4942E6] via-[#1C494266] to-transparent" />

          {/* Bottom Video CTA */}
          <div className="absolute bottom-10 left-10 flex items-center gap-5">
            <button className="w-[60px] h-[60px] border border-white rounded-full flex items-center justify-center hover:scale-105 transition-all">
              <Play className="w-6 h-6 text-white fill-white" />
            </button>

            <div className="text-white">
              <p className="font-heading text-[16px] opacity-90">Our process</p>
              <p className="font-heading text-[38px] md:text-[42px] leading-tight">
                Watch our procedure
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Text Content */}
        <div className="lg:pl-6">

          {/* Subheading */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#24544B]" />
            <p className="font-body text-[16px] text-[#7B798C]">Our Process</p>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[#1C4942] text-[32px] md:text-[42px] lg:text-[50px] leading-[1.15] mb-6 max-w-[550px]">
            Expert dermatology care for healthy, radiant skin
          </h2>

          {/* Description */}
          <p className="font-body text-[18px] leading-[29px] text-[#7B798C] max-w-[550px] mb-10">
            From preventive care to specialized treatments, our wide range of
            services is designed to support your health at every stage.
          </p>

          {/* CHECKLIST GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-10">

            {/* Left column */}
            <div className="space-y-5">
              {leftChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-[#1C4942] rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#1C4942]" />
                  </div>
                  <span className="font-body text-[18px] text-[#7B798C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-5">
              {rightChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-[#1C4942] rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#1C4942]" />
                  </div>
                  <span className="font-body text-[18px] text-[#7B798C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#24544B] text-white font-body text-[16px] px-8 py-4 rounded-full hover:bg-[#1C4942] transition-colors mb-8"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Bottom Text */}
          <p className="font-body text-[18px] text-[#7B798C]">
            Your skin’s transformation starts here –{" "}
            <Link
              to="/contact"
              className="font-bold text-[#1C4942] hover:underline"
            >
              Book Today!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
