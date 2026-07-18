import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaGithub,
  FaCode
} from 'react-icons/fa';
import { 
  SiVite, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiMysql,
  SiPhpmyadmin,
  SiVercel,
  SiWordpress,
  SiTailwindcss
} from 'react-icons/si';

const TechStack = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techs = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'phpMyAdmin', icon: <SiPhpmyadmin />, color: '#6C78AF' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
  ];

  // Split techs into two rows
  const midPoint = Math.ceil(techs.length / 2);
  const firstRow = [...techs.slice(0, midPoint), ...techs.slice(0, midPoint)];
  const secondRow = [...techs.slice(midPoint), ...techs.slice(midPoint)];

  return (
    <section className={`tech-stack-section ${darkMode ? 'dark' : 'light'}`} ref={ref}>
      <div className="tech-stack-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills That I Have</h2>
          <p className="section-subtitle">These are the technologies I've worked with</p>
          
          {/* First Row - Moving Left */}
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee-track tech-marquee-left">
              {firstRow.map((tech, index) => (
                <div key={`row1-${index}`} className="tech-marquee-item">
                  <span className="tech-marquee-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="tech-marquee-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee-track tech-marquee-right">
              {secondRow.map((tech, index) => (
                <div key={`row2-${index}`} className="tech-marquee-item">
                  <span className="tech-marquee-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="tech-marquee-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;