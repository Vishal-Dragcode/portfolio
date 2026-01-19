import React from "react";
import { BookOpen, Briefcase, Code, Award, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import useTheme from '../hook/useTheme';

const Resume = () => {
  const { theme } = useTheme();
  
  const skills = [
    { name: "Problem Solving", percentage: 90 },
    { name: "React.js & Next.js", percentage: 90 },
    { name: "Node.js & Express.js", percentage: 85 },
    { name: "Git And GitHub", percentage: 100 },
    { name: "MongoDB & SQL", percentage: 80 },
    { name: "Docker", percentage: 70 },
    { name: "Java", percentage: 50 },
    { name: "Jenkins/CodeBuild", percentage: 60 },
    { name: "Amazon Web Services", percentage: 70 }
  ];

  // Theme-based styles
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBgClass = theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/80';
  const borderClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-300';
  const timelineClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-400';
  const subTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const paragraphClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const progressBarBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300';
  const techBadgeBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200';
  const techBadgeText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`${bgClass} ${textClass}`} id="Resume">
      <div className="w-full px-8 lg:px-16 xl:px-24 py-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4 text-[#ff6a00]">
            Resume
          </h1>
        </div>

        {/* Summary */}
        <div className={`mb-16 ${cardBgClass} ${borderClass} rounded-2xl p-8`}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Award className="text-yellow-500" />
            Professional Summary
          </h2>
          <p className={`${paragraphClass} leading-relaxed text-lg`}>
            MERN Stack Developer with 1+ year of hands-on experience in building scalable and responsive web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in API integration, state management with Redux Toolkit, and writing clean, maintainable code while collaborating effectively in team-driven environments.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-yellow-500" />
            Experience
          </h2>

          <div className={`relative pl-8 border-l-2 ${timelineClass}`}>
            {/* Timeline Dot */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Junior Software Developer
              </h3>
              <p className={`${subTextClass} mb-2`}>Skramby Technology</p>
              <p className="text-yellow-500 font-semibold mb-6">Jan 2025 – Present</p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className={paragraphClass}>Developed and maintained scalable web applications using MERN stack and Next.js with focus on performance, SEO, and responsive UI.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className={paragraphClass}>Built reusable React components, integrated REST APIs, and managed state using Redux Toolkit to deliver smooth user experiences.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span className={paragraphClass}>Collaborated with cross-functional teams to implement features, resolve bugs, and improve application quality following best coding practices.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-yellow-500" />
            Featured Projects
          </h2>

          <div className={`${cardBgClass} ${borderClass} rounded-2xl p-8`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">
                Women Empowering Management
              </h3>
              <a 
                href="https://womanej.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
            <p className={`${subTextClass} mb-2 font-semibold`}>E-commerce Application</p>
            
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span className={paragraphClass}>Developed a full-stack e-commerce web application using Next.js, Node.js, Express.js, and MongoDB.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span className={paragraphClass}>Implemented product listing, user authentication, cart management, and order workflow with REST API integration.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span className={paragraphClass}>Focused on responsive UI, performance optimization, and scalable backend architecture.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-yellow-500" />
            Education
          </h2>

          <div className={`relative pl-8 border-l-2 ${timelineClass}`}>
            {/* First Education Entry */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-2">
                Bachelor of Engineering (B.E.)
              </h3>
              <p className={`${subTextClass} mb-2`}>Computer Engineering</p>
              <p className={`${subTextClass} mb-2`}>Shree Chhatrapati Shivaji Maharaj College of Engineering, Ahilyanagar</p>
              <p className="text-yellow-500 font-semibold mb-3">2019 – 2023</p>
              <p className={paragraphClass}>(CGPA: 7.55 with 1st class with distinction)</p>
            </div>

            {/* Second Education Entry */}
            <div className="absolute -left-2 top-40 w-4 h-4 bg-yellow-500 rounded-full"></div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-2">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className={`${subTextClass} mb-2`}>Maharashtra State Board</p>
              <p className="text-yellow-500 font-semibold">2019</p>
            </div>

            {/* Third Education Entry */}
            <div className="absolute -left-2 top-64 w-4 h-4 bg-yellow-500 rounded-full"></div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">
                Secondary School Certificate (SSC)
              </h3>
              <p className={`${subTextClass} mb-2`}>Maharashtra State Board</p>
              <p className="text-yellow-500 font-semibold">2017</p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Technical Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <p className={`${paragraphClass} leading-relaxed`}>
                Strong full-stack development expertise using React.js, Next.js, Node.js, and Express.js with seamless frontend–backend integration.
              </p>
            </div>
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <p className={`${paragraphClass} leading-relaxed`}>
                Hands-on experience in designing and developing RESTful APIs using MVC architecture and managing data with MongoDB and SQL databases.
              </p>
            </div>
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <p className={`${paragraphClass} leading-relaxed`}>
                Skilled in building responsive, performance-optimized, and user-friendly web applications using modern UI frameworks and best coding practices.
              </p>
            </div>
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <p className={`${paragraphClass} leading-relaxed`}>
                Proficient in Git/GitHub for version control and collaborative development in agile environments.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12">My Skills</h2>
          <div className={`${cardBgClass} ${borderClass} rounded-2xl p-8`}>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className={`text-lg font-semibold ${subTextClass}`}>{skill.percentage}%</span>
                  </div>
                  <div className={`w-full ${progressBarBg} rounded-full h-3 overflow-hidden`}>
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Technologies & Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Material Design", "React.js", "Next.js", "Angular"].map((tech, i) => (
                  <span key={i} className={`${techBadgeBg} px-3 py-1 rounded-full text-sm ${techBadgeText}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "SQL", "MySQL", "PostgreSQL"].map((tech, i) => (
                  <span key={i} className={`${techBadgeBg} px-3 py-1 rounded-full text-sm ${techBadgeText}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${cardBgClass} ${borderClass} rounded-xl p-6`}>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "REST APIs", "MVC Architecture", "Docker", "AWS"].map((tech, i) => (
                  <span key={i} className={`${techBadgeBg} px-3 py-1 rounded-full text-sm ${techBadgeText}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;