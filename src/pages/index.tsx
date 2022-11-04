import BlockList from "@/components/BlockList";
import CategoryList from "@/components/CategoryList";
import MainLayout from "@/layout/MainLayout";
import {
  MY_COURSES,
  MY_EXPERIENCE,
  MY_GRADES,
  PERSONAL_INFO,
} from "@/utils/information";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout title={`Me | ${PERSONAL_INFO.name}`}>
      <div>
        <div className="container mx-auto">
          <div className="flex flex-col items-center border-b border-grey-lighter py-16 lg:py-20">
            <div className="relative h-24 w-24 rounded-full overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="object-cover w-full h-full"
                  src={PERSONAL_INFO.photo}
                  alt="author"
                  unoptimized
                />
              </div>
            </div>
            <h1 className="text-center pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              Hi, I’m <span>{PERSONAL_INFO.name}</span>.
            </h1>
            <p className="text-center pt-3 font-body text-xl font-light text-primary dark:text-white">
              {PERSONAL_INFO.shortDescription}
            </p>
          </div>

          <div className="py-16 lg:py-20">
            <CategoryList title="My Grades" list={MY_GRADES} />
          </div>

          <div className="py-16 lg:py-20">
            <CategoryList title="My Experience" list={MY_EXPERIENCE} />
          </div>

          <div className="py-16 lg:py-20">
            <BlockList title="My Courses" list={MY_COURSES} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
