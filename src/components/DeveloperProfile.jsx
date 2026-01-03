import React, { useState, useEffect } from "react";
import { Code, Database, Server, Layers, Zap, GitBranch, Globe } from "lucide-react";

export default function About() {
  const [aboutSectionVisible, setAboutSectionVisible] = useState(false);

  useEffect(() => {
    setAboutSectionVisible(true);
  }, []);

  const skills = [
    { 
      icon: Code, 
      label: "React.js & Next.js", 
      color: "from-blue-500 to-cyan-500",
      description: "Building interactive UIs with hooks, state management, and server-side rendering for optimal performance."
    },
    { 
      icon: Server, 
      label: "Node.js & Express", 
      color: "from-green-500 to-emerald-500",
      description: "Creating robust RESTful APIs, middleware implementation, and scalable server architecture."
    },
    { 
      icon: Database, 
      label: "MongoDB & PostgreSQL", 
      color: "from-purple-500 to-pink-500",
      description: "Designing efficient database schemas, implementing complex queries, and optimizing data retrieval."
    },
    { 
      icon: Layers, 
      label: "Full-Stack Architecture", 
      color: "from-orange-500 to-red-500",
      description: "Architecting end-to-end solutions with seamless integration between frontend and backend systems."
    },
    { 
      icon: Zap, 
      label: "RESTful & GraphQL APIs", 
      color: "from-yellow-500 to-orange-500",
      description: "Developing efficient API endpoints with proper error handling, authentication, and data validation."
    },
    { 
      icon: GitBranch, 
      label: "Git & CI/CD Pipelines", 
      color: "from-indigo-500 to-purple-500",
      description: "Implementing version control workflows and automated deployment pipelines for continuous delivery."
    },
    { 
      icon: Globe, 
      label: "Cloud Deployment", 
      color: "from-teal-500 to-blue-500",
      description: "Deploying applications on AWS, Azure, and GCP with proper configuration and monitoring."
    },
  ];

  // Duplicate skills array for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className=" bg-black text-white relative" id="about">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* About Section */}
      <div className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`transform transition-all duration-1000 ${aboutSectionVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-3xl font-bold mb-4 text-[#ff6a00]">
                About me
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${aboutSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 mb-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-200">
                  I'm a <span className="text-[#ff6a00] font-semibold">MERN Stack Developer</span> from <span className="text-[#ff6a00] font-semibold">Pune, India</span>, passionate about building scalable, high-performance web applications that solve real-world problems.
                </p>
                <p className="text-gray-200">
                  I specialize in architecting <span className="text-[#ff6a00] font-semibold">full-stack applications</span> using MongoDB, Express.js, React.js, and Node.js—creating seamless user experiences backed by robust server-side logic and efficient database management.
                </p>
                <p className="text-gray-200">
                  My expertise spans <span className="text-[#ff6a00] font-semibold">modern frontend frameworks</span> like React.js and Next.js, <span className="text-[#ff6a00] font-semibold">RESTful and GraphQL APIs</span>, state management with Redux and Context API, and <span className="text-[#ff6a00] font-semibold">responsive UI/UX design</span> that delivers exceptional user engagement.
                </p>
                <p className="text-gray-200">
                  On the backend, I build <span className="text-[#ff6a00] font-semibold">scalable Node.js applications</span> with Express, implement secure authentication systems (JWT, OAuth), integrate payment gateways, and optimize database queries for maximum performance across MongoDB, PostgreSQL, and MySQL.
                </p>
                <p className="text-gray-200">
                  I'm proficient in <span className="text-[#ff6a00] font-semibold">DevOps practices</span>—deploying applications on AWS, Azure, and Google Cloud Platform, containerizing with Docker, implementing CI/CD pipelines with GitHub Actions and Jenkins, and ensuring production-grade reliability through comprehensive testing and monitoring.
                </p>
                <p className="text-gray-200">
                  Beyond traditional development, I integrate <span className="text-[#ff6a00] font-semibold">cutting-edge technologies</span> including real-time communication with WebSockets and Socket.io, third-party API integrations, microservices architecture, and performance optimization techniques that ensure applications scale effortlessly.
                </p>
                <p className="text-gray-200 font-semibold text-xl mt-8">
                  I don't just write code—I engineer solutions that transform ideas into impactful digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid - Horizontal Scrolling with Loop */}
          <div className={`transform transition-all duration-1000 delay-500 ${aboutSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-10 text-[#ff6a00] ">
              Core Expertise
            </h2>
            
            {/* Horizontal Scrolling Container */}
            <div className="relative w-full overflow-hidden">
              {/* Gradient masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20  z-10"></div>
              
              {/* Scrolling Track */}
              <div className="flex overflow-x-auto scrollbar-hide py-4" 
                   style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: { display: 'none' } }}>
                <div className="flex animate-scroll gap-6" onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                  {duplicatedSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 min-w-[320px] hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer border border-gray-700/50 hover:border-cyan-500/50"
                      >
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                          {skill.label}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}