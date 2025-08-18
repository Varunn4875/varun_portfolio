import { useState } from 'react'
import Typing from './typ';
import Navigation from './nav';
import AboutSection from './About';
import Icons from './Icons';
import './App.css'

function App() {
  

  return (
    <>
     <Navigation/>
       <Typing/>
       <AboutSection/>
       <Icons/>
    </>
  )
}

export default App
