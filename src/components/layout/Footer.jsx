import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "/logo.svg"; // <-- your logo path

const Footer = () => {
  const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];
  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, link: "#" },
    { icon: <Twitter className="w-5 h-5" />, link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#" },
    { icon: <Instagram className="w-5 h-5" />, link: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={logo} alt="Rhombus Education Logo" className="w-32 mx-auto md:mx-0" />
          <p className="text-gray-400 text-sm">
            Helping students achieve their dreams with expert guidance on education and immigration services.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-blue-500 transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="text-blue-500 w-5 h-5" />
              <span>8826841955, 8050796619</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="text-blue-500 w-5 h-5" />
              <span>Info@rhombuseducation.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-6xl mx-auto px-4 mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rhombus Education. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ using React + Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
