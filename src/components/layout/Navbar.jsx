// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // ✅ Scroll behavior (hide/show + detect scroll)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScroll > lastScrollY && currentScroll > 140) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          setIsScrolled(currentScroll > 10);
          setLastScrollY(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Background & glass logic
  const backgroundColor = isHomePage
    ? isScrolled
      ? "rgba(15,61,58,0.95)" // solid dark green after scroll
      : "rgba(15,61,58,0.45)" // glass effect when top
    : "rgba(255,255,255,0.9)"; // white glass on other pages

  const textColor = isHomePage
    ? isScrolled
      ? "text-[rgb(200,248,169)]"
      : "text-white"
    : "text-[#0F3D3A]";

  const borderBottom = isHomePage
    ? isScrolled
      ? "1px solid rgba(200,248,169,0.25)"
      : "1px solid rgba(200,248,169,0.1)"
    : "1px solid rgba(0,0,0,0.08)";

  return (
    <header
      className={`fixed top-0 left-0 w-full sm:px-4 md:px-8 lg:px-12 z-50 transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      style={{
        background: isHomePage && !isScrolled
          ? `repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.05),
          rgba(255,255,255,0.05) 6px,
          rgba(255,255,255,0) 30px
        ), rgb(15,61,58)`
          : backgroundColor,
        borderBottom: isScrolled
          ? "1px solid #0F3D3A"
          : "1px solid rgba(200,248,169,0.1)",
        boxShadow:
          isScrolled || !isHomePage
            ? "0 4px 14px rgba(0,0,0,0.08)"
            : "0 2px 10px rgba(255,255,255,0.05)",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        transition:
          "transform 1.2s ease, background 0.5s ease, border 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.6s ease",
      }}
    >

      <nav className="relative flex items-center justify-between px-6 md:px-12 py-3 min-h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto md:h-14 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center space-x-8 font-normal ${textColor}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group cursor-pointer transition-all duration-300"
              >
                <span
                  className="
                    relative pb-1 
                    after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
                    after:w-0 after:h-[2px] after:bg-[rgb(200,248,169)]
                    after:transition-all after:duration-300 group-hover:after:w-full
                  "
                >
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex z-10">
          <Link to="/contact">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-md font-medium transition-all duration-300 cursor-pointer ${isHomePage
                  ? "bg-[rgb(200,248,169)] text-[#0F3D3A] hover:bg-[#0F3D3A] hover:text-white"
                  : "bg-[#0F3D3A] text-[rgb(200,248,169)] hover:bg-[#0E3530] hover:text-white"
                }`}
            >
              Contact Us <ArrowRight className="w-5 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-all ${textColor}`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${isHomePage
              ? "bg-[#0F3D3A] text-[rgb(200,248,169)]"
              : "bg-white text-[#0F3D3A]"
            } border-t border-[rgb(200,248,169)]/40`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
            {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
              <li key={item} onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="hover:text-[rgb(200,248,169)]/70 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Button */}
          <div className="flex justify-center pb-4">
            <Link to="/contact">
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${isHomePage
                    ? "bg-[rgb(200,248,169)] text-[#0F3D3A] hover:bg-[#0E3530]"
                    : "bg-[#0F3D3A] text-[rgb(200,248,169)] hover:bg-white"
                  }`}
              >
                Contact Us <ArrowRight className="w-5 h-4" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
