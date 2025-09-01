import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  { getAllBlogs }  from "../pages/admin/api/blogApi";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import blogBanner from "../assets/blog.jpg";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs(); // ✅ use API service
        setBlogPosts(blogs);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="bg-black text-white font-sans px-4 py-10 md:px-20">
      {/* Section: Journey */}
      {/* ... keep your existing journey section ... */}

      {/* Section: Latest Articles */}
      <section className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Latest Articles
          </h2>
          <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and industry knowledge from our expert trainers
            and team
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">⏳ Loading blogs...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-gray-400">
            No blogs found. Please check back later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post._id}
                className="blog-card bg-gray-900 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group border border-gray-800 hover:border-blue-500/50 transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image || blogBanner} // ✅ fixed field: backend saves as "image"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {post.category || "General"}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 relative z-10">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                    {post.content?.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-sm text-gray-400 font-medium flex items-center group-hover:text-gray-300 transition-colors duration-300">
                      ✍ {post.author}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-300 flex items-center group-hover:scale-110 transform">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Section: Trainers */}
      {/* ... keep your trainers + cybersecurity sections ... */}
    </div>
  );
};

export default BlogPage;
