"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white ${sticky ? "shadow-lg py-3 sm:py-4" : "shadow-none py-4 sm:py-5"}`}
    >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {headerData.map((item, index) => (
              item.label === "Admission Form" ? (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 xl:px-5 py-2 rounded-full text-sm xl:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 touch-manipulation whitespace-nowrap"
                >
                  <Icon icon="mdi:file-document-outline" className="text-lg" />
                  {item.label}
                </Link>
              ) : (
                <HeaderLink key={index} item={item} />
              )
            ))}
          </nav>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            aria-label="Toggle mobile menu"
            aria-expanded={navbarOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navbarOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile backdrop */}
        {navbarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setNavbarOpen(false)}
          />
        )}

        {/* Mobile drawer */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${navbarOpen ? "translate-x-0" : "translate-x-full"} z-50 flex flex-col`}
        >
          {/* Drawer header with logo + close */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <Icon icon="mdi:close" className="text-2xl text-gray-600" />
            </button>
          </div>
          {/* Drawer nav */}
          <nav className="flex flex-col overflow-y-auto flex-1 px-4 py-2">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} onClose={() => setNavbarOpen(false)} />
            ))}
          </nav>
          {/* Admission CTA at bottom of drawer */}
          <div className="px-4 py-5 border-t border-gray-100 flex-shrink-0">
            <Link
              href="https://namvidhyamandir.com/static/media/NAM_Admission_Form.617529b1.pdf"
              target="_blank"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold text-base shadow-md transition-all duration-300 touch-manipulation"
            >
              <Icon icon="mdi:file-document-outline" className="text-xl" />
              Admission Form
            </Link>
          </div>
        </div>
    </header>
  );
};

export default Header;
