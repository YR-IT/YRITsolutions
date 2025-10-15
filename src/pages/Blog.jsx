import React, { useEffect, useState } from "react";

import {
  Clock,
  User,
  ArrowRight,
  Calendar,
  BookOpen,
  Tags,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const BlogPage = () => {
  const { isDarkMode } = useTheme();
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
        const response = await fetch('https://yrmainbackend.vercel.app/api/product/getblogs');
        const data = await response.json();
        setBlogPosts(data);
        setRecentPosts(data.slice(0, 5));
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
      <div className={`min-h-screen flex flex-col items-center justify-center theme-bg-primary theme-text-secondary transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-black to-black' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}>
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
      <div className={`min-h-screen theme-bg-primary theme-text-primary transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-slate-900 via-black to-black text-white' 
          : 'bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-900'
      }`}>
        {/* Hero Section */}
        <div className="relative h-[70vh] sm:h-[60vh] w-full">
          <img
            src={selectedArticle.image || blogBanner}
            alt={selectedArticle.title}
            className="w-full h-full object-cover brightness-50"
          />

          {/* Back Button */}
          <div className="absolute top-4 left-8 z-10">
            <button
              onClick={backToBlog}
              className={`flex items-center gap-2 font-medium px-4 py-2 rounded-full backdrop-blur-sm shadow-md transition ${
                isDarkMode 
                  ? 'bg-white/90 text-gray-900 hover:bg-white/70' 
                  : 'bg-gray-900/90 text-white hover:bg-gray-900/70'
              }`}
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back
            </button>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className={`backdrop-blur-md rounded-3xl p-8 max-w-4xl text-center shadow-xl ${
              isDarkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <span className={`inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full shadow-sm ${
                isDarkMode 
                  ? 'bg-cyan-500/80 text-white' 
                  : 'bg-cyan-600 text-white'
              }`}>
                Featured Article
              </span>
              <h1 className={`text-xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedArticle.title}
              </h1>
              <div className={`flex flex-wrap justify-center items-center gap-4 mt-6 text-sm font-medium ${
                isDarkMode ? 'text-slate-200' : 'text-gray-700'
              }`}>
                <div className="flex items-center gap-1">
                  <User className={`w-4 h-4 ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                  }`} />
                  {selectedArticle.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className={`w-4 h-4 ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-600'
                  }`} />
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
            </div>
          </div>
        </div>

       <section className="max-w-4xl mx-auto px-4 py-12">
  <article
    className={`prose prose-lg md:prose-xl max-w-none leading-relaxed text-justify ${
      isDarkMode ? 'prose-invert' : 'prose-gray'
    }`}
    style={{
      wordBreak: "break-word",
      textWrap: "pretty",
    }}
    dangerouslySetInnerHTML={{ __html: formattedContent }}
  />
</section>
      </div>
    );
  }

  return (
    <div className={`min-h-screen theme-bg-primary theme-text-primary transition-all duration-300 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-black to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900'
    }`}>
      {/* Hero Heading */}
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
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Insights, tutorials, and industry knowledge from our expert team
          </p>
        </motion.div>

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Articles */}
          <div className="lg:col-span-3 space-y-10">
            {blogPosts.map((post) => (
              <div
                key={post._id}
                className={`backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="relative">
                  <img
                    src={post.image || blogBanner}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className={`text-2xl font-bold mb-4 leading-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h2>
                  <p className={`text-base leading-relaxed mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.content?.substring(0, 180)}...
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className={`flex items-center space-x-6 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                      <div className="flex items-center space-x-2">
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
                      <div className="flex items-center space-x-2">
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
                    className={`py-2 px-5 rounded-lg font-semibold transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-cyan-600/20 to-pink-600/20 border border-cyan-500/30 text-white' 
                        : 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white border border-transparent hover:shadow-lg'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
<div className="lg:col-span-1">
  {/* Sticky wrapper */}
  <aside className="space-y-8 sticky top-24 self-start">
    {/* Contact Box */}
    <div className={`backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-white/5 border border-white/10' 
        : 'bg-white/80 border border-gray-200 shadow-lg'
    }`}>
      <h3 className={`text-lg font-bold mb-3 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        FEEL FREE TO TEXT & <br /> GET ALL THE ANSWERS YOU NEED
      </h3>
      <p className={`text-sm mb-4 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        We are a clock-knit team of 100+ developers to transform your
        business with enhanced tech capabilities.
      </p>
      <a href="/contactus">
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-full font-medium hover:bg-cyan-600 transition">
          ASK A QUESTION
        </button>
      </a>
    </div>

    {/* Recent Posts */}
    <div className={`backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-white/5 border border-white/10' 
        : 'bg-white/80 border border-gray-200 shadow-lg'
    }`}>
      <h3 className={`text-xl font-bold mb-6 flex items-center space-x-2 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <BookOpen className={`w-6 h-6 ${
          isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
        }`} />
        <span>Recent Posts</span>
      </h3>
      <div className="space-y-6">
        {recentPosts.map((post) => (
          <div
            key={post._id}
            className="group cursor-pointer"
            onClick={() => openArticle(post)}
          >
            <h4 className={`font-medium leading-tight mb-2 transition-colors duration-300 ${
              isDarkMode 
                ? 'text-white group-hover:text-cyan-400' 
                : 'text-gray-900 group-hover:text-cyan-600'
            }`}>
              {post.title}
            </h4>
            <div className={`h-px mt-4 ${
              isDarkMode ? 'bg-white/10' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center space-x-4 text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className="flex items-center space-x-1">
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
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Popular Topics */}
    <div className={`backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-white/5 border border-white/10' 
        : 'bg-white/80 border border-gray-200 shadow-lg'
    }`}>
      <h3 className={`text-xl font-bold mb-4 flex items-center space-x-2 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <Tags className={`w-5 h-5 ${
          isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
        }`} />
        <span>Popular Topics</span>
      </h3>
      <div className="flex flex-col gap-3">
        {["Design", "Tech", "AI", "Business", "Startups"].map((topic) => (
          <span
            key={topic}
            className={`w-full text-sm font-medium px-4 py-2 rounded-full transition text-center cursor-pointer ${
              isDarkMode 
                ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40' 
                : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
            }`}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  </aside>
</div>



        </div>
      </div>
    </div>
  );
};

export default BlogPage;