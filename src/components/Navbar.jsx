import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaLaptopCode, FaTrophy, FaEnvelope, FaMoon, FaSun, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode to match video background
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set active section based on scroll position
    const handleScrollSpy = () => {
      const sections = ['introduction', 'about', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollSpy);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [scrolled]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd apply dark mode classes to body or a main container
  };

  // Updated color schemes to match video background theme
  const colors = darkMode ? {
    background: 'rgba(10, 25, 47, 0.85)', // Deep blue to match video overlay
    text: '#e6f1ff', // Bright white
    accent: '#64ffda', // Teal accent
    shadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    mobileMenu: 'rgba(10, 25, 47, 0.98)',
    border: '#112240',
    logo: '#e6f1ff' // Bright white for logo
  } : {
    background: 'rgba(230, 241, 255, 0.85)', // Light blue to match theme
    text: '#0a192f', // Deep blue for text
    accent: '#64ffda', // Keep the teal accent
    shadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    mobileMenu: 'rgba(230, 241, 255, 0.98)',
    border: '#8892b0',
    logo: '#0a192f' // Deep blue for logo
  };

  // Base styles with curved design - FIXED POSITIONING
  const navbarStyle = {
    position: 'fixed',
    top: 0, // Always at top
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0.8rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? colors.background : 'rgba(10, 25, 47, 0.5)', // Semi-transparent blue when not scrolled
    backdropFilter: 'blur(10px)',
    boxShadow: scrolled ? colors.shadow : 'none',
    borderRadius: scrolled ? '0' : '0 0 15px 15px', // Curve only bottom when at top
    fontFamily: "'Poppins', sans-serif",
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    fontWeight: '700',
    fontSize: '1.8rem',
    color: scrolled ? colors.logo : '#e6f1ff', // Adjust logo color based on scroll position and theme
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '-1px',
  };

  const logoAccentStyle = {
    color: '#64ffda', // Consistent accent color
    fontWeight: '800',
  };

  const linksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const linksStyle = {
    display: 'flex',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Consistent semi-transparent background
    borderRadius: '30px',
    padding: '0.5rem',
    margin: '0 1rem',
    backdropFilter: 'blur(5px)', // Additional blur for glass effect
  };

  const linkStyle = (isActive) => ({
    color: isActive ? '#0a192f' : scrolled ? colors.text : '#e6f1ff',
    backgroundColor: isActive ? '#64ffda' : 'transparent',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  });

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: scrolled ? colors.text : '#e6f1ff', // Adjust color based on scroll position
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '1.2rem',
  };

  const searchContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Consistent styling
    color: scrolled ? colors.text : '#e6f1ff',
    outline: 'none',
    width: searchActive ? '200px' : '0px',
    opacity: searchActive ? 1 : 0,
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyle = {
    display: 'flex',
    position: 'fixed',
    top: '0',
    right: menuOpen ? '0' : '-80%',
    width: '80%',
    height: '100vh',
    flexDirection: 'column',
    padding: '5rem 2rem 2rem',
    backgroundColor: colors.mobileMenu,
    boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.2)',
    zIndex: 90,
    transition: 'right 0.3s ease',
    backdropFilter: 'blur(10px)', // Additional blur for glass effect
  };

  const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(3px)',
    zIndex: 80,
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? 'all' : 'none',
    transition: 'opacity 0.3s ease',
  };

  const mobileLinkStyle = (isActive) => ({
    padding: '1rem',
    color: isActive ? '#64ffda' : colors.text,
    textDecoration: 'none',
    fontWeight: '500',
    borderBottom: `1px solid ${colors.border}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    transition: 'all 0.2s ease',
  });

  const menuButtonStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem',
    color: scrolled ? colors.text : '#e6f1ff', // Adjust color based on scroll position
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 101,
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    color: colors.text,
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  // Mobile styles
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    linksStyle.display = 'none';
    menuButtonStyle.display = 'block';
  }

  // Updated navigation items with custom icons and hover effects
  const navItems = [
    { id: 'introduction', name: 'Home', icon: <FaHome /> },
    { id: 'about', name: 'About', icon: <FaUser /> },
    { id: 'projects', name: 'Projects', icon: <FaLaptopCode /> },
    { id: 'achievements', name: 'Achievements', icon: <FaTrophy /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <motion.nav
        style={navbarStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        id="mainNavbar"
      >
        <div style={logoContainerStyle}>
          <Link to="introduction" smooth={true} duration={500} style={logoStyle} onClick={() => setMenuOpen(false)}>
            K<span style={logoAccentStyle}>K</span>
          </Link>
        </div>
        
        <div style={linksContainerStyle}>
          <div style={linksStyle}>
            {navItems.map(item => (
              <Link 
                key={item.id}
                to={item.id} 
                spy={true}
                smooth={true} 
                duration={500} 
                style={linkStyle(activeSection === item.id)}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div style={searchContainerStyle}>
            <AnimatePresence>
              {searchActive && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  style={searchInputStyle}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
            </AnimatePresence>
            <motion.button 
              style={iconButtonStyle}
              whileHover={{ 
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                color: '#64ffda' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchActive(!searchActive)}
            >
              <FaSearch />
            </motion.button>
          </div>
          
          <motion.button 
            style={iconButtonStyle}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.2)',
              color: '#64ffda' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
          
          <motion.button 
            style={menuButtonStyle}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.2)',
              color: '#64ffda' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '×' : '☰'}
          </motion.button>
        </div>
      </motion.nav>
      
      <div 
        style={mobileMenuOverlayStyle}
        onClick={() => setMenuOpen(false)}
      />
      
      <div style={mobileMenuStyle}>
        <button 
          style={closeButtonStyle}
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        
        <div style={{
          marginBottom: '3rem',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            color: colors.text,
            marginBottom: '0.5rem',
            fontSize: '2rem',
          }}>
            K<span style={{ color: '#64ffda' }}>K</span>
          </h2>
          <p style={{
            color: colors.text,
            opacity: 0.7,
            fontSize: '0.9rem',
          }}>
            AI Developer & Educator
          </p>
        </div>
        
        {navItems.map(item => (
          <Link 
            key={item.id}
            to={item.id} 
            spy={true}
            smooth={true} 
            duration={500} 
            style={mobileLinkStyle(activeSection === item.id)} 
            onClick={() => {
              setMenuOpen(false);
              setActiveSection(item.id);
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
        
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 0',
        }}>
          <motion.button 
            style={{
              ...iconButtonStyle,
              color: colors.text,
            }}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.2)',
              color: '#64ffda' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchActive(!searchActive);
              setMenuOpen(false);
            }}
          >
            <FaSearch />
          </motion.button>
          
          <motion.button 
            style={{
              ...iconButtonStyle,
              color: colors.text,
            }}
            whileHover={{ 
              backgroundColor: 'rgba(100, 255, 218, 0.2)',
              color: '#64ffda' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
      </div>

      {/* Font imports - add to your index.html or at the beginning of your app */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap');
        
        /* Add global styles to ensure proper spacing */
        body {
          margin: 0;
          padding: 0;
          background-color: ${darkMode ? '#0a192f' : '#e6f1ff'};
          color: ${darkMode ? '#e6f1ff' : '#0a192f'};
          transition: all 0.3s ease;
        }
        
        /* Add proper spacing for content below the navbar */
        #introduction {
          padding-top: 80px; /* Adjust based on navbar height */
        }
        
        /* Custom scrollbar to match the theme */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#0a192f' : '#e6f1ff'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#64ffda' : '#64ffda'};
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#4fd1b5' : '#4fd1b5'};
        }
      `}</style>
    </>
  );
};

export default Navbar;