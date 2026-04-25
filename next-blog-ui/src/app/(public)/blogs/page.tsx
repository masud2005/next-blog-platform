import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Post } from "@/types";

const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`)
  const {data: blogs} : {data: Post[]} = await res.json()
  console.log(blogs);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {
          blogs.map( blog => <BlogCard key={blog.id} post={blog}/>)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
