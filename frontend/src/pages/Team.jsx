import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    skills: ['Frontend Web Developer', 'React.JS', 'Tailwind CSS'],
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
    id: 5,
    name: 'Anant Gambhir',
    role: 'Web Developer',
    type: 'employee',
    bio: 'Full-stack developer and game developer experienced in both 2D and 3D projects. Skilled in app and website development, covering both front-end and back-end solutions. Passionate problem-solver and researcher who thrives on making things happen. Currently learning automation to enhance my skill set.',
    image: '/team/Anant.jpg',
    skills: ['Full Stack Developer '],
    social: { linkedin: '#', email: 'james@techcorp.com' },
    location: 'Rohtak, Haryana',
    joinedDate: '2025-08-15'
  },
  {
    id: 6,
    role: 'Web Developer',
    name: 'Aryan Kumar',
    type: 'employee',
    bio: "I'm recent btech graduate from rd engineering college",
    image: '/team/aryan.png',
    skills: ['Mern Stack'],
    social: { linkedin: '#', email: 'james@techcorp.com' },
    location: 'Remote',
    joinedDate: '2025-08-6'
  },
  {
    id: 7,
    role: 'Web Developer',
    name: 'Vineet Singh',
    type: 'employee',
    bio: "I am a passionate Frontend Developer with hands-on experience in building modern, responsive, and user-friendly web applications. Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, and responsive web design, I specialize in creating intuitive user interfaces with a strong focus on UI/UX principles. ",
    image: '/team/vineetSingh.jpg',
    skills: ['HTML' , 'CSS' , 'JavaScript' , 'React.js' , 'Tailwind' ,'CSS' , 'responsive', 'web design' ],
    social: { linkedin: '#', email: 'james@techcorp.com' },
    location: 'Remote',
    joinedDate: '2025-08-6'
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
      className={`group relative z-0 min-w-0 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-blue-500/20 animate-fade-in-up ${
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
      <div className="relative z-10 h-56 sm:h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 relative z-20">
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
          <div className="flex min-w-0 items-center gap-1">
            <MapPin size={12} />
            <span className="truncate">{member.location}</span>
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
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl text-center">
          <h1
            className={`mb-5 text-4xl font-bold leading-tight sm:text-5xl md:mb-6 md:text-6xl ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Meet Our
            <span className="mt-1 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent sm:mt-0 md:inline md:ml-4">
              Amazing Team
            </span>
          </h1>
          <p
            className={`mx-auto max-w-3xl text-base leading-relaxed sm:text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We're a diverse group of passionate individuals united by our mission to build
            extraordinary products that make a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Founders */}
        <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="mb-10 text-center sm:mb-16">
      <h2
        className={`mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Our Founder
      </h2>
      <p
        className={`mx-auto max-w-2xl text-base sm:text-lg ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        The visionaries who started it all, bringing years of experience and an
        unwavering commitment to innovation.
      </p>
    </div>

    {/* Two-column layout */}
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      {/* Left - Founder Card */}
      <div className="flex justify-center">
        {founders.map((member, index) => (
          <div key={member.id} className="w-full max-w-md">
            <TeamMemberCard member={member} index={index} />
          </div>
        ))}
      </div>

      {/* Right - Quotes / Vision */}
      <div className="space-y-5 border-t border-gray-700 pt-8 lg:space-y-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <h3
          className={`text-2xl font-bold leading-snug sm:text-3xl ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Building the{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Future of Web Development
          </span>
        </h3>

        <p
          className={`text-base leading-relaxed sm:text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          “At{" "}
          <span className="font-semibold text-blue-500">YR IT Solutions</span>,
          we believe technology should empower businesses, not limit them.”
        </p>

        <p
          className={`text-base italic leading-relaxed sm:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          “Our mission is to craft user-centric, scalable, and future-ready
          solutions that help companies thrive in the digital world.”
        </p>

        <p
          className={`text-base leading-relaxed sm:text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          With innovation at our core, we’re committed to transforming bold
          ideas into powerful realities.
        </p>

        {/* Call-to-action */}
        <div>
          <Link to="/aboutus" className="inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* Team */}
      <section className={`border-y py-14 backdrop-blur-sm sm:py-16 ${isDarkMode ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/30 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className={`mb-4 text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Team
            </h2>
            <p className={`mx-auto max-w-2xl text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Talented professionals from around the world, each bringing unique perspectives and expertise to help us achieve our goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {employees.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-14 sm:py-20">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-bold text-white sm:mb-6 sm:text-4xl">
            Want to Join Our Team?
          </h2>
          <p className="mb-7 text-base text-blue-100 sm:mb-8 sm:text-xl">
            We're always looking for passionate, talented individuals who share our vision and want to make a meaningful impact.
          </p>
          <a
            href="https://www.linkedin.com/in/yashika-sharma1775?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-blue-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};
export default TeamPage;