import CategoryList from "@/components/CategoryList";
import MainLayout from "@/layout/MainLayout";
import { MY_GRADES, PERSONAL_INFO } from "@/utils/information";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title={`Me | ${PERSONAL_INFO.name}`}>
      <div>
        <div className="container mx-auto">
          <div className="border-b border-grey-lighter py-16 lg:py-20">
            <div 
              className="h-16 w-16 rounded-full overflow-hidden"
            >
              <Image
                src={PERSONAL_INFO.photo}
                alt="author"
                unoptimized
              />
            </div>
            <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              Hi, I’m <span>{PERSONAL_INFO.name}</span>.
            </h1>
            <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
              {PERSONAL_INFO.shortDescription}
            </p>
          </div>

          <div className="py-16 lg:py-20">
            <CategoryList title="My Grades" list={MY_GRADES} />
          </div>

          <div className="py-16 lg:pb-20">
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
    </MainLayout>
  );
}
