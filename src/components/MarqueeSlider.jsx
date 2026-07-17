import { useState, useEffect, useRef } from 'react';

const MarqueeSlider = ({ darkMode }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const marqueeRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Force animation to start on mount
    const timer = setTimeout(() => {
      if (marqueeRef.current) {
        marqueeRef.current.style.animationPlayState = 'running';
      }
    }, 100);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  const projects = [
    { id: 1, image: '/projects/project1.png'},
    { id: 2, image: '/projects/project2.png'},
    { id: 3, image: '/projects/project3.png'},
    { id: 4, image: '/projects/project4.png'},
    { id: 5, image: '/projects/project5.png'},
    { id: 6, image: '/projects/project6.png'},
    { id: 7, image: '/projects/project7.png'},
    { id: 8, image: '/projects/project8.png'},
  ];

  // Split projects into 3 columns for desktop, 2 for tablet, 1 for mobile
  const getColumnProjects = () => {
    if (isMobile) {
      // For mobile, put all projects in one column but duplicate for smooth scrolling
      return [projects, projects, projects];
    }
    // For desktop, split into 3 columns
    const col1 = projects.filter((_, index) => index % 3 === 0);
    const col2 = projects.filter((_, index) => index % 3 === 1);
    const col3 = projects.filter((_, index) => index % 3 === 2);
    return [col1, col2, col3];
  };

  const [col1Projects, col2Projects, col3Projects] = getColumnProjects();

  // Duplicate projects for seamless infinite scroll
  const duplicateCol1 = [...col1Projects, ...col1Projects, ...col1Projects];
  const duplicateCol2 = [...col2Projects, ...col2Projects, ...col2Projects];
  const duplicateCol3 = [...col3Projects, ...col3Projects, ...col3Projects];

  // Handle pause on hover/touch with better mobile support
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsPaused(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsPaused(false);
    }
  };
  
  const handleTouchStart = () => {
    // Only pause on touch for a moment, then resume
    setIsPaused(true);
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
  };
  
  const handleTouchEnd = () => {
    // Resume after a short delay on touch end
    touchTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 300);
  };

  // Get the appropriate animation class based on column index
  const getAnimationClass = (index) => {
    // Column 1 and 3 go up, Column 2 goes down
    if (index === 0 || index === 2) {
      return 'marquee-up';
    }
    return 'marquee-down';
  };

  // Determine grid columns based on device
  const getGridClass = () => {
    if (isMobile) return 'marquee-grid-single';
    return 'marquee-grid';
  };

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
        <div className={getGridClass()}>
          {/* Column 1 - Moving Up */}
          <div 
            className="marquee-column"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={marqueeRef}
              className={`marquee-vertical ${getAnimationClass(0)} ${isPaused ? 'paused' : ''}`}
            >
              {duplicateCol1.map((project, index) => (
                <div key={`col1-${index}`} className="marquee-card">
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
            <div 
              ref={marqueeRef}
              className={`marquee-vertical ${getAnimationClass(1)} ${isPaused ? 'paused' : ''}`}
            >
              {duplicateCol2.map((project, index) => (
                <div key={`col2-${index}`} className="marquee-card">
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
            <div 
              ref={marqueeRef}
              className={`marquee-vertical ${getAnimationClass(2)} ${isPaused ? 'paused' : ''}`}
            >
              {duplicateCol3.map((project, index) => (
                <div key={`col3-${index}`} className="marquee-card">
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