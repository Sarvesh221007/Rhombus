// src/components/Home/FullWidthHero.jsx
import React from "react";
import { motion } from "framer-motion";

const infoItems = [
  "15+ Years of Experience",
  "Top-Rated Consultancy",
  "Certified Professionals",
];

const FullWidthHero = () => {
  return (
    <section className="relative w-full h-[95vh]">
      {/* Background Image */}
      <img
        src="/home/bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between px-3 md:px-16 py-12">
        {/* TOP LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
            Your Time is Valuable.
          </h2>
          <h1 className="font-forum text-4xl sm:text-5xl md:text-5xl text-white leading-tight mb-4">
            We Make Every Second Count
          </h1>
        </motion.div>

        {/* RIGHT-BOTTOM INFO BOX */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute bottom-[-20%] right-6 md:right-16 w-80 md:w-96 rounded-lg shadow-xl overflow-hidden"
        >
          {/* Top Part - 50% */}
          <div className="flex flex-col justify-center items-center h-[50%] bg-[rgb(244,245,241)] p-6 text-center">
            <p className="text-xl md:text-2xl font-medium">Up to</p>
            <p className="text-5xl md:text-6xl font-bold my-1">40%</p>
            <p className="text-lg md:text-xl font-medium">of leaders’ time goes to strategy.</p>
          </div>

          {/* Bottom Part - 50% with full background button */}
          <div className="h-[50%] bg-green-200 p-0">
            <button
              className="w-full h-full bg-[rgb(200,248,169)] text-black font-dm-sans px-4 py-2 rounded-none hover:text-white hover:bg-[#0E3530] transition text-xl md:text-2xl"
            >
              Free Consultation →
            </button>
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default FullWidthHero;
