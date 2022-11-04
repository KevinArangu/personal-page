import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useState } from "react";
import {PERSONAL_INFO} from "@/utils/information";

export default function Header() {
  const { toggleTheme } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <Link href="/" className="flex items-center">
            <Link href="/" className="mr-2">
              <img src="/assets/img/logo.svg" alt="logo" />
            </Link>
            <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
              {PERSONAL_INFO.name}
            </p>
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
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  href="/"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Me
                </Link>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/uses"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Uses
                </a>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  href="/contact"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Contact
                </Link>
              </li>

              <li>
                <i
                  className="bx cursor-pointer text-3xl text-primary dark:text-white bxs-moon dark:bxs-sun"
                  onClick={toggleTheme}
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div
        className={`pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
          <i
            className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
            onClick={handleCloseMenu}
          ></i>
          <ul className="mt-8 flex flex-col">
            <li className="">
              <Link
                href="/"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Me
              </Link>
            </li>

            <li className="">
              <Link
                href="/uses"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Uses
              </Link>
            </li>

            <li className="">
              <Link
                href="/contact"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
