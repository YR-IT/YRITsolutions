import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../pages/admin/api/blogApi";
import { Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Floating Stars Background Component
const FloatingStars = () => {
  const stars = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {stars.map((_, i) => {
        const randomX = Math.random() * 100; // % value
        const randomY = Math.random() * 100; // % value
        const randomDelay = Math.random() * 10;
        const randomDuration = Math.random() * 15 + 10;

        return (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: `${randomY}%`, left: `${randomX}%` }}
            animate={{ y: [-20, -60], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          />
        );
      })}
    </div>
  );
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#001a12] to-black text-white overflow-hidden">
      {/* Floating Stars */}
      <FloatingStars />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        {/* Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and industry knowledge from our expert team
          </p>
        </motion.div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
            <p className="text-gray-400 mt-6 text-lg font-medium">
              Loading articles...
            </p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
              <p className="text-gray-400 text-xl font-medium">
                No articles yet. Check back soon for amazing content!
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post._id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="group relative bg-gradient-to-br from-green-600/10 to-teal-700/10 border border-green-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/30 hover:scale-[1.03] transition-all duration-500 flex flex-col h-full"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || blogBanner}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-green-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.content?.substring(0, 120)}...
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-auto w-fit bg-gradient-to-r from-green-600/20 to-teal-600/20 hover:from-green-600/40 hover:to-teal-600/40 border border-green-500/30 hover:border-green-400/60 text-white py-2 px-5 rounded-lg font-semibold transition-all duration-500 mx-auto">
  <span className="flex items-center justify-center gap-2">
    Read Article
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
  </span>
</button>

                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
