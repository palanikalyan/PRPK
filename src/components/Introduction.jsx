import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Lottie from 'react-lottie';
import scrollAnimation from '../assets/lottie.json';
import Hero from '../assets/Hero.jpg';

const Introduction = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Array of texts to rotate through
  const textArray = [
    "AI Developer & Computer Science Educator",
    "Machine Learning Specialist",
    "Full Stack Developer"
  ];
  
  // Current text based on loop number
  const fullText = textArray[loopNum % textArray.length];
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Enhanced typewriter effect with looping
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Add one character
        setText(fullText.substring(0, text.length + 1));
        
        // If we've reached the end of the text
        if (text.length === fullText.length - 1) {
          // Pause before starting to delete
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100); // Normal typing speed
        }
      } else {
        // Remove one character
        setText(fullText.substring(0, text.length - 1));
        
        // If we've deleted everything
        if (text.length === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Pause before typing next phrase
        } else {
          setTypingSpeed(50); // Faster when deleting
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, fullText]);

  // Color scheme
  const colors = {
    primary: '#0a192f',       // Deep blue background
    secondary: '#64ffda',     // Teal accent
    highlight: '#8892b0',     // Light slate
    text: '#e6f1ff',          // Bright white
    gradient: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
  };

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    color: colors.text,
    padding: '0 20px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-70px',
  };

  const contentContainerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: isMobile ? 'column-reverse' : 'row',
    position: 'relative',
    zIndex: 2,
    marginTop: '70px',
  };

  const textContentStyle = {
    flex: '1',
    textAlign: isMobile ? 'center' : 'left',
    paddingRight: isMobile ? '0' : '2rem',
    marginTop: isMobile ? '2rem' : '0',
  };

  const imageContentStyle = {
    flex: isMobile ? '1' : '0.8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: isMobile ? 'auto' : '400px',
  };

  const nameStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    marginBottom: '1rem',
    fontWeight: '700',
    color: colors.text,
  };

  const titleStyle = {
    fontSize: isMobile ? '1.3rem' : '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: '300',
    height: '2.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-start',
    color: colors.secondary,
  };

  const taglineStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    marginBottom: '2rem',
    fontWeight: '400',
    letterSpacing: '1px',
    color: colors.highlight,
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '2rem',
    justifyContent: isMobile ? 'center' : 'flex-start',
  };

  const scrollDownStyle = {
    position: 'absolute',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.secondary,
    zIndex: 2,
  };

  const cursorStyle = {
    display: 'inline-block',
    width: '3px',
    height: '1.8rem',
    backgroundColor: colors.secondary,
    marginLeft: '4px',
    animation: 'blink 1s step-end infinite',
  };

  const imageContainerStyle = {
    borderRadius: '10px',
    border: `4px solid ${colors.secondary}`,
    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
    overflow: 'hidden',
    transition: 'all 0.4s ease',
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
              whileHover={{ y: -5, color: colors.secondary }}
              style={{ color: colors.text }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: colors.secondary }}
              style={{ color: colors.text }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a 
              href="mailto:email@example.com"
              whileHover={{ y: -5, color: colors.secondary }}
              style={{ color: colors.text }}
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
              color: colors.secondary,
              border: `1px solid ${colors.secondary}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-3px)',
              boxShadow: `0 5px 15px rgba(100, 255, 218, 0.2)`,
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
            style={imageContainerStyle}
            whileHover={{ 
              transform: 'translateY(-10px)', // Only translate, no scaling
              boxShadow: `0 20px 40px rgba(100, 255, 218, 0.4)`,
            }}
          >
            <motion.img
              src={Hero}
              alt="Kalyanasundaram K"
              style={{
                width: isMobile ? '200px' : '280px',
                height: isMobile ? '240px' : '380px',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                transition: 'all 0.4s ease',
              }}
              whileHover={{
                scale: 1.03, // Apply scaling directly to the image
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <Link to="about" smooth={true} duration={500} style={scrollDownStyle}>
        <Lottie options={lottieOptions} height={100} width={60} />
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