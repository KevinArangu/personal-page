export interface Category {
  id: number;
  categories: string[];
  title: string;
  comment?: string;
}

export interface CategoryListProps {
  title: string;
  list: Category[];
}

export interface Block {
  id: number;
  title: string;
  description: string;
  comment: string;
  href: string;
  image?: string;
}

export interface BlockListProps {
  title: string;
  list: Block[];
}
