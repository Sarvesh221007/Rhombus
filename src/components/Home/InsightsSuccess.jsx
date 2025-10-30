import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    image: "/insights/img1.webp",
    title: "Maximizing Team Productivity",
    date: "Oct 12, 2025",
    desc: "Learn how top leaders manage time and boost efficiency.Learn how top leaders manage time and boost efficiency.",
    category: "Business",
    tag: "Leadership",
    link: "#",
  },
  {
    image: "/insights/img2.webp",
    title: "Successful Client Partnerships",
    date: "Sep 28, 2025",
    desc: "Case studies on building long-lasting client relationships.Learn how top leaders manage time and boost efficiency.",
    category: "Strategy",
    tag: "Partnerships",
    link: "#",
  },
  {
    image: "/insights/img3.webp",
    title: "Digital Transformation Journey",
    date: "Aug 15, 2025",
    desc: "How companies embrace technology to scale faster.Learn how top leaders manage time and boost efficiency.",
    category: "Technology",
    tag: "Innovation",
    link: "#",
  },
  {
    image: "/insights/img4.webp",
    title: "Leadership Insights",
    date: "Jul 10, 2025",
    desc: "Key strategies for effective leadership in modern businesses.Learn how top leaders manage time and boost efficiency.",
    category: "Growth",
    tag: "Insights",
    link: "#",
  },
];

const InsightsSuccess = () => {
  return (
    <section className="w-full lg:mt-60 font-['DM Sans'] text-[rgba(0,0,0,0.75)]">
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
          className="w-full flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <h2 className="text-3xl md:text-5xl font-['Forum'] text-[#0E3530] leading-snug md:w-[48%]">
            Expert Strategies, Industry Trends & Real Results
          </h2>

          <p className="text-[15px] pt-6 md:text-[14px] text-[#0E3530] leading-[22.5px] md:w-[48%] opacity-90">
            Stay ahead with the latest business insights, success stories, and
            industry trends. Explore expert advice, real-world case studies, and
            actionable strategies to drive growth and innovation in your
            business.
          </p>
        </motion.div>

        {/* --- Story Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full"
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
