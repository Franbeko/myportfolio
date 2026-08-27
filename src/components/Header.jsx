import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaMusic, FaPause } from 'react-icons/fa';
import { ShimmerButton } from '@/components/ui/shimmer-button';

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
        <div className="header-left">
          <img 
            src="/memojis/francis-memoji.png"
            alt="Francis" 
            className="header-avatar"
          />
          <button 
            className={`header-music-btn ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <FaPause className="header-music-icon-spin" /> : <FaMusic />}
          </button>
        </div>

        <div className="header-right">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <ShimmerButton
            className="header-connect-btn"
            background="#64ffda"
            shimmerColor="#ffffff"
            shimmerSize="0.05em"
          >
            <a 
              href="https://www.linkedin.com/in/francis-haizel-373b96265/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shimmer-btn-text"
            >
              Connect
            </a>
          </ShimmerButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;