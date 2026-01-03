import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import DeveloperProfile from './components/DeveloperProfile.jsx'
import Footer from './components/Footer.jsx'
import ContactSection from './components/Contactsection.jsx'
import Resume from './components/Resume.jsx'
import WhatsAppButton from './components/Whatsapp.jsx'

function App() {
  return (
    <>
      <Home />
      <WhatsAppButton />
      <DeveloperProfile />
      <Resume />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
