import React from "react";
import { motion } from "framer-motion";
import faqImg from "/faq/faq.jpeg";
import Breadcrumb from "../layout/Breadcrumb";


const faqSections = [
  {
    title: "General FAQs",
    description:
      "Rhombus specializes in student, work, and tourist visas. We guide you step by step through the application process.",
    faqs: [
      "What services does Rhombus offer? Rhombus specializes in student visas, work visas, tourist visas, and immigration assistance, helping individuals through each step of their application process.",
      "How do I start my visa application process with Rhombus? Simply contact us through our website, email, or phone, and one of our visa consultants will guide you through the next steps, from gathering documents to submitting your application.",
      "Can Rhombus help me if I’m already in the application process? Yes, we can provide support at any stage of your application, including document verification, interview preparation, and additional guidance.",
      "What countries does Rhombus handle for student visas? We primarily focus on student visas for the US, Canada, Australia, and the UK, but feel free to ask if you have a different destination in mind.",
      "How long does the visa application process take? The processing time varies depending on the visa type and destination country. Generally, student visas may take 3–6 weeks, while other visas can vary from a few weeks to several months.",
    ],
  },
  {
    title: "Student Visa FAQs",
    description:
      "We guide students through visa documentation, English tests, interviews, and work options while studying abroad.",
    faqs: [
      "What documents are needed for a student visa? Commonly required documents include a passport, acceptance letter from the educational institution, proof of funds, and academic transcripts. We’ll provide you with a detailed list based on your country of study.",
      "Do I need to pass an English language test for a student visa? Most countries require English proficiency tests like IELTS, PTE or TOEFL. We can help you understand the specific requirements of each country.",
      "Does Rhombus assist with visa interviews? Yes, we offer interview preparation services, helping you understand what to expect and practicing questions that may be asked by visa officers.",
      "Can I work while studying on a student visa? Many countries allow part-time work for students. We can provide information on the work policies for your destination country.",
      "What if my student visa application is denied? We can help you understand the reasons for denial, explore options for reapplication, and provide support in strengthening your application.",
    ],
  },
  {
    title: "Work Visa FAQs",
    description:
      "We assist professionals in understanding work visa requirements, stay duration, and pathways to permanent residency.",
    faqs: [
      "What are the requirements for a work visa? Generally, a work visa requires an employment offer from a company in the destination country, along with necessary qualifications and experience. Requirements may vary by country.",
      "How long can I stay on a work visa? The duration depends on the country and specific visa type. Some work visas are renewable, while others have fixed terms.",
      "Can Rhombus help with permanent residency applications? Yes, we offer guidance for those looking to transition from a work visa to permanent residency, including assistance with eligibility and document requirements.",
      "What should I do if my work visa is about to expire? We recommend contacting us at least three months before your visa expires so we can help with the renewal or extension process.",
    ],
  },
  {
    title: "Tourist Visa FAQs",
    description:
      "We guide travelers through tourist visa requirements, duration, extensions, and application support.",
    faqs: [
      "What are the basic requirements for a tourist visa? Requirements typically include a passport, proof of funds, travel itinerary, and sometimes a letter of invitation. We can provide a checklist based on the destination.",
      "How long can I stay on a tourist visa? This depends on the destination country, with most tourist visas allowing stays of 30 to 90 days. We can confirm the duration based on your travel plans.",
      "Can I extend my tourist visa while abroad? In some countries, tourist visas can be extended. We can advise on the extension policies and processes for your destination.",
      "What happens if my tourist visa application is denied? We can help review the reasons for denial, suggest any additional documentation needed, and advise on reapplication options.",
    ],
  },
  {
    title: "Application & Processing FAQs",
    description:
      "We explain fees, international support, tracking, and payment methods for visa applications.",
    faqs: [
      "How much does Rhombus charge for visa assistance? Fees vary based on the type of visa and service package you choose. We’ll provide a detailed breakdown during your initial consultation.",
      "Does Rhombus offer support for visa applications outside my home country? Yes, we assist with visa applications regardless of your current location. Contact us to learn more.",
      "Can I track the progress of my visa application? Most consulates and embassies provide tracking options. We’ll keep you informed of any updates we receive on your behalf.",
      "What payment methods does Rhombus accept? We accept bank transfers, credit/debit cards, and online payment options. Please contact us for specific details.",
    ],
  },
  {
    title: "Miscellaneous FAQs",
    description:
      "Other important FAQs including family visas and initial consultations for unsure clients.",
    faqs: [
      "Can Rhombus assist with visas for family members? Yes, we offer support for family visas, including spouse, dependent, and parent visas, based on the destination country’s regulations.",
      "Does Rhombus offer consultations for individuals not yet sure about visa applications? Absolutely! Our initial consultation is designed to help you understand your options and make informed decisions.",
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="font-sans overflow-x-hidden bg-white">
      {/* <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[rgb(242,245,241)]  md:pt-40">
        <Breadcrumb />
      </section> */}
      {/* ---------- Intro Section ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 md:pt-32 pb-16 bg-gradient-to-r from-blue-50 to-white">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-5 font-poppins"
        >
          <h2 className="text-2xl md:text-3xl leading-snug text-black font-normal">
            Find answers to our most frequently asked questions about visa
            services, eligibility, and the application process — curated by
            Rhombus consultants.
          </h2>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <img
            src={faqImg}
            alt="FAQ"
            className="w-full max-w-[420px] h-[320px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </section>

      {/* ---------- FAQ Sections ---------- */}
      <section className="px-6 md:px-16 py-16 space-y-12">
        {faqSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6 font-poppins"
          >
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl text-black font-normal pb-2">
              {section.title}
            </h2>

            {/* Section Description */}
            {section.description && (
              <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
                {section.description}
              </p>
            )}

            {/* FAQs Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50"
                >
                  <p className="text-black text-base md:text-lg font-normal">
                    {faq}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default FAQPage;
