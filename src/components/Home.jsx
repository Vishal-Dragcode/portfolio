import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code2, Download, Menu, X } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = "MERN Stack Developer | AWS Basics";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    
    const timer = setInterval(() => {
      if (!isDeleting && index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else if (!isDeleting && index > fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && index > 0) {
        setTypedText(fullText.slice(0, index));
        index--;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" bg-black text-white relative" id="home">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-orange-500">VL</span>
            <span className="text-white">.dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#home" className="text-orange-500 hover:text-orange-400 transition text-sm xl:text-base">
              Home
            </a>
            <a href="#about" className="hover:text-orange-500 transition text-sm xl:text-base">
              About
            </a>
            <a href="#Resume" className="hover:text-orange-500 transition text-sm xl:text-base">
              Resume
            </a>
            <a href="#portfolio" className="hover:text-orange-500 transition text-sm xl:text-base">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-orange-500 transition text-sm xl:text-base">
              Contact me
            </a>
          </div>

          {/* Desktop Hire Me Button */}
          <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 px-4 xl:px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 text-sm xl:text-base">
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-95 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#home"
                className="block text-orange-500 hover:text-orange-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block hover:text-orange-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#Resume"
                className="block hover:text-orange-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="#portfolio"
                className="block hover:text-orange-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block hover:text-orange-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact me
              </a>
              <button className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition mt-2">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-gray-400 text-base sm:text-lg">Hi I am</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Vishal Lodhe
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-orange-500 min-h-[2.5rem] sm:min-h-[3rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 pt-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                >
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
                <button className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <span>Hire Me</span>
                </button>
                <button className="border-2 border-gray-600 hover:border-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8">
                <div className="bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">1+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">5+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Projects Done</p>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">2+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-96 xl:h-[28rem] max-w-md rounded-full border-4 border-orange-500 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden shadow-2xl flex items-center justify-center order-1 lg:order-2">
              <div className="absolute inset-0 rounded-full ring-4 ring-orange-500/30 animate-pulse"></div>
              <img
                src="../../public/image/vishal.png"
                alt="Vishal Profile Photo"
                className="w-full h-full object-cover object-center rounded-full scale-105"
              />
              <div className="absolute inset-0 bg-black/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}