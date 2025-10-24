import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "/logo.svg";

const Footer = () => {
  const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];
  const socialIcons = [
    { icon: <Linkedin size={20} />, link: "#" },
    { icon: <Twitter size={20} />, link: "#" },
    { icon: <Youtube size={20} />, link: "#" },
    { icon: <Facebook size={20} />, link: "#" },
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: "#0E3530" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Logo + Description */}
        <div className="flex flex-col items-center md:items-start space-y-4 mb-12">
          <img src={logo} alt="Rhombus Logo" className="h-12 w-auto" />
          <p className="text-white/80 text-center md:text-left text-sm md:text-base max-w-lg">
            Helping students achieve their dreams with expert guidance on education and immigration services.
          </p>
        </div>

        {/* Middle Section: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-white">
          {/* Company Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <ul className="space-y-1 text-white/80">
              {navLinks.map((link, idx) => (
                <li key={idx} className="hover:text-teal-400 transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p className="flex items-center gap-2">
              <Phone size={16} /> 8826841955, 8050796619
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> Info@rhombuseducation.com
            </p>
          </div>

          {/* Address / Location */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-2">Address</h4>
            <p>Seventh Ave, 20th Floor</p>
            <p>New York, NY 10018</p>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex gap-4">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider + Copyright */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm md:text-base gap-2">
          <p>2025 © VamTam. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-teal-400 transition">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-teal-400 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
