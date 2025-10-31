import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      title: "Empowering Global Education",
      description:
        "We strive to make studying abroad a seamless experience for every student by providing transparent guidance and end-to-end support throughout their journey.",
    },
    {
      title: "Personalized & Transparent Guidance",
      description:
        "Our focus is on understanding each student’s goals, strengths, and aspirations to deliver tailored education and visa solutions built on trust and expertise.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Backed by 15+ years of experience and certifications from the British Council and ICEF, we ensure the highest standards of professionalism in every service we offer.",
    },
    {
      title: "Global Partnerships",
      description:
        "We collaborate with top universities, education agents, and international networks to open doors of opportunity for students across the world.",
    },
    {
      title: "Student-Centric Approach",
      description:
        "Every service at Rhombus is designed around the student—offering clarity, confidence, and continuous support from application to arrival.",
    },
    {
      title: "Building Futures, Not Just Applications",
      description:
        "We believe education is a lifelong investment. Our mission is to help students and professionals achieve academic and career success across global borders.",
    },
  ];


  return (
    <section className="bg-white font-['DM Sans'] text-[rgba(0,0,0,0.75)] py-24 flex justify-center">
      {/* ---------- Main Container ---------- */}
      <div className="md:w-[97vw] sm:w-[95vw] max-w-[1266px]">
        {/* --- Section Tag --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div
            className="inline-block px-3 py-1 rounded-md"
            style={{
              backgroundColor: "rgb(242,245,241)",
              color: "rgba(0,0,0,0.75)",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            Our Vision
          </div>
        </motion.div>

        {/* --- Separator Line --- */}
        <div className="w-[100%] h-[0.5px] bg-[rgba(186,187,182,0.9)] mx-auto my-6"></div>

        {/* --- Heading --- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#0E3530] text-4xl sm:text-5xl leading-snug font-['Forum'] mb-14 max-w-5xl"
        >
          We guide students toward global success through trusted education and immigration expertise.

        </motion.h2>

        {/* --- Vision Cards --- */}
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {visionPoints.map((item, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 p-6 bg-white border-l-[1px] border-[rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <CheckCircle
                  size={35}
                  className="text-[#1F6E69]"
                  strokeWidth={1}
                />
                <h3 className="text-lg text-[#0E3530] font-normal">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-[rgba(0,0,0,0.7)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
