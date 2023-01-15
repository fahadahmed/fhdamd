export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status?: string;
  tags: string[];
};
