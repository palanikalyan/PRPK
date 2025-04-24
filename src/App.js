import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import VideoBackground from './components/videobg';

// Import different background videos
import IntroVideo from './assets/bg.mp4';
import AboutVideo from './assets/bg.mp4';
import ProjectsVideo from './assets/bg.mp4';
import AchievementsVideo from './assets/bg.mp4';
import ContactVideo from './assets/bg.mp4';

function App() {
  const [currentSection, setCurrentSection] = useState('introduction');
  
  // Function to determine which video to show based on scroll position
  const handleScroll = () => {
    const sections = ['introduction', 'about', 'projects', 'achievements', 'contact'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      // If the section is currently in view (more than halfway visible)
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setCurrentSection(section);
        break;
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Map sections to their respective videos
  const sectionVideos = {
    introduction: IntroVideo,
    about: AboutVideo,
    projects: ProjectsVideo,
    achievements: AchievementsVideo,
    contact: ContactVideo
  };
  
  // Map sections to their overlay colors if you want different overlays
  const sectionOverlays = {
    introduction: 'rgba(10, 25, 47, 0.85)',
    about: 'rgba(10, 25, 47, 0.85)',
    projects: 'rgba(10, 25, 47, 0.85)',
    achievements: 'rgba(10, 25, 47, 0.85)',
    contact: 'rgba(10, 25, 47, 0.85)'
  };

  return (
    <div className="App">
      {/* Video background changes based on current section */}
      <VideoBackground 
        videoSrc={sectionVideos[currentSection]} 
        overlayColor={sectionOverlays[currentSection]} 
      />
      
      <Navbar />
      
      <Element name="introduction" id="introduction">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Introduction />
        </motion.div>
      </Element>
      
      <Element name="about" id="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
      </Element>
      
      <Element name="projects" id="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Projects />
        </motion.div>
      </Element>
      
      <Element name="achievements" id="achievements">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Achievements />
        </motion.div>
      </Element>
      
      <Element name="contact" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.div>
      </Element>
    </div>
  );
}

export default App;