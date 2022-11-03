import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const { toggleTheme } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <div id="main">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <Link href="/" className="flex items-center">
            <Link href="/" className="mr-2">
              <img src="/assets/img/logo.svg" alt="logo" />
            </Link>
            <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
              John Doe
            </p>
          </Link>
          <div className="flex items-center lg:hidden">
            <i
              className="bx mr-8 cursor-pointer text-3xl text-primary bxs-moon dark:text-white dark:bxs-sun"
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
                  Intro
                </Link>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <a
                  href="/blog"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Blog
                </a>
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
                  className="bx cursor-pointer text-3xl text-primary bxs-moon dark:text-white dark:bxs-sun"
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
                Intro
              </Link>
            </li>

            <li className="">
              <a
                href="/blog"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Blog
              </a>
            </li>

            <li className="">
              <a
                href="/uses"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Uses
              </a>
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

      <div>
        <div className="container mx-auto">
          <div className="py-16 lg:py-20">
            <div>
              <img src="/assets/img/icon-contact.png" alt="icon envelope" />
            </div>
            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              Contact
            </h1>
            <div className="pr-2 pt-3 sm:pt-0">
              <p className="font-body text-xl font-light text-primary dark:text-white">
                Got a question or proposal, or just want to say hello? Go ahead.
                You know what to do.
              </p>
            </div>
            <form className="pt-16">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:mr-3 sm:w-1/2">
                  <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="What should I call you?"
                    className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"
                  />
                </div>
                <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                  <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Drop that email here…"
                    className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"
                  />
                </div>
              </div>
              <div className="w-full pt-6 sm:pt-10">
                <label className="block pb-3 font-body font-medium text-primary dark:text-white">
                  Email Address
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={9}
                  placeholder="Tell me all the things that you think I need to hear…"
                  className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-white"
                ></textarea>
              </div>
              <button className="mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
          <div className="mr-auto flex flex-col items-center sm:flex-row">
            <Link href="/" className="mr-auto sm:mr-6">
              <img src="/assets/img/logo.svg" alt="logo" />
            </Link>
            <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
              ©2020 John Doe.
            </p>
          </div>
          <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
            <a href="https://github.com/ " target="_blank" rel="noreferrer">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
            </a>

            <a href="https://codepen.io/ " target="_blank" rel="noreferrer">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen"></i>
            </a>

            <a
              href="https://www.linkedin.com/ "
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
