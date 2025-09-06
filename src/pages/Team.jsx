import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const teamMembers = [
  {
    id: 1,
    name: 'Yashika ',
    role: 'Founder',
    type: 'founder',
    bio: 'Visionary leader with 15+ years in tech. Former VP at Google, passionate about building products that change the world.',
    image: '/team/founder.jpg',
    skills: ['Strategic Planning', 'Product Vision', 'Leadership', 'Fundraising'],
    social: { linkedin: '#', twitter: '#', email: 'sarah@techcorp.com' },
    location: 'kurukshetra ',
    joinedDate: '2020-01-01'
  },
  {
    id: 2,
    name: 'Harshit Sharma',
    role: 'Full Stack Developer',
    type: 'employee',
    bio: 'Web Developer | Passionate about building responsive, user-friendly, and scalable web applications.',
    image: '/team/harshit.jpg',
    skills: ['Web Developer', 'React.JS', 'Tailwind CSS'],
    social: { linkedin: '#', twitter: '#', email: 'emily@techcorp.com' },
    location: 'Ghaziabad',
    joinedDate: '2025-09-02'
  },
  {
    id: 3,
    name: 'Vishal Singh',
    role: 'Frontend Developer',
    type: 'employee',
    bio: 'Passionate frontend developer skilled in creating modern, responsive, and user-friendly web application, strong background in React.js, JavaScript, HTML, CSS and Tailwind CSS with experience in building e-learning platform.',
    image: '/team/vishalSingh.jpg',
    skills: ['Tailwind CSS', 'JavaScript', 'React.JS','HTML', 'CSS', 'Responsive Web Design'],
    social: { github: '#', linkedin: '#', email: 'vishalathwal2003@gmail.com' },
    location: 'Varanasi Uttar Pradesh, India ',
    joinedDate: '2025-07-31'
  },
  {
    id: 4,
    name: 'Hanumant Pradip Uphade',
    role: 'Web Developer',
    type: 'employee',
    bio: 'Enthusiastic Web Developer with a solid foundation in HTML, CSS, JavaScript, and ReactJS for frontend development. Proficient in NodeJS, ExpressJs, and MongoDB for backend solutions.',
    image: '/team/Hanumant.jpg',
    skills: ['MongoDB', 'HTML', 'Express.JS', 'Tailwind CSS', 'Node.JS', 'CSS', 'React.JS'],
    social: { linkedin: '#', twitter: '#', email: 'aisha@techcorp.com' },
    location: 'Latur (Maharashtra)',
    joinedDate: '2025-06-02'
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Product Manager',
    type: 'employee',
    bio: 'Product strategist with a knack for turning complex ideas into simple, delightful user experiences. Former PM at Microsoft.',
    image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Product Strategy', 'User Analytics', 'Agile Methodologies', 'Stakeholder Management'],
    social: { linkedin: '#', email: 'james@techcorp.com' },
    location: 'Chicago, IL',
    joinedDate: '2022-02-28'
  }
];

const TeamMemberCard = ({ member, index }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleSkills = showAllSkills ? (member.skills || []) : (member.skills || []).slice(0, 3);

  return (
    <div
      className={`group relative z-0 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up ${
        isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Founder badge */}
      {member.type === 'founder' && (
        <div className="absolute top-4 right-4 z-30">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow">
            FOUNDER
          </span>
        </div>
      )}

      {/* Glow effect */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative z-10 h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <div className="mb-4">
          <h3
            className={`text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {member.name}
          </h3>
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
            {member.role}
          </p>
        </div>

        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {showFullBio ? member.bio : member.bio.slice(0, 100)}
          {member.bio.length > 100 && (
            <button
              type="button"
              onClick={() => setShowFullBio(!showFullBio)}
              className="ml-2 text-blue-500 hover:underline"
            >
              {showFullBio ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>

        {/* Skills */}
        <div className="mb-4 flex flex-wrap gap-1">
          {visibleSkills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className={`text-xs px-2 py-1 rounded-md border transition-colors ${
                isDarkMode
                  ? 'bg-blue-900/50 text-blue-300 border-blue-800/50'
                  : 'bg-blue-100 text-blue-700 border-blue-200'
              }`}
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllSkills(!showAllSkills)}
              className={`text-xs px-2 py-1 rounded-md border font-medium ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-300 border-gray-700'
                  : 'bg-gray-100 text-gray-600 border-gray-300'
              }`}
            >
              {showAllSkills ? 'Show Less' : `+${member.skills.length - 3} more`}
            </button>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between text-xs pt-4 border-t ${
            isDarkMode ? 'text-gray-400 border-gray-800' : 'text-gray-500 border-gray-200'
          }`}
        >
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{member.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>Since {new Date(member.joinedDate).getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const { isDarkMode } = useTheme();
  const founders = teamMembers.filter(m => m.type === 'founder');
  const employees = teamMembers.filter(m => m.type === 'employee');

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Meet Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4">
              Amazing Team
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We're a diverse group of passionate individuals united by our mission to build
            extraordinary products that make a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2
        className={`text-4xl font-extrabold tracking-tight mb-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Our Founder
      </h2>
      <p
        className={`max-w-2xl mx-auto text-lg ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        The visionaries who started it all, bringing years of experience and an
        unwavering commitment to innovation.
      </p>
    </div>

    {/* Two-column layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Left - Founder Card */}
      <div className="flex justify-center">
        {founders.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>

      {/* Right - Quotes / Vision */}
      <div className="space-y-6 md:pl-6 border-l border-gray-700">
        <h3
          className={`text-3xl font-bold leading-snug ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Building the{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Future of Web Development
          </span>
        </h3>

        <p
          className={`text-lg leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          “At{" "}
          <span className="font-semibold text-blue-500">YR IT Solutions</span>,
          we believe technology should empower businesses, not limit them.”
        </p>

        <p
          className={`text-lg italic leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          “Our mission is to craft user-centric, scalable, and future-ready
          solutions that help companies thrive in the digital world.”
        </p>

        <p
          className={`text-lg leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          With innovation at our core, we’re committed to transforming bold
          ideas into powerful realities.
        </p>

        {/* Call-to-action */}
        <div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* Team */}
      <section className={`py-16 backdrop-blur-sm border-y ${isDarkMode ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/30 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Team
            </h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Talented professionals from around the world, each bringing unique perspectives and expertise to help us achieve our goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for passionate, talented individuals who share our vision and want to make a meaningful impact.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            type="button"
          >
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;