import CategoryList from "@/components/CategoryList";
import MainLayout from "@/layout/MainLayout";
import { MY_EXPERIENCE, MY_GRADES, PERSONAL_INFO } from "@/utils/information";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title={`Me | ${PERSONAL_INFO.name}`}>
      <div>
        <div className="container mx-auto">
          <div className="border-b border-grey-lighter py-16 lg:py-20">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <Image src={PERSONAL_INFO.photo} alt="author" unoptimized />
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
            <CategoryList title="My Experience" list={MY_EXPERIENCE} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
