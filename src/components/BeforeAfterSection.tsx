import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BeforeAfterImage from "./BeforeAfterImage";

import before1 from "/image/before-1.png";
import after1 from "/image/after-1.png";
import before2 from "/image/before-2.png";
import after2 from "/image/after-2.png";

const beforeAfterData = [
  { beforeImage: before1, afterImage: after1, alt: "Skin Result 1" },
  { beforeImage: before2, afterImage: after2, alt: "Skin Result 2" },
];

export const BeforeAfterSection = () => {
  return (
    <section className="bg-[#fef7f8] py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Top Label */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#7B798C]"></div>
          <p className="font-body text-[16px] text-[#7B798C] font-medium">
            Our Result
          </p>
        </div>

        {/* Main Heading */}
        <h2
          className="
            font-heading text-center text-[#1C4942]
            text-[36px] md:text-[42px] lg:text-[50px]
            leading-[110%] tracking-[-1px]
            max-w-[800px] mx-auto mb-4
          "
        >
          Before & after: witness the power of dermatology
        </h2>

        {/* Description */}
        <p className="
            font-body text-[#7B798C] text-[18px] leading-[29px]
            max-w-[650px] mx-auto text-center mb-14 lg:mb-20
        ">
          See the remarkable transformations for yourself—our ‘Before & After’
          gallery highlights the powerful impact of dermatological treatments.
        </p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-12">
          {beforeAfterData.map((item, index) => (
            <BeforeAfterImage key={index} {...item} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/results"
            className="
              flex items-center gap-2 px-8 h-[50px]
              bg-[#24544B] text-white rounded-full font-body text-[16px] font-medium
              hover:bg-[#1C4942] transition-all duration-300
            "
          >
            View All Result
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
