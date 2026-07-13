import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
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
            src="/francis-memoji.png"
            alt="Francis" 
            className="header-avatar"
          />
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