
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [startEntry, setStartEntry] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Reset states and force render
      setShouldRender(true);
      setShowText(false);
      setStartEntry(false);
      setStartExit(false);
      
      // Start entry animation immediately
      const entryTimer = setTimeout(() => {
        setStartEntry(true);
      }, 50); // Small delay to ensure component is rendered

      // Show text after curtain comes down (1s)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      // Start pulling curtain back up at 3 seconds
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
        clearTimeout(entryTimer);
        clearTimeout(textTimer);
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Don't render when animation is not active
  if (!shouldRender) {
    return null;
  }

  // Three-phase animation logic:
  // Phase 1: Slide down from top (translateY(-100%) to translateY(0%))
  // Phase 2: Stay down with text visible
  // Phase 3: Slide up to top (translateY(0%) to translateY(-100%))
  const getTransform = () => {
    if (startExit) {
      return 'translateY(-100%)'; // Phase 3: slide up
    } else if (startEntry) {
      return 'translateY(0%)'; // Phase 2: stay down
    } else {
      return 'translateY(-100%)'; // Phase 1: start position (top)
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
      style={{
        transform: getTransform(),
        transition: 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      <h1 
        className="text-white text-4xl md:text-6xl font-light tracking-wide"
        style={{
          opacity: showText ? 1 : 0,
          transition: 'opacity 500ms ease-in-out'
        }}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default Curtain;
