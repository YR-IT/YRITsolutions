import React from 'react'
import { motion } from "framer-motion";

const dev = [
  {
    name: "M. Sharma",
    role: "Senior Front-end Developer",
    experience: "10 Years of Experience",
    skills: ["JavaScript", "React", "HTML/CSS", "jQuery", "Vue.js", "Angular JS"],
    desc: "Experienced Front-end developer with 10 years of expertise in JavaScript, React, and CSS. Passionate about creating seamless, responsive user interfaces. Proven track record of delivering high-quality web applications for diverse industries. Focused on optimizing performance and enhancing user experience with modern development tools and best practices.",
    monthly: "$7000 Above",
    hourly: "$15 - $25",
    img: "/frontend/dev1.png",
  },
  {
    name: "Emily Johnson",
    role: "Senior Front-end Developer",
    experience: "12 Years of Experience",
    skills: ["TypeScript", "Angular JS", "Vue.js", "Next.js", "React.js"],
    desc: "Front-end developer with 12+ years of experience specializing in Angular, Vue, and TypeScript. Skilled in building dynamic and accessible web applications. Skilled at building dynamic and accessible web applications, with a strong background in UI/UX design.",
    monthly: "$8500 Above",
    hourly: "$15 - $25",
    img: "/frontend/dev2.png",
  },
  {
    name: "A. Verma",
    role: "Senior Front-end Developer",
    experience: "15 Years of Experience",
    skills: ["React JS", "HTML/CSS", "TypeScript", "Vue.js", "Next.js", "Angular JS"],
    desc: "With 15 years of experience in Front-end development, A. Verma excels in React, JavaScript, and HTML/CSS. Adept at turning design mockups into interactive, high-performance web pages.",
    monthly: "$9000 Above",
    hourly: "$15 - $25",
    img: "/frontend/dev3.png",
  },
  {
    name: "Hire Front-end Developer",
    role: "",
    experience: "10 years of Experience",
    skills: ["JavaScript", "React", "HTML/CSS", "jQuery", "Vue.js", "Angular JS"],
    desc: "Hire skilled front-end developers to build stunning and high-performance web applications tailored to your needs.  Adept at turning design mockups into interactive, high-performance web pages. Strong background in agile workflows and collaborating closely with cross-functional teams.",
    monthly: "$9000 Above",
    hourly: "$15 - $25",
    img: "/frontend/dev4.png",
  },
];

const data = [
  {
    logo : <svg  xmlns="http://www.w3.org/2000/svg"  width="56"  height="56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-automation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17 22l5 -3l-5 -3z" /></svg>,
    title: "Domain Knowledge",
    description: "While selecting front-end developers, it's vital to check their domain exposure. Developers with prior industry experience can apply best practices from different verticals and create customized solutions that enhance your project outcomes. Choosing professionals who understand your business environment ensures smoother workflows and helps resolve challenges effectively."
  },
  {
    logo: <svg  xmlns="http://www.w3.org/2000/svg"  width="56"  height="56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9.968 8.948" /><path d="M3.6 9h16.8" /><path d="M3.6 15h6.4" /><path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" /><path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" /><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" /></svg>,
    title: "Technical Proficiency",
    description: "Engaging front-end developers with strong technical expertise guarantees reliable web and progressive web app development. Skilled developers proficient in HTML, CSS, JavaScript, and modern frameworks like React ensure a seamless user interface that performs across devices. With access to a global pool of experts, you can evaluate candidates familiar with the latest tools and proven methodologies."
  },
  {
    logo: <svg  xmlns="http://www.w3.org/2000/svg"  width="56"  height="56"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-stars"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z" /><path d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /><path d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /></svg>,
    title: "Team Collaboration",
    description: "Its important to hire developers who can quickly adapt to your work culture and collaborate efficiently with your team. A structured hiring process allows you to onboard professionals with excellent communication and problem-solving abilities. Their capability to grasp your core product vision and contribute valuable insights keeps projects stable and goal-driven."
  },
  {
    logo : <svg  xmlns="http://www.w3.org/2000/svg"  width="56"  height="56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-filter-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.19 20.27l-2.19 .73v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>,
    title: "Geographical Alignment",
    description: "Considering the location and time zone of your front-end developers ensures smooth communication and higher productivity. Hiring within nearby time zones improves collaboration and project velocity, while offshore options allow cost optimization without sacrificing quality results. The right balance depends on your project requirements and budget model."
  },
  {
    logo : <svg  xmlns="http://www.w3.org/2000/svg"  width="56"  height="56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>,
    title: "Delivery & Cost Efficiency",
    description: "When bringing in front-end developers, it's crucial to align your budget and delivery timelines. Evaluating professionals with relevant expertise and proven track records helps ensure timely execution while staying cost-efficient. Look for developers with positive feedback regarding their ability to handle tight deadlines without compromising on quality."
  }
]


