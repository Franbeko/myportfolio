import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaWordpress, 
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaCode
} from 'react-icons/fa';
import { 
  SiVite, 
  SiMongodb, 
  SiGithub,
  SiTailwindcss,
  SiMysql,
  SiPhpmyadmin
} from 'react-icons/si';

// Generate random values outside the component (only once when file loads)
const generateRandomOffsets = (count) => {
  const randomOffset = 15;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      offsetX: (Math.random() - 0.5) * randomOffset,
      offsetY: (Math.random() - 0.5) * randomOffset,
      duration: 10 + Math.random() * 4,
    });
  }
  return result;
};

// Tech stack icons - defined outside component
const techIcons = [
  { icon: <FaReact />, color: '#61DAFB', label: 'React' },
  { icon: <SiVite />, color: '#646CFF', label: 'Vite' },
  { icon: <FaNodeJs />, color: '#68A063', label: 'Node.js' },
  { icon: <SiMongodb />, color: '#47A248', label: 'MongoDB' },
  { icon: <FaCode />, color: '#007ACC', label: 'VS Code' },
  { icon: <SiGithub />, color: '#181717', label: 'GitHub' },
  { icon: <FaWordpress />, color: '#21759B', label: 'WordPress' },
  { icon: <FaHtml5 />, color: '#E34F26', label: 'HTML5' },
  { icon: <SiTailwindcss />, color: '#06B6D4', label: 'Tailwind CSS' },
  { icon: <FaCss3Alt />, color: '#1572B6', label: 'CSS' },
  { icon: <FaJsSquare />, color: '#F7DF1E', label: 'JavaScript' },
  { icon: <FaPhp />, color: '#777BB4', label: 'PHP' },
  { icon: <SiMysql />, color: '#4479A1', label: 'MySQL' },
  { icon: <SiPhpmyadmin />, color: '#6C78AF', label: 'PhpMyAdmin' },
];

// Pre-generate random offsets
const randomOffsets = generateRandomOffsets(techIcons.length);

const Value = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      id: 1,
      title: 'Over 3+ years of experience',
      icon: '/francis-memoji.png'
    },
    {
      id: 2,
      title: 'Team leadership & collaboration',
      icon: '/francis-laptop.png'
    },
    {
      id: 3,
      title: 'Problems Solving with Innovative Solutions',
      icon: '/francis-thinking.png'
    },
    {
      id: 4,
      title: 'Ideas brought to life through code',
      icon: '/francis-coding.png'
    }
  ];

  // Create gentle floating animation with controlled spacing
  const getFloatingStyle = (index) => {
    const total = techIcons.length;
    // Distribute icons evenly in a circle with SMALL radius
    const angle = (index / total) * 360 - 90;
    const radius = 80;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    // Use pre-generated random offsets
    const { offsetX, offsetY, duration } = randomOffsets[index] || { offsetX: 0, offsetY: 0, duration: 12 };
    
    const delay = (index * 0.15) % 2;
    
    return {
      '--x': `${x + offsetX}px`,
      '--y': `${y + offsetY}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  };

  // Check if icon is an image path
  const isImageIcon = (icon) => {
    return typeof icon === 'string' && (icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.svg') || icon.endsWith('.webp'));
  };

  return (
    <section className={`value-section ${darkMode ? 'dark' : 'light'}`} ref={ref}>
      <div className="value-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose Me?</h2>
          <p className="section-description">Passionate about creating impactful digital solutions.</p>
          
          <div className="value-grid">
            {values.map((item, index) => (
              <motion.div
                key={item.id}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="value-icon">
                  {isImageIcon(item.icon) ? (
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="value-memoji-img"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="value-title">{item.title}</h3>
              </motion.div>
            ))}
            
            {/* Tech Stack Card with Gentle Floating Icons */}
            <motion.div
              className="value-card tech-stack-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="tech-stack-container">
                <div className="tech-icons-wrapper">
                  {techIcons.map((tech, index) => (
                    <div
                      key={index}
                      className="floating-tech-icon"
                      style={{
                        ...getFloatingStyle(index),
                        color: tech.color,
                      }}
                      title={tech.label}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
                <div className="tech-stack-label">
                  <span className="tech-stack-title">Tools I Work With</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;