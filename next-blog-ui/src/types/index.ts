export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string;   
  updatedAt: string;   
  author: {
    id: number;
    name: string;
    email: string;
  };
}