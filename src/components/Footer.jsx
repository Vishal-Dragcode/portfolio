import React from "react";
import { Github, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="mailto:vishallodhe444@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-orange-500 transition">Home</a>
            <a href="#about" className="text-gray-400 hover:text-orange-500 transition">About</a>
            <a href="#resume" className="text-gray-400 hover:text-orange-500 transition">Resume</a>
            <a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition">Portfolio</a>
          </div>
        </div>
        
        {/* Copyright and Email */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 mb-2">vishallodhe444@gmail.com</p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Vishal Lodhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;