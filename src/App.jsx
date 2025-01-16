import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Footer from './components/Footer/Footer.jsx'



function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <Hero />
      <Programs />
      <Footer />
    </div>
  )
}

export default App
