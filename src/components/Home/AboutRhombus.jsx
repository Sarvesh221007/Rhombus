// src/components/Home/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import founder from "/about/founder.jpeg";

const tickItems = [
  "15+ Years of Experience",
  "Top-Rated Consultancy",
  "Certified Professionals",
];

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-50 mt-10 via-white to-white px-6 md:px-16 py-20 flex flex-col md:flex-row items-start gap-25">
      {/* Left Image + Info Box */}
      <motion.div
        className="relative md:w-1/2 w-full flex justify-center"
        style={{ minHeight: "38rem" }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={founder}
          alt="Founder"
          className="w-120 md:w-[30rem] h-lg object-cover rounded-lg shadow-xl"
        />

        {/* Info Box Overlapping Image */}
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            right: "-2%",
            width: "40%",
            height: "60%",
            backgroundColor: "#c8f8a9",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <div className="space-y-2">
            <p className="font-forum text-[18px] text-black">Why Hire Rhombus?</p>
            {tickItems.map((item, idx) => (
              <p key={idx} className="font-dm-sans text-[16px] text-black">{item}</p>
            ))}
          </div>
          <button
            className="mt-2 bg-white text-[rgba(0,0,0,0.75)] font-dm-sans px-4 py-2 rounded-md hover:bg-gray-100 transition w-full"
            style={{ height: "46px", lineHeight: "24px" }}
          >
            Free Consultation →
          </button>
        </div>
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        className="md:w-1/2 w-full space-y-4 font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)] text-left"
        style={{ minHeight: "38rem" }}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
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
          About Rhombus
        </div>

        <h2 className="font-forum text-[36px] text-black mb-4">Meet Our Founder</h2>
        <p>
          Hi, I am Heena Gupta, Founder & CEO of Rhombus Education & Immigration Services.
        </p>
        <p>
          With over 15 years of experience in the education and immigration field, we have guided hundreds of students worldwide.
        </p>
        <p>
          Our mission is to empower students with personalized education and immigration solutions, ensuring transparency, trust, and success.
        </p>
        <p>
          We combine expertise, certifications from the British Council & ICEF, and a dedicated team to make your study abroad journey seamless and successful.
        </p>
        <p>
          Let us help you take the next step in your academic and professional journey. Contact us today!
        </p>

        {/* ✅ Black Tick List */}
        <ul className="space-y-2 mt-4">
          {tickItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="text-black w-5 h-5 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutSection;
