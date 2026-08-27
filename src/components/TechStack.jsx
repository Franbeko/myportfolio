import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconCloud } from '@/components/ui/icon-cloud';

const TechStack = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fixed icon slugs - using proper Simple Icons names
  const slugs = [
    "react",
    "vite",
    "mongodb",
    "node.js",
    "html5",
    "css3",
    "tailwindcss",
    "javascript",
    "php",
    "mysql",
    "phpmyadmin",
    "visualstudiocode",
    "github",
    "vercel",
    "wordpress",
    "thunderbird",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

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
          
          <div className="icon-cloud-wrapper">
            <IconCloud images={images} showControl={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;