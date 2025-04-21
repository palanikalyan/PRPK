import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Hero from '../assets/Hero.jpg';

const Introduction = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "AI Developer & Computer Science Educator";
  
  // Typewriter effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const typing = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      
      return () => clearTimeout(typing);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: '#fff',
    padding: '0 20px',
    position: 'relative',
    overflow: 'hidden',
  };

  const contentContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  };

  const textContentStyle = {
    flex: '1',
    textAlign: 'left',
    paddingRight: '2rem',
  };

  const imageContentStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const nameStyle = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: '300',
    height: '2.2rem', // Fixed height to prevent layout shift
    display: 'flex',
    alignItems: 'center',
  };

  const taglineStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    fontWeight: '400',
    letterSpacing: '1px',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const iconStyle = {
    fontSize: '1.8rem',
    color: '#fff',
    transition: 'all 0.3s ease',
  };

  const scrollDownStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  };

  const cursorStyle = {
    display: 'inline-block',
    width: '3px',
    height: '1.8rem',
    backgroundColor: isTypingComplete ? 'transparent' : '#64ffda',
    marginLeft: '4px',
    animation: 'blink 1s step-end infinite',
  };

  const profileImageStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    border: '4px solid #fff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  };

  // Media queries for responsive design
  const isMobile = window.innerWidth <= 768;
  
  // Adjust styles for mobile
  if (isMobile) {
    contentContainerStyle.flexDirection = 'column-reverse';
    textContentStyle.textAlign = 'center';
    textContentStyle.paddingRight = '0';
    textContentStyle.marginTop = '2rem';
    nameStyle.fontSize = '2.5rem';
    titleStyle.fontSize = '1.3rem';
    taglineStyle.fontSize = '1rem';
    socialLinksStyle.justifyContent = 'center';
    profileImageStyle.width = '200px';
    profileImageStyle.height = '200px';
  }

  return (
    <motion.section
      style={sectionStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={contentContainerStyle}>
        <motion.div 
          style={textContentStyle}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            style={nameStyle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Kalyanasundaram K
          </motion.h1>
          
          <motion.div 
            style={titleStyle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {text}
            <div style={cursorStyle}></div>
          </motion.div>
          
          <motion.p 
            style={taglineStyle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Innovative Developer | Passionate Educator | Lifelong Learner
          </motion.p>
          
          <motion.div 
            style={socialLinksStyle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#ffffff' }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#ffffff' }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a 
              href="mailto:email@example.com"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              marginTop: '2rem',
              padding: '0.8rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#64ffda',
              border: '1px solid #64ffda',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-3px)'
            }}
          >
            View My Work
          </motion.button>
        </motion.div>
        
        <motion.div 
          style={imageContentStyle}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <motion.img
              src= {Hero}// Replace with your image path
              alt="Kalyanasundaram K"
              style={profileImageStyle}
              whileHover={{ 
                boxShadow: '0 15px 35px rgba(100, 255, 218, 0.3)',
                border: '24px solid #64ffda' 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <Link to="about" smooth={true} duration={500} style={scrollDownStyle}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: '2rem' }}
        >
          ↓
        </motion.div>
      </Link>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.section>
  );
};

export default Introduction;