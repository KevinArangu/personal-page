import { BlockListProps } from "@/types/components.types";
import Link from "next/link";

export default function BlockList({ title, list }: BlockListProps) {
  return (
    <>
      <div className="flex items-center pb-6">
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-6">
        {list.map(({ id, title, description, comment, href, image }) => (
          <li
            key={`block-list-${id}`}
            className="relative border border-secondary rounded-md shadow-md px-4 py-4 sm:px-6"
          >
            {href && <Link href={href} className="absolute inset-0"></Link>}
            <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
              {title}
            </h4>
            <p className="font-body font-light text-primary dark:text-white">
              {description}
            </p>
            <p className="font-body font-light text-primary dark:text-white">
              {"// "}
              {comment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
