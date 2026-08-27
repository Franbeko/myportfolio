import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MarqueeSlider = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Your project images - update these paths to match your actual images
  const projects = [
    { id: 1, image: '/projects/project1.png', title: 'Growing Liberia\'s Agricultural Future' },
    { id: 2, image: '/projects/project2.png', title: 'AI Better Care' },
    { id: 3, image: '/projects/project3.png', title: 'Digital Transformation' },
    { id: 4, image: '/projects/project4.png', title: 'Health Innovation' },
    { id: 5, image: '/projects/project5.png', title: 'Project 5' },
    { id: 6, image: '/projects/project6.png', title: 'Project 6' },
    { id: 7, image: '/projects/project7.png', title: 'Project 7' },
    { id: 8, image: '/projects/project8.png', title: 'Project 8' },
    { id: 9, image: '/projects/project9.png', title: 'Project 9' },
  ];

  // Create three columns for the marquee
  const col1 = projects.filter((_, i) => i % 3 === 0);
  const col2 = projects.filter((_, i) => i % 3 === 1);
  const col3 = projects.filter((_, i) => i % 3 === 2);

  // Duplicate for seamless scrolling
  const renderItems = (items) => {
    return [...items, ...items, ...items].map((project, index) => (
      <div key={`${project.id}-${index}`} className="marquee-card">
        <div className="marquee-card-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="marquee-card-image"
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x300/1a1a1a/64ffda?text=${project.title}`;
            }}
          />
        </div>
        <div className="marquee-card-title-overlay">
          <span>{project.title}</span>
        </div>
      </div>
    ));
  };

  return (
    <section className={`marquee-slider ${darkMode ? 'dark' : 'light'}`} ref={ref}>
      <div className="marquee-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="marquee-header"
        >
          {/* <h2 className="section-title">Projects That Define Me</h2>
          <p className="section-subtitle">
            Each project represents a step in my journey — from concept to deployment
          </p> */}
        </motion.div>

        <div className="marquee-grid">
          {/* Column 1 - Moving Up */}
          <div className="marquee-column">
            <div className="marquee-vertical marquee-up">
              {renderItems(col1)}
            </div>
          </div>

          {/* Column 2 - Moving Down */}
          <div className="marquee-column">
            <div className="marquee-vertical marquee-down">
              {renderItems(col2)}
            </div>
          </div>

          {/* Column 3 - Moving Up */}
          <div className="marquee-column">
            <div className="marquee-vertical marquee-up">
              {renderItems(col3)}
            </div>
          </div>
        </div>

        {/* Mobile Single Column */}
        <div className="marquee-grid-single">
          <div className="marquee-column">
            <div className="marquee-vertical marquee-up">
              {renderItems(projects)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider;