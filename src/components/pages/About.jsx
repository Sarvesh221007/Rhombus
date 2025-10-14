import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import founder from "/about/founder.jpeg";
import coFounder from "/about/co_founder.jpg";
import sManager from "/about/s_manager.jpg";

const teamMembers = [
    { name: "Heena Gupta", title: "Founder & CEO", image: founder },
    { name: "Debraj Banerjee", title: "Co-Founder & Director", image: coFounder },
    { name: "Monalisa Guha", title: "Senior Admission Manager", image: sManager },
    { name: "Heena Gupta", title: "Founder & CEO", image: founder },
    { name: "Debraj Banerjee", title: "Co-Founder & Director", image: coFounder },
    { name: "Monalisa Guha", title: "Senior Admission Manager", image: sManager },
];

const MotionSection = ({ children, ...props }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        {...props}
    >
        {children}
    </motion.div>
);

const About = () => {
    const sectionRef = useRef(null);
    const controls = useAnimation();
    const inView = useInView(sectionRef, { once: true });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
    }, [controls, inView]);

    return (
        <div className="overflow-x-hidden mt-5 bg-white">
            {/* Section 1: Founder Intro */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-blue-50 to-white">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 space-y-4 text-gray-700"
                >
                    {[
                        "Hi, I am Heena Gupta Founder & CEO of Rhombus Education and Immigration Services",
                        "Over 15 years of experience in the education and immigration field. Trusted certifications from the British Council and ICEF.",
                        "Welcome to Rhombus Education and Immigration Services, where we guide you toward achieving your academic and professional dreams abroad. Our mission is to empower individuals with personalized education and immigration solutions.",
                        "At Rhombus, we believe in a holistic approach to education and career planning. Whether you're aspiring to study at a prestigious university or seeking immigration opportunities, our expert team is dedicated to provide clear guidance and unwavering support throughout your journey.",
                        "With a focus on transparency, trust, and tailored services, we have helped countless students and professionals navigate complex processes with ease.",
                        "A team of dedicated professionals committed to your success. Comprehensive, end-to-end support for students and education agents alike."
                    ].map((text, idx) => <p key={idx}>{text}</p>)}
                    <p className="font-semibold text-blue-700">
                        Let us help you take the next step in your academic and professional journey. Contact us today to get started with us!
                    </p>
                </motion.div>

                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                >
                    <motion.img
                        src={founder}
                        alt="Founder"
                        className="w-80 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
            </section>

            {/* Section 2: Our Mission */}
            <section className="bg-blue-50 px-6 md:px-16 py-20 text-gray-700 text-center">
                <MotionSection>
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
                </MotionSection>
                {[
                    "Our mission is simple: to guide students toward a brighter future by making studying abroad an achievable and exciting opportunity. We understand the significance of studying internationally and the impact it has on personal and professional growth. With a focus on personalized care and expert consultancy, we ensure every student has a smooth, efficient, and successful journey—from choosing the right university to obtaining a student visa.",
                    "We also offer comprehensive support to education agents, helping them manage their student clients' applications and visa processes with ease, precision, and trust."
                ].map((text, idx) => <MotionSection key={idx}><p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">{text}</p></MotionSection>)}
            </section>

            {/* Section 3: Our Team */}
            <section className="px-6 md:px-16 py-20 bg-white text-center">
                <MotionSection><h2 className="text-3xl font-bold text-blue-800 mb-6">Our Team</h2></MotionSection>
                <MotionSection><p className="mx-auto text-gray-600 max-w-2xl mb-10">Our team consists of experienced education consultants, visa specialists, and support staff, all dedicated to providing exceptional service...</p></MotionSection>
                <motion.div className="overflow-x-auto flex space-x-8 py-6 scrollbar-hide">
                    {teamMembers.map((member, idx) => (
                        <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
                            className="min-w-[240px] bg-blue-50 rounded-2xl shadow-lg p-5 text-center hover:bg-blue-100 transition"
                        >
                            <img src={member.image} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md"/>
                            <h4 className="text-lg font-semibold text-blue-800">{member.name}</h4>
                            <p className="text-gray-600">{member.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Section 4: Why Choose Us */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-6 md:px-16 py-20 text-center">
                <MotionSection><h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2></MotionSection>
                <MotionSection>
                    <ul className="max-w-3xl mx-auto text-lg space-y-4">
                        {[
                            "Over 15 years of expertise in the education and immigration field.",
                            "Personalized, one-on-one consultation for every student.",
                            "Trusted partner of the British Council.",
                            "Seamless support from university application to visa approval."
                        ].map((item, idx) => <li key={idx}>✔️ {item}</li>)}
                    </ul>
                </MotionSection>
                <MotionSection>
                    <p className="mt-10 font-semibold text-lg">
                        Let us help you open doors to global education opportunities. <br />
                        <span className="text-yellow-300">Contact us today to start your journey abroad!</span>
                    </p>
                </MotionSection>
            </section>
        </div>
    );
};

export default About;
