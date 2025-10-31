import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const FreeCounsellingPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
    });


    useEffect(() => {
        let hasOpened = false;
        if (!hasOpened) {
            hasOpened = true;
            const timer = setTimeout(() => setIsOpen(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);


    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open("https://zfrmz.in/mfbo6geAmhCNIVZQ0qTs", "_blank");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Blur (click to close) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Popup Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center z-[1000]"
                    >
                        {/* Stop click from closing when clicking inside popup */}
                        <div
                            className="bg-white w-[90%] md:w-[480px] lg:w-[550px] p-10 rounded-2xl shadow-5xl relative text-center border border-gray-200"
                            onClick={(e) => e.stopPropagation()} // ✨ Important fix
                        >
                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent bubbling to backdrop
                                    setIsOpen(false);
                                }}
                                className="absolute top-4 right-5 text-gray-400 hover:text-red-600 text-3xl font-bold"
                            >
                                &times;
                            </button>

                            {/* Logo */}
                            <img
                                src="/logo.svg"
                                alt="Rhombus Education Logo"
                                className="w-20 mx-auto mb-4"
                            />

                            {/* Title */}
                            <h2 className="text-3xl font-bold text-[#0E3530] mb-2">
                                Get Free Counselling
                            </h2>
                            <p className="text-gray-600 mb-8 text-sm">
                                Connect with our experts for personalized guidance on studying abroad.
                            </p>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                {/* Name Row */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-1/2">
                                        <label className="block text-sm font-medium mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3D3A]"
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label className="block text-sm font-medium mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3D3A]"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3D3A]"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#0E3530] hover:bg-[rgb(200,248,169)] text-white hover:text-[#0E3530] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                    Submit <Send className="w-5 h-5" />
                                </button>
                            </form>

                            {/* Footer Note */}
                            <p className="text-xs text-gray-400 mt-6 text-center">
                                You’ll be redirected to our Zoho form to complete your details.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FreeCounsellingPopup;
