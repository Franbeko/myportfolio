import { useState } from 'react';

const MarqueeSlider = ({ darkMode }) => {
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    { id: 1, image: '/projects/project1.png', },
    { id: 2, image: '/projects/project2.png', },
    { id: 3, image: '/projects/project3.png', },
    { id: 4, image: '/projects/project4.png', },
    { id: 5, image: '/projects/project5.png', },
    { id: 6, image: '/projects/project6.png', },
    { id: 7, image: '/projects/project7.png', },
    { id: 8, image: '/projects/project8.png', },
  ];

  // Split projects into 3 columns
  const column1Projects = projects.filter((_, index) => index % 3 === 0);
  const column2Projects = projects.filter((_, index) => index % 3 === 1);
  const column3Projects = projects.filter((_, index) => index % 3 === 2);

  // Duplicate projects for seamless infinite scroll (need 3 copies for smooth loop)
  const duplicateColumn1 = [...column1Projects, ...column1Projects, ...column1Projects];
  const duplicateColumn2 = [...column2Projects, ...column2Projects, ...column2Projects];
  const duplicateColumn3 = [...column3Projects, ...column3Projects, ...column3Projects];

  // Handle pause on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section className={`marquee-slider ${darkMode ? 'dark' : 'light'}`}>
      <div className="marquee-container">
        {/* Section Header */}
        <div className="marquee-header">
          <h2 className="section-title">Projects That Define Me</h2>
          <p className="section-subtitle">
            Each project represents a step in my journey — from concept to deployment
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="marquee-grid">
          {/* Column 1 - Moving Up */}
          <div 
            className="marquee-column"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`marquee-vertical marquee-up ${isPaused ? 'paused' : ''}`}>
              {duplicateColumn1.map((project, index) => (
                <div key={`col1-${index}`} className="marquee-card">
                  <div className="marquee-card-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="marquee-card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/1a1a1a/64ffda?text=${project.title}`;
                      }}
                    />
                  </div>
                  <div className="marquee-card-content">
                    <h4 className="marquee-card-title">{project.title}</h4>
                    <p className="marquee-card-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Moving Down */}
          <div 
            className="marquee-column"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`marquee-vertical marquee-down ${isPaused ? 'paused' : ''}`}>
              {duplicateColumn2.map((project, index) => (
                <div key={`col2-${index}`} className="marquee-card">
                  <div className="marquee-card-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="marquee-card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/1a1a1a/64ffda?text=${project.title}`;
                      }}
                    />
                  </div>
                  <div className="marquee-card-content">
                    <h4 className="marquee-card-title">{project.title}</h4>
                    <p className="marquee-card-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Moving Up */}
          <div 
            className="marquee-column"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`marquee-vertical marquee-up ${isPaused ? 'paused' : ''}`}>
              {duplicateColumn3.map((project, index) => (
                <div key={`col3-${index}`} className="marquee-card">
                  <div className="marquee-card-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="marquee-card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/1a1a1a/64ffda?text=${project.title}`;
                      }}
                    />
                  </div>
                  <div className="marquee-card-content">
                    <h4 className="marquee-card-title">{project.title}</h4>
                    <p className="marquee-card-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider;