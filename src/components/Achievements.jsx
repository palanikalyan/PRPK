import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaBriefcase } from 'react-icons/fa';

const Achievements = () => {
  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    backgroundColor: '#f5f7fa',
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

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  };

  const tabStyle = {
    padding: '0.8rem 1.5rem',
    margin: '0 0.5rem 1rem 0.5rem',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const activeTabStyle = {
    backgroundColor: '#1e3c72',
    color: '#fff',
    boxShadow: '0 6px 12px rgba(30, 60, 114, 0.3)',
  };

  const timelineStyle = {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const timelineLineStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '4px',
    backgroundColor: '#1e3c72',
    transform: 'translateX(-50%)',
  };

  const itemsContainerStyle = {
    width: '100%',
  };

  const timelineItemStyle = {
    position: 'relative',
    margin: '2rem 0',
    width: '50%',
    paddingRight: '2.5rem',
    boxSizing: 'border-box',
  };

  const timelineItemRightStyle = {
    left: '50%',
    paddingLeft: '2.5rem',
    paddingRight: 0,
  };

  const timelineDotStyle = {
    position: 'absolute',
    top: '20px',
    right: '-8px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#1e3c72',
    border: '3px solid #fff',
    zIndex: 1,
  };

  const timelineDotRightStyle = {
    right: 'auto',
    left: '-8px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  };

  const cardTitleStyle = {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const cardDateStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.8rem',
  };

  const cardDescriptionStyle = {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  };
  
  const cardIconStyle = {
    fontSize: '1.5rem',
    color: '#1e3c72',
  };

  // Mobile styles
  const mobileStyles = {
    '@media (max-width: 768px)': {
      timelineLineStyle: {
        left: '20px',
      },
      timelineItemStyle: {
        width: '100%',
        paddingLeft: '3rem',
        paddingRight: '0',
      },
      timelineItemRightStyle: {
        left: '0',
      },
      timelineDotStyle: {
        left: '12px',
        right: 'auto',
      },
      timelineDotRightStyle: {
        left: '12px',
      },
    },
  };

  const [activeTab, setActiveTab] = React.useState('competitions');
  
  const competitions = [
    { 
      title: 'Technocrats - Title Winner (1st Prize)',
      date: 'October 2023', 
      description: 'Awarded the top position in Technocrats, a prestigious technical competition focused on innovative solutions.',
      icon: <FaTrophy style={cardIconStyle} />
    },
    { 
      title: 'IET GEN AI Challenge - 2nd Prize',
      date: 'July 2023', 
      description: 'Recognized for exceptional AI innovation at the IET Generative AI Challenge.',
      icon: <FaMedal style={cardIconStyle} />
    },
    { 
      title: 'Indconn - 2nd Prize',
      date: 'March 2023', 
      description: 'Earned second place at Indconn for technical excellence and innovation.',
      icon: <FaMedal style={cardIconStyle} />
    },
    { 
      title: 'CyberX - Special Mention',
      date: 'September 2023', 
      description: 'Received special recognition at CyberX for cybersecurity solutions and implementations.',
      icon: <FaCertificate style={cardIconStyle} />
    },
  ];
  
  const awards = [
    { 
      title: 'IET Excellent Innovator',
      date: 'September 2023', 
      description: 'Honored by the Institution of Engineering and Technology (IET) for outstanding innovation in the field.',
      icon: <FaTrophy style={cardIconStyle} />
    },
    { 
      title: 'Academic Excellence',
      date: 'November 2023', 
      description: 'Recognized by KCG College of Technology for exceptional academic performance and contributions.',
      icon: <FaMedal style={cardIconStyle} />
    },
    { 
      title: 'Best Performer',
      date: 'November 2023', 
      description: 'Awarded as the Best Performer at KCG College of Technology for all-round excellence.',
      icon: <FaTrophy style={cardIconStyle} />
    },
    { 
      title: 'Best Speaker - Ith Parliament',
      date: 'September 2023', 
      description: 'Recognized as the Best Speaker at the Ith Parliament for exceptional communication skills and persuasive arguments.',
      icon: <FaMedal style={cardIconStyle} />
    },
  ];
  
  const internships = [
    { 
      title: 'Aylasa - LLM Development',
      date: '2024', 
      description: 'Developed Large Language Models (LLMs) and implemented natural language processing solutions for real-world applications.',
      icon: <FaBriefcase style={cardIconStyle} />
    },
    { 
      title: 'Nokia - Web Development',
      date: '2023', 
      description: 'Contributed to web development projects, implementing responsive and user-friendly interfaces for telecommunications applications.',
      icon: <FaBriefcase style={cardIconStyle} />
    },
    { 
      title: 'DTCC - Fintech',
      date: '2023', 
      description: 'Worked on financial technology solutions, focusing on data security and transaction processing systems.',
      icon: <FaBriefcase style={cardIconStyle} />
    },
    { 
      title: 'MELSS - IoT',
      date: '2022', 
      description: 'Developed Internet of Things (IoT) solutions for smart systems and automation platforms.',
      icon: <FaBriefcase style={cardIconStyle} />
    },
  ];
  
  const activities = [
    { 
      title: 'Podcast Host - "Programmer Polyglot"',
      date: '2022 - Present', 
      description: 'Hosted 2 seasons and 24 episodes of a tech podcast exploring programming languages and developer experiences.',
      icon: <FaCertificate style={cardIconStyle} />
    },
    { 
      title: 'Leetcode & GFG Problem Solver',
      date: 'Ongoing', 
      description: 'Solved over 200 programming challenges, demonstrating strong algorithmic thinking and coding skills.',
      icon: <FaCode style={cardIconStyle} class="fa-solid fa-code" />
    },
    { 
      title: 'Author of 8 Technology Books',
      date: '2021 - Present', 
      description: 'Published 8 books on various technology topics, sharing knowledge and insights with the community.',
      icon: <FaBook style={cardIconStyle} class="fa-solid fa-book" />
    },
    { 
      title: 'GUVI Community Vice President',
      date: 'December 2023 - Present', 
      description: 'Leading the community initiatives at GUVI Geek Networks, fostering tech education and professional development.',
      icon: <FaUsers style={cardIconStyle} class="fa-solid fa-users" />
    },
  ];
  
  const renderTimelineItems = (items) => {
    return items.map((item, index) => (
      <motion.div 
        key={index}
        style={{
          ...timelineItemStyle,
          ...(index % 2 === 1 && window.innerWidth > 768 ? timelineItemRightStyle : {}),
          ...(window.innerWidth <= 768 ? mobileStyles['@media (max-width: 768px)'].timelineItemStyle : {}),
          ...(window.innerWidth <= 768 && index % 2 === 1 ? mobileStyles['@media (max-width: 768px)'].timelineItemRightStyle : {}),
        }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div 
          style={{
            ...timelineDotStyle,
            ...(index % 2 === 1 && window.innerWidth > 768 ? timelineDotRightStyle : {}),
            ...(window.innerWidth <= 768 ? mobileStyles['@media (max-width: 768px)'].timelineDotStyle : {}),
            ...(window.innerWidth <= 768 && index % 2 === 1 ? mobileStyles['@media (max-width: 768px)'].timelineDotRightStyle : {}),
          }}
        ></div>
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>
            {item.icon}
            {item.title}
          </h3>
          <p style={cardDateStyle}>{item.date}</p>
          <p style={cardDescriptionStyle}>{item.description}</p>
        </div>
      </motion.div>
    ));
  };

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
          Achievements & Recognition
          <div style={headingAfterStyle}></div>
        </motion.h2>

        <motion.div
          style={tabsContainerStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            style={{ ...tabStyle, ...(activeTab === 'competitions' ? activeTabStyle : {}) }}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTab('competitions')}
          >
            Competitions
          </motion.div>
          <motion.div
            style={{ ...tabStyle, ...(activeTab === 'awards' ? activeTabStyle : {}) }}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTab('awards')}
          >
            Awards
          </motion.div>
          <motion.div
            style={{ ...tabStyle, ...(activeTab === 'internships' ? activeTabStyle : {}) }}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </motion.div>
          <motion.div
            style={{ ...tabStyle, ...(activeTab === 'activities' ? activeTabStyle : {}) }}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTab('activities')}
          >
            Activities
          </motion.div>
        </motion.div>

        <div style={timelineStyle}>
          <div style={
            window.innerWidth > 768 
              ? timelineLineStyle 
              : mobileStyles['@media (max-width: 768px)'].timelineLineStyle
          }></div>
          <div style={itemsContainerStyle}>
            {activeTab === 'competitions' && renderTimelineItems(competitions)}
            {activeTab === 'awards' && renderTimelineItems(awards)}
            {activeTab === 'internships' && renderTimelineItems(internships)}
            {activeTab === 'activities' && renderTimelineItems(activities)}
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix missing import
const FaCode = ({ style }) => <span className="fa-solid fa-code" style={style}></span>;
const FaBook = ({ style }) => <span className="fa-solid fa-book" style={style}></span>;
const FaUsers = ({ style }) => <span className="fa-solid fa-users" style={style}></span>;

export default Achievements;
