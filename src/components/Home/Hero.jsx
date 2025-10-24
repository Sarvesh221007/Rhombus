import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import handImage from "/hand.jpg";

const HeroSection = () => {
    return (
        <section
            className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 pt-24 pb-16 md:pb-0"
            style={{
                backgroundColor: "#0E3530",
                minHeight: "99vh",
                backgroundImage: `repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.05),
          rgba(255,255,255,0.05) 6px,
          rgba(255,255,255,0.0) 30px
        )`,
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-10 w-full relative">
                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full space-y-4 text-center md:text-left z-10"
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-normal text-5xl sm:text-4xl md:text-5xl leading-snug text-white"
                        style={{ fontFamily: "Forum, sans-serif" }}
                    >
                        Welcome to <span className="text-[rgb(200,248,169)]">Rhombus Education & Immigration Services</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-lg mx-auto md:mx-0"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        We help students achieve their global dreams.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="flex justify-center md:justify-start mt-4"
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[rgb(200,248,169)] text-black font-semibold px-5 sm:px-6 py-2.5 rounded-lg shadow-lg hover:bg-green-300 transition-all duration-300"
                            >
                                Study Visa <span className="text-lg sm:text-xl">&rarr;</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center z-10"
                >
                    <motion.img
                        src={handImage}
                        alt="Education Hand"
                        className="rounded-lg shadow-xl object-cover w-[85%] sm:w-[70%] md:w-[90%] lg:w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px]"
                        whileHover={{ scale: 1.03 }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
