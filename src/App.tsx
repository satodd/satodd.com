import React from 'react'

import './App.css'

import Footer from './components/Footer'
import SEO from './components/SEO'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import CurrentProjects from './components/CurrentProjects'

function App () {
  return (
    <>
      <SEO />
      <Hero />
      <CurrentProjects />
      <Technologies />
      <Footer />
    </>
  )
}

export default App
