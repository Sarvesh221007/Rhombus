import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clientImage from "/home/client.jpg";

const boxData = [
    {
        title: "Global Partners",
        text: "Collaborating with over 200 international universities and institutions.",
    },
    {
        title: "Trusted Clients",
        text: "Our clients include leading education providers and visa consultants worldwide.",
    },
    {
        title: "Student Success",
        text: "Thousands of successful visa approvals and study placements.",
    },
    {
        title: "Ongoing Support",
        text: "We ensure client satisfaction with continuous post-visa assistance.",
    },
    {
        title: "Future Vision",
        text: "Expanding our partnerships to new continents and global education hubs.",
    },
];

const ClientsSection = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true });

    return (
        <section
            ref={sectionRef}
            className="relative bg-white px-6 md:px-16 py-24 md:py-32 overflow-hidden"
        >
            {/* ---------- SECTION TITLE ---------- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="text-left mb-12"
            >
                <div
                    className="inline-block px-3 py-1"
                    style={{
                        backgroundColor: "rgb(242, 245, 241)",
                        color: "rgba(0, 0, 0, 0.75)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        borderRadius: "4px",
                    }}
                >
                    Our Clients
                </div>
            </motion.div>

            {/* ---------- HEADING + PARAGRAPH ---------- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-20"
            >
                <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-black w-full md:w-1/2 leading-tight">
                    Empowering Global Connections
                </h2>
                <p className="text-[rgba(0,0,0,0.75)] text-base sm:text-lg leading-relaxed w-full md:w-1/2 font-dm-sans">
                    Our clients trust us to deliver consistent results and lasting partnerships.
                    We collaborate with international institutions, government bodies, and education providers
                    to ensure excellence in every step of the student and client journey.
                </p>
            </motion.div>

            {/* ---------- IMAGE + SINGLE BOX WITH POINTS ---------- */}
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 w-full">
                {/* LEFT IMAGE */}
                <div className="md:w-1/2 w-full sticky top-[120px] self-start overflow-hidden">
                    <motion.img
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        src={clientImage}
                        alt="Clients"
                        className="rounded-2xl shadow-2xl object-cover w-full h-[420px] sm:h-[520px] md:h-[650px]"
                    />
                </div>

                {/* RIGHT SINGLE BOX */}
                <div className="md:w-1/2 w-full border rounded-2xl overflow-hidden shadow-xl">
                    {boxData.map((box, index) => (
                        <div
                            key={index}
                            className={`p-6 ${index % 2 === 0 ? "bg-white" : "bg-[rgb(242,245,241)]"}`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
                            <p className="text-base">{box.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
