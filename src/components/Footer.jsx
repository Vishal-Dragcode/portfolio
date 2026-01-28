import React from "react";
import { Github, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";
import useTheme from '../hook/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  // Theme-based styles
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const linkClass = theme === 'dark' ? 'text-gray-400 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500';
  const borderClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-300';
  const emailClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const copyrightClass = theme === 'dark' ? 'text-gray-500' : 'text-gray-500';
  const iconBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200';
  const iconHoverClass = 'hover:bg-orange-500';
  const iconColorClass = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <footer className={`${bgClass} ${textClass} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/Vishal6563"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBgClass} p-3 rounded-full ${iconHoverClass} transition transform hover:scale-110`}
            >
              <Github className={`w-5 h-5 ${iconColorClass}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-lodhe-126631265/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBgClass} p-3 rounded-full ${iconHoverClass} transition transform hover:scale-110`}
            >
              <Linkedin className={`w-5 h-5 ${iconColorClass}`} />
            </a>
            <a
              href="https://www.instagram.com/_vishal_lodhe_/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBgClass} p-3 rounded-full ${iconHoverClass} transition transform hover:scale-110`}
            >
              <Instagram className={`w-5 h-5 ${iconColorClass}`} />
            </a>
            <a
              href="mailto:vishallodhe444@gmail.com"
              className={`${iconBgClass} p-3 rounded-full ${iconHoverClass} transition transform hover:scale-110`}
            >
              <Mail className={`w-5 h-5 ${iconColorClass}`} />
            </a>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            <a href="#home" className={`${linkClass} transition`}>Home</a>
            <a href="#about" className={`${linkClass} transition`}>About</a>
            <a href="#Resume" className={`${linkClass} transition`}>Resume</a>
            <a href="#contact" className={`${linkClass} transition`}>Contact</a>
          </div>
        </div>

        {/* Copyright and Email */}
        <div className={`mt-8 pt-8 border-t ${borderClass} text-center`}>
          <p className={`${emailClass} mb-2`}>vishallodhe444@gmail.com</p>
          <p className={`${copyrightClass} text-sm`}>© {new Date().getFullYear()} Vishal Lodhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;