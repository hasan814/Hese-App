"use client";

import { HeaderLinks } from "@/utils/HeaderLink";
import { useState } from "react";

import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleMenuClick = (item: string) => {
    setActiveLink(item); // Set the clicked menu item as active
    setIsOpen(false); // Close the mobile menu (if open)
  };

  return (
    <header className="sticky top-0 bg-grayLight shadow-md px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/">
        <p className="text-black font-bold text-xl cursor-pointer">Positivus</p>
      </Link>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex space-x-6">
        {HeaderLinks.map((item) => (
          <Link
            href={`/${item.toLowerCase().replace(/ /g, "-")}`}
            key={item}
            onClick={() => handleMenuClick(item)}
          >
            <p
              className={`cursor-pointer ${
                activeLink === item ? "underline font-semibold" : "text-black"
              }`}
            >
              {item}
            </p>
          </Link>
        ))}
      </nav>

      {/* Request a Quote button for larger screens */}
      <button className="hidden md:block bg-yellow px-4 py-2 text-black font-semibold rounded">
        Request a Quote
      </button>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          className="text-black text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center space-y-4 py-6 overflow-hidden">
          {HeaderLinks.map((item, index) => (
            <div
              key={item}
              className={`text-lg font-semibold transform transition duration-500 ease-out ${
                activeLink === item ? "text-yellow" : "text-white"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => handleMenuClick(item)}
            >
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </div>
          ))}
          {/* Request a Quote button */}
          <button
            className="bg-yellow px-4 py-2 text-black font-semibold rounded transform transition duration-500 ease-out opacity-100"
            style={{ transitionDelay: `${HeaderLinks.length * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
