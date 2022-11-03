import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useState } from "react";

export default function Home() {
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
                <a
                  href="/contact"
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                >
                  Contact
                </a>
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
              <a
                href="/contact"
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <div className="border-b border-grey-lighter py-16 lg:py-20">
            <div>
              <img
                src="/assets/img/author.png"
                className="h-16 w-16"
                alt="author"
              />
            </div>
            <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              Hi, I’m John Doe.
            </h1>
            <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
              A software engineer and open-source advocate enjoying the sunny
              life in Barcelona, Spain.
            </p>
            <Link
              href="/"
              className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
            >
              Say Hello!
            </Link>
          </div>

          <div className="border-b border-grey-lighter py-16 lg:py-20">
            <div className="flex items-center pb-6">
              <img src="/assets/img/icon-story.png" alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                My Story
              </h3>
            </div>
            <div>
              <p className="font-body font-light text-primary dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                mauris cursus mattis molestie. Et leo duis ut diam. Sit amet
                tellus cras adipiscing enim eu turpis. Adipiscing at in tellus
                integer feugiat.
                <br />
                <br />
                Maecenas accumsan lacus vel facilisis. Eget egestas purus
                viverra accumsan in nisl nisi scelerisque eu. Non tellus orci ac
                auctor augue mauris augue neque gravida. Auctor augue mauris
                augue neque gravida in fermentum et sollicitudin. Tempus urna et
                pharetra pharetra massa massa ultricies mi quis. Amet mauris
                commodo quis imperdiet massa. Integer vitae justo eget magna
                fermentum iaculis eu non.
              </p>
            </div>
          </div>

          <div className="py-16 lg:py-20">
            <div className="flex items-center pb-6">
              <img src="/assets/img/icon-story.png" alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                My Story
              </h3>
              <a
                href="/blog"
                className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
              >
                All posts
                <img
                  src="/assets/img/long-arrow-right.png"
                  className="ml-3"
                  alt="arrow right"
                />
              </a>
            </div>
            <div className="pt-8">
              <div className="border-b border-grey-lighter pb-8">
                <span className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
                  category
                </span>
                <a
                  href="/post"
                  className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
                >
                  Quis hendrerit dolor magna eget est lorem ipsum dolor sit
                </a>
                <div className="flex items-center pt-4">
                  <p className="pr-2 font-body font-light text-primary dark:text-white">
                    July 19, 2020
                  </p>
                  <span className="font-body text-grey dark:text-white">
                    {"//"}
                  </span>
                  <p className="pl-2 font-body font-light text-primary dark:text-white">
                    4 min read
                  </p>
                </div>
              </div>
              <div className="border-b border-grey-lighter pt-10 pb-8">
                <div className="flex items-center">
                  <span className="mb-4 inline-block rounded-full bg-grey-light px-2 py-1 font-body text-sm text-blue-dark">
                    category
                  </span>
                  <span className="mb-4 ml-4 inline-block rounded-full bg-yellow-light px-2 py-1 font-body text-sm text-yellow-dark">
                    category
                  </span>
                </div>
                <a
                  href="/post"
                  className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
                >
                  Senectus et netus et malesuada fames ac turpis egestas integer
                </a>
                <div className="flex items-center pt-4">
                  <p className="pr-2 font-body font-light text-primary dark:text-white">
                    June 30, 2020
                  </p>
                  <span className="font-body text-grey dark:text-white">
                    {"//"}
                  </span>
                  <p className="pl-2 font-body font-light text-primary dark:text-white">
                    5 min read
                  </p>
                </div>
              </div>
              <div className="border-b border-grey-lighter pt-10 pb-8">
                <span className="mb-4 inline-block rounded-full bg-blue-light px-2 py-1 font-body text-sm text-blue">
                  category
                </span>
                <a
                  href="/post"
                  className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
                >
                  Vulputate ut pharetra sit amet aliquam id diam maecenas
                  ultricies
                </a>
                <div className="flex items-center pt-4">
                  <p className="pr-2 font-body font-light text-primary dark:text-white">
                    June 26, 2020
                  </p>
                  <span className="font-body text-grey dark:text-white">
                    {"//"}
                  </span>
                  <p className="pl-2 font-body font-light text-primary dark:text-white">
                    3 min read
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-16 lg:pb-20">
            <div className="flex items-center pb-6">
              <img src="/assets/img/icon-project.png" alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                My Projects
              </h3>
            </div>
            <div>
              <Link
                href="/"
                className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
              >
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                    TailwindCSS
                  </h4>
                  <p className="font-body font-light text-primary dark:text-white">
                    Rapidly build modern websites without ever leaving your
                    HTML.
                  </p>
                </span>
                <span className="w-1/10">
                  <img
                    src="/assets/img/chevron-right.png"
                    className="mx-auto"
                    alt="chevron right"
                  />
                </span>
              </Link>

              <Link
                href="/"
                className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
              >
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                    Maizzle
                  </h4>
                  <p className="font-body font-light text-primary dark:text-white">
                    Framework for Rapid Email Prototyping
                  </p>
                </span>
                <span className="w-1/10">
                  <img
                    src="/assets/img/chevron-right.png"
                    className="mx-auto"
                    alt="chevron right"
                  />
                </span>
              </Link>

              <a
                href=" / "
                className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
              >
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                    Alpine.js
                  </h4>
                  <p className="font-body font-light text-primary dark:text-white">
                    Think of it like Tailwind for JavaScript.
                  </p>
                </span>
                <span className="w-1/10">
                  <img
                    src="/assets/img/chevron-right.png"
                    className="mx-auto"
                    alt="chevron right"
                  />
                </span>
              </a>

              <a
                href=" / "
                className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
              >
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                    PostCSS
                  </h4>
                  <p className="font-body font-light text-primary dark:text-white">
                    A tool for transforming CSS with JavaScript
                  </p>
                </span>
                <span className="w-1/10">
                  <img
                    src="/assets/img/chevron-right.png"
                    className="mx-auto"
                    alt="chevron right"
                  />
                </span>
              </a>
            </div>
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
            <Link href="https://github.com/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
            </Link>

            <Link href="https://codepen.io/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen"></i>
            </Link>

            <Link href="https://www.linkedin.com/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
