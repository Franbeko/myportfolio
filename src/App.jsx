import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeSlider from './components/MarqueeSlider';
import Value from './components/Value';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/music/J._Cole_-_Love_Yours_(mp3.pm).mp3'));

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    
    // Handle audio end to reset playing state if needed
    const handleEnded = () => {
      setIsPlaying(false);
    };
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        isPlaying={isPlaying} 
        toggleMusic={toggleMusic} 
      />
      <Hero 
        darkMode={darkMode} 
        isPlaying={isPlaying} 
        toggleMusic={toggleMusic} 
      />
      <MarqueeSlider darkMode={darkMode} />
      <Value darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <BottomNav darkMode={darkMode} />
    </div>
  );
}

export default App;