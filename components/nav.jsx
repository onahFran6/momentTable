"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (path) => {
    return pathName === path ? "bg-yellow-500" : "";
  };

  const renderLinks = () => {
    const links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
    ];

    return links.map((link) => (
      <li
        key={link.path}
        className={`hover:bg-yellow-500 rounded-xl  ${isLinkActive(link.path)}`}
        onClick={closeMobileMenu}
      >
        <Link href={link.path}>
          <label className="block text-gray-300 hover:text-white font-bold p-1 cursor-pointer">
            {link.label}
          </label>
        </Link>
      </li>
    ));
  };

  return (
    <nav className="bg-gray-800 text-white  relative  items-center justify-center rounded-lg">
      <div className="container items-center justify-center">
        <div className="flex items-center justify-between">
          <div>
            <ul className="hidden md:flex md:flex-row space-x-4 items-center p-1 justify-center">
              {renderLinks()}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="mt-2 absolute top-full left-0 bg-gray-800 py-2 px-4 w-full">
                <ul>{renderLinks()}</ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
