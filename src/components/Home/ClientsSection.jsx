// src/components/Home/ClientsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Users, Award, Headphones, Rocket } from "lucide-react";
import clientImage from "/home/client.jpg";

const boxData = [
  {
    title: "Global Partners",
    text: "Collaborating with over 200 international universities and institutions.",
    icon: <Globe2 className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Trusted Clients",
    text: "Our clients include leading education providers and visa consultants worldwide.",
    icon: <Users className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Student Success",
    text: "Thousands of successful visa approvals and study placements.",
    icon: <Award className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Ongoing Support",
    text: "We ensure client satisfaction with continuous post-visa assistance.",
    icon: <Headphones className="w-6 h-6 text-[#0E3530]" />,
  },
  {
    title: "Future Vision",
    text: "Expanding our partnerships to new continents and global education hubs.",
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
          Empowering Global Connections
        </h2>
        <p className="text-[rgba(0,0,0,0.75)] text-base sm:text-lg leading-relaxed w-full md:w-1/2 font-dm-sans">
          Our clients trust us to deliver consistent results and lasting partnerships.
          We collaborate with international institutions, government bodies, and education providers
          to ensure excellence in every step of the student and client journey.
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
