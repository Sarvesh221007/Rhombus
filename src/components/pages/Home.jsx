import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import handImage from "/hand.jpg"; // make sure hand.jpg is in public folder
import aus from "/flag/aus.png";
import uk from "/flag/uk.png";
import nz from "/flag/nz.png";
import canada from "/flag/canada.png";
import usa from "/flag/usa.png";
import german from "/flag/german.png";

const Home = () => {
    const imageRef = useRef(null);
    const controls = useAnimation();
    const inView = useInView(imageRef, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1, transition: { duration: 1.5 } });
        }
    }, [controls, inView]);

    return (
        <div className="overflow-x-hidden relative">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-18 relative overflow-hidden">
                <div className="max-w-8xl mx-10 flex flex-col md:flex-row items-center gap-20">

                    {/* Left: Heading + Paragraph + Flags */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-700">
                            Welcome to Rhombus Education and Immigration Services
                        </h3>
                        <p className="text-gray-700 text-md">
                            At Rhombus Education and Immigration Services, we specialize in helping students navigate the complexities of studying abroad. Whether you're applying for a student visa or seeking guidance on the right university, we provide expert advice and comprehensive support every step of the way. With certifications from the British Council, our team is dedicated to delivering exceptional service and personalized solutions for students and education agents worldwide.
                        </p>

                        {/* Example country flags */}
                        <div className="flex justify-between mt-4 flex-wrap">
                            {[
                                { src: aus, label: "Australia" },
                                { src: uk, label: "England" },
                                { src: nz, label: "New Zealand" },
                                { src: canada, label: "Canada" },
                                { src: usa, label: "USA" },
                                { src: german, label: "Germany" },
                            ].map((flag, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <img src={flag.src} alt={flag.label} className="w-16 h-16" />
                                    <p className="text-sm">{flag.label}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Link to="/contact">
                                <button className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 hover:scale-105 transition-all duration-300">
                                    Study Visa
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Hero Image with slight parallax */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        className="md:w-1/2"
                    >
                        <motion.img
                            src={handImage}
                            alt="Education Hand"
                            className="rounded-lg shadow-xl w-full object-cover"
                            whileHover={{ scale: 1.02 }}
                        />
                    </motion.div>

                </div>
            </section>

            {/* About Rhombus Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
                    >
                        About Rhombus
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 300, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-gray-700 text-md max-w-7xl mb-6"
                    >
                        Founded by <span>Heena Gupta</span> and <span>Debraj Banerjee</span> professionals with over 15 years of experience in international education and student visa consultancy, Rhombus Education and Immigration Services was born out of a desire to make the study-abroad process easier and more accessible for students worldwide. Over the years, we have successfully assisted countless students in securing placements in top universities across the Australia, UK, Canada, Europe and many other countries across the globe, while ensuring they receive the proper guidance and support throughout their visa application process.
                        Our team has grown with the times, constantly updating our practices to stay ahead of evolving immigration regulations and educational trends. With certification from ICEF, we are proud to be a trusted partner for both students and education agents.          </motion.p>

                    {/* Optional extra features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {[
                            { title: "Expert Guidance", desc: "Experienced consultants provide step-by-step support for study abroad applications." },
                            { title: "Visa Assistance", desc: "Simplifying visa procedures to ensure a smooth process for students and agents." },
                            { title: "Global Universities", desc: "Access to top universities across the UK, USA, Canada, and Australia with certified guidance." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-20 bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto px-6 text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Explore our wide range of services to make your study abroad journey smooth and successful.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
