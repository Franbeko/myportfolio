import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ isPlaying, toggleMusic }) => {
  return (
    <button 
      className={`music-player ${isPlaying ? 'playing' : ''}`} 
      onClick={toggleMusic}
      aria-label="Toggle music"
    >
      {isPlaying ? <FaPause /> : <FaMusic />}
    </button>
  );
};

export default MusicPlayer;