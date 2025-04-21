import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaReact, 
  FaJs, 
  FaDatabase, 
  FaRobot, 
  FaCloud, 
  FaMobile, 
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaPodcast
} from 'react-icons/fa';

const About = ({ darkMode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Dynamic theming based on dark mode
  const colors = darkMode ? {
    background: '#121212',
    text: '#ffffff',
    subText: '#cccccc',
    primary: '#64ffda',
    secondary: '#5271ff',
    card: '#1e1e1e',
    shadow: 'rgba(0, 0, 0, 0.4)',
    gradient: 'linear-gradient(135deg, #2c3e50, #4a5568)',
    iconGradient: 'linear-gradient(135deg, #64ffda, #5271ff)'
  } : {
    background: '#f8f9fa',
    text: '#333333',
    subText: '#666666',
    primary: '#5271ff',
    secondary: '#64ffda',
    card: '#ffffff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    gradient: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
    iconGradient: 'linear-gradient(135deg, #5271ff, #7900ff)'
  };

  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    backgroundColor: colors.background,
    color: colors.text,
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2rem',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '1rem',
    fontWeight: '700',
    background: colors.iconGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    backgroundImage: colors.iconGradient,
    borderRadius: '2px'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '3rem',
    marginTop: '3rem',
  };

  const bioStyle = {
    flex: '1',
    borderRadius: '16px',
    padding: '2rem',
    backgroundImage: colors.gradient,
    boxShadow: `0 10px 30px ${colors.shadow}`,
  };

  const skillsStyle = {
    flex: '1',
  };

  const skillsCategoryStyle = {
    marginBottom: '2rem',
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '1.5rem',
    marginTop: '1.5rem',
  };

  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: `0 8px 20px ${colors.shadow}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
  };

  const skillIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 2,
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: colors.subText,
  };

  const timelineStyle = {
    marginTop: '2rem',
    position: 'relative',
    paddingLeft: '2rem',
    borderLeft: `2px solid ${colors.primary}`,
  };

  const timelineItemStyle = {
    marginBottom: '2rem',
    position: 'relative',
  };

  const timelineDotStyle = {
    position: 'absolute',
    left: '-2.5rem',
    top: '0',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    border: `3px solid ${darkMode ? '#121212' : '#f8f9fa'}`,
    boxShadow: `0 0 0 4px ${colors.secondary}33`,
  };

  const backgroundShapeStyle = {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: '0.1',
    background: colors.primary,
    zIndex: 1,
  };

  const skills = [
    { name: 'Python', icon: <FaPython size={40} color={colors.primary} /> },
    { name: 'React', icon: <FaReact size={40} color={colors.primary} /> },
    { name: 'JavaScript', icon: <FaJs size={40} color={colors.primary} /> },
    { name: 'Data Science', icon: <FaDatabase size={40} color={colors.primary} /> },
    { name: 'AI & ML', icon: <FaRobot size={40} color={colors.primary} /> },
    { name: 'Cloud', icon: <FaCloud size={40} color={colors.primary} /> },
    { name: 'Mobile Dev', icon: <FaMobile size={40} color={colors.primary} /> },
    { name: 'Full Stack', icon: <FaCode size={40} color={colors.primary} /> },
  ];

  const experienceItems = [
    {
      title: "Vice President of Community",
      place: "GUVI Geek Networks",
      period: "2023 - Present",
      icon: <FaBriefcase size={20} color={colors.primary} />
    },
    {
      title: "Host, Programmer Polyglot Podcast",
      place: "Tech Media Network",
      period: "2022 - Present",
      icon: <FaPodcast size={20} color={colors.primary} />
    },
    {
      title: "Researcher, AI & Data Science",
      place: "ICDSAAI Conference",
      period: "2024 - 2025",
      icon: <FaGraduationCap size={20} color={colors.primary} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section" style={sectionStyle}>
      {/* Background animated shapes */}
      <motion.div
        style={{
          ...backgroundShapeStyle,
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        style={{
          ...backgroundShapeStyle,
          top: '60%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: colors.secondary,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div style={containerStyle}>
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About Me
          <div style={headingAfterStyle}></div>
        </motion.h2>

        <div style={contentStyle}>
          <motion.div
            style={bioStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: colors.text }}>My Journey</h3>
            <p style={paragraphStyle}>
              I'm Kalyanasundaram K, an AI Developer and Computer Science Educator with a passion for building innovative solutions. With expertise in AI, Machine Learning, and Full-Stack Development, I create impactful applications that solve real-world problems.
            </p>
            <p style={paragraphStyle}>
              Currently, I serve as the Vice President of Community at GUVI Geek Networks, where I lead initiatives to foster technological education and community growth. I'm also the host of "Programmer Polyglot," a podcast with 2 seasons and 24 episodes exploring programming languages and developer experiences.
            </p>
            <p style={paragraphStyle}>
              My academic background includes extensive research in artificial intelligence and data science. I'm currently working on a paper for the ICDSAAI 2025 Conference focused on predictive modeling for network traffic using deep learning algorithms.
            </p>

            <motion.div
              style={timelineStyle}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: colors.text }}>Experience Highlights</h4>
              
              {experienceItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  style={timelineItemStyle}
                  variants={itemVariants}
                  custom={index}
                >
                  <div style={timelineDotStyle}>
                    {item.icon}
                  </div>
                  <h5 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: colors.text }}>{item.title}</h5>
                  <p style={{ fontSize: '1rem', color: colors.primary, fontWeight: '500' }}>{item.place}</p>
                  <p style={{ fontSize: '0.9rem', color: colors.subText }}>{item.period}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={skillsStyle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={skillsCategoryStyle}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', color: colors.text }}>My Skills</h3>
              <div style={skillsGridStyle}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    style={skillItemStyle}
                    whileHover={{ 
                      transform: 'translateY(-10px)', 
                      boxShadow: `0 15px 30px ${colors.shadow}` 
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <motion.div 
                      style={skillIconStyle}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.2, 
                        repeat: Infinity, 
                        repeatDelay: 3 
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <p style={{ fontWeight: '600', color: colors.text }}>{skill.name}</p>
                    
                    {/* Background glow effect */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '50%',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: colors.iconGradient,
                        filter: 'blur(40px)',
                        opacity: 0.2,
                        zIndex: 1,
                      }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3D Model Viewer */}
            <motion.div
              style={{
                marginTop: '2rem',
                textAlign: 'center',
                backgroundColor: colors.card,
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: `0 8px 20px ${colors.shadow}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: colors.text }}>Tech Visualization</h3>
              
              {/* This is a placeholder for a 3D model - in a real implementation, you would use a 3D library like Three.js */}
              <div style={{ 
                width: '100%', 
                height: '200px', 
                borderRadius: '10px', 
                background: colors.gradient,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '500',
                  color: '#ffffff',
                  zIndex: 2
                }}>3D Tech Stack Visualization</p>
                
                {/* Animated elements to simulate 3D */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: `${40 + i * 20}px`,
                      height: `${40 + i * 20}px`,
                      borderRadius: '50%',
                      border: `2px solid ${colors.primary}${80 - i * 15}`,
                      opacity: 0.8 - i * 0.1,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8 + i,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              <p style={{ 
                fontSize: '0.9rem', 
                marginTop: '1rem', 
                color: colors.subText 
              }}>
                Interactive 3D visualization of my technology stack and skills
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;