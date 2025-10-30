// src/components/layout/Footer.jsx
import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
  MapPin,
} from "lucide-react";
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
    <footer className="w-full bg-[#0F3D3A] text-white font-['DM Sans']">
      {/* === MAIN FOOTER FLEX LAYOUT === */}
      <div className="max-w-7xl mx-auto pt-16 sm:px-4  flex flex-wrap justify-between gap-10">
        {/* LOGO + TAGLINE */}
        <div className="min-w-[300px] flex-1">
          <a href="/">
            <img src={logo} alt="Logo" className="w-[200px] mb-4" />
          </a>
          <p className="text-gray-300 text-md leading-relaxed">
            Strategic <span className="text-[#A8E6A3]">Insights</span>. Lasting{" "}
            <span className="text-[#A8E6A3]">Impact</span>.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="min-w-[160px] flex-1">
          <div className="elementor-widget-container mb-3">
            <h6
              className="elementor-heading-title elementor-size-default"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "19.2px",
                fontWeight: 400,
                margin: 0,
                padding: 0,
              }}
            >
              Company
            </h6>
          </div>
          <ul className="space-y-2 text-md text-gray-300 font-semibold">
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
        <div className="min-w-[160px] flex-1">
          <div className="elementor-widget-container mb-3">
            <h6
              className="elementor-heading-title elementor-size-default"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "19.2px",
                fontWeight: 400,
                margin: 0,
                padding: 0,
              }}
            >
              Pages
            </h6>
          </div>
          <ul className="space-y-2 text-md text-gray-300 font-semibold">
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
        <div className="min-w-[180px] flex-1">
          <div className="elementor-widget-container mb-3">
            <h6
              className="elementor-heading-title elementor-size-default"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "19.2px",
                fontWeight: 400,
                margin: 0,
                padding: 0,
              }}
            >
              Contact
            </h6>
          </div>
          <ul className="space-y-2 text-md text-gray-300 font-semibold">
            <li className="flex items-center gap-2">
              <Phone size={15} />{" "}
              <a href="tel:1-800-356-8933">1-800-356-8933</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} />{" "}
              <a href="mailto:info@execor.com">info@execor.com</a>
            </li>
          </ul>
        </div>

        {/* LOCATION INFO (Wraps to new line if needed) */}
        <div className="min-w-[240px] flex-1">
          <div className="elementor-widget-container mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-[#A8E6A3]" />
            <h6
              className="elementor-heading-title elementor-size-default"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "19.2px",
                fontWeight: 400,
                margin: 0,
                padding: 0,
              }}
            >
              Location
            </h6>
          </div>
          <ul className="space-y-2 text-md text-gray-300 font-semibold">
            <li>Seventh Ave, 20th Floor</li>
            <li>New York, NY 10018</li>
          </ul>
        </div>
      </div>


      {/* === BOTTOM FOOTER BAR === */}
      <div className=" py-4 sm:px-4 flex flex-row md:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Back to Top */}
        <div
          style={{
            "--vamtam-accent-color-1": "#0F3D3A",
            "--vamtam-accent-color-2": "#C8F8A9",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            lineHeight: "1.5em",
            color: "rgba(0, 0, 0, 0.75)",
          }}
          className="flex items-center justify-center"
        >
          <a
            href="#"
            className="p-3 text-white hover:bg-[var(--vamtam-accent-color-1)] hover:text-[var(--vamtam-accent-color-2)] rounded-lg"
          >
            <ArrowUp size={22} />
          </a>
        </div>


        {/* Social Icons */}
        <div
          style={{
            "--vamtam-accent-color-1": "#0F3D3A",
            "--vamtam-accent-color-2": "#C8F8A9",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            lineHeight: "1.5em",
            color: "rgba(0, 0, 0, 0.75)",
          }}
          className="flex items-center justify-start gap-5"
        >
          {socialIcons.map((s, index) => (
            <a
              key={index}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-white transition duration-300 hover:text-[var(--vamtam-accent-color-2)] hover:bg-[var(--vamtam-accent-color-1)] rounded-lg"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>


      {/* === SOCIAL + COPYRIGHT (Optimized) === */}
      <div className="border-t border-gray-700 py-8 sm:px-4 flex flex-row md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left Side – Clickable Copyright */}
        <div>
          <a
            href="https://vamtam.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-[13px] text-gray-400 hover:text-[#C8F8A9] transition-all duration-300 font-semibold"
          >
            2025 © VamTam. All rights reserved.
          </a>
        </div>

        {/* Right Side – Terms & Privacy */}
        <ul className="flex flex-row gap-6 text-sm md:text-[13px] text-gray-400">
          <li>
            <a
              href="#"
              className="hover:text-[#C8F8A9] transition-colors duration-300 font-semibold"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#C8F8A9] transition-colors duration-300 font-semibold"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>


    </footer>
  );
};

export default Footer;
