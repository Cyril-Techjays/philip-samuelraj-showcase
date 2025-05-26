import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Mount the component
      setIsMounted(true);
      
      // Show text after curtain slides down
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000); // 1 second for slide down animation

      // Start hiding
      const hideTimer = setTimeout(() => {
        setShowText(false);
      }, 2500); // Show text for 1.5 seconds

      // Trigger slide up and complete
      const completeTimer = setTimeout(() => {
        setIsMounted(false);
        // Wait for slide up animation to complete
        setTimeout(onComplete, 1000);
      }, 3000); // Start sliding up after 3 seconds

      return () => {
        clearTimeout(textTimer);
        clearTimeout(hideTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Don't render if not mounted
  if (!isMounted && !isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-1000 ${
        isMounted ? 'translate-y-0' : '-translate-y-full'
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