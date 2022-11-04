export interface Category {
  id: number
  categories: string[];
  title: string;
  comment?: string;
}

export interface CategoryListProps {
  title: string;
  list: Category[]
}