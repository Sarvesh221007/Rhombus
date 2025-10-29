// src/components/Home/AboutSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const tickItems = [
  "Trusted education and immigration experts",
  "15+ years of industry experience",
  "Transparent and ethical guidance",
];


const accordionData = [
  {
    title: "Experienced Strategists",
    content: [
      "Our team of seasoned strategists brings decades of combined experience across industries and markets.",
      "With a deep understanding of business dynamics, we transform challenges into growth strategies tailored to your goals.",
    ],
    items: [
      "Proven track record in multiple industries",
      "Expertise in both startups and large enterprises",
      "Strategic guidance for overcoming complex challenges",
    ],
  },
  {
    title: "Tailored Solutions",
    content: [
      "We know your organization is unique—and your strategy should reflect that.",
      "Rather than applying generic frameworks, we co-create actionable and sustainable solutions.",
    ],
    items: [
      "Cross-industry expertise",
      "Solutions that work in the real world",
      "Every strategy is customized to your specific needs",
    ],
  },
  {
    title: "Data-Driven Approach",
    content: [
      "Intuition alone isn’t enough—our strategies are grounded in data for clarity and confidence.",
      "We help you understand why things happen—and what to do next.",
    ],
    items: [
      "From market research to internal KPIs",
      "Real-time performance visibility",
      "Strategies built on evidence—not assumptions",
    ],
  },
  {
    title: "Commitment to Your Success",
    content: [
      "Our work doesn’t end with strategy—it continues with long-term partnership.",
      "We go the extra mile to ensure effective implementation and tangible outcomes.",
    ],
    items: [
      "From strategy to long-term guidance",
      "Transparent and aligned with your vision",
      "We track success through outcomes, not deliverables",
    ],
  },
];



const AboutSection = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };


  const onClick = (e) => {
    e.preventDefault();
    setActiveIndex(activeIndex === idx ? null : idx);
  };


  return (
    <section className="w-full bg-white py-15 px-6 md:px-10">
      {/* ✅ Max-width Container */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-4 font-dm-sans">
        {/* ✅ Section Tag */}
        <motion.div
          className="inline-block px-3 py-1 self-start"
          style={{
            backgroundColor: "rgb(242,245,241)",
            color: "rgba(0,0,0,0.75)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            borderRadius: "4px",
          }}
        >
          Our Client
        </motion.div>

        {/* ✅ First Row: Heading + Paragraph */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-[20%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-[55%] w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#0E3530] text-4xl sm:text-5xl leading-snug font-['Forum'] mb-10"
            >
              Driving success through strategy.
            </motion.h2>
          </div>

          <div className="md:w-[45%] w-full">
            <p className="text-[16px] leading-[26px] text-[rgba(0,0,0,0.75)] pt-4">
              Our mission is simple: to guide students toward a brighter future by
              making studying abroad an achievable and exciting opportunity.
            </p>
          </div>
        </motion.div>

        {/* ✅ Second Row: Image + Info Box + Right Text */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Image + Info Box */}
          <motion.div
            className="relative md:w-[55%] w-full flex justify-left"
            style={{ minHeight: "38rem" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-1393636098.jpg"
              alt="Founder"
              className="w-full max-w-[30rem] h-[38rem] object-cover rounded-lg shadow-xl"
            />

            {/* Upgraded Info Box Overlapping Image */}
            <div
              className="absolute"
              style={{
                bottom: "-10%",
                right: "-2%",
                width: "40%",
                height: "60%",
                backgroundColor: "#c8f8a9",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "0.75rem",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
            >

              {/* <div
                style={{
                  width: "100%",
                  height: "48vh",
                  backgroundImage:
                    "url('https://execor.vamtam.com/wp-content/themes/execor/vamtam/assets/images/loader-ring.gif')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#000",
                }}
              ></div> */}

              {/* Section 1 - Heading */}
              <div className="text-center mb-2">
                <p className="font-['forum'] text-[20px] text-black font-normal tracking-wide">
                  Data-Driven Strategies
                </p>
              </div>

              {/* Section 2 - Highlights */}
              <div className="space-y-2 flex flex-col">
                {tickItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-black/90 text-[12px] leading-snug"
                  >
                    <span className="text-[#0F3D3A] text-lg">✔</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {/* Section 4 - Call-to-Action */}
              <div className="flex justify-center">
                <button
                  className="bg-[#0F3D3A] text-white font-medium text-[16px] px-5 py-3 rounded-md shadow-sm hover:bg-[#00000099] hover:text-white transition-all duration-300 ease-in-out w-full"
                >
                  Free Consultation →
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Text Content */}
          <motion.div
            className="md:w-[36%] w-full text-left text-[20px] leading-[24px] text-[rgba(0,0,0,0.90)]"
            style={{ minHeight: "38rem" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Accordion Section */}
            <div className="mt-8 border border-black/10 rounded-lg">
              {accordionData.map((item, idx) => (
                <React.Fragment key={idx}>
                  {/* 🔹 Add divider before each accordion except the first one */}
                  {idx !== 0 && (
                    <div className="w-[95%] mx-auto my-4 border-t border-black/20"></div>
                  )}

                  <details
                    open={activeIndex === idx}
                    className="overflow-hidden mb-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(activeIndex === idx ? null : idx); // only one open at a time
                    }}
                  >
                    {/* Heading */}
                    <summary className="cursor-pointer flex justify-between items-center px-4 py-4 text-black font-normal text-[22px] select-none opacity-70">
                      <span>{item.title}</span>
                      {/* Larger + / – icon */}
                      <span
                        className="text-3xl leading-none font-normal select-none"
                        style={{ fontFamily: `"DM Sans", sans-serif` }}
                      >
                        {activeIndex === idx ? "−" : "+"}
                      </span>
                    </summary>

                    {/* Separator line below heading */}
                    <div className="w-[92%] mx-auto border-t border-black/20"></div>

                    {/* Accordion Content */}
                    <div className="px-5 py-4 space-y-3 text-[15px] leading-[25px] text-[rgba(0,0,0,0.75)]">
                      {/* Paragraphs */}
                      {item.content.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}

                      {/* Tick list */}
                      <ul className="space-y-3 mt-3">
                        {item.items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-6 h-6 mt-1"
                              style={{ color: "rgb(15, 61, 58, 0.60)" }}
                            />
                            <span className="text-[14.5px] leading-[22px] text-[rgba(0,0,0,0.75)]">
                              {it}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </React.Fragment>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
