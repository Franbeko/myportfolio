import { useState, useEffect } from 'react';

const MarqueeSlider = ({ darkMode }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    { id: 1, image: '/projects/project1.png', title: 'Project 1' },
    { id: 2, image: '/projects/project2.png', title: 'Project 2' },
    { id: 3, image: '/projects/project3.png', title: 'Project 3' },
    { id: 4, image: '/projects/project4.png', title: 'Project 4' },
    { id: 5, image: '/projects/project5.png', title: 'Project 5' },
    { id: 6, image: '/projects/project6.png', title: 'Project 6' },
    { id: 7, image: '/projects/project7.png', title: 'Project 7' },
    { id: 8, image: '/projects/project8.png', title: 'Project 8' },
  ];

  // For mobile, use fewer items in the loop for better performance
  const getDisplayProjects = () => {
    const count = isMobile ? 4 : 8;
    return projects.slice(0, count);
  };

  const displayProjects = getDisplayProjects();
  // Need at least 3 copies for seamless loop
  const doubledProjects = [...displayProjects, ...displayProjects, ...displayProjects];

  // Handle pause on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section className={`marquee-slider ${darkMode ? 'dark' : 'light'}`}>
      <div className="marquee-container">
        {/* Section Title */}
        <h2 className="section-title">What's Chosen Me?</h2>
        <p className="section-subtitle">
          Projects that have shaped my journey and fueled my passion for technology
        </p>
        
        {/* First Row - Moving Left */}
        <div 
          className="marquee-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`marquee-track marquee-left ${isPaused ? 'paused' : ''}`}>
            {doubledProjects.map((project, index) => (
              <div key={`left-${index}`} className="marquee-item">
                <div className="marquee-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title || 'Project'}
                    className="marquee-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/1a1a1a/64ffda?text=${project.title || 'Project'}`;
                    }}
                  />
                  <div className="marquee-overlay">
                    <h4 className="marquee-title">{project.title || 'Project'}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div 
          className="marquee-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`marquee-track marquee-right ${isPaused ? 'paused' : ''}`}>
            {doubledProjects.map((project, index) => (
              <div key={`right-${index}`} className="marquee-item">
                <div className="marquee-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title || 'Project'}
                    className="marquee-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/1a1a1a/64ffda?text=${project.title || 'Project'}`;
                    }}
                  />
                  <div className="marquee-overlay">
                    <h4 className="marquee-title">{project.title || 'Project'}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider;