import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in full-stack & WordPress development using React, Node.js, and MongoDB. I work with MySQL, PhpMyAdmin, and modern frontend frameworks like Tailwind CSS and Vite. I also leverage AI-assisted development to ship projects faster—without sacrificing code quality. Currently expanding into cybersecurity to build even more secure applications.'
    },
    {
      id: 2,
      question: 'How do you approach a new project?',
      answer: 'I start by understanding your goals, target audience, and technical requirements. I then create a detailed plan with timelines and milestones. During development, I focus on clean code, performance optimization, and responsive design. I use AI tools to accelerate prototyping and development while keeping you involved with regular updates and feedback sessions.'
    },
    {
      id: 3,
      question: 'Do you work with WordPress?',
      answer: 'Yes! WordPress is one of my core specialties—I\'ve built custom themes, plugins, and full WordPress solutions for businesses. I focus on creating optimized, secure, and scalable WordPress sites with clean code and intuitive admin interfaces. I also integrate custom PHP and MySQL features when needed.'
    },
    {
      id: 4,
      question: 'What is your availability?',
      answer: 'I\'m currently available for new projects and freelance opportunities. I work with clients worldwide and can adapt to different time zones. Whether you need a full project built from scratch, ongoing maintenance, or just some WordPress help—I\'m flexible. Let\'s chat about what you need!'
    },
    {
      id: 5,
      question: 'How do you handle responsive design?',
      answer: 'I follow a mobile-first approach, ensuring your website looks and works perfectly on all devices—from smartphones to large desktops. I use modern CSS techniques like Tailwind CSS to create responsive layouts that adapt seamlessly to different screen sizes. Every project I deliver is fully responsive out of the box.'
    },
    {
      id: 6,
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely! I offer post-launch support and maintenance packages to ensure your website stays up-to-date, secure, and performing optimally. This includes bug fixes, security updates, performance monitoring, and ongoing improvements as your business grows. Your success doesn\'t end at launch—it\'s just the beginning.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <section id="faq" className={`faq-section ${darkMode ? 'dark' : 'light'}`} ref={ref}>
      <div className="faq-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="faq-wrapper"
        >
          {/* Left Column - Memoji & Text */}
          <div className="faq-left">
            <div className="faq-memoji-container">
              <img 
                src="/memojis/francis-faq.png" 
                alt="Francis" 
                className="faq-memoji"
              />
            </div>
            <h2 className="faq-left-title">Got Questions? <span className="highlight-text">Let's Talk!</span></h2>
            <p className="faq-left-subtitle">
              Find answers to common questions about my work, process, and how we can collaborate.
            </p>
            <div className="faq-left-divider"></div>
            <p className="faq-left-footer">
              💡 Let's build something amazing together
            </p>
          </div>

          {/* Right Column - FAQ List */}
          <div className="faq-right">
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className={`faq-item-wrapper ${activeIndex === index ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="faq-columns">
                    <div 
                      className="faq-question-side"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="faq-question-content">
                        <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="faq-question">{faq.question}</h3>
                      </div>
                      <div className={`faq-toggle-icon ${activeIndex === index ? 'active' : ''}`}>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                      </div>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.div
                          className="faq-answer-side"
                          variants={faqVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <p className="faq-answer">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;