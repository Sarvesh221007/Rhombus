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
                {/* Tag */}
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

                {/* Heading */}
                <h2
                    className="text-3xl md:text-5xl font-semibold mt-4 text-[#0E3530]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    Change Starts With a Conversation
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="relative w-[90%] mt-12 flex flex-col md:flex-row items-center justify-between">
                {/* Background image */}
                <div
                    className="relative w-full md:w-[90%] h-[520px] bg-cover bg-center rounded-2xl shadow-lg"
                    style={{
                        backgroundImage: `url(${bg2})`,
                    }}
                >
                </div>
                {/* Contact Form (floating right, overlapping image) */}
                <motion.div
                    className="w-full md:w-[40%] bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 md:p-10 z-10 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6 font-dm-sans">
                        {/* Form Header */}
                        <h3 className="text-2xl font-bold bg-[#0E3530] text-white px-4 py-3 rounded-md flex justify-between items-center">
                            Contact Form <Send className="w-5 h-5 text-white" />
                        </h3>

                        {/* Name Fields */}
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

                        {/* Email */}
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

                        {/* Phone */}
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

                        {/* Message */}
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[rgb(200,248,169)] text-black font-semibold py-3 rounded-md flex items-center justify-between px-4 transition-all duration-300 hover:bg-[#0E3530] hover:text-white"
                        >
                            Submit <ArrowRight className="w-5 h-5" />
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center my-4">
                            <span className="absolute w-2/3 border-t border-gray-300"></span>
                        </div>

                        {/* Note */}
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
