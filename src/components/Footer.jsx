import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">Francis</h3>
            <p className="footer-brand-desc">
              Building modern, high-performance web experiences with clean code and creative design.
            </p>
            <div className="footer-social-links">
              <a href="https://github.com/Franbeko" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/francis-haizel-373b96265/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="http://wa.me/+231776005247" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Pages Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Pages</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Info Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Info</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="/resume/Francis_Kojo_Haizel_Resume_pdf.pdf" download>Resume</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Let's Connect</h4>
            <ul className="footer-contact-info">
              <li>
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:franciskhhaizel@gmail.com">franciskhhaizel@gmail.com</a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Francis. All rights reserved.
          </p>
          <p className="footer-credit">
            Crafted with <span className="footer-heart">❤</span> and code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;