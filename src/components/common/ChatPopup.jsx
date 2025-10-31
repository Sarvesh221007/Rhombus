import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#122033] text-white flex items-center justify-center shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Popup Window */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden z-50"
    >
      {/* 1️⃣ Header */}
      <div className="flex items-center justify-between bg-[#122033] text-white px-4 py-3">
        <div className="flex items-center gap-2">
          {/* Left Icon */}
          <span className="bg-white/10 p-1.5 rounded-lg">
            💬
          </span>
          <h3 className="font-semibold text-base">Live Support</h3>
        </div>

        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/10 p-1.5 rounded-lg transition"
        >
          ✖
        </button>
      </div>

      {/* 2️⃣ Chat Body */}
      <div className="p-4 bg-gray-50">
        {/* Welcome message */}
        <div className="bg-white border border-gray-200 p-3 rounded-lg mb-4 text-sm text-gray-700">
          <p>👋 Hi there! How can I help you today?</p>
        </div>

        {/* Chat form */}
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#122033]"
          />
          <textarea
            rows="2"
            placeholder="Type your message..."
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#122033]"
          />
          <button
            type="submit"
            className="bg-[#122033] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#1c3840] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default ChatPopup;
