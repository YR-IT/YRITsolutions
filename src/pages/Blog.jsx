import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../pages/admin/api/blogApi";
import {
  Clock,
  User,
  ArrowRight,
  Calendar,
  BookOpen,
  Tags,
} from "lucide-react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentView, setCurrentView] = useState("blog");

  // Default banner
  const blogBanner =
    "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
        setBlogPosts(blogs);
        setRecentPosts(blogs.slice(0, 5));
      } catch (err) {
        console.error("❌ Error fetching blogs:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openArticle = (post) => {
    setSelectedArticle(post);
    setCurrentView("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToBlog = () => {
    setSelectedArticle(null);
    setCurrentView("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-black to-black text-gray-400">
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
        <p className="mt-6 text-lg font-medium">Loading articles...</p>
      </div>
    );
  }

  if (currentView === "article" && selectedArticle) {
    const formattedContent = selectedArticle.content
      ?.split(/\n+/)
      .filter((p) => p.trim() !== "")
      .map((para) => `<p>${para.trim()}</p>`)
      .join("")
      .replace(/<\/p><p>/g, "</p><p>&nbsp;</p><p>");

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-black text-white">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src={selectedArticle.image || blogBanner}
            alt={selectedArticle.title}
            className="w-full h-full object-cover brightness-50"
          />

          {/* Back Button */}
          <div className="absolute top-6 left-6 z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={backToBlog}
              className="flex items-center gap-2 bg-white/90 text-gray-900 hover:bg-white/70 font-medium px-4 py-2 rounded-full backdrop-blur-sm shadow-md transition"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back
            </motion.button>
          </div>

          {/* Hero Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-4xl text-center shadow-xl"
            >
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                {selectedArticle.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-300" />
                  {selectedArticle.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pink-400" />
                  {selectedArticle.date
                    ? new Date(selectedArticle.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "No date available"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Body */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="prose prose-invert prose-lg max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl font-extrabold mb-6 
            bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 
            bg-clip-text text-transparent drop-shadow-lg"
          >
            ✨ Latest Articles
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and industry knowledge from our expert team
          </p>
        </motion.div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Blog Section */}
          <div className="lg:col-span-2 space-y-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 25px rgba(0,255,255,0.2)",
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl transition-transform duration-500"
              >
                <div className="h-72 relative overflow-hidden">
                  <motion.img
                    src={post.image || blogBanner}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
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
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "No date"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => openArticle(post)}
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(to right, #06b6d4, #ec4899)",
                      boxShadow: "0px 0px 20px rgba(236,72,153,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-600/20 to-pink-600/20 border border-cyan-500/30 text-white py-2 px-5 rounded-lg font-semibold transition-all duration-500"
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

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8 sticky top-24 self-start">
            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <motion.div
                    key={post._id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-b border-white/10 pb-4 last:border-0 cursor-pointer group transition"
                    onClick={() => openArticle(post)}
                  >
                    <h4 className="text-white font-medium mb-2 line-clamp-2 group-hover:text-cyan-400 transition">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "No date"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Popular Topics */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Tags className="w-5 h-5 text-pink-400" />
                Popular Topics
              </h3>
              <div className="flex flex-col gap-2">
                {["Design", "Tech", "AI", "Business", "Startups"].map(
                  (topic) => (
                    <motion.span
                      key={topic}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full bg-cyan-500/20 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-cyan-500/40 transition text-center cursor-pointer relative overflow-hidden"
                    >
                      <span className="relative z-10">{topic}</span>
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
