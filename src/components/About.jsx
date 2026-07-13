import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase,  
  FaJsSquare, 
  FaPhp, 
  FaGithub,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaRocket,
  FaGraduationCap
} from 'react-icons/fa';
import { SiMysql, SiPhpmyadmin, SiVite, SiTailwindcss } from 'react-icons/si';

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hardSkills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    {name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PhpMyAdmin', icon: <SiPhpmyadmin /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'VS Code', icon: <FaCode />}
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Team Collaboration', icon: <FaUsers /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'End-to-End Ownership', icon: <FaRocket /> },
    { name: 'Continuous Learning', icon: <FaGraduationCap /> }
  ];

  return (
    <section 
      id="about" 
      className={`about-section ${darkMode ? 'dark' : 'light'}`} 
      ref={ref}
    >
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Memoji Image */}
          <div className="about-memoji-container">
            <img 
              src="/francis-memoji.png" 
              alt="Francis" 
              className="about-memoji"
            />
          </div>

          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a <span className="highlight-text">Fullstack Developer</span> with a strong focus on 
                frontend and WordPress development. I combine technical expertise with creative design 
                to build modern, high-performance websites that are both functional and visually engaging.
              </p>
              <p>
                With over 3 years of experience, I've worked on a wide range of projects - from 
                custom WordPress themes to complex web applications. My approach emphasizes clean code, 
                performance optimization, and responsive design.
              </p>
              <p>
                I believe in creating digital experiences that not only look great but also deliver 
                real value to users and businesses alike.
              </p>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h3 className="skills-title">Tech Stack & Expertise</h3>
              
              <div className="skills-grid">
                {/* Hard Skills Card */}
                <div className="skills-card">
                  <div className="skills-card-header">
                    <span className="skills-card-icon">⚡</span>
                    <h4 className="skills-card-title">Hard Skills</h4>
                  </div>
                  <ul className="skills-list">
                    {hardSkills.map((skill, index) => (
                      <li key={index} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Soft Skills Card */}
                <div className="skills-card">
                  <div className="skills-card-header">
                    <span className="skills-card-icon">🌟</span>
                    <h4 className="skills-card-title">Soft Skills</h4>
                  </div>
                  <ul className="skills-list">
                    {softSkills.map((skill, index) => (
                      <li key={index} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="resume-download">
                <a 
                  href="/resume/Francis_Kojo_Haizel_Resume_pdf.pdf" 
                  download 
                  className="resume-btn"
                >
                  <FaDownload className="resume-icon" />
                  Download My Resume
                </a>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">3+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;