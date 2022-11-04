import { CategoryListProps } from "@/types/components.types";

export default function CategoryList ({title, list}: CategoryListProps) {
  return(<>
  <div className="flex items-center pb-6">
              <img src="/assets/img/icon-story.png" alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                {title}
              </h3>
            </div>

            <div className="pt-8">

            {list.map(({id, title, categories, comment})=> (
              <div key={`grade-${id}`} className="border-b border-grey-lighter pb-8">
                <div className="flex items-center space-x-4">
                {categories.map((category)=> (
                  <span key={`category-${category}`} 
                  className={`mb-4 inline-block rounded-full px-2 py-1 font-body text-sm category-${category}`}>
                  {category}
                </span>
                ))}
                </div>
                
                <h4
                  className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
                >
                  {title}
                </h4>

                {comment && <div className="flex items-center pt-4">
                  <span className="font-body text-grey dark:text-white">
                    {"//"}
                  </span>
                  <p className="pl-2 font-body font-light text-primary dark:text-white">
                    {comment}
                  </p>
                </div>}
              </div>
            ))}
            </div>
  </>)
}