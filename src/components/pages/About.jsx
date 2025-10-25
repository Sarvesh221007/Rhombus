import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; 
import founder from "/about/founder.jpeg";
import coFounder from "/about/co_founder.jpg";
import sManager from "/about/s_manager.jpg";

const teamMembers = [
  { name: "Debraj Banerjee", title: "Co-Founder & Director", image: coFounder },
  { name: "Monalisa Guha", title: "Senior Admission Manager", image: sManager },
  { name: "Heena Gupta", title: "Founder & CEO", image: founder },
];

const About = () => {
  const tickItems = [
    "Over 15 years of expertise in international education.",
    "Personalized guidance for each student.",
    "Trusted partner of the British Council.",
    "Smooth support from application to visa approval.",
  ];

  return (
    <div className="font-sans overflow-x-hidden text-[rgba(0,0,0,0.75)]">

      {/* Section 1: Who We Are */}
      <section className="bg-[rgb(242,245,241)] px-6 md:px-16 py-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-forum text-[36px] text-black mb-6 text-left"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)] max-w-4xl text-left"
        >
          With years of experience and a results-focused approach, we empower
          businesses to navigate complexity and achieve their goals.
        </motion.p>
      </section>

      {/* Section 2: Our Founder */}
      <section className="bg-gradient-to-r from-cyan-50 via-white to-white px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-30">
        {/* Left Image */}
        <motion.div
          className="relative md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={founder}
            alt="Founder"
            className="w-96 md:w-[30rem] h-[38rem] object-cover rounded-lg shadow-xl"
          />
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
              <p className="font-forum text-[18px] text-black">Why Hire Execor?</p>
              <p className="font-dm-sans text-[16px] text-black">15+ Years of Experience</p>
              <p className="font-dm-sans text-[16px] text-black">Top-Rated Consultancy</p>
              <p className="font-dm-sans text-[16px] text-black">Certified Professionals</p>
            </div>
            <button
              className="mt-2 bg-white text-[rgba(0,0,0,0.75)] font-dm-sans px-4 py-2 rounded-md hover:bg-gray-100 transition w-full"
              style={{ height: "46px", lineHeight: "24px" }}
            >
              Free Consultation →
            </button>
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 w-full space-y-4 font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)] text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
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
                <CheckCircle className="text-black w-5 h-5 mt-1" /> {/* black tick */}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Section 3: Our Mission */}
      <section className="bg-white px-6 md:px-16 py-20 space-y-5">
        <motion.div
          className="inline-block px-3 py-2 rounded-md"
          style={{
            backgroundColor: "rgb(242, 245, 241)",
            color: "rgba(0, 0, 0, 0.75)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            borderRadius: "4px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-start"
          style={{ gap: "20%" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-[30%] w-full">
            <h2 className="font-forum text-[30px] text-black leading-[40px]">
              Empowering Clients to Create Lasting Value
            </h2>
          </div>
          <div className="md:w-[50%] w-full">
            <p className="font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)]">
              Our mission is simple: to guide students toward a brighter future by making studying abroad
              an achievable and exciting opportunity. With a focus on personalized care and expert consultancy,
              we ensure every student has a smooth, efficient, and successful journey—from choosing the right
              university to obtaining a student visa.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Our Team */}
      <section className="bg-white px-10 md:px-16 py-20">
        <motion.div
          className="inline-block px-3 py-2 rounded-md"
          style={{
            backgroundColor: "rgb(242, 245, 241)",
            color: "rgba(0, 0, 0, 0.75)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            borderRadius: "4px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </motion.div>

        <motion.p
          className="font-dm-sans text-[16px] leading-[24px] text-[rgba(0,0,0,0.75)] max-w-3xl mb-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our team consists of experienced education consultants, visa specialists,
          and support staff, all dedicated to providing exceptional service.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Extra Box Card */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-64 md:h-72 bg-[rgb(200,248,169)] text-black flex flex-col justify-center items-center p-6 shadow-lg rounded-lg">
              <p className="font-dm-sans text-[16px] text-center mb-4">
                Why Hire Execor?
              </p>
              <ul className="font-dm-sans text-[16px] text-center mb-4 space-y-1">
                <li>15+ Years of Experience</li>
                <li>Top-Rated Consultancy</li>
                <li>Certified Professionals</li>
              </ul>
              <button className="bg-white text-[rgba(0,0,0,0.75)] px-4 py-2 rounded-md hover:bg-gray-100 transition">
                Free Consultation →
              </button>
            </div>
          </motion.div>

          {/* Team Cards */}
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="w-full h-64 md:h-72 bg-[rgb(200,248,169)] shadow-lg overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="text-left mt-4 w-full">
                <h4 className="font-forum text-[20px] text-black">{member.name}</h4>
                <p className="font-dm-sans text-[16px] text-[rgba(0,0,0,0.75)]">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
