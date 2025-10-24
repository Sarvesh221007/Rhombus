import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true });

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    // Add emailjs or API submission here
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls, inView]);

  const contactBoxes = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit us at:",
      text: "Seventh Ave, 20th Floor, New York, NY 10018",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call us at:",
      text: "1-800-356-8933",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email us at:",
      text: "office@execor.com",
    },
  ];

  return (
    <div className="overflow-x-hidden font-dm-sans">
      {/* ---------- First Section ---------- */}
      <section
        className="w-full bg-[rgb(242,245,241)] py-4 flex flex-col px-6 md:px-16"
      >
        <motion.h1
          className="text-5xl mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-lg text-[rgba(0,0,0,0.75)] max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We Look Forward to Connecting With You
        </motion.p>
      </section>

      {/* ---------- Second Section: 3 Boxes ---------- */}
      <section className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4 md:px-16 py-16 md:py-20">
        {contactBoxes.map((box, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between bg-[rgb(242,245,241)] p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-1/3 cursor-pointer hover:bg-[rgb(200,248,169)] transition-colors"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-blue-800">{box.icon}</div>
              <div>
                <p className="font-semibold text-sm sm:text-base">{box.title}</p>
                <p className="text-sm sm:text-base">{box.text}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.div>
        ))}
      </section>


      {/* ---------- Third Section: Contact Info + Form ---------- */}
      <section className="flex flex-col md:flex-row gap-12 md:gap-16 px-6 md:px-16 py-20">
        {/* Left: Send Us a Message + Info Box */}
        <div className="md:w-1/2 space-y-12">
          <section className="space-y-6">
            <motion.h2
              className="text-3xl md:text-4xl mb-4 text-black"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "400" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              Send us a message
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base leading-7 text-[rgba(0,0,0,0.75)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              We’re here to help! Have questions about education or immigration services? Fill out the form with your details and queries, and our team will get back to you promptly. Simply enter your name, email, and message, then hit "Submit." Whether you’re seeking guidance on study programs, visa applications, or anything else, Rhombus Education and Immigration Services is ready to assist. Your journey starts with a simple step—reach out to us today!
            </motion.p>
          </section>

          {/* Info Box */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-6 flex flex-col border border-gray-200 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <p>Info@rhombuseducation.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>8826841955, 8050796619</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  303, Chiranjeev Tower<br />
                  Nehru Place, New Delhi 110019
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          className="md:w-1/2 p-6 bg-white border border-gray-300 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 font-dm-sans">
            {/* Contact Form Heading with sent arrow */}
            <h3 className="text-2xl font-bold bg-[#0E3530] text-white px-4 py-2 rounded-md w-full flex justify-between items-center">
              Contact Form <Send className="w-5 h-5 text-white" />
            </h3>

            {/* First + Last Name Box */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[rgb(200,248,169)] text-black font-semibold py-3 rounded-md flex items-center justify-between px-4 transition-colors duration-300 hover:bg-[#0E3530] hover:text-white hover:text-[#0E3530]"
            >
              Submit <ArrowRight className="w-5 h-5" />
            </button>

            {/* Middle Line */}
            <div className="relative flex items-center justify-center my-4">
              <span className="absolute w-2/3 border-t border-gray-300"></span>
            </div>

            {/* Paragraph */}
            <p className="text-sm text-gray-500 text-center">
              By submitting this form you agree to our Privacy Policy. Optimum may contact you via email or phone for scheduling or marketing purposes.
            </p>
          </form>
        </motion.div>

      </section>

    </div>
  );
};

export default Contact;
