import React from "react";

const stats = [
  {
    icon: (
      <img
        src="/image/about-icon-1.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Patient Satisfaction"
      />
    ),
    value: "96 %",
    label: "Patient Satisfaction Rate",
  },
  {
    icon: (
      <img
        src="/image/about-icon-2.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Years Of Experience"
      />
    ),
    value: "12 +",
    label: "Years Of Experience",
  },
  {
    icon: (
      <img
        src="/image/about-icon-3.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="Successful Surgeries"
      />
    ),
    value: "1,000 +",
    label: "Successful Surgeries",
  },
  {
    icon: (
      <img
        src="/image/about-icon-4.png"
        className="w-12 h-12 md:w-14 md:h-14"
        alt="State Of The Art Facility"
      />
    ),
    value: "30 +",
    label: "State-Of-The-Art Facility",
  },
];

export const StatsRow = () => {
  return (
    <section className="bg-[#FDF7F7] py-12">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start space-y-2">

              {/* Icon + Value (always left icon, right value) */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{stat.icon}</div>

                <p className="font-heading text-[32px] md:text-[36px] lg:text-[40px] text-[#1C4942] leading-none">
                  {stat.value}
                </p>
              </div>

              {/* Label Below - aligned with value, not icon */}
              <p className="font-body text-[14px] md:text-[15px] lg:text-[16px] text-[#6C6C6C] pl-[64px] md:pl-[72px]">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
