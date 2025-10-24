import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react"; // we'll change color to black

import eduImg from "/services/edu.jpeg";
import visaImg from "/services/visa.jpg";
import docuImg from "/services/docu.jpeg";

const imgStyle =
  "w-full max-w-[420px] h-[320px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300";

const Services = () => {
  const firstSectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(firstSectionRef, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
    }
  }, [controls, inView]);

  const firstSectionPoints = [
    "Student Visa Assistance: Expert guidance on visa applications for studying in Australia, UK, Canada, and many other countries.",
    "University Placement: Helping students choose the right institution based on their goals and academic profile.",
    "Application & Document Review: Ensuring your application is complete, accurate, and aligned with university requirements.",
    "Consultancy for Education Agents: Partnering with education agents to provide end-to-end services for their student clients.",
  ];

  const sectionsWithImages = [
    {
      title: "Education Consulting",
      text: "Choosing the right university and course is one of the most important decisions you'll make in your academic journey. Our experienced consultants work closely with you to understand your academic goals and preferences, helping you select the best institution for your needs.",
      points: [
        { h: "University Selection:", p: "Choose the right university based on interests, budget, and goals." },
        { h: "Program Matching:", p: "Find the most suitable courses matching your qualifications and aspirations." },
        { h: "Application Guidance:", p: "Step-by-step help with documentation and deadlines." },
      ],
      img: eduImg,
      reverse: true,
    },
    {
      title: "Visa Assistance",
      text: "Securing a student visa is a crucial part of studying abroad, and we offer expert consultancy to ensure your application is successful. Our team stays updated with the latest immigration rules and helps you through every step.",
      points: [
        { h: "Student Visa Consultation:", p: "Guidance on visa requirements for Australia, UK, Canada, and more." },
        { h: "Visa Application Support:", p: "Assistance with documentation and interview preparation." },
        { h: "Visa Approval Follow-up:", p: "Ongoing support to track and resolve visa-related issues." },
      ],
      img: visaImg,
      reverse: false,
    },
    {
      title: "Document Review & Application Support",
      text: "Submitting accurate documents is essential for success. We provide detailed checklists, review all required paperwork, and ensure submissions are complete and compliant with institutional requirements.",
      points: [
        { h: "Document Checklist:", p: "Detailed checklist for all required paperwork." },
        { h: "Document Review:", p: "Thorough verification of transcripts, letters, and personal statements." },
        { h: "Application Submission:", p: "Timely submission to the correct universities or authorities." },
      ],
      img: docuImg,
      reverse: true,
    },
  ];

  const textOnlySections = [
    {
      title: "Career Counseling",
      paragraph:
        "Studying abroad is not just about academics—it's also about building your future career. Our career counseling services are designed to help you plan your academic journey with a clear focus on your career goals.",
      points: [
        {
          number: "01",
          heading: "Career Path Guidance",
          text: "We help you identify career options and offer advice on how to align your studies with your professional aspirations.",
        },
        {
          number: "02",
          heading: "Post-Graduation Advice",
          text: "Our team offers insights into post-graduation work options, including visa pathways and job markets in different countries.",
        },
      ],
    },
    {
      title: "Consultancy for Education Agents",
      paragraph:
        "We also offer dedicated support for education agents who assist students in applying to universities abroad. Our expert team provides end-to-end solutions for agents, ensuring a smooth experience for both agents and their clients.",
      points: [
        {
          number: "01",
          heading: "Agent Training & Support",
          text: "We offer training and resources to education agents to help them stay updated on the latest trends in the education and immigration sectors.",
        },
        {
          number: "02",
          heading: "Application Management",
          text: "Our team can handle the entire application process on behalf of agents, ensuring that their clients' applications are managed efficiently.",
        },
        {
          number: "03",
          heading: "Visa & Documentation Assistance",
          text: "We assist education agents in managing student visa applications, providing them with the expertise and resources to ensure the best possible outcome.",
        },
      ],
    },
    {
      title: "Pre-Departure Briefing",
      paragraph:
        "Preparing for life abroad involves more than just academics and visas—it’s also about adjusting to a new culture and environment. Our pre-departure briefing ensures you are fully prepared for your experience abroad.",
      points: [
        {
          number: "01",
          heading: "Cultural Orientation",
          text: "We provide essential information about life in your host country, including culture, lifestyle, and practical tips for adjusting to life as an international student.",
        },
        {
          number: "02",
          heading: "Accommodation Assistance",
          text: "We help you find suitable accommodation options, whether on-campus or private, ensuring a comfortable living arrangement during your studies.",
        },
        {
          number: "03",
          heading: "Travel and Insurance Guidance",
          text: "Our team provides advice on travel arrangements, medical insurance, and any other pre-departure necessities.",
        },
      ],
    },
    {
      title: "Post-Arrival Support",
      paragraph:
        "Our relationship with you doesn’t end once you arrive in your destination country. We offer ongoing support to ensure your transition is as smooth as possible.",
      points: [
        {
          number: "01",
          heading: "Arrival Assistance",
          text: "We offer assistance with airport pickup, settling in, and other immediate needs upon arrival.",
        },
        {
          number: "02",
          heading: "Orientation Services",
          text: "Our team helps you navigate the first few weeks abroad, ensuring you are familiar with local services, transportation, and academic expectations.",
        },
        {
          number: "03",
          heading: "Ongoing Support",
          text: "We are always available to assist with any issues you might face during your stay, from academic challenges to visa extensions and more.",
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden font-dm-sans">

      {/* ---------------- FIRST HERO SECTION ---------------- */}
      <section
        ref={firstSectionRef}
        className="relative w-full flex flex-col items-start justify-center px-6 md:px-16 py-20 bg-[rgb(242,245,241)]"
        style={{ minHeight: "211px" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl mb-6 text-black"
          style={{ fontFamily: "'Forum', sans-serif", fontWeight: "400" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR SERVICES
        </motion.h2>
        <motion.p
          className="text-[16px] sm:text-base leading-7 text-[rgba(0,0,0,0.65)] max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Rhombus Education and Immigration Services, we offer a comprehensive range of services designed to help students navigate the complexities of studying abroad. Whether you are just starting your journey or need assistance with the final steps, we are here to provide expert guidance every step of the way.
        </motion.p>
        <ul className="mt-6 space-y-3">
          {firstSectionPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[rgba(0,0,0,0.65)] text-sm sm:text-base leading-7">
              <CheckCircle className="text-black w-5 h-5 mt-1 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- IMAGE + DETAILS SECTIONS ---------------- */}
      {sectionsWithImages.map((section, i) => (
        <section
          key={i}
          className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""} items-center justify-between px-6 md:px-16 py-16 gap-20 md:gap-40`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-7/12 space-y-5 text-[rgba(0,0,0,0.75)]"
          >
            <h2
              className="text-3xl md:text-4xl mb-4 text-black"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "400" }}
            >
              {section.title}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-[rgba(0,0,0,0.65)] max-w-prose">
              {section.text}
            </p>

            <ul className="mt-4 space-y-2">
              {section.points.map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm sm:text-base leading-7 text-[rgba(0,0,0,0.65)]"
                >
                  <CheckCircle className="text-black w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-normal">{p.h}</span> {p.p}
                  </span>
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <div className="mt-6">
              <button className="bg-[rgb(200,248,169)] text-black px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300">
                Learn More <span className="text-lg">&rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-5/12 mt-10 md:mt-0 flex justify-center"
          >
            <motion.img
              src={section.img}
              alt={section.title}
              className={`${imgStyle} w-full max-w-[600px] h-auto md:h-[500px] object-contain`}
            />
          </motion.div>
        </section>
      ))}



      {/* ---------------- TEXT ONLY SECTIONS ---------------- */}
      <section className="py-28 bg-gray-50 px-6 md:px-16 space-y-28">
        {textOnlySections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
          >
            {/* Left: Heading, Paragraph, Button */}
            <div className="md:w-1/2 space-y-6">
              <motion.h2
                className="text-3xl md:text-4xl mb-4 text-black text-left"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: "400",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base leading-7 text-[rgba(0,0,0,0.75)] text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                {section.paragraph}
              </motion.p>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.2 }}
              >
                <button className="bg-[rgb(200,248,169)] text-black px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300">
                  Learn More <span className="text-lg">&rarr;</span>
                </button>
              </motion.div>
            </div>

            {/* Right: Single Points Box */}
            <div className="md:w-1/2">
              <motion.div
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                {section.points.map((point, i) => {
                  const isOdd = i % 2 === 0; // odd points have colored background
                  return (
                    <div
                      key={i}
                      className={`flex gap-6 items-start p-4 rounded-2xl ${isOdd ? "bg-[rgb(242,245,241)]" : "bg-white"
                        }`}
                    >
                      <CheckCircle className="text-black w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl text-black font-normal">{point.heading}</h3>
                        <p className="text-sm sm:text-base leading-7 text-[rgba(0,0,0,0.75)]">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default Services;
