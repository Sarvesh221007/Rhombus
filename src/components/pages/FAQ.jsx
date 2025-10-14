import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import faqImg from "/faq/faq.jpeg";

const FAQ = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
    }
  }, [controls, inView]);

  const sections = [
    {
      title: "General FAQs",
      questions: [
        "What services does Rhombus offer? Rhombus specializes in student visas, work visas, tourist visas, and immigration assistance, helping individuals through each step of their application process.",
        "How do I start my visa application process with Rhombus? Simply contact us through our website, email, or phone, and one of our visa consultants will guide you through the next steps, from gathering documents to submitting your application.",
        "Can Rhombus help me if I’m already in the application process? Yes, we can provide support at any stage of your application, including document verification, interview preparation, and additional guidance.",
        "How long does the visa application process take? The processing time varies depending on the visa type and destination country. Generally, student visas may take 3–6 weeks, while other visas can vary from a few weeks to several months.",
      ],
    },
    {
      title: "Student Visa FAQs",
      questions: [
        "What countries does Rhombus handle for student visas? We focus primarily on the US, Canada, Australia, and the UK — but you can reach out for other destinations too.",
        "Can Rhombus help me choose the right university or course? Absolutely! Our education consultants provide expert guidance for selecting universities, preparing SOPs, and ensuring visa compliance.",
        "Do I need to show proof of funds for a student visa? Yes, most countries require financial proof to ensure you can cover tuition and living costs during your studies.",
      ],
    },
    {
      title: "Work Visa FAQs",
      questions: [
        "Which countries offer the best work visa opportunities? Rhombus assists with work visas for the UK, Canada, Germany, Australia, and more.",
        "Can I convert my student visa to a work visa later? In most cases, yes. We’ll help you transition smoothly by ensuring eligibility and document readiness.",
        "Does Rhombus help with employer sponsorships? Yes, we assist in finding employers willing to sponsor skilled workers under visa programs.",
      ],
    },
    {
      title: "Tourist Visa FAQs",
      questions: [
        "What documents are needed for a tourist visa? Typically, you’ll need a valid passport, travel itinerary, proof of funds, and accommodation details.",
        "Can I extend my tourist visa once I’m abroad? It depends on the country’s immigration laws — our consultants can help with extension processes.",
        "How early should I apply for a tourist visa? Ideally 4–6 weeks before your intended travel date.",
      ],
    },
    {
      title: "Application & Processing FAQs",
      questions: [
        "Do I need to attend an interview for my visa? Some visa types require interviews, while others are paper-based. We provide mock interview preparation.",
        "How will I know if my visa is approved? You’ll be notified by email or portal updates — Rhombus keeps track of every stage for you.",
        "Can Rhombus help if my visa was previously rejected? Yes, our consultants analyze rejections and help strengthen your next application.",
      ],
    },
    {
      title: "Miscellaneous FAQs",
      questions: [
        "Does Rhombus charge consultation fees? We offer both free initial consultations and paid detailed guidance depending on your service package.",
        "Is my personal data safe with Rhombus? Absolutely. We follow strict privacy policies and GDPR-compliant handling of your information.",
        "Can I apply for multiple visas at once? Generally, it’s recommended to focus on one type at a time, but we’ll help you evaluate the best strategy.",
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden pt-10 bg-white">
      {/* ---------- INTRO SECTION ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-blue-50 to-white">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug ">
            <span>
              Find answers to our most frequently asked questions about visa
              services, eligibility, and the application process — all curated by
              Rhombus consultants.
            </span>
          </h2>
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <motion.img
            src={faqImg}
            alt="FAQ"
            className="w-full max-w-[420px] h-[320px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </section>

      {/* ---------- FAQ SECTIONS ---------- */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"
            } transition-all`}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center border-b-4 border-blue-200 inline-block pb-2"
            >
              {section.title}
            </motion.h2>

            <div className="space-y-6 text-left text-gray-700 text-lg md:text-xl leading-relaxed">
              {section.questions.map((q, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="text-balance border-l-4 border-blue-300 pl-4 hover:bg-blue-100/20 rounded-md py-2 transition-all"
                >
                  {q}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FAQ;
