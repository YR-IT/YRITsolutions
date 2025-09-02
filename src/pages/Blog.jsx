import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../pages/admin/api/blogApi";
import { Clock, User, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Image URLs from Pexels
  const blogBanner =
    "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-black text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Blogs Section */}
        <section>
        <motion.div
  className="mb-16 text-center pt-20" // ⬅️ adds spacing from navbar
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-5xl md:text-6xl font-extrabold mb-6 
    bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 
    bg-clip-text text-transparent drop-shadow-lg">
    ✨ Latest Articles
  </h2>

  <p className="text-gray-300 text-lg max-w-2xl mx-auto text-center leading-relaxed">
    Insights, tutorials, and industry knowledge from our expert team
  </p>
</motion.div>
>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500/30 border-b-pink-500 rounded-full animate-spin-reverse"></div>
              </div>
              <p className="text-gray-400 mt-6 text-lg font-medium">
                Loading articles...
              </p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-400 text-xl font-medium">
                  No articles yet. Check back soon for amazing content!
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-700 animate-gradient-x"></div>

                  {/* Card Content */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image || blogBanner}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                          {post.category || "Tech"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {post.content?.substring(0, 120)}...
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-2 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{post.author}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 group-hover:text-pink-400 transition-colors duration-300">
                          <Clock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-cyan-600/20 to-pink-600/20 hover:from-cyan-600/40 hover:to-pink-600/40 border border-cyan-500/30 hover:border-pink-400/60 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-500 backdrop-blur-sm"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Telepathy</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                INNOVATE. INSPIRE. IGNITE. We are a clock-knit team of 100+ developers to transform your business with enhanced tech capabilities.
              </p>
              <div className="bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl p-6 max-w-sm">
                <h4 className="text-white font-bold text-lg mb-2">
                  FEEL FREE TO TEXT & GET ALL THE ANSWERS YOU NEED
                </h4>
                <p className="text-blue-100 text-sm mb-4">
                  We are a clock-knit team of 100+ developers to transform your business with enhanced tech capabilities.
                </p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  ASK A QUESTION
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@telepathy.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© 2025 Telepathy. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
