import { PERSONAL_INFO } from "@/utils/information";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row-reverse sm:py-12">
        <div className="flex items-center space-x-2 pt-5 sm:pt-0">
          <Link href={PERSONAL_INFO.networks.github} target="_blank">
            <img
              alt="github logo"
              src="github.png"
              className="w-10 h-10 shrink-0"
            />
          </Link>
          <Link href={PERSONAL_INFO.networks.linkedin} target="_blank">
            <img
              alt="linkedin logo"
              src="linkedin.png"
              className="w-10 h-10 shrink-0"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center sm:flex-row">
          <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
            ©2022 <span>{PERSONAL_INFO.name}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
