import React from "react";
import { CheckCircle } from "lucide-react";

const WhatSetsUsApart = () => {
  const items = [
    "Data-Driven Strategies",
    "Proven Results",
    "Scalable Growth",
    "Trusted Expertise",
  ];

  return (
    <section
      className="w-full py-6 px-4"
      style={{
        backgroundImage:
          "linear-gradient(-13deg, rgb(248,247,243) 0%, rgb(200,248,169) 100%)",
        fontFamily: "'DM Sans', sans-serif",
        transition:
          "background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, transform 0.4s ease",
      }}
    >
      {/* Fixed width inner container */}
      <div
        className="
          max-w-[1266px] mx-auto
          flex flex-wrap items-center justify-start
          gap-x-8 md:gap-x-10 lg:gap-x-16
          gap-y-6 md:gap-y-8
          text-[16px] md:text-[17px] lg:text-[18px]
          text-[rgba(0,0,0,0.75)]
          transition-all duration-300 ease-in-out
        "
      >
        {/* Heading */}
        <h6
          className="
            text-[#0E3530]
            text-[15px] md:text-[17px] lg:text-[20px]
            font-normal
            font-['Forum']
            leading-[1.4]
            whitespace-nowrap
          "
        >
          What Sets Us Apart
        </h6>

        {/* Thin Divider */}
        <div className="hidden md:block w-px h-6 bg-[rgba(0,0,0,0.2)]"></div>

        {/* Icon + Text List */}
        <div
          className="
            flex flex-wrap items-center justify-start
            gap-x-8 md:gap-x-10 lg:gap-x-14
            gap-y-5 md:gap-y-7
          "
        >
          {items.map((text, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3 md:gap-4
                hover:scale-[1.03] transition-transform duration-300
              "
            >
              <CheckCircle
                size={30}
                className="text-[#0E3530] flex-shrink-0"
                strokeWidth={1}
              />
              <span className="leading-[1.5] text-[rgba(0,0,0,0.8)]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
