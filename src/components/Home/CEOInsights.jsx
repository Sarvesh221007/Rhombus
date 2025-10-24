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
      "John's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire teamJohn's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire team.",
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
      "She emphasizes sustainable innovation and team John's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire teamJane's technical expertise and strategic thinking have led InnovateX to pioneer cutting-edge technologies. She emphasizes sustainable innovation and team collaboration.",
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
      "Michael focuses on eco-friendly solutions that combine efficiencyJohn's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire team with sustainability. His leadership has significantly increased the company’s global reach.",
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
      "Sara ensures smooth operations and drives efficiency es. She emphasizes sustainable innovation and team collaborat across departments. She integrates innovative processes to achieve measurable results.",
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
    <section className="flex flex-col items-center justify-center bg-white py-12">
      {/* Big Box */}
      <div className="w-[95%] md:w-[87%] bg-[rgb(244,245,241)] rounded-[5px] shadow-lg p-5 md:p-16 flex flex-col gap-12">
        {/* CEO Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          {/* Left Side: Logo */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 gap-4">
            <img
              src={ceos[current].logo}
              alt={ceos[current].name}
              className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
            />
            <h3 className="text-xl md:text-2xl font-forum text-[#0E3530]">
              {ceos[current].name}
            </h3>
            <p className="text-sm text-gray-500">{ceos[current].position}</p>
            <p className="text-sm font-vamtam text-[#0E3530]">{ceos[current].company}</p>
          </div>

          {/* Right Side: Paragraph + Stat Column */}
          <div className="flex flex-col md:flex-col items-center justify-center gap-6 md:gap-8 mt-10 flex-1 w-full">
            {/* Paragraph */}
            <div className="flex-1 flex flex-col items-center md:items-end md:pr-4">
              <p className="text-[15px] md:text-[20px] font-vamtam text-[#0E3530] text-center md:text-right">
                {ceos[current].paragraph}
              </p>
            </div>

            {/* Divider */}
            <div className="w-[600px] mt-5 mb-5 h-[2px] bg-gray-300 hidden md:block"></div>

            {/* Stat */}
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="text-5xl md:text-6xl font-bold text-[#0E3530]">
                {ceos[current].statValue}
              </span>
              <p className="text-xl font-forum text-[#0E3530]">{ceos[current].stat}</p>
              <p className="text-sm text-gray-500">{ceos[current].statText}</p>
            </div>
          </div>
        </motion.div>

        {/* Slider Arrows below CEO Card */}
        <div className="w-full flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-[rgb(200,248,169)]"
          >
            <ChevronLeft className="w-6 h-6 text-[#0E3530]" />
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-[rgb(200,248,169)]"
          >
            <ChevronRight className="w-6 h-6 text-[#0E3530]" />
          </button>
        </div>

        {/* Bottom Client Section */}
        <div className="w-full bg-[#0E3530] text-white flex flex-col md:flex-row items-center justify-between px-8 py-4 rounded-[24px] gap-4 md:gap-0">
          <h2 className="text-3xl md:text-5xl font-forum text-center md:text-left">
            What Our Clients Say
          </h2>
          <button className="px-6 py-3 rounded-full font-dm-sans bg-white text-[#0E3530] flex items-center gap-2 hover:opacity-90 transition self-center md:self-auto">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CEOInsights;
