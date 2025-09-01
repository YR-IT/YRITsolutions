import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import blogBanner from "../assets/blog.jpg";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ CRA uses REACT_APP_API_URL
  const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:3001";

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("🔍 Fetching blogs from:", `${API_BASE_URL}/api/blogs`);
        const res = await axios.get(`${API_BASE_URL}/api/blogs`);
        setBlogPosts(res.data);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [API_BASE_URL]);

  return (
    <div className="bg-black text-white font-sans px-4 py-10 md:px-20">
      {/* Section: Journey */}
      <section className="mb-32">
        <div className="flex flex-col-reverse md:flex-row items-start gap-20 lg:gap-24">
          <div className="md:w-1/2 text-center md:text-left pr-0 md:pr-12 lg:pr-16 pt-12 md:pt-20 lg:pt-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-white">
              OUR JOURNEY
            </h2>
            <p className="text-base sm:text-lg mb-6 text-gray-300 leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-400">
                YR IT SOLUTIONS
              </span>
              , our journey began with a simple yet powerful idea — to transform
              tech education into something truly practical, relevant, and
              career-focused.
            </p>
            <p className="text-base sm:text-lg mb-6 text-gray-300 leading-relaxed">
              We've grown from a small initiative to a trusted online platform,
              helping thousands gain real-world skills in{" "}
              <span className="text-blue-400 font-medium">Web Development</span>
              , <span className="text-blue-400 font-medium">UI/UX Design</span>,{" "}
              <span className="text-blue-400 font-medium">Data Science</span>,
              and{" "}
              <span className="text-blue-400 font-medium">Cybersecurity</span>.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              More than just training — we help learners become confident,
              job-ready professionals.
            </p>
          </div>

          <div className="md:w-1/2 pl-0 md:pl-12 lg:pl-16 mt-8 md:mt-12">
            <img
              src={blogBanner}
              alt="Our Journey Illustration"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto object-contain"
            />
          </div>
        </div>
      </section>

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
                    src={post.image ? `${API_BASE_URL}${post.image}` : blogBanner}
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
                    {post.content.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-sm text-gray-400 font-medium flex items-center group-hover:text-gray-300 transition-colors duration-300">
                      ✍ {post.author}
                    </span>
                    <Link
                      to={`/blogs/${post._id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-300 flex items-center group-hover:scale-110 transform"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
