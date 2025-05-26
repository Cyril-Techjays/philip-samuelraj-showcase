
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Component should render and start animation
      setShouldRender(true);
      setShowText(false);
      setStartExit(false);
      
      // Show text after curtain comes down (1s)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      // Start pulling curtain back up at 3 seconds (after navigation happens at 2s)
      const exitTimer = setTimeout(() => {
        setStartExit(true);
        setShowText(false);
      }, 3000);

      // Complete animation after curtain is fully up (4 seconds total)
      const completeTimer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 4000);

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

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: !isVisible || startExit ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      <h1 className={`text-white text-4xl md:text-6xl font-light tracking-wide transition-opacity duration-500 ease-in-out ${
        showText ? 'opacity-100' : 'opacity-0'
      }`}>
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
