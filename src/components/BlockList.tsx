import { BlockListProps } from "@/types/components.types";
import Link from "next/link";

export default function BlockList({ icon: Icon, title, list }: BlockListProps) {
  return (
    <>
      <div className="flex items-center pb-6 space-x-2 text-primary dark:text-white">
        {Icon && <Icon className="w-6 h-6 fill-current shrink-0" />}
        <h3 className="font-body text-2xl font-semibold ">{title}</h3>
      </div>

      <ul className="space-y-6">
        {list.map(({ id, title, description, comment, href, image }) => (
          <li
            key={`block-list-${id}`}
            className="relative border border-secondary corners shadow-md px-4 py-4 sm:px-6"
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
