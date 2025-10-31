import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    image: "/insights/img1.webp",
    title: "From India to Australia – A Dream Come True",
    date: "Oct 12, 2025",
    desc: "Learn how our expert visa guidance helped Aditi secure admission to the University of Sydney and smoothly obtain her student visa.",
    category: "Student Success",
    tag: "Australia Visa",
    link: "#",
  },
  {
    image: "/insights/img2.webp",
    title: "Smooth Visa Approval for UK Aspirant",
    date: "Sep 28, 2025",
    desc: "Rohit’s journey to the University of Birmingham was made easy with our step-by-step document review and visa support.",
    category: "Visa Approval",
    tag: "UK Student Visa",
    link: "#",
  },
  {
    image: "/insights/img3.webp",
    title: "Achieving Excellence in Canada",
    date: "Aug 15, 2025",
    desc: "Discover how Priya successfully got her Canada study visa and started her dream program at the University of Toronto with our team’s help.",
    category: "Global Education",
    tag: "Canada Admission",
    link: "#",
  },
  {
    image: "/insights/img4.webp",
    title: "Trusted Partner for Education Agents",
    date: "Jul 10, 2025",
    desc: "Through collaboration with Rhombus, multiple education agents now offer efficient, transparent, and successful services to their student clients.",
    category: "Agent Partnership",
    tag: "Collaboration",
    link: "#",
  },
];

const InsightsSuccess = () => {
  return (
    <section className="w-full mb-10 lg:mt-60 font-['DM Sans'] text-[rgba(0,0,0,0.75)]">
      {/* Fixed-width centered container */}
      <div className="max-w-[1266px] mx-auto flex flex-col items-center justify-center">
        {/* --- Tag --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-left mb-6"
        >
          <span
            className="inline-block px-3 py-1 rounded"
            style={{
              backgroundColor: "rgb(242, 245, 241)",
              color: "rgba(0, 0, 0, 0.75)",
              fontSize: "14px",
            }}
          >
            Insights & Success Stories
          </span>
        </motion.div>

        {/* --- Heading & Paragraph --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col md:px-4 sm:px-4 md:flex-row justify-between items-start gap-8"
        >
          <h2 className="text-3xl md:text-5xl font-['Forum'] text-[#0E3530] leading-snug md:w-[48%]">
            Real Student Journeys, Proven Success & Global Achievements
          </h2>

          <p className="text-[15px] pt-6 md:text-[14px] text-[#0E3530] leading-[22.5px] md:w-[48%] opacity-90">
            Discover inspiring success stories and expert insights from students who turned their
            study-abroad dreams into reality with Rhombus Education and Immigration Services.
            From visa approvals to university placements, explore how our personalized guidance has helped
            students achieve academic and professional success worldwide.
          </p>
        </motion.div>

        {/* --- Story Grid --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-start items-start
                text-[15px] leading-[22.5px] text-[rgba(0,0,0,0.75)]
                max-w-[320px] mx-auto"
            >
              {/* --- Image --- */}
              <a
                href={story.link}
                className="w-full block rounded-md overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[420px] object-cover transition-all duration-500"
                  loading="lazy"
                />
              </a>

              {/* --- Meta Info --- */}
              <div className="w-full mt-3 flex flex-wrap justify-left items-center gap-3 text-sm">
                <span
                  className="inline-block px-3 py-1 rounded"
                  style={{
                    backgroundColor: "rgb(242, 245, 241)",
                    color: "rgba(0, 0, 0, 0.75)",
                    fontSize: "14px",
                  }}
                >
                  {story.category}
                </span>
                <span className="text-gray-500">{story.date}</span>
              </div>

              {/* --- Title --- */}
              <h5 className="w-full mt-2 text-xl md:text-[22px] font-['Forum'] text-[#0E3530] leading-snug">
                <a
                  href={story.link}
                  className="hover:text-[#0F3D3A] transition-colors duration-300"
                >
                  {story.title}
                </a>
              </h5>

              {/* --- Description (hover reveal) --- */}
              <p
                className="w-full text-[11px] mt-2 opacity-0 translate-y-2 transition-all duration-300 ease-in-out
                  group-hover:opacity-70 group-hover:translate-y-0"
                style={{
                  lineHeight: "17.5px",
                }}
              >
                {story.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSuccess;
