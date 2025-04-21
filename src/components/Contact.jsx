import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your server
    console.log(formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset submission state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  const sectionStyle = {
    minHeight: '100vh',
    padding: '6rem 2rem',
    backgroundColor: '#1e3c72',
    color: '#fff',
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
    backgroundColor: '#fff',
  };

  const contentStyle = {
    display: 'flex',
    gap: '3rem',
    marginTop: '3rem',
  };

  const formContainerStyle = {
    flex: '1',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  };

  const infoContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  };

  const infoCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
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

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  };

  const textareaStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    minHeight: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#1e3c72',
    color: '#fff',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const successMessageStyle = {
    backgroundColor: '#4BB543',
    color: '#fff',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  // Mobile styles
  const mobileStyles = {
    '@media (max-width: 768px)': {
      contentStyle: {
        flexDirection: 'column',
      },
    },
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
          Let's Connect
          <div style={headingAfterStyle}></div>
        </motion.h2>

        <div style={window.innerWidth > 768 ? contentStyle : {...contentStyle, ...mobileStyles['@media (max-width: 768px)'].contentStyle}}>
          <motion.div
            style={formContainerStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#1e3c72', textAlign: 'center' }}>Send a Message</h3>
            
            {submitted && (
              <div style={successMessageStyle}>
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="subject" style={labelStyle}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={textareaStyle}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                style={buttonStyle}
                whileHover={{ backgroundColor: '#2a5298' }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            style={infoContainerStyle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={infoCardStyle}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Contact Information</h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                Feel free to reach out to me for collaborations, opportunities, or just to say hello!
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Email:</strong> kalyan@example.com
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Location:</strong> Chennai, India
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Role:</strong> AI Developer & Computer Science Educator
              </p>
            </div>
            
            <div style={infoCardStyle}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Connect with me</h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                I'm active on various platforms. Follow me to stay updated with my latest projects and insights.
              </p>
              
              <div style={socialLinksStyle}>
                <motion.a
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={iconStyle}
                  whileHover={{ color: '#0A66C2', scale: 1.2 }}
                >
                  <FaLinkedin size={28} />
                </motion.a>
                <motion.a
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={iconStyle}
                  whileHover={{ color: '#f5f5f5', scale: 1.2 }}
                >
                  <FaGithub size={28} />
                </motion.a>
                <motion.a
                  href="mailto:email@example.com"
                  style={iconStyle}
                  whileHover={{ color: '#EA4335', scale: 1.2 }}
                >
                  <FaEnvelope size={28} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={iconStyle}
                  whileHover={{ color: '#1DA1F2', scale: 1.2 }}
                >
                  <FaTwitter size={28} />
                </motion.a>
              </div>
            </div>
            
            <div style={{...infoCardStyle, marginBottom: 0}}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Thank You!</h3>
              <p style={{ lineHeight: '1.6' }}>
                Thanks for visiting my portfolio. I'm always open to new opportunities and collaborations!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;