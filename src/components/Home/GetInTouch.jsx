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

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

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
            className="w-full flex mb-50 flex-col items-center justify-center mt-20 px-4 md:px-8"
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

                <h2
                    className="text-3xl md:text-4xl font-semibold mt-4 text-[#0E3530]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    Change Starts With a Conversation
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="relative w-[96%] mt-12 flex flex-col md:flex-row items-center justify-between">
                {/* Background image */}
                <div
                    className="relative w-full md:w-[98%] h-[550px] bg-cover bg-center rounded-2xl shadow-lg"
                    style={{
                        backgroundImage: `url("https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-1250030317_edit.jpg")`,
                    }}
                >
                    {/* Left Bottom Info Box */}
<motion.div
    className="absolute -bottom-30 left-6 flex flex-col w-[417px] rounded-[8px] overflow-hidden shadow-2xl border border-transparent"
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
    {/* Top Section — Heading + Paragraph with teal bg */}
    <div
        className="flex flex-col justify-center items-center text-center p-6"
        style={{
            backgroundColor: "rgba(15, 61, 58, 0.8)",
            color: "white",
        }}
    >
        <h3 className="text-xl font-semibold mb-3 drop-shadow-lg">
            Have a Challenge or an Idea?
        </h3>

        <p className="text-[rgba(255,255,255,0.85)] leading-relaxed">
            Fill out the form, and let’s talk about how we can support your business
            with tailored solutions.
        </p>
    </div>

    {/* Bottom Section — Contact Info with white bg */}
    <div
        className="flex flex-col gap-3 justify-center items-center text-center py-6 px-4"
        style={{
            backgroundColor: "rgb(242, 245, 241)", // solid white-ish background
        }}
    >
        {/* Call */}
        <div className="flex items-center justify-center gap-3 text-[rgba(0,0,0,0.75)]">
            <Phone className="w-5 h-5 text-[rgba(0,0,0,0.75)]" />
            <span>1-800-356-8933</span>
        </div>

        {/* Location */}
        <div className="flex items-start justify-center gap-3 text-[rgba(0,0,0,0.75)] max-w-[300px]">
            <MapPin className="w-5 h-5 mt-1 text-[rgba(0,0,0,0.75)]" />
            <span>Seventh Ave, 20th Floor, New York, NY 10018</span>
        </div>
    </div>
</motion.div>


                </div>

                {/* Contact Form (right side overlapping image) */}
                <motion.div
                    className="w-full md:w-[45%] bg-white border border-gray-200 rounded-2xl shadow-2xl p-8  pr-5 md:p-10 z-10 md:absolute mr-30 md:top-1/2 md:right-0 md:-translate-y-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6 font-dm-sans">
                        <h3 className="text-2xl font-bold bg-[#0E3530] text-white px-4 py-3 rounded-md flex justify-between items-center">
                            Contact Form <Send className="w-5 h-5 text-white" />
                        </h3>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-sm font-medium mb-1">First Name</label>
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
                                <label className="text-sm font-medium mb-1">Last Name</label>
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
                            <label className="text-sm font-medium mb-1">Email</label>
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
                            <label className="text-sm font-medium mb-1">Phone</label>
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
                            <label className="text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[rgb(200,248,169)] text-black font-semibold py-3 rounded-md flex items-center justify-between px-4 transition-all duration-300 hover:bg-[#0E3530] hover:text-white"
                        >
                            Submit <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="relative flex items-center justify-center my-4">
                            <span className="absolute w-2/3 border-t border-gray-300"></span>
                        </div>

                        <p className="text-sm text-gray-500 text-center">
                            By submitting this form, you agree to our Privacy Policy. We may
                            contact you via email or phone for scheduling or marketing
                            purposes.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default GetInTouch;
