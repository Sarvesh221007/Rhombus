import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const VisionSection = () => {
    const visionPoints = [
        {
            title: "Customer-Centric Approach",
            description:
                "We prioritize understanding your business needs to deliver solutions that truly add value.",
        },
        {
            title: "Expertise & Experience",
            description:
                "With 15+ years of proven experience, our experts ensure successful project outcomes.",
        },
        {
            title: "Sustainable Growth",
            description:
                "We believe in long-term partnerships that foster continuous growth and innovation.",
        },
    ];

    return (
        <section className="bg-white px-6 md:px-16 py-20 pt-35 text-[rgba(0,0,0,0.75)] font-dm-sans">
            {/* ----------- Tag + Divider ----------- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-left"
            >
                {/* Tag */}
                <div
                    className="inline-block px-3 py-1"
                    style={{
                        backgroundColor: "rgb(242, 245, 241)",
                        color: "rgba(0, 0, 0, 0.75)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        lineHeight: "20px",
                        borderRadius: "4px",
                    }}
                >
                    Our Vision
                </div>

                {/* Faded Divider Line */}
                <div className="w-[85%] border-t border-gray-300 opacity-50 my-5" />
            </motion.div>

            {/* ----------- Main Heading ----------- */}
            <motion.h2
                className="text-5xl text-[#0E3530] leading-snug text-left max-w-5xl"
                style={{ fontFamily: "Forum, sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                We add value by focusing on understanding your business and applying our experience and implementation approach.
            </motion.h2>

            {/* ----------- Vision Points ----------- */}
            <motion.div
                className="mt-10 flex flex-col md:flex-row justify-start items-start w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {visionPoints.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 flex flex-col items-start text-left px-4 relative ${index !== visionPoints.length - 1 ? "md:border-r md:border-gray-300" : ""
                            }`}
                    >
                        {/* Icon + Heading */}
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-[rgb(200,248,169)]" />
                            <h3
                                className="text-lg md:text-xl text-[#0E3530]"
                                style={{ fontWeight: 500 }}
                            >
                                {item.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] leading-6 text-[rgba(0,0,0,0.7)]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </motion.div>

        </section>
    );
};

export default VisionSection;
