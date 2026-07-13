import { useState, useEffect } from 'react';
import { FaHome, FaFolder, FaUser, FaPhone } from 'react-icons/fa';

const BottomNav = ({ darkMode }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'projects', 'about', 'contact'];
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`bottom-nav ${darkMode ? 'dark' : 'light'}`}>
            <div className="bottom-nav-container">
                <a href="#home" className={`bottom-nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                    <FaHome className="bottom-nav-icon" />
                    <span className="bottom-nav-label">Home</span>
                </a>
                <a href="#about" className={`bottom-nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                    <FaUser className="bottom-nav-icon" />
                    <span className="bottom-nav-label">About</span>
                </a>
                <a href="#projects" className={`bottom-nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                    <FaFolder className="bottom-nav-icon" />
                    <span className="bottom-nav-label">Projects</span>
                </a>
                <a href="#contact" className={`bottom-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                    <FaPhone className="bottom-nav-icon" />
                    <span className="bottom-nav-label">Contact</span>
                </a>
            </div>
        </nav>
    );
};

export default BottomNav;