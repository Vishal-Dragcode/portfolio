import React, { useState, useEffect } from "react";
import { MessageCircle, Linkedin } from "lucide-react";

const SocialButtons = () => {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(true);
  const [showLinkedInTooltip, setShowLinkedInTooltip] = useState(true);
  const [pulse, setPulse] = useState(true);

  // Hide tooltips after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppTooltip(false);
      setShowLinkedInTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Pulse animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919511256761`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(`https://www.linkedin.com/in/vishal-lodhe-126631265/`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button - Top */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* WhatsApp Tooltip */}
        {showWhatsAppTooltip && (
          <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg shadow-lg transform transition-all duration-500 animate-fade-in">
            <div className="relative">
              Chat with me on WhatsApp
              <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800"></div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className={`relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${pulse ? 'animate-pulse' : ''}`}
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>
        </button>

        {/* Hover Effect Circle */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 -z-10 transform scale-0 hover:scale-150 transition-transform duration-500"></div>
      </div>

      {/* LinkedIn Button - Bottom */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* LinkedIn Tooltip */}
        {showLinkedInTooltip && (
          <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg shadow-lg transform transition-all duration-500 animate-fade-in">
            <div className="relative">
              Connect with me on LinkedIn
              <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800"></div>
            </div>
          </div>
        )}

        {/* LinkedIn Button */}
        <button
          onClick={handleLinkedInClick}
          className={`relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${pulse ? 'animate-pulse' : ''}`}
          aria-label="Connect on LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
          
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping"></span>
        </button>

        {/* Hover Effect Circle */}
        <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 -z-10 transform scale-0 hover:scale-150 transition-transform duration-500"></div>
      </div>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default SocialButtons;