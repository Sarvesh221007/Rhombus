// src/components/Home/CEOInsights.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ceos = [
  {
    logo: "/home/CEOlogo.webp",
    name: "John Doe",
    position: "Founder & CEO",
    company: "TechCorp Inc.",
    paragraph:
      "John's vision and leadership have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire team.",
    stat: "Revenue",
    statValue: "45%",
    statText: "Growth in last fiscal year",
  },
  {
    logo: "/home/CEOlogo.webp",
    name: "Jane Smith",
    position: "Co-Founder & CTO",
    company: "InnovateX",
    paragraph:
      "Jane's technical expertise and strategic thinking have led InnovateX to pioneer cutting-edge technologies. She emphasizes sustainable innovation and team collaboration.",
    stat: "Revenue",
    statValue: "52%",
    statText: "Growth in last fiscal year",
  },
  {
    logo: "/home/CEOlogo.webp",
    name: "Michael Lee",
    position: "Managing Director",
    company: "GreenTech Solutions",
    paragraph:
      "Michael focuses on eco-friendly solutions that combine efficiency with sustainability. His leadership has significantly increased the company’s global reach.",
    stat: "Revenue",
    statValue: "38%",
    statText: "Growth in last fiscal year",
  },
  {
    logo: "/home/CEOlogo.webp",
    name: "Sara Williams",
    position: "Chief Operating Officer",
    company: "FutureVision Labs",
    paragraph:
      "Sara ensures smooth operations and drives efficiency across departments. She integrates innovative processes to achieve measurable results.",
    stat: "Revenue",
    statValue: "47%",
    statText: "Growth in last fiscal year",
  },
];

const CEOInsights = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % ceos.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + ceos.length) % ceos.length);

  return (
    <section className="flex flex-col items-center justify-center bg-white py-12 sm:py-16 lg:py-20">
      {/* Container */}
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] bg-[rgb(244,245,241)] rounded-[12px] shadow-lg p-6 sm:p-10 lg:p-16 flex flex-col gap-10 sm:gap-14">
        
        {/* CEO Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14"
        >
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 gap-4 text-center lg:text-left">
            <img
              src={ceos[current].logo}
              alt={ceos[current].name}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-gray-300"
            />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-forum text-[#0E3530]">
              {ceos[current].name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {ceos[current].position}
            </p>
            <p className="text-sm sm:text-base font-vamtam text-[#0E3530]">
              {ceos[current].company}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end justify-center flex-1 gap-6 sm:gap-8 mt-4 lg:mt-0 w-full">
            {/* Paragraph */}
            <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-vamtam text-[#0E3530] text-center lg:text-right leading-relaxed max-w-[700px]">
              {ceos[current].paragraph}
            </p>

            {/* Divider (hidden on small screens) */}
            <div className="hidden lg:block w-[500px] h-[2px] bg-gray-300 my-4"></div>

            {/* Stat */}
            <div className="flex flex-col items-center lg:items-start gap-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3530]">
                {ceos[current].statValue}
              </span>
              <p className="text-lg sm:text-xl font-forum text-[#0E3530]">
                {ceos[current].stat}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {ceos[current].statText}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Arrows */}
        <div className="w-full flex justify-between items-center mt-4 sm:mt-6">
          <button
            onClick={prevSlide}
            className="p-3 sm:p-4 rounded-full bg-gray-100 hover:bg-[rgb(200,248,169)] transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3530]" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 sm:p-4 rounded-full bg-gray-100 hover:bg-[rgb(200,248,169)] transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3530]" />
          </button>
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#0E3530] text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-6 sm:py-8 rounded-[20px] gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-forum text-center sm:text-left">
            What Our Clients Say
          </h2>
          <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-dm-sans bg-white text-[#0E3530] flex items-center gap-2 hover:opacity-90 transition">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CEOInsights;
