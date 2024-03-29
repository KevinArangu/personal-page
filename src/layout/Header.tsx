import ToggleTheme from "@/components/ToggleTheme";
import { useApp } from "@/context/AppContext";
import { PERSONAL_INFO } from "@/utils/information";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

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
          <div className="flex items-center space-x-2 lg:hidden text-primary dark:text-white">
            <ToggleTheme onClick={toggleTheme} />
            <button type="button" onClick={handleOpenMenu}>
              <Bars3BottomRightIcon className="fill-current w-8 h-8 shrink-0" />
            </button>
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
              <li className="cursor-pointer text-primary dark:text-white">
                <ToggleTheme onClick={toggleTheme} />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex bg-black bg-opacity-80 lg:hidden"
          onClick={handleCloseMenu}
        >
          <aside className="relative ml-auto w-2/3 bg-secondary p-4 md:w-1/3">
            <XMarkIcon
              className="h-8 w-8 shrink-0 fill-white absolute top-0 right-0 mt-6 mr-4"
              onClick={handleCloseMenu}
            />
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
          </aside>
        </div>
      )}
    </>
  );
}
