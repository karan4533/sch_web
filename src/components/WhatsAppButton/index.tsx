"use client";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/917397615166"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 sm:right-8 z-[999] group touch-manipulation"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping" />
      {/* Button */}
      <span className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 sm:w-8 sm:h-8 fill-white"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.37.63 4.69 1.826 6.726L2.667 29.333l6.78-1.777A13.266 13.266 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11.2 11.2 0 0 1-5.71-1.563l-.41-.243-4.023 1.054 1.07-3.91-.267-.427A11.2 11.2 0 0 1 4.8 16c0-6.176 5.027-11.2 11.203-11.2S27.2 9.824 27.2 16c0 6.176-5.02 11.2-11.197 11.2zm6.14-8.373c-.337-.168-1.99-.98-2.3-1.093-.307-.11-.533-.168-.757.168-.224.337-.863 1.093-1.057 1.317-.195.224-.39.252-.727.084-.337-.168-1.42-.524-2.704-1.67-1-.893-1.676-1.996-1.873-2.333-.196-.337-.021-.519.148-.686.152-.152.337-.393.505-.59.168-.196.224-.337.337-.56.112-.224.056-.42-.028-.588-.084-.168-.757-1.82-1.037-2.493-.273-.653-.55-.565-.757-.575l-.645-.012c-.224 0-.588.084-.896.42-.308.337-1.175 1.148-1.175 2.8s1.204 3.247 1.372 3.47c.168.224 2.37 3.617 5.742 5.072.803.347 1.43.554 1.918.71.806.256 1.54.22 2.12.133.647-.097 1.99-.813 2.27-1.598.28-.784.28-1.456.196-1.597-.084-.14-.308-.224-.645-.393z" />
        </svg>
      </span>

      {/* Tooltip — desktop only */}
      <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Chat with us
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>
    </Link>
  );
}
