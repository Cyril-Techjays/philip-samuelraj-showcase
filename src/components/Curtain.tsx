
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Reset states
      setShowText(false);
      setStartExit(false);
      
      // Show text after curtain comes down (0.5s)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 500);

      // Start pulling curtain back up at 1.5 seconds (after navigation happens at 1s)
      const exitTimer = setTimeout(() => {
        setStartExit(true);
        setShowText(false);
      }, 1500);

      // Complete animation after curtain is fully up (2.5 seconds total)
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2500);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    } else {
      // Reset states when not visible
      setShowText(false);
      setStartExit(false);
    }
  }, [isVisible, onComplete]);

  if (!isVisible && !startExit) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        !isVisible || startExit ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <h1 className={`text-white text-4xl md:text-6xl font-light tracking-wide transition-opacity duration-300 ${
        showText ? 'opacity-100' : 'opacity-0'
      }`}>
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
