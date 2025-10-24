// src/components/Home/InsightsSuccess.jsx
import React from "react";
import { motion } from "framer-motion";

const stories = [
    {
        image: "/insights/img1.webp",
        title: "Maximizing Team Productivity",
        date: "Oct 12, 2025",
        desc: "Learn how top leaders manage time and boost efficiency.",
    },
    {
        image: "/insights/img2.webp",
        title: "Successful Client Partnerships",
        date: "Sep 28, 2025",
        desc: "Case studies on building long-lasting client relationships.",
    },
    {
        image: "/insights/img3.webp",
        title: "Digital Transformation Journey",
        date: "Aug 15, 2025",
        desc: "How companies embrace technology to scale faster.",
    },
    {
        image: "/insights/img4.webp",
        title: "Leadership Insights",
        date: "Jul 10, 2025",
        desc: "Key strategies for effective leadership in modern businesses.",
    },
];

const InsightsSuccess = () => {
    return (
        <section className="w-full flex flex-col pb-10 items-center justify-center mt-20 px-4 md:px-16">
            {/* Tag + Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-left w-full md:w-[90%]"
            >
                {/* Tag */}
                <span
                    className="inline-block px-3 py-1"
                    style={{
                        backgroundColor: "rgb(242, 245, 241)",
                        color: "rgba(0, 0, 0, 0.75)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        borderRadius: "4px",
                    }}
                >
                    Insights & Success Stories
                </span>

                {/* Heading + Paragraph */}
                <h2
                    className="text-3xl md:text-5xl font-forum mt-4 text-[#0E3530]"
                    style={{ fontFamily: "'Forum', serif" }}
                >
                    Learn from the Best, Achieve Your Goals
                </h2>
                <p
                    className="mt-4 text-[16px] md:text-[18px] text-[#0E3530] leading-7 font-dm-sans"
                >
                    Discover how our strategies, insights, and success stories help businesses and leaders thrive in a fast-paced world.
                </p>
            </motion.div>

            {/* Four Boxes */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full md:w-[90%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {stories.map((story, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        {/* Image only box with increased height */}
                        <div className="w-full h-80 md:h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text outside the image box */}
                        <div className="mt-4 w-full px-2 md:px-4 text-left">
                            {/* Tag + Date on the same line */}
                            <div className="flex justify-between items-center mb-2">
                                <span
                                    className="inline-block px-3 py-1"
                                    style={{
                                        backgroundColor: "rgb(242, 245, 241)",
                                        color: "rgba(0, 0, 0, 0.75)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "14px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    Insights
                                </span>
                                <span className="text-sm text-gray-500">{story.date}</span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-lg md:text-xl font-forum text-[#0E3530]"
                                style={{ fontFamily: "'Forum', serif" }}
                            >
                                {story.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-[14px] md:text-[15px] text-[#0E3530] leading-5 mt-2 font-dm-sans"
                            >
                                {story.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>


        </section>
    );
};

export default InsightsSuccess;
