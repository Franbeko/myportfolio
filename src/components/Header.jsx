import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaMusic, FaPause } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode, isPlaying, toggleMusic }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <nav className="nav-container">
        {/* Left side */}
        <div className="header-left">
          <img 
            src="/memojis/francis-memoji.png"
            alt="Francis" 
            className="header-avatar"
          />
          {/* Mini Music Button - Now with spinning animation when playing */}
          <button 
            className={`header-music-btn ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <FaPause className="header-music-icon-spin" /> : <FaMusic />}
          </button>
        </div>

        {/* Right side */}
        <div className="header-right">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a 
            href="https://www.linkedin.com/in/francis-haizel-373b96265/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-connect-btn"
          >
            Connect
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;