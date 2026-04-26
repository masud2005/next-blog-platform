import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { Post } from "@/types";

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);

  const blog: Post = await res.json();

  return <BlogDetailsCard blog={blog} />;
};

export default BlogDetailsPage;
