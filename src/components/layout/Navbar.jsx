import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, Plus, Minus } from "lucide-react";
import logo from "/logo.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);
    const location = useLocation();

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    // Disable body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    // Scroll-hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setHidden(true); // scroll down → hide
            } else {
                setHidden(false); // scroll up → show
            }
            setLastScroll(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
    ];

    const navLink =
        "flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium py-3 px-4 transition-all duration-300";

    return (
        <div>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-700 bg-gray-200 shadow-md ${hidden ? "-translate-y-full" : "translate-y-0"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === link.path
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="menu-btn md:hidden p-2 text-gray-700 hover:text-blue-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`sidebar fixed top-0 right-0 h-screen bg-gray-100 shadow-2xl border-l border-gray-200 transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-50 w-[70%] sm:w-[35%] backdrop-blur-md ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-center p-5 bg-gradient-to-r from-blue-100 to-blue-300 shadow-md">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </div>

                    {/* Sidebar Links */}
                    <div className="flex flex-col items-center py-4 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="w-[80%]">
                                <button
                                    className={`${navLink} rounded-md`}
                                    onClick={() =>
                                        setOpenMenu(openMenu === link.name ? null : link.name)
                                    }
                                >
                                    <span className="flex items-center gap-2">
                                        {openMenu === link.name ? (
                                            <ChevronDown size={18} />
                                        ) : (
                                            <ChevronRight size={18} />
                                        )}
                                        {link.name}
                                    </span>
                                    {openMenu === link.name ? <Minus size={16} /> : <Plus size={16} />}
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openMenu === link.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600 rounded-lg mt-1 shadow-sm">
                                        Section content for {link.name}.
                                        <div className="mt-2">
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-blue-600 font-medium underline"
                                            >
                                                Go to {link.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[80%] mx-auto border-b border-gray-300 my-2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-gray-300/50 backdrop-blur-[1px] z-40 pointer-events-auto transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>
        </div>
    );
};

export default Navbar;
