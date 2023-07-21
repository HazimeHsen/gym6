"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50" />
      )}
      <nav
        ref={navRef}
        className="fixed border-gray-200 text-white bg-[#0c5c75]  w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              <Image src="/images/logo.png" width={130} height={130} />
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}>
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  href="/"
                  className="py-2 pl-3 pr-4 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 flex justify-center "
                  aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="py-2 pl-3 pr-4 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0  flex justify-center ">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/transformations"
                  className="py-2 pl-3 pr-4 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0  flex justify-center ">
                  Transformations
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="py-2 pl-3 pr-4 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0  flex justify-center ">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="py-2 pl-3 pr-4 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0  flex justify-center ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
