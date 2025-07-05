import { useState } from 'react'
import MyComponent from './bg';
import Typing from './typ';
import Navigation from './nav';
import AboutSection from './About';
import Icons from './Icons';
import './App.css'

function App() {
  

  return (
    <>
     <Navigation/>
      <MyComponent/>
       <Typing/>
       <AboutSection/>
       <Icons/>
    </>
  )
}

export default App
