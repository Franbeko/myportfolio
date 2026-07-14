import { useState } from 'react';

const MarqueeSlider = ({ darkMode }) => {
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    { id: 1, image: '/projects/project1.png' },
    { id: 2, image: '/projects/project2.png' },
    { id: 3, image: '/projects/project3.png' },
    { id: 4, image: '/projects/project4.png' },
    { id: 5, image: '/projects/project5.png' },
    { id: 6, image: '/projects/project6.png' },
    { id: 7, image: '/projects/project7.png' },
    { id: 8, image: '/projects/project8.png' },
  ];

  // Duplicate projects for seamless loop (needs at least 2 sets)
  const doubledProjects = [...projects, ...projects, ...projects];

  // Handle pause on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section className={`marquee-slider ${darkMode ? 'dark' : 'light'}`}>
      <div className="marquee-container">
        
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
                    alt={project.title}
                    className="marquee-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200/1a1a1a/64ffda?text=Project';
                    }}
                  />
                  <div className="marquee-overlay">
                    <h4 className="marquee-title">{project.title}</h4>
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
                    alt={project.title}
                    className="marquee-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200/1a1a1a/64ffda?text=Project';
                    }}
                  />
                  <div className="marquee-overlay">
                    <h4 className="marquee-title">{project.title}</h4>
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