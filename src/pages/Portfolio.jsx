import React, { useEffect, useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/law.png';
import project4 from '../assets/project4.png';
import { Link } from 'react-router-dom';

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

const projects = [
  {
    title: "Anshul Architect – Architecture Portfolio",
    description:
      "A modern, responsive architecture portfolio website designed for Anshul Architect. Built with performance and aesthetics in mind, this website showcases architectural projects with high-resolution visuals, intuitive navigation, and a clean layout. It emphasizes user experience and SEO-friendly practices such as fast load time, mobile optimization, and semantic HTML. Ideal for showcasing commercial and residential architecture services online.",
    link: "https://anshularchitects.org/",
    image: project1,
    category: "Architecture"
  },
  {
    title: "Interior Design Studio – Creative Showcase",
    description:
      "A visually captivating website tailored for an interior design studio. This fully responsive platform highlights elegant layouts, premium design aesthetics, and smooth scrolling animations. It effectively presents services, past work, and client testimonials—making it an ideal tool for lead generation in the home decor and interior styling industry.",
    link: "https://www.teekshagupta.com/",
    image: project2,
    category: "Architecture"
  },
  {
    title: "Law Firm – Legal Services Website",
    description:
      "A professional website designed for a legal consultancy. It features a formal color palette, structured layout, and clearly defined service sections. Includes appointment booking, service highlights, and client testimonials. Developed with accessibility and SEO optimization for ranking in legal service queries.",
    link: "https://www.aggarwallegalfirm.com/",
    image: project3,
    category: "Legal Firms"
  },
  {
    title: "Law Firm – Legal Services Website",
    description:
      "Modern legal services website offering expert legal advice, case support, and consultation. Designed for law firms and attorneys to showcase services with a clean, professional look. Mobile-friendly & fast-loading.",
    link: "https://law-v2.vercel.app/",
    image: project4,
    category: "Legal Firms"
  },
  {
    title: "All India Chamber of Commerce",
    description:
      "Modern business chamber website showcasing national initiatives, events, and member services. Designed for All India Chamber of Commerce to highlight trade support, policy advocacy, and networking. Sleek, responsive layout with fast performance and easy content management.",
    link: "https://aicee-main.vercel.app/",
    image:"/images/image 17.jpg",
    category: "Government Official Websites"
  },
  {
    title: "Istiyaq Facility",
    description:
      "Modern interior design website for Istiyaq Facility, showcasing premium design services and transformations. Built to highlight creativity, expertise, and client success. Sleek visuals, responsive layout, and fast-loading experience for users seeking beautiful, functional spaces they'll love.",
    link: "https://istyaqfacility.netlify.app/",
    image:"/images/image18.jpg",
    category: "Architecture"
  },
  {
    title: "Swarattan Homes",
    description:
      "Modern website for Swarattan Homes, showcasing premium interior design expertise and elegant home makeovers. Built to reflect their modern aesthetic and attention to detail. Clean design, seamless responsiveness, and optimized performance for clients seeking stylish, functional living spaces they'll love.",
    link: "https://www.swarattanhomes.in/",
    image:"/images/image19.jpg",
    category: "Ecommerce"
  },
  {
    title: "Friends Baker - Artisan Bakery",
    description:
      "A delightful bakery website showcasing fresh-baked goods, artisan breads, and custom cakes. Features an elegant design with mouth-watering visuals, online ordering system, and seamless user experience. Perfect for showcasing bakery products and driving local business growth.",
    link: "https://friends-baker-flax.vercel.app/",
    image:"/images/Friends Baker - Artisan Bakery.png",
    category: "Bakery"
  },
  {
    title: "eKnowledge - Educational Platform",
    description:
      "Comprehensive educational and government services platform designed to provide knowledge resources, training programs, and official information. Features modern UI/UX design, responsive layout, and user-friendly navigation for seamless learning and information access.",
    link: "https://eknowledge.vercel.app/",
    image:"/images/eKnowledge - Educational Platform.png",
    category: ["Education", "Government Official Websites"]
  },
  {
    title: "BPRPVTITI - Educational Institute",
    description:
      "Professional educational institute website showcasing academic programs, courses, and training opportunities. Built with modern design principles, responsive layout, and optimized performance to attract students and provide comprehensive information about educational services.",
    link: "https://bprpvtiti.vercel.app/v",
    image:"/images/BPRPVTITI - Educational Institute.png",
    category: "Education"
  },
  {
    title: "Dua Pharmacy - Online Healthcare Platform",
    description:
      "A comprehensive online pharmacy platform designed for Dua Pharmacy, offering convenient medicine ordering, prescription management, and healthcare products. Features a modern, user-friendly interface with secure payment processing, medicine search functionality, and trusted healthcare services. Built to provide reliable pharmaceutical services with competitive pricing and fast delivery.",
    link: "#",
    image: "/images/dua pharmacy.png",
    category: "Healthcare & Pharmacy"
  }
];

const categories = ["All", "Architecture", "Legal Firms", "Healthcare & Pharmacy", "Bakery", "Government Official Websites", "Education", "Ecommerce"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(selectedCategory);
        }
        return project.category === selectedCategory;
      }));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="pt-16 mb-12">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-pulse">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Crafting Digital Excellence, One Project at a Time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Category Filter Buttons */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-200">
          Explore by Category
        </h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25 scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-600/50 backdrop-blur-sm"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{categoryIcons[category]}</span>
                <span className="text-sm md:text-base">{category}</span>
              </div>
              {selectedCategory === category && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              )}
            </button>
          ))}
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
     
      {/* Projects Count Display */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600/30">
          <span className="text-2xl">{categoryIcons[selectedCategory]}</span>
          <p className="text-lg text-gray-300 font-medium">
            {filteredProjects.length} {selectedCategory === "All" ? "Projects" : `${selectedCategory} Projects`}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12">
                {/* Content Section */}
                <div className={`w-full lg:w-1/2 z-10 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.category) ? (
                        project.category.map((cat, idx) => (
                          <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30">
                            {categoryIcons[cat]} {cat}
                          </span>
                        ))
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30">
                          {categoryIcons[project.category]} {project.category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    View Project 🚀
                  </a>
                </div>

                {/* Image Section */}
                <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
