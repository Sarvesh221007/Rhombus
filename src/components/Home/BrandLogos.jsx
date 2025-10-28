import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://execor.vamtam.com/wp-content/uploads/2025/03/coins.svg",
  "https://execor.vamtam.com/wp-content/uploads/2025/03/swift.svg",
  "https://execor.vamtam.com/wp-content/uploads/2025/03/brand.svg",
  "https://execor.vamtam.com/wp-content/uploads/2025/03/fabrik-2.svg",
  "https://execor.vamtam.com/wp-content/uploads/2025/03/waves.svg",
  "https://execor.vamtam.com/wp-content/uploads/2025/03/brand-1.svg",
];

const BrandLogos = () => {
  return (
    <section
      className="w-full py-8 mt-45 text-[rgba(0,0,0,0.75)]"
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "15px",
        lineHeight: "22.5px",
        colorScheme: "normal",
        boxSizing: "border-box",
      }}
    >
      <div
        className="max-w-[1244px] mx-auto flex flex-nowrap justify-between items-center overflow-x-visible px-5 gap-6 transition-all duration-300"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "none",
          color: "rgba(0,0,0,0.75)",
        }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105"
            style={{
              flexShrink: 1,
              flexGrow: 0,
              flexBasis: "auto",
              position: "relative",
              margin: "20px 0",
              padding: "0 20px",
            }}
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-w-full h-[70px] object-contain opacity-100 hover:opacity-110 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
