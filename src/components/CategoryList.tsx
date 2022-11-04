import { CategoryListProps } from "@/types/components.types";

export default function CategoryList({ title, list }: CategoryListProps) {
  return (
    <>
      <div className="flex items-center pb-6">
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
          {title}
        </h3>
      </div>

      <div className="pt-8 divide-y divide-grey-lighter ">
        {list.map(({ id, title, categories, comment }) => (
          <div key={`grade-${id}`} className="py-8 first:pt-0 last:pb-0">
            <div className="flex items-center space-x-4">
              {categories.map((category) => (
                <span
                  key={`category-${category}`}
                  className={`mb-4 inline-block rounded-full px-2 py-1 font-body text-sm category-${category} capitalize`}
                >
                  {category}
                </span>
              ))}
            </div>

            <h4 className="block font-body text-lg font-semibold text-primary transition-colors dark:text-white">
              {title}
            </h4>

            {comment && (
              <div className="flex items-center pt-4">
                <span className="font-body text-grey dark:text-white">
                  {"//"}
                </span>
                <p className="pl-2 font-body font-light text-primary dark:text-white">
                  {comment}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
