import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import contactImg from "/contact/contact.jpg";

const inputStyle =
  "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all";
const titleStyle = "text-3xl md:text-4xl font-bold text-blue-800 mb-5";

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

const Contact = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true });

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      user_name: form.name,
      user_email: form.email,
      user_phone: form.phone,
      message: form.message,
    };
    console.log("Sending email:", payload);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", payload, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => console.error("Email send failed:", err));
  };

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
  }, [controls, inView]);

  const contactInfo = [
    { icon: <Mail className="text-blue-600 w-6 h-6" />, label: "Email", value: "Info@rhombuseducation.com" },
    { icon: <Phone className="text-blue-600 w-6 h-6" />, label: "Phone", value: "8826841955, 8050796619" },
    { icon: <MapPin className="text-blue-600 w-6 h-6" />, label: "Address", value: "303, Chiranjeev Tower, Nehru Place, New Delhi 110019" },
  ];

  const formFields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "phone", type: "tel", placeholder: "Your Phone" },
  ];

  return (
    <div className="overflow-x-hidden bg-white pt-10">
      {/* -------- Hero Section -------- */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-16 py-16 bg-gradient-to-r from-blue-50 to-white">
        <motion.img
          ref={sectionRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          src={contactImg}
          alt="Contact Us"
          className="w-full max-w-[480px] h-[320px] object-cover rounded-2xl shadow-2xl mb-10 hover:scale-105 transition-transform duration-300"
        />
        <motion.h2 className={titleStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span>Contact Us</span>
        </motion.h2>
        <p className="max-w-2xl mt-5 text-gray-700 text-lg leading-relaxed">
          We’re here to help! Have questions about education or immigration services? Fill out the form below and our team will get back to you promptly. Your journey starts with a simple step—reach out to us today!
        </p>
      </section>

      {/* -------- Contact Section -------- */}
      <section className="flex flex-col md:flex-row justify-between items-start px-6 md:px-16 py-20 gap-12 bg-blue-50">
        {/* Left Info */}
        <MotionDiv className="md:w-1/2 space-y-8">
          <h2 className={titleStyle}>Send us a Message</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Don’t hesitate—your future awaits. Submit the form now and let us help you achieve your dreams!
          </p>
          <div className="space-y-6 mt-8 text-gray-700">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-4">
                {info.icon}
                <div>
                  <p className="font-semibold">{info.label}</p>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Right Form */}
        <MotionDiv
          as="form"
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Get in Touch</h3>
          <div className="space-y-5">
            {formFields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className={inputStyle}
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </div>
        </MotionDiv>
      </section>
    </div>
  );
};

export default Contact;
