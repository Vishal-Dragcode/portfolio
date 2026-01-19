import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import DeveloperProfile from './components/DeveloperProfile.jsx'
import Footer from './components/Footer.jsx'
import ContactSection from './components/Contactsection.jsx'
import Resume from './components/Resume.jsx'
import WhatsAppButton from './components/Whatsapp.jsx'
import ThemeProvider from './context/ThemeContext.jsx'

function App() {
  return (
    <>
    <ThemeProvider>
      <Home />
      <WhatsAppButton />
      <DeveloperProfile />
      <Resume />
      <ContactSection />
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
