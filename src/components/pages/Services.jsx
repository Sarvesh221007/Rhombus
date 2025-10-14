import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import serviceImg from "/services/service.jpg";
import eduImg from "/services/edu.jpeg";
import visaImg from "/services/visa.jpg";
import docuImg from "/services/docu.jpeg";

const imgStyle =
  "w-full max-w-[420px] h-[320px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300";
const titleStyle = "text-3xl font-bold text-blue-800 mb-4";
const listStyle = "list-disc pl-5 space-y-2";
const textColor = "text-gray-700";

const MotionDiv = ({ children, ...props }) => (
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

const Services = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
  }, [controls, inView]);

  const sectionsWithImages = [
    {
      title: "Our Services",
      text: "At Rhombus Education and Immigration Services, we offer a comprehensive range of services designed to help students navigate the complexities of studying abroad. Whether you are just starting your journey or need assistance with the final steps, we are here to provide expert guidance every step of the way.",
      points: [
        { h: "Student Visa Assistance:", p: "Expert guidance on visa applications for studying in Australia, UK, Canada, and many other countries." },
        { h: "University Placement:", p: "Helping students choose the right institution based on their goals and academic profile." },
        { h: "Application & Document Review:", p: "Ensuring your application is complete and aligned with university requirements." },
        { h: "Consultancy for Education Agents:", p: "Partnering with agents to provide end-to-end services for their student clients." },
      ],
      img: serviceImg,
      reverse: false,
    },
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
      points: [
        { h: "Career Path Guidance:", p: "Identify career options aligned with your studies." },
        { h: "Post-Graduation Advice:", p: "Guidance on job markets and work visa pathways abroad." },
      ],
    },
    {
      title: "Consultancy for Education Agents",
      points: [
        { h: "Agent Training & Support:", p: "Latest education & immigration updates." },
        { h: "Application Management:", p: "Handling student applications efficiently." },
        { h: "Visa & Documentation Assistance:", p: "Expert help for agents in managing applications." },
      ],
    },
    {
      title: "Post-Arrival Support",
      points: [
        { h: "Arrival Assistance:", p: "Help with airport pickup and settling in." },
        { h: "Orientation Services:", p: "Guidance through your first few weeks abroad." },
        { h: "Ongoing Support:", p: "Assistance for academic and visa-related challenges." },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white mt-5">
      {/* Sections with Images */}
      {sectionsWithImages.map((section, i) => (
        <section
          key={i}
          className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""} items-center justify-between px-6 md:px-16 py-16 ${i % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
        >
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`md:w-1/2 space-y-5 ${textColor}`}
          >
            <h2 className={titleStyle}>{section.title}</h2>
            <p>{section.text}</p>
            <ul className={listStyle}>
              {section.points.map((point, j) => (
                <li key={j}>
                  <span className="font-semibold">{point.h}</span> {point.p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            ref={i === 0 ? sectionRef : null}
            initial={{ opacity: 0, y: 50 }}
            animate={i === 0 ? controls : undefined}
            whileInView={i !== 0 ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          >
            <motion.img src={section.img} alt={section.title} className={imgStyle} />
          </motion.div>
        </section>
      ))}

      {/* Text Only Sections */}
      <section className="px-6 md:px-16 py-20 bg-white text-gray-700 space-y-16">
        {textOnlySections.map((section, i) => (
          <MotionDiv key={i}>
            <h2 className={titleStyle}>{section.title}</h2>
            <ul className={listStyle}>
              {section.points.map((point, j) => (
                <li key={j}>
                  <span className="font-semibold">{point.h}</span> {point.p}
                </li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </section>
    </div>
  );
};

export default Services;
