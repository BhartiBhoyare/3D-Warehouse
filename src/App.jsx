import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Shear from './components/Shear'
import Brands from './components/Brands'
import SketchUp from './components/SketchUp'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Shear/>
      <Brands/>
      <SketchUp/>
      <Footer/>
    </div>
  )
}

export default App
