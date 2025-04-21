// src/App.js
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="introduction">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Introduction />
        </motion.div>
      </Element>

      <Element name="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
      </Element>

      <Element name="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Projects />
        </motion.div>
      </Element>

      <Element name="achievements">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Achievements />
        </motion.div>
      </Element>

      <Element name="contact">
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