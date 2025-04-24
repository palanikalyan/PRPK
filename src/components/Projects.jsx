import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add useEffect for mobile detection
  React.useEffect(() => {
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

  // Colors (similar to About component)
  const colors = {
    background: '#f8fafc',
    text: '#1e293b',
    subText: '#64748b',
    primary: '#3b82f6', // Blue
    secondary: '#6366f1', // Indigo
    card: 'rgba(255, 255, 255, 0.8)', // Translucent white
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: '#00000000' // Light overlay
  };

  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    color: colors.text,
  };

  // Add video background styles
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

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const projectCardStyle = {
    backgroundColor: colors.card,
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: `0 10px 20px ${colors.shadow}`,
    transition: 'all 0.3s ease',
    border: `1px solid ${colors.primary}20`,
  };

  const projectContentStyle = {
    padding: '1.5rem',
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
    fontWeight: '600',
    color: '#000', // Changed to black
  };

  const projectDescriptionStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: colors.subText,
    lineHeight: '1.6',
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  };

  const techItemStyle = {
    backgroundColor: `${colors.primary}20`,
    color: colors.primary,
    padding: '0.3rem 0.7rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
  };

  const projectLinkStyle = {
    display: 'inline-block',
    marginTop: '1rem',
    marginRight: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: colors.primary,
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  };

  const projects = [
    {
      id: 1,
      title: 'CyberEye',
      description: 'A cutting-edge surveillance system for detecting suspicious activities based on persons in video frames using computer vision and deep learning.',
      image: 'https://via.placeholder.com/350x200?text=CyberEye',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Flask'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Voice Cloning',
      description: 'Final year project focused on cloning voices for synthetic data generation using deep learning techniques and audio processing.',
      image: 'https://via.placeholder.com/350x200?text=Voice+Cloning',
      techStack: ['Python', 'PyTorch', 'Tacotron 2', 'WaveGlow', 'Librosa'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Waterino',
      description: 'A React Native project with web support for smart water management and conservation, offering real-time monitoring.',
      image: 'https://via.placeholder.com/350x200?text=Waterino',
      techStack: ['React Native', 'Expo', 'Firebase', 'Node.js', 'IoT'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'StatGenAI',
      description: 'Synthetic data generator using GAN/VAE models for images and voice, helping researchers get access to high-quality training data.',
      image: 'https://via.placeholder.com/350x200?text=StatGenAI',
      techStack: ['Python', 'TensorFlow', 'GANs', 'VAEs', 'Streamlit'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'LaTeX Editor',
      description: 'Web-based LaTeX editor with file upload, template selection, and syntax checks for academic and professional document creation.',
      image: 'https://via.placeholder.com/350x200?text=LaTeX+Editor',
      techStack: ['Gradio', 'Python', 'LaTeX', 'JavaScript', 'Flask'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section className="section" style={sectionStyle}>
      {/* Video Background - Same as in About component */}
      <video
        autoPlay
        loop
        muted
        style={videoStyle}
      >
        <source src="../assets/bg.mp4" type="video/mp4" />
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
          My Projects
          <div style={headingAfterStyle}></div>
        </motion.h2>

        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={projectCardStyle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: `0 15px 30px ${colors.shadow}` }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div style={projectContentStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>
                
                <div style={techStackStyle}>
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} style={techItemStyle}>{tech}</span>
                  ))}
                </div>
                
                <div>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={projectLinkStyle}>
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{...projectLinkStyle, backgroundColor: 'transparent', color: colors.primary, border: `1px solid ${colors.primary}`}}>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;