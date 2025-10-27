// src/components/layout/Footer.jsx
import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from "lucide-react";
import logo from "/logo.svg";

const Footer = () => {
  const companyLinks = [
    { name: "Services", link: "/services" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const aboutLinks = [
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Careers", link: "/careers" },
    { name: "Press Release", link: "/press" },
  ];

  const socialIcons = [
    { icon: <Linkedin size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Youtube size={18} />, link: "#" },
    { icon: <Facebook size={18} />, link: "#" },
  ];

  return (
    <footer className="w-full bg-[#0E3530] text-white font-['DM Sans']">

      {/* === MAIN FOOTER GRID === */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + TAGLINE */}
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="w-[100px] mb-4" />
          </a>
          <p className="text-gray-300 text-sm leading-relaxed">
            Strategic <span className="text-[#A8E6A3]">Insights</span>. Lasting{" "}
            <span className="text-[#A8E6A3]">Impact</span>.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="hover:text-[#A8E6A3]">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT LINKS */}
        <div>
          <h6 className="text-lg font-semibold mb-4">About</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            {aboutLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="hover:text-[#A8E6A3]">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Contact</h6>
          <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            <Phone size={15} /> <a href="tel:1-800-356-8933">1-800-356-8933</a>
          </p>
          <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            <Mail size={15} /> <a href="mailto:info@execor.com">info@execor.com</a>
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Seventh Ave, 20th Floor,
            <br /> New York, NY 10018
          </p>
        </div>
      </div>

      {/* === SOCIAL + COPYRIGHT === */}
      <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Back to Top */}
        <a
          href="#"
          className="p-2 bg-[#A8E6A3] text-[#0E3530] rounded-full hover:bg-[#8ad78e] transition"
        >
          <ArrowUp size={18} />
        </a>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialIcons.map((s, index) => (
            <a
              key={index}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#A8E6A3] hover:text-[#0E3530] transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 <a href="https://vamtam.com" className="hover:text-[#A8E6A3]">VamTam</a>. All
          rights reserved.{" "}
          <a href="/terms" className="hover:text-[#A8E6A3] ml-2">
            Terms
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:text-[#A8E6A3] ml-1">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
