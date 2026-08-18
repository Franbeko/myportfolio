import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      description: 'Created using MySQL & WordPress, this platform supports payments and real-time market data for investment management.',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
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
          <p className="section-subtitle">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/64ffda?text=Project+Image';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-demo"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a
                        href={project.github}
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
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;