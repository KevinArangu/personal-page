import MainLayout from "@/layout/MainLayout";
import { PERSONAL_INFO } from "@/utils/information";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title={`Me | ${PERSONAL_INFO.name}`}>
      <div>
        <div className="container mx-auto">
          <div className="border-b border-grey-lighter py-16 lg:py-20">
            <div>
              <Image
                src={PERSONAL_INFO.photo}
                className="h-16 w-16 rounded-full"
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
            {/* <Link
              href="/"
              className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
            >
              Say Hello!
            </Link> */}
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
    </MainLayout>
  );
}
