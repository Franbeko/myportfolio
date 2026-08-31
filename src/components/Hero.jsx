import { motion } from 'framer-motion';
import { FaMusic, FaPause, FaDownload } from 'react-icons/fa';
import { ShimmerButton } from '@/components/ui/shimmer-button';

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
          <div className="hero-text">
            <h1 className="hero-title">
              Hello! 👋 I'm <br />
              <span className="highlight-text">Francis Kojo Haizel</span>
            </h1>

            <p className="hero-subtitle">
              I'm a <span className="highlight-text">fullstack & wordpress developer</span> with 4+ years of experience. I leverage AI to ship faster without compromising quality.
            </p>

            <div className="hero-buttons">
              <ShimmerButton
                className="view-my-work-btn"
                background="#64ffda"
                shimmerColor="#ffffff"
                shimmerSize="0.05em"
              >
                <a href="#projects" className="shimmer-btn-text">View my work</a>
              </ShimmerButton>
              <ShimmerButton
                className="resume-btn"
                background="#64ffda"
                shimmerColor="#ffffff"
                shimmerSize="0.05em"
              >
                <a
                  href="/resume/Francis_Kojo_Haizel_Resume.pdf"
                  download
                  className="shimmer-btn-text"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <FaDownload className="resume-icon" />
                  Download My Resume
                </a>
              </ShimmerButton>
            </div>
          </div>

          <div className="hero-avatar-container">
            <div className="avatar-wrapper">
              <img
                src="/memojis/francis-memoji.png"
                alt="Francis"
                className="hero-avatar"
              />

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