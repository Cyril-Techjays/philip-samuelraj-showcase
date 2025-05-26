
import { useState, useEffect } from "react";

interface CurtainProps {
  isVisible: boolean;
  sectionName: string;
  onComplete: () => void;
}

type AnimationPhase = 'hidden' | 'down' | 'up';

const Curtain = ({ isVisible, sectionName, onComplete }: CurtainProps) => {
  const [showText, setShowText] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('hidden');

  useEffect(() => {
    if (isVisible) {
      // Mount the component
      setIsMounted(true);
      setAnimationPhase('hidden');
      
      // Start slide down animation
      const slideDownTimer = setTimeout(() => {
        setAnimationPhase('down');
      }, 50);

      // Show text after curtain slides down
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000); // 1 second for slide down animation

      // Start hiding text
      const hideTimer = setTimeout(() => {
        setShowText(false);
      }, 2500); // Show text for 1.5 seconds

      // Start slide up animation
      const slideUpTimer = setTimeout(() => {
        setAnimationPhase('up');
      }, 3000); // Start sliding up after 3 seconds

      // Complete the animation and unmount
      const completeTimer = setTimeout(() => {
        setIsMounted(false);
        onComplete();
      }, 4000); // Unmount after slide up animation completes

      return () => {
        clearTimeout(slideDownTimer);
        clearTimeout(textTimer);
        clearTimeout(hideTimer);
        clearTimeout(slideUpTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  // Don't render if not mounted
  if (!isMounted && !isVisible) {
    return null;
  }

  const getTransformClass = () => {
    switch (animationPhase) {
      case 'hidden':
        return '-translate-y-full';
      case 'down':
        return 'translate-y-0';
      case 'up':
        return '-translate-y-full';
      default:
        return '-translate-y-full';
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center transition-transform duration-1000 ${getTransformClass()}`}
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
