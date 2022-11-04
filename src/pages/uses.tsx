import MainLayout from "@/layout/MainLayout";
import { PERSONAL_INFO, USES } from "@/utils/information";

export default function UsesPage() {
  return (
    <MainLayout title={`Uses | ${PERSONAL_INFO.name}`}>
      <div>
        <div className="container mx-auto">
          <div className="py-16 lg:py-20">
            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              /uses
            </h1>

            <div className="py-16 lg:py-20">
              <ul className="flex flex-wrap gap-2">
                {USES.map((use) => (
                  <li
                    key={use}
                    className="bg-secondary font-medium py-1 px-3 corners font-body text-lg shadow-sm text-primary dark:text-white"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
