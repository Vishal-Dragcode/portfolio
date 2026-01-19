import React, { useState, useEffect } from "react";
import { Send, X } from "lucide-react";
import useTheme from '../hook/useTheme';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-500 translate-x-0 ${
        type === 'success' ? 'bg-green-900/80 border border-green-500/50' : 'bg-red-900/80 border border-red-500/50'
      }`}
    >
      <div className={`flex items-center ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
        <div className="flex-shrink-0 mr-3">
          {type === 'success' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )}
        </div>
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-white focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    serviceInterest: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Theme-based styles
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextClass = theme === 'dark' ? 'text-gray-500' : 'text-gray-600';
  const inputBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const inputBorderClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-300';
  const inputFocusBorderClass = theme === 'dark' ? 'focus:border-gray-700' : 'focus:border-gray-400';
  const inputPlaceholderClass = theme === 'dark' ? 'placeholder-gray-600' : 'placeholder-gray-500';
  const inputTextClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const selectTextClass = theme === 'dark' ? 'text-gray-600' : 'text-gray-700';
  const buttonBgClass = theme === 'dark' ? 'bg-orange-500 text-black' : 'bg-orange-500 text-black';
  const buttonHoverClass = theme === 'dark' ? 'hover:bg-gray-200' : 'hover:bg-gray-800';
  const dropdownArrowColor = theme === 'dark' ? '%236b7280' : '%234b5563';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setToastMessage('Your message has been sent successfully!');
      setToastType('success');
      setShowToast(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        timeline: '',
        serviceInterest: '',
        projectDetails: ''
      });
    } catch (error) {
      setToastMessage('Something went wrong. Please try again.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showToast && (
        <Toast 
          message={toastMessage} 
          type={toastType} 
          onClose={() => setShowToast(false)} 
        />
      )}
      
      <div className={`min-h-screen ${bgClass} flex items-center justify-center px-4 py-6`} id="contact">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-3xl font-bold mb-4 text-[#ff6a00]">
              Contact me
            </h1>
            <p className={subTextClass}>Cultivating Connections: Reach Out And Connect With Me</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${inputTextClass} ${inputPlaceholderClass} focus:outline-none ${inputFocusBorderClass} transition-all`}
                  placeholder="Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${inputTextClass} ${inputPlaceholderClass} focus:outline-none ${inputFocusBorderClass} transition-all`}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${inputTextClass} ${inputPlaceholderClass} focus:outline-none ${inputFocusBorderClass} transition-all`}
                  placeholder="Phone Number"
                />
              </div>

              {/* Service Interest Dropdown */}
              <div>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${selectTextClass} focus:outline-none ${inputFocusBorderClass} transition-all appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${dropdownArrowColor}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  <option value="" disabled>Service Of Interest</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Timeline Input */}
            <div>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${inputTextClass} ${inputPlaceholderClass} focus:outline-none ${inputFocusBorderClass} transition-all`}
                placeholder="Timeline"
              />
            </div>

            {/* Project Details Textarea */}
            <div>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="6"
                className={`w-full px-4 py-3 ${inputBgClass} ${inputBorderClass} rounded-lg ${inputTextClass} ${inputPlaceholderClass} focus:outline-none ${inputFocusBorderClass} transition-all resize-none`}
                placeholder="Project Details..."
              ></textarea>
            </div>

            {/* Submit Button - Aligned Right */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${buttonBgClass} font-medium py-3 px-8 rounded-lg ${buttonHoverClass} transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;