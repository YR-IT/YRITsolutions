import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../pages/admin/api/blogApi";
import { Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default banner
  const blogBanner =
    "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 
            bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 
            bg-clip-text text-transparent drop-shadow-lg">
            ✨ Latest Articles
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and industry knowledge from our expert team
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Featured Article */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.slice(0, 1).map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="h-72 relative">
                    <img
                      src={post.image || blogBanner}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {post.content?.substring(0, 200)}...
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-600/20 to-pink-600/20 hover:from-cyan-600/40 hover:to-pink-600/40 border border-cyan-500/30 hover:border-pink-400/60 text-white py-2 px-5 rounded-lg font-semibold transition-all duration-500"
                    >
                      <span className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Recent Posts Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">📖 Recent Posts</h3>
                <div className="space-y-6">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post._id} className="border-b border-white/10 pb-4 last:border-0">
                      <h4 className="text-white font-medium mb-2 line-clamp-2 hover:text-cyan-400 transition">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 gap-3">
                        <Clock className="w-3 h-3" />
                        <span>3 min read</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
