import React from "react";
import { Link } from "react-router-dom";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import blog from "../assets/blog.jpg";
import webDevelopment from "../assets/web-development.gif";
import dataScience from "../assets/data-analysis-animation-download-in-lottie-json-gif-static-svg-file-formats--analytics-logo-statistics-computing-pack-business-animations-3479081.gif";
import uiUx from "../assets/ui_ux.gif";
import mobileDev from "../assets/mobile_development2.gif";

const BlogPage = () => {
  
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Web Development in 2024",
      description: "Master modern web development with our comprehensive guide covering HTML, CSS, JavaScript, React, and Node.js. Learn the latest trends and best practices.",
      image: webDevelopment,
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      author: "YR IT Solutions Team"
    },
    {
      id: 2,
      title: "Data Science Fundamentals: From Beginner to Pro",
      description: "Explore the world of data science with Python, machine learning algorithms, and statistical analysis. Perfect for beginners starting their data journey.",
      image: dataScience,
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Data Science",
      author: "Vinay Sheoran"
    },
    {
      id: 3,
      title: "UI/UX Design Principles for Modern Applications",
      description: "Learn essential UI/UX design principles, user research methodologies, and prototyping techniques to create user-centered digital experiences.",
      image: uiUx,
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "UI/UX Design",
      author: "Isha"
    },
    {
      id: 4,
      title: "Mobile App Development: React Native vs Flutter",
      description: "Compare React Native and Flutter for cross-platform mobile development. Understand the pros, cons, and when to use each framework.",
      image: mobileDev,
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Mobile Development",
      author: "Sumit Kumar"
    },
    {
      id: 5,
      title: "Cybersecurity Essentials for Developers",
      description: "Essential cybersecurity practices every developer should know. From secure coding to threat modeling and vulnerability assessment.",
      image: cybersecurity,
      date: "Nov 20, 2024",
      readTime: "14 min read",
      category: "Cybersecurity",
      author: "Security Team"
    },
    {
      id: 6,
      title: "Career Transition: From Traditional IT to Modern Tech",
      description: "Success stories and strategies for transitioning from traditional IT roles to modern technology positions in web development and data science.",
      image: blog,
      date: "Nov 15, 2024",
      readTime: "6 min read",
      category: "Career Guide",
      author: "YR IT Solutions Team"
    }
  ];

  return (
    <div className="bg-black text-white font-sans px-4 py-10 md:px-20">
                    
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
                career-focused. What started as a modest initiative has now
                evolved into a trusted online learning platform, empowering
                thousands of learners across the country to gain the skills they
                need to succeed in today's fast-paced digital world.
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
                src={blog}
                alt="Our Journey Illustration"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto object-contain"
              />
            </div>
         </div>
       </section>

      
      <section className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Latest Articles
          </h2>
          <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and industry knowledge from our expert trainers and team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card bg-gray-900 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group border border-gray-800 hover:border-blue-500/50 transform hover:-translate-y-2 hover:scale-105">
              
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-black/80 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              
              <div className="p-6 relative">
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                
                <div className="flex items-center text-sm text-gray-400 mb-3 relative z-10">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="mx-2 text-blue-400">•</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 relative z-10">
                  {post.title}
                </h3>

                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  {post.description}
                </p>

                
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-sm text-gray-400 font-medium flex items-center group-hover:text-gray-300 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {post.author}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-300 flex items-center group-hover:scale-110 transform">
                    Read more 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </article>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/20 hover:border-blue-400/40">
            <span className="flex items-center justify-center">
              Load More Articles
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      
      <section className="mb-20">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-white">
           Meet Our Expert Trainers
         </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              src: trainer1,
              name: "Vinay Sheoran",
              role: "Senior Data Science Trainer",
              desc: "Ex-Data Scientist at Flipkart & Publicis Re:Sources, with 8+ years of expertise in Machine Learning, Artificial Intelligence, and Big Data Analytics.",
            },
            {
              src: trainer3,
              name: "Sumit Kumar",
              role: "Web Development Instructor",
              desc: "Former Full Stack Developer at DRDO & PwC. Expert in React.js, Node.js, database design, and scalable web architecture.",
            },
            {
              src: trainer2,
              name: "Isha",
              role: "UI/UX Design Specialist",
              desc: "Professional Designer at MAAC with 6+ years of experience in creating user-centric interfaces, visual design systems, and responsive mobile/web UI.",
            },
          ].map((trainer, index) => (
                         <div
               key={index}
               className="bg-gray-900 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group border border-gray-800 hover:border-blue-500/50 transform hover:-translate-y-2 hover:scale-105 p-6 text-center"
             >
               <div className="w-full h-72 sm:h-80 bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                 <img
                   src={trainer.src}
                   alt={`${trainer.name} - ${trainer.role}`}
                   className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               <h3 className="text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300 mb-2">
                 {trainer.name}
               </h3>
               <p className="text-sm text-blue-400 mb-3">{trainer.role}</p>
               <p className="mt-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{trainer.desc}</p>
             </div>
          ))}
        </div>
      </section>

             
       <section className="bg-gray-900 py-16 px-4 sm:px-6 rounded-xl text-center shadow-2xl border border-gray-800">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
           🚨 Cybersecurity Course Launching Soon!
         </h2>
         <p className="text-base sm:text-lg max-w-3xl mx-auto mb-4 text-gray-300">
           As the digital world rapidly evolves, the need for strong
           cybersecurity has never been greater. Our upcoming{" "}
           <strong className="text-blue-400">Cybersecurity Training Program</strong> is designed to equip
           you with the skills to defend networks, secure data, and perform
           ethical hacking with confidence.
         </p>
         <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6 text-gray-300">
           Learn from certified security analysts and gain exposure to real-world
           threats, penetration testing, and defense strategies. Stay tuned and
           secure your future in the booming cybersecurity industry.
         </p>
         <div className="h-56 sm:h-72 bg-gray-800 rounded-lg mb-4 mx-auto w-full max-w-3xl overflow-hidden hover:scale-105 transition-transform duration-500 border border-gray-700">
           <img
             src={cybersecurity}
             alt="Cybersecurity Course"
             className="w-full h-full object-cover"
           />
         </div>
       </section>

             
       <div className="text-center mt-12">
         <Link
           to="/contactus"
           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-full text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/20 hover:border-blue-400/40 font-semibold"
         >
           Join Our Training Programs Today
         </Link>
       </div>
    </div>
  );
};

export default BlogPage;
