import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu open/close

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="bg-black h-12 flex items-center justify-between md:justify-center px-4 navbar-slide">
            {/* Hamburger Menu Icon */}
            <button 
                className="text-white text-2xl md:hidden" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Navbar Links - Shown on larger screens */}
            <ul className="hidden md:flex gap-6 text-white">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink 
                            to={link.path} 
                            className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:font-bold"}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu - Slide In When Open */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-black transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                <button 
                    className="absolute top-4 right-4 text-white text-2xl" 
                    onClick={() => setMenuOpen(false)}
                >
                    <FiX />
                </button>

                <ul className="flex flex-col mt-16 gap-6 text-white pl-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink 
                                to={link.path} 
                                className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "hover:font-bold"}
                                onClick={() => setMenuOpen(false)} // Close menu on click
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
