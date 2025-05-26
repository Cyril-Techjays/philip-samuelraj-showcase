
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
      // Show text after curtain comes down
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 500);

      // Start pulling curtain back up at 2 seconds
      const exitTimer = setTimeout(() => {
        setStartExit(true);
        setShowText(false);
      }, 2000);

      // Complete navigation after curtain is fully up (3 seconds total)
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 3000);

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

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-700 ease-in-out ${
        isVisible && !startExit ? 'translate-y-0' : '-translate-y-full'
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
