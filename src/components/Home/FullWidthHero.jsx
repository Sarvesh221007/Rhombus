import React from "react";
import { motion } from "framer-motion";

const FullWidthHero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center font-['DM Sans'] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2188611296.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-[90vh] object-cover brightness-70"
      />

      {/* Dark Overlay Container (97% width, content stacked top-to-bottom) */}
      <div
        className="relative z-10 flex flex-col justify-between w-[97%] h-[100%] px-6 md:px-10 lg:px-16 rounded-lg"
      >
        {/* ---------- LEFT: Heading Section (Top) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-center md:text-left sm:text-left max-w-[600px] mt-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight font-['Forum'] font-normal">
            Your Time is Valuable. <br />
            We Make Every Second Count.
          </h2>
        </motion.div>

        {/* ---------- RIGHT: Floating Box (Bottom, No Shadow) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="self-end mb-3 w-[300px] md:w-[360px] lg:w-[380px] rounded-lg overflow-hidden"
          style={{
            backdropFilter: 'saturate(1.8) blur(40px)',
            backgroundColor: 'rgba(15,61,58,0.4)',
            borderRadius: '6px',
          }}
        >
          {/* Text content inside box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center text-white py-8 px-6"
          >
            <span className="text-md md:text-md font-normal">Up to</span>
            <span className="text-5xl md:text-6xl my-2 font-normal">40%</span>
            <span className="text-base md:text-md font-normal opacity-90">
              of leaders’ time goes to strategy.
            </span>
          </motion.div>

          {/* Button */}
          <a
            href="https://execor.vamtam.com/services/"
            className="block text-center w-full py-4 bg-[rgb(200,248,169)] text-[#0E3530] font-semibold 
      text-sm md:text-sm transition-all duration-300 hover:bg-[#0E3530] hover:text-white"
          >
            Let us optimize it for you →
          </a>
        </motion.div>

      </div>

    </section>
  );
};

export default FullWidthHero;
