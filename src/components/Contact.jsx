import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  // Formspree form ID - Your actual form ID
  const FORMSPREE_ID = 'xpqvzakj';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
          setIsSubmitting(false);
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="contact" className={`contact-section ${darkMode ? 'dark' : 'light'}`} ref={ref}>
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="contact-wrapper"
          >
            {/* Left Column - Text & Button */}
            <div className="contact-left">
              <h2 className="contact-title">Say Hello 👋</h2>
              <p className="contact-subtitle">
                I'm always open to new opportunities, ideas, or just a good conversation.
              </p>
              <button 
                className="contact-cta-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Message Me
              </button>
            </div>

            {/* Right Column - Memoji Image */}
            <div className="contact-right">
              <div className="contact-memoji-container">
                <img 
                  src="/francis-thumbsup.png" 
                  alt="Francis" 
                  className="contact-memoji"
                />
                <div className="contact-memoji-glow"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content" ref={modalRef}>
            <button 
              className="modal-close-btn"
              onClick={() => {
                setIsModalOpen(false);
                setIsSuccess(false);
                setIsSubmitting(false);
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
              }}
            >
              <FaTimes />
            </button>

            {isSuccess ? (
              <div className="modal-success">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <>
                <h3 className="modal-title">Get in Touch</h3>
                <p className="modal-subtitle">Fill in the form below and I'll get back to you as soon as possible.</p>
                
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="modal-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;