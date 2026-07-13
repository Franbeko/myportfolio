import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'Track2311 – Agricultural Investment Platform',
      description: 'Full-stack platform with Google OAuth, AI chatbot, job system, and contact forms.',
      image: '/projects/project1.png',
      tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Google OAuth', 'AI Chatbot', 'Tailwind'],
      liveDemo: 'https://track2311investments.org/',
      github: 'https://github.com/Franbeko/Track2311'
    },
    {
      id: 2,
      title: 'Expense Tracker Web App',
      description: 'Developed with React, Next.js, Tailwind, and Drizzle ORM, this secure finance tracking system provides authentication and real-time analytics for managing personal finances.',
      image: '/projects/project2.png',
      tech: ['React', 'Next.js', 'Clerk', 'Drizzle ORM'],
      liveDemo: 'https://finly-kohl.vercel.app/',
      github: 'https://github.com/Franbeko/Finly'
    },
    {
      id: 3,
      title: 'DentAI – Smart Dental Management System',
      description: 'Built using Next.js, Tailwind, PostgreSQL, Clerk, and AI integration, this platform manages patient records, and appointments.',
      image: '/projects/project3.png',
      tech: ['React', 'Node.js', 'Clerk', 'Stripe'],
      liveDemo: 'https://dentai-5uvol.sevalla.app/',
      github: 'https://github.com/Franbeko/dentai'
    },
    {
      id: 4,
      title: 'LiveStocksBroker Investment Platform',
      description: 'Created using MySQL & WordPress, this platform supports payments and real-timemarket data for investment management.',
      image: '/projects/project4.png',
      tech: ['PHP', 'WordPress', 'PhpMyAdmin', 'MySQL'],
      liveDemo: 'https://livestocksbroker.com/',
      github: 'https://github.com/'
    },
    {
      id: 5,
      title: 'ChatWave – Chat App with Real-Time Messaging',
      description: 'Developed a full-stack chat application featuring real-time messaging, online user status, profile uploads.',
      image: '/projects/project5.png',
      tech: ['React', 'Vite', 'MongoDB', 'Express', 'Socket.io', 'Tailwind CSS', 'Cloudinary'],
      liveDemo: 'https://your-chatbot.com',
      github: 'https://github.com/yourusername/chatbot'
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section 
      id="projects" 
      className={`projects-section ${darkMode ? 'dark' : 'light'}`} 
      ref={ref}
    >
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
          
          <div className="projects-slider-wrapper">
            <button className="projects-slider-btn prev" onClick={prevSlide} aria-label="Previous project">
              <FaChevronLeft />
            </button>
            
            <div className="projects-slider-track">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="project-slide"
                >
                  <div className="project-card">
                    <div className="project-image-container">
                      <img 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].title}
                        className="project-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/64ffda?text=Project+Image';
                        }}
                      />
                      <div className="project-overlay">
                        <div className="project-links">
                          <a 
                            href={projects[currentIndex].liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link live-demo"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                          <a 
                            href={projects[currentIndex].github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link github"
                            title="GitHub Repository"
                          >
                            <FaGithub /> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-info">
                      <h3 className="project-title">{projects[currentIndex].title}</h3>
                      <p className="project-description">{projects[currentIndex].description}</p>
                      <div className="project-tech-stack">
                        {projects[currentIndex].tech.map((tech, techIndex) => (
                          <span key={techIndex} className="project-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button className="projects-slider-btn next" onClick={nextSlide} aria-label="Next project">
              <FaChevronRight />
            </button>
          </div>
          
          <div className="projects-slider-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;