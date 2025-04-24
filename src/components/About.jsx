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

// Import your code/dev-themed video
import DevVideo from '../assets/bg.mp4'; // Update path to your video

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

  // Less violet-heavy color scheme with more neutral/professional tones
  const colors = darkMode ? {
    background: '#0f172a', // Dark blue instead of purple
    text: '#000',
    subText: '#cbd5e1',
    primary: '#38bdf8', // Light blue
    secondary: '#818cf8', // Blue/indigo
    card: 'rgba(30, 41, 59, 0.8)', // Translucent dark blue
    shadow: 'rgba(0, 0, 0, 0.25)',
    overlay: 'rgba(15, 23, 42, 0.85)' // Dark blue overlay
  } : {
    background: '#f8fafc',
    text: '#1e293b',
    subText: '#64748b',
    primary: '#3b82f6', // Blue
    secondary: '#6366f1', // Indigo
    card: 'rgba(255, 255, 255, 0.8)', // Translucent white
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'transparent' // Light overlay
  };

  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    color: colors.text,
    position: 'relative',
    overflow: 'hidden'
  };

  const videoStyle = {
    position: 'fixed', // Fixed position so it stays consistent across sections
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -2
  };

  const overlayStyle = {
    position: 'fixed', // Fixed position to match video
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.overlay,
    zIndex: -1
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
    color: '#fff', // Changed to white
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: colors.primary,
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
    backgroundColor: colors.card,
    backdropFilter: 'blur(10px)',
    boxShadow: `0 10px 30px ${colors.shadow}`,
    border: `1px solid ${colors.primary}20`,
  };

  const skillsStyle = {
    flex: '1',
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
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: `0 8px 20px ${colors.shadow}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
    border: `1px solid ${colors.primary}20`,
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
    border: `3px solid ${darkMode ? '#0f172a' : '#f8fafc'}`,
    boxShadow: `0 0 0 4px ${colors.secondary}33`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
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
      {/* Video Background - Applied uniformly to the entire section */}
      <video
        autoPlay
        loop
        muted
        style={videoStyle}
      >
        <source src={DevVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={overlayStyle}></div>

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
          {/* Journey Section */}
          <motion.div
            style={bioStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={sectionTitleStyle}>My Journey</h3>
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

          {/* Skills Section */}
          <motion.div
            style={skillsStyle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={bioStyle}>
              <h3 style={sectionTitleStyle}>My Skills</h3>
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
                  </motion.div>
                ))}
              </div>
              
              {/* Code snippet section */}
              <motion.div
                style={{
                  marginTop: '2rem',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  fontFamily: 'monospace',
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ 
                  display: 'flex', 
                  gap: '5px', 
                  backgroundColor: darkMode ? '#1e1e2e' : '#f1f5f9',
                  padding: '8px 12px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
                  <div style={{ marginLeft: 'auto', fontSize: '0.8rem', color: colors.subText }}>profile.js</div>
                </div>
                
                <div style={{ 
                  backgroundColor: '#000', // Ensure this is applied
                  padding: '1rem',
                  color: '#e6e6e6', // Light text for contrast
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  overflow: 'auto',
                  maxHeight: '200px',
                  borderRadius: '8px', // Optional: Add rounded corners
                }}>
                  {[ 
                    '<span style="color: #ff79c6;">const</span> <span style="color: #bd93f9;">developer</span> = {',
                    '  <span style="color: #8be9fd;">name</span>: <span style="color: #f1fa8c;">"Kalyanasundaram K"</span>,',
                    '  <span style="color: #8be9fd;">role</span>: <span style="color: #f1fa8c;">"AI Developer & Educator"</span>,',
                    '  <span style="color: #8be9fd;">skills</span>: [<span style="color: #f1fa8c;">"Python"</span>, <span style="color: #f1fa8c;">"React"</span>, <span style="color: #f1fa8c;">"ML"</span>],',
                    '  <span style="color: #8be9fd;">passion</span>: <span style="color: #f1fa8c;">"Building innovative solutions"</span>,',
                    '',
                    '  <span style="color: #50fa7b;">createImpact</span>() {',
                    '    <span style="color: #ff79c6;">return</span> <span style="color: #f1fa8c;">"Transforming ideas into reality"</span>;',
                    '  }',
                    '};',
                    '',
                    '<span style="color: #ff79c6;">function</span> <span style="color: #50fa7b;">connect</span>() {',
                    '  <span style="color: #ff79c6;">console</span>.<span style="color: #50fa7b;">log</span>(<span style="color: #f1fa8c;">"Let\'s build something amazing!"</span>);',
                    '}'
                  ].map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    height: '16px',
                    width: '8px',
                    backgroundColor: colors.primary,
                    bottom: '40px',
                    right: '40px',
                    opacity: 0.7
                  }}
                  animate={{ opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* GitHub Contributions Section */}
            <motion.div
              style={{
                marginTop: '2rem',
                borderRadius: '16px',
                padding: '2rem',
                backgroundColor: colors.card,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 10px 30px ${colors.shadow}`,
                border: `1px solid ${colors.primary}20`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 style={sectionTitleStyle}>GitHub Contributions</h3>
              <p style={paragraphStyle}>
                Here's a visual representation of my GitHub contributions over the past year. It reflects my consistency and dedication to open-source projects and personal development.
              </p>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <img
                  src="https://ghchart.rshah.org/38bdf8/palanikalyan"
                  alt="GitHub Contribution Graph"
                  style={{
                    maxWidth: '100%',
                    borderRadius: '8px',
                    boxShadow: `0 8px 20px ${colors.shadow}`,
                    border: `1px solid ${colors.primary}20`,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;