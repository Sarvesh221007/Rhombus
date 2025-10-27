// src/components/Home/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Business Consulting",
    points: [
      "Strategy development & growth",
      "Market research & competitors",
      "Risk management",
    ],
    img: "/home/servicelogo.svg",
  },
  {
    title: "Marketing, Sales, & Retention",
    points: [
      "Brand positioning & messaging",
      "Lead generation & sales",
      "Customer retention & loyalty",
    ],
    img: "/home/servicelogo2.svg",
  },
  {
    title: "Operations Management",
    points: [
      "Process optimization",
      "Cost reduction & efficiency",
      "KPI tracking & insights",
    ],
    img: "/home/servicelogo3.svg",
  },
  {
    title: "Talent Acquisition",
    points: [
      "Talent sourcing",
      "Employer branding",
      "Workforce planning",
    ],
    img: "/home/servicelogo4.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden mt-20 bg-gray-50 py-28 px-6 sm:px-10 md:px-20">
      {/* Section Tag */}
      <motion.div
        className="inline-block px-3 py-1 mb-6"
        style={{
          backgroundColor: "rgb(242, 245, 241)",
          color: "rgba(0, 0, 0, 0.75)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          lineHeight: "20px",
          borderRadius: "4px",
        }}
      >
        Our Core Services
      </motion.div>

      {/* Heading + Paragraph */}
      <motion.div
        className="flex flex-col md:flex-row mb-10 items-start"
        style={{ gap: "20%" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-[30%] w-full">
          <h2 className="text-5xl text-black mb-4 text-center px-4 flex items-center justify-center">
            What We Offer
          </h2>
        </div>
        <div className="md:w-[50%] w-full">
          <p className="font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)]">
            Our mission is simple: to guide students toward a brighter future by making studying abroad
            an achievable and exciting opportunity.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {servicesData.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col justify-between min-h-[460px] rounded-2xl shadow-lg border border-[rgb(244,245,241)] hover:border-[rgb(200,248,169)] overflow-hidden"
          >
            {/* Top Image */}
            <div className="flex justify-center mt-6">
              <img src={service.img} alt={service.title} className="w-20 h-20 object-contain" />
            </div>

            {/* Box Content */}
            <div className="relative flex flex-col mt-6">
              <h3
                className="text-3xl text-[#0E3530] mb-4 text-center px-4 flex items-center justify-center"
                style={{
                  fontWeight: 'normal',
                  wordWrap: 'break-word',
                  minHeight: '4rem',
                  lineHeight: '2rem',
                  textAlign: 'center',
                }}
              >
                {service.title}
              </h3>

              {/* Points + Learn More background */}
              <div className="p-6 flex flex-col gap-4 mt-auto rounded-b-2xl bg-[rgb(244,245,241)] hover:bg-[rgb(200,248,169)] transition-colors duration-300">
                <ul className="space-y-2 text-gray-800 text-base">
                  {service.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-black flex-shrink-0 mt-1" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="mt-4 inline-block py-2.5 w-full text-center font-semibold rounded-lg bg-white text-[#0E3530] border border-gray-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
