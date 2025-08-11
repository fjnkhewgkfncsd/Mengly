import './App.css'
import Lanyard from './components/Lanyard/Lanyard.jsx'
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Skills from './components/skills.jsx';
import Education from './components/education.jsx';
import Work from './components/work.jsx';
import Project from './components/projects.jsx';
import Contact from './components/Contact.jsx'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className='dark:text-white dark:bg-[#171c27]'>
      <Header />
      <div className='pt-[100px]'>
        <Home />
      </div>
      <Skills />
      <Education />
      <Work />
      <Project />
      <Contact />
    </div>
  )
}

export default App
