import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { API_BASE_URL } from '../config/api';

// Category icons mapping
const categoryIcons = {
  "All": "🌟",
  "Architecture": "🏗️",
  "Legal Firms": "⚖️",
  "Healthcare & Pharmacy": "🏥",
  "Bakery": "🍰",
  "Government Official Websites": "🏛️",
  "Education": "📚",
  "Ecommerce": "🛒"
};

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDescription = (projectIndex) => {
    setExpandedDescriptions((current) => ({
      ...current,
      [projectIndex]: !current[projectIndex],
    }));
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/product/getportfolio`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProjects(data);
        const allCategories = ["All", ...new Set(data.map(p => p.category).flat())];
        setCategories(allCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    setFilteredProjects(projects.filter(project => {
      const matchesCategory = selectedCategory === "All" || (
        Array.isArray(project.category)
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      );
      const matchesSearch = !normalizedQuery || [
        project.title,
        project.description,
        ...(Array.isArray(project.category) ? project.category : [project.category]),
      ].some(value => String(value || '').toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesSearch;
    }));
  }, [selectedCategory, searchQuery, projects]);

  return (
    <div className={`min-h-screen px-6 py-12 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className="pt-16 mb-12">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 ${isLoading ? 'animate-pulse' : ''}`}>
            Our Portfolio
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Crafting Digital Excellence, One Project at a Time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Portfolio Search and Filter */}
      <div className="mx-auto mb-12 max-w-4xl">
        <h3 className={`mb-5 text-center text-xl font-semibold md:text-2xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Find a Project
        </h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className={`min-w-0 flex-1 rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-purple-500 ${isDarkMode ? 'border-gray-700 bg-gray-900/80 text-white placeholder:text-gray-500' : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-400'}`}
          />
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Filter projects by category"
            className={`rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-purple-500 sm:min-w-52 ${isDarkMode ? 'border-gray-700 bg-gray-900/80 text-white' : 'border-gray-300 bg-white text-gray-900'}`}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center mb-16">
        <Link to="/contactUs">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              ✨ Let's Create Something Amazing
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Link>
      </div>
     

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="text-center">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => {
              const isDescriptionExpanded = Boolean(expandedDescriptions[index]);

              return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${isDarkMode ? 'bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 border border-gray-700/50 hover:border-purple-500/50' : 'bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80 border border-gray-200/50 hover:border-purple-400/50'}`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12">
                  {/* Content Section */}
                  <div className={`order-2 mt-8 w-full z-10 text-center lg:mt-0 lg:w-1/2 lg:text-left ${index % 2 === 0 ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                        {Array.isArray(project.category) ? (
                          project.category.map((cat, idx) => (
                            <span key={idx} className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r rounded-full text-sm font-medium border ${isDarkMode ? 'from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30' : 'from-blue-100/60 to-purple-100/60 text-blue-700 border-blue-300/50'}`}>
                              {categoryIcons[cat]} {cat}
                            </span>
                          ))
                        ) : (
                          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r rounded-full text-sm font-medium border ${isDarkMode ? 'from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30' : 'from-blue-100/60 to-purple-100/60 text-blue-700 border-blue-300/50'}`}>
                            {categoryIcons[project.category]} {project.category}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h2>
                    
                    <p className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDescriptionExpanded ? 'block' : 'hidden sm:block'} ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'}`}>
                      {project.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleDescription(index)}
                      className={`mb-6 rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors sm:hidden ${isDarkMode ? 'border-gray-600 text-blue-300 hover:bg-gray-800' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}`}
                      aria-expanded={isDescriptionExpanded}
                    >
                      {isDescriptionExpanded ? 'Read less' : 'Read more'}
                    </button>
                    
                    <div className="flex justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        View Project 🚀
                      </a>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`order-1 w-full lg:mt-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:mt-0' : 'lg:order-1 lg:mt-0'}`}>
                    <div className="relative group/image">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`relative rounded-2xl w-full h-64 lg:h-80 shadow-2xl transform transition-all duration-500 group-hover:scale-105 border border-gray-600/50 group-hover:border-purple-500/50 ${
                            project.title.includes("Friends Baker") || project.title.includes("Dua Pharmacy") ? "object-contain bg-white" : "object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;