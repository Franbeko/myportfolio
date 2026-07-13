import { motion } from 'framer-motion';
import { FaMusic, FaPause } from 'react-icons/fa';

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
              Hello! 👋 I'm <br /><span className="highlight-text">Francis Kojo Haizel</span>
            </h1>
            
            <p className="hero-subtitle">
              I'm a <span className="highlight-text">fullstack developer</span> with 3+ years, with a strong focus on frontend and WordPress development.
            </p>

            <a 
              href="#projects" 
              className="view-my-work-btn"
            >
              View my work
            </a>
          </div>

          {/* Right side: Large Avatar with Music Player */}
          <div className="hero-avatar-container">
            <div className="avatar-wrapper">
              <img 
                src="/francis-memoji.png" 
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