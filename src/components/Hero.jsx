import { motion } from 'framer-motion';
import { FaMusic, FaPause, FaCode, FaLaptop, FaUsers, FaDownload } from 'react-icons/fa';

const Hero = ({ darkMode, isPlaying, toggleMusic }) => {
  return (
    <section id="home" className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content-wrapper"
        >
          {/* Left side: Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Hello! 👋 I'm <br />
              <span className="highlight-text">Francis Kojo Haizel</span>
            </h1>
            
            <p className="hero-subtitle">
              I'm a <span className="highlight-text">fullstack developer</span> with 4+ years, with a strong focus on frontend and WordPress development.
            </p>

            {/* Button Container - Flex row with proper spacing */}
            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="view-my-work-btn"
              >
                View my work
              </a>
              <a 
                href="/resume/Francis_Kojo_Haizel_Resume.pdf.pdf" 
                download 
                className="resume-btn"
              >
                <FaDownload className="resume-icon" />
                Download My Resume
              </a>
            </div>

            {/* Stats Section */}
            <div className="hero-stats">
              <div className="hero-stat">
                <FaCode className="hero-stat-icon" />
                <div>
                  <span className="hero-stat-number">4+</span>
                  <span className="hero-stat-label">Years Experience</span>
                </div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <FaLaptop className="hero-stat-icon" />
                <div>
                  <span className="hero-stat-number">10+</span>
                  <span className="hero-stat-label">Projects Delivered</span>
                </div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <FaUsers className="hero-stat-icon" />
                <div>
                  <span className="hero-stat-number">15+</span>
                  <span className="hero-stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Large Avatar with Music Player */}
          <div className="hero-avatar-container">
            <div className="avatar-wrapper">
              <img 
                src="/memojis/francis-memoji.png" 
                alt="Francis" 
                className="hero-avatar"
              />
              
              {/* Music Player Button - Click to Play/Pause */}
              <div className="music-overlay">
                <button 
                  className={`music-player-mini ${isPlaying ? 'playing' : ''}`} 
                  onClick={toggleMusic}
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                  {isPlaying ? <FaPause className="music-icon-mini" /> : <FaMusic className="music-icon-mini" />}
                  <div className="music-info">
                    <span className="now-playing-text">{isPlaying ? 'Now Playing' : 'Paused'}</span>
                    <span className="music-pick">Francis's Pick</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;