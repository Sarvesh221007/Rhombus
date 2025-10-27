import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      title: "Our Focus",
      description:
        "We prioritize strategic clarity, sustainable growth, and measurable impact, ensuring businesses stay ahead in a dynamic market.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding your business needs to deliver solutions that truly add value.",
    },
    {
      title: "Sustainable Growth",
      description:
        "We believe in long-term partnerships that foster continuous growth and innovation.",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-16 py-24 font-['DM Sans'] text-[rgba(0,0,0,0.75)]">
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

      {/* --- Heading --- */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[#0E3530] text-5xl leading-snug font-['Forum'] mb-14 max-w-5xl"
      >
        We add value by focusing on understanding your business and applying our
        experience and implementation approach.
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
            whileHover={{
              y: -4,
              boxShadow: "0px 6px 16px rgba(0,0,0,0.05)",
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5 p-6 bg-white border-l-[3px] border-[rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <CheckCircle
                size={35}
                className="text-[#1F6E69]"
                strokeWidth={1} // thinner tick icon (50%)
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
    </section>
  );
};

export default VisionSection;
