import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Value = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      id: 1,
      title: 'Over 4+ years of experience',
      icon: '/memojis/francis-memoji.png'
    },
    {
      id: 2,
      title: 'Team leadership & collaboration',
      icon: '/memojis/francis-laptop.png'
    },
    {
      id: 3,
      title: 'Problems Solving with Innovative Solutions',
      icon: '/memojis/francis-thinking.png'
    },
    {
      id: 4,
      title: 'Ideas brought to life through code',
      icon: '/memojis/francis-coding.png'
    }
  ];

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
          <h2 className="section-title">Why Work With Me?</h2>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;