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
  SiWordpress
} from 'react-icons/si';

// Generate random values outside the component (only once when file loads)
const generateRandomOffsets = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      offsetX: (Math.random() - 0.5) * 30,
      offsetY: (Math.random() - 0.5) * 30,
      duration: 8 + Math.random() * 6,
      rotation: (Math.random() - 0.5) * 15,
    });
  }
  return result;
};

// Tech stack icons - defined outside component
const techs = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
  { name: 'Express', icon: <SiExpress />, color: '#000000' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
  { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
  { name: 'PhpMyAdmin', icon: <SiPhpmyadmin />, color: '#6C78AF' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
  { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
  { name: 'SharePoint', icon: <FaCode />, color: '#0078D4' },
  { name: 'Axure', icon: <FaCode />, color: '#33B3FF' },
];

// Pre-generate random offsets
const randomOffsets = generateRandomOffsets(techs.length);

const TechStack = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Create floating animation with controlled spacing
  const getFloatingStyle = (index) => {
    const total = techs.length;
    // Distribute icons evenly in a circle with larger radius for more spacing
    const angle = (index / total) * 360 - 90;
    const radius = 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    // Use pre-generated random offsets
    const { offsetX, offsetY, duration, rotation } = randomOffsets[index] || { 
      offsetX: 0, 
      offsetY: 0, 
      duration: 10,
      rotation: 0 
    };
    
    const delay = (index * 0.2) % 2.5;
    
    return {
      '--x': `${x + offsetX}px`,
      '--y': `${y + offsetY}px`,
      '--rotation': `${rotation}deg`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  };

  return (
    <section className={`tech-stack-section ${darkMode ? 'dark' : 'light'}`} ref={ref}>
      <div className="tech-stack-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Modern tools for modern solutions.</p>
          
          <div className="tech-stack-grid">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-stack-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="tech-stack-icon-wrapper">
                  <div 
                    className="tech-stack-icon floating"
                    style={{
                      ...getFloatingStyle(index),
                      color: tech.color,
                    }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                </div>
                <span className="tech-stack-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;