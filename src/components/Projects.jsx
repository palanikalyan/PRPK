import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    backgroundColor: '#fff',
    color: '#333',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '1rem',
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    backgroundColor: '#1e3c72',
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const projectCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const projectImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '1px solid #eee',
  };

  const projectContentStyle = {
    padding: '1.5rem',
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
    fontWeight: '600',
  };

  const projectDescriptionStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#666',
    lineHeight: '1.6',
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  };

  const techItemStyle = {
    backgroundColor: '#e7f5ff',
    color: '#1e3c72',
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
    backgroundColor: '#1e3c72',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  };

  // Mobile styles
  const mobileStyles = {
    '@media (max-width: 768px)': {
      projectsGridStyle: {
        gridTemplateColumns: '1fr',
      },
    },
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
      <div style={containerStyle}>
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
          <div style={headingAfterStyle}></div>
        </motion.h2>

        <div 
          style={
            window.innerWidth > 768 
              ? projectsGridStyle 
              : mobileStyles['@media (max-width: 768px)'].projectsGridStyle
          }
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={projectCardStyle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <img src={project.image} alt={project.title} style={projectImageStyle} />
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
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{...projectLinkStyle, backgroundColor: '#fff', color: '#1e3c72', border: '1px solid #1e3c72'}}>
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