const FrontendCard = ({ dev }) => {
  return (
    <motion.div
      className="relative group bg-gradient-to-b from-blue-400 to-purple-800 
                 text-white p-6 w-full min-w-96 h-[480px] flex flex-col 
                 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none 
                 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}                 // hidden by default
      whileInView={{ opacity: 1, y: 0 }}              // animate when visible
      viewport={{ once: false, amount: 0.2 }}         // infinite repeat on scroll
      transition={{ duration: 0.4, ease: "easeOut" }} // smooth
    >
      {/* Profile */}
      <div className="flex items-center gap-4 mb-6 z-10">
        <img
          src={dev.img}
          alt={dev.name}
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="text-xl text-left font-bold">{dev.name}</h3>
          <p className="text-sm text-left">{dev.role}</p>
          <p className="text-xs text-left text-gray-200">{dev.experience}</p>
        </div>
      </div>

      {/* Skills */}
      {dev.skills.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6 z-10">
          {dev.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-white text-sm 
                         transition-all duration-300 ease-in-out 
                         hover:shadow-md hover:bg-gradient-to-r 
                         from-blue-400 to-purple-800 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-gray-200 mb-6 z-10">{dev.desc}</p>

      {/* Salary Info */}
      {(dev.monthly || dev.hourly) && (
        <div className="flex justify-between text-sm font-semibold 
                        border-t border-gray-300 pt-4 mt-auto z-10">
          <span>Monthly : {dev.monthly}</span>
          <span>Hourly : {dev.hourly}</span>
        </div>
      )}

      {/* Hover Layer Effect (old transition preserved) */}
      <div
        className="absolute left-0 bottom-0 w-full h-0 
                   bg-gradient-to-b from-black/70 to-purple-800 
                   rounded-2xl flex items-center justify-center flex-col 
                   text-center px-6 overflow-hidden 
                   transition-all duration-700 ease-in-out group-hover:h-full"
      />
    </motion.div>
  );
};

const EssentialCard = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="group relative bg-gradient-to-b from-blue-400 to-purpl-800 
                     text-white rounded-bl-2xl rounded-t-2xl p-6 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="w-28 h-28 flex items-center justify-center relative z-10">
            <div className="w-20 h-20 group-hover:animate-bounce">
              {item.logo}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-200 relative z-10">
            {item.description}
          </p>

          {/* Overlay Layer (old transition preserved) */}
          <div
            className="absolute left-0 bottom-0 w-full h-0 
                       bg-gradient-to-b from-black/70 to-purple-800 
                       rounded-2xl flex items-center justify-center flex-col 
                       text-center px-6 overflow-hidden 
                       transition-all duration-700 ease-in-out group-hover:h-full"
          />
        </motion.div>
      ))}
    </div>
  );
};




const HireFrontendDev = () => {
  return (
    <>
      <section className="relative pt-20 sm:pt-28 lg:pt-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 mt-4">
            Hire
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2 sm:ml-4">
              Front-end Developer
            </span>
          </h1>
          <div className="pt-8 sm:pt-12">
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              Hire Front-end developers from our global talent pool to meet your project needs.
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-2 leading-relaxed">
              Our Front-end developers have extensive experience creating captivating designs in HTML, CSS, JavaScript, and modern frameworks.
            </p>
          </div>

          
          
        </div>
      </section>
      {/* white div which conatin cards */}
      <div className='ml-56 mr-56 mt-24 p-16 rounded-3xl bg-white'>
        <div className= ' pt-12'>
          <h1 className='m-2 p-2 bg-black text-center font-bold text-6xl bg-clip-text text-transparent ml-2 sm:ml-4 '>Looking Front-End Developers?</h1>
          <h2
            className="text-6xl font-bold text-center 
            bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent"
          >
            Hire Best front-end developers today!
          </h2>




        </div>
        <div className='ml-28 mr-28 mt-8'>
          <p className='text-gray-700 text-center'>Get skilled front-end developers to create responsive, user-friendly, and high-performance web applications. </p>
          <p className='text-gray-700 text-center'>Our experts specialize in React, Angular, and Vue.js for seamless UI/UX. Tailored solutions to match your specific project requirements.</p>
          <p className='text-gray-700 text-center'>  Build stunning and interactive web experiences with our professionals!</p>
        </div>
        {/* Cards Section  frontend dev*/}
        <div className="m-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {dev.map((developer, idx) => (
              <FrontendCard key={idx} dev={developer} />
            ))}
          </div>
      </div>

      <div>
        <h1 className='m-4 pl-56 pr-56 pt-24 bg-white text-left font-bold text-6xl bg-clip-text  ml-2 sm:ml-4 '>Essential Factors for Choosing Front-end Developers</h1>
        <div className='m-4 pl-56 pr-56'>
          <p className='text-lg text-justify pt-4'  >When you hire front-end developers, it is important to find individuals who align with your technical needs, culture, and long-term goals. Our front-end web developers understand modern web technologies, design principles, and user experience. The developers should be able to collaborate effectively with designers and back-end developers. 
          </p>
          <p className='text-lg text-justify pt-4'>
            When evaluating potential front-end developers, it's also important to explore freelance talent who can bring flexibility and specialized expertise to your projects. Strong candidates should demonstrate exceptional problem-solving skills, meticulous attention to detail, and the ability to deliver quality work even under tight deadlines. Beyond technical proficiency, the hiring process should include thorough interviews and discussions to assess how well candidates communicate their ideas, adapt to challenges, and provide constructive input. This not only reveals their technical strengths but also highlights the creativity and value they can contribute to your team decision-making and overall project success.
          </p>
        </div>
        <div className="m-8 pl-56 pr-56">
          <EssentialCard data={data} />
        </div>
      </div>

    </>
  );
};

export default HireFrontendDev;
