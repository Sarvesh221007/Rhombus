// src/components/Home/AboutSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const tickItems = [
  "15+ years of experience in education and immigration",
  "Certified by British Council and ICEF",
  "Trusted by students and education agents worldwide",
];


const accordionData = [
  {
    title: "How does Rhombus help me choose the right university?",
    content: [
      "We start by understanding your academic background, interests, and career goals to recommend the best-fit universities and programs.",
      "Our experienced counselors ensure that your choices align with your long-term aspirations and eligibility criteria.",
    ],
    items: [
      "Personalized university & course matching",
      "Guidance based on goals & qualifications",
      "Support for top global institutions",
    ],
  },
  {
    title: "What support does Rhombus provide during the visa process?",
    content: [
      "Our visa experts provide end-to-end guidance for applications to countries like Australia, UK, Canada, USA, Germany, and New Zealand.",
      "From document preparation to interview practice, we make sure your visa process is smooth and stress-free.",
    ],
    items: [
      "Step-by-step visa assistance",
      "Document preparation & compliance",
      "Interview guidance & follow-up support",
    ],
  },
  {
    title: "Why should I trust Rhombus with my study abroad journey?",
    content: [
      "Founded by Heena Gupta and Debraj Banerjee, Rhombus brings over 15 years of proven experience in global education and visa consultancy.",
      "We are certified by the British Council and ICEF, ensuring transparency, professionalism, and success for every student.",
    ],
    items: [
      "15+ years of experience & trust",
      "Certified by British Council & ICEF",
      "Thousands of successful visa approvals",
    ],
  },
  {
    title: "Which countries can I apply to study in with Rhombus?",
    content: [
      "We offer expert guidance for top destinations including Australia, Canada, UK, USA, Germany, and New Zealand.",
      "Our consultants help you understand each country’s admission process, visa requirements, and post-study opportunities.",
    ],
    items: [
      "Study in 6+ major global destinations",
      "Updated visa & admission guidance",
      "Tailored advice for your target country",
    ],
  },
  {
    title: "What happens after I receive my university offer?",
    content: [
      "Once your offer is confirmed, our team assists with admission acceptance, fee payment, and student visa filing.",
      "We also offer pre-departure sessions and post-arrival assistance to help you settle smoothly abroad.",
    ],
    items: [
      "Admission confirmation & fee guidance",
      "Visa filing & documentation support",
      "Pre-departure & post-arrival assistance",
    ],
  },
];




const AboutSection = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };


  const onClick = (e) => {
    e.preventDefault();
    setActiveIndex(activeIndex === idx ? null : idx);
  };


  return (
    <section className="w-full bg-white py-15 px-6 md:px-10">
      {/* ✅ Max-width Container */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-4 font-dm-sans">
        {/* ✅ Section Tag */}
        <motion.div
          className="inline-block px-3 py-1 self-start"
          style={{
            backgroundColor: "rgb(242,245,241)",
            color: "rgba(0,0,0,0.75)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            borderRadius: "4px",
          }}
        >
          About Rhombus
        </motion.div>

        {/* ✅ First Row: Heading + Paragraph */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-[20%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-[55%] w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#0E3530] text-4xl sm:text-5xl leading-snug font-['Forum'] mb-10"
            >
              Guiding Students Toward Global Success
            </motion.h2>
          </div>

          <div className="md:w-[45%] w-full">
            <p className="text-[16px] leading-[26px] text-[rgba(0,0,0,0.75)] pt-4">
              At Rhombus Education and Immigration Services, we empower students to achieve their academic dreams abroad through transparent, personalized, and expert guidance. With certifications from the British Council and ICEF,
              our trusted team ensures every step — from course selection to visa approval — is seamless and successful.
            </p>
          </div>
        </motion.div>

        {/* ✅ Second Row: Image + Info Box + Right Text */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Image + Info Box */}
          <motion.div
            className="relative md:w-[55%] w-full flex justify-left"
            style={{ minHeight: "38rem" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-1393636098.jpg"
              alt="Founder"
              className="w-full max-w-[30rem] h-[38rem] object-cover rounded-lg shadow-xl"
            />

            {/* Upgraded Info Box Overlapping Image */}
            <div
              className="absolute"
              style={{
                bottom: "-10%",
                right: "-2%",
                width: "40%",
                height: "60%",
                backgroundColor: "#c8f8a9",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "0.75rem",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
            >

              {/* <div
                style={{
                  width: "100%",
                  height: "48vh",
                  backgroundImage:
                    "url('https://execor.vamtam.com/wp-content/themes/execor/vamtam/assets/images/loader-ring.gif')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#000",
                }}
              ></div> */}

              {/* Section 1 - Heading */}
              <div className="text-center mb-2">
                <p className="font-['forum'] text-[20px] text-black font-normal tracking-wide">
                  Student-Centered Guidance
                </p>
              </div>

              {/* Section 2 - Highlights */}
              <div className="space-y-2 flex flex-col">
                {tickItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-black/90 text-[12px] leading-snug"
                  >
                    <span className="text-[#0F3D3A] text-lg">✔</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {/* Section 4 - Call-to-Action */}
              <div className="flex justify-center">
                <button
                  className="bg-[#0F3D3A] text-white font-medium text-[16px] px-5 py-3 rounded-md shadow-sm hover:bg-[#00000099] hover:text-white transition-all duration-300 ease-in-out w-full"
                >
                  Get Free Counselling →
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Text Content */}
          <motion.div
            className="md:w-[36%] w-full text-left text-[20px] leading-[24px] text-[rgba(0,0,0,0.90)]"
            style={{ minHeight: "38rem" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Accordion Section */}
            <div className="mt-8 border border-black/10 rounded-lg">
              {accordionData.map((item, idx) => (
                <React.Fragment key={idx}>
                  {/* 🔹 Add divider before each accordion except the first one */}
                  {idx !== 0 && (
                    <div className="w-[95%] mx-auto my-4 border-t border-black/20"></div>
                  )}

                  <details
                    open={activeIndex === idx}
                    className="overflow-hidden mb-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(activeIndex === idx ? null : idx); // only one open at a time
                    }}
                  >
                    {/* Heading */}
                    <summary className="cursor-pointer flex justify-between items-center px-4 py-4 text-black font-normal text-[22px] select-none opacity-70">
                      <span>{item.title}</span>
                      {/* Larger + / – icon */}
                      <span
                        className="text-3xl leading-none font-normal select-none"
                        style={{ fontFamily: `"DM Sans", sans-serif` }}
                      >
                        {activeIndex === idx ? "−" : "+"}
                      </span>
                    </summary>

                    {/* Separator line below heading */}
                    <div className="w-[92%] mx-auto border-t border-black/20"></div>

                    {/* Accordion Content */}
                    <div className="px-5 py-4 space-y-3 text-[15px] leading-[25px] text-[rgba(0,0,0,0.75)]">
                      {/* Paragraphs */}
                      {item.content.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}

                      {/* Tick list */}
                      <ul className="space-y-3 mt-3">
                        {item.items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-6 h-6 mt-1"
                              style={{ color: "rgb(15, 61, 58, 0.60)" }}
                            />
                            <span className="text-[14.5px] leading-[22px] text-[rgba(0,0,0,0.75)]">
                              {it}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </React.Fragment>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
