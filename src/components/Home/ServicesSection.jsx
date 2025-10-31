// src/components/Home/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const servicesData = [
  {
    title: "🎓Student Visa Assistance",
    points: [
      "Visa guidance for Australia, UK & Canada",
      "Step-by-step process support",
      "Immigration compliance assurance",
    ],
    img: "/home/servicelogo.svg",
  },
  {
    title: "🏛️University Placement",
    points: [
      "Course & institution selection",
      "Goal-based admission guidance",
      "End-to-end application support",
    ],
    img: "/home/servicelogo2.svg",
  },
  {
    title: "📄Application & Document Review",
    points: [
      "Academic & financial review",
      "University requirement check",
      "Professional feedback & editing",
    ],
    img: "/home/servicelogo3.svg",
  },
  {
    title: "🤝Consultancy for Education Agents",
    points: [
      "Partnered student services",
      "University network access",
      "Streamlined client management",
    ],
    img: "/home/servicelogo4.svg",
  },
];


const ServicesSection = () => {
  return (
    <section className="relative overflow-hidde py-16 flex justify-center">
      {/* ---------- Main Container ---------- */}
      <div className="max-w-[1266px] sm:w-[95vw] md:w-[1266px] px-4">
        {/* Section Tag */}
        <motion.div
          className="inline-block px-3 py-1 mb-6"
          style={{
            backgroundColor: "rgb(242,245,241)",
            color: "rgba(0,0,0,0.75)",
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
          className="flex flex-col md:flex-row mb-4 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-[60%] w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#0E3530] text-4xl sm:text-5xl leading-snug font-['Forum'] mb-5"
            >
              Expert Advice, Built for You
            </motion.h2>
          </div>

          <div className="md:w-[50%] w-full">
            <p className="font-['DM Sans'] text-[16px] leading-[26px] text-[rgba(0,0,0,0.75)]">
              At Rhombus Education and Immigration Services, we help students achieve their study-abroad goals with expert visa guidance,
              personalized university placements, and complete document support. Our team ensures a smooth, transparent, and successful
              journey for every student and education partner.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {servicesData.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col justify-between rounded-2xl shadow-lg 
                 border border-[rgb(244,245,241)] hover:border-[rgb(200,248,169)] 
                 overflow-hidden bg-white h-full"
            >
              {/* Top Image */}
              <div className="flex justify-left mx-4 mt-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Box Content */}
              <div className="flex flex-col flex-grow mt-6">
                <h3
                  className="text-2xl sm:text-3xl text-[#0E3530] mb-8 text-left mx-4 font-['Forum']"
                  style={{
                    fontWeight: "normal",
                    lineHeight: "2rem",
                    minHeight: "4rem",
                  }}
                >
                  {service.title}
                </h3>

                {/* Content Box with Equal Height and Consistent Padding */}
                <div
                  className={`p-4 pt-10 flex flex-col justify-between flex-grow rounded-b-2xl 
            bg-[rgb(244,245,241)] hover:bg-[rgb(200,248,169)] 
            transition-colors duration-300 min-h-[220px]`}
                >
                  <ul className="space-y-1 text-gray-800 text-base flex-grow">
                    {service.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check
                          size={20}
                          className="text-[rgba(0,0,0,0.75)] flex-shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-[14px] leading-[1.7] text-[rgba(0,0,0,0.75)]">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ Bottom Padding Fixed */}
                  <div className="mt-auto pt-1 pb-2">
                    <Link
                      to="/services"
                      className="inline-block py-2.5 w-full text-center font-semibold rounded-lg 
                        bg-white text-[#0E3530] border border-gray-300 
                        hover:bg-[#0E3530] hover:text-[rgb(200,248,169)] 
                        transition-all duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;
