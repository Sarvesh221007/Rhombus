// src/components/Home/ClientsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Users, Award, Headphones, Rocket } from "lucide-react";
import clientImage from "/home/client.jpg";

const boxData = [
  {
    title: "Global University Partners",
    text: "Collaborating with top universities across Australia, UK, Canada, USA, and Europe.",
    icon: <Globe2 className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Trusted by Students Worldwide",
    text: "Thousands of students have successfully achieved their study abroad dreams with our guidance.",
    icon: <Users className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Proven Visa Success",
    text: "High visa approval rate backed by expert consultancy and up-to-date immigration knowledge.",
    icon: <Award className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Dedicated Post-Visa Support",
    text: "From accommodation to pre-departure briefings, we assist you beyond visa approval.",
    icon: <Headphones className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Empowering Education Agents",
    text: "Partnering with agents to deliver complete student services and seamless application management.",
    icon: <Rocket className="w-6 h-6 text-[#0E3530]" />,
  },
];

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-10 overflow-hidden"
    >
      {/* ---------- SECTION TITLE ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-left mb-10 md:mb-14"
      >
        <div className="inline-block px-3 py-1 rounded-md font-dm-sans text-sm bg-[rgb(242,245,241)] text-[rgba(0,0,0,0.75)]">
          Our Clients
        </div>
      </motion.div>

      {/* ---------- HEADING + PARAGRAPH ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-6 md:gap-8 mb-16 sm:mb-20"
      >
        <h2 className="font-['forum']  text-3xl sm:text-4xl md:text-5xl text-[#0E3530] w-full md:w-1/2 leading-tight">
          Building Global Education Partnerships
        </h2>
        <p className="text-[rgba(0,0,0,0.75)] text-base sm:text-lg leading-relaxed w-full md:w-1/2 font-dm-sans">
          At Rhombus Education and Immigration Services, we proudly collaborate with universities, education agents, and students across the world.
           Our network of trusted partners helps us provide reliable, transparent, and end-to-end solutions for studying abroad and visa processing.
        </p>
      </motion.div>

      {/* ---------- IMAGE + BOX GRID ---------- */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 w-full">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full sticky md:top-[120px] self-start overflow-hidden">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            src={clientImage}
            alt="Clients"
            className="rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[600px]"
          />
        </div>

        {/* RIGHT SIDE BOXES */}
        <div className="md:w-1/2 w-full flex flex-col divide-y divide-gray-200 border border-gray-100 rounded-2xl shadow-md bg-white overflow-hidden">
          {boxData.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-5 sm:p-7 md:p-8 hover:bg-[rgb(242,245,241)] transition-colors duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 bg-[rgba(200,248,169,0.3)] group-hover:bg-[rgba(200,248,169,0.6)] transition rounded-xl p-3 sm:p-4">
                {box.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0E3530]">
                  {box.title}
                </h3>
                <p className="text-sm sm:text-base text-[rgba(0,0,0,0.75)] leading-relaxed">
                  {box.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
