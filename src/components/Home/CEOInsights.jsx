// src/components/Home/CEOInsights.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Quote } from "lucide-react";

const ceos = [
  {
    logo: "/home/CEOlogo.webp",
    name: "John Doe",
    position: "Founder & CEO",
    company: "TechCorp Inc.",
    paragraph:
      "John's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation inspires the entire teamJohn's vision .",
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
      "She emphasizes sustainable innovation and team John's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth and innovation .",
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
      "Michael focuses on eco-friendly solutions that combine efficiencyJohn's vision and leadership Lorem have transformed TechCorp into a global leader in innovative solutions. His focus on sustainable growth .",
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
    <section className="flex flex-col items-center justify-cente">
      {/* Big Box */}
      <div className="w-[95%] lg:mt-20 md:w-[92%] shadow-lg flex flex-col">
        <div className="w-full lg:px-12 md:px-8 sm:px-4 pt-10 pb-4 bg-[rgb(244,245,241)] rounded-t-lg">
          {/* === CEO Card === */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col md:flex-row items-center justify-between"
          >
            {/* === First Main Div: CEO Details === */}
            <div className="flex flex-col items-center md:items-start md:w-1/3 gap-1">
              {/* --- First Inner Div: Logo --- */}
              <div className="flex justify-start md:justify-start w-full md:w-[50%] -mt-20">
                <img
                  src={ceos[current].logo}
                  alt={ceos[current].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl text-black" style={{ fontFamily: `"DM Sans", sans-serif` }}>
                {ceos[current].name}
              </h3>
              <p className="text-[11px] text-[#0F3D3A] font-semibold bg-white/50 rounded-sm px-3 py-1 text-center inline-block">
                {ceos[current].position} {ceos[current].company}
              </p>
            </div>

            {/* === Second Main Div: Content Area === */}
            <div className="flex flex-col items-center ml-30 justify-between w-full md:w-2/3 gap-2 pt-6 md:pt-10">
              <div className="w-full md:w-[70%]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="flex justify-left items-left mr-auto"
                >
                  <Quote className="text-[36px] text-[#0F3D3A] transition-all duration-300 transform -scale-x-100" />
                </motion.div>
              </div>


              {/* --- Second Inner Div: Paragraph + Divider --- */}
              <div className="flex flex-col items-left w-full md:w-[65%] text-left gap-4">
                <p className="text-[16px] md:text-[20px] text-[#0E3530] leading-relaxed mb-14 font-normal opacity-75 font-['forem']" style={{ fontFamily: `"DM Sans", sans-serif` }}>
                  {ceos[current].paragraph}
                </p>
                <div className="w-65% h-[1px] bg-black/5 mb-6"></div>
              </div>

              {/* --- Third Inner Div: Compact Stat Line --- */}
              <div className="flex flex-row items-center justify-left w-full md:w-[65%] gap-4">
                {/* Stat Value */}
                <span
                  className="text-[38px] md:text-[50px] font-normal text-[#0E3530] leading-none"
                  style={{ fontFamily: `"Forum", serif` }}
                >
                  {ceos[current].statValue}
                </span>

                {/* Divider Line */}
                <div className="w-[50px] h-[1px] bg-[#0E3530]/70 opacity-30"></div>

                {/* Combined Text */}
                <p className="text-[10px] md:text-[14px] text-black font-normal leading-tight opacity-80">
                  {ceos[current].stat} {ceos[current].statText}
                </p>
              </div>
              <div className="w-full md:w-[70%] flex justify-end -mt-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="mt-2"
                >
                  <Quote className="text-[36px] text-[#0F3D3A] transition-all duration-300" />
                </motion.div>
              </div>

            </div>
          </motion.div>


          {/* Slider Arrows below CEO Card */}
          <div className="w-full flex justify-left mt-1 gap-2">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="group px-4 py-2 rounded-sm bg-white/50 hover:bg-[rgb(15,61,58)] transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-[#0E3530] group-hover:text-[rgb(200,248,169)] transition-colors duration-300" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="group px-4 py-2 rounded-sm bg-white/50 hover:bg-[rgb(15,61,58)] transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 text-[#0E3530] group-hover:text-[rgb(200,248,169)] transition-colors duration-300" />
            </button>
          </div>

        </div>

        {/* Bottom Client Section */}
        <div className="w-full py-6 px-10 bg-[#0E3530] text-white flex flex-col md:flex-row items-center justify-between rounded-b-lg  md:gap-0">
          <h2 className="text-[18px] md:text-[20px] font-normal text-center md:text-left">
            What Our Clients Say
          </h2>
          <button className="px-6 py-2 rounded-md font-dm-sans bg-[rgb(200,248,169)] text-[rgb(15,61,58)] hover:bg-[rgb(15,61,58)] hover:text-white flex items-center gap-2 hover:opacity-90 transition self-center md:self-auto">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div >
    </section >
  );
};

export default CEOInsights;
