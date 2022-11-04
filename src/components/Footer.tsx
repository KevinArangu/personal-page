import { PERSONAL_INFO } from "@/utils/information";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
        <div className="mr-auto flex flex-col items-center sm:flex-row">
          <Link href="/" className="mr-auto sm:mr-6">
            <img src="/assets/img/logo.svg" alt="logo" />
          </Link>
          <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
            ©2022 <span>{PERSONAL_INFO.name}</span>.
          </p>
        </div>
        <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
          <Link href="https://github.com/ " target="_blank">
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
          </Link>
          <Link href="https://www.linkedin.com/ " target="_blank">
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
