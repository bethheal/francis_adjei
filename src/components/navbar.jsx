import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import K from "../constants/index";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after clicking
    } else {
      console.error(`Section with id "${sectionId}" not found`);
    }
  };
  
  // Function to handle intersection observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    const sections = document.querySelectorAll("section"); // Assuming each section has a 'section' tag
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <nav className="bg-white flex-row text-fontColors px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-lg">
      {/* Mobile Menu Icon (Visible only on small screens) */}
      <div className="md:hidden flex items-center bg-orange-500">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Logo - Centered on both small and large screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none text-4xl font-bold cursor-pointer">
        LOGO
      </div>

      {/* Navigation Links - Hidden on small screens, shown on large screens */}
      <div
      className={`${
        isOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row md:space-x-8 text-lg md:items-center absolute md:static top-16 left-0 right-0 bg-orange-500  px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out`}
    >
     {K.NAVLINKS.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className={`py-2 md:py-0 transition-colors duration-300 
      hover:text-white md:hover:text-white 
      ${activeSection === item.id 
        ? "underline decoration-2 underline-offset-4 decoration-white md:decoration-white" 
        : "hover:decoration-white md:hover:decoration-white"
      }`}
  >
    {item.name}
  </button>
))}

    </div>
    
    </nav>
  );
};

export default Navbar;
