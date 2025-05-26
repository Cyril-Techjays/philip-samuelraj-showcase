
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Reset states
      setSlideUp(false);
      setShowText(false);
      
      // Show text after curtain slides down
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      // Hide text
      const hideTimer = setTimeout(() => {
        setShowText(false);
      }, 2500);

      // Start slide up animation
      const slideUpTimer = setTimeout(() => {
        setSlideUp(true);
      }, 3000);

      // Complete after slide up animation finishes
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 4000);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(hideTimer);
        clearTimeout(slideUpTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-1000 ${
        slideUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <h1 
        className={`text-white text-4xl md:text-6xl font-light tracking-wide transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
