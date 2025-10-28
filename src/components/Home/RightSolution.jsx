// src/components/Home/RightSolution.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const tabData = [
    {
        title: "Revenue Has Stalled or Dropped",
        description:
            "Quickly identify and resolve revenue blockers with a comprehensive business audit. We uncover hidden challenges and provide strategic solutions to restore growth.",
        cards: [
            {
                heading: "Revenue Optimization Strategies",
                text: "Quickly identify and resolve revenue blockers with a comprehensive business audit.",
            },
            {
                heading: "Pricing & Profitability Analysis",
                text: "Uncover pricing inefficiencies and maximize profitability with data-backed insights.",
            },
            {
                heading: "Market Expansion Frameworks",
                text: "Discover new growth channels and scale sustainably through proven frameworks.",
            },
        ],
        bgImage:
            "https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2148548744.jpg",
        buttonText: "Book A Free Strategy Call",
        buttonLink: "https://execor.vamtam.com/free-consultation/",
        icon: "vamtamtheme- vamtam-theme-logo-sign",
    },
    {
        title: "Scaling My Business",
        description:
            "Unlock new growth opportunities with expert scalability strategies. We help you optimize operations, expand efficiently, and maximize long-term success.",
        cards: [
            {
                heading: "Customer Retention Strategy",
                text: "Uncover churn risks and improve lifetime value with a data-driven retention audit.",
            },
            {
                heading: "Operational Efficiency Review",
                text: "Streamline workflows and eliminate inefficiencies to boost performance across departments.",
            },
            {
                heading: "Go-to-Market Strategy Support",
                text: "Launch with confidence using proven frameworks tailored to your product and goals.",
            },
        ],
        bgImage:
            "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-pavel-danilyuk-5520284-.jpg",
        buttonText: "Explore Growth Opportunities",
        buttonLink: "https://execor.vamtam.com/growth/",
        icon: "vamtamtheme- vamtam-theme-logo-sign",
    },
    {
        title: "Understanding My Competitors",
        description:
            "Gain a competitive edge with in-depth market intelligence. We analyze your competitors’ strengths and weaknesses to position your business for sustainable advantage.",
        cards: [
            {
                heading: "Competitive Landscape Analysis",
                text: "Gain a clear view of your market position with insights into competitor strategies.",
            },
            {
                heading: "Competitor Marketing Breakdown",
                text: "Understand where your competitors are winning online—and where you can outperform them.",
            },
            {
                heading: "Competitor Intelligence Reports",
                text: "Access actionable intelligence to inform smarter, faster business decisions.",
            },
        ],
        bgImage:
            "https://execor.vamtam.com/wp-content/uploads/2025/04/pexels-tima-miroshnichenko-6694474.jpg",
        buttonText: "Get Competitor Insights",
        buttonLink: "https://execor.vamtam.com/insights/",
        icon: "vamtamtheme- vamtam-theme-logo-sign",
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
                    className="relative flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                    style={{
                        backgroundColor: "rgb(15, 61, 58)",
                        backgroundImage:
                            "url('https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-2162471545.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        paddingTop: "110px",
                        paddingBottom: "110px",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl px-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-dmsans mb-4">
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
