import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useState } from "react";
import { PERSONAL_INFO } from "@/utils/information";

const NAV_ITEMS = [
  { id: 1, name: "Me", href: "/" },
  { id: 1, name: "Uses", href: "/uses" },
  { id: 1, name: "Contact", href: "/contact" },
];

export default function Header() {
  const { toggleTheme } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <Link
            href="/"
            className="flex items-center font-body text-2xl font-bold text-primary dark:text-white"
          >
            {PERSONAL_INFO.name}
          </Link>
          <div className="flex items-center lg:hidden">
            <i
              className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white bxs-sun dark:bxs-moon"
              onClick={toggleTheme}
            ></i>

            <svg
              width="24"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleOpenMenu}
              className="fill-current text-primary dark:text-white"
            >
              <g fillRule="evenodd">
                <rect width="24" height="3" rx="1.5" />
                <rect x="8" y="6" width="16" height="3" rx="1.5" />
                <rect x="4" y="12" width="20" height="3" rx="1.5" />
              </g>
            </svg>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {NAV_ITEMS.map(({ id, name, href }) => (
                <li key={`nav-item-${id}`} className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-underscore"></div>
                  <Link
                    href={href}
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors dark:text-white group-hover:text-secondary"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li className="cursor-pointer " onClick={toggleTheme}>
                <i className="bx text-3xl text-primary dark:text-white bxs-moon dark:bxs-sun"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <aside
        className={`pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <div className="ml-auto w-2/3 bg-secondary p-4 md:w-1/3">
          <i
            className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
            onClick={handleCloseMenu}
          ></i>
          <ul className="mt-8 flex flex-col">
            {NAV_ITEMS.map(({ id, name, href }) => (
              <li key={`menu-item-${id}`} className="">
                <Link
                  href={href}
                  className="mb-3 block px-2 font-body text-lg font-medium text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
