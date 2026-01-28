import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code2, Download, Menu, X, Sun, Moon } from "lucide-react";
import useTheme from '../hook/useTheme'; // Make sure the path is correct
import { generateResumePDF } from '../utils/generateResumePDF';

// ThemeToggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        color: theme === 'dark' ? 'white' : 'black'
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ?
        <Sun className="w-5 h-5 text-yellow-500" /> :
        <Moon className="w-5 h-5 text-gray-800" />
      }
    </button>
  );
};

export default function Home() {
  const { theme } = useTheme(); // Get the current theme
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
    let typingTimer;

    const typeText = () => {
      if (!isDeleting && index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
        typingTimer = setTimeout(typeText, 100);
      } else if (!isDeleting && index > fullText.length) {
        typingTimer = setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 2000);
      } else if (isDeleting && index > 0) {
        setTypedText(fullText.slice(0, index));
        index--;
        typingTimer = setTimeout(typeText, 50);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        typeText();
      }
    };

    typeText();

    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <div className="relative" id="home" style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff', color: theme === 'dark' ? '#ffffff' : '#000000' }}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-orange-500">VL</span>
            <span className={theme === 'dark' ? "text-white" : "text-black"}>.dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            <a href="#home" className="text-orange-500 hover:text-orange-400 transition text-sm xl:text-base">
              Home
            </a>
            <a href="#about" className={`hover:text-orange-500 transition text-sm xl:text-base ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              About
            </a>
            <a href="#Resume" className={`hover:text-orange-500 transition text-sm xl:text-base ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Resume
            </a>
            <a href="#contact" className={`hover:text-orange-500 transition text-sm xl:text-base ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Contact me
            </a>

            {/* Theme Toggle Button - Desktop */}
            <ThemeToggle />

            {/* Desktop Hire Me Button */}
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 px-4 xl:px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 text-sm xl:text-base"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t" style={{ backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.95)', borderColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}>
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
                className={`block hover:text-orange-500 transition py-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#Resume"
                className={`block hover:text-orange-500 transition py-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="#portfolio"
                className={`block hover:text-orange-500 transition py-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className={`block hover:text-orange-500 transition py-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact me
              </a>

              {/* Theme Toggle Button - Mobile */}
              <div className="flex justify-center py-2">
                <ThemeToggle />
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition mt-2"
              >
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Vishal Lodhe
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-orange-500 min-h-[2.5rem] sm:min-h-[3rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 pt-4">
                <a
                  href="https://github.com/Vishal6563"
                  className="p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                  style={{ backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-lodhe-126631265/"
                  className="p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                  style={{ backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                </a>
                <a
                  href="https://github.com/Vishal6563"
                  className="p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                  style={{ backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}
                >
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                </a>
                <a
                  href="mailto:vishallodhe444@gmail.com"
                  className="p-2 sm:p-3 rounded-full hover:bg-orange-500 transition transform hover:scale-110"
                  style={{ backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Hire Me</span>
                </button>
                <button
                  onClick={generateResumePDF}
                  className="border-2 hover:border-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 text-sm sm:text-base"
                  style={{
                    borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
                    color: theme === 'dark' ? 'white' : 'black'
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8">
                <div
                  className="p-3 sm:p-4 rounded-lg border hover:border-orange-500 transition"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb'
                  }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">1+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
                </div>
                <div
                  className="p-3 sm:p-4 rounded-lg border hover:border-orange-500 transition"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb'
                  }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">15+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Projects Done</p>
                </div>

              </div>
            </div>

            {/* Profile Photo */}
            <div
              className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-96 xl:h-[28rem] max-w-md rounded-full border-4 border-orange-500 overflow-hidden shadow-2xl flex items-center justify-center order-1 lg:order-2"
              style={{ background: theme === 'dark' ? 'linear-gradient(to bottom right, #374151, #111827)' : 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)' }}
            >
              <div className="absolute inset-0 rounded-full ring-4 ring-orange-500/30 animate-pulse"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGiw-UFhGb4QQ/profile-displayphoto-shrink_800_800/B4DZu1w_dUJUAc-/0/1768281078481?e=1770249600&v=beta&t=sL44covDngTTc96Pt3qpvGOWXj8t43FyCLnXYM6lbWw"  // Updated path - make sure this matches your public folder structure
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