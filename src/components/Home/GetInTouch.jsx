import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import bg2 from "/home/bg2.jpg";

const GetInTouch = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true });

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", form);
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    useEffect(() => {
        if (inView)
            controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, [controls, inView]);

    return (
        <section
            ref={sectionRef}
            className="w-full flex flex-col items-center justify-center mt-20 px-3 md:px-4 mb-20"
        >
            {/* Tag + Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-left w-full md:w-[90%]"
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
                    Get in Touch
                </div>

                <div className="mt-4 max-w-2xl">
                    <h2
                        className="text-4xl md:text-5xl font-['Forum'] mt-4 text-[#0E3530]"
                        style={{ fontFamily: "'Forum'" }}
                    >
                        Change Starts With a Conversation
                    </h2>
                </div>
            </motion.div>

            {/* Main Content */}
            <div
                className="relative w-[97%] mt-4 flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[600px] lg:h-[500px]"
            >
                {/* Background image */}
                <div
                    className="relative w-full lg:w-[98%] h-[400px] md:h-[500px] bg-cover bg-center rounded-2xl shadow-lg"
                    style={{
                        backgroundImage: `url("https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-1250030317_edit.jpg")`,
                    }}
                >
                </div>


                <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-0">

                    {/* Contact Form */}
                    <motion.div
                        className="w-full md:w-[90%] lg:w-[45%] bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden z-10  
                               relative lg:absolute lg:mr-20 lg:top-[57%] lg:right-0 lg:-translate-y-1/2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Contact Form Header */}
                        <div
                            className="w-full bg-[#0F3D3A] flex flex-col sm:flex-row items-center justify-between px-2 md:px-6 h-auto py-6 sm:h-25 shadow-md transition-all duration-300 ease-in-out"
                        >
                            <div className="flex flex-row gap-4">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        src="https://execor.vamtam.com/wp-content/uploads/2025/03/Logo-white.svg"
                                        alt="Company Logo"
                                        className="w-[90px] h-[20px] object-contain mb-1"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className="h-[32px] w-[1px] bg-white opacity-40 ml-2"></div>

                                <div className="text-center mr-10">
                                    <h1 className="text-lg md:text-lg font-semibold text-white tracking-wide">
                                        Schedule a Free Consultation
                                    </h1>
                                </div>
                            </div>

                            <div className="flex-shrink-0 ">
                                <Send className="w-12 h-10 text-white mb-4 " />
                            </div>
                        </div>

                        {/* Form content */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 p-2 md:p-10 font-dm-sans"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-md font-normal mb-1 opacity-70">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-md font-normal mb-1 opacity-70">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-md font-normal mb-1 opacity-70">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-md font-normal mb-1 opacity-70">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-md font-normal mb-1 opacity-70">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-full lg:w-[230px] bg-[rgb(200,248,169)] text-[#0E3530] font-normal py-3 rounded-md flex items-center justify-between px-4 transition-all duration-300 hover:bg-[#0E3530] hover:text-white cursor-pointer"
                            >
                                Submit <ArrowRight className="w-5 h-5 opacity-90" />
                            </button>

                            <div className="relative flex items-center justify-center my-4">
                                <span className="absolute w-[100%] border-t border-gray-200"></span>
                            </div>

                            <p className="text-sm text-gray-500 text-left text-[13px] opacity-80">
                                By submitting this form, you agree to our Privacy Policy. We may
                                contact you via email or phone for scheduling or marketing purposes.
                            </p>
                        </form>
                    </motion.div>
                    {/* Left Bottom Info Box */}
                    <motion.div
                        className="relative flex flex-col w-[100%] md:w-[500px] rounded-[8px] overflow-hidden  border border-transparent 
               lg:absolute lg:-bottom-[150px] lg:left-6"
                        style={{
                            boxSizing: "border-box",
                            transition:
                                "background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, transform 0.4s ease",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* 🌑 Top Section */}
                        <div
                            className="flex flex-col justify-left p-6 
                   text-white transition-all duration-500 ease-in-out
                   bg-[rgb(15,61,58)] md:bg-[rgb(15, 61, 58)] lg:bg-[rgba(15,61,58,0.75)] 
                   backdrop-blur-md"
                            style={{
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                        >
                            <h3 className="text-xl font-normal mb-3 drop-shadow-lg">
                                Have a Challenge or an Idea?
                            </h3>

                            <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-md">
                                Fill out the form, and let’s talk about how we can support your
                                business with tailored solutions.
                            </p>
                        </div>

                        {/* 🪄 Bottom Section */}
                        <div
                            className="flex flex-col items-center justify-between text-center py-6 bg-[rgb(244,245,241)] font-['DM Sans']"
                        >
                            {/* ---- PHONE SECTION ---- */}
                            <a
                                href="tel:18003568933"
                                className="w-[92%] flex items-center justify-between py-4 px-4 
                       bg-[rgb(244,245,241)] rounded-md hover:bg-white 
                       transition-colors duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-3 text-[rgba(0,0,0,0.75)]">
                                    <div className="bg-white w-8 h-8 flex item-center justify-center">
                                        <Phone className="w-5 h-5 text-[rgba(0,0,0,0.75)]" />
                                    </div>
                                    <span className="text-base font-normal">1-800-356-8933</span>
                                </div>

                                <ArrowRight
                                    className="w-6 h-6 text-[#0E3530] group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </a>

                            {/* ---- SEPARATOR LINE ---- */}
                            <div className="w-[90%] border-t border-black/15 my-4"></div>

                            {/* ---- LOCATION SECTION ---- */}
                            <a
                                href="https://maps.google.com/?q=Seventh+Ave,+20th+Floor,+New+York,+NY+10018"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[92%] flex items-center justify-between py-4 px-4 
                       bg-[rgb(244,245,241)] rounded-md hover:bg-white 
                       transition-colors duration-300 cursor-pointer group"
                            >
                                <div className="flex items-start gap-3 text-[rgba(0,0,0,0.75)]">
                                    <MapPin className="w-5 h-5 mt-4 text-[rgba(0,0,0,0.75)]" />
                                    <div className="flex justify-left flex-col">
                                        <span className="text-base font-normal text-left">
                                            Visit us.
                                        </span>
                                        <span className="text-base font-normal text-left">
                                            Seventh Ave, 20th Floor, New York, NY 10018
                                        </span>
                                    </div>
                                </div>

                                <ArrowRight
                                    className="w-6 h-6 text-[#0E3530] group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
