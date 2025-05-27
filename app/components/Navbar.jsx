import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // Optional: detect active section based on scroll position
      const sections = ["home", "about", "services", "work", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    });
  }, []);

  return (
    <>
      {/* Background gradient effect */}
      <div className="fixed top-0 left-0 w-full h-24 -z-10 bg-gradient-to-b from-black to-transparent opacity-90"></div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-cyan-900/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-transform hover:scale-105"
        >
          Faruq
        </a>

        {/* Desktop Navigation Menu */}
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-8 py-2 transition-all duration-300 ${
            isScroll
              ? "bg-gray-900/50"
              : "bg-gray-900/70 shadow-lg shadow-purple-900/10 backdrop-blur-md"
          }`}
        >
          {["Home", "About", "Services", "My Work", "Contact"].map(
            (item, index) => {
              const linkId = item.toLowerCase().replace(" ", "");
              const href = `#${linkId === "home" ? "top" : linkId}`;
              const isActive =
                activeSection === (linkId === "mywork" ? "work" : linkId);

              return (
                <li key={index}>
                  <a
                    href={href}
                    className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-colors ${
                      isActive
                        ? "text-cyan-300"
                        : "text-gray-300 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            }
          )}
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button - you might want to implement actual dark/light mode toggle */}
          {/* <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Image
              src={assets.moon_icon}
              alt="Theme toggle"
              className="w-5 h-5 filter brightness-0 invert"
              width={20}
              height={20}
            />
          </button> */}

          {/* Contact button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-700 rounded-full text-white hover:border-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              className="w-3 h-3 filter brightness-0 invert"
              alt="arrow"
              width={12}
              height={12}
            />
          </a>

          {/* Mobile menu trigger */}
          <button
            className="p-2 rounded-full block md:hidden hover:bg-gray-800 transition-colors"
            onClick={openMenu}
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-5 h-5 filter brightness-0 invert"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          ref={sideMenuRef}
          className="flex md:hidden flex-col fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-900 shadow-lg shadow-purple-900/20 transform translate-x-full transition-transform duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Image
                src={assets.close_black}
                alt="Close"
                className="w-5 h-5 filter brightness-0 invert"
                width={20}
                height={20}
              />
            </button>
          </div>

          <ul className="flex flex-col gap-2 p-6">
            {["Home", "About", "Services", "My Work", "Contact"].map(
              (item, index) => {
                const linkId = item.toLowerCase().replace(" ", "");
                const href = `#${linkId === "home" ? "top" : linkId}`;

                return (
                  <li key={index} className="border-b border-gray-800 py-3">
                    <a
                      href={href}
                      className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors"
                      style={{ fontFamily: "var(--font-secondary)" }}
                      onClick={closeMenu}
                    >
                      <span className="text-lg font-medium">{item}</span>
                    </a>
                  </li>
                );
              }
            )}
          </ul>

          {/* Social links in mobile menu - optional */}
          <div className="mt-auto p-6 border-t border-gray-800">
            <div className="flex justify-center gap-4">
              {/* Add your social media icons here */}
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {/* Example icon placeholder */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
