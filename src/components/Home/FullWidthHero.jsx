import React from "react";
import { motion } from "framer-motion";

const FullWidthHero = () => {
  return (
    <section className="relative w-full h-[95vh] font-dm-sans">
      {/* Background Image */}
      <img
        src="https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2188611296.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-center px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[750px] mr-20 mb-30"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-normal leading-snug">
            Your Time is Valuable. <br className="hidden sm:block" />
            We Make Every Second Count.
          </h2>
        </motion.div>

        {/* Floating Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-[-54px] right-6 md:right-16 w-[300px] md:w-[360px] lg:w-[380px]
            rounded-lg overflow-hidden shadow-2xl"
          style={{
            backdropFilter: "saturate(1.8) blur(40px)",
            backgroundColor: "rgba(15,61,58,0.4)",
            borderRadius: "8px",
          }}
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center  text-white py-8 px-6"
          >
            <span className="text-lg md:text-xl font-normal">Up to</span>
            <span className="text-5xl md:text-6xl my-2 font-normal">40%</span>
            <span className="text-base md:text-lg font-medium opacity-90">
              of leaders’ time goes to strategy.
            </span>
          </motion.div>

          {/* Button */}
          <motion.a
            href="https://execor.vamtam.com/services/"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-center w-full py-4 bg-[rgb(200,248,169)] text-[#0E3530] font-semibold 
              text-lg md:text-xl transition-all duration-300 hover:bg-[#0E3530] hover:text-[rgb(200,248,169)]"
          >
            Let us optimize it for you →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FullWidthHero;
