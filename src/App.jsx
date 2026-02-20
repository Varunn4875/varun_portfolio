import Typing from './typ';
import Navigation from './nav';
import { useEffect, useState } from 'react'
import AboutSection from './About';
import Icons from './Icons';
import Contact from './Contact';
import './App.css'
import './Projects'
import Projects from './Projects';
import Snowfall from 'react-snowfall';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
     <Navigation theme={theme} onToggleTheme={toggleTheme}/>
     <Snowfall color='#2a6df6'
     snowflakeCount={50}
     speed={[0,5,2]}
     wind={[0,1]}
     radius={[0,5,3]}/>
       <Typing/>
       <AboutSection/>
       <Icons/>
       <Projects/>
       <Contact/>
      
    </>
  )
}

export default App
