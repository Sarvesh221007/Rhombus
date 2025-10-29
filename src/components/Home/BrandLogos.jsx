import React from "react";
import { motion } from "framer-motion";

// ✅ Local flag images (placed in public/flag/)
const flags = [
  "/flag/aus.png",
  "/flag/canada.png",
  "/flag/german.png",
  "/flag/nz.png",
  "/flag/uk.png",
  "/flag/usa.png",
];

const BrandLogos = () => {
  return (
    <section
      className="w-full lg:pt-20 mt-30 text-[rgba(0,0,0,0.75)]"
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "15px",
        lineHeight: "22.5px",
        colorScheme: "normal",
        boxSizing: "border-box",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="max-w-[1244px] mx-auto flex flex-nowrap justify-between items-center overflow-x-visible px-6 gap-8 transition-all duration-300"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "none",
        }}
      >
        {flags.map((flag, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110"
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
              src={flag}
              alt={`Country ${index + 1}`}
              className="max-w-full h-[85px] object-contain opacity-100 hover:opacity-90 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
