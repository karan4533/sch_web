import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClose?: () => void }> = ({ item, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Items with submenu: toggle submenu on row tap, don't navigate
  // Items without submenu: navigate and close drawer
  return (
    <div className="w-full border-b border-gray-100 last:border-0">
      {item.submenu ? (
        <button
          type="button"
          onClick={() => setSubmenuOpen(!submenuOpen)}
          className="flex items-center justify-between w-full py-4 text-gray-800 font-medium hover:text-blue-600 active:text-blue-700 transition-colors focus:outline-none touch-manipulation text-left"
        >
          <span>{item.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 flex-shrink-0 ${submenuOpen ? "rotate-180" : ""}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="flex items-center justify-between w-full py-4 text-gray-800 font-medium hover:text-blue-600 active:text-blue-700 transition-colors touch-manipulation"
        >
          {item.label}
        </Link>
      )}

      {submenuOpen && item.submenu && (
        <div className="bg-gray-50 rounded-xl mb-2 overflow-hidden">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onClose}
              className="block px-5 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors touch-manipulation"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
