import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    type: 'founder',
    bio: 'Visionary leader with 15+ years in tech. Former VP at Google, passionate about building products that change the world.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Strategic Planning', 'Product Vision', 'Leadership', 'Fundraising'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@techcorp.com'
    },
    location: 'San Francisco, CA',
    joinedDate: '2020-01-01'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    type: 'founder',
    bio: 'Full-stack architect with deep expertise in scalable systems. Previously built infrastructure at Stripe and Uber.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['System Architecture', 'Cloud Infrastructure', 'Team Building', 'Open Source'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'marcus@techcorp.com'
    },
    location: 'Austin, TX',
    joinedDate: '2020-01-01'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Head of Design',
    type: 'employee',
    bio: 'Creative problem-solver who believes great design is invisible. Former design lead at Airbnb with a passion for user-centered experiences.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['UX/UI Design', 'Design Systems', 'User Research', 'Prototyping'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@techcorp.com'
    },
    location: 'New York, NY',
    joinedDate: '2021-03-15'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Senior Software Engineer',
    type: 'employee',
    bio: 'Backend specialist who loves solving complex problems. Contributor to multiple open-source projects and performance optimization expert.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Backend Development', 'Database Design', 'API Architecture', 'DevOps'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'david@techcorp.com'
    },
    location: 'Seattle, WA',
    joinedDate: '2021-06-01'
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Head of Marketing',
    type: 'employee',
    bio: 'Growth hacker turned marketing strategist. Built and scaled marketing teams at three successful startups from seed to IPO.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Growth Marketing', 'Brand Strategy', 'Content Creation', 'Analytics'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'aisha@techcorp.com'
    },
    location: 'Los Angeles, CA',
    joinedDate: '2021-09-12'
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Product Manager',
    type: 'employee',
    bio: 'Product strategist with a knack for turning complex ideas into simple, delightful user experiences. Former PM at Microsoft.',
    image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Product Strategy', 'User Analytics', 'Agile Methodologies', 'Stakeholder Management'],
    social: {
      linkedin: '#',
      email: 'james@techcorp.com'
    },
    location: 'Chicago, IL',
    joinedDate: '2022-02-28'
  }
];

const TeamMemberCard = ({ member, index }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up ${
        isDarkMode 
          ? 'bg-gray-900 border border-gray-800' 
          : 'bg-white border border-gray-200'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Founder badge */}
      {member.type === 'founder' && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow">
            FOUNDER
          </span>
        </div>
      )}

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity duration-500 ${
          isDarkMode ? 'from-black/80 to-transparent' : 'from-gray-900/60 to-transparent'
        }`} />
        
        {/* Social icons overlay */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {member.social.github && (
            <a href={member.social.github} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600/80 hover:scale-110 transition-all duration-300">
              <Github size={18} />
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600/80 hover:scale-110 transition-all duration-300">
              <Linkedin size={18} />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600/80 hover:scale-110 transition-all duration-300">
              <Twitter size={18} />
            </a>
          )}
          {member.social.email && (
            <a href={`mailto:${member.social.email}`} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600/80 hover:scale-110 transition-all duration-300">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {member.name}
          </h3>
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
            {member.role}
          </p>
        </div>

        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {member.bio}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {member.skills.slice(0, 3).map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`text-xs px-2 py-1 rounded-md border transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-900/50 text-blue-300 border-blue-800/50 hover:bg-blue-800/50' 
                    : 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200'
                }`}
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 3 && (
              <span className={`text-xs px-2 py-1 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                +{member.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className={`flex items-center justify-between text-xs pt-4 border-t ${
          isDarkMode 
            ? 'text-gray-400 border-gray-800' 
            : 'text-gray-500 border-gray-200'
        }`}>
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
  const [animationComplete, setAnimationComplete] = useState(false);
  const founders = teamMembers.filter(member => member.type === 'founder');
  const employees = teamMembers.filter(member => member.type === 'employee');

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${
          isDarkMode 
            ? 'from-blue-900/20 via-black to-black' 
            : 'from-blue-100/30 via-white to-white'
        }`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 animate-fade-in ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4">
              Amazing Team
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} style={{ animationDelay: '300ms' }}>
            We're a diverse group of passionate individuals united by our mission to build 
            extraordinary products that make a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 animate-fade-in-up ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ animationDelay: '600ms' }}>
              Our Founders
            </h2>
            <p className={`max-w-2xl mx-auto animate-fade-in-up ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} style={{ animationDelay: '700ms' }}>
              The visionaries who started it all, bringing years of experience and 
              an unwavering commitment to innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-16 backdrop-blur-sm border-y transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/30 border-gray-800' 
          : 'bg-gray-100/30 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 animate-fade-in-up ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ animationDelay: '900ms' }}>
              Our Team
            </h2>
            <p className={`max-w-2xl mx-auto animate-fade-in-up ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} style={{ animationDelay: '1000ms' }}>
              Talented professionals from around the world, each bringing unique perspectives 
              and expertise to help us achieve our goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '1300ms' }}>
            We're always looking for passionate, talented individuals who share our vision 
            and want to make a meaningful impact.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;