// src/components/Home/RightSolution.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const tabData = [
  {
    title: "Student Visa Assistance",
    description:
      "Expert guidance to help students successfully apply for visas to study abroad. Our consultants provide complete end-to-end support — from document preparation to interview readiness — ensuring a smooth, stress-free experience.",
    cards: [
      {
        heading: "Visa Consultation & Guidance",
        text: "Get personalized advice for Australia, UK, Canada, USA, and other destinations.",
      },
      {
        heading: "Document Preparation & Review",
        text: "Ensure all your academic and financial documents meet embassy standards.",
      },
      {
        heading: "Application & Interview Support",
        text: "We help you complete visa forms and prepare for embassy interviews with confidence.",
      },
    ],
    bgImage:
      "https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-75546129.jpg",
    buttonText: "Get Free Visa Consultation",
    buttonLink: "#contact",
    icon: "vamtamtheme-vamtam-theme-logo-sign",
  },
  {
    title: "University Placement Support",
    description:
      "Choosing the right university is a life-changing decision. Our experts guide you through selecting top institutions that match your goals, academic profile, and career aspirations — ensuring a perfect academic fit.",
    cards: [
      {
        heading: "University & Course Selection",
        text: "We help you choose the best-fit institutions based on your academic goals and budget.",
      },
      {
        heading: "Application Submission Support",
        text: "From filling out forms to managing deadlines, we handle the entire admission process.",
      },
      {
        heading: "Offer Letter & Admission Assistance",
        text: "Get guidance in receiving and confirming university offers from reputed institutions.",
      },
    ],
    bgImage:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-pavel-danilyuk-5520284-.jpg",
    buttonText: "Explore University Options",
    buttonLink: "#services",
    icon: "vamtamtheme-vamtam-theme-logo-sign",
  },
  {
    title: "Application & Document Review",
    description:
      "Accurate and complete documentation is key to your study success. Our team reviews every document carefully — academic records, financial proofs, and application materials — to avoid rejections and delays.",
    cards: [
      {
        heading: "Comprehensive Document Checklist",
        text: "We ensure all required documents are included for both admission and visa applications.",
      },
      {
        heading: "Document Verification",
        text: "Our experts review transcripts, SOPs, and financial proofs to ensure accuracy and compliance.",
      },
      {
        heading: "Professional Editing Support",
        text: "Enhance your application presentation with clear, well-structured, and compliant documentation.",
      },
    ],
    bgImage:
      "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-tima-miroshnichenko-6694474.jpg",
    buttonText: "Review My Documents",
    buttonLink: "#contact",
    icon: "vamtamtheme-vamtam-theme-logo-sign",
  },
  {
    title: "Consultancy for Education Agents",
    description:
      "We collaborate with education agents worldwide, providing them with resources, training, and direct support to manage their students’ visa and admission processes efficiently and professionally.",
    cards: [
      {
        heading: "Agent Partnership Programs",
        text: "Join our network to access global universities and student management tools.",
      },
      {
        heading: "Application Management Support",
        text: "We help agents streamline their client processes with verified documentation and timely submissions.",
      },
      {
        heading: "Visa & Compliance Guidance",
        text: "Provide your clients with the best visa advice using our expertise and up-to-date immigration insights.",
      },
    ],
    bgImage:
      "https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2148548744.jpg",
    buttonText: "Partner With Rhombus",
    buttonLink: "#contact",
    icon: "vamtamtheme-vamtam-theme-logo-sign",
  },
];


const RightSolution = () => {
    const [activeTab, setActiveTab] = useState(0);
    const active = tabData[activeTab];

    return (
        <section
            id="find-solution"
            className="relative pb-6 flex flex-col font-dmsans text-[15px] leading-[22.5px] text-[rgba(0,0,0,0.75)] px-5 md:px-8 w-full rounded-b-sm"
        >
            <div className="max-w-8xl mx-auto w-full box-border overflow-hidden rounded-md">
                {/* Section Heading */}
                <div
                    className="relative flex flex-col items-center justify-center text-center text-white bg-cover bg-center brightness-160"
                    style={{
                        backgroundColor: "rgb(15, 61, 58)",
                        backgroundImage:
                            "url('https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2162471545.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        paddingTop: "75px",
                        paddingBottom: "75px",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-4xl px-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-normal font-['forum'] mb-4">
                            Find the Right Solution
                        </h2>
                    </motion.div>
                </div>
                {/* Tabs */}
                <div className="w-full bg-[#f2f5f1] lg:px-20 md:px-10 sm:px-4 px-4 pt-10 rounded-b-md">
                    <div className="flex flex-row overflow-x-auto scrollbar-hide w-full h-[84px] text-[14px] leading-[16.8px] text-black font-dmsans">
                        {tabData.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center justify-center flex-shrink-0 flex-grow cursor-pointer select-none transition-all duration-300 ease-in-out border-t-0 border-x-0 border-b-[1.2px] px-[30px] py-[33px] text-center whitespace-nowrap ${activeTab === index
                                    ? "bg-[#f2f5f1] border-b-[#0f3d3a] text-black font-medium shadow-[inset_0_-1px_0_0_#0f3d3a]"
                                    : "bg-[#f2f5f1] border-b-transparent text-black hover:text-[#0f3d3a]"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="animate-fadeIn px-4 md:px-0 mt-18 flex flex-col md:flex-row pb-12 md:pb-20 justify-between items-center md:items-start">
                        {/* Left Text & Cards */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-6 md:w-[47%]" // ← slightly wider (was 2/5)
                        >
                            <p className="text-[18px] leading-relaxed font-normal text-black">
                                {active.description}
                            </p>

                            <div
                                className="hidden md:block w-full h-[80px] relative box-border
  "
                                style={{
                                    color: "rgba(0, 0, 0, 0.75)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    lineHeight: "22.5px",
                                }}
                            >
                                <div className="w-full h-full" />
                            </div>


                            {active.cards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.50, delay: 0.1 * (i + 1) }}
                                    className="relative flex flex-col bg-[#f2f5f2] p-4 transition duration-200 before:content-[''] before:absolute before:left-0 before:top-1/6 before:h-1/3 before:w-[1px] before:bg-[#0f3d3a]"
                                >
                                    <div className="w-full md:w-3/4 gap-2">
                                        <h3
                                            className="text-lg font-normal text-black mb-2"
                                            style={{ fontFamily: "'Forum', sans-serif" }}
                                        >
                                            {card.heading}
                                        </h3>
                                        <span className="text-[rgba(0,0,0,0.75)] text-base">
                                            {card.text}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Image & CTA */}
                        <motion.div
                            key={active.bgImage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative flex flex-col justify-end bg-cover bg-center bg-no-repeat rounded-lg text-white font-dmsans w-full md:w-[40%] min-h-[570px] overflow-hidden" // ← height increased from 480px → 540px
                            style={{
                                backgroundImage: `url("${active.bgImage}")`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                            {/* Button (Bottom Left) */}
                            <div className="relative z-10 flex justify-start p-8 md:p-10">
                                <a
                                    href={active.buttonLink}
                                    className="inline-flex items-center px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 
            bg-[rgb(200,248,169)] text-black hover:bg-[#0f3d3a] hover:text-white"
                                >
                                    <span>{active.buttonText}</span>
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RightSolution;
