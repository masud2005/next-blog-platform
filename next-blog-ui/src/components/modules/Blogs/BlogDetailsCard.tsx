/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { CalendarDays, Eye, Clock3 } from "lucide-react";

export default async function BlogDetailsCard({
  blog,
}: {
  blog: any;
}) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Blog not found.
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen py-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                Technology
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Eye size={18} />
                <span>{blog.views} Views</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 mt-14">
        {/* Author */}
        <div className="flex items-center gap-4 border-b border-gray-200 pb-8 mb-10">
          <Image
            src={
              blog?.author?.picture ||
              "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
            }
            alt={blog?.author?.name}
            width={60}
            height={60}
            className="rounded-full border-2 border-blue-500"
          />

          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              {blog?.author?.name}

              {blog?.author?.isVerified && (
                <span className="text-blue-500 text-sm">✔ Verified</span>
              )}
            </h3>

            <p className="text-gray-500 text-sm">
              Content Writer & Tech Blogger
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-8">
          <p>{blog.content}</p>
        </article>

        {/* Bottom Action */}
        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-lg">Thanks for reading!</h4>
            <p className="text-gray-500 text-sm">
              Share this article with your friends.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
              Share
            </button>

            <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
              Bookmark
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}